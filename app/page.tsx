"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { LoadingScreen } from "@/components/LoadingScreen"
import { SectionLoadingOverlay } from "@/components/SectionLoadingOverlay"
import { Navigation } from "@/components/Navigation"
import { MouseEffects } from "@/components/MouseEffects"
import { InicioSection } from "@/components/sections/InicioSection"
import { SobreMiSection } from "@/components/sections/SobreMiSection"
import { ExperienciaSection } from "@/components/sections/ExperienciaSection"
import { ProyectosSection } from "@/components/sections/ProyectosSection"
import { ContactoSection } from "@/components/sections/ContactoSection"
import { ProjectModal } from "@/components/ProjectModal"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"

type Section = "inicio" | "sobre-mi" | "experiencia" | "proyectos" | "contacto"

export default function ErickArcePortfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<Section>("inicio")
  const [sectionLoading, setSectionLoading] = useState(false)
  const [currentSection, setCurrentSection] = useState<Section>("inicio")
  const [projectFilter, setProjectFilter] = useState<"profesionales" | "universitarios">("profesionales")
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageZoomed, setIsImageZoomed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const navigateToSection = async (sectionId: Section) => {
    if (sectionId === activeSection) return

    setSectionLoading(true)
    setCurrentSection(sectionId)
    setIsMenuOpen(false)

    await new Promise((resolve) => setTimeout(resolve, 800))

    setActiveSection(sectionId)
    setSectionLoading(false)
  }

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/CV  STANLEY-OFICIAL.pdf"
    link.download = "Erick-Arce-CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }


  // Loading Screen
  if (isLoading) {
    return <LoadingScreen currentSection={currentSection} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black relative overflow-hidden">
      <MouseEffects />

      <SectionLoadingOverlay isLoading={sectionLoading} currentSection={currentSection} />

      <Navigation
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navigateToSection={navigateToSection}
        downloadCV={downloadCV}
      />

      {/* Main Content */}
      <div className="pt-16">
        <AnimatePresence mode="wait">
          {activeSection === "inicio" && (
            <InicioSection navigateToSection={navigateToSection} downloadCV={downloadCV} />
          )}

          {activeSection === "sobre-mi" && <SobreMiSection />}

          {activeSection === "experiencia" && <ExperienciaSection />}

          {activeSection === "proyectos" && (
            <ProyectosSection
              projectFilter={projectFilter}
              setProjectFilter={setProjectFilter}
              setSelectedProject={setSelectedProject}
            />
          )}

          {activeSection === "contacto" && <ContactoSection downloadCV={downloadCV} />}
        </AnimatePresence>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        isImageZoomed={isImageZoomed}
        setIsImageZoomed={setIsImageZoomed}
      />

      {/* Footer */}
      <footer className="py-6 bg-gradient-to-r from-black/60 via-gray-950/80 to-black/60 border-t border-cyan-500/20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-xl font-bold mb-2"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              <span
                className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                style={{ backgroundSize: "200% 200%" }}
              >
                Erick Arce
              </span>
            </motion.h3>
            <p className="text-white/60">Full Stack Developer Jr</p>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/erickarce"
              className="text-white/60 hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.2, y: -3 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/erickarce"
              className="text-white/60 hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.2, y: -3 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:arcee1060@gmail.com"
              className="text-white/60 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.2, y: -3 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://wa.me/593985063413"
              className="text-white/60 hover:text-green-400 transition-colors"
              whileHover={{ scale: 1.2, y: -3 }}
            >
              <MessageCircle className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.div
            className="border-t border-white/10 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 text-sm">
              © 2024 Erick Arce. Desarrollado con{" "}
              <motion.span
                className="text-red-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                ❤️
              </motion.span>{" "}
              desde <span className="text-cyan-400 font-medium">Guayaquil, Ecuador</span>.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
