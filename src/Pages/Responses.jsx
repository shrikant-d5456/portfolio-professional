import React from "react";
import { JackInTheBox } from "react-awesome-reveal"; // Animation library
import { BsQuote } from "react-icons/bs"; // Quote icon

const Responses = () => {
    const Compliments = [
        {
            id: 1,
            name: "John Doe",
            comp: "Web Enthusiast",
            comment: "Amazing work! The design is intuitive and sleek.",
            img: "https://via.placeholder.com/50", // Replace with profile image
        },
        {
            id: 2,
            name: "Jane Smith",
            comp: "Frontend Developer",
            comment: "Really loved the attention to detail. Fantastic job!",
            img: "https://via.placeholder.com/50", // Replace with profile image
        },
        {
            id: 3,
            name: "Chris Lee",
            comp: "UI/UX Designer",
            comment: "Beautifully crafted design and excellent user experience.",
            img: "https://via.placeholder.com/50", // Replace with profile image
        },
    ];

    return (
        <div
            className="min-h-screen lg:w-10/12 md:w-11/12 w-full flex-col m-auto my-4 mt-[10%] text-sm lg:text-base p-4">
            {/* Title */}
            <p className="text-3xl font-bold text-gray-800 mb-8 ml-2">A Word From Visitors</p>
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 rounded-lg text-white my-4">
                <h1 className="text-3xl font-bold mb-4">Good Impression</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eius vitae neque eaque explicabo consequuntur nam, incidunt veniam quaerat delectus!</p>
            </div>

            {/* Marquee Section */}
            <marquee className="w-full h-[260px]" scrollamount="4" direction="left">
                <div className="w-full flex gap-8">
                    {Compliments.map((ele) => (
                        <JackInTheBox key={ele.id}>
                            <div className="anime w-[400px] border-2 mx-4 shadow-sm dark:border-[1px] rounded-br-3xl rounded-t-3xl border-white px-6 py-4 my-4">
                                {/* Profile Section */}
                                <div className="w-full flex gap-4 ">
                                    <div className="w-[60px] ">
                                        <img
                                            className="w-[50px] h-[50px] rounded-full object-fill  border-[1px]"
                                            src={ele.img || "https://bitviraj.com/images/singh.png"}
                                            alt="Profile"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-base font-bold">{ele.name}</p>
                                        <p>{ele.comp}</p>
                                        <div className=" h-[1px] my-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" >

                                        </div>
                                    </div>
                                </div>
                                {/* Comment Section */}
                                <BsQuote className="mt-1  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white" />
                                <p className="my-1 text-wrap">{ele.comment}</p>
                                <BsQuote className="flex justify-end rotate-180  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white" />
                            </div>
                        </JackInTheBox>
                    ))}
                </div>
            </marquee>
        </div>
    );
};

export default Responses;
