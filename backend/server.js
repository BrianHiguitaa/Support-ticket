const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const {errorHandler} = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 5000;
const app = express();
const connectDB = require('./config/db');
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// connect to db 
connectDB();


app.get('/', (req,res) => {
    res.send('hello port 5000');
});


// routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler);

console.log('server..');
app.listen(PORT,() => console.log(`Server starter on PORT:${PORT}...`))