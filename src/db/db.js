import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB= async () => {
    try {
        const connectinstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectinstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
}


export default connectDB











/*(async () => {
try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("errror", (error) =>{
        console. log ("ERR: ", error);
        throw error
        })
        app.listen(process.env.PORT, () => {
        console.log('App is listening on port {process.env.PORT}');
        })
    }
catch(error) {
    console.error("'ERROR: ", error)
    throw err
}
})()*/