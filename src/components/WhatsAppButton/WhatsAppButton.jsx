import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const { language } = useLanguage();

  return (
    <a
      href={`https://wa.me/573178519427?text=${encodeURIComponent(
        language === "es"
          ? "¡Hola Miguel! Me interesa trabajar contigo. ¿Podemos hablar sobre un proyecto?"
          : "Hi Miguel! I'm interested in working with you. Can we talk about a project?"
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label={
        language === "es" ? "Contactar por WhatsApp" : "Contact via WhatsApp"
      }
    >
      <div className="pulse-ring-whatsapp"></div>
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
