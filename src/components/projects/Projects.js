import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Systematic Farming"
          des="A Unique site for farmers to do farming in a efficient way"
          src={projectOne}
        />
        <ProjectsCard
          title="Ai Based Chatbot"
          des=" A ChatBot for School & College Students"
          src={projectTwo}
        />
        <ProjectsCard
          title="Automated Weather Classification System"
          des="Displays the weather by analyzing the image file Uploaded by the user."
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects