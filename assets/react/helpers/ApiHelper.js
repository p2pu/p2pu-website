import { API_ENDPOINTS } from '../constants'

export default class ApiHelper {
  constructor(resourceType) {
    this.resourceType = resourceType;
    this.baseUrl = API_ENDPOINTS[resourceType].baseUrl;
    this.validParams = API_ENDPOINTS[resourceType].searchParams;
  }

  generateUrl(params) {
    let baseUrl = this.baseUrl;

    this.validParams.forEach((key) => {
      const value = params[key];
      if (value) {
        baseUrl += `&${key}=${encodeURIComponent(value)}`
      }
    })

    console.log('baseUrl', baseUrl)
    return baseUrl;
  }

  fetchResource(opts) {
    const url = this.generateUrl(opts.params)

   $.ajax({
      url,
      dataType: 'JSONP',
      type: 'GET',
      success: (res) => {
        opts.callback(res, opts);
      }
    });
  }
}