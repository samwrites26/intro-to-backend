
import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

// Middleware to read JSON data
app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.send("Backend server is running successfully!");
});

// User API routes
app.use("/api/users", userRoutes);

// Connect database and start server
const startServer = async () => {
    try {
        await connectDB();

        const PORT = process.env.PORT || 8000;

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Server startup failed:", error.message);
        process.exit(1);
    }
};

startServer();
