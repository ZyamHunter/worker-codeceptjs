const assert = require('assert');

Feature('demoqa 19');

Scenario('deve abrir Check Box', async ({ I }) => {
  I.amOnPage('/checkbox');
  I.see('Check Box');
  I.wait(1);
});
