const { connect, connection } = require('mongoose');

const establishConnection =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/usersDB';

connect(establishConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;