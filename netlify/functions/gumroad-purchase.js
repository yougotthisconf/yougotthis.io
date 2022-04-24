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
    const values = keys.map(key => ({ [key.updated]: params[key.old] }))

    const { data } = await axios({
      method: 'POST',
      url: 'https://getform.io/f/534be5d3-9132-4da2-9b65-a62c3adbe676',
      data: values
    })

    return res({ message: 'ok' })
  } catch (error) {
    return res(error, 500)
  }
}

const res = (body = {}, statusCode = 200) => {
  return { body: JSON.stringify(body), statusCode }
}
