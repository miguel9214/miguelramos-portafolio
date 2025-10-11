import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t, data } = useLanguage();
  const { name, title, subtitle, description, social } = data;

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-greeting fade-in-up">
            <span className="wave">👋</span> {t.hero.greeting}
          </div>
          <h1 className="hero-name fade-in-up">{name}</h1>
          <h2 className="hero-title fade-in-up">{title}</h2>
          <p className="hero-subtitle fade-in-up">{subtitle}</p>
          <p className="hero-description fade-in-up">{description}</p>

          <div className="hero-buttons fade-in-up">
            <a href="#contact" className="btn btn-primary">
              {t.hero.contact}
            </a>
            <a href="/cv-miguel-ramos.pdf" download className="btn btn-outline">
              <HiDownload /> {t.hero.downloadCV}
            </a>
          </div>

          <div className="hero-social fade-in-up">
            <a 
              href={social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href={social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href={social.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a 
              href={social.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper float">
            <img 
              src="/images/profile.jpg" 
              alt={name}
              className="profile-image"
            />
            <div className="image-border"></div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;