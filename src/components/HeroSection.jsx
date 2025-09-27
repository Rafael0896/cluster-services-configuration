import React from 'react';
import { ArrowRight, ChevronDown, Zap, Shield, Server } from 'lucide-react';

const HeroSection = ({ isVisible, scrollToSection }) => {
    const features = [
        {
            icon: <Server className="hero__feature-icon" />,
            text: "Arquitecturas Distribuidas"
        },
        {
            icon: <Shield className="hero__feature-icon" />,
            text: "Alta Disponibilidad"
        },
        {
            icon: <Zap className="hero__feature-icon" />,
            text: "Continuidad del Negocio"
        }
    ];

    return (
        <section id="hero" className="hero">
            {/* Background Pattern */}
            <div className="hero__background">
                <div className="hero__bg-circle hero__bg-circle--1"></div>
                <div className="hero__bg-circle hero__bg-circle--2"></div>
                <div className="hero__bg-circle hero__bg-circle--3"></div>
            </div>

            <div className="hero__container">
                <div className={`hero__content ${isVisible.hero ? 'hero__content--visible' : ''}`}>
                    {/* Badge */}

                    {/* Main Heading */}
                    <h1 className="hero__title">
                        Configuración
                        <br />
                        <span className="hero__title-sub">de Servicios</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="hero__subtitle">
                        Domina los conceptos fundamentales sobre <span className="hero__highlight hero__highlight--cyan">clústeres</span>,
                        <span className="hero__highlight hero__highlight--purple"> análisis de riesgo</span> y
                        <span className="hero__highlight hero__highlight--blue"> continuidad del negocio</span> en infraestructuras críticas
                    </p>

                    {/* Features */}
                    <div className="hero__features">
                        {features.map((feature, index) => (
                            <div key={index} className="hero__feature">
                                <div className="hero__feature-icon-wrapper">
                                    {feature.icon}
                                </div>
                                <span className="hero__feature-text">{feature.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hero__cta">
                        <button
                            onClick={() => scrollToSection('conceptos')}
                            className="hero__btn hero__btn--primary"
                        >
                            Explorar Conceptos
                            <ArrowRight className="hero__btn-icon" />
                        </button>

                        <button
                            onClick={() => scrollToSection('informe')}
                            className="hero__btn hero__btn--secondary"
                        >
                            Ver Estructura del Informe
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="hero__stats">
                        <div className="hero__stat">
                            <div className="hero__stat-number hero__stat-number--cyan">4</div>
                            <div className="hero__stat-label">Tipos de Clústeres</div>
                        </div>
                        <div className="hero__stat">
                            <div className="hero__stat-number hero__stat-number--purple">8+</div>
                            <div className="hero__stat-label">Tecnologías Clave</div>
                        </div>
                        <div className="hero__stat">
                            <div className="hero__stat-number hero__stat-number--blue">100%</div>
                            <div className="hero__stat-label">Continuidad Objetivo</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="hero__scroll"
                onClick={() => scrollToSection('conceptos')}
            >
                <div className="hero__scroll-content">
                    <span className="hero__scroll-text">Explorar</span>
                    <ChevronDown className="hero__scroll-icon" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;