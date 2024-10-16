/* const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = async () => {
    dotenv.config();

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;
 */

const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://dbAdmin:dbAdminpassword@cluster0.msz8j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const config = {
  connectTimeoutMS: 50000,
};

async function connectDB() {
  const client = new MongoClient(url, config); // Create a new MongoClient instance
  console.time('connect');
  
  try {
    await client.connect(); // Connect to the database
    console.log('Connected successfully to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  } finally {
    console.timeEnd('connect');
    await client.close(); // Close the connection when done
  }
}

//module.exports = connectDB;





