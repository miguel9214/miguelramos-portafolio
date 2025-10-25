import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaHeart } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t, data } = useLanguage();
  const { name, social } = data;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: social.github, label: 'GitHub' },
    { icon: <FaLinkedin />, url: social.linkedin, label: 'LinkedIn' },
    { icon: <FaWhatsapp />, url: social.whatsapp, label: 'WhatsApp' },
    { icon: <FaTwitter />, url: social.twitter, label: 'Twitter' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>{name}</h3>
            <p>Full Stack Developer</p>
          </div>

          <div className="footer-social">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} {name}. {t.footer.rights}.
          </p>
          <p className="footer-made">
            {t.footer.madeWith} <FaHeart className="heart-icon" /> {t.footer.by} Miguel Angel Ramos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;