import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// import projectRoutes from "./routes/projects.js";
// import experienceRoutes from "./routes/experience.js";
// import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//Routes
// app.use("/api/projects", projectRoutes);
// app.use("/api/experience", experienceRoutes);
// app.use("/api/contacts", contactRoutes);

//Connect to mongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {

        console.log("MongoDB Connected!");
    })
    .catch((err) => console.log(err));

//Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.json({ message: "Welcome to the Portfolio API" });
})