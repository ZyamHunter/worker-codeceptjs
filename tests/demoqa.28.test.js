const assert = require('assert');

Feature('demoqa 28');

Scenario('deve abrir Browser Windows', async ({ I }) => {
  I.amOnPage('/browser-windows');
  I.see('Browser Windows');
  I.wait(1);
});
