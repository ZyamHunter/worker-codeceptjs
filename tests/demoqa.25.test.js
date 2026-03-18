const assert = require('assert');

Feature('demoqa 25');

Scenario('deve abrir Upload and Download', async ({ I }) => {
  I.amOnPage('/upload-download');
  I.see('Upload and Download');
  I.wait(1);
});
