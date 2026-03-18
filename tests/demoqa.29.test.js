const assert = require('assert');

Feature('demoqa 29');

Scenario('deve abrir pagina Alerts', async ({ I }) => {
  I.amOnPage('/alerts');
  I.see('Alerts');
  I.wait(1);
});
