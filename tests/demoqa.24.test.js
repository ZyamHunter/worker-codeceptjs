const assert = require('assert');

Feature('demoqa 24');

Scenario('deve abrir Broken Links Images', async ({ I }) => {
  I.amOnPage('/broken');
  I.see('Broken Links - Images');
  I.wait(1);
});
