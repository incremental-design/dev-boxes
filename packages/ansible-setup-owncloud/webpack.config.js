const path = require("path");
const nodeExternals = require("webpack-node-externals");
const nodeExternalsConfig = {
  importType: "commonjs",
  modulesDir: "./node_modules",
};

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  target: "node",
  externals: [nodeExternals(nodeExternalsConfig)],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      util: "util",
    },
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname),
  },
  optimization: {
    minimize: false,
  },
};
