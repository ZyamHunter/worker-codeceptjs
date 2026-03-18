exports.config = {
  tests: './tests/*.test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://demoqa.com',
      browser: 'chromium',
      show: false,
      waitForNavigation: 'domcontentloaded',
      windowSize: '1280x720',
      locale: 'en-US',
      userAgent: 'worker-codeceptjs/base',
      restart: true,
      keepCookies: false,
      keepBrowserState: false
    }
  },
  multiple: {
    profiles: {
      browsers: [
        {
          browser: 'chromium',
          windowSize: '1280x720',
          locale: 'en-US',
          userAgent: 'worker-codeceptjs/profile-1'
        },
        {
          browser: 'chromium',
          windowSize: '1366x768',
          locale: 'pt-BR',
          userAgent: 'worker-codeceptjs/profile-2'
        },
        {
          browser: 'chromium',
          windowSize: '1920x1080',
          locale: 'es-ES',
          userAgent: 'worker-codeceptjs/profile-3'
        }
      ]
    }
  },
  include: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  mocha: {},
  name: 'worker-codeceptjs'
};
