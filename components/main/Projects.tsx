import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Welcome to my portfolio website. This Next.js-powered site serves as a showcase for my creativity and proficiency in web development. Explore my projects, and get in touch to learn more about me and my work."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Welcome to my interactive website cards showcase, where I display my diverse web development skills and projects. Experience interactive elements and modern web design principles to explore my captivating portfolio!"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Here, you'll find a diverse collection of my web development projects, with a space theme. Delve into the fascinating world of outer space, and experience interactive elements and modern web design principles like never before!"
        />
      </div>
    </div>
  );
};

export default Projects;