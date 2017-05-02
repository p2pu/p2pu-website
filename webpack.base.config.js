var path = require("path");
var webpack = require('webpack');
var fs = require("fs");

const reactSrcDir = '/assets/react';

function getReactChunks(){
  // Add all jsx files in /assets/react as entries
  var files = fs.readdirSync(__dirname + reactSrcDir).filter(function(f){
    return f.endsWith('.jsx');
  })

  var entries = {};
  files.forEach(function(f){
    entries[f.replace(/.jsx/, '')] = './' + f;
  });
  return entries;
}

const reactBuild = {
  name: 'react',
  context: __dirname + reactSrcDir,
  entry: getReactChunks(),
  output: {
    path: path.resolve('./assets/bundles/'),
    filename: "[name].js",
  },
  module: {
    loaders: [
      { 
        test: /\.scss$/, 
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      { 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
    ],
  },
  plugins: [],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.css'],
  }
};

module.exports = [reactBuild]
