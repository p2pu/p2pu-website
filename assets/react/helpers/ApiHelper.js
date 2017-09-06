import { API_ENDPOINTS } from '../constants'
import _ from 'lodash'

export default class ApiHelper {
  constructor(resourceType) {
    this.resourceType = resourceType;
    this.baseUrl = API_ENDPOINTS[resourceType].baseUrl;
    this.validParams = API_ENDPOINTS[resourceType].searchParams;
  }

  generateUrl(params) {
    const baseUrl = this.baseUrl;
    const encodedParams = this.validParams.map((key) => {
      const value = params[key];
      if (value && value.length > 0) {
        return `${key}=${encodeURIComponent(value)}`
      }
    })
    const queryString = _.compact(encodedParams).join('&');

    console.log('url', `${baseUrl}${queryString}`)
    return `${baseUrl}${queryString}`
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