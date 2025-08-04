"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Zap } from "lucide-react"

interface SectionLoadingOverlayProps {
  isLoading: boolean
  currentSection: string
}

export function SectionLoadingOverlay({ isLoading, currentSection }: SectionLoadingOverlayProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <motion.div
              className="w-20 h-20 mx-auto mb-4 relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full animate-pulse" />
              <div className="absolute inset-2 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
              <Zap className="absolute inset-6 text-white w-8 h-8" />
            </motion.div>
            <p className="text-white text-xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Cargando {currentSection.replace("-", " ")}...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
