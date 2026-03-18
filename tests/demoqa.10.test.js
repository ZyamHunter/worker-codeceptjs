const assert = require('assert');

Feature('demoqa 10');

Scenario('deve manter URL da home', async ({ I }) => {
  I.amOnPage('/');
  I.seeInCurrentUrl('demoqa.com');
  I.wait(1);
});
