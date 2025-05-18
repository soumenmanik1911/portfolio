"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedBackground } from "@/components/animated-background"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Computer Science Student
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              staggerChildren: 0.05
            }}
            className="inline-block"
          >
            {["H", "i", ","].map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-primary inline-block"
          >
            I'm{"  "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: 0.6,
              staggerChildren: 0.05
            }}
            className="inline-block"
          >
            {["S", "o", "u", "m", "e", "n", "  ", " ", "M", "a", "n", "i", "k"].map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-3xl mb-10"
        >
          I'm a passionate developer focused on creating modern web applications and solving complex problems with
          elegant solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <AnimatedButton asChild size="lg">
            <Link href="/#projects">
              View My Projects <ArrowRight className="ml-2 h-4 w-6"/>
            </Link>
          </AnimatedButton>

          <AnimatedButton asChild variant="outline" size="lg">
            <Link href="#contact">Get In Touch</Link>
          </AnimatedButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex items-center justify-center gap-8"
        >
          {/* <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary">3+</span>
            <span className="text-sm text-muted-foreground">Years Experience</span>
          </div> */}

          <div className="h-10 w-px bg-border"></div>

          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary">5+</span>
            <span className="text-sm text-muted-foreground">Projects Completed</span>
          </div>

          <div className="h-10 w-px bg-border"></div>

          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary">5+</span>
            <span className="text-sm text-muted-foreground">Technologies</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
