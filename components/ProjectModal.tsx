"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight, Zap, Globe, Smartphone, Github } from "lucide-react"
import { useState, useRef } from "react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  tech: string[]
  features: string[]
  images: string[]
  status: string
  note?: string
  liveUrl?: string
  apkUrl?: string
  url?: string
}

interface ProjectModalProps {
  selectedProject: Project | null
  setSelectedProject: (project: Project | null) => void
  currentImageIndex: number
  setCurrentImageIndex: (index: number) => void
  isImageZoomed: boolean
  setIsImageZoomed: (zoomed: boolean) => void
}

export function ProjectModal({
  selectedProject,
  setSelectedProject,
  currentImageIndex,
  setCurrentImageIndex,
  isImageZoomed,
  setIsImageZoomed,
}: ProjectModalProps) {
  const [zoomLevel, setZoomLevel] = useState(1) // 1 = normal, 1.5 = primer zoom, 2.5 = segundo zoom
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLImageElement>(null)

  const handleImageClick = () => {
    if (zoomLevel === 1) {
      // Primera vez: zoom 1.5x
      setZoomLevel(1.5)
      setIsImageZoomed(true)
      setImagePosition({ x: 0, y: 0 })
    } else if (zoomLevel === 1.5) {
      // Segunda vez: zoom 2.5x
      setZoomLevel(2.5)
    } else {
      // Tercera vez: volver a normal
      setZoomLevel(1)
      setIsImageZoomed(false)
      setImagePosition({ x: 0, y: 0 })
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - imagePosition.x,
        y: e.clientY - imagePosition.y
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      const newX = e.clientX - dragStart.x
      const newY = e.clientY - dragStart.y
      
      // Limitar el movimiento para que la imagen no se salga demasiado del contenedor
      const maxMoveX = 100 * (zoomLevel - 1)
      const maxMoveY = 100 * (zoomLevel - 1)
      
      setImagePosition({
        x: Math.max(-maxMoveX, Math.min(maxMoveX, newX)),
        y: Math.max(-maxMoveY, Math.min(maxMoveY, newY))
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const getZoomText = () => {
    if (zoomLevel === 1) return "Click para zoom (1x)"
    if (zoomLevel === 1.5) return "Click para más zoom (1.5x)"
    return "Click para salir del zoom (2.5x)"
  }

  // Reset zoom cuando cambia la imagen
  const handleImageChange = (direction: 'prev' | 'next') => {
    setZoomLevel(1)
    setIsImageZoomed(false)
    setImagePosition({ x: 0, y: 0 })
    setIsDragging(false)
    
    if (direction === 'prev') {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject!.images.length - 1 : prev - 1))
    } else {
      setCurrentImageIndex((prev) => (prev === selectedProject!.images.length - 1 ? 0 : prev + 1))
    }
  }

  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-gradient-to-br from-gray-950 to-slate-900 border border-cyan-500/20 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with close button */}
            <div className="flex justify-between items-center p-6 border-b border-cyan-500/20">
              <h2 className="text-white text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {selectedProject.title}
              </h2>
              <motion.button
                onClick={() => setSelectedProject(null)}
                className="text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-100px)]">
              <div className="p-6 space-y-8">
                {/* Image Gallery */}
                <div className="relative">
                  <motion.div
                    className="relative w-full h-[500px] rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center"
                    style={{ cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in' }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                  >
                    <motion.img
                      ref={imageRef}
                      src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                      alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                      className="max-w-full max-h-full object-contain select-none transition-transform duration-300"
                      style={{
                        transform: `scale(${zoomLevel}) translate(${imagePosition.x / zoomLevel}px, ${imagePosition.y / zoomLevel}px)`,
                        transformOrigin: 'center center',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        width: 'auto',
                        height: 'auto'
                      }}
                      onClick={handleImageClick}
                      draggable={false}
                      animate={{
                        scale: zoomLevel,
                        x: imagePosition.x / zoomLevel,
                        y: imagePosition.y / zoomLevel
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 30 
                      }}
                    />

                    {/* Zoom indicator */}
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-2 rounded-full text-sm backdrop-blur-sm border border-cyan-500/20">
                      {getZoomText()}
                      {zoomLevel > 1 && (
                        <div className="text-xs text-cyan-300 mt-1">
                          {zoomLevel >= 1.5 && "Arrastra para mover"}
                        </div>
                      )}
                    </div>

                    {/* Zoom level indicator */}
                    {zoomLevel > 1 && (
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-2 rounded-full text-sm backdrop-blur-sm border border-cyan-500/20">
                        Zoom: {zoomLevel}x
                      </div>
                    )}
                  </motion.div>

                  {/* Navigation arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <motion.button
                        onClick={() => handleImageChange('prev')}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-colors backdrop-blur-sm border border-cyan-500/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </motion.button>

                      <motion.button
                        onClick={() => handleImageChange('next')}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-colors backdrop-blur-sm border border-cyan-500/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronRight className="w-6 h-6" />
                      </motion.button>
                    </>
                  )}

                  {/* Image counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-cyan-500/20">
                    {currentImageIndex + 1} de {selectedProject.images.length}
                    {selectedProject.images.length > 1 && (
                      <span className="ml-2 text-cyan-400">(+{selectedProject.images.length - 1} más)</span>
                    )}
                  </div>
                </div>

                {/* Project description */}
                <div>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">{selectedProject.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-white font-semibold mb-4 text-xl">Todas las características:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center text-white/80 bg-white/5 rounded-lg p-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ x: 5, backgroundColor: "rgba(6, 182, 212, 0.1)" }}
                      >
                        <Zap className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-white font-semibold mb-4 text-xl">Tecnologías utilizadas:</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech) => (
                      <motion.div key={tech} whileHover={{ scale: 1.1 }}>
                        <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-0 text-sm">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {selectedProject.liveUrl && (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0 shadow-lg shadow-cyan-500/25"
                      >
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4 mr-2" />
                          Ver Sitio Web
                        </a>
                      </Button>
                    </motion.div>
                  )}

                  {selectedProject.apkUrl && (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 shadow-lg shadow-blue-500/25"
                      >
                        <a href={selectedProject.apkUrl} download>
                          <Smartphone className="w-4 h-4 mr-2" />
                          Descargar APK
                        </a>
                      </Button>
                    </motion.div>
                  )}

                  {selectedProject.url && (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        asChild
                        variant="outline"
                        className="border-cyan-400/30 text-white hover:bg-cyan-400/10 bg-transparent backdrop-blur-sm"
                      >
                        <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Ver Código Fuente
                        </a>
                      </Button>
                    </motion.div>
                  )}
                </div>

                {selectedProject.note && (
                  <motion.div
                    className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-yellow-400/80 text-sm italic">⚠️ {selectedProject.note}</p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}