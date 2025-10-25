import { useLanguage } from '../../context/LanguageContext';
import './About.css';

const About = () => {
  const { t, data } = useLanguage();
  const { about, stats, location } = data;

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>
        <p className="section-subtitle">{t.about.subtitle}</p>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">{about.description}</p>
            <p className="about-mission">{about.mission}</p>

            <div className="about-interests">
              <h3>{t.about.interests}</h3>
              <div className="interests-list">
                {about.interests.map((interest) => (
                  <span key={interest} className="tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="about-location">
              <span className="location-icon">📍</span>
              <span>{location}</span>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;