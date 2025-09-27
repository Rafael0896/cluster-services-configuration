import React, { useState, useEffect } from 'react';
import { Code, Menu, X } from 'lucide-react';

const Header = ({ activeSection, scrollToSection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { id: 'hero', label: 'Inicio' },
        { id: 'conceptos', label: 'Conceptos' },
        { id: 'tecnologias', label: 'Tecnologías' },
        { id: 'clusters', label: 'Clústeres' },
        { id: 'informe', label: 'Informe' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__container">
                <div className="navbar__content">
                    {/* Logo */}
                    <div className="navbar__logo" onClick={() => handleNavClick('hero')}>
                        <div className="navbar__logo-icon">
                            <Code className="navbar__logo-svg" />
                        </div>
                        <div className="navbar__logo-text">
                            <span className="navbar__logo-title">GFPI-F-135</span>
                            <p className="navbar__logo-subtitle">Servicios & Clústeres</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="navbar__nav navbar__nav--desktop">
                        <div className="navbar__nav-items">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`navbar__nav-item ${
                                        activeSection === item.id ? 'navbar__nav-item--active' : ''
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="navbar__mobile-toggle">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="navbar__mobile-btn"
                        >
                            {isOpen ? <X className="navbar__mobile-icon" /> : <Menu className="navbar__mobile-icon" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`navbar__mobile ${isOpen ? 'navbar__mobile--open' : ''}`}>
                    <div className="navbar__mobile-content">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`navbar__mobile-item ${
                                    activeSection === item.id ? 'navbar__mobile-item--active' : ''
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;