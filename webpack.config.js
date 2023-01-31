var path = require("path");
var webpack = require('webpack');
var fs = require("fs");
var AssetsPlugin = require('assets-webpack-plugin');

const reactSrcDir = '/assets/react';

// TODO clean bundles when generating new ones

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
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png$|\.gif$/,
        type: 'asset/resource',
      },
    ],
  },
  externals: {
    jquery: 'jQuery',
    $: 'jQuery'
  },
  optimization: {
    //runtimeChunk: "single", // enable "runtime" chunk
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'initial',
          minChunks: 3
        }
      }
    }
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/
    }),
    new AssetsPlugin({
      filename: 'bundles.json',
      path: path.resolve('./_data'),
    })
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.css'],
  }
};

module.exports = [reactBuild]
