"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Eye, Download, Github, Linkedin, Mail, MessageCircle, ChevronDown, Sparkles } from "lucide-react"

type Section = "inicio" | "sobre-mi" | "experiencia" | "proyectos" | "contacto"

interface InicioSectionProps {
  navigateToSection: (section: Section) => void
  downloadCV: () => void
}

export function InicioSection({ navigateToSection, downloadCV }: InicioSectionProps) {
  return (
    <motion.section
      key="inicio"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Profile Image with Electric Effects - Moved up more */}
          <motion.div
            className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 relative mt-4"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 p-1"
              animate={{
                rotate: 360,
                boxShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.5)",
                  "0 0 40px rgba(59, 130, 246, 0.8)",
                  "0 0 60px rgba(139, 92, 246, 0.5)",
                  "0 0 20px rgba(6, 182, 212, 0.5)",
                ],
              }}
              transition={{ rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" } }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                <img src="/foto.png" alt="Erick Arce" className="w-full h-full object-cover" />

              </div>
            </motion.div>

            {/* Electric Sparks around image */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: "0 0",
                }}
                animate={{
                  rotate: i * 60,
                  x: [0, 80, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.5,
                }}
              />
            ))}

            <motion.div
              className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
              }}
            >
              <Sparkles className="text-white w-5 h-5" />
            </motion.div>
          </motion.div>

          {/* Animated Name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, type: "spring" }}
          >
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Erick Arce
            </motion.span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl md:text-4xl mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Full Stack Developer Jr
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/80 mb-6 max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Desarrollador apasionado de <span className="text-cyan-400 font-semibold">Guayaquil, Ecuador</span> con 1
            año de experiencia creando soluciones web y móviles innovadoras. Especializado en React, Node.js y
            tecnologías modernas.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center px-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white border-0 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                onClick={() => navigateToSection("proyectos")}
              >
                <Eye className="w-5 h-5 mr-2" />
                Ver Proyectos
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400/50 text-white hover:bg-cyan-400/10 bg-transparent backdrop-blur-sm"
                onClick={downloadCV}
              >
                <Download className="w-5 h-5 mr-2" />
                Descargar CV
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <motion.a
              href="https://github.com/Erick-kali"
              className="text-white/60 hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.3, rotate: 10, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-7 h-7" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/erick-arce-29ba4a278/"
              className="text-white/60 hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.3, rotate: -10, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-7 h-7" />
            </motion.a>
            <motion.a
              href="mailto:arcee1060@gmail.com"
              className="text-white/60 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.3, rotate: 10, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-7 h-7" />
            </motion.a>
            <motion.a
              href="https://wa.me/593985063413"
              className="text-white/60 hover:text-green-400 transition-colors"
              whileHover={{ scale: 1.3, rotate: -10, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <MessageCircle className="w-7 h-7" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="text-cyan-400 w-8 h-8" />
      </motion.div>
    </motion.section>
  )
}
