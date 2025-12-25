import React from 'react';
import './Hero.css';

const Hero = () => {
    const handleDownloadResume = () => {
        // You can replace this with actual resume file path
        alert('Resume download functionality - Please add your resume PDF to the public folder');
    };

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="hero-shape hero-shape-1"></div>
                <div className="hero-shape hero-shape-2"></div>
                <div className="hero-shape hero-shape-3"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title fade-in-up">
                            Hi, I'm <span className="gradient-text">Vinaya R</span>
                        </h1>
                        <h2 className="hero-subtitle fade-in-up">System Engineer / Web Application Developer</h2>
                        <p className="hero-description fade-in-up">
                            Passionate developer with 3.8+ years of experience building robust web applications
                            using Angular and .NET. Specializing in delivering high-quality solutions and
                            providing exceptional production support.
                        </p>
                        <div className="hero-buttons fade-in-up">
                            <button className="btn btn-primary" onClick={handleDownloadResume}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                Download Resume
                            </button>
                            <button className="btn btn-outline" onClick={scrollToContact}>
                                Contact Me
                            </button>
                        </div>
                    </div>

                    <div className="hero-image">
                        <div className="image-wrapper">
                            <div className="image-background"></div>
                            <img
                                src="https://via.placeholder.com/400x400/4a90e2/ffffff?text=Your+Photo"
                                alt="Profile"
                                className="profile-photo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
