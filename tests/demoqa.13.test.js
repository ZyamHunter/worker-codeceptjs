const assert = require('assert');

Feature('demoqa 13');

Scenario('deve abrir pagina Forms', async ({ I }) => {
  I.amOnPage('/forms');
  I.see('Forms');
  I.wait(1);
});
