const path = require('path');
const HtmlWebpackPlagin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { type } = require('os');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/pages/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: ''
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      { 
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext]'
        }
      },
      { 
        test: /\.(woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlagin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ]
}