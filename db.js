const mongoose = require('mongoose');



const connectDB = async () => {
    try{
        const connect = await mongoose.connect('mongodb+srv://Admin:admin@cluster0.l0awy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology:true})
        console.log("DB Connected......")

    } catch (error){
        console.log (error)
    }
   
    
}
module.exports = connectDB