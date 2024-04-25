/** @format */

import mongoose from 'mongoose';
import { DB_NAME } from './constants.js'; // Corrected import path

const connectToDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.mongodb_uri}/${DB_NAME}`
    );
    console.log(
      'Connected to DB, the connection instance is ',
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log('Error connecting to DB is ', error);
    process.exit(1);
  }
};

export default connectToDB;
