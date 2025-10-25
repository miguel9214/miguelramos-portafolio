import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
    let timeoutId = null;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Throttle scroll events to improve performance
      if (timeoutId) return;

      timeoutId = setTimeout(() => {
        const currentScrollY = window.scrollY;
        if ((lastScrollY <= 50 && currentScrollY > 50) || (lastScrollY > 50 && currentScrollY <= 50)) {
          setIsScrolled(currentScrollY > 50);
        }
        lastScrollY = currentScrollY;
        timeoutId = null;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { name: t.nav.home, href: '/', icon: <FaHome /> },
    { name: t.nav.about, href: '/about', icon: <FaUser /> },
    { name: t.nav.skills, href: '/skills', icon: <FaCode /> },
    { name: t.nav.experience, href: '/experience', icon: <FaBriefcase /> },
    { name: t.nav.projects, href: '/projects', icon: <FaProjectDiagram /> },
    { name: t.nav.contact, href: '/contact', icon: <FaEnvelope /> }
  ];

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Portfolio</span>
        </Link>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={`navbar-link ${location.pathname === item.href ? 'active' : ''}`}
                onClick={handleMenuClick}
              >
                <span className="navbar-icon">{item.icon}</span>
                <span className="navbar-text">{item.name}</span>
              </Link>
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