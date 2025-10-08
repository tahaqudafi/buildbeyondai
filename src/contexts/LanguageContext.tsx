import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const translations = {
  en: {
    "navigation": {
      "contact": "Contact"
    },
    "hero": {
      "badge": "GDPR Ready • Enterprise Security • 24/7 Support",
      "headline": "AI Voice Agents that Book More Appointments and Close More Deals",
      "subheadline": "24/7 phone coverage with human-level voice, qualifying leads, handling calls, and syncing your CRM automatically.",
      "bookDemo": "Book a Demo",
      "hearSample": "Hear a Live Sample",
      "trustBar": "Powered by enterprise-grade technology",
      "stats": {
        "responseTime": {
          "label": "Response Time",
          "value": "<2min",
          "change": "vs 2h avg"
        },
        "conversionRate": {
          "label": "Conversion Rate", 
          "value": "+25%",
          "change": "increase"
        },
        "costSavings": {
          "label": "Cost Savings",
          "value": "60%",
          "change": "vs human staff"
        }
      }
    },
    "valuePillars": {
      "title": "Why Choose AI Voice Agents?",
      "subtitle": "Transform your phone experience with AI that works around the clock, sounds completely human, and drives real business results.",
      "stats": {
        "responseTime": {
          "label": "Response Time",
          "value": "<2min",
          "change": "vs 2h avg"
        },
        "conversionRate": {
          "label": "Conversion Rate",
          "value": "+25%",
          "change": "increase"
        },
        "costSavings": {
          "label": "Cost Savings",
          "value": "35%",
          "change": "vs human staff"
        }
      },
      "pillars": {
        "alwaysOn": {
          "title": "Always On",
          "description": "Never miss a lead again with 24/7 phone coverage that responds in under 2 minutes.",
          "features": [
            "Instant call pickup",
            "No hold times", 
            "24/7 availability",
            "Holiday coverage"
          ]
        },
        "lowerCost": {
          "title": "Lower Cost",
          "description": "Replace or augment call center teams while improving response time and consistency.",
          "features": [
            "30%-45% cost reduction",
            "No sick days",
            "Consistent quality",
            "Instant scaling"
          ]
        },
        "revenueReady": {
          "title": "Revenue-Ready",
          "description": "Qualifies leads, schedules appointments, updates CRM, and triggers automated workflows.",
          "features": [
            "Lead qualification",
            "Appointment booking",
            "CRM integration",
            "Workflow triggers"
          ]
        },
        "humanLevel": {
          "title": "Human-Level Voice",
          "description": "Natural conversation with memory, context, and emotional intelligence that customers trust.",
          "features": [
            "ElevenLabs TTS",
            "Context awareness",
            "Emotional responses",
            "Multiple languages"
          ]
        }
      }
    },
    "audioDemo": {
      "title": "Hear It In Action",
      "subtitle": "Listen to real conversations powered by our AI voice agents. Each agent is customized for your industry and use case.",
      "tabs": {
        "receptionist": {
          "name": "Receptionist",
          "description": "Answering calls, booking appointments, handling FAQs",
          "script": "Thanks for calling Metro Dental. I can book you in today - may I have your name and preferred time? We accept most insurance plans including BlueCross. I have Tuesday 10:30 or Wednesday 4:00 PM available. What works best for you?",
          "duration": "0:32"
        },
        "outbound": {
          "name": "Outbound Sales",
          "description": "Following up on leads, qualifying prospects", 
          "script": "Hi Sarah, this is the booking line for Home Pro Services. You requested a quote for kitchen renovation yesterday. I can schedule our designer to visit this week - would morning or afternoon work better for you?",
          "duration": "0:28"
        },
        "reminder": {
          "name": "Appointment Reminder",
          "description": "Confirming appointments, reducing no-shows",
          "script": "Hi Mr. Johnson, reminding you of your appointment tomorrow at 2 PM with Dr. Smith. Press 1 to confirm, 2 to reschedule - I can handle that right now. Otherwise, we'll see you tomorrow!",
          "duration": "0:25"
        }
      },
      "liveTranscript": "Live Transcript:"
    },
    "howItWorks": {
      "badge": "Ready in under 3 Weeks",
      "title": "How It Works",
      "subtitle": "Get up and running with enterprise-grade AI voice agents in under 3 weeks. Our proven implementation process ensures success from day one.",
      "steps": {
        "week1": {
          "title": "Connect & Configure",
          "description": "Connect your phone number and CRM. We'll configure call flows, compliance settings, and voice preferences.",
          "features": [
            "Phone number porting or forwarding",
            "CRM integration (Google calendar, Slack, etc.)",
            "Industry-specifics",
            "Compliance & consent setup"
          ]
        },
        "week2": {
          "title": "Customize & Train", 
          "description": "Build custom conversation flows, train the AI with your FAQs, and fine-tune the voice to match your brand.",
          "features": [
            "Conversation flow design",
            "FAQ training & responses",
            "Voice tone customization",
            "Integration testing"
          ]
        },
        "week3": {
          "title": "Go Live & Monitor",
          "description": "Launch your AI voice agent with real-time monitoring, analytics dashboard, and continuous optimization.",
          "features": [
            "Soft launch with monitoring",
            "Real-time analytics", 
            "Performance optimization",
            "24/7 support & monitoring"
          ]
        }
      }
    },
    "getStarted": {
      "title": "Get Started Today",
      "subtitle": "Ready to transform your phone experience? Fill out the form below and we'll get back to you within 24 hours.",
      "form": {
        "firstName": "First Name",
        "lastName": "Last Name",
        "email": "Email Address",
        "phone": "Phone Number",
        "company": "Company Name",
        "industry": "Industry",
        "message": "Tell us about your needs",
        "placeholders": {
          "firstName": "Enter your first name",
          "lastName": "Enter your last name", 
          "email": "Enter your email",
          "phone": "Enter your phone number",
          "company": "Enter your company name",
          "industry": "Select your industry",
          "message": "Describe your current phone system challenges and what you're looking to achieve..."
        },
        "industries": {
          "default": "Select your industry",
          "healthcare": "Healthcare",
          "realEstate": "Real Estate",
          "automotive": "Automotive",
          "professionalServices": "Professional Services",
          "retail": "Retail",
          "other": "Other"
        },
        "submit": "Send Message",
        "sending": "Sending...",
        "sent": "Sent!",
        "successTitle": "Message Sent Successfully! 🎉",
        "successMessage": "Thank you for reaching out! We'll get back to you within 24 hours.",
        "successNote": "This message will disappear automatically",
        "guarantee": "We'll respond within 24 hours • 30-day money-back guarantee"
      }
    },
    "footer": {
      "description": "Transform your business phone experience with AI voice agents that work 24/7, sound completely human, and drive real results.",
      "location": "Barcelona, Spain",
      "email": "taha@buildbeyondai.com",
      "company": "Company",
      "companyLinks": {
        "aboutUs": "About Us",
        "caseStudies": "Case Studies",
        "security": "Security",
        "contact": "Contact",
        "bookDemo": "Book Demo"
      },
      "legalLinks": {
        "privacyPolicy": "Privacy Policy",
        "termsOfService": "Terms of Service",
        "cookiePolicy": "Cookie Policy",
        "dpa": "DPA",
        "sla": "SLA"
      },
      "copyright": "© 2025 Build Beyond. All rights reserved."
    }
  },
  es: {
    "navigation": {
      "contact": "Contacto"
    },
    "hero": {
      "badge": "Cumple GDPR • Seguridad Empresarial • Soporte 24/7",
      "headline": "Agentes de Voz IA que Reservan mas Citas y Cierran mas Ventas",
      "subheadline": "Cobertura telefónica 24/7 con voz de nivel humano, calificando leads, manejando llamadas y sincronizando tu CRM automáticamente.",
      "bookDemo": "Reservar Demo",
      "hearSample": "Escuchar Muestra en Vivo",
      "trustBar": "Impulsado por tecnología de nivel empresarial",
      "stats": {
        "responseTime": {
          "label": "Tiempo de Respuesta",
          "value": "<2min",
          "change": "vs 2h promedio"
        },
        "conversionRate": {
          "label": "Tasa de Conversión", 
          "value": "+25%",
          "change": "aumento"
        },
        "costSavings": {
          "label": "Ahorro de Costos",
          "value": "60%",
          "change": "vs personal humano"
        }
      }
    },
    "valuePillars": {
      "title": "¿Por Qué Elegir Agentes de Voz IA?",
      "subtitle": "Transforma tu experiencia telefónica con IA que trabaja las 24 horas, suena completamente humana y genera resultados comerciales reales.",
      "stats": {
        "responseTime": {
          "label": "Tiempo de Respuesta",
          "value": "<2min",
          "change": "vs 2h promedio"
        },
        "conversionRate": {
          "label": "Tasa de Conversión",
          "value": "+25%",
          "change": "aumento"
        },
        "costSavings": {
          "label": "Ahorro de Costos",
          "value": "35%",
          "change": "vs personal humano"
        }
      },
      "pillars": {
        "alwaysOn": {
          "title": "Siempre Activo",
          "description": "Nunca pierdas un lead con cobertura telefónica 24/7 que responde en menos de 2 minutos.",
          "features": [
            "Respuesta instantánea",
            "Sin tiempos de espera", 
            "Disponibilidad 24/7",
            "Cobertura en feriados"
          ]
        },
        "lowerCost": {
          "title": "Menor Costo",
          "description": "Reemplaza o complementa equipos de call center mejorando el tiempo de respuesta y consistencia.",
          "features": [
            "30%-45% reducción de costos",
            "Sin días de enfermedad",
            "Calidad consistente",
            "Escalado instantáneo"
          ]
        },
        "revenueReady": {
          "title": "Listo para Ingresos",
          "description": "Califica leads, programa citas, actualiza CRM y activa flujos de trabajo automatizados.",
          "features": [
            "Calificación de leads",
            "Reserva de citas",
            "Integración CRM",
            "Activadores de flujo"
          ]
        },
        "humanLevel": {
          "title": "Voz de Nivel Humano",
          "description": "Conversación natural con memoria, contexto e inteligencia emocional en la que los clientes confían.",
          "features": [
            "TTS de ElevenLabs",
            "Conciencia contextual",
            "Respuestas emocionales",
            "Múltiples idiomas"
          ]
        }
      }
    },
    "audioDemo": {
      "title": "Escúchalo en Acción",
      "subtitle": "Escucha conversaciones reales impulsadas por nuestros agentes de voz IA. Cada agente está personalizado para tu industria y caso de uso.",
      "tabs": {
        "receptionist": {
          "name": "Recepcionista",
          "description": "Respondiendo llamadas, reservando citas, manejando preguntas frecuentes",
          "script": "Gracias por llamar a Metro Dental. Puedo reservarte una cita hoy - ¿puedo tener tu nombre y hora preferida? Aceptamos la mayoría de planes de seguro incluyendo BlueCross. Tengo disponible martes 10:30 o miércoles 4:00 PM. ¿Qué te funciona mejor?",
          "duration": "0:32"
        },
        "outbound": {
          "name": "Ventas Salientes",
          "description": "Siguiendo leads, calificando prospectos", 
          "script": "Hola Sarah, esta es la línea de reservas de Home Pro Services. Solicitaste una cotización para renovación de cocina ayer. Puedo programar que nuestro diseñador te visite esta semana - ¿te funciona mejor por la mañana o tarde?",
          "duration": "0:28"
        },
        "reminder": {
          "name": "Recordatorio de Cita",
          "description": "Confirmando citas, reduciendo ausencias",
          "script": "Hola Sr. Johnson, recordándole su cita mañana a las 2 PM con el Dr. Smith. Presione 1 para confirmar, 2 para reprogramar - puedo manejarlo ahora mismo. ¡De lo contrario, lo veremos mañana!",
          "duration": "0:25"
        }
      },
      "liveTranscript": "Transcripción en Vivo:"
    },
    "howItWorks": {
      "badge": "Listo en menos de 3 Semanas",
      "title": "Cómo Funciona",
      "subtitle": "Ponte en marcha con agentes de voz IA de nivel empresarial en menos de 3 semanas. Nuestro proceso de implementación probado garantiza el éxito desde el primer día.",
      "steps": {
        "week1": {
          "title": "Conectar y Configurar",
          "description": "Conecta tu número telefónico y CRM. Configuraremos flujos de llamadas, configuraciones de cumplimiento y preferencias de voz.",
          "features": [
            "Portabilidad o reenvío de número telefónico",
            "Integración CRM (Google calendar, Slack, etc.)",
            "Especificaciones de industria",
            "Configuración de cumplimiento y consentimiento"
          ]
        },
        "week2": {
          "title": "Personalizar y Entrenar", 
          "description": "Construye flujos de conversación personalizados, entrena la IA con tus preguntas frecuentes y ajusta la voz para que coincida con tu marca.",
          "features": [
            "Diseño de flujo de conversación",
            "Entrenamiento de FAQ y respuestas",
            "Personalización del tono de voz",
            "Pruebas de integración"
          ]
        },
        "week3": {
          "title": "Lanzar y Monitorear",
          "description": "Lanza tu agente de voz IA con monitoreo en tiempo real, panel de análisis y optimización continua.",
          "features": [
            "Lanzamiento suave con monitoreo",
            "Análisis en tiempo real", 
            "Optimización de rendimiento",
            "Soporte y monitoreo 24/7"
          ]
        }
      }
    },
    "getStarted": {
      "title": "Comienza Hoy",
      "subtitle": "¿Listo para transformar tu experiencia telefónica? Completa el formulario a continuación y te responderemos en 24 horas.",
      "form": {
        "firstName": "Nombre",
        "lastName": "Apellido",
        "email": "Correo Electrónico",
        "phone": "Número de Teléfono",
        "company": "Nombre de la Empresa",
        "industry": "Industria",
        "message": "Cuéntanos sobre tus necesidades",
        "placeholders": {
          "firstName": "Ingresa tu nombre",
          "lastName": "Ingresa tu apellido", 
          "email": "Ingresa tu correo electrónico",
          "phone": "Ingresa tu número de teléfono",
          "company": "Ingresa el nombre de tu empresa",
          "industry": "Selecciona tu industria",
          "message": "Describe los desafíos actuales de tu sistema telefónico y lo que buscas lograr..."
        },
        "industries": {
          "default": "Selecciona tu industria",
          "healthcare": "Salud",
          "realEstate": "Bienes Raíces",
          "automotive": "Automotriz",
          "professionalServices": "Servicios Profesionales",
          "retail": "Retail",
          "other": "Otro"
        },
        "submit": "Enviar Mensaje",
        "sending": "Enviando...",
        "sent": "¡Enviado!",
        "successTitle": "¡Mensaje Enviado Exitosamente! 🎉",
        "successMessage": "¡Gracias por contactarnos! Te responderemos en 24 horas.",
        "successNote": "Este mensaje desaparecerá automáticamente",
        "guarantee": "Responderemos en 24 horas • Garantía de devolución de dinero de 30 días"
      }
    },
    "footer": {
      "description": "Transforma la experiencia telefónica de tu negocio con agentes de voz IA que trabajan 24/7, suenan completamente humanos y generan resultados reales.",
      "location": "Barcelona, España",
      "email": "taha@buildbeyondai.com",
      "company": "Empresa",
      "companyLinks": {
        "aboutUs": "Acerca de Nosotros",
        "caseStudies": "Casos de Estudio",
        "security": "Seguridad",
        "contact": "Contacto",
        "bookDemo": "Reservar Demo"
      },
      "legalLinks": {
        "privacyPolicy": "Política de Privacidad",
        "termsOfService": "Términos de Servicio",
        "cookiePolicy": "Política de Cookies",
        "dpa": "DPA",
        "sla": "SLA"
      },
      "copyright": "© 2025 Build Beyond. Todos los derechos reservados."
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};