"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"

interface LoadingScreenProps {
  currentSection: string
}

export function LoadingScreen({ currentSection }: LoadingScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Electric Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 animate-pulse" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1920,
              y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 1080,
              opacity: 0,
            }}
            animate={{
              x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1920,
              y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 1080,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Electric Loading Animation */}
        <motion.div
          className="w-40 h-40 mx-auto mb-8 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 border-4 border-transparent rounded-full"
            style={{
              background: "conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)",
              padding: "4px",
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <div className="w-full h-full bg-gray-950 rounded-full" />
          </motion.div>

          {/* Inner Core */}
          <motion.div
            className="absolute inset-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 20px rgba(6, 182, 212, 0.5)",
                "0 0 40px rgba(59, 130, 246, 0.8)",
                "0 0 20px rgba(139, 92, 246, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <Zap className="text-white w-12 h-12" />
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Cargando Portafolio
          </span>
        </motion.h1>

        <motion.h2
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Erick Arce
          </span>
        </motion.h2>

        <motion.p
          className="text-white/80 text-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Preparando experiencia profesional...
        </motion.p>
      </motion.div>
    </div>
  )
}
