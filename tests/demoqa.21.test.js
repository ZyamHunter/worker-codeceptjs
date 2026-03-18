const assert = require('assert');

Feature('demoqa 21');

Scenario('deve abrir Web Tables', async ({ I }) => {
  I.amOnPage('/webtables');
  I.see('Web Tables');
  I.wait(1);
});
