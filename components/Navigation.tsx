"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Download, Menu, X, Home, User, Briefcase, FolderOpen, Mail } from "lucide-react"

type Section = "inicio" | "sobre-mi" | "experiencia" | "proyectos" | "contacto"

interface NavigationProps {
  activeSection: Section
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  navigateToSection: (section: Section) => void
  downloadCV: () => void
}

const sections = [
  { id: "inicio" as Section, name: "Inicio", icon: Home },
  { id: "sobre-mi" as Section, name: "Sobre Mí", icon: User },
  { id: "experiencia" as Section, name: "Experiencia", icon: Briefcase },
  { id: "proyectos" as Section, name: "Proyectos", icon: FolderOpen },
  { id: "contacto" as Section, name: "Contacto", icon: Mail },
]

export function Navigation({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  navigateToSection,
  downloadCV,
}: NavigationProps) {
  return (
    <motion.nav
      className="fixed top-0 w-full z-40 bg-black/20 backdrop-blur-xl border-b border-cyan-500/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      style={{
        boxShadow: "0 2px 20px rgba(6, 182, 212, 0.05)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-lg sm:text-xl font-bold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Erick Arce
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {sections.map((section) => {
              const IconComponent = section.icon
              return (
                <motion.button
                  key={section.id}
                  onClick={() => navigateToSection(section.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 relative group text-sm ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                      : "text-white/80 hover:text-cyan-400 hover:bg-white/5"
                  }`}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="whitespace-nowrap">{section.name}</span>
                  {activeSection !== section.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"
                      layoutId="underline"
                    />
                  )}
                </motion.button>
              )
            })}

            <motion.button
              onClick={downloadCV}
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white px-4 py-2 rounded-full hover:from-purple-500 hover:via-pink-500 hover:to-red-500 transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-purple-500/20 text-sm"
              whileHover={{ scale: 1.05, y: -1, boxShadow: "0 8px 30px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              <span>CV</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white p-2 rounded-lg bg-white/5 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden mt-3 pb-3 bg-black/40 backdrop-blur-xl rounded-lg border border-cyan-500/10"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-2 p-3">
                {sections.map((section, index) => {
                  const IconComponent = section.icon
                  return (
                    <motion.button
                      key={section.id}
                      onClick={() => navigateToSection(section.id)}
                      className={`flex items-center justify-center space-x-2 py-3 px-3 transition-colors rounded-lg text-sm ${
                        activeSection === section.id
                          ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                          : "text-white/80 hover:text-cyan-400 hover:bg-white/5"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="whitespace-nowrap">{section.name}</span>
                    </motion.button>
                  )
                })}
              </div>
              <motion.button
                onClick={downloadCV}
                className="mt-2 mx-3 w-[calc(100%-1.5rem)] bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center space-x-2 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Download className="w-4 h-4" />
                <span>Descargar CV</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
