"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, GraduationCap, Award, Briefcase } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Card3D } from "@/components/3d-card"

export function AboutPreview() {
  const stats = [
    // { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "5+" },
    { label: "Certifications", value: "10+" },
    // { label: "Hackathons", value: "5+" },
  ]

  return (
    <section id="about" className="py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Card3D className="bg-gradient-to-br from-primary/20 to-background p-8 h-[400px] flex flex-col justify-center">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
            <h3 className="text-2xl font-bold mb-6">Key Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background/40 backdrop-blur-sm p-4 rounded-lg text-center"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute top-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
          </Card3D>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
            <div className="mt-4 text-muted-foreground space-y-4">
              <p>
                I'm a passionate Computer Science student with a strong foundation in web development, data structures &
                algorithms, and modern technologies.
              </p>
              <p>
                My journey in tech began in college, where I quickly discovered my passion for web development. Despite being
                relatively new to programming, I've rapidly acquired skills in modern frameworks and technologies, proving
                myself as a fast learner who's eager to stay at the forefront of innovation.
              </p>
              <p>
                When I'm not coding, you can find me participating in hackathons, contributing to open-source projects,
                or exploring new technologies to expand my skill set.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">B.Tech in Computer Science</h3>
                <p className="text-sm text-muted-foreground">University of Engineering and Management, Kolkata • 2023- 2027</p>
              </div>
            </div>

            {/* <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Web Development Intern</h3>
                <p className="text-sm text-muted-foreground">Tech Company • Summer 2023</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Hackathon Winner</h3>
                <p className="text-sm text-muted-foreground">National Coding Competition • 2022</p>
              </div>
            </div> */}
          </div>

          <AnimatedButton asChild>
            <Link href="/about">
              Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  )
}
