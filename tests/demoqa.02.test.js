const assert = require('assert');

Feature('demoqa 02');

Scenario('deve ver card Elements na home', async ({ I }) => {
  I.amOnPage('/');
  I.see('Elements');
  I.wait(1);
});
