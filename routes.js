const routes = require('next-routes');

module.exports = routes()
  .add('about')
  .add('destination')
  .add('fail')
  .add('honorable-mention')
  .add('restaurant', '/restaurant/:slug')
  .add('search')
  .add('top-ten');
