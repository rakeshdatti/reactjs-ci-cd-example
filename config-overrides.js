const { override } = require('customize-cra');

module.exports = override(config => {
  // Modify the Jest configuration directly
  config.reporters = [
    'default', 
    ['jest-junit', {
      outputDirectory: 'test-coverage', // Directory where the report will be saved
      outputName: 'jest.xml'             // Name of the generated file
    }]
  ];
  return config;
});
