"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, GraduationCap, Eye, Globe, Smartphone, Github, Sparkles } from "lucide-react"

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

interface ProyectosSectionProps {
  projectFilter: "profesionales" | "universitarios"
  setProjectFilter: (filter: "profesionales" | "universitarios") => void
  setSelectedProject: (project: Project) => void
}

const professionalProjects: Project[] = [
  {
    id: 1,
    title: "Gestor de Licencias",
    description:
      "Este sistema incluye un completo dashboard administrativo, módulos de gestión de usuarios con roles y permisos, y generación de reportes avanzados para auditorías y análisis estratégicos. La aplicación fue desarrollada bajo una arquitectura cliente-servidor, utilizando servicios API RESTful para asegurar una comunicación eficiente y escalable entre el frontend y el backend. Esta estructura permite integrar fácilmente el sistema con otras plataformas corporativas o módulos externos. Durante el desarrollo del proyecto, me desempeñé como líder del equipo de desarrollo y encargado del manejo de la capa de datos. Esto incluyó el diseño y optimización del modelo de base de datos, la definición de endpoints para la API, la validación y transformación de la información, así como la coordinación técnica del equipo para asegurar buenas prácticas de desarrollo, versionado y documentación técnica.",
    image: "/software1.jpg",
    category: "Web Application",
    tech: ["Angular", "Node.js", "Mysql", "Laravel", "JWT", "Material-UI"],
    features: [
      "Dashboard administrativo completo",
      "Gestión de usuarios y roles",
      "Sistema de reportes avanzados",
      "Autenticación y autorización",
      "API RESTful robusta",
      "Notificaciones en tiempo real",
      "Exportación de datos",
      "Interfaz responsive",
    ],
    images: [
      "/software1.jpg",
      "/software2.jpg",
      "/software3.jpg",
    ],
    status: "Confidencial",
    note: "Por motivos de contrato, no se puede mostrar código fuente ni enlaces.",
  },
  {
    id: 2,
    title: "NightFood",
    description:
      "Aplicación móvil de delivery de comidas rápidas con sistema de pedidos en tiempo real, hay dos dashboard, uno de administrador y otro de cliente. Interfaz intuitiva y experiencia de usuario optimizada.",
    image: "/nigh1.jpg",
    category: "Mobile App",
    tech: ["Android Studio", "Kotlin", "Mysql", "Laravel", "ApiRest", "Hostinger"],
    features: [
      "Catálogo de productos interactivo",
      "Carrito de compras inteligente",
      "Pasarela de pagos segura",
      "Comentar productos y calificar",
      "Recuperar clave (Basico porque es una demo)",
      "Descargar Factura fisica y por correo",
      "Dashboard administrativo solo para usuarios con rol de admin",
      "Sistema de calificaciones",
      "La data esta subida en la nube, hecha con laravel.",
    ],
    images: [
      "/nigh1.jpg",
      "/nigh2.jpg",
      "/nigh3.jpg",
      "/nigh4.jpg",
      "/nigh5.jpg",
      "/nigh6.jpg",
      "/nigh7.jpg",
      "/nigh8.jpg",
      "/nigh9.jpg",
    ],
    apkUrl: "/nightfood.apk",
    status: "Disponible para descarga",
  },
  {
    id: 3,
    title: "Gaby Nails",
    description:
      "Sitio web profesional para salón de belleza especializado en uñas acrílicas. Incluye galería de trabajos, sistema de citas online, información de servicios y contacto directo.",
    image: "/gaby1.png",
    category: "Business Website",
    tech: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    features: [
      "Galería de trabajos profesional",
      "Sistema de reserva de citas",
      "Diseño responsive elegante",
      "Optimización SEO completa",
      "Integración con redes sociales",
      "Sistema de pagos directamente desde el whatsapp",
      "Chat en vivo",
    ],
    images: [
      "/gaby1.png",
      "/gaby2.png",
      "/gaby3.png",
      "/gaby4.png",
    ],
    liveUrl: "https://gaby-nails.loymadf.org/",
    status: "Completado",
    note: "Por motivos de acuerdo con el cliente, no se puede mostrar código fuente.",
  },
  {
    id: 4,
    title: "Formix",
    description:
      "Sistema académico integral para instituciones educativas. Gestión completa de estudiantes, profesores, cursos, calificaciones y reportes académicos con dashboard analítico avanzado.",
    image: "/formix1.png",
    category: "Academic System",
    tech: ["CodeIgniter", "Php", "Mysql", "Ajax", "Bootstrap"],
    features: [
      "Gestión completa de estudiantes",
      "Panel de control para profesores",
      "Sistema de calificaciones",
      "Reportes académicos detallados",
      "Dashboard analítico avanzado",
      "Comunicación interna",
      "Calendario académico",
    ],
    images: [
      "/formix1.png",
      "/formix2.png",
      "/formix3.png",
      "/formix4.png",
    ],
    liveUrl: "https://formix.codeec.net/",
    status: "En producción",
    note: "Por motivos de contrato empresarial, no se puede mostrar código fuente.",
  },
]

const universityProjects: Project[] = [
  {
    id: 1,
    title: "Dashboard Predictivo + Asistente Inteligente",
    description:
      "es una aplicación de escritorio desarrollada con Python y Tkinter, se pueden ejecutar directamente desde la interfaz gráfica mediante un panel lateral con botones dinámicos. La aplicación está orientada a usuarios que requieren analizar grandes volúmenes de datos de forma visual y accesible.  Cada modelo predictivo puede configurarse individualmente y sus resultados son mostrados de manera clara mediante visualizaciones integradas. Además, se incluye un asistente inteligente, el cual aprende progresivamente a partir de las preguntas e interacciones del usuario. Este asistente puede funcionar en dos modos: un modo local, en el que responde usando información previamente cargada; y un modo de búsqueda activa, que utiliza la API de Google mediante una clave API para obtener respuestas precisas desde internet.",
    image: "/dash1.png",
    category: "Desktop Application",
    tech: ["Python", "Tkinter", "MySQL", "Google API", "JavaScript"],
    features: [
      "Dashboard con modelos predictivos integrados",
      "Visualización dinámica de resultados",
      "Asistente inteligente que aprende de interacciones anteriores",
      "Buscador integrado con API de Google personalizado con API Key",
      "Modo local con respuestas sin conexión",
      "Carga de datos desde archivos locales y base de datos",
      "Interfaz adaptativa para diferentes modelos",
      "Panel lateral con botones dinámicos para ejecutar modelos",
    ],
    images: [
      "/dash1.png",
      "/dash2.png",
      "/dash3.png",
      "/dash4.png",
    ],
    url: "https://github.com/Erick-kali/dashboard-predictivo",
    status: "Completado",
  },
  {
    id: 2,
    title: "Bienestar y Salud - App Médica con Asistente",
    description:
      "Aplicación móvil desarrollada en Android Studio para la gestión personal de salud. Permite registrar pacientes, medicamentos, citas y recordatorios. Incorpora un asistente inteligente que aprende de las interacciones y un buscador integrado con la API de Google.",
    image: "/bienestar1.jpg",
    category: "Mobile App",
    tech: ["kotlin", "SQLite", "Android Studio", "DBHelper", "Adapter", "Google API"],
    features: [
      "Login y registro de usuarios",
      "Asistente inteligente que aprende del usuario",
      "Buscador con integración a la API de Google mediante API Key",
      "Modo offline con base de datos SQLite local",
      "CRUD completo de pacientes, medicamentos y citas",
      "Gestión de recordatorios personalizados",
      "Adaptadores para listas dinámicas (RecyclerView)",
      "Diseño intuitivo con navegación entre módulos médicos",
    ],
    images: [
      "/bienestar1.jpg",
      "/bienestar2.jpg",
      "/bienestar3.jpg",
      "/bienestar4.jpg",
    ],
    // url: "https://github.com/erickarce/bienestar-salud",
    status: "Completado",
    apkUrl: "/bienestar-salud.apk", 
  },

  // {
  //   id: 3,
  //   title: "E-commerce Universitario",
  //   description:
  //     "Plataforma completa de comercio electrónico especializada en productos universitarios con carrito de compras, pasarela de pagos, gestión de inventario y panel administrativo.",
  //   image: "/placeholder.svg?height=400&width=600&text=E-commerce+Universitario",
  //   category: "E-commerce",
  //   tech: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT"],
  //   features: [
  //     "Catálogo de productos universitarios",
  //     "Carrito de compras avanzado",
  //     "Pasarela de pagos con Stripe",
  //     "Gestión de inventario",
  //     "Panel administrativo",
  //     "Sistema de usuarios",
  //     "Historial de pedidos",
  //     "Búsqueda y filtros",
  //   ],
  //   images: [
  //     "/placeholder.svg?height=300&width=500&text=Tienda+Principal",
  //     "/placeholder.svg?height=300&width=500&text=Carrito+Compras",
  //     "/placeholder.svg?height=300&width=500&text=Panel+Admin",
  //     "/placeholder.svg?height=300&width=500&text=Gestión+Productos",
  //   ],
  //   url: "https://github.com/erickarce/uni-ecommerce",
  //   liveUrl: "https://uni-ecommerce-demo.vercel.app",
  //   status: "Completado",
  // },
//   {
//     id: 4,
//     title: "Sistema de Evaluación Online",
//     description:
//       "Plataforma web para evaluaciones online con creación de exámenes, corrección automática, estadísticas detalladas y sistema anti-trampa para instituciones educativas.",
//     image: "/placeholder.svg?height=400&width=600&text=Sistema+Evaluación+Online",
//     category: "Educational Platform",
//     tech: ["Vue.js", "Laravel", "MySQL", "WebRTC", "Socket.io"],
//     features: [
//       "Creación de exámenes dinámicos",
//       "Corrección automática",
//       "Sistema anti-trampa",
//       "Estadísticas detalladas",
//       "Monitoreo en tiempo real",
//       "Banco de preguntas",
//       "Reportes académicos",
//       "Interfaz intuitiva",
//     ],
//     images: [
//       "/placeholder.svg?height=300&width=500&text=Creación+Exámenes",
//       "/placeholder.svg?height=300&width=500&text=Interfaz+Estudiante",
//       "/placeholder.svg?height=300&width=500&text=Estadísticas+Profesor",
//       "/placeholder.svg?height=300&width=500&text=Sistema+Monitoreo",
//     ],
//     url: "https://github.com/erickarce/evaluation-system",
//     status: "Completado",
//   },
]

export function ProyectosSection({ projectFilter, setProjectFilter, setSelectedProject }: ProyectosSectionProps) {
  return (
    <motion.section
      key="proyectos"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen py-20 bg-gradient-to-b from-black/20 to-black/40 pt-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" whileHover={{ scale: 1.05 }}>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Mis Proyectos
            </span>
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-white/80 text-xl max-w-3xl mx-auto mb-12">
            Una selección de mis trabajos más destacados, mostrando diferentes tecnologías y enfoques de desarrollo.
          </p>

          {/* Project Filter Header */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-2 border border-cyan-500/20">
              <div className="flex space-x-2">
                <motion.button
                  onClick={() => setProjectFilter("profesionales")}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                    projectFilter === "profesionales"
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Profesionales</span>
                  <Badge className="bg-white/20 text-white text-xs border-0">{professionalProjects.length}</Badge>
                </motion.button>

                <motion.button
                  onClick={() => setProjectFilter("universitarios")}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                    projectFilter === "universitarios"
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Universitarios</span>
                  <Badge className="bg-white/20 text-white text-xs border-0">{universityProjects.length}</Badge>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={projectFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
          >
            {(projectFilter === "profesionales" ? professionalProjects : universityProjects).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  boxShadow: "0 25px 60px rgba(6, 182, 212, 0.2)",
                }}
              >
                <Card
                  className="bg-black/40 backdrop-blur-sm border-cyan-500/20 overflow-hidden group h-full cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-auto min-h-[300px] max-h-[600px] object-contain bg-gray-900/50 transition-transform duration-500 group-hover:scale-105"
                      style={{ 
                        aspectRatio: 'auto',
                        objectFit: 'contain',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)'
                      }}
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <motion.div className="absolute top-4 left-4" whileHover={{ scale: 1.1 }}>
                      <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-0 text-sm">
                        {project.category}
                      </Badge>
                    </motion.div>
                    <motion.div className="absolute bottom-4 right-4" whileHover={{ scale: 1.1 }}>
                      <Badge className="bg-black/50 text-white border-cyan-500/30 text-sm">{project.status}</Badge>
                    </motion.div>
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    <motion.h3
                      className="text-2xl font-bold text-white mb-3 cursor-pointer hover:text-cyan-400 transition-colors"
                      whileHover={{ x: 5 }}
                      onClick={() => setSelectedProject(project)}
                    >
                      {project.title}
                    </motion.h3>

                    <p className="text-white/70 mb-6 flex-1 text-base leading-relaxed">{project.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-semibold mb-3 text-lg">Características principales:</h4>
                        <ul className="text-white/70 text-sm space-y-2">
                          {project.features.slice(0, 4).map((feature, idx) => (
                            <motion.li key={idx} className="flex items-center" whileHover={{ x: 5, color: "#06b6d4" }}>
                              <Sparkles className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((tech) => (
                          <motion.div key={tech} whileHover={{ scale: 1.1 }}>
                            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-xs">{tech}</Badge>
                          </motion.div>
                        ))}
                        {project.tech.length > 4 && (
                          <Badge className="bg-white/10 text-white/60 border-white/30 text-xs">
                            +{project.tech.length - 4} más
                          </Badge>
                        )}
                      </div>

                      {project.note && (
                        <motion.p
                          className="text-yellow-300 text-sm italic bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/20"
                          whileHover={{ scale: 1.02 }}
                        >
                          ⚠️ {project.note}
                        </motion.p>
                      )}

                      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
                        <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            onClick={() => setSelectedProject(project)}
                            className="w-full bg-transparent border-cyan-400/50 text-white hover:bg-cyan-400/10 text-sm"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Ver Detalles
                          </Button>
                        </motion.div>

                        {project.liveUrl && (
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                              asChild
                              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0 text-sm shadow-lg shadow-cyan-500/25"
                            >
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <Globe className="w-4 h-4 mr-2" />
                                Ver Sitio
                              </a>
                            </Button>
                          </motion.div>
                        )}

                        {project.apkUrl && (
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                              asChild
                              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 text-sm shadow-lg shadow-blue-500/25"
                            >
                              <a href={project.apkUrl} download>
                                <Smartphone className="w-4 h-4 mr-2" />
                                Descargar APK
                              </a>
                            </Button>
                          </motion.div>
                        )}

                        {project.url && (
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                              asChild
                              className="bg-transparent border-cyan-400/50 text-white hover:bg-cyan-400/10 text-sm"
                            >
                              <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Ver Código
                              </a>
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  )
}