const assert = require('assert');

Feature('demoqa 20');

Scenario('deve abrir Radio Button', async ({ I }) => {
  I.amOnPage('/radio-button');
  I.see('Radio Button');
  I.wait(1);
});
