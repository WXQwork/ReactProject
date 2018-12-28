const path = require('path')

const { injectBabelPlugin } = require('react-app-rewired')

const proxy = require('http-proxy-middleware');

const resolve = (url) => {
  return path.resolve(__dirname, './', url)
}

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
  config.resolve.alias = {
    '@': resolve('src'),
    'styles': resolve('src/assets/styles'),
    'pages': resolve('src/pages'),
    'images': resolve('src/assets/images'),
    'components': resolve('src/components')
  }
  config.devServer={
    "proxy": {
      "/api": {
        "target": "http://localhost:5000/"
        },
      "/*.svg": {
        "target": "http://localhost:5000/"
      }
    }
  }
  return config;
};