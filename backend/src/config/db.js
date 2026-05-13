import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongodb_URI)
        console.log(
            "MongoDB connected Successfully"
        )
    } catch (error) {
        console.error("Error connecting MongoDB", error)
        process.exit(1) //exit with failure
    }
}