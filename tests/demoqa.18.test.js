const assert = require('assert');

Feature('demoqa 18');

Scenario('deve abrir Text Box', async ({ I }) => {
  I.amOnPage('/text-box');
  I.see('Text Box');
  I.wait(1);
});
