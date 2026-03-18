const assert = require('assert');

Feature('demoqa 01');

Scenario('deve abrir home e validar titulo', async ({ I }) => {
  I.amOnPage('/');
  I.seeInTitle('demosite');
  I.wait(1);
});
