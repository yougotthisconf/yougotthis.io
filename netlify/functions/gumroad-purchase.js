const FormData = require('form-data')
const axios = require('axios')

const keys = [
  { old: 'sale_id', updated: 'sale_id' },
  { old: 'product_name', updated: 'product_name' },
  { old: 'sku_id', updated: 'sku' },
  { old: 'shipping_information[full_name]', updated: 'full_name' },
  { old: 'shipping_information[street_address]', updated: 'street_address' },
  { old: 'shipping_information[city]', updated: 'city' },
  { old: 'shipping_information[state]', updated: 'state' },
  { old: 'shipping_information[zip_code]', updated: 'zip_code' },
  { old: 'shipping_information[country]', updated: 'country' }
]

exports.handler = async event => {
  try {
    const params = Object.fromEntries(new URLSearchParams(event.body))
    const values = mergeObjects(keys.map(key => ({ [key.updated]: params[key.old] })))
    if(params.seller_id != process.env.GUMROAD_SELLER_ID) throw 'Could not validate request'

    console.log(`New sale of ${values.sku} to ${values.full_name}. Sale ID is ${values.sale_id}.`)

    const formData = objectToFormData(values)

    const { data } = await axios({
      method: 'POST',
      url: 'https://getform.io/f/534be5d3-9132-4da2-9b65-a62c3adbe676',
      data: formData,
      headers: formData.getHeaders()
    })

    return res({ message: 'ok' })
  } catch (error) {
    console.log({ error })
    return res(error, 500)
  }
}

const res = (body = {}, statusCode = 200) => {
  return { body: JSON.stringify(body), statusCode }
}

const mergeObjects = objects => {
  return objects.reduce((prev, curr) => ({ ...prev, ...curr }), {})
}

const objectToFormData = object => {
  const formData = new FormData()
  Object.keys(object).forEach(key => formData.append(key, object[key]))
  return formData
}
