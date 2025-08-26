import React from 'react';

function Home() {
    return (
        <div>
            <section className="flex flex-col items-center justify-center py-20">
                <h1 className="text-4xl font-bold">Hi, I'm Anish 👋</h1>
                <p className="mt-4 text-lg text-gray-600">Full Stack Developer | MERN | Problem Solver</p>
                <a href="/projects" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg">
                    View My Work
                </a>
            </section>
        </div>
    );
}

export default Home;