const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
  entry: ['@babel/polyfill', './src/app.tsx'],
  output: {
    path: path.resolve(__dirname, "../../dist"),
    filename: "bundle.js",
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', 'json'],
    plugins: [new TsconfigPathsPlugin({
      configFile: "./tsconfig.json"
    })]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        // use: ['babel-loader'],
      },
      {
        test: /\.(jpg|png|gif|ico|bmp|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    })
  ],
};
