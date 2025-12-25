import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: ['Angular', 'C#']
        },
        {
            title: 'Web Technologies',
            skills: ['HTML5', 'CSS3', 'Bootstrap', 'Responsive Web Design']
        },
        {
            title: 'Frameworks',
            skills: ['.NET Framework', 'ASP.NET Core']
        },
        {
            title: 'Databases',
            skills: ['SQL Server']
        },
        {
            title: 'Cloud',
            skills: ['Microsoft Azure', 'Azure Web Apps']
        },
        {
            title: 'Tools',
            skills: ['Postman', 'Swagger', 'SonarQube', 'SSMS']
        },
        {
            title: 'Methodology',
            skills: ['Agile (Scrum)']
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-title">
                    <h2>Skills & Technologies</h2>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card card">
                            <div className="skill-card-header">
                                <div className="skill-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                    </svg>
                                </div>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">
                                        {skill}
                                    </span>
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
