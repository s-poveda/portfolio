const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  resolve: {
    mainFiles: ['index'],
  },
  entry: '/src/index.js',
  output: {
    path: path.resolve('./docs'),
    filename: 'app.bundle.js',
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};
