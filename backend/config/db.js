const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo connected on host ${conn.connection.host}`.cyan.underline.bold.italic);
    } catch (error) {
        console.log(`Error : ${error.message}`.red.underline.bold.italic);
        process.exit(1);
    }
}

module.exports = connectDB;