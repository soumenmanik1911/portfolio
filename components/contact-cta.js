"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Mail, MapPin, Phone, MessageSquare } from "lucide-react"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Card3D } from "@/components/3d-card"
import emailjs from '@emailjs/browser'

export function ContactCTA() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef(null)
  const formRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true)
      
      // Log the environment variables to check if they're loaded
      console.log('Checking EmailJS configuration:', {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? 'Present' : 'Missing',
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ? 'Present' : 'Missing',
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ? 'Present' : 'Missing'
      })
      
      // Initialize EmailJS with your public key
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      
      // Prepare the email template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: "Soumen Manik",
        reply_to: data.email
      }

      console.log('Sending email with params:', templateParams)
      
      // Send the email using EmailJS
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams
      )

      console.log('EmailJS Response:', response)

      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })

      reset()
    } catch (error) {
      console.error("Error details:", {
        message: error.message,
        text: error.text,
        name: error.name,
        stack: error.stack
      })
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later or contact me directly via email.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "soumen192004manik@gmail.com",
      link: "mailto:soumen192004manik@gmail.com",
    },
    // {
    //   icon: <Phone className="h-5 w-5 text-primary" />,
    //   title: "Phone",
    //   value: "+1 (234) 567-890",
    //   link: "tel:+1234567890",
    // },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      value: "Kolkata, West Bengal, India",
      link: null,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="space-y-4 text-center mb-16">
        <motion.h2
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-lg max-w-[700px] mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Have a question or want to work together? Feel free to reach out!
        </motion.p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            className="lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Card3D className="h-full bg-gradient-to-br from-primary/5 via-background to-primary/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Send a Message</h3>
                </motion.div>

                <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Input
                        placeholder="Your Name"
                        className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary"
                        {...register("name", { required: "Name is required" })}
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                      {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <Input
                      placeholder="Subject"
                      className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary"
                      {...register("subject", { required: "Subject is required" })}
                      aria-invalid={errors.subject ? "true" : "false"}
                    />
                    {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      className="bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary resize-none"
                      {...register("message", { required: "Message is required" })}
                      aria-invalid={errors.message ? "true" : "false"}
                    />
                    {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <AnimatedButton type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </AnimatedButton>
                  </motion.div>
                </form>
              </CardContent>
            </Card3D>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Card3D className="h-full bg-gradient-to-br from-primary/10 to-background backdrop-blur-sm">
              <CardContent className="p-8">
                <motion.div variants={itemVariants} className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                  <p className="text-muted-foreground">
                    Feel free to reach out through any of these channels. I'll get back to you as soon as possible.
                  </p>
                </motion.div>

                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <motion.div key={index} variants={itemVariants} className="flex items-start gap-4 group">
                      <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">{item.title}</h4>
                        {item.link ? (
                          <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-primary/10">
                  <h4 className="font-medium text-lg mb-4">Connect with me</h4>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/soumenmanik1911"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-background/50 p-3 rounded-full hover:bg-primary/10 transition-colors"
                      aria-label="GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/soumen-manik-19116725b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-background/50 p-3 rounded-full hover:bg-primary/10 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>

                    <a
                      href="https://x.com/manik_soum35750"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-background/50 p-3 rounded-full hover:bg-primary/10 transition-colors"
                      aria-label="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>

                    {/* <a
                      href="https://instagram.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-background/50 p-3 rounded-full hover:bg-primary/10 transition-colors"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a> */}
                  </div>
                </motion.div>
              </CardContent>
            </Card3D>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
