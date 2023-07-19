import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-4xl font-bold">Course Certification</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="HTML & CSS."
            subTitle="Online Course Certification."
            result="Success"
            des="Completed"
          />
          <ResumeCard
            title="MySQL."
            subTitle="Online Course Certification."
            result="Success"
            des="Conpleted"
          />
          <ResumeCard
            title="BIG DATA Naan Mudhalvan Course."
            subTitle="Naan Mudhalvan Online Course Certification."
            result="Success"
            des="Completed"
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Course Certification</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="DJANGO."
            subTitle="Online Course Certification."
            result="Success"
            des="Completed"
          />
          <ResumeCard
            title="AI - IBM Naan Mudhalvan Course ."
            subTitle="Online Course Certification."
            result="Success"
            des="Completed"
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
