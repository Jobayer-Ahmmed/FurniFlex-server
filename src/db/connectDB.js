import mongoose from "mongoose"
import "dotenv/config"

const getConnectionString=()=>{
    let connectionURI = process.env.MONGO_DB_CLOUD
    connectionURI = connectionURI.replace("<db_username>", process.env.DB_USER)
    connectionURI = connectionURI.replace("<db_password>", process.env.DB_PASS)
    return connectionURI

}

const connectDB = async()=>{
    try{
        const uri = getConnectionString()

        await mongoose.connect(uri, {dbName:process.env.DB_NAME})
        console.log("database connection successfull")
    }
    catch(err){
        console.log(err)
    }
}

export default connectDB