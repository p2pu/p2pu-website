import { API_ENDPOINTS } from '../constants'
import { compact } from 'lodash'

export default class ApiHelper {
  constructor(resourceType) {
    this.resourceType = resourceType;
    this.baseUrl = API_ENDPOINTS[resourceType].baseUrl;
    this.validParams = API_ENDPOINTS[resourceType].searchParams;
  }

  generateUrl(params) {
    const baseUrl = this.baseUrl;
    if (this.validParams && params) {
      const encodedParams = this.validParams.map((key) => {
        const value = params[key];
        if (!!value) {
          return `${key}=${encodeURIComponent(value)}`
        }
      })
      const queryString = compact(encodedParams).join('&');

      console.log('url', `${baseUrl}${queryString}`)
      return `${baseUrl}${queryString}`
    }

    return baseUrl;
  }

  fetchResource(opts) {
    const url = this.generateUrl(opts.params)

   $.ajax({
      url,
      dataType: 'JSONP',
      type: 'GET',
      success: (res) => {
        console.log('RESPONSE', res)
        opts.callback(res, opts);
      }
    });
  }
}