const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const htmlTemplateFilename = "html-template.ejs";

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src", "index.js"),
    blog: path.resolve(__dirname, "src", "store.js")
  },
  output: {
    filename: "assets/[name].js",
    chunkFilename: "assets/[name].bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "build/assets/**/*",
        "index.html",
        "!CNAME",
        "!favicon.ico",
        "!README.md"
      ]
    }),
    new webpack.ContextReplacementPlugin(
      /highlight\.js\/lib\/languages$/,
      new RegExp(`^./(ruby|javascript|css|scss|bash)`)
    ),
    new HtmlWebpackPlugin({
      title: require("./package.json").name,
      template: path.resolve("src", htmlTemplateFilename),
      inject: false
    })
  ],
  resolveLoader: {
    modules: ["node_modules", "./node_modules/buddhablog-cli/lib/webpack"]
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        include: [path.resolve(__dirname, "posts")],
        use: ["buddha-post-loader"]
      },
      {
        test: /\.md$/,
        include: [path.resolve(__dirname, "pages")],
        use: ["buddha-page-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: require.resolve("babel-loader"),
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "babel-plugin-import-glob",
              "@babel/plugin-proposal-object-rest-spread",
              "react-hot-loader/babel"
            ]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: "style-loader" }, // creates style nodes from JS strings
          { loader: "css-loader" }, // translates CSS into CommonJS
          { loader: "sass-loader" } // compiles Sass to CSS
        ]
      }
    ]
  }
};
