const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use('http://localhost:3000', proxy({ target: 'http://localhost:5000', }));
  app.use('/api', proxy({ target: 'http://localhost:5000', }));
};