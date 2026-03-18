const assert = require('assert');

Feature('demoqa 05');

Scenario('deve ver card Widgets na home', async ({ I }) => {
  I.amOnPage('/');
  I.see('Widgets');
  I.wait(1);
});
