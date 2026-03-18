const assert = require('assert');

Feature('demoqa 12');

Scenario('deve abrir pagina Elements', async ({ I }) => {
  I.amOnPage('/elements');
  I.see('Elements');
  I.wait(1);
});
