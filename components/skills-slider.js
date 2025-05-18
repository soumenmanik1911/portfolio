"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Layers, Palette, Smartphone } from "lucide-react"
import { AutoScrollSlider } from "@/components/auto-scroll-slider"
import { Badge } from "@/components/ui/badge"

export function SkillsSlider() {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Globe className="h-8 w-8 text-primary" />,
      description: "Building responsive and interactive user interfaces with modern frameworks and libraries.",
      technologies: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Framer Motion",
        "barba.js",
      ],
      gradient: "from-blue-500/20 to-cyan-400/20",
    },
    {
      category: "Backend Development",
      icon: <Database className="h-8 w-8 text-primary" />,
      description: "Designing and implementing scalable server-side applications and APIs.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "RESTful APIs",
        
        "Firebase",
        
      ],
      gradient: "from-green-500/20 to-emerald-400/20",
    },
    {
      category: "Web Development",
      icon: <Code className="h-8 w-8 text-primary" />,
      description: "Creating full-stack web applications with focus on performance and user experience.",
      technologies: [
        "MERN Stack",
        
        "Progressive Web Apps",
        "Responsive Design",
        "Authentication",
        "State Management",
        "Testing",
        
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      category: "UI/UX Design",
      icon: <Palette className="h-8 w-8 text-primary" />,
      description: "Designing intuitive and visually appealing user interfaces and experiences.",
      technologies: [
        "Figma",
        
        "Wireframing",
        "Prototyping",
        "User Research",
        "Accessibility",
        "Design Systems",
        "Animation",
      ],
      gradient: "from-orange-500/20 to-amber-400/20",
    },
    // {
    //   category: "Mobile Development",
    //   icon: <Smartphone className="h-8 w-8 text-primary" />,
    //   description: "Building cross-platform mobile applications with modern frameworks.",
    //   technologies: [
    //     "React Native",
    //     "Expo",
      
        
        
    //     "Push Notifications",
    //     "Offline Support",
    //     "App Store Deployment",
    //   ],
    //   gradient: "from-red-500/20 to-rose-400/20",
    // },
    {
      category: " Deployment",
      icon: <Layers className="h-8 w-8 text-primary" />,
      description: "Setting up and managing deployment pipelines and infrastructure.",
      technologies: [
        "Git",
        "GitHub Actions",
        
        "Vercel",
        "Netlify",
        "AWS",
        "Continuous Integration",
        "Continuous Deployment",
      ],
      gradient: "from-teal-500/20 to-cyan-400/20",
    },
  ]

  const renderSkill = (skill, index, currentIndex) => {
    return (
      <div className={`w-full h-full flex items-center justify-center p-10 bg-gradient-to-br ${skill.gradient}`}>
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: index === currentIndex ? 1 : 0, y: index === currentIndex ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-background/30 backdrop-blur-sm p-3 rounded-full">{skill.icon}</div>
              <h3 className="text-3xl font-bold">{skill.category}</h3>
            </div>
            <p className="text-lg">{skill.description}</p>
          </motion.div>

          <motion.div
            className="bg-background/20 backdrop-blur-sm p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: index === currentIndex ? 1 : 0, y: index === currentIndex ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-4">Technologies & Skills</h4>
            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((tech, techIndex) => (
                <motion.div
                  key={techIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: index === currentIndex ? 1 : 0, y: index === currentIndex ? 0 : 10 }}
                  transition={{ duration: 0.3, delay: 0.4 + techIndex * 0.05 }}
                >
                  <Badge variant="secondary" className="bg-background/30 backdrop-blur-sm">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <AutoScrollSlider
      items={skills}
      renderItem={renderSkill}
      interval={6000}
      title="Expertise & Skills"
      description="Specialized in modern web technologies and development practices"
    />
  )
}
