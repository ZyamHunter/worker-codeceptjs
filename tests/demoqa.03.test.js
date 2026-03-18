const assert = require('assert');

Feature('demoqa 03');

Scenario('deve ver card Forms na home', async ({ I }) => {
  I.amOnPage('/');
  I.see('Forms');
  I.wait(1);
});
