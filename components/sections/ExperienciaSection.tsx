"use client"

import React from "react"
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
    pdfPath?: string
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
    duration: "30 de junio del 2024 - 30 de junio 2025",
    period: "1 año",
    location: "Ecuador",
    technologies: ["Laravel", "Angular", "ApiRestFull", "Boostrap", "Node.js", "MySQL", "TypeScript"],
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
      supervisor: "Ing. Glen Vallejo",
      phone: "+593 96 045 4285",
      email: "gvallejo@codeec.net",
      address: "Ecuador - Guayaquil"
    },
    certificate: {
      available: true,
      filename: "certificado-laboral-codeec.pdf",
      pdfPath: "/CERTIFICADO_LABORAL_STANLEY.pdf"
    },
    companyLogo: "/codeec.png"
  },
  {
    id: "loymadf",
    company: "Fundación LOYMADF",
    position: "Profesor de Programación",
    description: "Formación técnica especializada en programación con enfoque en desarrollo profesional",
    duration: "Febrero 2022 - Abril 2024",
    period: "2 años 2 meses",
    location: "San Lorenzo, Ecuador",
    technologies: ["JavaScript", "Python", "HTML/CSS", "React", "Node.js", "Bases de Datos", "Git", "Metodologías Ágiles"],
    responsibilities: [
      "Diseño e impartición de cursos especializados en programación y desarrollo web",
      "Formación de estudiantes en tecnologías frontend y backend modernas",
      "Desarrollo de metodologías de enseñanza innovadoras para programación práctica",
      "Mentoría personalizada a estudiantes en proyectos de desarrollo real",
      "Creación de material didáctico y recursos educativos especializados",
      "Evaluación continua del progreso estudiantil con retroalimentación constructiva",
      "Implementación de proyectos prácticos que simulan entornos de trabajo reales",
      "Coordinación con el equipo académico para mejora continua del programa educativo",
      "Preparación de estudiantes para inserción laboral en el sector tecnológico"
    ],
    achievements: [
      {
        icon: Users,
        text: "Formación exitosa de múltiples generaciones de programadores",
        color: "text-blue-400",
        bgColor: "from-blue-500/10 to-indigo-500/10",
        borderColor: "border-blue-500/20",
        shadowColor: "rgba(59, 130, 246, 0.2)"
      },
      {
        icon: Award,
        text: "Reconocimiento por confianza, respeto y responsabilidad",
        color: "text-green-400",
        bgColor: "from-green-500/10 to-emerald-500/10",
        borderColor: "border-green-500/20",
        shadowColor: "rgba(34, 197, 94, 0.2)"
      },
      {
        icon: Code,
        text: "Desarrollo de metodologías innovadoras de enseñanza",
        color: "text-purple-400",
        bgColor: "from-purple-500/10 to-pink-500/10",
        borderColor: "border-purple-500/20",
        shadowColor: "rgba(139, 92, 246, 0.2)"
      },
      {
        icon: Star,
        text: "2+ años de experiencia formando talento tecnológico",
        color: "text-yellow-400",
        bgColor: "from-yellow-500/10 to-orange-500/10",
        borderColor: "border-yellow-500/20",
        shadowColor: "rgba(245, 158, 11, 0.2)"
      }
    ],
    companyInfo: {
      supervisor: "Tlgo. Luis Yépez M.",
      phone: "+593 98 182 9876",
      email: "presidencia@loymadf.org",
      address: "San Lorenzo, Ecuador"
    },
    certificate: {
      available: true,
      filename: "certificado-loymadf.pdf",
      pdfPath: "/CERTICACION-LOYMADF.pdf"
    },
    companyLogo: "/logo.png"
  },
]

// Función mejorada para manejar la descarga del certificado específico
const handleCertificateDownload = (experience: Experience) => {
  if (!experience.certificate?.available || !experience.certificate?.pdfPath) {
    console.error('Certificado no disponible para esta experiencia')
    return
  }

  try {
    const link = document.createElement('a')
    link.href = experience.certificate.pdfPath
    link.download = experience.certificate.filename || `certificado-${experience.company.toLowerCase().replace(/\s+/g, '-')}.pdf`
    link.click()
    
    console.log(`Descargando certificado laboral de ${experience.company}: ${experience.certificate.pdfPath}`)
  } catch (error) {
    console.error('Error al descargar el certificado:', error)
  }
}

// Componente individual para cada experiencia
function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <div
      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10 mb-12 shadow-2xl hover:scale-[1.02] hover:bg-white/15 hover:shadow-[0_25px_80px_rgba(6,182,212,0.3)] transition-all duration-300 animate-fadeInUp"
      style={{ animationDelay: `${index * 300}ms` }}
    >
      {/* Header de la empresa */}
      <div className="text-center mb-10 animate-fadeInUp" style={{ animationDelay: `${index * 300 + 200}ms` }}>
        <h3 className="text-4xl sm:text-5xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {experience.company}
          </span>
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-4 animate-scaleX" style={{ animationDelay: `${index * 300 + 500}ms` }} />
      </div>

      <div className="flex flex-col xl:flex-row items-start space-y-8 xl:space-y-0 xl:space-x-10">
        {/* Ícono de la empresa */}
        <div
          className="w-24 h-24 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto xl:mx-0 hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.6)] animate-pulse-glow"
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
        </div>
        
        <div className="flex-1 space-y-8">
          {/* Información del cargo */}
          <div className="text-center xl:text-left">
            <h4 className="text-2xl sm:text-3xl font-bold text-white mb-3 hover:translate-x-2 transition-transform duration-300">
              {experience.position}
            </h4>
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
            <div className="animate-fadeInUp" style={{ animationDelay: `${index * 300 + 400}ms` }}>
              <h5 className="text-white font-semibold mb-4 text-xl">Tecnologías Utilizadas:</h5>
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-cyan-300 border border-cyan-500/30 text-sm font-medium hover:scale-110 hover:bg-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 animate-slideInLeft"
                    style={{ animationDelay: `${index * 300 + techIndex * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Responsabilidades */}
          <div className="space-y-4 text-white/80 text-lg">
            <h5 className="text-white font-semibold text-xl mb-4">Responsabilidades Principales:</h5>
            {experience.responsibilities.map((item, itemIndex) => (
              <p
                key={itemIndex}
                className="hover:translate-x-4 hover:text-cyan-400 transition-all duration-300 cursor-default animate-slideInLeft"
                style={{ animationDelay: `${(index * 300) + (itemIndex * 100)}ms` }}
              >
                • {item}
              </p>
            ))}
          </div>

          {/* Logros destacados */}
          <div>
            <h5 className="text-white font-semibold mb-6 text-xl">Logros Destacados:</h5>
            <div className="grid sm:grid-cols-2 gap-4">
              {experience.achievements.map((achievement, achievementIndex) => (
                <div
                  key={achievementIndex}
                  className={`bg-gradient-to-br ${achievement.bgColor} rounded-xl p-6 border ${achievement.borderColor} hover:scale-105 transition-all duration-300 animate-fadeInUp`}
                  style={{ 
                    animationDelay: `${index * 300 + achievementIndex * 100}ms`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 15px 50px ${achievement.shadowColor}`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <achievement.icon className={`${achievement.color} w-8 h-8 mb-3`} />
                  <p className="text-white/90 text-base font-medium leading-relaxed">{achievement.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Información de contacto de la empresa y certificado */}
          {(experience.companyInfo || experience.certificate?.available) && (
            <div
              className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-2xl p-6 border border-gray-600/30 animate-fadeInUp"
              style={{ animationDelay: `${index * 300 + 600}ms` }}
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
                      <p 
                        className="flex items-center gap-3 cursor-pointer hover:text-cyan-400 transition-colors duration-300"
                        onClick={() => window.open(`tel:${experience.companyInfo!.phone}`, '_self')}
                      >
                        <Phone className="w-5 h-5 text-green-400" />
                        <span className="font-medium">Teléfono:</span> {experience.companyInfo.phone}
                      </p>
                      {experience.companyInfo.email && (
                        <p 
                          className="flex items-center gap-3 cursor-pointer hover:text-cyan-400 transition-colors duration-300"
                          onClick={() => window.open(`mailto:${experience.companyInfo!.email}`, '_self')}
                        >
                          <Mail className="w-5 h-5 text-blue-400" />
                          <span className="font-medium">Email:</span> {experience.companyInfo.email}
                        </p>
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
                  <button
                    onClick={() => handleCertificateDownload(experience)}
                    className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl border border-green-500/30 hover:scale-105 active:scale-95"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 10px 40px rgba(34, 197, 94, 0.4)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = ""
                    }}
                  >
                    <Download className="w-6 h-6" />
                    <span>Descargar Certificado Laboral</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function ExperienciaSection() {
  return (
    <section
      className="min-h-screen py-20 bg-gradient-to-b from-black/40 to-black/20 pt-24 animate-slideInRight"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experiencia Profesional
            </span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 mx-auto mb-8 animate-scaleX" style={{ animationDelay: '500ms' }} />
          <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '800ms' }}>
            Trayectoria profesional en desarrollo full-stack con enfoque en liderazgo técnico 
            y entrega de soluciones innovadoras para empresas
          </p>
        </div>

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

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 30px rgba(6, 182, 212, 0.6);
          }
          50% {
            box-shadow: 0 0 50px rgba(59, 130, 246, 0.8);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInRight {
          animation: slideInRight 0.5s ease-in-out forwards;
          opacity: 0;
        }

        .animate-scaleX {
          animation: scaleX 1s ease-out forwards;
          transform-origin: left;
          transform: scaleX(0);
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}