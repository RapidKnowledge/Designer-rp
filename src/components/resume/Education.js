import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BE in Computer Science"
            subTitle="Nadar Saraswathi College of Engineering & Technology (2020 - 2024)"
            result="8.04"
            des="Currently Pursuing My Final Year."
          />
          <ResumeCard
            title="12th "
            subTitle="Paalam Matric Hr Sec School (2019 - 2020)"
            result="53%"
            des="Completed."
          />
          <ResumeCard
            title="10th"
            subTitle="Paalam Matric Hr Sec School (2017 - 2018)"
            result="73%"
            des="Completed."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
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
            title="Intern Selection Process"
            subTitle="Blog Haveli, Atg,.."
            result="Online"
            des="Worked as a Ui/Ux Designer."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education