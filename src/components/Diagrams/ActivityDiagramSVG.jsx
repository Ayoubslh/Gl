import React from 'react';
import './DiagramsSVG.css';

// Initial Node (filled circle)
const InitialNode = ({ x, y }) => (
  <circle cx={x} cy={y} r="10" fill="#333" stroke="#333" strokeWidth="2" />
);

// Final Node (circle with inner filled circle)
const FinalNode = ({ x, y }) => (
  <g>
    <circle cx={x} cy={y} r="12" fill="none" stroke="#333" strokeWidth="2" />
    <circle cx={x} cy={y} r="7" fill="#333" />
  </g>
);

// Flow Final Node (circle with X)
const FlowFinalNode = ({ x, y }) => (
  <g>
    <circle cx={x} cy={y} r="12" fill="none" stroke="#333" strokeWidth="2" />
    <line x1={x-6} y1={y-6} x2={x+6} y2={y+6} stroke="#333" strokeWidth="2" />
    <line x1={x+6} y1={y-6} x2={x-6} y2={y+6} stroke="#333" strokeWidth="2" />
  </g>
);

// Activity/Action Node (rounded rectangle)
const ActivityNode = ({ x, y, label, width = 140, height = 40 }) => (
  <g className="uml-activity">
    <rect 
      x={x} y={y} 
      width={width} height={height} 
      rx="10" ry="10"
      fill="#f8f9fa" 
      stroke="#333" 
      strokeWidth="2" 
    />
    <text 
      x={x + width/2} 
      y={y + height/2 + 5} 
      textAnchor="middle" 
      className="activity-label"
    >
      {label}
    </text>
  </g>
);

// Decision/Merge Node (diamond)
const DecisionNode = ({ x, y, size = 30 }) => (
  <path 
    d={`M${x},${y-size/2} L${x+size/2},${y} L${x},${y+size/2} L${x-size/2},${y} z`}
    fill="#fff" 
    stroke="#333" 
    strokeWidth="2"
  />
);

// Fork/Join Bar (horizontal or vertical)
const ForkJoinBar = ({ x, y, length = 100, horizontal = true }) => (
  <rect 
    x={horizontal ? x : x - 4} 
    y={horizontal ? y - 4 : y} 
    width={horizontal ? length : 8} 
    height={horizontal ? 8 : length}
    fill="#333"
  />
);

// Arrow/Flow
const Flow = ({ points, label = null, labelPos = null }) => {
  const pathData = points.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join(' ');
  const lastPoint = points[points.length - 1];
  const secondLastPoint = points[points.length - 2];
  
  // Calculate arrow direction
  const dx = lastPoint.x - secondLastPoint.x;
  const dy = lastPoint.y - secondLastPoint.y;
  const angle = Math.atan2(dy, dx);
  
  return (
    <g className="uml-flow">
      <path d={pathData} fill="none" stroke="#333" strokeWidth="1.5" />
      <path 
        d={`M${lastPoint.x},${lastPoint.y} 
            L${lastPoint.x - 10*Math.cos(angle) + 5*Math.sin(angle)},${lastPoint.y - 10*Math.sin(angle) - 5*Math.cos(angle)} 
            L${lastPoint.x - 10*Math.cos(angle) - 5*Math.sin(angle)},${lastPoint.y - 10*Math.sin(angle) + 5*Math.cos(angle)} z`}
        fill="#333"
      />
      {label && labelPos && (
        <text x={labelPos.x} y={labelPos.y} className="flow-label">[{label}]</text>
      )}
    </g>
  );
};

// Simple Arrow (straight)
const Arrow = ({ x1, y1, x2, y2, label = null }) => {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const labelX = (x1 + x2) / 2;
  const labelY = (y1 + y2) / 2 - 8;
  
  return (
    <g className="uml-arrow">
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#333" strokeWidth="1.5" />
      <path 
        d={`M${x2},${y2} 
            L${x2 - 10*Math.cos(angle) + 5*Math.sin(angle)},${y2 - 10*Math.sin(angle) - 5*Math.cos(angle)} 
            L${x2 - 10*Math.cos(angle) - 5*Math.sin(angle)},${y2 - 10*Math.sin(angle) + 5*Math.cos(angle)} z`}
        fill="#333"
      />
      {label && <text x={labelX} y={labelY} textAnchor="middle" className="flow-label">[{label}]</text>}
    </g>
  );
};

// Swimlane
const Swimlane = ({ x, y, width, height, label }) => (
  <g className="uml-swimlane">
    <rect x={x} y={y} width={width} height={height} fill="none" stroke="#333" strokeWidth="2" />
    <rect x={x} y={y} width={width} height="30" fill="#e8f4fd" stroke="#333" strokeWidth="2" />
    <text x={x + width/2} y={y + 20} textAnchor="middle" className="swimlane-label">{label}</text>
  </g>
);

// ATM Withdrawal Activity Diagram
export const ATMActivityDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Diagramme d'Activité - Retrait au DAB</h4>
    <svg viewBox="0 0 450 650" className="uml-diagram">
      {/* Initial Node */}
      <InitialNode x={225} y={25} />
      
      {/* Activities */}
      <Arrow x1={225} y1={35} x2={225} y2={55} />
      <ActivityNode x={155} y={55} label="Insérer carte" />
      
      <Arrow x1={225} y1={95} x2={225} y2={115} />
      <ActivityNode x={155} y={115} label="Saisir code PIN" />
      
      <Arrow x1={225} y1={155} x2={225} y2={185} />
      <DecisionNode x={225} y={200} />
      
      {/* PIN Valid branch */}
      <Arrow x1={240} y1={200} x2={340} y2={200} label="PIN invalide" />
      <Arrow x1={340} y1={200} x2={340} y2={135} />
      <Arrow x1={340} y1={135} x2={295} y2={135} />
      
      {/* PIN Valid continue */}
      <Arrow x1={225} y1={215} x2={225} y2={245} label="PIN valide" />
      <ActivityNode x={155} y={245} label="Choisir opération" />
      
      <Arrow x1={225} y1={285} x2={225} y2={315} />
      <ActivityNode x={155} y={315} label="Saisir montant" />
      
      <Arrow x1={225} y1={355} x2={225} y2={385} />
      <DecisionNode x={225} y={400} />
      
      {/* Insufficient funds branch */}
      <Arrow x1={240} y1={400} x2={380} y2={400} label="solde insuffisant" />
      <ActivityNode x={330} y={420} label="Afficher erreur" width={100} />
      <Arrow x1={380} y1={460} x2={380} y2={580} />
      <Arrow x1={380} y1={580} x2={240} y2={580} />
      
      {/* Sufficient funds continue */}
      <Arrow x1={225} y1={415} x2={225} y2={445} label="solde OK" />
      <ActivityNode x={155} y={445} label="Débiter compte" />
      
      <Arrow x1={225} y1={485} x2={225} y2={510} />
      <ActivityNode x={155} y={510} label="Distribuer billets" />
      
      <Arrow x1={225} y1={550} x2={225} y2={570} />
      <DecisionNode x={225} y={580} size={20} />
      
      <Arrow x1={225} y1={590} x2={225} y2={610} />
      <ActivityNode x={155} y={610} label="Éjecter carte" width={140} height={35} />
      
      <Arrow x1={225} y1={645} x2={225} y2={665} />
      <FinalNode x={225} y={680} />
    </svg>
  </div>
);

// Login Activity with Fork/Join
export const LoginActivityDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Diagramme d'Activité - Processus de Connexion</h4>
    <svg viewBox="0 0 500 500" className="uml-diagram">
      <InitialNode x={250} y={25} />
      
      <Arrow x1={250} y1={35} x2={250} y2={55} />
      <ActivityNode x={180} y={55} label="Afficher formulaire" />
      
      <Arrow x1={250} y1={95} x2={250} y2={115} />
      <ActivityNode x={175} y={115} label="Saisir identifiants" width={150} />
      
      <Arrow x1={250} y1={155} x2={250} y2={175} />
      <ActivityNode x={175} y={175} label="Valider formulaire" width={150} />
      
      <Arrow x1={250} y1={215} x2={250} y2={240} />
      <DecisionNode x={250} y={255} />
      
      {/* Invalid credentials */}
      <g>
        <Arrow x1={235} y1={255} x2={100} y2={255} />
        <text x={170} y={248} className="flow-label">[invalide]</text>
        <ActivityNode x={30} y={275} label="Afficher erreur" width={120} />
        <Arrow x1={90} y1={315} x2={90} y2={400} />
        <Arrow x1={90} y1={400} x2={240} y2={400} />
      </g>
      
      {/* Valid credentials - Fork */}
      <Arrow x1={250} y1={270} x2={250} y2={295} label="valide" />
      <ForkJoinBar x={150} y={305} length={200} />
      
      {/* Parallel activities */}
      <Arrow x1={200} y1={313} x2={200} y2={335} />
      <ActivityNode x={130} y={335} label="Charger profil" />
      
      <Arrow x1={300} y1={313} x2={300} y2={335} />
      <ActivityNode x={230} y={335} label="Logger accès" />
      
      {/* Join */}
      <Arrow x1={200} y1={375} x2={200} y2={395} />
      <Arrow x1={300} y1={375} x2={300} y2={395} />
      <ForkJoinBar x={150} y={395} length={200} />
      
      <Arrow x1={250} y1={403} x2={250} y2={425} />
      <ActivityNode x={175} y={425} label="Afficher accueil" width={150} />
      
      <Arrow x1={250} y1={465} x2={250} y2={490} />
      <FinalNode x={250} y={505} />
    </svg>
    <div className="diagram-legend">
      <div className="legend-item">
        <svg width="30" height="30"><InitialNode x={15} y={15} /></svg>
        <span>Nœud initial</span>
      </div>
      <div className="legend-item">
        <svg width="30" height="30"><FinalNode x={15} y={15} /></svg>
        <span>Nœud final</span>
      </div>
      <div className="legend-item">
        <svg width="35" height="30"><DecisionNode x={17} y={15} size={24} /></svg>
        <span>Décision/Fusion</span>
      </div>
      <div className="legend-item">
        <svg width="50" height="20"><ForkJoinBar x={5} y={8} length={40} /></svg>
        <span>Fork/Join</span>
      </div>
    </div>
  </div>
);

// Order Processing with Swimlanes
export const OrderActivityDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Diagramme d'Activité avec Couloirs - Traitement Commande</h4>
    <svg viewBox="0 0 600 550" className="uml-diagram">
      {/* Swimlanes */}
      <Swimlane x={10} y={10} width={190} height={520} label="Client" />
      <Swimlane x={200} y={10} width={190} height={520} label="Système" />
      <Swimlane x={390} y={10} width={190} height={520} label="Stock" />
      
      {/* Client lane */}
      <InitialNode x={105} y={60} />
      <Arrow x1={105} y1={70} x2={105} y2={90} />
      <ActivityNode x={35} y={90} label="Passer commande" />
      
      {/* Flow to System */}
      <Arrow x1={175} y1={110} x2={210} y2={110} />
      <Arrow x1={210} y1={110} x2={210} y2={140} />
      <Arrow x1={210} y1={140} x2={225} y2={140} />
      
      {/* System lane */}
      <ActivityNode x={225} y={120} label="Valider commande" width={150} />
      <Arrow x1={300} y1={160} x2={300} y2={185} />
      <DecisionNode x={300} y={200} />
      
      {/* Invalid order */}
      <Arrow x1={285} y1={200} x2={105} y2={200} label="invalide" />
      <ActivityNode x={35} y={220} label="Corriger commande" />
      <Arrow x1={105} y1={260} x2={105} y2={110} />
      
      {/* Valid - to Stock */}
      <Arrow x1={315} y1={200} x2={485} y2={200} label="valide" />
      <Arrow x1={485} y1={200} x2={485} y2={230} />
      
      {/* Stock lane */}
      <ActivityNode x={410} y={230} label="Vérifier stock" width={150} />
      <Arrow x1={485} y1={270} x2={485} y2={295} />
      <DecisionNode x={485} y={310} />
      
      {/* Out of stock */}
      <Arrow x1={500} y1={310} x2={560} y2={310} label="rupture" />
      <Arrow x1={560} y1={310} x2={560} y2={480} />
      <Arrow x1={560} y1={480} x2={315} y2={480} />
      
      {/* In stock */}
      <Arrow x1={485} y1={325} x2={485} y2={350} label="disponible" />
      <ActivityNode x={410} y={350} label="Réserver articles" width={150} />
      
      {/* Back to System */}
      <Arrow x1={410} y1={370} x2={365} y2={370} />
      <Arrow x1={365} y1={370} x2={365} y2={400} />
      
      <ActivityNode x={225} y={380} label="Générer facture" width={150} />
      <Arrow x1={300} y1={420} x2={300} y2={445} />
      
      {/* Fork for parallel */}
      <ForkJoinBar x={220} y={450} length={160} />
      <Arrow x1={260} y1={458} x2={260} y2={475} />
      <Arrow x1={340} y1={458} x2={340} y2={475} />
      
      {/* Parallel: Notify and Prepare */}
      <ActivityNode x={195} y={475} label="Notifier client" width={130} />
      <ActivityNode x={340} y={475} label="Préparer" width={100} />
      
      <Arrow x1={260} y1={515} x2={260} y2={530} />
      <Arrow x1={390} y1={515} x2={390} y2={530} />
      <Arrow x1={390} y1={530} x2={340} y2={530} />
      
      {/* Join and Final */}
      <ForkJoinBar x={220} y={525} length={120} />
      <Arrow x1={280} y1={533} x2={280} y2={550} />
      <FinalNode x={280} y={565} />
    </svg>
  </div>
);

// Activity Diagram Notation
export const ActivityNotationDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Notation des Diagrammes d'Activité</h4>
    <svg viewBox="0 0 700 350" className="uml-diagram">
      {/* Initial Node */}
      <g transform="translate(30, 30)">
        <text x="40" y="-5" textAnchor="middle" className="section-title">Nœud initial</text>
        <InitialNode x={40} y={30} />
        <text x="40" y="60" textAnchor="middle" className="notation-desc">Début du flux</text>
      </g>
      
      {/* Activity Node */}
      <g transform="translate(130, 30)">
        <text x="70" y="-5" textAnchor="middle" className="section-title">Action/Activité</text>
        <ActivityNode x={0} y={10} label="Faire quelque chose" />
        <text x="70" y="70" textAnchor="middle" className="notation-desc">Étape du processus</text>
      </g>
      
      {/* Decision Node */}
      <g transform="translate(310, 30)">
        <text x="35" y="-5" textAnchor="middle" className="section-title">Décision</text>
        <DecisionNode x={35} y={35} />
        <text x="35" y="75" textAnchor="middle" className="notation-desc">Branchement</text>
      </g>
      
      {/* Merge Node */}
      <g transform="translate(420, 30)">
        <text x="35" y="-5" textAnchor="middle" className="section-title">Fusion</text>
        <DecisionNode x={35} y={35} />
        <text x="35" y="75" textAnchor="middle" className="notation-desc">Rejoindre les flux</text>
      </g>
      
      {/* Fork/Join */}
      <g transform="translate(530, 30)">
        <text x="50" y="-5" textAnchor="middle" className="section-title">Fork / Join</text>
        <ForkJoinBar x={10} y={30} length={80} />
        <text x="50" y="60" textAnchor="middle" className="notation-desc">Parallélisme</text>
      </g>
      
      {/* Final Node */}
      <g transform="translate(30, 140)">
        <text x="40" y="-5" textAnchor="middle" className="section-title">Nœud final</text>
        <FinalNode x={40} y={30} />
        <text x="40" y="65" textAnchor="middle" className="notation-desc">Fin du flux</text>
      </g>
      
      {/* Flow Final */}
      <g transform="translate(130, 140)">
        <text x="40" y="-5" textAnchor="middle" className="section-title">Fin de flux</text>
        <FlowFinalNode x={40} y={30} />
        <text x="40" y="65" textAnchor="middle" className="notation-desc">Termine un chemin</text>
      </g>
      
      {/* Guard Condition */}
      <g transform="translate(250, 140)">
        <text x="60" y="-5" textAnchor="middle" className="section-title">Condition de garde</text>
        <Arrow x1={20} y1={35} x2={100} y2={35} label="condition" />
        <text x="60" y="70" textAnchor="middle" className="notation-desc">Sur les transitions</text>
      </g>
      
      {/* Swimlane */}
      <g transform="translate(420, 120)">
        <text x="75" y="-5" textAnchor="middle" className="section-title">Couloir (Swimlane)</text>
        <rect x="10" y="10" width="130" height="80" fill="none" stroke="#333" strokeWidth="2"/>
        <rect x="10" y="10" width="130" height="25" fill="#e8f4fd" stroke="#333" strokeWidth="2"/>
        <text x="75" y="28" textAnchor="middle" className="swimlane-label">Acteur</text>
        <text x="75" y="110" textAnchor="middle" className="notation-desc">Responsabilité</text>
      </g>
      
      {/* Signal nodes */}
      <g transform="translate(30, 250)">
        <text x="60" y="-5" textAnchor="middle" className="section-title">Signal d'envoi</text>
        <path d="M10,20 L80,20 L100,35 L80,50 L10,50 z" fill="#f8f9fa" stroke="#333" strokeWidth="2"/>
        <text x="50" y="40" textAnchor="middle" className="activity-label">Envoyer</text>
      </g>
      
      <g transform="translate(160, 250)">
        <text x="60" y="-5" textAnchor="middle" className="section-title">Signal de réception</text>
        <path d="M20,20 L100,20 L100,50 L20,50 L40,35 z" fill="#f8f9fa" stroke="#333" strokeWidth="2"/>
        <text x="65" y="40" textAnchor="middle" className="activity-label">Recevoir</text>
      </g>
      
      {/* Object node */}
      <g transform="translate(300, 250)">
        <text x="50" y="-5" textAnchor="middle" className="section-title">Nœud objet</text>
        <rect x="10" y="15" width="80" height="35" fill="#fff" stroke="#333" strokeWidth="2"/>
        <text x="50" y="38" textAnchor="middle" className="activity-label">:Document</text>
      </g>
    </svg>
  </div>
);

export default { 
  ATMActivityDiagram, 
  LoginActivityDiagram, 
  OrderActivityDiagram,
  ActivityNotationDiagram 
};
