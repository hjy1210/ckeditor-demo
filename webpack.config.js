const path = require('path')

module.exports = {
  entry: {
    client2:"./components/client2.jsx",
    index3:"./components/index3.jsx"
  },
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: "[name]_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          'options': {
            presets: ['es2015', 'react']
          }
        }],
        exclude: /node_modules/
      }
    ]

  }
};