const { defineConfig } = require('cypress')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config({ path: path.resolve(__dirname, '.env') })


module.exports = defineConfig({
  e2e: {
    // Configure your E2E tests here
    env: {
      username: process.env.TEST_USERNAME,
      password: process.env.TEST_PASSWORD
    },
    baseUrl: 'https://fakestoreapi.com',
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}"
  },
})