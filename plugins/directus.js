import { Directus } from '@directus/sdk';
import config from '../config'
const directus = new Directus(config.dataURL);

export default({ app }, inject) => {
    inject('directus', directus)
    const asset = (id) => `${config.dataURL}/assets/${id}`
    inject('asset', asset)
}