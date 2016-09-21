var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
})

server.listen(3001, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3001');
});
