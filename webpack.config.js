const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const RemoveCommentsPlugin = require('./comments-plugin');
module.exports = {
  devtool: 'eval-source-map',

  entry: __dirname + '/app/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    inline: true,
    hot: true
  },

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          { loader: "style-loader"},
          { loader: "css-loader",
            options: {
              modules: true, // 指定启用css modules
              localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /(\.png|\.jpeg|\.jpg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 500
          }
        }
      },
      {
        test: /\.md$/,
        use: [
          'html-loader',
          './md-loader/index.js'
        ],
        exclude: /node_modules/
      },
    ]
  },

  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      minify: { //压缩html
        removeAttributeQuotes: true // 去掉属性的双引号
      },
      hash: true,
      // 1.可以不用template，自动生成html
      // title: '这里可以改title',
      // meta: {
        // viewport: 'width=device-width'
      // },
      // 2.
      template: __dirname + '/app/index.tmpl.html', // 模版文件
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new RemoveCommentsPlugin()
    new webpack.ProvidePlugin({
      _: 'lodash'
    })
  ]
}
