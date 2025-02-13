import { motion } from "framer-motion";
import { s } from "framer-motion/client";
import React from "react";
import LocomotiveScroll from 'locomotive-scroll';

function Marquee() {

  const scroll = new LocomotiveScroll();

  return (
    <div  data-scroll data-scroll-section data-scroll-speed='0.2' className="w-full text-white py-10 bg-[#004D43] -pt[2vw] -mt-[10vw] rounded-tl-3xl rounded-tr-3xl ">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] font-['Test Founders Grotesk X-Cond SmBd'] tracking-tighter uppercase font-bold pr-20  -mt-[4vw] -mb-[4vw] "
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] font-['Test Founders Grotesk X-Cond SmBd'] tracking-tighter uppercase  font-bold pr-20 -mt-[4vw] -mb-[4vw] "
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] font-['Test Founders Grotesk X-Cond SmBd'] tracking-tighter uppercase  font-bold pr-20 -mt-[4vw] -mb-[4vw] "
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
