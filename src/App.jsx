import React, { useState, useEffect } from 'react';
import './style.css';

// Importar componentes
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ConceptsSection from './components/ConceptsSection';
import TechnologiesSection from './components/TechnologiesSection';
import ClustersSection from './components/ClustersSection';
import ReportSection from './components/ReportSection';
import Footer from './components/Footer';

const App = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting
                    }));

                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    return (
        <div className="app">
            <Header activeSection={activeSection} scrollToSection={scrollToSection} />

            <main>
                <HeroSection isVisible={isVisible} scrollToSection={scrollToSection} />
                <ConceptsSection isVisible={isVisible} />
                <TechnologiesSection isVisible={isVisible} />
                <ClustersSection isVisible={isVisible} />
                <ReportSection isVisible={isVisible} />
            </main>

            <Footer />
        </div>
    );
};

export default App;