module.exports = {
  devtool: 'eval-source-map',

  entry: __dirname + '/app/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    inline: true
  },

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/react', '@babel/env'
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}
