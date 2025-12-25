import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-title">
                    <h2>About Me</h2>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            I am a dedicated <strong>System Engineer / Web Application Developer</strong> with
                            <strong> 3.8+ years of experience</strong> in developing and maintaining enterprise-level
                            web applications.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <div className="highlight-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="16 18 22 12 16 6"></polyline>
                                        <polyline points="8 6 2 12 8 18"></polyline>
                                    </svg>
                                </div>
                                <div>
                                    <h3>Web Development Expertise</h3>
                                    <p>Proficient in building robust web applications using <strong>Angular</strong> and <strong>.NET Framework</strong>, delivering scalable and maintainable solutions.</p>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <div className="highlight-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3>Problem Solving</h3>
                                    <p>Excellence in <strong>bug fixing</strong>, <strong>log analysis</strong>, and <strong>performance optimization</strong> to ensure smooth application operations.</p>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <div className="highlight-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3>Production Support</h3>
                                    <p>Extensive experience in both <strong>development</strong> and <strong>production support</strong>, handling incidents and ensuring system reliability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
