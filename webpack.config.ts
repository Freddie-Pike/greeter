const path = require("path");

module.exports = {
  entry: "src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
