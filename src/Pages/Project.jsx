import React from "react";
import { Fade } from "react-awesome-reveal"; 
import { BsGithub, BsLink } from "react-icons/bs";
import assist from '../assets/assist.png'
import news from '../assets/news.png'
import pattern from '../assets/pattern.png'
import scissorgame from '../assets/penpapersccisor.png'
import weather from '../assets/weather.png'
import student from '../assets/student.jpeg'
import blog from '../assets/blog.jpeg'

const Project = () => {
  const projectData = [
    {
      gitLink:"https://github.com/shrikant-d5456/Blog_WebApp",
      img:blog,
      projectName:"Blog WebApp using MERN Technology"
  },
  {
      gitLink:"https://github.com/shrikant-d5456/Student_Attendance",
      img:student,
      projectName:"According attendance get its parent emails"
  },
  {
      gitLink:"https://github.com/shrikant-d5456/desktopAssistant",
      img:assist,
      projectName:"Desktop Assistent like Gemini"
  },
  {
      gitLink:"https://github.com/shrikant-d5456/pattern_printing_app",
      webLink:"https://pattern-printing-app.vercel.app/",
      img:pattern,
      projectName:"Enter text to printting PATTERN in C++"
  },
  {
      gitLink:"https://github.com/shrikant-d5456/",
      img:weather,
      projectName:"Weather WebApp Using Api Key"
  },
  {
      gitLink:"https://github.com/shrikant-d5456/Pen-Paper-Scissor-Game",
      img:scissorgame,
      projectName:"Pen Papper Sccisor Game in ReactJs"
  },
  {
      gitLink:"https://github.com/shrikant-d5456/",
      img:news,
      projectName:"News WebApp using Api key"
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
              <div className="bg-white shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 hover:scale-250">
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
                    {project?.webLink &&
                    <a
                    href={project.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-xl border-2 rounded-full p-1" 
                  >
                    <BsLink/>
                  </a>
                    }
                    
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
