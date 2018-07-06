const { username, password } = require('./config');

module.exports = {
  getDbConnectionString: () => {
    return `mongodb://${username}:${password}@ds125871.mlab.com:25871/js-course-db`
  };
};
