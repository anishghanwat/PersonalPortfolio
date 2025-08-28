import React, { useEffect, useState } from 'react';

function Experience() {

    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/experience')
            .then(response => response.json())
            .then(data => setExperiences(data))
            .catch(error => console.error('Error fetching experience:', error));
    }, []);

    return (
        <section className="p-10">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            {experiences.map((exp) => (
                <div key={exp._id} className="border-l-4 border-blue-600 pl-4 mb-6">
                    <h3 className="text-lg font-semibold">
                        {exp.role} – {exp.company}
                    </h3>
                    <p className="text-gray-600">{exp.description}</p>
                    <p className="text-sm text-gray-500">
                        {new Date(exp.startDate).toLocaleDateString()} -{" "}
                        {new Date(exp.endDate).toLocaleDateString()}
                    </p>
                </div>
            ))}
        </section>
    );

}

export default Experience;