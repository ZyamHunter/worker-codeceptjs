const assert = require('assert');

Feature('demoqa 06');

Scenario('deve ver card Interactions na home', async ({ I }) => {
  I.amOnPage('/');
  I.see('Interactions');
  I.wait(1);
});
