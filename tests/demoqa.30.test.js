const assert = require('assert');

Feature('demoqa 30');

Scenario('deve abrir pagina Frames', async ({ I }) => {
  I.amOnPage('/frames');
  I.see('Frames');
  I.wait(1);
});
