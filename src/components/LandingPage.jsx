import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import LocomotiveScroll from 'locomotive-scroll';


const LandingPage = () => {

  const scroll = new LocomotiveScroll();
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className="landing-page w-full h-screen">

      <div className="text-structure mt-30 px-20">
        {["We Create", "Eye-opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                    className="w-[8vw] rounded-md h-[6vw] relative -bottom-[1.09vw] bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)] mr-[1vw]"
                  >
                    {" "}
                  </motion.div>
                )}
                <h1 className="heading uppercase text-[7.5vw] leading-[7vw] font-['Test Founders Grotesk X-Cond SmBd'] tracking-tighter font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="line border-t-[1px] border-gray-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch of IPO",
        ].map((item, index) => {
          return <p className="para font-['Neue_Montreal'] ">{item}</p>;
        })}

        <div className="start-box flex items-center gap-3">
          <div className="box px-5 py2 border-[1px] border-gray-800 rounded-full font-light text-md uppercase">
            Start the Project
          </div>
          <div className="circle w-6 h-6 rounded-full border-[1px] border-t-gray-800 flex justify-center items-center">
            <GoArrowUpRight />
          </div>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;
