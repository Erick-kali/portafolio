"use client"

import { motion } from "framer-motion"
import { Briefcase, Star, Code, Users, Trophy, Download, Phone, Mail, MapPin, Calendar, Award } from "lucide-react"

// Interface para definir la estructura de una experiencia
interface Experience {
  id: string
  company: string
  position: string
  description: string
  duration: string
  period: string
  location?: string
  technologies: string[]
  responsibilities: string[]
  achievements: {
    icon: any
    text: string
    color: string
    bgColor: string
    borderColor: string
    shadowColor: string
  }[]
  companyInfo?: {
    supervisor: string
    phone: string
    email?: string
    address?: string
  }
  certificate?: {
    available: boolean
    filename?: string
  }
  companyLogo?: string
}

// Datos de experiencias
const experiences: Experience[] = [
  {
    id: "codeec",
    company: "CodeEc",
    position: "Full Stack Developer Jr",
    description: "Desarrollo full-stack con liderazgo de equipo en proyectos empresariales",
    duration: "30 de junio del 2024 - Presente",
    period: "1 año",
    location: "Ecuador",
    technologies: ["Laravel", "Angular", "CodeIgniter", "React", "Node.js", "MySQL", "PostgreSQL"],
    responsibilities: [
      "Liderazgo técnico de equipo de desarrollo en 2 proyectos empresariales complejos",
      "Liderazgo exclusivo en gestión y arquitectura de datos - único responsable del área",
      "Desarrollo backend robusto utilizando Laravel y CodeIgniter para APIs escalables",
      "Implementación de interfaces dinámicas con Angular y React para experiencias optimizadas",
      "Diseño y optimización de bases de datos relacionales con arquitectura de datos completa",
      "Gestión de proyectos ágiles y coordinación directa con stakeholders empresariales",
      "Mentoría técnica del equipo y establecimiento de estándares de código limpio",
      "Integración de servicios web y APIs de terceros para funcionalidades avanzadas",
      "Implementación de medidas de seguridad y mejores prácticas en manejo de datos"
    ],
    achievements: [
      {
        icon: Trophy,
        text: "2 proyectos empresariales entregados exitosamente",
        color: "text-yellow-400",
        bgColor: "from-yellow-500/10 to-orange-500/10",
        borderColor: "border-yellow-500/20",
        shadowColor: "rgba(245, 158, 11, 0.2)"
      },
      {
        icon: Users,
        text: "Liderazgo efectivo de equipo de desarrollo",
        color: "text-purple-400",
        bgColor: "from-purple-500/10 to-pink-500/10",
        borderColor: "border-purple-500/20",
        shadowColor: "rgba(139, 92, 246, 0.2)"
      },
      {
        icon: Code,
        text: "Líder exclusivo en arquitectura y gestión de datos",
        color: "text-cyan-400",
        bgColor: "from-cyan-500/10 to-blue-500/10",
        borderColor: "border-cyan-500/20",
        shadowColor: "rgba(6, 182, 212, 0.2)"
      },
      {
        icon: Award,
        text: "Reconocimiento por calidad y liderazgo técnico",
        color: "text-green-400",
        bgColor: "from-green-500/10 to-emerald-500/10",
        borderColor: "border-green-500/20",
        shadowColor: "rgba(34, 197, 94, 0.2)"
      }
    ],
    companyInfo: {
      supervisor: "Glen Vallejo",
      phone: "+593 96 045 4285",
      email: "gvallejo@codeec.net", // Puedes cambiar este email
      address: "Ecuador - Guayaquil" // Puedes agregar dirección específica
    },
    certificate: {
      available: true,
      filename: "certificado-laboral-codeec.pdf"
    },
    companyLogo: "/codeec.png"
  },
  // {
  //   id: "freelance",
  //   company: "Desarrollo Freelance & Proyectos Independientes",
  //   position: "Full Stack Developer",
  //   description: "Proyectos independientes y colaboraciones con múltiples empresas",
  //   duration: "2023 - Presente",
  //   period: "1 año",
  //   location: "Remoto",
  //   technologies: ["React", "Node.js", "React Native", "MongoDB", "PostgreSQL", "Firebase"],
  //   responsibilities: [
  //     "Desarrollo de aplicaciones web completas con React, Node.js y bases de datos relacionales",
  //     "Creación de aplicaciones móviles multiplataforma con React Native",
  //     "Implementación de sistemas de gestión empresarial con dashboards administrativos",
  //     "Desarrollo de APIs RESTful robustas y documentación técnica completa",
  //     "Colaboración directa con clientes bajo contratos de confidencialidad",
  //     "Optimización de rendimiento y mejora continua de aplicaciones existentes"
  //   ],
  //   achievements: [
  //     {
  //       icon: Star,
  //       text: "8+ proyectos completados con satisfacción del cliente",
  //       color: "text-yellow-400",
  //       bgColor: "from-yellow-500/10 to-orange-500/10",
  //       borderColor: "border-yellow-500/20",
  //       shadowColor: "rgba(245, 158, 11, 0.2)"
  //     },
  //     {
  //       icon: Code,
  //       text: "Código limpio, documentado y mantenible",
  //       color: "text-cyan-400",
  //       bgColor: "from-cyan-500/10 to-blue-500/10",
  //       borderColor: "border-cyan-500/20",
  //       shadowColor: "rgba(6, 182, 212, 0.2)"
  //     }
  //   ],
  //   certificate: {
  //     available: false
  //   }
  // }
  
  /* 
  // PLANTILLA PARA NUEVA EXPERIENCIA - DESCOMENTA Y EDITA SEGÚN NECESITES
  {
    id: "nueva_empresa", // ID único para la experiencia
    company: "Nombre de la Empresa", // Nombre de la empresa (aparecerá grande y prominente)
    position: "Tu Posición Completa", // Tu cargo exacto en la empresa
    description: "Descripción impactante del rol", // Descripción que resuma tu impacto
    duration: "YYYY - YYYY", // Período exacto trabajado
    period: "X años/meses", // Duración total calculada
    location: "Ciudad, País", // Ubicación de trabajo
    technologies: ["Tech1", "Tech2", "Tech3"], // Tecnologías utilizadas
    responsibilities: [
      "Responsabilidad específica 1 con métricas si es posible",
      "Responsabilidad 2 mencionando tecnologías utilizadas",
      "Logro específico 3 con impacto cuantificable",
      "Colaboración 4 describiendo el trabajo en equipo",
      "Liderazgo 5 si aplicaste algún tipo de liderazgo",
      "Innovación 6 cualquier mejora o innovación implementada"
    ],
    achievements: [
      {
        icon: Trophy, // Íconos: Star, Trophy, Users, Code, Briefcase, Award
        text: "Logro cuantificable específico",
        color: "text-yellow-400",
        bgColor: "from-yellow-500/10 to-orange-500/10",
        borderColor: "border-yellow-500/20",
        shadowColor: "rgba(245, 158, 11, 0.2)"
      },
      // Máximo 4 achievements para mantener el diseño elegante
    ],
    companyInfo: {
      supervisor: "Nombre del Supervisor/Jefe",
      phone: "+593 XX XXX XXXX", // Número de contacto
      email: "supervisor@empresa.com", // Email de contacto (opcional)
      address: "Dirección completa de la empresa" // Dirección (opcional)
    },
    certificate: {
      available: true, // true si tienes certificado disponible
      filename: "certificado-empresa.pdf" // nombre del archivo
    },
    companyLogo: "/path/to/logo.png" // Opcional: logo de la empresa
  }
  */
]

// Función para manejar la descarga del certificado
const handleCertificateDownload = (filename: string, company: string) => {
  // CONFIGURACIÓN DE RUTA DEL CERTIFICADO
  // 🔥 CAMBIA ESTA RUTA SEGÚN DONDE COLOQUES TU PDF:
  
  // Opción 1: Si está en public/certificates/
  const link = document.createElement('a')
  link.href = `/CERTIFICADO_LABORAL_STANLEY.pdf` 
  
  // Opción 2: Si está en src/assets/certificates/ (descomenta la línea de abajo)
  // link.href = require(`../assets/certificates/${filename}`)
  
  // Opción 3: Si tienes una URL externa o servidor
  // link.href = `https://tu-servidor.com/certificates/${filename}`
  
  link.download = filename
  link.click()
  
  // Opcional: mostrar notificación de descarga
  console.log(`Descargando certificado laboral de ${company}`)
}

// Componente individual para cada experiencia
function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10 mb-12 shadow-2xl"
      whileHover={{
        scale: 1.02,
        backgroundColor: "rgba(255,255,255,0.15)",
        boxShadow: "0 25px 80px rgba(6, 182, 212, 0.3)",
      }}
    >
      {/* Header de la empresa */}
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.3 + 0.2 }}
      >
        <motion.h3 
          className="text-4xl sm:text-5xl font-bold mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {experience.company}
          </span>
        </motion.h3>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-4"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
        />
      </motion.div>

      <div className="flex flex-col xl:flex-row items-start space-y-8 xl:space-y-0 xl:space-x-10">
        {/* Ícono de la empresa */}
        <motion.div
          className="w-24 h-24 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto xl:mx-0"
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={{
            boxShadow: [
              "0 0 30px rgba(6, 182, 212, 0.6)",
              "0 0 50px rgba(59, 130, 246, 0.8)",
              "0 0 30px rgba(139, 92, 246, 0.6)",
            ],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          {experience.companyLogo ? (
            <img 
              src={experience.companyLogo} 
              alt={`${experience.company} logo`}
              className="w-14 h-14 object-contain"
            />
          ) : (
            <Briefcase className="text-white w-14 h-14" />
          )}
        </motion.div>
        
        <div className="flex-1 space-y-8">
          {/* Información del cargo */}
          <div className="text-center xl:text-left">
            <motion.h4 className="text-2xl sm:text-3xl font-bold text-white mb-3" whileHover={{ x: 5 }}>
              {experience.position}
            </motion.h4>
            <p className="text-purple-300 text-xl mb-3">{experience.description}</p>
            <div className="flex flex-wrap justify-center xl:justify-start gap-4 text-white/70 text-lg">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-400" />
                {experience.duration} • {experience.period}
              </span>
              {experience.location && (
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  {experience.location}
                </span>
              )}
            </div>
          </div>

          {/* Tecnologías utilizadas */}
          {experience.technologies && experience.technologies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 + 0.4 }}
            >
              <h5 className="text-white font-semibold mb-4 text-xl">Tecnologías Utilizadas:</h5>
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-cyan-300 border border-cyan-500/30 text-sm font-medium"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(6, 182, 212, 0.3)",
                      borderColor: "rgba(6, 182, 212, 0.6)"
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.3 + 0.1 * techIndex }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Responsabilidades */}
          <div className="space-y-4 text-white/80 text-lg">
            <h5 className="text-white font-semibold text-xl mb-4">Responsabilidades Principales:</h5>
            {experience.responsibilities.map((item, itemIndex) => (
              <motion.p
                key={itemIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (index * 0.3) + (itemIndex * 0.1) }}
                whileHover={{ x: 10, color: "#06b6d4" }}
                className="cursor-default"
              >
                • {item}
              </motion.p>
            ))}
          </div>

          {/* Logros destacados */}
          <div>
            <h5 className="text-white font-semibold mb-6 text-xl">Logros Destacados:</h5>
            <div className="grid sm:grid-cols-2 gap-4">
              {experience.achievements.map((achievement, achievementIndex) => (
                <motion.div
                  key={achievementIndex}
                  className={`bg-gradient-to-br ${achievement.bgColor} rounded-xl p-6 border ${achievement.borderColor}`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 15px 50px ${achievement.shadowColor}`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 + achievementIndex * 0.1 }}
                >
                  <achievement.icon className={`${achievement.color} w-8 h-8 mb-3`} />
                  <p className="text-white/90 text-base font-medium leading-relaxed">{achievement.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Información de contacto de la empresa y certificado */}
          {(experience.companyInfo || experience.certificate?.available) && (
            <motion.div
              className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-2xl p-6 border border-gray-600/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 + 0.6 }}
            >
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                {/* Información de contacto */}
                {experience.companyInfo && (
                  <div className="space-y-3">
                    <h6 className="text-white font-semibold text-lg mb-3">Información de Contacto:</h6>
                    <div className="space-y-2 text-white/80">
                      <p className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-cyan-400" />
                        <span className="font-medium">Supervisor:</span> {experience.companyInfo.supervisor}
                      </p>
                      <motion.p 
                        className="flex items-center gap-3 cursor-pointer"
                        whileHover={{ color: "#06b6d4" }}
                        onClick={() => window.open(`tel:${experience.companyInfo!.phone}`, '_self')}
                      >
                        <Phone className="w-5 h-5 text-green-400" />
                        <span className="font-medium">Teléfono:</span> {experience.companyInfo.phone}
                      </motion.p>
                      {experience.companyInfo.email && (
                        <motion.p 
                          className="flex items-center gap-3 cursor-pointer"
                          whileHover={{ color: "#06b6d4" }}
                          onClick={() => window.open(`mailto:${experience.companyInfo!.email}`, '_self')}
                        >
                          <Mail className="w-5 h-5 text-blue-400" />
                          <span className="font-medium">Email:</span> {experience.companyInfo.email}
                        </motion.p>
                      )}
                      {experience.companyInfo.address && (
                        <p className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-red-400" />
                          <span className="font-medium">Dirección:</span> {experience.companyInfo.address}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Botón de descarga de certificado */}
                {experience.certificate?.available && (
                  <motion.button
                    onClick={() => handleCertificateDownload(
                      experience.certificate!.filename || 'certificado.pdf', 
                      experience.company
                    )}
                    className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl border border-green-500/30"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 40px rgba(34, 197, 94, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-6 h-6" />
                    <span>Descargar Certificado Laboral</span>
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function ExperienciaSection() {
  return (
    <motion.section
      key="experiencia"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen py-20 bg-gradient-to-b from-black/40 to-black/20 pt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" whileHover={{ scale: 1.05 }}>
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experiencia Profesional
            </span>
          </motion.h2>
          <motion.div
            className="w-40 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p 
            className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Trayectoria profesional en desarrollo full-stack con enfoque en liderazgo técnico 
            y entrega de soluciones innovadoras para empresas
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

/*
===========================================
📋 DOCUMENTACIÓN COMPLETA PARA AGREGAR NUEVAS EXPERIENCIAS
===========================================

🎯 CARACTERÍSTICAS INCLUIDAS:
✅ Nombre de empresa prominente y grande
✅ Información detallada del cargo y responsabilidades  
✅ Tecnologías utilizadas con badges animados
✅ Información completa de contacto (supervisor, teléfono, email)
✅ Botón de descarga de certificado laboral animado
✅ Diseño completamente responsive y elegante
✅ Animaciones fluidas y profesionales

📝 PARA AGREGAR UNA NUEVA EXPERIENCIA:

1. Descomenta la plantilla en el array 'experiences'
2. Completa todos los campos requeridos:

📊 CAMPOS PRINCIPALES:
- id: Identificador único (ej: "google", "microsoft")
- company: Nombre completo de la empresa (aparece grande)
- position: Tu cargo exacto
- description: Resumen impactante de tu rol
- duration: Período trabajado (ej: "2022 - 2023")
- period: Duración total (ej: "1 año", "8 meses")
- location: Ubicación (ej: "Guayaquil, Ecuador")

💻 TECNOLOGÍAS:
- technologies: Array con todas las tecnologías ["React", "Laravel", "Angular"]

📋 RESPONSABILIDADES:
- responsibilities: 6-8 responsabilidades detalladas con impacto

🏆 LOGROS (máximo 4 para diseño elegante):
- icon: Star, Trophy, Users, Code, Award, Briefcase
- text: Descripción del logro
- color: Color del ícono
- bgColor: Gradiente de fondo
- borderColor: Color del borde
- shadowColor: Color de sombra hover

📞 INFORMACIÓN DE CONTACTO:
- supervisor: Nombre del jefe/supervisor
- phone: Número de teléfono con formato +593
- email: Email de contacto (opcional)
- address: Dirección completa (opcional)

📜 CERTIFICADO LABORAL:
- available: true/false si tienes certificado
- filename: nombre del archivo (ej: "certificado-empresa.pdf")

🎨 PALETA DE COLORES DISPONIBLE:
- Amarillo: "text-yellow-400", "from-yellow-500/10 to-orange-500/10"
- Cyan: "text-cyan-400", "from-cyan-500/10 to-blue-500/10"  
- Púrpura: "text-purple-400", "from-purple-500/10 to-pink-500/10"
- Verde: "text-green-400", "from-green-500/10 to-emerald-500/10"

📁 CONFIGURACIÓN DE CERTIFICADOS:
1. Crea una carpeta 'certificates' en tu proyecto
2. Coloca tus certificados PDF ahí
3. El botón de descarga funcionará automáticamente

🚀 FUNCIONALIDADES AUTOMÁTICAS:
- Cards con animaciones escalonadas
- Hover effects en todos los elementos
- Responsivo para todos los dispositivos
- Enlaces telefónicos y email clicables
- Descarga de certificados con un click
- Badges de tecnologías con animaciones

El diseño mantiene la elegancia y profesionalismo mientras muestra 
toda la información necesaria de manera organizada y atractiva.
*/