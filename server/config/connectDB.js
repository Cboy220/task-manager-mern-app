import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB Connected: ${con.connection.host}`.cyan)
    } catch (error) {
        console.error(`Error: ${error.message}`.red)
        process.exit(1)
    }
}

mongoose.set('strictQuery', true);

export default connectDB