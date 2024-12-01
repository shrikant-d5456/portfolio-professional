import React from 'react';
import Img from '../assets/shreeImg.jpg'

const aboutData = {
    name: "Shrikant Dalvi",
    desc: "I am a dedicated and passionate frontend developer with a strong foundation in creating user-centric and visually appealing web applications. Currently, I am pursuing a BTech in Information Technology at DBATU University, where I am in my fourth year of study. In addition to my academic pursuits, I am actively engaged in an internship as a frontend developer, working on the Scholarship Management System project. My responsibilities include designing Figma layouts, creating website interfaces, and developing pages using ReactJS.",
    role: "Frontend Developer + Designer",
    img: Img
}

const About = () => {
    return (


        <div
            id="about"
            className=" bg-white flex items-center justify-center min-h-screen ">
            <div className="relative  md:bg-gradient-to-r md:from-blue-500 md:via-purple-500 md:to-pink-500 p-1 rounded-lg">
                <div className="bg-white shadow-lg rounded-lg lg:p-4 md:p-4 p-1 lg:max-w-6xl md:max-w-6xl lg:flex md:flex items-center">
                    {/* Logo Section */}
                    <div className="lg:w-1/3 md:w-1/3 my-4 rotate-45 md:bg-gradient-to-r md:from-blue-500 md:via-purple-500 md:to-pink-500  flex justify-center rounded-full">
                        <img
                            src={aboutData.img}
                            alt="Logo"
                            className="w-60 h-60 object-cover flex rotate-[315deg] rounded-full border-white border-8"
                        />
                    </div>
                    {/* Info Section */}
                    <div className="lg:w-2/3 md:w-2/3 p-4">

                        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 rounded-lg text-white my-4">
                            <h1 className="text-3xl font-bold">Hey, I'm {aboutData.name}</h1>
                            <hr className=' my-2 ' />
                            <h2 className="text-xl mt-2">Passionate about {aboutData.role}</h2>
                        </div>

                        <p className="text-gray-600 mt-4 text-justify">
                            {aboutData.desc}
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;
