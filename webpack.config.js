const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = function() {
  return {
    mode: 'development',
    entry: './src/js/index.js',
    watch: true,
    watchOptions: {
      aggregateTimeout: 300, // Process all changes which happened in this time into one rebuild
      poll: 1000, // Check for changes every second,
      ignored: /node_modules/
      // ignored: [
      //   '**/*.scss', '/node_modules/'
      // ]
    },
    devtool: 'source-maps',
    devServer: {
      contentBase: path.join(__dirname, 'src'),
      watchContentBase: true,
      hot: true,
      open: true,
      inline: true,
      host: '192.168.0.12'
    },
    plugins: [
      new HtmlWebPackPlugin({
        filename: 'index.html',
        template: 'src//index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'bundle.css'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
      //new Dotenv()
      //new FaviconsWebpackPlugin('./src/favicon.png')
    ],
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass')
              }
            }
          ]
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                outputPath: './images',
                name: '[name].[ext]',
                fallback: 'file-loader',
                limit: 8192
              }
            }
          ]
        },
        {
          test: /^(?!.*\.generated\.ttf$).*\.ttf$/,
          use: ['css-loader', 'fontface-loader']
        },
        {
          test: /\.generated.(ttf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: '/fonts/'
              }
            }
          ]
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
            options: { minimize: false }
          }
        }
      ]
    }
  };
};
