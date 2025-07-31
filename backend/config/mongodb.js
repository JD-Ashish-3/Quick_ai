import mongoose from 'mongoose';

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log("Database connected"));
    await mongoose.connect(`${process.env.DATABASE_URL}/quickai`)

}
export default connectDB;