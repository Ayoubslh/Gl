import React from 'react';
import './DiagramsSVG.css';

// Actor component - stick figure
const Actor = ({ x, y, label }) => (
  <g className="uml-actor" transform={`translate(${x}, ${y})`}>
    {/* Head */}
    <circle cx="20" cy="10" r="10" fill="none" stroke="#333" strokeWidth="2" />
    {/* Body */}
    <line x1="20" y1="20" x2="20" y2="45" stroke="#333" strokeWidth="2" />
    {/* Arms */}
    <line x1="0" y1="30" x2="40" y2="30" stroke="#333" strokeWidth="2" />
    {/* Legs */}
    <line x1="20" y1="45" x2="5" y2="65" stroke="#333" strokeWidth="2" />
    <line x1="20" y1="45" x2="35" y2="65" stroke="#333" strokeWidth="2" />
    {/* Label */}
    <text x="20" y="82" textAnchor="middle" className="actor-label">{label}</text>
  </g>
);

// Use Case component - oval
const UseCase = ({ x, y, label, width = 120, height = 50 }) => (
  <g className="uml-usecase" transform={`translate(${x}, ${y})`}>
    <ellipse 
      cx={width/2} 
      cy={height/2} 
      rx={width/2} 
      ry={height/2} 
      fill="#f8f9fa" 
      stroke="#333" 
      strokeWidth="2" 
    />
    <text x={width/2} y={height/2 + 5} textAnchor="middle" className="usecase-label">
      {label}
    </text>
  </g>
);

// System boundary
const SystemBoundary = ({ x, y, width, height, label }) => (
  <g className="uml-system" transform={`translate(${x}, ${y})`}>
    <rect 
      x="0" 
      y="0" 
      width={width} 
      height={height} 
      fill="none" 
      stroke="#333" 
      strokeWidth="2" 
      rx="5"
    />
    <text x={width/2} y="25" textAnchor="middle" className="system-label">{label}</text>
  </g>
);

// Association line
const Association = ({ x1, y1, x2, y2 }) => (
  <line 
    x1={x1} y1={y1} x2={x2} y2={y2} 
    stroke="#333" 
    strokeWidth="1.5" 
  />
);

// Include/Extend relationship
const DependencyArrow = ({ x1, y1, x2, y2, label, type = "include" }) => {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  
  return (
    <g className="uml-dependency">
      <defs>
        <marker 
          id={`arrow-${type}`} 
          markerWidth="10" 
          markerHeight="10" 
          refX="9" 
          refY="3" 
          orient="auto"
        >
          <path d="M0,0 L0,6 L9,3 z" fill="#333" />
        </marker>
      </defs>
      <line 
        x1={x1} y1={y1} x2={x2} y2={y2} 
        stroke="#333" 
        strokeWidth="1.5" 
        strokeDasharray="5,3"
        markerEnd={`url(#arrow-${type})`}
      />
      <text 
        x={midX} 
        y={midY - 8} 
        textAnchor="middle" 
        className="dependency-label"
      >
        {`«${label}»`}
      </text>
    </g>
  );
};

// Generalization arrow (inheritance)
const GeneralizationArrow = ({ x1, y1, x2, y2 }) => (
  <g className="uml-generalization">
    <defs>
      <marker 
        id="triangle-arrow" 
        markerWidth="12" 
        markerHeight="12" 
        refX="10" 
        refY="6" 
        orient="auto"
      >
        <path d="M0,0 L0,12 L12,6 z" fill="white" stroke="#333" strokeWidth="1" />
      </marker>
    </defs>
    <line 
      x1={x1} y1={y1} x2={x2} y2={y2} 
      stroke="#333" 
      strokeWidth="1.5" 
      markerEnd="url(#triangle-arrow)"
    />
  </g>
);

// Library Management System Use Case Diagram
export const LibraryUseCaseDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Diagramme de Cas d'Utilisation - Système de Bibliothèque</h4>
    <svg viewBox="0 0 700 450" className="uml-diagram">
      {/* System Boundary */}
      <SystemBoundary x={150} y={30} width={400} height={390} label="Système de Gestion de Bibliothèque" />
      
      {/* Actors */}
      <Actor x={30} y={100} label="Adhérent" />
      <Actor x={30} y={280} label="Bibliothécaire" />
      <Actor x={620} y={180} label="Système BD" />
      
      {/* Use Cases */}
      <UseCase x={200} y={60} label="Rechercher livre" width={130} />
      <UseCase x={200} y={130} label="Emprunter livre" width={130} />
      <UseCase x={200} y={200} label="Retourner livre" width={130} />
      <UseCase x={200} y={270} label="Réserver livre" width={130} />
      <UseCase x={380} y={130} label="S'authentifier" width={130} />
      <UseCase x={380} y={270} label="Gérer adhérents" width={130} />
      <UseCase x={380} y={340} label="Gérer catalogue" width={130} />
      
      {/* Associations - Adhérent */}
      <Association x1={70} y1={140} x2={200} y2={85} />
      <Association x1={70} y1={140} x2={200} y2={155} />
      <Association x1={70} y1={140} x2={200} y2={225} />
      <Association x1={70} y1={140} x2={200} y2={295} />
      
      {/* Associations - Bibliothécaire */}
      <Association x1={70} y1={320} x2={200} y2={155} />
      <Association x1={70} y1={320} x2={200} y2={225} />
      <Association x1={70} y1={320} x2={380} y2={295} />
      <Association x1={70} y1={320} x2={380} y2={365} />
      
      {/* Associations - Système BD */}
      <Association x1={620} y1={220} x2={510} y2={155} />
      <Association x1={620} y1={220} x2={510} y2={295} />
      <Association x1={620} y1={220} x2={510} y2={365} />
      
      {/* Include relationship */}
      <DependencyArrow x1={265} y1={130} x2={380} y2={155} label="include" type="include1" />
      <DependencyArrow x1={265} y1={270} x2={380} y2={155} label="include" type="include2" />
    </svg>
    <div className="diagram-legend">
      <div className="legend-item">
        <svg width="40" height="30"><Actor x={0} y={-5} label="" /></svg>
        <span>Acteur</span>
      </div>
      <div className="legend-item">
        <svg width="50" height="25"><ellipse cx="25" cy="12" rx="22" ry="10" fill="#f8f9fa" stroke="#333" strokeWidth="1.5"/></svg>
        <span>Cas d'utilisation</span>
      </div>
      <div className="legend-item">
        <svg width="40" height="20"><line x1="0" y1="10" x2="40" y2="10" stroke="#333" strokeWidth="1.5"/></svg>
        <span>Association</span>
      </div>
      <div className="legend-item">
        <svg width="50" height="20"><line x1="0" y1="10" x2="50" y2="10" stroke="#333" strokeWidth="1.5" strokeDasharray="5,3"/></svg>
        <span>«include» / «extend»</span>
      </div>
    </div>
  </div>
);

// ATM Use Case Diagram
export const ATMUseCaseDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Diagramme de Cas d'Utilisation - Distributeur Automatique (DAB)</h4>
    <svg viewBox="0 0 650 400" className="uml-diagram">
      {/* System Boundary */}
      <SystemBoundary x={130} y={20} width={380} height={360} label="Distributeur Automatique de Billets" />
      
      {/* Actors */}
      <Actor x={20} y={150} label="Client" />
      <Actor x={560} y={100} label="Banque" />
      <Actor x={560} y={250} label="Technicien" />
      
      {/* Use Cases */}
      <UseCase x={180} y={50} label="Retirer argent" width={120} />
      <UseCase x={180} y={120} label="Consulter solde" width={120} />
      <UseCase x={180} y={190} label="Déposer argent" width={120} />
      <UseCase x={180} y={260} label="Transférer" width={120} />
      <UseCase x={340} y={85} label="Authentifier" width={120} />
      <UseCase x={340} y={160} label="Vérifier solde" width={120} />
      <UseCase x={340} y={310} label="Maintenance" width={120} />
      
      {/* Associations - Client */}
      <Association x1={60} y1={190} x2={180} y2={75} />
      <Association x1={60} y1={190} x2={180} y2={145} />
      <Association x1={60} y1={190} x2={180} y2={215} />
      <Association x1={60} y1={190} x2={180} y2={285} />
      
      {/* Associations - Banque */}
      <Association x1={560} y1={140} x2={460} y2={110} />
      <Association x1={560} y1={140} x2={460} y2={185} />
      
      {/* Associations - Technicien */}
      <Association x1={560} y1={290} x2={460} y2={335} />
      
      {/* Include relationships */}
      <DependencyArrow x1={300} y1={75} x2={340} y2={100} label="include" type="inc1" />
      <DependencyArrow x1={300} y1={145} x2={340} y2={115} label="include" type="inc2" />
      <DependencyArrow x1={240} y1={120} x2={340} y2={175} label="include" type="inc3" />
    </svg>
  </div>
);

// Simple Use Case for teaching basic concepts
export const SimpleUseCaseDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Éléments de Base - Diagramme de Cas d'Utilisation</h4>
    <svg viewBox="0 0 500 300" className="uml-diagram">
      {/* System Boundary */}
      <rect x="120" y="20" width="260" height="250" fill="none" stroke="#333" strokeWidth="2" rx="5"/>
      <text x="250" y="45" textAnchor="middle" className="system-label">Système</text>
      
      {/* Actor */}
      <Actor x={20} y={100} label="Acteur" />
      
      {/* Use Cases */}
      <UseCase x={150} y={70} label="Cas d'utilisation 1" width={140} />
      <UseCase x={150} y={150} label="Cas d'utilisation 2" width={140} />
      
      {/* Secondary Actor */}
      <Actor x={420} y={100} label="Acteur Sec." />
      
      {/* Associations */}
      <Association x1={60} y1={140} x2={150} y2={95} />
      <Association x1={60} y1={140} x2={150} y2={175} />
      <Association x1={290} y1={95} x2={420} y2={140} />
      
      {/* Include */}
      <DependencyArrow x1={220} y1={150} x2={220} y2={95} label="include" type="simple-inc" />
    </svg>
  </div>
);

export default { LibraryUseCaseDiagram, ATMUseCaseDiagram, SimpleUseCaseDiagram };
