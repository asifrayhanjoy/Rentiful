"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const steps = [
  {
    icon: "/landing-icon-wand.png",
    title: "Search for Properties",
    description:
      "Browse through our extensive collection of rental properties in your desired location.",
  },
  {
    icon: "/landing-icon-calendar.png",
    title: "Book Your Rental",
    description:
      "Once you've found the perfect rental property, easily book it online with just a few clicks.",
  },
  {
    icon: "/landing-icon-heart.png",
    title: "Enjoy Your New Home",
    description:
      "Move into your new rental property and start enjoying your dream home.",
  },
]

const HowItWorksSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="py-24 px-6 sm:px-12 lg:px-16 bg-white"
    >
      <div className="max-w-4xl xl:max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#f5f5f5] rounded-2xl p-8 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-md"
            >
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-6">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default HowItWorksSection
