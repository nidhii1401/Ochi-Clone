import { motion, useAnimation } from "framer-motion";

function Features() {
  const cardAnimation = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cardAnimation[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cardAnimation[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-gray-600 pb-20">
        <h1 className='text-7xl font-["Neue_Montreal"] font-semibold tracking-tighter '>
          Featured Projects
        </h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card-container relative w-1/2 h-[75vh]"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[#b7d05a] leading-none tracking-tighter font-bold text-7xl">
                {"ONBOARD".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cardAnimation[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                    key={index} 
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>

              <img
                src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="card-container relative w-1/2 h-[75vh]"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[#b7d05a] leading-none tracking-tighter font-bold text-7xl">
                {"PREMIUM-BLEND".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cardAnimation[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>

              <img
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Features;













