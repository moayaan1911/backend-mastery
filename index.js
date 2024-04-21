/** @format */

import dotenv from 'dotenv';

dotenv.config();
import connectToDB from './utils/db_connect.js'; // Corrected import path
import { app } from './app.js';

connectToDB()
  .then(() => {
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () =>
      console.log(`⚙️___ Server is running on port ${PORT}`)
    );
  })
  .catch((error) => {
    console.log('Error connecting to DB is ', error);
    process.exit(1);
  });
