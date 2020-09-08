const fs = require('fs');
const url = require('url');

function makeInterceptor(urlMatch, data){
  return request => {
    if (urlMatch(request.url())) {
      let requestUrl = new url.URL(request.url());
      let callback = requestUrl.searchParams.get('callback');
      let body = data;
      if (callback) {
        body = `${callback}(${data});`;
      }
      request.respond({
        status: 200,
        contentType: 'application/json',
        body: body,
      });
    } else {
      request.continue();
    }
  }
}

describe('on the learning circles page', function () {
  let page;

  before (async function () {
    page = await browser.newPage();
    await page.setRequestInterception(true);
    let apiUrl = 'https://learningcircles.p2pu.org/api/learningcircles/';
    let apiData = fs.readFileSync('./test/fixtures/learning-circles.json');
    page.on('request', makeInterceptor(url => url.startsWith(apiUrl), apiData));
    let pageUrl = `${TEST_SERVER_URL}/en/learning-circles/`;
    await page.goto(pageUrl, {timeout: 0, waitUntil: 'networkidle0'});
  });

  after (async function () {
    await page.close();
  })

  it('should have the correct page title', async function () {
    let title = await page.title();
    expect(title).to.eql('Learning Circles');
  });


  it('search field should have correct placeholder', async function () {
    let placeholder = await page.$eval('input.search-input', input => input.placeholder);
    expect(placeholder).to.equal("Keyword, organization, facilitator, etc...");
  });

  it('Result tab header should indicate there are 10 learning circle open for signup', async function () {
    let tabHeader = await page.$eval('#react-tabs-0 > span', elem => elem.textContent);
    expect(tabHeader).to.equal('Open (10)');
  });

  // TODO: we should test this in the p2pu-search-cards package,
  // and here just test that the Search component is rendering with the right props
  it('there should be 21 learning circles in the search result', async function () {
    let courses = await page.$$('.search-results .result-item');
    expect(courses.length).to.equal(10);
  });

});

