import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: 'XPO Logistics',
            role: 'Junior Developer',
            duration: 'Month Year - Month Year',
            description: 'Worked on freight optimization application (Transportation Management System)',
            responsibilities: [
                'Developed carrier rate calculation features',
                'Implemented bulk update functionalities',
                'Database development using SQL Server Data Tools (SSDT)',
                'Ensured code quality using SonarQube'
            ],
            technologies: ['C#', 'ASP.NET Core', 'MSSQL', 'SSDT', 'SonarQube']
        },
        {
            company: 'Sally Beauty Holdings',
            role: 'Production Support Engineer',
            duration: 'Month Year - Present',
            description: 'Maintenance and enhancement of Merlin application',
            responsibilities: [
                'Incident management (L2/L3 support)',
                'Root Cause Analysis (RCA) and resolution',
                'SQL query analysis and optimization',
                'Manual testing and bug fixing',
                'Client communication and support'
            ],
            technologies: ['Angular', 'ServiceNow', 'C#', '.NET', 'SQL Server']
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <div className="section-title">
                    <h2>Work Experience</h2>
                </div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content card">
                                <div className="experience-header">
                                    <div>
                                        <h3 className="company-name">{exp.company}</h3>
                                        <h4 className="role-name">{exp.role}</h4>
                                        <p className="duration">{exp.duration}</p>
                                    </div>
                                </div>

                                <p className="experience-description">{exp.description}</p>

                                <div className="responsibilities">
                                    <h5>Key Responsibilities:</h5>
                                    <ul>
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="tech-stack">
                                    <strong>Technologies:</strong>
                                    {exp.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
