import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t, data } = useLanguage();
  const { email, phone, location, social } = data;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulación de envío (puedes integrar con un servicio real aquí)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: t.contact.email,
      value: email,
      link: `mailto:${email}`
    },
    {
      icon: <FaPhone />,
      title: t.nav.contact,
      value: phone,
      link: `tel:${phone}`
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: phone,
      link: social.whatsapp
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Ubicación",
      value: location,
      link: "#"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="section-subtitle">{t.contact.subtitle}</p>

        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.link}
                className="contact-info-item"
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <h4>{info.title}</h4>
                  <p>{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t.contact.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.contact.namePlaceholder}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.contact.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.contact.emailPlaceholder}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.contact.message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contact.messagePlaceholder}
                rows="5"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? t.contact.sending : t.contact.send}
            </button>

            {status === 'success' && (
              <p className="form-message success">{t.contact.success}</p>
            )}
            {status === 'error' && (
              <p className="form-message error">{t.contact.error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;