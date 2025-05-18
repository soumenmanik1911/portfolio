"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold">
              <motion.span
                className="text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut"
                }}
              >
                Soumen
              </motion.span>
              {" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: "easeOut"
                }}
              >
                Manik
              </motion.span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              A passionate developer focused on creating modern web applications and solving complex problems with
              elegant solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <motion.a
                href="https://github.com/soumenmanik1911"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background hover:bg-primary/10 p-2 rounded-full transition-colors"
                whileHover={{ y: -3 }}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/soumen-manik-19116725b"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background hover:bg-primary/10 p-2 rounded-full transition-colors"
                whileHover={{ y: -3 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://x.com/manik_soum35750"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background hover:bg-primary/10 p-2 rounded-full transition-colors"
                whileHover={{ y: -3 }}
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:soumen192004manik@gmail.com"
                className="bg-background hover:bg-primary/10 p-2 rounded-full transition-colors"
                whileHover={{ y: -3 }}
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <AnimatedButton asChild>
              <Link href="/#contact">Contact Me</Link>
            </AnimatedButton>
            <p className="mt-4 text-muted-foreground">
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Your Name. All rights reserved.</p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
