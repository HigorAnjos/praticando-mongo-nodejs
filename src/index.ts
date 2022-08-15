import MongoConnection from './models/mongo.connection';
import { config } from 'dotenv';
import App from './app';
config();

async function main () {
  try {
    const { DB_HOST, SERVER_PORT } = process.env;
    const app = new App();
    MongoConnection.connect(`mongodb://${DB_HOST}:/flix`);
    console.log('MongoDB connected');
    app.start(SERVER_PORT);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();