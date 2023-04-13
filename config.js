const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
    //   host: "db4free.net",
    //   user: "stashook",
    //   password: "admin@123",
    //   database: "stashook",
      host: "127.0.0.1:3306",
      user: "root",
      password: "",
      database: "stashook",
    },
    listPerPage: 10,
  };
  module.exports = config;