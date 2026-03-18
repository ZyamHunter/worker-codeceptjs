const assert = require('assert');

Feature('demoqa 15');

Scenario('deve abrir pagina Widgets', async ({ I }) => {
  I.amOnPage('/widgets');
  I.see('Widgets');
  I.wait(1);
});
