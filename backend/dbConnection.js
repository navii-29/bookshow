const mongoose = require('mongoose');

const connectDB = async() => {
  try{
    await mongoose.connect('mongodb://localhost:27017/bookshow');
    console.log('Connected to Database')}
  catch(error){
    console.log(error)}
}
module.exports = connectDB;