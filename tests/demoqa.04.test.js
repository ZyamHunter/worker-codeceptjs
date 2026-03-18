const assert = require('assert');

Feature('demoqa 04');

Scenario('deve ver card Alerts Frame and Windows na home', async ({ I }) => {
  I.amOnPage('/');
  I.see('Alerts, Frame & Windows');
  I.wait(1);
});
