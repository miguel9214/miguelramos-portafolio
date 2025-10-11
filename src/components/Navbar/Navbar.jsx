import { useState, useEffect } from 'react';
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaUser, 
  FaCode, 
  FaBriefcase, 
  FaProjectDiagram, 
  FaEnvelope 
} from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: t.nav.home, href: '#hero', icon: <FaHome /> },
    { name: t.nav.about, href: '#about', icon: <FaUser /> },
    { name: t.nav.skills, href: '#skills', icon: <FaCode /> },
    { name: t.nav.experience, href: '#experience', icon: <FaBriefcase /> },
    { name: t.nav.projects, href: '#projects', icon: <FaProjectDiagram /> },
    { name: t.nav.contact, href: '#contact', icon: <FaEnvelope /> }
  ];

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <a href="#hero" className="navbar-logo">
          <span className="logo-text">Portfolio</span>
        </a>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="navbar-link"
                onClick={handleMenuClick}
              >
                <span className="navbar-icon">{item.icon}</span>
                <span className="navbar-text">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            {language === 'es' ? '🇬🇧 EN' : '🇪🇸 ES'}
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;