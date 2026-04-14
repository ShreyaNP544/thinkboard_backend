import mongoose from "mongoose"

export const connectDB = async() => {
    try {
        mongoose.connect(process.env.MONGO_URI);

        console.log("MONGODB CONNECTED SUCCESSFULLY!");
    } catch (error) {
        console.log("Error connecting the MONGODB", error);
        process.exit(1); // 1 means exit with failure
    }
}


//mongodb+srv://shreyanp4m_db_user:DWPq1mzG0H5i6P8o@cluster0.0qki5ur.mongodb.net/?appName=Cluster0