/**
 * .config/webpack.config.prod.js :
 * This file defines the production build configuration
 */
const { helpers, externals, presets } = require('@humanmade/webpack-helpers')
const { filePath } = helpers

module.exports = presets.production({
  externals,
  entry: {
    editor: filePath('mu-plugins/myproject-blocks/src/editor.js'),
    frontend: filePath('mu-plugins/myproject-blocks/src/frontend.js')
  },
  output: {
    path: filePath('mu-plugins/myproject-blocks/build')
  }
})

console.log(JSON.stringify(module.exports, null, 2))
