import React from 'react';
import { Code2, Database, Cloud, Zap } from 'lucide-react';

const TechnologiesSection = ({ isVisible }) => {
    const techCategories = [
        {
            title: "Orquestación",
            icon: <Code2 className="tech__category-icon" />,
            colorClass: "tech__category--blue",
            technologies: [
                { name: "Kubernetes", icon: "🚢", description: "Orquestación de contenedores", popularity: 95 },
                { name: "Docker Swarm", icon: "🐳", description: "Gestión de contenedores", popularity: 80 }
            ]
        },
        {
            title: "Bases de Datos",
            icon: <Database className="tech__category-icon" />,
            colorClass: "tech__category--green",
            technologies: [
                { name: "MongoDB Replica", icon: "🍃", description: "Base de datos NoSQL", popularity: 85 },
                { name: "PostgreSQL HA", icon: "🐘", description: "Base de datos relacional", popularity: 90 }
            ]
        },
        {
            title: "Procesamiento",
            icon: <Zap className="tech__category-icon" />,
            colorClass: "tech__category--purple",
            technologies: [
                { name: "Apache Spark", icon: "⚡", description: "Big Data processing", popularity: 88 },
                { name: "Apache Kafka", icon: "🌊", description: "Streaming de datos", popularity: 92 }
            ]
        },
        {
            title: "Infraestructura",
            icon: <Cloud className="tech__category-icon" />,
            colorClass: "tech__category--orange",
            technologies: [
                { name: "HAProxy", icon: "⚖️", description: "Load balancer", popularity: 87 },
                { name: "Nginx", icon: "🔄", description: "Reverse proxy", popularity: 93 }
            ]
        }
    ];

    const additionalTools = [
        { name: "Elasticsearch", category: "Búsqueda", icon: "🔍", usage: "Análisis de logs" },
        { name: "Redis Cluster", category: "Cache", icon: "🔄", usage: "Cache distribuido" },
        { name: "Prometheus", category: "Monitoreo", icon: "📊", usage: "Métricas y alertas" },
        { name: "Grafana", category: "Visualización", icon: "📈", usage: "Dashboards" }
    ];

    return (
        <section id="tecnologias" className="tech">
            <div className="tech__container">
                <div className={`tech__content ${isVisible.tecnologias ? 'tech__content--visible' : ''}`}>
                    {/* Section Header */}
                    <div className="tech__header">
                        <div className="tech__badge">
                            <span className="tech__badge-text">STACK TECNOLÓGICO</span>
                        </div>
                        <h2 className="tech__title">
                            Herramientas y <span className="tech__title-highlight">Tecnologías</span>
                        </h2>
                        <p className="tech__subtitle">
                            Stack tecnológico moderno para implementar arquitecturas de clústeres robustas y escalables
                        </p>
                    </div>

                    {/* Main Technologies Grid */}
                    <div className="tech__categories">
                        {techCategories.map((category, index) => (
                            <div
                                key={index}
                                className={`tech__category ${category.colorClass}`}
                            >
                                {/* Category Header */}
                                <div className="tech__category-header">
                                    <div className="tech__category-icon-wrapper">
                                        {category.icon}
                                    </div>
                                    <div className="tech__category-info">
                                        <h3 className="tech__category-title">{category.title}</h3>
                                        <div className="tech__category-line"></div>
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div className="tech__category-techs">
                                    {category.technologies.map((tech, techIndex) => (
                                        <div key={techIndex} className="tech__item">
                                            <div className="tech__item-header">
                                                <span className="tech__item-icon">{tech.icon}</span>
                                                <div className="tech__item-info">
                                                    <h4 className="tech__item-name">{tech.name}</h4>
                                                    <p className="tech__item-description">{tech.description}</p>
                                                </div>
                                            </div>
                                            {/* Popularity Bar */}
                                            <div className="tech__item-popularity">
                                                <span className="tech__item-popularity-label">Adopción</span>
                                                <div className="tech__item-popularity-bar">
                                                    <div
                                                        className="tech__item-popularity-fill"
                                                        style={{ width: `${tech.popularity}%` }}
                                                    ></div>
                                                </div>
                                                <span className="tech__item-popularity-value">{tech.popularity}%</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Tools */}
                    <div className="tech__additional">
                        <div className="tech__additional-header">
                            <h3 className="tech__additional-title">Herramientas Complementarias</h3>
                            <p className="tech__additional-subtitle">Tecnologías adicionales para monitoreo, análisis y optimización</p>
                        </div>

                        <div className="tech__additional-grid">
                            {additionalTools.map((tool, index) => (
                                <div key={index} className="tech__tool">
                                    <div className="tech__tool-icon">{tool.icon}</div>
                                    <h4 className="tech__tool-name">{tool.name}</h4>
                                    <div className="tech__tool-category">{tool.category}</div>
                                    <p className="tech__tool-usage">{tool.usage}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Architecture Diagram Preview */}
                    <div className="tech__footer">
                        <div className="tech__footer-badge">
                            <div className="tech__footer-icon">
                                <Cloud className="tech__footer-svg" />
                            </div>
                            <span className="tech__footer-text">
                Estas tecnologías se integran en arquitecturas de producción
              </span>
                            <div className="tech__footer-icon">
                                <Code2 className="tech__footer-svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;