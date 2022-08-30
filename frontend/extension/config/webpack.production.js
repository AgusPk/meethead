const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssWebpackPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const commonPaths = require('./common-paths');
const PUBLIC_URL = process.env.PUBLIC_URL || require('../package.json').homepage || '';

const config = {
  output: {
    filename: 'assets/js/[name].bundle.js',
    chunkFilename: 'assets/js/[name].js',
    path: commonPaths.outputServerPath,
    publicPath: `${PUBLIC_URL}/`,
  },
  mode: 'production',
  optimization: {
    emitOnErrors: false,
    splitChunks: false,
    runtimeChunk: false,
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      PUBLIC_URL,
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production', // use 'production' unless process.env.NODE_ENV is defined
      PUBLIC_URL,
    }),
    new Dotenv({
      path: commonPaths.prodEnv,
    }),
    new MiniCssWebpackPlugin({
      filename: 'assets/css/[name].css',
      chunkFilename: 'assets/css/[id].[chunkhash].css',
    }),
    new HtmlWebpackPlugin({
      template: commonPaths.template,
      title: 'app',
      base: `${PUBLIC_URL}`,
      filename: path.resolve(__dirname, commonPaths.templatesOutputServerPath, 'index.html'),
      favicon: commonPaths.favicon,
    }),
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: `${PUBLIC_URL}/`,
      seed: {
        name: 'app',
        short_name: 'app',
        start_url: 'index.html',
        display: 'standalone',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '512x512',
            type: 'image/x-icon',
          },
        ],
        background_color: '#4e0041',
        theme_color: '#4e0041',
      },
      generate: (seed, files, entrypoints) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);
        const entrypointFiles = entrypoints.main.filter((fileName) => !fileName.endsWith('.map'));

        return {
          files: manifestFiles,
          entrypoints: entrypointFiles,
        };
      },
    }),
    new CleanWebpackPlugin({
      root: commonPaths.root,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: commonPaths.favicon,
          to: commonPaths.outputServerPath,
        },
      ],
    }),
  ],
};

module.exports = config;
