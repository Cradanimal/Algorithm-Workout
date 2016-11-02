const secrets = require('./../secret.js');

module.exports = {
  url : 'mongodb://' + secrets.angularDbUser + ':' + secrets.angularDbPass + '@jello.modulusmongo.net:27017/Zo5repuw',
};