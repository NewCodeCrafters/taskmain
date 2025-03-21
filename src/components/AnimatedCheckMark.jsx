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
        className="md:w-24 md:h-24 w-20 h-20"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          y: [0, -5, 0], // Smooth bouncing
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

        {/* Centered Checkmark - Starts from Mid-Left and Draws to Top-Right */}
        <motion.path
          d="M30 50 L45 65 L70 30" // Adjusted to be centered inside the circle
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
