"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
const heroSection = () => {
  return (

    <div className="relative h-screen">
    <Image
    src="/landing-splash.jpg"
    alt="Landing Image"
    fill
    className="object-cover object-bottom"
    />
    <div className="absolute inset-0 bg-black/60">
<motion.div
 initial={{opacity: 0, y:20}}
    animate={{opacity: 1, y:0}}
    transition={{ duration: 0.8 }}
    className="absolute top-1/3 transform -translate-y-1/2 left-1/2 -translate-x-1/2 text-center text-white px-4">
   <div className="max-w-4xl mx-auto px-16 sm:px-12">
<h1 className="text-5xl font-bold text-white mb-4">
Start your journey to finding the perfect place to call home
</h1>
<p className="text-xl text-white mb-8">
Explore our wide range of rental properties tailored to fit your lifestyle and needs!
</p>
<div className="flex justify-center">
<Input
type="text"
value="search query"
placeholder="Search for neighborhood or address and more..."
className="w-full max-w-lg rounded-none border-none px-4 py-3 bg-zinc-200 h-12 rounded-l-lx text-black"
 />
<Button
onClick={() => {
  // Handle search action here
}}
className="px-6 py-3 bg-red-700 text-white rounded-none rounded-r-xl border-none  hover:bg-amber-700 h-12 transition-colors duration-300">
Search
</Button>
</div>
   </div>
</motion.div>
    </div>
    </div>
  )
}

export default heroSection