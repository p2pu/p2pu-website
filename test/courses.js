const fs = require('fs');
const url = require('url');

describe('when opening the courses page', function () {
  let page;

  before (async function () {
    page = await browser.newPage();
    let pageUrl = `${TEST_SERVER_URL}/en/learning-resources/`;
    await page.setRequestInterception(true);
    let apiUrl = 'https://learningcircles.p2pu.org/api/courses';
    let apiData = fs.readFileSync('./test/fixtures/courses.json');
    page.on('request', interceptedRequest => {
      if (interceptedRequest.url().startsWith(apiUrl)) {
        let requestUrl = new url.URL(interceptedRequest.url());
        let callback = requestUrl.searchParams.get('callback');
        let body = apiData;
        if (callback) {
          body = `${callback}(${apiData});`;
        }
        interceptedRequest.respond({
          status: 200,
          contentType: 'application/json',
          body: body,
        });
      } else {
        interceptedRequest.continue();
      }
    });

    await page.goto(pageUrl, {timeout: 0, waitUntil: 'networkidle0'});
  });

  after (async function () {
    await page.close();
  })

  it('should have the correct page title', async function () {
    let title = await page.title();
    expect(title).to.eql('Courses');
  });


  it('search field should have correct placeholder', async function () {
    let placeholder = await page.$eval('input.search-input', input => input.placeholder);
    expect(placeholder).to.equal("Title, subject, etc...");
  });

  it('there should be 10 courses in the search result', async function () {
    let courses = await page.$$('.search-results .result-item');
    expect(courses.length).to.equal(10);
  });

});

