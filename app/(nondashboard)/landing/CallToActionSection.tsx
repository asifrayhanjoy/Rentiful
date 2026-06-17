"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


function CallToActionSection() {
  return (
    <div className="relative min-h-[480px] flex items-center">
      <Image
        src="/landing-call-to-action.jpg"
        alt="Rentiful Search Section Background"
        fill
        className="object-center object-cover"
      />
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl xl:max-w-6xl mx-auto px-6 sm:px-6 xl:px-16 lg:px-12 py-12"
        >
          <div className="relative max-w-6xl mx-auto px-6 sm:px-8 text-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-4xl font-bold text-white">
                Find Your Dream Rental Property Today!
              </h2>
              <p className="mt-6 text-white text-lg">
                Searching for your dream rental property has never been easier. With our user-friendly search feature, you can quickly find the perfect home that meets all your needs. Start your search today and discover your dream rental property!
              </p>
              <div className="flex justify-center mt-10 gap-4">
<Button  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="px-6 py-3 bg-red-700 text-white rounded-none rounded-r-xl border-none  hover:bg-amber-700 h-12 transition-colors duration-300">
Search Now{
  // Handle search action here
}

</Button>
<Link href="/SignUp">
  <Button className="px-6 py-3 bg-blue-700 text-white rounded-none rounded-r-xl border-none hover:bg-blue-900 h-12 transition-colors duration-300">
    Sign Up
  </Button>
</Link>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CallToActionSection
