require('dotenv').config();
const { app } = require('./server');
const db = require('./db');

if (!process.env.MONGO_DB_CONNECTION_STRING) {
  console.error(`MONGO_DB_CONNECTION_STRING env variable is not valid: ${process.env.MONGO_DB_CONNECTION_STRING}`);
  process.exit(1);
}

const port = process.env.PORT || 3001;

db.init()
  .then(() => {
    app.listen(port)
    console.log(`Backend is listening on ${port}`);
  })
  .catch(() => console.error('DB init failed'));