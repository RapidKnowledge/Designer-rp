import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
       <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-4xl font-bold">College Experience</h2>
        </div>
        <div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Systematic Farming"
            subTitle="Hackathon Competition"
            result="Chennai"
            des="Worked as a Team Lead & Frontend Developer."
          />
          <ResumeCard
            title="Ai Based Chatbot"
            subTitle="Project Expo"
            result="College"
            des="Worked as a Frontend Developer."
          />
          <ResumeCard
            title="Intern Selection Process Assessment"
            subTitle="Blog Haveli, Atg,.."
            result="Online"
            des="Worked as a Ui/Ux Designer."
          />
        </div>
      </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-4xl font-bold">College Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="NSCET Metaverse"
            subTitle="World Youth Federation"
            result="Collage"
            des="Worked as a co designer."
          />
          <ResumeCard
            title=" Automated Wether Classification System"
            subTitle="Naan Mudhalvan"
            result="Online"
            des="Worked as a Frontend Developer."
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
