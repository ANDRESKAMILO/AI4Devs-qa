// Archivo de configuración de Cypress
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: [
      'cypress/e2e/**/*.{js,jsx,ts,tsx}',
      'cypress/integration/**/*.{js,jsx,ts,tsx}'
    ],
    supportFile: 'cypress/support/e2e.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
  },
}); 