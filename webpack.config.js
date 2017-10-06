const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BlogBuilderPlugin = require('./webpack/plugins/blog-builder-plugin');
const postLoader = require('./webpack/loaders/post-loader')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets'),
    publicPath: '/assets'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './'
  },
  plugins: [
    new BlogBuilderPlugin({
      source: path.join(process.env.PWD, './src/posts')
    }),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': process.env.NODE_ENV
      }
    }),
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin() //Merge chunks
  ],
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'webpack', 'loaders')]
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          "post-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  }
};
