var webpack = require('webpack');

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
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        comments: false, // remove comments
        compress: {
          unused: true,
          dead_code: true, // big one--strip code that will never execute
          warnings: false, // good for prod apps so users can't peek behind curtain
          drop_debugger: true,
          conditionals: true,
          evaluate: true,
          drop_console: true, // strips console statements
          sequences: true,
          booleans: true,
        }
      })
    ]
};
