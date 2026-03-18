const assert = require('assert');

Feature('demoqa 16');

Scenario('deve abrir pagina Interactions', async ({ I }) => {
  I.amOnPage('/interaction');
  I.see('Interactions');
  I.wait(1);
});
