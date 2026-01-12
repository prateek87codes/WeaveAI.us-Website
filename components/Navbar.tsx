'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Button from './ui/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/WeaveAI.US logo.png"
              alt="WeaveAI Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <span className="text-xl font-bold text-neutral-dark">WeaveAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-neutral-dark hover:text-primary-green transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-neutral-dark hover:text-primary-green transition-colors">
              About
            </Link>
            <Link href="/services" className="text-neutral-dark hover:text-primary-green transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-neutral-dark hover:text-primary-green transition-colors">
              Contact
            </Link>
            <Button href="/contact" variant="primary">
              Book a Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-neutral-dark hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-neutral-dark hover:text-primary-green transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-neutral-dark hover:text-primary-green transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-neutral-dark hover:text-primary-green transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-neutral-dark hover:text-primary-green transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4">
              <Button href="/contact" variant="primary" className="w-full">
                Book a Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

