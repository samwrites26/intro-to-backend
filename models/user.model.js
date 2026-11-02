
import mongoose from "mongoose";

// Define the structure of a User
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        age: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

// Create and export the User model
const User = mongoose.model("User", userSchema);

export default User;
