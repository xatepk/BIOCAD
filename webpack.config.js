const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'), // the bundle output path
    filename: 'main.js' // the name of the bundle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/public/index.html' // to import index.html file inside index.js
    })
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'assets')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
  },
  devServer: {
    port: 3035
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
};
