const assert = require('assert');

Feature('demoqa 17');

Scenario('deve abrir pagina Book Store', async ({ I }) => {
  I.amOnPage('/books');
  I.see('Book Store');
  I.wait(1);
});
