/* eslint-disable @typescript-eslint/no-var-requires */
const isDevelopment = process.env.NODE_ENV !== 'production';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devtool: isDevelopment ? 'source-map' : undefined,
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
