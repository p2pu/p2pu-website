export default class LearningCirclesSearch {
  static generateUrl(params) {
    console.log('params', params)
    const validParams = ['q', 'latitude', 'longitude', 'distance', 'active', 'limit', 'offset', 'city', 'signup'];
    let baseUrl = 'https://learningcircles.p2pu.org/api/learningcircles/?active=true';

    validParams.forEach((key) => {
      const value = params[key];
      if (value) {
        baseUrl += `&${key}=${encodeURIComponent(value)}`
      }
    })

    console.log('baseUrl', baseUrl)
    return baseUrl;
  }

  static fetchLearningCircles(opts) {
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