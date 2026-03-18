const assert = require('assert');

Feature('demoqa 22');

Scenario('deve abrir Buttons', async ({ I }) => {
  I.amOnPage('/buttons');
  I.see('Buttons');
  I.wait(1);
});
