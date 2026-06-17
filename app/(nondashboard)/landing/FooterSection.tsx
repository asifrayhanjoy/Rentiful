import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'

const FooterSection = () => {
  return (
    <footer className="border-t border-gray-200 py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">

        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-widest text-black">
          RENTIFUL
        </Link>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
          <Link href="/about" className="hover:text-black transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-black transition-colors">Contact Us</Link>
          <Link href="/faq" className="hover:text-black transition-colors">FAQ</Link>
          <Link href="/terms" className="hover:text-black transition-colors">Terms</Link>
          <Link href="/privacy" className="hover:text-black transition-colors">Privacy</Link>
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-5">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook"
            className="text-black hover:text-gray-500 transition-colors">
            <FaFacebook size={24} />
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram"
            className="text-black hover:text-gray-500 transition-colors">
            <FaInstagram size={24} />
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter"
            className="text-black hover:text-gray-500 transition-colors">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn"
            className="text-black hover:text-gray-500 transition-colors">
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://youtube.com" target="_blank" aria-label="YouTube"
            className="text-black hover:text-gray-500 transition-colors">
            <FaYoutube size={24} />
          </Link>
        </div>

      </div>
    </footer>
  )
}

export default FooterSection
