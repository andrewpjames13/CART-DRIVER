module.exports = {
  entry: './app/index.js',
  output: {
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
      }]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    }
};
