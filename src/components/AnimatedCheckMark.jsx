import { motion } from "framer-motion";

const AnimatedCheckmark = () => {
  return (
    <motion.svg
      className="w-24 h-24" // Tailwind for size (adjust as needed)
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Green Circular Background */}
      <rect width="100" height="100" rx="50" fill="#40C4AA" />

      {/* Animated Checkmark Path */}
      <motion.path
        d="M64 39.5L44.75 58.75L36 50"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ strokeDasharray: 50, strokeDashoffset: 50 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </motion.svg>
  );
};

export default AnimatedCheckmark;
