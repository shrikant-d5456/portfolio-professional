import React from "react";

const Experience = () => {
    const experiences = [
        {
            company: "Aayansofttech",
            role: "Frontend Developer Intern",
            startDate: "June 2024",
            endDate: "November 2024",
            description:
                "Worked on the Scholarship Management System, creating Figma designs and developing ReactJS-based pages with a focus on responsive layouts.",
        },
        {
            company: "Freelance Project",
            role: "Web Developer",
            startDate: "December 2024",
            endDate: "Present",
            description:
                "Designed and developed modern, user-friendly websites for clients, leveraging technologies like React, Tailwind CSS, and JavaScript.",
        },
    ];

    return (
        <div
            id="experience"
            className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
            <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Experience Timeline
                </h1><div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 rounded-lg text-white my-4">
                    <h1 className="text-3xl font-bold mb-4">Transformative</h1>
                    <p className="text-lg">"Internships are like stepping stones on the path of your career; each one brings you closer to your goals, enriches your knowledge, and transforms your potential into reality."</p>
                </div>

                <div className="relative border-l border-gray-300">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-10 pl-6 relative">
                            {/* Circle on timeline */}
                            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                            <p className="text-gray-500 text-sm mb-1">
                                {exp.startDate} - {exp.endDate}
                            </p>
                            <h2 className="text-xl font-semibold text-gray-800">
                                {exp.company}
                            </h2>
                            <h3 className="text-gray-600">{exp.role}</h3>
                            <p className="text-gray-600 mt-2">{exp.description}</p>
                            {/* Horizontal connector line */}
                            {index < experiences.length - 1 && (
                                <div className="absolute left-0 top-0 h-full border-l border-gray-300"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
