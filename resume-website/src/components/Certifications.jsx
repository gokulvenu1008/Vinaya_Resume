import React from 'react';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            title: 'Infosys Certified Front End Web Developer',
            issuer: 'Infosys',
            icon: '🎓'
        },
        {
            title: 'Infosys Certified L1 Junior Microsoft .NET Programmer',
            issuer: 'Infosys',
            icon: '🎓'
        }
    ];

    return (
        <section id="certifications" className="certifications">
            <div className="container">
                <div className="section-title">
                    <h2>Certifications</h2>
                </div>

                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certification-card card">
                            <div className="cert-icon">{cert.icon}</div>
                            <h3>{cert.title}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
