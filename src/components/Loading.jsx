import { useMemo } from "react";
import { motion } from "motion/react";

const Loading = () => {
  const funTakes = [
    // "At the end of the day, is maddie actually a baddie?",
    "Gaslighting is just fun way to express your affection for someone.",
    "Eating pizza with a knife and fork should be considered a crime.",
    "Mismatching socks is psychotic behavior.",
    "Reality TV is peak entertainment.",
    "Pokemon is the greatest media franchise to exist.",
    "Video games actually do make you smarter, I would know!",
    "The younger siblings are statistically better than older siblings",
  ];

  const loadingQuote = useMemo(
    () => funTakes[Math.floor(Math.random() * funTakes.length)],
    []
  );

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-primary">
      <div className="flex flex-col items-center gap-6">
        {/* Animated spinner */}
        <motion.div className="relative w-20 h-20">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-orange"
            animate={{ scale: [0.8, 1.2], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="text-orange text-lg font-light text-center"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="block text-orange-400 font-medium">While this loads, tune in for one of my favorite Fun Takes?</span>
          <span className="block mt-4 mx-auto w-fit text-red-400">{loadingQuote}</span>
        </motion.p>
      </div>
    </div>
  );
};

export default Loading;
