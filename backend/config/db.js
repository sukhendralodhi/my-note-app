const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://developersukhendra:Codingsikhadeyar@cluster0.cfsyzc2.mongodb.net/";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true,
        });

        console.log(`MongoDb Connected ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;