"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function MouseEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      {/* Enhanced Mouse Glow Effect */}
      <motion.div
        className="fixed pointer-events-none z-40"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          width: 500,
          height: 500,
        }}
      >
        <div
          className="w-full h-full rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.8) 0%, rgba(59,130,246,0.6) 25%, rgba(139,92,246,0.4) 50%, rgba(6,182,212,0.2) 75%, transparent 100%)",
            filter: "blur(80px)",
          }}
        />
      </motion.div>

      {/* Secondary glow layer */}
      <motion.div
        className="fixed pointer-events-none z-39"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: 300,
          height: 300,
        }}
      >
        <div
          className="w-full h-full rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.9) 0%, rgba(59,130,246,0.7) 30%, rgba(139,92,246,0.5) 60%, transparent 100%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      {/* Floating Electric Particles - Reduced quantity */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/90 rounded-full"
            initial={{
              x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1920,
              y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 1080,
            }}
            animate={{
              x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1920,
              y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 1080,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </>
  )
}
