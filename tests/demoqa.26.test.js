const assert = require('assert');

Feature('demoqa 26');

Scenario('deve abrir Dynamic Properties', async ({ I }) => {
  I.amOnPage('/dynamic-properties');
  I.see('Dynamic Properties');
  I.wait(1);
});
