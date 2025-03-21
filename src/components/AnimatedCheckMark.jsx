import { motion } from "framer-motion";

const AnimatedCheckmark = () => {
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: [0, 1.2, 1] }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.svg
        className="w-24 h-24"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          y: [0, -5, 0], // Bouncing effect
          filter: [
            "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.2))",
            "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.3))",
            "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.2))",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "easeInOut",
        }}
      >
        {/* Fading Green Circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="48"
          fill="#40C4AA"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Checkmark: Draws from Mid-Left to Top-Right */}
        <motion.path
          d="M40 50 L50 60 L70 30" // Mid-left to top-right checkmark stroke
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 1 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default AnimatedCheckmark;
