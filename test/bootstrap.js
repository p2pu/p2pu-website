const puppeteer = require('puppeteer-core');
const { expect } = require('chai');
let { browser, expect: expect_ } = global;
const globalVariables = Object.assign({}, { browser: browser, expect: expect_ });

// puppeteer options
const opts = {
  executablePath: '/usr/bin/google-chrome',
  timeout: 10000,
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
};

// expose variables
before (async function () {
  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
  global.TEST_SERVER_URL = process.env.TEST_SERVER_URL;
});

// close browser and reset global variables
after (function () {
  global.browser.close();

  global.browser = globalVariables.browser;
  global.expect = globalVariables.expect;
});
