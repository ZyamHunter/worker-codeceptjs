const assert = require('assert');

Feature('demoqa 08');

Scenario('deve exibir imagem de banner da home', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.category-cards');
  I.wait(1);
});
