import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './Experience.css';

const Experience = () => {
  const { t, data } = useLanguage();
  const { experience } = data;

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">{t.experience.title}</h2>
        <p className="section-subtitle">{t.experience.subtitle}</p>

        <div className="experience-timeline">
          {experience.map((exp) => (
            <div key={`${exp.company}-${exp.position}`} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-position">{exp.position}</h3>
                    <h4 className="experience-company">
                      <FaBriefcase /> {exp.company}
                    </h4>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>

                <div className="experience-location">
                  <FaMapMarkerAlt /> {exp.location}
                </div>

                <p className="experience-description">{exp.description}</p>

                {exp.achievements && (
                  <div className="achievements">
                    <h5>{t.experience.achievements}:</h5>
                    <ul>
                      {exp.achievements.map((achievement) => (
                        <li key={`${exp.company}-${achievement.substring(0, 20)}`}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;