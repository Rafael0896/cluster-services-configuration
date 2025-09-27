import React from 'react';
import { Code, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const links = [
        {
            title: "Documentación SENA",
            url: "#",
            icon: <ExternalLink className="footer__link-icon" />
        },
        {
            title: "Recursos Técnicos",
            url: "#",
            icon: <Code className="footer__link-icon" />
        },
        {
            title: "Repositorio GitHub",
            url: "#",
            icon: <Github className="footer__link-icon" />
        }
    ];

    const sections = [
        { name: "Conceptos", id: "conceptos" },
        { name: "Tecnologías", id: "tecnologias" },
        { name: "Clústeres", id: "clusters" },
        { name: "Informe", id: "informe" }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Main Footer Content */}
                <div className="footer__main">
                    <div className="footer__grid">
                        {/* Logo and Description */}
                        <div className="footer__brand">
                            <div className="footer__logo">
                                <div className="footer__logo-icon">
                                    <Code className="footer__logo-svg" />
                                </div>
                                <div className="footer__logo-text">
                                    <span className="footer__logo-title">GFPI-F-135 V01</span>
                                    <p className="footer__logo-subtitle">Configuración de Servicios</p>
                                </div>
                            </div>
                            <p className="footer__description">
                                Evidencia técnica especializada en configuración de servicios,
                                arquitecturas de clústeres y continuidad del negocio para
                                infraestructuras críticas empresariales.
                            </p>
                            <div className="footer__stats">
                                <div className="footer__stat">
                                    <span className="footer__stat-number">4</span>
                                    <span className="footer__stat-label">Tipos de Clústeres</span>
                                </div>
                                <div className="footer__stat">
                                    <span className="footer__stat-number">12+</span>
                                    <span className="footer__stat-label">Tecnologías</span>
                                </div>
                                <div className="footer__stat">
                                    <span className="footer__stat-number">100%</span>
                                    <span className="footer__stat-label">Disponibilidad</span>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="footer__nav">
                            <h4 className="footer__nav-title">Navegación</h4>
                            <ul className="footer__nav-list">
                                {sections.map((section, index) => (
                                    <li key={index} className="footer__nav-item">
                                        <button
                                            onClick={() => scrollToSection(section.id)}
                                            className="footer__nav-link"
                                        >
                                            {section.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="footer__resources">
                            <h4 className="footer__resources-title">Recursos</h4>
                            <ul className="footer__resources-list">
                                {links.map((link, index) => (
                                    <li key={index} className="footer__resources-item">
                                        <a href={link.url} className="footer__resources-link">
                                            {link.icon}
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer__contact">
                            <h4 className="footer__contact-title">Información</h4>
                            <div className="footer__contact-info">
                                <div className="footer__contact-item">
                                    <strong className="footer__contact-label">Institución:</strong>
                                    <span className="footer__contact-text">SENA</span>
                                </div>
                                <div className="footer__contact-item">
                                    <strong className="footer__contact-label">Programa:</strong>
                                    <span className="footer__contact-text">Formación Técnica</span>
                                </div>
                                <div className="footer__contact-item">
                                    <strong className="footer__contact-label">Código:</strong>
                                    <span className="footer__contact-text">GFPI-F-135 V01</span>
                                </div>
                                <div className="footer__contact-item">
                                    <strong className="footer__contact-label">Tecnología:</strong>
                                    <span className="footer__contact-text">React + CSS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer__bottom">
                    <div className="footer__bottom-content">
                        <div className="footer__copyright">
                            <p className="footer__copyright-text">
                                © {currentYear} GFPI-F-135 V01 - Configuración de Servicios
                            </p>
                            <p className="footer__copyright-subtext">
                                Evidencia Técnica | SENA - Formación Técnica Especializada
                            </p>
                        </div>

                        <div className="footer__tech">
                            <span className="footer__tech-text">Desarrollado con</span>
                            <div className="footer__tech-stack">
                                <span className="footer__tech-item">React</span>
                                <span className="footer__tech-separator">+</span>
                                <span className="footer__tech-item">CSS</span>
                                <span className="footer__tech-separator">+</span>
                                <span className="footer__tech-item">IntelliJ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="footer__bg">
                <div className="footer__bg-circle footer__bg-circle--1"></div>
                <div className="footer__bg-circle footer__bg-circle--2"></div>
            </div>
        </footer>
    );
};

export default Footer;