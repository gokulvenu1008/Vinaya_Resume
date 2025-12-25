import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education">
            <div className="container">
                <div className="section-title">
                    <h2>Education</h2>
                </div>

                <div className="education-content">
                    <div className="education-card card">
                        <div className="education-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                            </svg>
                        </div>
                        <div className="education-details">
                            <h3>Bachelor of Science (BSc) in Mathematics</h3>
                            <p className="institution">University Name</p>
                            <p className="year">Year of Graduation: YYYY</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
