import mongoose from 'mongoose';

class MongoConnection {
  static async connect(URI: string = 'mongodb://localhost:27017/flix') {
    await mongoose.connect(URI)
  }
}

export default MongoConnection;
