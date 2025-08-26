import React from 'react';
import { useState, useEffect } from 'react';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <section className="p-10">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div key={project._id} className="border rounded-lg p-4 shadow">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="mt-2">{project.description}</p>
                        <p className="mt-2 text-sm text-gray-500">
                            {project.techStack.join(", ")}
                        </p>
                        <div className="mt-3 flex gap-4">
                            <a href={project.githubLink} className="text-blue-600">GitHub</a>
                            <a href={project.liveDemo} className="text-green-600">Live</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;