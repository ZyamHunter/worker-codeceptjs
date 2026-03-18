const assert = require('assert');

Feature('demoqa 14');

Scenario('deve abrir pagina Alerts Windows', async ({ I }) => {
  I.amOnPage('/alertsWindows');
  I.see('Alerts, Frame & Windows');
  I.wait(1);
});
