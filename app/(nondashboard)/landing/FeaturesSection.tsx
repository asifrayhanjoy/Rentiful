"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'


const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const features = [
  {
    imageSrc: "/landing-search1.png",
    title: "Trustworthy and Verified Listings",
    description: "Discover the best rental options with user reviews and ratings.",
    linkText: "Explore",
  },
  {
    imageSrc: "/landing-search2.png",
    title: "Browse Rental Listings with Ease",
    description: "Get access to user reviews and ratings for a better understanding of rental options.",
    linkText: "Search",
  },
  {
    imageSrc: "/landing-search3.png",
    title: "Simplify Your Rental Search with Advanced",
    description: "Find trustworthy and verified rental listings to ensure a hassle-free experience.",
    linkText: "Discover",
  },
]

const FeaturesSection = () => {
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
    className="py-24 px-6 sm:px-12 lg:px-12 xl:px-16 bg-white"
    >
      <div className="max-w-4xl xl:max-w-6xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:w-2/3 mx-auto"
        >
          Quickly find the home you want using our efficient search filters!
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -14, scale: 1.04, boxShadow: "0 32px 64px rgba(0,0,0,0.22)" }}
              transition={{ type: "spring", stiffness: 160, damping: 7, mass: 1.5 }}
              className="bg-gray-100 p-6 rounded-lg cursor-pointer"
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const FeatureCard = ({ title, description, imageSrc, linkText }: {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
}) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center rounded-lg mb-4 h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={400}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <Button variant="outline">{linkText}</Button>
    </div>
  )
}

export default FeaturesSection
