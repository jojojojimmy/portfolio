import { motion } from "motion/react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary">
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
          className="text-orange text-lg font-light"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Appreciate the patience...
        </motion.p>
      </div>
    </div>
  );
};

export default Loading;
