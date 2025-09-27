import React from 'react';
import { ArrowRight, Database, Cloud, Target, CheckCircle, FileText, Users, TrendingUp, Shield } from 'lucide-react';

const ReportSection = ({ isVisible }) => {
    const reportStructure = [
        {
            title: "Marco Teórico",
            icon: <Database className="report__section-icon" />,
            color: "cyan",
            items: [
                "Definiciones y conceptos fundamentales",
                "Principios de alta disponibilidad",
                "Metodologías de análisis de riesgos",
                "Estándares y mejores prácticas"
            ]
        },
        {
            title: "Implementación Técnica",
            icon: <Cloud className="report__section-icon" />,
            color: "purple",
            items: [
                "Arquitecturas de referencia",
                "Configuración de herramientas",
                "Casos de uso prácticos",
                "Métricas y monitoreo"
            ]
        }
    ];

    const learningObjectives = [
        { text: "Dominio técnico profundo", icon: <Shield className="report__objective-icon" /> },
        { text: "Análisis crítico de soluciones", icon: <TrendingUp className="report__objective-icon" /> },
        { text: "Documentación profesional", icon: <FileText className="report__objective-icon" /> }
    ];

    const deliverables = [
        {
            title: "Análisis de Clústeres",
            description: "Documentación completa de tipos, características y casos de uso",
            priority: "Alta",
            estimate: "40%"
        },
        {
            title: "Evaluación de Tecnologías",
            description: "Comparativa de herramientas y stack tecnológico recomendado",
            priority: "Alta",
            estimate: "30%"
        },
        {
            title: "Plan de Continuidad",
            description: "Estrategias de RPO/RTO y gestión de crisis empresarial",
            priority: "Media",
            estimate: "20%"
        },
        {
            title: "Pruebas y Validación",
            description: "Procedimientos de testing y validación operacional",
            priority: "Media",
            estimate: "10%"
        }
    ];

    return (
        <section id="informe" className="report">
            <div className="report__container">
                <div className={`report__content ${isVisible.informe ? 'report__content--visible' : ''}`}>
                    {/* Section Header */}
                    <div className="report__header">
                        <div className="report__badge">
                            <span className="report__badge-text">ESTRUCTURA METODOLÓGICA</span>
                        </div>
                        <h2 className="report__title">
                            Desarrollo del <span className="report__title-highlight">Informe</span>
                        </h2>
                    </div>

                    <div className="report__main">
                        {/* Report Structure */}
                        <div className="report__structure">
                            <h3 className="report__structure-title">Estructura del Documento</h3>
                            <div className="report__structure-grid">
                                {reportStructure.map((section, index) => (
                                    <div key={index} className={`report__section report__section--${section.color}`}>
                                        <div className="report__section-header">
                                            <div className="report__section-icon-wrapper">
                                                {section.icon}
                                            </div>
                                            <h4 className="report__section-title">{section.title}</h4>
                                        </div>
                                        <ul className="report__section-list">
                                            {section.items.map((item, idx) => (
                                                <li key={idx} className="report__section-item">
                                                    <ArrowRight className="report__section-item-icon" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Deliverables */}
                        <div className="report__deliverables">
                            <h3 className="report__deliverables-title">Entregables Principales</h3>
                            <div className="report__deliverables-grid">
                                {deliverables.map((deliverable, index) => (
                                    <div key={index} className="report__deliverable">
                                        <div className="report__deliverable-header">
                                            <h4 className="report__deliverable-title">{deliverable.title}</h4>
                                            <div className={`report__deliverable-priority report__deliverable-priority--${deliverable.priority.toLowerCase()}`}>
                                                {deliverable.priority}
                                            </div>
                                        </div>
                                        <p className="report__deliverable-description">{deliverable.description}</p>
                                        <div className="report__deliverable-progress">
                                            <span className="report__deliverable-estimate">Peso: {deliverable.estimate}</span>
                                            <div className="report__deliverable-bar">
                                                <div
                                                    className="report__deliverable-fill"
                                                    style={{ width: deliverable.estimate }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Learning Objectives */}
                        <div className="report__objectives">
                            <h4 className="report__objectives-title">
                                <Target className="report__objectives-title-icon" />
                                Objetivos de Aprendizaje
                            </h4>
                            <div className="report__objectives-grid">
                                {learningObjectives.map((objective, index) => (
                                    <div key={index} className="report__objective">
                                        <div className="report__objective-icon-wrapper">
                                            {objective.icon}
                                        </div>
                                        <span className="report__objective-text">{objective.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Methodology */}
                        <div className="report__methodology">
                            <h3 className="report__methodology-title">Metodología de Desarrollo</h3>
                            <div className="report__methodology-steps">
                                <div className="report__step">
                                    <div className="report__step-number">1</div>
                                    <div className="report__step-content">
                                        <h4 className="report__step-title">Investigación</h4>
                                        <p className="report__step-description">Recopilación de información técnica y análisis de casos de estudio</p>
                                    </div>
                                </div>
                                <div className="report__step">
                                    <div className="report__step-number">2</div>
                                    <div className="report__step-content">
                                        <h4 className="report__step-title">Análisis</h4>
                                        <p className="report__step-description">Evaluación crítica de tecnologías y metodologías disponibles</p>
                                    </div>
                                </div>
                                <div className="report__step">
                                    <div className="report__step-number">3</div>
                                    <div className="report__step-content">
                                        <h4 className="report__step-title">Documentación</h4>
                                        <p className="report__step-description">Elaboración del informe técnico con recomendaciones</p>
                                    </div>
                                </div>
                                <div className="report__step">
                                    <div className="report__step-number">4</div>
                                    <div className="report__step-content">
                                        <h4 className="report__step-title">Validación</h4>
                                        <p className="report__step-description">Revisión y validación de propuestas técnicas</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Key Points */}
                        <div className="report__keypoints">
                            <h3 className="report__keypoints-title">Puntos Clave para el Éxito</h3>
                            <div className="report__keypoints-grid">
                                <div className="report__keypoint">
                                    <Users className="report__keypoint-icon" />
                                    <h4 className="report__keypoint-title">Enfoque Empresarial</h4>
                                    <p className="report__keypoint-text">Balancear aspectos técnicos con necesidades del negocio</p>
                                </div>
                                <div className="report__keypoint">
                                    <TrendingUp className="report__keypoint-icon" />
                                    <h4 className="report__keypoint-title">Análisis Profundo</h4>
                                    <p className="report__keypoint-text">Evaluación crítica de ventajas y desventajas</p>
                                </div>
                                <div className="report__keypoint">
                                    <Shield className="report__keypoint-icon" />
                                    <h4 className="report__keypoint-title">Casos Reales</h4>
                                    <p className="report__keypoint-text">Ejemplos prácticos y aplicaciones industriales</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReportSection;