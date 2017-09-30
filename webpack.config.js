const webpack = require('webpack')
module.exports = {
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
