import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

const skillData = [
    {
        id:10,
        img: "https://w7.pngwing.com/pngs/441/460/png-transparent-postgresql-plain-wordmark-logo-icon.png",
        skill_name: "PostgreSQL",
        range: 8.0,
       
    },
    {
        id:9,
        img: "https://th.bing.com/th/id/R.9c2c379aef549a2cf9266bcc409ecf03?rik=Vo%2f7VWyCHM60Ew&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fmongodb-png--1000.png&ehk=kjjn5rqJgQ8SBkkmFm9UTRWhxyIhJD3%2bp%2fFhPF0WgHA%3d&risl=&pid=ImgRaw&r=0",
        skill_name: "MongoDB",
        range: 8.0,
        
    },
    {
        id:8,
        img: "https://aglowiditsolutions.com/wp-content/uploads/2018/12/ExpressJS.png",
        skill_name: "Express",
        range: 8.0,
        
    },
    {
        id:7,
        img: "https://e7.pngegg.com/pngimages/306/37/png-clipart-node-js-logo-node-js-javascript-web-application-express-js-computer-software-others-miscellaneous-text.png",
        skill_name: "NodeJs",
        range: 8.0,
        
    },
    {
        id:6,
        img: "https://cdn.dribbble.com/users/3865/screenshots/14403810/media/50de49976e47e90626e7aac690176553.png?resize=640x480&vertical=center",
        skill_name: "Figma",
        range: 8.3,
        
    },
    {
        id:5,
        img: "https://cdn3.iconfinder.com/data/icons/social-media-circle/512/circle-github-512.png",
        skill_name: "Git and GitHub",
        range: 8.0,
        
    },
    {
        id:4,
        img: "https://icon-library.com/images/react-icon/react-icon-0.jpg",
        skill_name: "ReactJs",
        range: 8.8,
        
    },
    {
        id:3,
        img: "https://img.favpng.com/2/12/22/javascript-icon-png-favpng-ruDBDhxzVxWHgXXtH2Hi1XzJf.jpg",
        skill_name: "Java Script",
        range: 8.2,
        },
    {
        id:2,
        img: "https://static-00.iconduck.com/assets.00/file-type-css-icon-1806x2048-r5fwjl3p.png",
        skill_name: "CSS",
        range: 8.5,
         },
    {
        id:1,
        img: "https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png",
        skill_name: "HTML",
        range: 8.5,
        
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
                        <div 
                        className="flex items-center justify-center bg-gradient-to-r from-white via-purple-200 to-white rounded-lg  gap-4 p-4 ">
                            {/* Skill Icon */}
                            <div className="w-[100px] h-[100px] rounded-full border-4 border-white overflow-hidden mb-4">
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
