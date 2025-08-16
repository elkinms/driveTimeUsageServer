import express from "express";
import userRoutes from "./routes/userRoutes.js";
import tripRoutes from "./routes/tripRoutes.js"
import mongoose from "mongoose";
import config from "./config/config.js"

const app = express();
const port = config.port;

app.use(express.json());
app.use("/users", userRoutes);
app.use("/trips", tripRoutes);
app.use((req, res) => res.status(404).json({ message: 'not found' }));

async function startServer() {
    try {
        await mongoose.connect(config.mongodb.uri, {
            dbName: config.mongodb.dbName
        });
        console.log("Connected to MongoDB");
        app.listen(port, '0.0.0.0',() => {
            console.log(`Server started on port ${port}. Press Ctrl-C to finish`);
        })
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
}

startServer();


