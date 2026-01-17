import React from 'react';
import './DiagramsSVG.css';

// Initial State (filled circle)
const InitialState = ({ x, y }) => (
  <circle cx={x} cy={y} r="8" fill="#333" stroke="#333" strokeWidth="2" />
);

// Final State (circle with inner filled circle)
const FinalState = ({ x, y }) => (
  <g>
    <circle cx={x} cy={y} r="12" fill="none" stroke="#333" strokeWidth="2" />
    <circle cx={x} cy={y} r="7" fill="#333" />
  </g>
);

// Simple State (rounded rectangle)
const State = ({ x, y, name, width = 120, height = 45 }) => (
  <g className="uml-state">
    <rect 
      x={x} y={y} 
      width={width} height={height} 
      rx="15" ry="15"
      fill="#f8f9fa" 
      stroke="#333" 
      strokeWidth="2" 
    />
    <text 
      x={x + width/2} 
      y={y + height/2 + 5} 
      textAnchor="middle" 
      className="state-name"
    >
      {name}
    </text>
  </g>
);

// State with internal activities
const StateWithActivities = ({ x, y, name, entry = null, doActivity = null, exit = null, width = 140, height = 70 }) => {
  const hasActivities = entry || doActivity || exit;
  const actualHeight = hasActivities ? height : 45;
  
  return (
    <g className="uml-state">
      <rect 
        x={x} y={y} 
        width={width} height={actualHeight} 
        rx="15" ry="15"
        fill="#f8f9fa" 
        stroke="#333" 
        strokeWidth="2" 
      />
      <text 
        x={x + width/2} 
        y={y + 20} 
        textAnchor="middle" 
        className="state-name"
      >
        {name}
      </text>
      {hasActivities && (
        <>
          <line x1={x} y1={y + 30} x2={x + width} y2={y + 30} stroke="#333" strokeWidth="1" />
          {entry && <text x={x + 8} y={y + 45} className="state-activity">entry / {entry}</text>}
          {doActivity && <text x={x + 8} y={y + 58} className="state-activity">do / {doActivity}</text>}
          {exit && <text x={x + 8} y={y + 71} className="state-activity">exit / {exit}</text>}
        </>
      )}
    </g>
  );
};

// Composite State (with sub-states)
const CompositeState = ({ x, y, name, width = 300, height = 200, children }) => (
  <g className="uml-composite-state">
    <rect 
      x={x} y={y} 
      width={width} height={height} 
      rx="15" ry="15"
      fill="#fafafa" 
      stroke="#333" 
      strokeWidth="2" 
    />
    <text x={x + 10} y={y + 20} className="composite-state-name">{name}</text>
    <line x1={x} y1={y + 30} x2={x + width} y2={y + 30} stroke="#333" strokeWidth="1" />
    {children}
  </g>
);

// Transition Arrow
const Transition = ({ x1, y1, x2, y2, event = null, guard = null, action = null, curved = false }) => {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const angle = Math.atan2(y2 - y1, x2 - x1);
  
  let label = '';
  if (event) label += event;
  if (guard) label += ` [${guard}]`;
  if (action) label += ` / ${action}`;
  
  const pathData = curved 
    ? `M${x1},${y1} Q${midX},${midY - 40} ${x2},${y2}`
    : `M${x1},${y1} L${x2},${y2}`;
  
  return (
    <g className="uml-transition">
      <defs>
        <marker id="state-arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#333" />
        </marker>
      </defs>
      <path 
        d={pathData} 
        fill="none" 
        stroke="#333" 
        strokeWidth="1.5" 
        markerEnd="url(#state-arrow)"
      />
      {label && (
        <text 
          x={midX} 
          y={curved ? midY - 45 : midY - 8} 
          textAnchor="middle" 
          className="transition-label"
        >
          {label}
        </text>
      )}
    </g>
  );
};

// Simple straight arrow
const Arrow = ({ x1, y1, x2, y2, label = null }) => {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const angle = Math.atan2(y2 - y1, x2 - x1);
  
  return (
    <g className="uml-arrow">
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#333" strokeWidth="1.5" />
      <path 
        d={`M${x2},${y2} 
            L${x2 - 10*Math.cos(angle) + 5*Math.sin(angle)},${y2 - 10*Math.sin(angle) - 5*Math.cos(angle)} 
            L${x2 - 10*Math.cos(angle) - 5*Math.sin(angle)},${y2 - 10*Math.sin(angle) + 5*Math.cos(angle)} z`}
        fill="#333"
      />
      {label && <text x={midX} y={midY - 8} textAnchor="middle" className="transition-label">{label}</text>}
    </g>
  );
};

// Choice pseudostate (diamond)
const Choice = ({ x, y }) => (
  <path 
    d={`M${x},${y-12} L${x+12},${y} L${x},${y+12} L${x-12},${y} z`}
    fill="#fff" 
    stroke="#333" 
    strokeWidth="2"
  />
);

// History state (H in circle)
const HistoryState = ({ x, y, deep = false }) => (
  <g>
    <circle cx={x} cy={y} r="12" fill="none" stroke="#333" strokeWidth="2" />
    <text x={x} y={y + 5} textAnchor="middle" className="history-label">
      {deep ? 'H*' : 'H'}
    </text>
  </g>
);

// Order State Diagram
export const OrderStateDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Diagramme d'État - Cycle de Vie d'une Commande</h4>
    <svg viewBox="0 0 700 400" className="uml-diagram">
      {/* Initial */}
      <InitialState x={50} y={100} />
      <Arrow x1={58} y1={100} x2={100} y2={100} />
      
      {/* States */}
      <State x={100} y={77} name="Créée" />
      <State x={280} y={77} name="Validée" />
      <State x={450} y={77} name="En préparation" width={140} />
      <State x={280} y={200} name="Expédiée" />
      <State x={450} y={200} name="Livrée" />
      <State x={100} y={200} name="Annulée" />
      
      {/* Transitions */}
      <Arrow x1={220} y1={100} x2={280} y2={100} label="valider()" />
      <Arrow x1={400} y1={100} x2={450} y2={100} label="préparer()" />
      <Arrow x1={520} y1={145} x2={520} y2={200} label="expédier()" />
      <Arrow x1={520} y1={222} x2={450} y2={222} />
      <Arrow x1={400} y1={222} x2={330} y2={222} label="confirmerRéception()" />
      
      {/* Annulation */}
      <Arrow x1={160} y1={122} x2={160} y2={200} label="annuler()" />
      <Arrow x1={340} y1={122} x2={160} y2={180} />
      
      {/* Final */}
      <Arrow x1={280} y1={245} x2={280} y2={320} />
      <FinalState x={280} y={335} />
      <Arrow x1={160} y1={245} x2={160} y2={335} />
      <FinalState x={160} y={350} />
    </svg>
  </div>
);

// Connection State Diagram
export const ConnectionStateDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Diagramme d'État - Connexion Réseau</h4>
    <svg viewBox="0 0 600 350" className="uml-diagram">
      {/* Initial */}
      <InitialState x={50} y={175} />
      <Arrow x1={58} y1={175} x2={100} y2={175} />
      
      {/* States with activities */}
      <StateWithActivities 
        x={100} y={145} 
        name="Déconnecté" 
        entry="réinitialiser()"
        width={130}
        height={60}
      />
      
      <StateWithActivities 
        x={300} y={60} 
        name="Connexion" 
        doActivity="établirConnexion()"
        width={150}
        height={55}
      />
      
      <StateWithActivities 
        x={300} y={155} 
        name="Connecté" 
        entry="notifierConnexion()"
        doActivity="maintenir()"
        exit="sauvegarderÉtat()"
        width={150}
        height={85}
      />
      
      <StateWithActivities 
        x={300} y={280} 
        name="Déconnexion" 
        doActivity="fermerConnexion()"
        width={150}
        height={55}
      />
      
      {/* Transitions */}
      <Arrow x1={165} y1={145} x2={300} y2={87} label="connecter()" />
      <Arrow x1={375} y1={115} x2={375} y2={155} label="succès" />
      
      {/* Timeout - curved */}
      <path d="M450,87 Q520,87 520,175 Q520,307 450,307" fill="none" stroke="#333" strokeWidth="1.5" />
      <text x="535" y="175" className="transition-label">timeout</text>
      <path d="M450,307 L458,300 L458,314 z" fill="#333" />
      
      <Arrow x1={300} y1={307} x2={230} y2={205} label="terminé" />
      <Arrow x1={375} y1={240} x2={375} y2={280} label="déconnecter()" />
      
      {/* Error */}
      <path d="M300,87 Q250,50 165,145" fill="none" stroke="#333" strokeWidth="1.5" />
      <text x="210" y="50" className="transition-label">erreur</text>
      <path d="M165,145 L175,142 L172,152 z" fill="#333" />
    </svg>
  </div>
);

// Light Switch - Simple Example
export const LightStateDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Diagramme d'État Simple - Interrupteur</h4>
    <svg viewBox="0 0 400 200" className="uml-diagram">
      {/* Initial */}
      <InitialState x={50} y={100} />
      <Arrow x1={58} y1={100} x2={100} y2={100} />
      
      {/* States */}
      <State x={100} y={77} name="Éteint" />
      <State x={260} y={77} name="Allumé" />
      
      {/* Transitions */}
      <path d="M220,85 Q250,50 260,85" fill="none" stroke="#333" strokeWidth="1.5" />
      <text x="240" y="45" textAnchor="middle" className="transition-label">appuyer()</text>
      <path d="M260,85 L255,77 L265,77 z" fill="#333" />
      
      <path d="M260,122 Q240,160 220,122" fill="none" stroke="#333" strokeWidth="1.5" />
      <text x="240" y="170" textAnchor="middle" className="transition-label">appuyer()</text>
      <path d="M220,122 L225,130 L215,130 z" fill="#333" />
    </svg>
  </div>
);

// Phone Call State Diagram
export const PhoneStateDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Diagramme d'État - Appel Téléphonique</h4>
    <svg viewBox="0 0 650 450" className="uml-diagram">
      {/* Initial */}
      <InitialState x={50} y={80} />
      <Arrow x1={58} y1={80} x2={100} y2={80} />
      
      {/* States */}
      <State x={100} y={57} name="Inactif" />
      <State x={280} y={57} name="Numérotation" width={130} />
      <State x={480} y={57} name="Sonnerie" />
      <State x={280} y={170} name="Conversation" width={130} />
      <State x={100} y={170} name="En attente" />
      <State x={480} y={170} name="Messagerie" />
      <State x={280} y={300} name="Terminé" />
      
      {/* Transitions */}
      <Arrow x1={220} y1={80} x2={280} y2={80} label="décrocher()" />
      <Arrow x1={410} y1={80} x2={480} y2={80} label="composer() [numéro valide]" />
      <Arrow x1={540} y1={102} x2={410} y2={170} label="répondre()" />
      
      {/* To messagerie */}
      <Arrow x1={540} y1={102} x2={540} y2={170} label="timeout" />
      <Arrow x1={540} y1={215} x2={345} y2={300} label="fin" />
      
      {/* Conversation */}
      <Arrow x1={345} y1={215} x2={345} y2={300} label="raccrocher()" />
      
      {/* En attente */}
      <Arrow x1={280} y1={192} x2={220} y2={192} label="mettreEnAttente()" />
      <Arrow x1={220} y1={192} x2={280} y2={215} label="reprendre()" />
      
      {/* Final */}
      <Arrow x1={345} y1={345} x2={345} y2={390} />
      <FinalState x={345} y={405} />
      
      {/* Cancel from numérotation */}
      <path d="M280,80 Q200,30 160,57" fill="none" stroke="#333" strokeWidth="1.5" />
      <text x="200" y="25" className="transition-label">annuler()</text>
      <path d="M160,57 L165,65 L155,65 z" fill="#333" />
    </svg>
  </div>
);

// State Diagram Notation
export const StateNotationDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Notation des Diagrammes d'État</h4>
    <svg viewBox="0 0 700 400" className="uml-diagram">
      {/* Initial State */}
      <g transform="translate(30, 30)">
        <text x="40" y="-5" textAnchor="middle" className="section-title">État initial</text>
        <InitialState x={40} y={25} />
        <text x="40" y="55" textAnchor="middle" className="notation-desc">Point de départ</text>
      </g>
      
      {/* Final State */}
      <g transform="translate(130, 30)">
        <text x="40" y="-5" textAnchor="middle" className="section-title">État final</text>
        <FinalState x={40} y={25} />
        <text x="40" y="55" textAnchor="middle" className="notation-desc">Point d'arrivée</text>
      </g>
      
      {/* Simple State */}
      <g transform="translate(250, 20)">
        <text x="60" y="0" textAnchor="middle" className="section-title">État simple</text>
        <State x={0} y={10} name="NomÉtat" />
        <text x="60" y="75" textAnchor="middle" className="notation-desc">État du système</text>
      </g>
      
      {/* State with activities */}
      <g transform="translate(420, 10)">
        <text x="75" y="0" textAnchor="middle" className="section-title">État avec activités</text>
        <StateWithActivities 
          x={0} y={10} 
          name="État" 
          entry="action1()"
          doActivity="action2()"
          exit="action3()"
          width={150}
          height={85}
        />
        <text x="75" y="115" textAnchor="middle" className="notation-desc">Actions internes</text>
      </g>
      
      {/* Transition */}
      <g transform="translate(30, 150)">
        <text x="100" y="-5" textAnchor="middle" className="section-title">Transition</text>
        <State x={0} y={10} name="État A" width={80} height={35} />
        <Arrow x1={80} y1={27} x2={150} y2={27} label="événement [garde] / action" />
        <State x={150} y={10} name="État B" width={80} height={35} />
      </g>
      
      {/* Choice */}
      <g transform="translate(320, 150)">
        <text x="40" y="-5" textAnchor="middle" className="section-title">Choix</text>
        <Choice x={40} y={30} />
        <text x="40" y="65" textAnchor="middle" className="notation-desc">Point de décision</text>
      </g>
      
      {/* History */}
      <g transform="translate(420, 150)">
        <text x="40" y="-5" textAnchor="middle" className="section-title">Historique</text>
        <HistoryState x={25} y={30} />
        <HistoryState x={65} y={30} deep={true} />
        <text x="25" y="55" textAnchor="middle" className="notation-desc">H</text>
        <text x="65" y="55" textAnchor="middle" className="notation-desc">H*</text>
      </g>
      
      {/* Composite State */}
      <g transform="translate(30, 250)">
        <text x="150" y="-5" textAnchor="middle" className="section-title">État composite</text>
        <rect x={0} y={10} width={300} height={100} rx="15" ry="15" fill="#fafafa" stroke="#333" strokeWidth="2"/>
        <text x="15" y="30" className="composite-state-name">État Parent</text>
        <line x1="0" y1="40" x2="300" y2="40" stroke="#333" strokeWidth="1"/>
        <State x={20} y={55} name="Sous-état 1" width={100} height={35} />
        <State x={170} y={55} name="Sous-état 2" width={100} height={35} />
        <Arrow x1={120} y1={72} x2={170} y2={72} />
      </g>
      
      {/* Transition syntax */}
      <g transform="translate(370, 250)">
        <text x="130" y="-5" textAnchor="middle" className="section-title">Syntaxe transition</text>
        <rect x={0} y={10} width={260} height={100} fill="#f8f9fa" stroke="#ddd" strokeWidth="1" rx="5"/>
        <text x="130" y="35" textAnchor="middle" className="syntax-example">événement [condition] / action</text>
        <text x="20" y="60" className="syntax-desc">• événement: déclencheur</text>
        <text x="20" y="80" className="syntax-desc">• [condition]: garde optionnelle</text>
        <text x="20" y="100" className="syntax-desc">• / action: effet optionnel</text>
      </g>
    </svg>
  </div>
);

export default { 
  OrderStateDiagram, 
  ConnectionStateDiagram, 
  LightStateDiagram,
  PhoneStateDiagram,
  StateNotationDiagram 
};
