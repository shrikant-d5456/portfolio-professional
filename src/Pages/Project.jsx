import React from "react";
import { Fade } from "react-awesome-reveal"; 
import { BsGithub, BsLink } from "react-icons/bs";

const Project = () => {
  const projectData = [
    {
      gitLink: "https://github.com/your-profile/project1",
      webLink: "https://your-project1.com",
      projectName: "Project 1",
      img: "https://via.placeholder.com/150", // Replace with project image URL
    },
    {
      gitLink: "https://github.com/your-profile/project2",
      webLink: "https://your-project2.com",
      projectName: "Project 2",
      img: "https://via.placeholder.com/150", // Replace with project image URL
    },
    {
      gitLink: "https://github.com/your-profile/project3",
      webLink: "https://your-project3.com",
      projectName: "Project 3",
      img: "https://via.placeholder.com/150", // Replace with project image URL
    },
  ];

  return (
    <div 
    id="projects"
    className="min-h-screen  bg-gray-100 flex items-center justify-center py-10">
      <div className="max-w-6xl w-full px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Projects
        </h1>
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 rounded-lg text-white my-4">
  <h1 className="text-3xl font-bold mb-4">Creative Project</h1>
  <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eius vitae neque eaque explicabo consequuntur nam, incidunt veniam quaerat delectus!</p>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <Fade direction="left" triggerOnce key={index}>
              <div className="bg-white shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
                {/* Project Image */}
                <img
                  src={project.img}
                  alt={project.projectName}
                  className=" w-full h-40 object-cover"
                />
                {/* Project Details */}
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.projectName}
                  </h2>
                  <div className="mt-4 flex justify-between items-center">
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-xl border-2 rounded-full p-1" 
                    >
                     <BsGithub/>
                    </a>
                    <a
                      href={project.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-xl border-2 rounded-full p-1" 
                    >
                      <BsLink/>
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
