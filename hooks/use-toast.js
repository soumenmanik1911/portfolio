"use client"

// This is a simplified version of the use-toast hook
// In a real project, you would use a more complete implementation

import { useState } from "react"

export function useToast() {
  const [toasts, setToasts] = useState([])

  const toast = ({ title, description }) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { id, title, description }

    setToasts((prevToasts) => [...prevToasts, newToast])

    // Auto dismiss after 5 seconds
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }, 5000)

    return id
  }

  return { toast, toasts }
}
