// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('', 'e2e/config', `cypress.${file}.json`);

  return fs.readJson(pathToConfigFile);
}

function copyConstantsBasedontheEnv(env) {
  var constantsFilePathNew = path.resolve('', 'e2e/fixtures/properties', `constants.${env}.json`);
  var constantsFilePathOld = path.resolve('', 'e2e/support', `constants.json`);
  fs.copy(constantsFilePathNew, constantsFilePathOld, err => {
    if (err) throw err;
    console.log('contants from ' + constantsFilePathNew + ' is copied to ' + constantsFilePathOld);
  });
}

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('window:before:unload', e => {
    return true;
  });
  //copyConstantsBasedontheEnv(config.env.configFile);
  const file = config.env.configFile || 'dev';
  return getConfigurationByFile(file);
};
