import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

const skillData = [
    {
        id: 1,
        skill_name: "ReactJS",
        desc: "A JavaScript library for building user interfaces.",
        img: "https://via.placeholder.com/100",
        range: 8, // Skill level out of 10
    },
    {
        id: 2,
        skill_name: "Tailwind CSS",
        desc: "Utility-first CSS framework for modern UI design.",
        img: "https://via.placeholder.com/100",
        range: 9,
    },
    {
        id: 3,
        skill_name: "Node.js",
        desc: "JavaScript runtime for server-side programming.",
        img: "https://via.placeholder.com/100",
        range: 7,
    },
    {
        id: 4,
        skill_name: "MongoDB",
        desc: "NoSQL database for modern applications.",
        img: "https://via.placeholder.com/100",
        range: 8,
    },
    {
        id: 5,
        skill_name: "Express.js",
        desc: "Web application framework for Node.js.",
        img: "https://via.placeholder.com/100",
        range: 7,
    },
    {
        id: 6,
        skill_name: "HTML & CSS",
        desc: "Foundation of web design and development.",
        img: "https://via.placeholder.com/100",
        range: 9,
    },
    {
        id: 7,
        skill_name: "JavaScript",
        desc: "Versatile programming language for the web.",
        img: "https://via.placeholder.com/100",
        range: 9,
    },
];


const Skill = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div
            id="skills"
            className="max-w-6xl m-auto my-10 bg-white lg:p-8 md:p-8 p-4 rounded-lg"
        >
            {/* Header Section */}
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-gray-800">Technical Skills</h2>
            </div>
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 rounded-lg text-white my-4">
                <h1 className="text-3xl font-bold mb-4">Continue learning</h1>
                <p className="text-lg">quote for learning coding skills
                "Learning to code is learning to create and innovate, one line at a time." 🚀</p>
            </div>
            {/* Skill Cards */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {(showAll ? skillData : skillData.slice(0, 4)).map((skill, index) => (
                    <Slide triggerOnce direction="right" key={index}>
                        <div className="flex items-center bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg gap-4 py-4 px-4 shadow-md hover:shadow-lg transition-shadow">
                            {/* Skill Icon */}
                            <div className="w-[140px] h-[100px] rounded-full border-4 border-gray-300 overflow-hidden mb-4">
                                <img
                                    src={skill.img}
                                    alt={skill.skill_name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Skill Info */}
                            <div><h3 className="text-lg font-semibold text-gray-800">
                                {skill.skill_name}
                            </h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    {skill.desc}
                                </p>
                                <div className="w-full mt-2">
                                    <div className="w-full bg-gray-200 rounded-full h-2">

                                        {/* Progress Bar */}
                                        <div
                                            className=" bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-2 rounded-full"
                                            style={{ width: `${skill.range * 10}%` }}
                                        ></div>

                                        <p className="text-sm text-gray-500 text-right mt-1">
                                            {skill.range * 10}%
                                        </p>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </Slide>
                ))}
            </div>

            {/* Show All Button */}
            {skillData.length > 6 && (
                <div className="mt-6 text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-6 py-2  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow transition"
                    >
                        {showAll ? "Show Less" : "Show All"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Skill;
