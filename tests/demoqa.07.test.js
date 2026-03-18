const assert = require('assert');

Feature('demoqa 07');

Scenario('deve ver card Book Store Application na home', async ({ I }) => {
  I.amOnPage('/');
  I.see('Book Store Application');
  I.wait(1);
});
