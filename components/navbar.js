"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "home" },
    { href: "/#projects", label: "Projects" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold relative group">
            <motion.div
              className="relative inline-block"
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              {["S", "o", "u", "m", "e", "n"].map((letter, index) => (
                <motion.span
                  key={index}
                  className="text-primary inline-block"
                  variants={{
                    hidden: { 
                      opacity: 0,
                      y: 20,
                      rotate: -20
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotate: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }
                    },
                    hover: {
                      y: -5,
                      scale: 1.1,
                      transition: {
                        duration: 0.2,
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 300
                      }
                    }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="relative inline-block ml-1"
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              {["M", "a", "n", "i", "k"].map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -20,
                      rotate: 20
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      rotate: 0,
                      transition: {
                        duration: 0.5,
                        delay: 0.3 + index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }
                    },
                    hover: {
                      y: 5,
                      scale: 1.1,
                      transition: {
                        duration: 0.2,
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 300
                      }
                    }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </Link>
          

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg  font-medium transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">  
            <ModeToggle />
            <Button asChild>
              <Link href="/#contact">Hire Me</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === link.href ? "text-primary" : "text-foreground/80"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="w-full">
                  <Link href="/#contact" onClick={() => setIsOpen(false)}>
                    Hire Me
                  </Link>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
