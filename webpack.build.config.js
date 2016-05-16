var path = require('path');
var webpack = require('webpack');

var loaders = [
  {
    "test": /\.js?$/,
    "exclude": /node_modules/,
    "loader": "babel",
    "query": {
      "presets": [
        "es2015",
        "react",
        "stage-0"
      ],
      "plugins": []
    }
  }
];

module.exports = {
  entry: path.resolve('lib', 'index.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    library: 'Flex',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'react'
  },
  module: {
    loaders: loaders
  }
};
