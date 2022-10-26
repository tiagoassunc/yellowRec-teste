const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./static/js/bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[hash][ext][query]",
        },
      },
      {
        test: /\.svg$/,
        type: "asset/inline",
        generator: {
          filename: "assets/svg/[hash][ext][query]",
        },
      },
      {
        test: /\.txt/,
        type: "asset/source",
        generator: {
          filename: "assets/txt/[hash][ext][query]",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: "static/css/styles.[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Yellow Rec test",
      filename: "index.html",
      template: "src/index.hbs",
      meta: {
        description: "Yellow Rec technical test",
      },
    }),
  ],
};
