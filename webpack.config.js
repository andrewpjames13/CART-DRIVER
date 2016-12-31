module.exports = {
  entry: './app/index.js',
  output: {
      path: __dirname + '/dist',
      publicPath: '/dist/',
      filename: 'bundle.js',
      pathinfo: true
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
    sassLoader: {
      includePaths: [ 'client/style' ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    }
};
