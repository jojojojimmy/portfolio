import { FlipWords } from "./FlipWords";
import { motion } from "motion/react"

const HeroText = () => {
    const words = ["Clean", "Modern", "Impactful", "Scalable"];
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };
    return (
        <div className="z-10 mt-12 text-center md:mt-20 md:ml-[22vw] md:text-left rounded-3xl bg-clip-text">
            {/* Desktop View */}
            <div className="flex-col hidden md:flex c-space">
                <motion.h1 className="text-4xl font-medium" variants={variants} initial="hidden" animate="visible" transition={{ duration: 1 }}>
                    Hi, I'm Joshua
                </motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p className="text-5xl font-medium text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{ duration: 1.25}}> 
                        Building <FlipWords words={words} className="font-black text-white text-6xl"/>Software.
                    </motion.p>
                    {/* <p className="text-4xl font-medium text-neutral-300"> Product Solutions</p> */}
                </div>
            </div>
            {/* Mobile View */}
            <div className= "flex- flex-col space-y-6 md:hidden">
                <motion.p className="text-4xl font-medium" variants={variants} initial="hidden" animate="visible" transition={{ duration: 1 }}>
                    Hi, I'm Joshua
                </motion.p>
                <motion.div>
                    <motion.p className="text-5xl font-black text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{ duration: 1.5 }}>
                        Building <FlipWords words={words} className="font-bold text-white text-6xl"/>Software.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroText;