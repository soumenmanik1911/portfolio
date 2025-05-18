"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function AnimatedButton({
  children,
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button
      className={cn("relative overflow-hidden group", className)}
      variant={variant}
      size={size}
      asChild={asChild}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div>
        <motion.span
          className="absolute inset-0 bg-primary/20 dark:bg-primary/30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 1.5 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          style={{ borderRadius: "inherit", originX: 0.5, originY: 0.5 }}
        />

        <motion.span
          className="absolute inset-0 bg-primary/10 dark:bg-primary/20"
          initial={{ x: "-100%" }}
          animate={{
            x: isHovered ? "100%" : "-100%",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ borderRadius: "inherit" }}
        />

        <motion.span
          className="relative z-10 flex items-center justify-center"
          animate={{
            y: isHovered ? -2 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
      </div>
    </Button>
  )
}
