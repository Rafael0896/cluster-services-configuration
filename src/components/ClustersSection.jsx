import React from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const ClustersSection = ({ isVisible }) => {
    const clusterTypes = [
        {
            type: "Alta Disponibilidad",
            description: "Garantiza continuidad del servicio mediante redundancia y failover automático",
            advantages: ["99.9% uptime garantizado", "Failover automático", "Sin pérdida de datos", "Redundancia completa"],
            disadvantages: ["Mayor costo de implementación", "Complejidad administrativa", "Latencia de sincronización", "Recursos duplicados"],
            colorClass: "clusters__card--green",
            processing: "Procesamiento crítico con tolerancia cero a fallos"
        },
        {
            type: "Balanceo de Carga",
            description: "Distribuye tráfico entre múltiples servidores para optimizar recursos",
            advantages: ["Mejor rendimiento global", "Escalabilidad horizontal", "Distribución eficiente", "Alta concurrencia"],
            disadvantages: ["Punto único de falla", "Configuración compleja", "Gestión de sesiones", "Latencia adicional"],
            colorClass: "clusters__card--blue",
            processing: "Distribución inteligente de cargas de trabajo"
        },
        {
            type: "Computación Paralela",
            description: "Procesa tareas distribuidas simultáneamente para máximo rendimiento",
            advantages: ["Alto throughput", "Procesamiento masivo", "Optimización de recursos", "Escalabilidad ilimitada"],
            disadvantages: ["Sincronización compleja", "Overhead de comunicación", "Debugging difícil", "Dependencias entre tareas"],
            colorClass: "clusters__card--purple",
            processing: "Procesamiento masivo de datos en paralelo"
        },
        {
            type: "Almacenamiento Distribuido",
            description: "Datos replicados y distribuidos en múltiples nodos geográficos",
            advantages: ["Tolerancia total a fallos", "Escalabilidad petabyte", "Acceso global concurrente", "Backup automático"],
            disadvantages: ["Consistencia eventual", "Tráfico de red intensivo", "Gestión compleja", "Conflictos de versión"],
            colorClass: "clusters__card--orange",
            processing: "Gestión distribuida de grandes volúmenes de datos"
        }
    ];

    return (
        <section id="clusters" className="clusters">
            <div className="clusters__container">
                <div className={`clusters__content ${isVisible.clusters ? 'clusters__content--visible' : ''}`}>
                    {/* Section Header */}
                    <div className="clusters__header">
                        <div className="clusters__badge">
                            <span className="clusters__badge-text">ARQUITECTURAS DISTRIBUIDAS</span>
                        </div>
                        <h2 className="clusters__title">
                            Tipos de <span className="clusters__title-highlight">Clústeres</span>
                        </h2>
                        <p className="clusters__subtitle">
                            Análisis detallado de arquitecturas, ventajas, desventajas y tipos de procesamiento de cada implementación
                        </p>
                    </div>

                    {/* Clusters Grid */}
                    <div className="clusters__grid">
                        {clusterTypes.map((cluster, index) => (
                            <div
                                key={index}
                                className={`clusters__card ${cluster.colorClass}`}
                            >
                                <div className="clusters__card-line"></div>

                                <div className="clusters__card-header">
                                    <h3 className="clusters__card-title">{cluster.type}</h3>
                                    <p className="clusters__card-description">{cluster.description}</p>
                                </div>

                                {/* Processing Type */}
                                <div className="clusters__card-processing">
                                    <h4 className="clusters__card-processing-title">Tipo de Procesamiento</h4>
                                    <p className="clusters__card-processing-text">{cluster.processing}</p>
                                </div>

                                <div className="clusters__card-analysis">
                                    <div className="clusters__card-advantages">
                                        <h4 className="clusters__card-section-title clusters__card-section-title--advantages">
                                            <CheckCircle className="clusters__card-section-icon" />
                                            Ventajas
                                        </h4>
                                        <ul className="clusters__card-list">
                                            {cluster.advantages.map((advantage, idx) => (
                                                <li key={idx} className="clusters__card-list-item clusters__card-list-item--advantage">
                                                    <div className="clusters__card-bullet clusters__card-bullet--green"></div>
                                                    {advantage}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="clusters__card-disadvantages">
                                        <h4 className="clusters__card-section-title clusters__card-section-title--disadvantages">
                                            <AlertTriangle className="clusters__card-section-icon" />
                                            Desventajas
                                        </h4>
                                        <ul className="clusters__card-list">
                                            {cluster.disadvantages.map((disadvantage, idx) => (
                                                <li key={idx} className="clusters__card-list-item clusters__card-list-item--disadvantage">
                                                    <div className="clusters__card-bullet clusters__card-bullet--red"></div>
                                                    {disadvantage}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Hover Effect Border */}
                                <div className="clusters__card-border"></div>
                            </div>
                        ))}
                    </div>

                    {/* Summary Section */}
                    <div className="clusters__summary">
                        <h3 className="clusters__summary-title">Comparación de Arquitecturas</h3>
                        <div className="clusters__summary-grid">
                            <div className="clusters__summary-item">
                                <div className="clusters__summary-label">Más Confiable</div>
                                <div className="clusters__summary-value">Alta Disponibilidad</div>
                            </div>
                            <div className="clusters__summary-item">
                                <div className="clusters__summary-label">Más Eficiente</div>
                                <div className="clusters__summary-value">Balanceo de Carga</div>
                            </div>
                            <div className="clusters__summary-item">
                                <div className="clusters__summary-label">Más Potente</div>
                                <div className="clusters__summary-value">Computación Paralela</div>
                            </div>
                            <div className="clusters__summary-item">
                                <div className="clusters__summary-label">Más Escalable</div>
                                <div className="clusters__summary-value">Almacenamiento Distribuido</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClustersSection;