const assert = require('assert');

Feature('demoqa 09');

Scenario('deve exibir 6 cards principais', async ({ I }) => {
  I.amOnPage('/');
  const cards = await I.grabNumberOfVisibleElements('.category-cards .card');
  assert.strictEqual(cards, 6);
  I.wait(1);
});
