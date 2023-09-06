const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implempageLoadTimeout: 90000,ent node event listeners here
    },
    pageLoadTimeout: 30000
  },
});
