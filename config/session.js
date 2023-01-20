const mongodbStore = require("connect-mongodb-session");

const expressSession = require("express-session");

function createSessionStore() {
  const MongodbStore = mongodbStore(expressSession);

  const store = new MongodbStore({
    uri: "mongodb://127.0.0.1:27017",
    databaseName: "online-shop",
    collection: "sessions",
  });

  return store;
}

function createSessionConfig() {
  return {
    secret: "my-secret",
    resave: false,
    saveUninitialized: false,
    store: createSessionStore(),
    cookie: {
      maxAge: 7 * 24 * 3600 * 1000,
    },
  };
}

module.exports = createSessionConfig;
