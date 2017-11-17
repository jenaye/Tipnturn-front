
exports.config = {
  allScriptsTimeout: 11000,
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    './src/app/app.component.spec.ts'
  ],
  capabilities: {
  };
   'browserName': 'chrome'
 }