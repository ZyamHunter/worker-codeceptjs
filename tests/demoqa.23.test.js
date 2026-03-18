const assert = require('assert');

Feature('demoqa 23');

Scenario('deve abrir Links', async ({ I }) => {
  I.amOnPage('/links');
  I.see('Links');
  I.wait(1);
});
