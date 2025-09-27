import React from 'react';
import { Server, Shield, Target, AlertTriangle, CheckCircle } from 'lucide-react';

const ConceptsSection = ({ isVisible }) => {
    const concepts = [
        {
            icon: <Server className="concepts__card-icon" />,
            title: "Clústeres",
            description: "Sistemas distribuidos que trabajan como una unidad para garantizar alta disponibilidad y escalabilidad",
            details: [
                "Alta disponibilidad (99.9% uptime)",
                "Balanceo de carga automático",
                "Procesamiento distribuido paralelo",
                "Almacenamiento redundante"
            ],
            colorClass: "concepts__card--blue"
        },
        {
            icon: <Shield className="concepts__card-icon" />,
            title: "Análisis de Riesgo",
            description: "Metodología sistemática para identificar, evaluar y mitigar amenazas potenciales a la infraestructura",
            details: [
                "Identificación de vulnerabilidades",
                "Evaluación de impacto de negocio",
                "Matriz de probabilidad vs impacto",
                "Estrategias de mitigación"
            ],
            colorClass: "concepts__card--green"
        },
        {
            icon: <Target className="concepts__card-icon" />,
            title: "RPO & RTO",
            description: "Métricas críticas que definen los objetivos de recuperación en caso de desastres o interrupciones",
            details: [
                "Recovery Point Objective (RPO)",
                "Recovery Time Objective (RTO)",
                "Definición de SLAs críticos",
                "Métricas de disponibilidad"
            ],
            colorClass: "concepts__card--purple"
        },
        {
            icon: <AlertTriangle className="concepts__card-icon" />,
            title: "Gestión de Crisis",
            description: "Framework estructurado para responder eficazmente ante incidentes críticos y situaciones de emergencia",
            details: [
                "Planes de contingencia",
                "Equipos de respuesta rápida",
                "Protocolos de comunicación",
                "Procedimientos de escalamiento"
            ],
            colorClass: "concepts__card--orange"
        }
    ];

    return (
        <section id="conceptos" className="concepts">
            <div className="concepts__container">
                <div className={`concepts__content ${isVisible.conceptos ? 'concepts__content--visible' : ''}`}>
                    {/* Section Header */}
                    <div className="concepts__header">
                        <div className="concepts__badge">
                            <span className="concepts__badge-text">FUNDAMENTOS TÉCNICOS</span>
                        </div>
                        <h2 className="concepts__title">
                            Conceptos <span className="concepts__title-highlight">Fundamentales</span>
                        </h2>
                        <p className="concepts__subtitle">
                            Domina los pilares esenciales de la infraestructura crítica y la gestión de servicios empresariales
                        </p>
                    </div>

                    {/* Concepts Grid */}
                    <div className="concepts__grid">
                        {concepts.map((concept, index) => (
                            <div
                                key={index}
                                className={`concepts__card ${concept.colorClass}`}
                            >
                                {/* Background Gradient */}
                                <div className="concepts__card-bg"></div>

                                {/* Content */}
                                <div className="concepts__card-content">
                                    {/* Icon and Title */}
                                    <div className="concepts__card-header">
                                        <div className="concepts__card-icon-wrapper">
                                            {concept.icon}
                                        </div>
                                        <div className="concepts__card-info">
                                            <h3 className="concepts__card-title">{concept.title}</h3>
                                            <div className="concepts__card-line"></div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="concepts__card-description">{concept.description}</p>

                                    {/* Details List */}
                                    <div className="concepts__card-details">
                                        <h4 className="concepts__card-details-title">
                                            <CheckCircle className="concepts__card-details-icon" />
                                            Características Clave
                                        </h4>
                                        <ul className="concepts__card-list">
                                            {concept.details.map((detail, idx) => (
                                                <li key={idx} className="concepts__card-list-item">
                                                    <div className="concepts__card-bullet"></div>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Hover Effect Border */}
                                <div className="concepts__card-border"></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Section */}
                    <div className="concepts__footer">
                        <div className="concepts__footer-badge">
                            <span className="concepts__footer-text">Estos conceptos forman la base para</span>
                            <span className="concepts__footer-highlight">arquitecturas empresariales robustas</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConceptsSection;