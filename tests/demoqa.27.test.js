const assert = require('assert');

Feature('demoqa 27');

Scenario('deve abrir Practice Form', async ({ I }) => {
  I.amOnPage('/automation-practice-form');
  I.see('Practice Form');
  I.wait(1);
});
