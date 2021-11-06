const mongoose = require('mongoose');

exports.init = async () => {
  await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, { dbName: 'sample_mflix' })
    .then(() => console.log('MongoDB is up and running'))
    .catch((error) => console.error('MongoDB connection failed', error.message));
};
