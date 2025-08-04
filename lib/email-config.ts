// OPCIÓN 1: Configuración para EmailJS (Más fácil de configurar)
export const EMAILJS_CONFIG = {
  SERVICE_ID: "tu_service_id", // Obtienes esto de EmailJS
  TEMPLATE_ID: "tu_template_id", // Obtienes esto de EmailJS
  PUBLIC_KEY: "tu_public_key", // Obtienes esto de EmailJS
}

// OPCIÓN 2: Configuración para Resend (Más profesional)
export const RESEND_CONFIG = {
  API_KEY: process.env.RESEND_API_KEY, // Variable de entorno
  FROM_EMAIL: "contacto@tudominio.com", // Tu dominio verificado
  TO_EMAIL: "arcee1060@gmail.com", // Tu email personal
}

// Template de email para Resend
export const EMAIL_TEMPLATE = (data: {
  name: string
  email: string
  subject: string
  message: string
}) => ({
  from: RESEND_CONFIG.FROM_EMAIL,
  to: RESEND_CONFIG.TO_EMAIL,
  subject: `🚀 Nuevo mensaje de ${data.name} - ${data.subject}`,
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 10px;">
      <div style="background: linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
        <h1 style="color: white; margin: 0; font-size: 28px;">🚀 Nuevo Mensaje de Contacto</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Portafolio Erick Arce</p>
      </div>
      
      <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <div style="margin-bottom: 20px;">
          <h3 style="color: #1f2937; margin: 0 0 10px 0; font-size: 18px;">👤 Información del Contacto</h3>
          <p style="margin: 5px 0; color: #4b5563;"><strong>Nombre:</strong> ${data.name}</p>
          <p style="margin: 5px 0; color: #4b5563;"><strong>Email:</strong> ${data.email}</p>
          <p style="margin: 5px 0; color: #4b5563;"><strong>Asunto:</strong> ${data.subject}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px;">💬 Mensaje</h3>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4;">
            <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>
        
        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">
          <p style="margin: 0; color: #6b7280; font-size: 14px;">
            📍 Enviado desde: Portafolio Web<br>
            🕒 Fecha: ${new Date().toLocaleString("es-EC", { timeZone: "America/Guayaquil" })}
          </p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 20px;">
        <p style="color: #6b7280; font-size: 12px; margin: 0;">
          Este mensaje fue enviado desde tu portafolio web
        </p>
      </div>
    </div>
  `,
})
