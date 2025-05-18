"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { AutoScrollSlider } from "@/components/auto-scroll-slider"
import { Badge } from "@/components/ui/badge"
import { AnimatedButton } from "@/components/ui/animated-button"
import Image from "next/image"
import Link from "next/link"

export function ProjectsSlider() {
  const projects = [
    {
      title: "ai corner",  
      description: "a platform where you can explore multiple AI-powered tools in one place!",
      image: "/aicorner.png?width=800&height=600",
      tags: ["Next.js", "Tailwind CSS", "huggingface", "clerk", "react-hook-form"],
      github: "https://github.com/soumenmanik1911/aicorner.git",
      demo: "https://aicorner1911.netlify.app/",
      gradient: "from-blue-500/20 to-cyan-400/20",
      pattern: "circuit-board",
    },
    {
      title: "EmoTracker", 
      description:
        "A secure emotion tracking app where you can log in with Firebase, select dates, and monitor your emotional journey over time. Built with Next.js 15 and Firebase.",
      image: "/emotracker.png?width=800&height=600",
      tags: ["nextjs", "tailwindcss", "react-hook-form", "firebase",],
      github: "https://github.com/soumenmanik1911/Emotracker.git",
      demo: "https://lnkd.in/gurG_vqt",
      gradient: "from-purple-500/20 to-pink-500/20",
      pattern: "graph-paper",
    },
    {
      title: "Weather Cheque",
      description: "A modern weather application built with Next.js and OpenWeather API, featuring secure authentication via Clerk and a beautiful Tailwind CSS interface.",
      image: "/climacast.png?width=800&height=600",
      tags: ["Next.js", "OpenWeather API", "Tailwind CSS", "Clerk"],
      github: "https://github.com/soumenmanik1911/LASTDANCE.git",
      demo: "https://checkuem.netlify.app/",
      gradient: "from-green-500/20 to-emerald-400/20", 
      pattern: "diagonal-lines",
    },
    // {
    //   title: "Sentiment Analysis Tool",
    //   description:
    //     "Machine learning application that analyzes text sentiment from social media posts and customer reviews.",
    //   image: "/placeholder.svg?height=600&width=800",
    //   tags: ["Python", "TensorFlow", "NLP", "React.js"],
    //   github: "https://github.com/yourusername/sentiment-analysis",
    //   demo: "https://sentiment-analysis.vercel.app",
    //   gradient: "from-orange-500/20 to-amber-400/20",
    //   pattern: "hexagons",
    // },
  ]

  const getPattern = (pattern) => {
    switch (pattern) {
      case "circuit-board":
        return "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")"
      case "graph-paper":
        return "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")"
      case "diagonal-lines":
        return "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5v1H0V0h5z'/%3E%3Cpath d='M6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")"
      case "hexagons":
        return "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='%23ffffff' fill-opacity='0.1' d='M12 18.7l-4.3 2.5 0-5L3.4 12l4.3-2.5L12 7l4.3 2.5 4.3 2.5-4.3 2.5 0 5z'/%3E%3C/g%3E%3C/svg%3E\")"
      default:
        return ""
    }
  }

  const renderProject = (project, index, currentIndex) => {
    return (
      <div
        className={`w-full h-full flex items-center justify-center p-10 bg-gradient-to-br ${project.gradient}`}
        style={{ backgroundImage: getPattern(project.pattern) }}
      >
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          <motion.div
            className="relative h-[200px] sm:h-[250px] md:h-[350px] w-full rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: index === currentIndex ? 1 : 0, y: index === currentIndex ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </motion.div>

          <motion.div
            className="space-y-3 md:space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: index === currentIndex ? 1 : 0, y: index === currentIndex ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
            <p className="text-base md:text-lg text-muted-foreground">{project.description}</p>

            <div className="flex flex-wrap gap-2 my-3 md:my-4">
              {project.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary" className="bg-background/30 backdrop-blur-sm text-xs md:text-sm">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full max-w-[300px] sm:max-w-none mx-auto sm:mx-0">
              <AnimatedButton 
                asChild 
                className="w-full sm:w-auto h-10 sm:h-11 text-sm sm:text-base px-4 flex items-center justify-center"
              >
                <Link 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> 
                  <span>Live Demo</span>
                </Link>
              </AnimatedButton>

              <AnimatedButton 
                asChild 
                variant="outline" 
                className="w-full sm:w-auto h-10 sm:h-11 text-sm sm:text-base px-4 flex items-center justify-center"
              >
                <Link 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Github className="mr-2 h-4 w-4" /> 
                  <span>View Code</span>
                </Link>
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <AutoScrollSlider
      items={projects}
      renderItem={renderProject}
      interval={6000}
      title="Featured Projects"
      description="Explore some of my recent work showcasing my skills and expertise"
      id="projects"
    />
  )
}
