"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Download,
  Send,
  Zap,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { useState } from "react"

interface ContactoSectionProps {
  downloadCV: () => void
}

export function ContactoSection({ downloadCV }: ContactoSectionProps) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validar que todos los campos estén llenos
    if (!data.name || !data.email || !data.subject || !data.message) {
      setSubmitStatus("error")
      setMessage("Por favor, completa todos los campos.")
      setTimeout(() => {
        setSubmitStatus("idle")
        setMessage("")
      }, 3000)
      return
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      setSubmitStatus("error")
      setMessage("Por favor, ingresa un email válido.")
      setTimeout(() => {
        setSubmitStatus("idle")
        setMessage("")
      }, 3000)
      return
    }

    try {
      // Crear el contenido del email
      const emailBody = `
Hola Erick,

Mi nombre es ${data.name} y me gustaría contactarte.

INFORMACIÓN DE CONTACTO:
- Nombre: ${data.name}
- Email: ${data.email}
- Asunto: ${data.subject}

MENSAJE:
${data.message}

---
Este mensaje fue enviado desde tu portafolio web.
Fecha: ${new Date().toLocaleString("es-EC", { timeZone: "America/Guayaquil" })}

Saludos,
${data.name}
      `.trim()

      // Crear el enlace mailto
      const mailtoLink = `mailto:arcee1060@gmail.com?subject=${encodeURIComponent(
        `🚀 ${data.subject} - Mensaje de ${data.name}`,
      )}&body=${encodeURIComponent(emailBody)}`

      // Abrir el cliente de email
      window.location.href = mailtoLink

      // Mostrar mensaje de éxito
      setSubmitStatus("success")
      setMessage("¡Perfecto! Se ha abierto tu cliente de email con el mensaje listo para enviar.")

      // Limpiar el formulario
      ;(e.target as HTMLFormElement).reset()

      // Limpiar el mensaje después de 5 segundos
      setTimeout(() => {
        setSubmitStatus("idle")
        setMessage("")
      }, 5000)
    } catch (error) {
      setSubmitStatus("error")
      setMessage("Error al abrir el cliente de email. Por favor, copia mi email: arcee1060@gmail.com")
      setTimeout(() => {
        setSubmitStatus("idle")
        setMessage("")
      }, 5000)
    }
  }

  // Función para copiar email al portapapeles
  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("arcee1060@gmail.com")
      setSubmitStatus("success")
      setMessage("¡Email copiado al portapapeles!")
      setTimeout(() => {
        setSubmitStatus("idle")
        setMessage("")
      }, 3000)
    } catch (error) {
      setSubmitStatus("error")
      setMessage("No se pudo copiar. Email: arcee1060@gmail.com")
      setTimeout(() => {
        setSubmitStatus("idle")
        setMessage("")
      }, 3000)
    }
  }

  return (
    <motion.section
      key="contacto"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen py-20 bg-gradient-to-b from-black/20 to-black/40 pt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" whileHover={{ scale: 1.05 }}>
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Contacto
            </span>
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mb-8 shadow-lg shadow-cyan-400/50"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-white/80 text-xl max-w-3xl mx-auto">
            ¿Interesado en trabajar conmigo? Me encantaría escuchar sobre tu proyecto y cómo puedo ayudarte.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <Card className="bg-black/80 backdrop-blur-sm border-cyan-400/30 shadow-lg shadow-black/50 overflow-hidden">
              <CardContent className="p-6 sm:p-8 bg-black/60">
                <h3 className="text-2xl font-bold text-white mb-8">Información de Contacto</h3>

                <div className="space-y-6">
                  <motion.div whileHover={{ scale: 1.05, x: 10 }} className="flex items-center space-x-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center cursor-pointer flex-shrink-0"
                      whileHover={{ rotate: 10 }}
                      onClick={copyEmailToClipboard}
                    >
                      <Mail className="text-white w-5 h-5" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-white font-semibold text-base">Email</h4>
                      <p
                        className="text-cyan-400 text-sm cursor-pointer hover:text-cyan-300 transition-colors break-all"
                        onClick={copyEmailToClipboard}
                      >
                        arcee1060@gmail.com
                      </p>
                      <p className="text-white/50 text-xs">Click para copiar</p>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05, x: 10 }} className="flex items-center space-x-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 10 }}
                    >
                      <MessageCircle className="text-white w-5 h-5" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-white font-semibold text-base">WhatsApp</h4>
                      <a
                        href="https://wa.me/593985063413"
                        className="text-green-400 text-sm hover:text-green-300 transition-colors"
                      >
                        +593 98 506 3413
                      </a>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05, x: 10 }} className="flex items-center space-x-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 10 }}
                    >
                      <Phone className="text-white w-5 h-5" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-white font-semibold text-base">Teléfono</h4>
                      <a
                        href="tel:+593985063413"
                        className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
                      >
                        +593 98 506 3413
                      </a>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05, x: 10 }} className="flex items-center space-x-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 10 }}
                    >
                      <MapPin className="text-white w-5 h-5" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-white font-semibold text-base">Ubicación</h4>
                      <p className="text-purple-400 text-sm">Guayaquil, Ecuador</p>
                    </div>
                  </motion.div>
                </div>

                <div className="pt-8">
                  <h4 className="text-white font-semibold mb-4 text-base">Sígueme en:</h4>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://github.com/erickarce"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center text-white hover:from-gray-600 hover:to-gray-500 transition-all"
                      whileHover={{ scale: 1.2, rotate: 10, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/erickarce"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white hover:from-blue-500 hover:to-blue-400 transition-all"
                      whileHover={{ scale: 1.2, rotate: -10, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://wa.me/593985063413"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center text-white hover:from-green-500 hover:to-green-400 transition-all"
                      whileHover={{ scale: 1.2, rotate: 10, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <MessageCircle className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                <motion.div className="pt-4" whileHover={{ scale: 1.02 }}>
                  <Button
                    size="lg"
                    onClick={downloadCV}
                    className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 text-white border-0 shadow-lg shadow-cyan-500/25 text-base py-3 h-12"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Descargar CV Completo
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <Card className="bg-black/80 backdrop-blur-sm border-cyan-400/30 shadow-lg shadow-black/50 overflow-hidden">
              <CardContent className="p-6 sm:p-8 bg-black/60">
                <h3 className="text-2xl font-bold text-white mb-8">Envíame un Mensaje</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <label className="text-white font-medium mb-2 block text-sm">Nombre *</label>
                      <Input
                        name="name"
                        required
                        className="bg-black/80 text-white placeholder:text-gray-400 border-cyan-400/30 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/50 h-12"
                        placeholder="Tu nombre completo"
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <label className="text-white font-medium mb-2 block text-sm">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        required
                        className="bg-black/80 text-white placeholder:text-gray-400 border-cyan-400/30 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/50 h-12"
                        placeholder="tu@email.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }}>
                    <label className="text-white font-medium mb-2 block text-sm">Asunto *</label>
                    <Input
                      name="subject"
                      required
                      className="bg-black/80 text-white placeholder:text-gray-400 border-cyan-400/30 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/50 h-12"
                      placeholder="Asunto del mensaje"
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }}>
                    <label className="text-white font-medium mb-2 block text-sm">Mensaje *</label>
                    <Textarea
                      name="message"
                      required
                      rows={5}
                      className="bg-black/80 text-white placeholder:text-gray-400 border-cyan-400/30 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/50 resize-none min-h-[120px]"
                      placeholder="Cuéntame sobre tu proyecto, ideas o cualquier consulta que tengas..."
                    />
                  </motion.div>

                  {/* Status Message */}
                  {submitStatus !== "idle" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg border flex items-start space-x-3 ${
                        submitStatus === "success"
                          ? "bg-green-500/10 border-green-500/30 text-green-400"
                          : "bg-red-500/10 border-red-500/30 text-red-400"
                      }`}
                    >
                      {submitStatus === "success" ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      )}
                      <p className="text-sm leading-relaxed">{message}</p>
                    </motion.div>
                  )}

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 text-white border-0 shadow-lg shadow-cyan-500/25 text-base py-3 h-12"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Abrir Email
                    </Button>
                  </motion.div>
                </form>

                <motion.div
                  className="mt-4 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-medium">¿Cómo funciona?</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Al hacer clic en "Abrir Email", se abrirá tu cliente de email predeterminado con un mensaje pre-escrito listo para enviar a{" "}
                    <span className="text-cyan-400 font-medium cursor-pointer hover:text-cyan-300" onClick={copyEmailToClipboard}>
                      arcee1060@gmail.com
                    </span>
                    . Solo tendrás que hacer clic en enviar.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}