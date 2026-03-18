const assert = require('assert');

Feature('demoqa 11');

Scenario('deve navegar para Elements pelo card', async ({ I }) => {
  I.amOnPage('/');
  I.click("//h5[text()='Elements']");
  I.seeInCurrentUrl('/elements');
  I.wait(1);
});
