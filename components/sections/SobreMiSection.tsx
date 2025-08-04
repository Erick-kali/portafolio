"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Briefcase, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

// const skills = [
//   { name: "React/Next.js", level: 90, icon: "⚛️", color: "from-blue-400 via-cyan-400 to-teal-400" },
//   { name: "Node.js", level: 85, icon: "🟢", color: "from-green-400 via-emerald-400 to-teal-400" },
//   { name: "TypeScript", level: 88, icon: "🔷", color: "from-blue-500 via-indigo-500 to-purple-500" },
//   { name: "Python", level: 88, icon: "🐍", color: "from-yellow-400 via-orange-400 to-red-400" },
//   { name: "PHP", level: 85, icon: "🐘", color: "from-purple-600 via-indigo-600 to-blue-600" },
//   { name: "Java", level: 80, icon: "☕", color: "from-orange-600 via-red-600 to-pink-600" },
//   { name: "Angular", level: 85, icon: "🅰️", color: "from-red-500 via-pink-500 to-rose-500" },
//   { name: "Laravel", level: 85, icon: "🎯", color: "from-red-600 via-pink-600 to-rose-600" },
//   { name: "MySQL", level: 88, icon: "🐬", color: "from-blue-600 via-cyan-600 to-teal-600" },
//   { name: "MongoDB", level: 85, icon: "🍃", color: "from-green-600 via-teal-600 to-cyan-600" },
// ]

const specialtySkills: Record<string, Array<{name: string, level: number, icon: string, color: string}>> = {
  frontend: [
    { name: "React/Next.js", level: 59, icon: "⚛️", color: "from-blue-400 via-cyan-400 to-teal-400" },
    { name: "Angular", level: 73, icon: "🅰️", color: "from-red-500 via-pink-500 to-rose-500" },
    { name: "JavaScript", level: 61, icon: "🟨", color: "from-yellow-400 via-amber-400 to-orange-400" },
    { name: "TypeScript", level: 64, icon: "🔷", color: "from-blue-500 via-indigo-500 to-purple-500" },
    { name: "HTML", level: 70, icon: "🌐", color: "from-orange-500 via-red-500 to-pink-500" },
    { name: "CSS", level: 70, icon: "🎨", color: "from-blue-500 via-purple-500 to-pink-500" },
    { name: "React Native", level: 60, icon: "📱", color: "from-purple-400 via-pink-400 to-rose-400" },
  ],
  backend: [
    { name: "PHP", level: 73, icon: "🐘", color: "from-purple-600 via-indigo-600 to-blue-600" },
    { name: "Java", level: 72, icon: "☕", color: "from-orange-600 via-red-600 to-pink-600" },
    { name: "Python", level: 81, icon: "🐍", color: "from-yellow-400 via-orange-400 to-red-400" },
    { name: "C#", level: 54, icon: "🔷", color: "from-blue-600 via-purple-600 to-indigo-600" },
    { name: "CodeIgniter", level: 71, icon: "🔥", color: "from-red-500 via-orange-500 to-yellow-500" },
    { name: "Laravel", level: 80, icon: "🎯", color: "from-red-600 via-pink-600 to-rose-600" },
    { name: "Django", level: 80, icon: "🎸", color: "from-green-600 via-teal-600 to-cyan-600" },
    { name: "Node.js", level: 76, icon: "🟢", color: "from-green-400 via-emerald-400 to-teal-400" },
  ],
  gui: [
    { name: "Tkinter", level: 80, icon: "🖥️", color: "from-green-500 via-teal-500 to-cyan-500" },
    { name: "Java Swing", level: 60, icon: "☕", color: "from-orange-600 via-red-600 to-pink-600" },
    { name: "JavaFX", level: 50, icon: "🎭", color: "from-blue-600 via-purple-600 to-indigo-600" },
  ],
  devops: [
    { name: "AWS", level: 54, icon: "☁️", color: "from-orange-500 via-amber-500 to-yellow-500" },
    { name: "Docker", level: 66, icon: "🐳", color: "from-blue-500 via-cyan-500 to-teal-500" },
    { name: "Git", level: 90, icon: "🔧", color: "from-orange-500 via-red-500 to-pink-500" },
    { name: "GitHub", level: 90, icon: "🐙", color: "from-gray-600 via-orange-500 to-red-500" },
    { name: "KaliLinux", level: 85, icon: "🐉", color: "from-green-600 via-teal-600 to-cyan-600" },
    { name: "LinuxMint", level: 88, icon: "🐧", color: "from-green-500 via-emerald-500 to-teal-500" },
    { name: "Windows", level: 79, icon: "🪟", color: "from-blue-500 via-cyan-500 to-teal-500" },
    { name: "CI/CD", level: 80, icon: "🚀", color: "from-purple-500 via-pink-500 to-rose-500" },
    //{ name: "Nginx", level: 75, icon: "🌐", color: "from-green-500 via-emerald-500 to-teal-500" },
    { name: "Hostinger", level: 72, icon: "🌐", color: "from-purple-500 via-pink-500 to-rose-500" },
  ],
  database: [
    { name: "MongoDB", level: 65, icon: "🍃", color: "from-green-600 via-teal-600 to-cyan-600" },
    { name: "MySQL", level: 89, icon: "🐬", color: "from-blue-600 via-cyan-600 to-teal-600" },
    { name: "PostgreSQL", level: 59, icon: "🐘", color: "from-blue-600 via-cyan-600 to-sky-600" },
    { name: "SQL Server", level: 88, icon: "🗄️", color: "from-red-600 via-orange-600 to-yellow-600" },
    { name: "Redis", level: 22, icon: "📦", color: "from-red-500 via-pink-500 to-rose-500" },
  ]
}

const personalSkills = [
  { name: "Respeto", level: 95, icon: "🤝", color: "from-blue-400 via-cyan-400 to-teal-400" },
  { name: "Humildad", level: 90, icon: "🙏", color: "from-green-500 via-emerald-500 to-teal-500" },
  { name: "Responsabilidad", level: 92, icon: "⚡", color: "from-yellow-500 via-orange-500 to-red-500" },
  { name: "Trabajo en Equipo", level: 88, icon: "👥", color: "from-purple-500 via-pink-500 to-rose-500" },
  { name: "Comunicación", level: 85, icon: "💬", color: "from-indigo-500 via-purple-500 to-pink-500" },
  { name: "Adaptabilidad", level: 90, icon: "🔄", color: "from-cyan-500 via-blue-500 to-indigo-500" },
  { name: "Creatividad", level: 87, icon: "💡", color: "from-amber-500 via-yellow-500 to-orange-500" },
  { name: "Perseverancia", level: 93, icon: "🎯", color: "from-red-500 via-pink-500 to-rose-500" },
]

export function SobreMiSection() {
  const [activeSpecialty, setActiveSpecialty] = useState<string | null>("frontend")

  const toggleSpecialty = (specialty: string) => {
    setActiveSpecialty(activeSpecialty === specialty ? null : specialty)
  }

  const getSpecialtyDisplayName = (specialty: string | null) => {
    if (!specialty) return "personales"
    switch(specialty) {
      case 'gui': return 'GUI/Desktop'
      case 'personal': return 'Habilidades Personales'
      default: return specialty.charAt(0).toUpperCase() + specialty.slice(1)
    }
  }

  return (
    <motion.section
      key="sobre-mi"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen py-20 bg-gradient-to-b from-slate-700/40 to-gray-700/60 pt-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" whileHover={{ scale: 1.05 }}>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sobre Mí
            </span>
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h3 className="text-3xl sm:text-4xl font-bold text-white" whileHover={{ scale: 1.02, x: 10 }}>
              Full Stack Developer Jr
            </motion.h3>
            <motion.p
              className="text-white/80 text-lg leading-relaxed"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Soy un desarrollador Full Stack Jr con 1 año de experiencia profesional, apasionado por crear soluciones
              tecnológicas innovadoras y eficientes. Ubicado en{" "}
              <span className="text-cyan-400 font-semibold">Guayaquil, Ecuador</span>, mi enfoque se centra en el
              desarrollo de aplicaciones web y móviles modernas utilizando las últimas tecnologías.
            </motion.p>
            <motion.p
              className="text-white/80 text-lg leading-relaxed"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Durante mi trayectoria he trabajado en proyectos diversos, desde sistemas de gestión empresarial hasta
              aplicaciones móviles de e-commerce, siempre priorizando la calidad del código, la experiencia del usuario
              y las mejores prácticas de desarrollo.
            </motion.p>
            <motion.p
              className="text-white/80 text-lg leading-relaxed"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Mis valores fundamentales incluyen el <span className="text-cyan-400 font-semibold">respeto</span> hacia mis compañeros y clientes, 
              la <span className="text-green-400 font-semibold">humildad</span> para aprender constantemente, 
              y la <span className="text-yellow-400 font-semibold">responsabilidad</span> en cada proyecto que emprendo. 
              Creo firmemente en el <span className="text-purple-400 font-semibold">trabajo en equipo</span>, 
              mantengo una <span className="text-blue-400 font-semibold">comunicación</span> clara y efectiva, 
              y demuestro gran <span className="text-pink-400 font-semibold">adaptabilidad</span> ante nuevos desafíos. 
              Mi <span className="text-orange-400 font-semibold">creatividad</span> y 
              <span className="text-red-400 font-semibold"> perseverancia</span> me impulsan a encontrar soluciones innovadoras y superar obstáculos.
            </motion.p>
            <motion.div
              className="mt-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-white font-semibold mb-6 text-xl text-center">Especialidades</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: "Frontend", icon: "🎨", color: "from-blue-500 to-cyan-500", key: "frontend" },
                  { name: "Backend", icon: "⚙️", color: "from-green-500 to-emerald-500", key: "backend" },
                  { name: "GUI/Desktop", icon: "🖥️", color: "from-indigo-500 to-purple-500", key: "gui" },
                  { name: "DevOps", icon: "🚀", color: "from-purple-500 to-pink-500", key: "devops" },
                  { name: "Database", icon: "🗄️", color: "from-orange-500 to-red-500", key: "database" },
                ].map((specialty, index) => (
                  <motion.button
                    key={specialty.name}
                    className={`bg-gradient-to-r ${specialty.color} text-white px-6 py-3 rounded-full font-medium text-lg shadow-lg cursor-pointer flex items-center gap-2 ${
                      activeSpecialty === specialty.key ? 'ring-2 ring-white/50' : ''
                    }`}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleSpecialty(specialty.key)}
                  >
                    <span className="text-xl">{specialty.icon}</span>
                    {specialty.name}
                    {activeSpecialty === specialty.key ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                className="bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.25)",
                  boxShadow: "0 10px 40px rgba(6, 182, 212, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Calendar className="text-cyan-400 w-8 h-8 mb-3" />
                <h4 className="text-white font-semibold text-lg">Experiencia</h4>
                <p className="text-white/70">1 año profesional</p>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.25)",
                  boxShadow: "0 10px 40px rgba(59, 130, 246, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Briefcase className="text-blue-400 w-8 h-8 mb-3" />
                <h4 className="text-white font-semibold text-lg">Proyectos</h4>
                <p className="text-white/70">8+ completados</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Habilidades - {getSpecialtyDisplayName(activeSpecialty)}
            </h3>
            
            <motion.div
              key={activeSpecialty}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {activeSpecialty ? 
                specialtySkills[activeSpecialty]?.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(255,255,255,0.25)",
                      borderColor: "rgba(6, 182, 212, 0.4)",
                    }}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-4">
                        <motion.span className="text-3xl" whileHover={{ scale: 1.2, rotate: 10 }}>
                          {skill.icon}
                        </motion.span>
                        <h4 className="text-white font-semibold text-lg">{skill.name}</h4>
                      </div>
                      <span className="text-white/60 font-mono text-lg">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        style={{
                          boxShadow: `0 0 20px rgba(6, 182, 212, 0.5)`,
                        }}
                      />
                    </div>
                  </motion.div>
                )) :
                personalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(255,255,255,0.25)",
                      borderColor: "rgba(6, 182, 212, 0.4)",
                    }}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-4">
                        <motion.span className="text-3xl" whileHover={{ scale: 1.2, rotate: 10 }}>
                          {skill.icon}
                        </motion.span>
                        <h4 className="text-white font-semibold text-lg">{skill.name}</h4>
                      </div>
                      <span className="text-white/60 font-mono text-lg">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        style={{
                          boxShadow: `0 0 20px rgba(6, 182, 212, 0.5)`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))
              }
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}