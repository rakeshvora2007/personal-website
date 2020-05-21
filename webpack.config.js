const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const autoprefixer = require("autoprefixer");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    compress: true,
    inline: true,
    port: 8080
  },
  // resolve: {
  //   alias: {
  //     jquery: "jquery/src/jquery"
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
              // outputPath: "dist/"
            }
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: "style-loader"
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader",
            options: {
              sourceMap: true
              // outputPath: "dist/"
            }
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              plugins: [require("autoprefixer")]
            }
            // outputPath: "dist/"
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html",
      filename: __dirname + "/dist/index.html",
      inject: "body"
    }),
    new webpack.ProvidePlugin({
      "window.jQuery": "jquery",
      "window.$": "jquery",
      jQuery: "jquery",
      $: "jquery"
    })
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.join(
    //         __dirname,
    //         "node_modules",
    //         "bootstrap",
    //         "dist",
    //         "css",
    //         "bootstrap.min.css"
    //       ),
    //       to: "css"
    //     },
    //     {
    //       from: path.join(__dirname, "src", "fonts"),
    //       to: "fonts"
    //     }
    //   ]
    // })
  ]
};
