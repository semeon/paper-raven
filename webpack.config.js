const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations.

  entry: {
    js: PATHS.app + '/app.js',
    html:       PATHS.app + '/index.html',    
  },

  output: {
    path: PATHS.build,
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        include: PATHS.app,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        include: PATHS.app,        
        loader: "file?name=[name].[ext]",
      },   
      {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }      
    ]
  },  
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ]
  // resolve: {
  //   extensions: ['', '.sass'],
  //   root: [path.join(__dirname, './app/sass')]
  // }

};
