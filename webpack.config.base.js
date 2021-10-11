const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '问候页面',
     template: 'src/assets/index.html'
   })
  ],
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use:["file-loader"],
      },
        {
            test: /\.less$/i,
            use: [
              'style-loader',
              'css-loader',
              {
                  loader: 'less-loader'
                },
            ],
        },
        {
            test: /\.styl$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'stylus-loader'
                  },
              ],
        },
        {
            test: /\.scss$/i,
            use: [
            'style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                implementation: require('dart-sass'),
                    },
                },
            ],
        },
    ],
  },
}
