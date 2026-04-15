import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const connectDB = async () => {
  const atlasUri = process.env.MONGO_URI;
  const localUri = 'mongodb://127.0.0.1:27017/aquarium';
  const invalidAtlasUri = atlasUri && /<db_password>|YOUR_DB_PASSWORD/.test(atlasUri);

  if (!atlasUri || invalidAtlasUri) {
    if (invalidAtlasUri) {
      console.error('Invalid MONGO_URI: please replace YOUR_DB_PASSWORD with your Atlas password in backend/.env');
    } else {
      console.warn('Warning: MONGO_URI is not defined. Using local MongoDB fallback instead.');
    }
  }

  const tryConnect = async (uri) => {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 15000,
      socketTimeoutMS: 45000,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
    return true;
  };

  if (!atlasUri || invalidAtlasUri) {
    try {
      return await tryConnect(localUri);
    } catch (error) {
      console.error(`Local MongoDB fallback failed: ${error.message}`);
      return false;
    }
  }

  try {
    return await tryConnect(atlasUri);
  } catch (error) {
    console.warn('Atlas connection failed, trying local MongoDB fallback.');
    try {
      return await tryConnect(localUri);
    } catch (localError) {
      console.error(`Local MongoDB fallback failed: ${localError.message}`);
      return false;
    }
  }
};

export default connectDB;
