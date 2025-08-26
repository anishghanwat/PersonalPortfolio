import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: { type: [String], required: true },
    githubLink: { type: String },
    liveDemo: { type: String },
    image: { type: String }
})

const Project = mongoose.model("Project", projectSchema);

export default Project;