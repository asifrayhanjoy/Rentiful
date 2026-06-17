"use client"
import { motion } from 'framer-motion'


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const Discover = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="py-4 bg-white"
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <motion.div variants={itemVariants} className="my-16 text-center">
          <h2 className="text-3xl sm:text-4xl leading-tight text-gray-800 font-bold">
            Discover
          </h2>
          <p className="mt-3 text-gray-500 sm:w-2/3 mx-auto">
            Find your dream rrental Property today!
          </p>
          <p className="mt-2 text-gray-500 max-w-3xl mx-auto">
Searching for your dream rental property has never been easier. With
our user-friendly search feature, you can quickly find the perfect
home that meets all your needs. Start your search today and discover
your dream rental property!
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Discover
