var path = require("path");
var webpack = require('webpack');
var fs = require("fs");
var AssetsPlugin = require('assets-webpack-plugin');

const reactSrcDir = '/assets/react';

function getReactChunks(){
  // Add all jsx files in /assets/react as entries
  var files = fs.readdirSync(__dirname + reactSrcDir).filter(function(f){
    return f.endsWith('.jsx') || f.endsWith('.js');
  })

  var entries = {};
  files.forEach(function(f){
    entries[f.replace(/\.(jsx|js)$/, '')] = './' + f;
  });
  return entries;
}

const reactBuild = {
  name: 'react',
  context: __dirname + reactSrcDir,
  entry: getReactChunks(),
  output: {
    path: path.resolve('./assets/bundles/'),
    filename: "[name]-[hash].js",
    publicPath: '/assets/bundles/',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=env&presets[]=react&presets[]=stage-2'
      },
    ],
  },
  externals: {
    jquery: 'jQuery',
    $: 'jQuery'
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new AssetsPlugin({
      filename: 'bundles.json',
      path: path.resolve('./_data'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 3,
    })
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.css'],
  }
};

module.exports = [reactBuild]
