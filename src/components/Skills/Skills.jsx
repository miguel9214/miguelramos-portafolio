import { useLanguage } from '../../context/LanguageContext';
import './Skills.css';

const Skills = () => {
  const { t, data } = useLanguage();
  const { skills } = data;

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">{t.skills.title}</h2>
        <p className="section-subtitle">{t.skills.subtitle}</p>

        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{skillGroup.category}</h3>
              <div className="skills-list">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;