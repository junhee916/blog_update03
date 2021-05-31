const mongoose = require('mongoose')

const connectDB = async function(){

    try{
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("connected mongodb...")
    }
    catch(err){
        console.log(err.messege)
        process.exit(1)
    }
}

module.exports = connectDB