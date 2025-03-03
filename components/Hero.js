import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1 
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Ayush Aryan
      </motion.h1>
      <p className="text-xl mt-4">Crypto & Forex Trader | Airdrop Farmer | Coder</p>
    </section>
  )
}
