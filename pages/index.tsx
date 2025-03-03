import { motion } from "framer-motion";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen flex flex-col items-center justify-center">
      <DarkModeToggle />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mt-5"
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg mt-2"
      >
        Crypto & Forex Trader | Airdrop Farmer | B. Pharm Student
      </motion.p>
    </div>
  );
}
