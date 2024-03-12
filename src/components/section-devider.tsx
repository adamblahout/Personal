import { motion } from "framer-motion";

function SectionDevider() {
  return (
    <motion.div
      className="bg-gray-200 my-16 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    ></motion.div>
  );
}

export default SectionDevider;
