import React from 'react';
import './DiagramsSVG.css';

// Class Box Component
const ClassBox = ({ x, y, name, attributes = [], methods = [], width = 160, isAbstract = false, stereotype = null }) => {
  const headerHeight = stereotype ? 45 : 30;
  const attrHeight = Math.max(attributes.length * 18 + 10, 25);
  const methodHeight = Math.max(methods.length * 18 + 10, 25);
  const totalHeight = headerHeight + attrHeight + methodHeight;
  
  return (
    <g className="uml-class" transform={`translate(${x}, ${y})`}>
      {/* Main rectangle */}
      <rect 
        x="0" y="0" 
        width={width} 
        height={totalHeight} 
        fill="#fff" 
        stroke="#333" 
        strokeWidth="2"
      />
      
      {/* Header section */}
      <rect 
        x="0" y="0" 
        width={width} 
        height={headerHeight} 
        fill="#e8f4fd" 
        stroke="#333" 
        strokeWidth="2"
      />
      
      {/* Stereotype */}
      {stereotype && (
        <text x={width/2} y="15" textAnchor="middle" className="stereotype-text">
          «{stereotype}»
        </text>
      )}
      
      {/* Class name */}
      <text 
        x={width/2} 
        y={stereotype ? 35 : 20} 
        textAnchor="middle" 
        className={`class-name ${isAbstract ? 'abstract' : ''}`}
      >
        {name}
      </text>
      
      {/* Attributes section line */}
      <line x1="0" y1={headerHeight} x2={width} y2={headerHeight} stroke="#333" strokeWidth="1" />
      
      {/* Attributes */}
      {attributes.map((attr, i) => (
        <text key={i} x="8" y={headerHeight + 18 + i * 18} className="attribute-text">
          {attr}
        </text>
      ))}
      
      {/* Methods section line */}
      <line x1="0" y1={headerHeight + attrHeight} x2={width} y2={headerHeight + attrHeight} stroke="#333" strokeWidth="1" />
      
      {/* Methods */}
      {methods.map((method, i) => (
        <text key={i} x="8" y={headerHeight + attrHeight + 18 + i * 18} className="method-text">
          {method}
        </text>
      ))}
    </g>
  );
};

// Interface Box
const InterfaceBox = ({ x, y, name, methods = [], width = 140 }) => {
  const headerHeight = 45;
  const methodHeight = Math.max(methods.length * 18 + 10, 25);
  const totalHeight = headerHeight + methodHeight;
  
  return (
    <g className="uml-interface" transform={`translate(${x}, ${y})`}>
      <rect x="0" y="0" width={width} height={totalHeight} fill="#fff" stroke="#333" strokeWidth="2" strokeDasharray="5,3"/>
      <rect x="0" y="0" width={width} height={headerHeight} fill="#f0f8e8" stroke="#333" strokeWidth="2" strokeDasharray="5,3"/>
      <text x={width/2} y="15" textAnchor="middle" className="stereotype-text">«interface»</text>
      <text x={width/2} y="35" textAnchor="middle" className="class-name">{name}</text>
      <line x1="0" y1={headerHeight} x2={width} y2={headerHeight} stroke="#333" strokeWidth="1" strokeDasharray="5,3"/>
      {methods.map((method, i) => (
        <text key={i} x="8" y={headerHeight + 18 + i * 18} className="method-text">{method}</text>
      ))}
    </g>
  );
};

// Association line with optional label and multiplicity
const Association = ({ x1, y1, x2, y2, label = null, mult1 = null, mult2 = null }) => {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  
  return (
    <g className="uml-association">
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#333" strokeWidth="1.5" />
      {label && <text x={midX} y={midY - 8} textAnchor="middle" className="assoc-label">{label}</text>}
      {mult1 && <text x={x1 + 15} y={y1 - 5} className="multiplicity">{mult1}</text>}
      {mult2 && <text x={x2 - 20} y={y2 - 5} className="multiplicity">{mult2}</text>}
    </g>
  );
};

// Inheritance Arrow (empty triangle)
const Inheritance = ({ x1, y1, x2, y2 }) => (
  <g className="uml-inheritance">
    <defs>
      <marker id="inherit-arrow" markerWidth="15" markerHeight="15" refX="13" refY="7.5" orient="auto">
        <path d="M0,0 L0,15 L15,7.5 z" fill="white" stroke="#333" strokeWidth="1.5" />
      </marker>
    </defs>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#333" strokeWidth="1.5" markerEnd="url(#inherit-arrow)" />
  </g>
);

// Realization Arrow (dashed with empty triangle)
const Realization = ({ x1, y1, x2, y2 }) => (
  <g className="uml-realization">
    <defs>
      <marker id="realize-arrow" markerWidth="15" markerHeight="15" refX="13" refY="7.5" orient="auto">
        <path d="M0,0 L0,15 L15,7.5 z" fill="white" stroke="#333" strokeWidth="1.5" />
      </marker>
    </defs>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#333" strokeWidth="1.5" strokeDasharray="8,4" markerEnd="url(#realize-arrow)" />
  </g>
);

// Aggregation (empty diamond)
const Aggregation = ({ x1, y1, x2, y2, mult1 = null, mult2 = null, label = null }) => {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  
  return (
    <g className="uml-aggregation">
      <defs>
        <marker id="agg-diamond" markerWidth="12" markerHeight="12" refX="12" refY="6" orient="auto">
          <path d="M0,6 L6,0 L12,6 L6,12 z" fill="white" stroke="#333" strokeWidth="1" />
        </marker>
      </defs>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#333" strokeWidth="1.5" markerStart="url(#agg-diamond)" />
      {label && <text x={midX} y={midY - 8} textAnchor="middle" className="assoc-label">{label}</text>}
      {mult1 && <text x={x1 + 20} y={y1 - 5} className="multiplicity">{mult1}</text>}
      {mult2 && <text x={x2 - 15} y={y2 - 5} className="multiplicity">{mult2}</text>}
    </g>
  );
};

// Composition (filled diamond)
const Composition = ({ x1, y1, x2, y2, mult1 = null, mult2 = null, label = null }) => {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  
  return (
    <g className="uml-composition">
      <defs>
        <marker id="comp-diamond" markerWidth="12" markerHeight="12" refX="12" refY="6" orient="auto">
          <path d="M0,6 L6,0 L12,6 L6,12 z" fill="#333" stroke="#333" strokeWidth="1" />
        </marker>
      </defs>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#333" strokeWidth="1.5" markerStart="url(#comp-diamond)" />
      {label && <text x={midX} y={midY - 8} textAnchor="middle" className="assoc-label">{label}</text>}
      {mult1 && <text x={x1 + 20} y={y1 - 5} className="multiplicity">{mult1}</text>}
      {mult2 && <text x={x2 - 15} y={y2 - 5} className="multiplicity">{mult2}</text>}
    </g>
  );
};

// Dependency Arrow
const Dependency = ({ x1, y1, x2, y2, label = null }) => {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  
  return (
    <g className="uml-dependency">
      <defs>
        <marker id="dep-arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
          <path d="M0,0 L10,5 L0,10" fill="none" stroke="#333" strokeWidth="1.5" />
        </marker>
      </defs>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#333" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#dep-arrow)" />
      {label && <text x={midX} y={midY - 8} textAnchor="middle" className="dependency-label">«{label}»</text>}
    </g>
  );
};

// Example: Vehicle Class Hierarchy
export const VehicleClassDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Diagramme de Classes - Hiérarchie de Véhicules</h4>
    <svg viewBox="0 0 600 400" className="uml-diagram">
      {/* Base class */}
      <ClassBox 
        x={220} y={20} 
        name="Véhicule" 
        attributes={["- marque: String", "- modèle: String", "# vitesse: int"]}
        methods={["+démarrer()", "+arrêter()", "+accélérer(v: int)"]}
        isAbstract={true}
      />
      
      {/* Derived classes */}
      <ClassBox 
        x={50} y={250} 
        name="Voiture" 
        attributes={["- nbPortes: int", "- coffre: double"]}
        methods={["+ouvrirCoffre()", "+klaxonner()"]}
      />
      
      <ClassBox 
        x={230} y={250} 
        name="Moto" 
        attributes={["- cylindrée: int"]}
        methods={["+faireWheelie()"]}
      />
      
      <ClassBox 
        x={400} y={250} 
        name="Camion" 
        attributes={["- capacité: double", "- nbEssieux: int"]}
        methods={["+charger()", "+décharger()"]}
      />
      
      {/* Inheritance arrows */}
      <Inheritance x1={130} y1={250} x2={280} y2={165} />
      <Inheritance x1={310} y1={250} x2={300} y2={165} />
      <Inheritance x1={480} y1={250} x2={320} y2={165} />
    </svg>
    <div className="diagram-legend">
      <div className="legend-item">
        <svg width="50" height="25"><rect x="2" y="2" width="46" height="21" fill="#e8f4fd" stroke="#333" strokeWidth="1.5"/></svg>
        <span>Classe</span>
      </div>
      <div className="legend-item">
        <svg width="50" height="20">
          <line x1="5" y1="15" x2="35" y2="5" stroke="#333" strokeWidth="1.5"/>
          <path d="M35,5 L45,10 L35,15 z" fill="white" stroke="#333" strokeWidth="1"/>
        </svg>
        <span>Héritage</span>
      </div>
    </div>
  </div>
);

// Example: Library System with Associations
export const LibraryClassDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Diagramme de Classes - Système de Bibliothèque</h4>
    <svg viewBox="0 0 750 500" className="uml-diagram">
      {/* Bibliothèque */}
      <ClassBox 
        x={280} y={20} 
        name="Bibliothèque" 
        attributes={["- nom: String", "- adresse: String"]}
        methods={["+ajouterLivre()", "+supprimerLivre()"]}
        width={180}
      />
      
      {/* Livre */}
      <ClassBox 
        x={50} y={180} 
        name="Livre" 
        attributes={["- isbn: String", "- titre: String", "- auteur: String", "- disponible: boolean"]}
        methods={["+emprunter()", "+retourner()", "+réserver()"]}
        width={170}
      />
      
      {/* Adhérent */}
      <ClassBox 
        x={520} y={180} 
        name="Adhérent" 
        attributes={["- numCarte: String", "- nom: String", "- prénom: String", "- email: String"]}
        methods={["+emprunter(Livre)", "+retourner(Livre)", "+consulterEmprunts()"]}
        width={180}
      />
      
      {/* Emprunt */}
      <ClassBox 
        x={280} y={350} 
        name="Emprunt" 
        attributes={["- dateEmprunt: Date", "- dateRetourPrévue: Date", "- dateRetourEffective: Date"]}
        methods={["+prolonger()", "+calculerAmende(): double"]}
        width={200}
      />
      
      {/* Composition: Bibliothèque contains Livres */}
      <Composition x1={280} y1={85} x2={135} y2={180} mult1="1" mult2="*" label="contient" />
      
      {/* Association: Adhérent emprunte Livres via Emprunt */}
      <Association x1={135} y1={310} x2={280} y2={380} mult1="1" mult2="*" />
      <Association x1={480} y1={380} x2={610} y2={310} mult1="*" mult2="1" />
      
      {/* Association: Bibliothèque has Adhérents */}
      <Association x1={460} y1={85} x2={610} y2={180} mult1="1" mult2="*" label="inscrit" />
    </svg>
    <div className="diagram-legend">
      <div className="legend-item">
        <svg width="50" height="20">
          <path d="M0,10 L8,5 L16,10 L8,15 z" fill="#333" stroke="#333"/>
          <line x1="16" y1="10" x2="50" y2="10" stroke="#333" strokeWidth="1.5"/>
        </svg>
        <span>Composition</span>
      </div>
      <div className="legend-item">
        <svg width="50" height="20">
          <path d="M0,10 L8,5 L16,10 L8,15 z" fill="white" stroke="#333"/>
          <line x1="16" y1="10" x2="50" y2="10" stroke="#333" strokeWidth="1.5"/>
        </svg>
        <span>Agrégation</span>
      </div>
      <div className="legend-item">
        <span className="mult-example">1..*</span>
        <span>Multiplicité</span>
      </div>
    </div>
  </div>
);

// Association Types Diagram
export const AssociationTypesDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Types de Relations entre Classes</h4>
    <svg viewBox="0 0 700 450" className="uml-diagram">
      {/* Simple Association */}
      <g transform="translate(50, 30)">
        <text x="0" y="-5" className="section-title">Association Simple</text>
        <ClassBox x={0} y={10} name="Étudiant" attributes={[]} methods={[]} width={100} />
        <ClassBox x={200} y={10} name="Cours" attributes={[]} methods={[]} width={100} />
        <line x1="100" y1="40" x2="200" y2="40" stroke="#333" strokeWidth="1.5"/>
        <text x="150" y="30" textAnchor="middle" className="assoc-label">suit</text>
        <text x="105" y="55" className="multiplicity">*</text>
        <text x="190" y="55" className="multiplicity">*</text>
      </g>
      
      {/* Aggregation */}
      <g transform="translate(400, 30)">
        <text x="0" y="-5" className="section-title">Agrégation (le tout peut exister sans les parties)</text>
        <ClassBox x={0} y={10} name="Équipe" attributes={[]} methods={[]} width={100} />
        <ClassBox x={200} y={10} name="Joueur" attributes={[]} methods={[]} width={100} />
        <path d="M100,40 L112,35 L124,40 L112,45 z" fill="white" stroke="#333" strokeWidth="1.5"/>
        <line x1="124" y1="40" x2="200" y2="40" stroke="#333" strokeWidth="1.5"/>
        <text x="105" y="55" className="multiplicity">1</text>
        <text x="190" y="55" className="multiplicity">1..*</text>
      </g>
      
      {/* Composition */}
      <g transform="translate(50, 150)">
        <text x="0" y="-5" className="section-title">Composition (le tout et les parties ont même cycle de vie)</text>
        <ClassBox x={0} y={10} name="Maison" attributes={[]} methods={[]} width={100} />
        <ClassBox x={200} y={10} name="Pièce" attributes={[]} methods={[]} width={100} />
        <path d="M100,40 L112,35 L124,40 L112,45 z" fill="#333" stroke="#333" strokeWidth="1.5"/>
        <line x1="124" y1="40" x2="200" y2="40" stroke="#333" strokeWidth="1.5"/>
        <text x="105" y="55" className="multiplicity">1</text>
        <text x="190" y="55" className="multiplicity">1..*</text>
      </g>
      
      {/* Inheritance */}
      <g transform="translate(400, 150)">
        <text x="0" y="-5" className="section-title">Héritage (Généralisation)</text>
        <ClassBox x={50} y={10} name="Animal" attributes={[]} methods={[]} width={100} />
        <ClassBox x={0} y={90} name="Chat" attributes={[]} methods={[]} width={80} />
        <ClassBox x={120} y={90} name="Chien" attributes={[]} methods={[]} width={80} />
        <line x1="40" y1="90" x2="100" y2="70" stroke="#333" strokeWidth="1.5"/>
        <line x1="160" y1="90" x2="100" y2="70" stroke="#333" strokeWidth="1.5"/>
        <path d="M90,75 L100,60 L110,75 z" fill="white" stroke="#333" strokeWidth="1.5"/>
      </g>
      
      {/* Dependency */}
      <g transform="translate(50, 290)">
        <text x="0" y="-5" className="section-title">Dépendance (utilise temporairement)</text>
        <ClassBox x={0} y={10} name="Client" attributes={[]} methods={[]} width={100} />
        <ClassBox x={200} y={10} name="Service" attributes={[]} methods={[]} width={100} />
        <line x1="100" y1="40" x2="190" y2="40" stroke="#333" strokeWidth="1.5" strokeDasharray="5,3"/>
        <path d="M190,40 L180,35 M190,40 L180,45" fill="none" stroke="#333" strokeWidth="1.5"/>
        <text x="150" y="30" textAnchor="middle" className="dependency-label">«use»</text>
      </g>
      
      {/* Realization */}
      <g transform="translate(400, 290)">
        <text x="0" y="-5" className="section-title">Réalisation (implémente interface)</text>
        <InterfaceBox x={50} y={10} name="Drawable" methods={["+draw()"]} width={100} />
        <ClassBox x={50} y={110} name="Circle" attributes={[]} methods={["+draw()"]} width={100} />
        <line x1="100" y1="110" x2="100" y2="80" stroke="#333" strokeWidth="1.5" strokeDasharray="5,3"/>
        <path d="M90,85 L100,70 L110,85 z" fill="white" stroke="#333" strokeWidth="1.5"/>
      </g>
    </svg>
  </div>
);

// Multiplicity Examples
export const MultiplicityDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Notation des Multiplicités</h4>
    <svg viewBox="0 0 600 280" className="uml-diagram">
      <g transform="translate(30, 30)">
        {/* Examples */}
        <text x="0" y="0" className="mult-title">Notation</text>
        <text x="150" y="0" className="mult-title">Signification</text>
        
        <text x="0" y="35" className="multiplicity-big">1</text>
        <text x="150" y="35" className="mult-desc">Exactement un</text>
        
        <text x="0" y="70" className="multiplicity-big">0..1</text>
        <text x="150" y="70" className="mult-desc">Zéro ou un (optionnel)</text>
        
        <text x="0" y="105" className="multiplicity-big">*</text>
        <text x="150" y="105" className="mult-desc">Zéro ou plusieurs</text>
        
        <text x="0" y="140" className="multiplicity-big">1..*</text>
        <text x="150" y="140" className="mult-desc">Un ou plusieurs (au moins un)</text>
        
        <text x="0" y="175" className="multiplicity-big">0..*</text>
        <text x="150" y="175" className="mult-desc">Zéro ou plusieurs (équivalent à *)</text>
        
        <text x="0" y="210" className="multiplicity-big">n..m</text>
        <text x="150" y="210" className="mult-desc">Entre n et m (ex: 2..5)</text>
      </g>
      
      {/* Visual example */}
      <g transform="translate(380, 60)">
        <text x="50" y="-30" textAnchor="middle" className="section-title">Exemple</text>
        <ClassBox x={0} y={0} name="Personne" attributes={[]} methods={[]} width={100} />
        <ClassBox x={0} y={100} name="Voiture" attributes={[]} methods={[]} width={100} />
        <line x1="50" y1="55" x2="50" y2="100" stroke="#333" strokeWidth="1.5"/>
        <text x="60" y="70" className="multiplicity">1</text>
        <text x="60" y="95" className="multiplicity">0..*</text>
        <text x="70" y="82" className="assoc-label">possède</text>
      </g>
    </svg>
  </div>
);

export default { 
  VehicleClassDiagram, 
  LibraryClassDiagram, 
  AssociationTypesDiagram,
  MultiplicityDiagram 
};
