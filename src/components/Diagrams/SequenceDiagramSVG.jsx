import React from 'react';
import './DiagramsSVG.css';

// Lifeline Component
const Lifeline = ({ x, y, name, height = 300, isActor = false }) => (
  <g className="uml-lifeline" transform={`translate(${x}, ${y})`}>
    {isActor ? (
      <>
        {/* Actor stick figure */}
        <circle cx="30" cy="10" r="10" fill="none" stroke="#333" strokeWidth="2" />
        <line x1="30" y1="20" x2="30" y2="40" stroke="#333" strokeWidth="2" />
        <line x1="15" y1="28" x2="45" y2="28" stroke="#333" strokeWidth="2" />
        <line x1="30" y1="40" x2="18" y2="55" stroke="#333" strokeWidth="2" />
        <line x1="30" y1="40" x2="42" y2="55" stroke="#333" strokeWidth="2" />
      </>
    ) : (
      <>
        {/* Object box */}
        <rect x="0" y="0" width="80" height="35" fill="#e8f4fd" stroke="#333" strokeWidth="2" />
        <text x="40" y="22" textAnchor="middle" className="lifeline-name">{name}</text>
      </>
    )}
    {/* Dashed lifeline */}
    <line 
      x1={isActor ? 30 : 40} 
      y1={isActor ? 55 : 35} 
      x2={isActor ? 30 : 40} 
      y2={height} 
      stroke="#333" 
      strokeWidth="1.5" 
      strokeDasharray="8,4" 
    />
    {/* Actor name below */}
    {isActor && <text x="30" y="70" textAnchor="middle" className="lifeline-name">{name}</text>}
  </g>
);

// Activation Box
const ActivationBox = ({ x, y, height }) => (
  <rect 
    x={x} y={y} 
    width="16" height={height} 
    fill="#fff" 
    stroke="#333" 
    strokeWidth="1.5" 
  />
);

// Synchronous Message (solid line with filled arrow)
const SyncMessage = ({ x1, y, x2, label, isReturn = false }) => {
  const direction = x2 > x1 ? 1 : -1;
  const arrowX = x2 - direction * 10;
  
  return (
    <g className="uml-message">
      <line 
        x1={x1} y1={y} x2={x2} y2={y} 
        stroke="#333" 
        strokeWidth="1.5" 
        strokeDasharray={isReturn ? "5,3" : "none"}
      />
      {!isReturn ? (
        <path 
          d={`M${x2},${y} L${arrowX},${y-5} L${arrowX},${y+5} z`} 
          fill="#333" 
        />
      ) : (
        <path 
          d={`M${x2},${y} L${arrowX},${y-5} M${x2},${y} L${arrowX},${y+5}`} 
          fill="none" 
          stroke="#333" 
          strokeWidth="1.5"
        />
      )}
      <text 
        x={(x1 + x2) / 2} 
        y={y - 8} 
        textAnchor="middle" 
        className="message-label"
      >
        {label}
      </text>
    </g>
  );
};

// Async Message (solid line with open arrow)
const AsyncMessage = ({ x1, y, x2, label }) => {
  const direction = x2 > x1 ? 1 : -1;
  const arrowX = x2 - direction * 10;
  
  return (
    <g className="uml-message">
      <line x1={x1} y1={y} x2={x2} y2={y} stroke="#333" strokeWidth="1.5" />
      <path 
        d={`M${x2},${y} L${arrowX},${y-5} M${x2},${y} L${arrowX},${y+5}`} 
        fill="none" 
        stroke="#333" 
        strokeWidth="1.5"
      />
      <text x={(x1 + x2) / 2} y={y - 8} textAnchor="middle" className="message-label">{label}</text>
    </g>
  );
};

// Self Message
const SelfMessage = ({ x, y, label }) => (
  <g className="uml-self-message">
    <path 
      d={`M${x},${y} L${x+40},${y} L${x+40},${y+25} L${x+10},${y+25}`} 
      fill="none" 
      stroke="#333" 
      strokeWidth="1.5" 
    />
    <path d={`M${x+10},${y+25} L${x+18},${y+20} L${x+18},${y+30} z`} fill="#333" />
    <text x={x + 45} y={y + 15} className="message-label">{label}</text>
  </g>
);

// Combined Fragment (loop, alt, opt, etc.)
const CombinedFragment = ({ x, y, width, height, type, conditions = [] }) => (
  <g className="uml-fragment">
    <rect x={x} y={y} width={width} height={height} fill="none" stroke="#333" strokeWidth="1.5" />
    <rect x={x} y={y} width="50" height="20" fill="#f5f5f5" stroke="#333" strokeWidth="1" />
    <text x={x + 25} y={y + 14} textAnchor="middle" className="fragment-type">{type}</text>
    {conditions.map((cond, i) => (
      <g key={i}>
        {i > 0 && <line x1={x} y1={y + (height / conditions.length) * i} x2={x + width} y2={y + (height / conditions.length) * i} stroke="#333" strokeWidth="1" strokeDasharray="5,3" />}
        <text x={x + 10} y={y + 35 + (height / conditions.length) * i} className="condition-text">[{cond}]</text>
      </g>
    ))}
  </g>
);

// ATM Withdrawal Sequence Diagram
export const ATMSequenceDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Diagramme de Séquence - Retrait DAB</h4>
    <svg viewBox="0 0 700 450" className="uml-diagram">
      {/* Lifelines */}
      <Lifeline x={30} y={20} name="Client" height={400} isActor={true} />
      <Lifeline x={150} y={20} name=":DAB" height={400} />
      <Lifeline x={300} y={20} name=":Compte" height={400} />
      <Lifeline x={450} y={20} name=":Banque" height={400} />
      <Lifeline x={580} y={20} name=":Distributeur" height={400} />
      
      {/* Activation boxes */}
      <ActivationBox x={182} y={100} height={280} />
      <ActivationBox x={332} y={140} height={100} />
      <ActivationBox x={482} y={160} height={60} />
      <ActivationBox x={612} y={300} height={50} />
      
      {/* Messages */}
      <SyncMessage x1={60} y={100} x2={182} label="1: insérerCarte()" />
      <SyncMessage x1={198} y={120} x2={60} label="2: demanderPIN()" isReturn={true} />
      <SyncMessage x1={60} y={140} x2={182} label="3: saisirPIN(pin)" />
      <SyncMessage x1={198} y={160} x2={332} label="4: vérifierPIN(pin)" />
      <SyncMessage x1={348} y={180} x2={482} label="5: authentifier()" />
      <SyncMessage x1={498} y={200} x2={348} label="6: résultat" isReturn={true} />
      <SyncMessage x1={348} y={220} x2={198} label="7: pinValide" isReturn={true} />
      <SyncMessage x1={60} y={250} x2={182} label="8: demanderRetrait(montant)" />
      <SyncMessage x1={198} y={270} x2={332} label="9: vérifierSolde(montant)" />
      <SyncMessage x1={348} y={290} x2={198} label="10: soldeOK" isReturn={true} />
      <SyncMessage x1={198} y={310} x2={612} label="11: distribuerBillets(montant)" />
      <SyncMessage x1={628} y={340} x2={198} label="12: billetsDistribués" isReturn={true} />
      <SyncMessage x1={198} y={360} x2={332} label="13: débiter(montant)" />
      <SyncMessage x1={198} y={380} x2={60} label="14: éjecterCarte()" isReturn={true} />
    </svg>
  </div>
);

// Simple Authentication Sequence
export const AuthSequenceDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Diagramme de Séquence - Authentification</h4>
    <svg viewBox="0 0 600 350" className="uml-diagram">
      {/* Lifelines */}
      <Lifeline x={30} y={20} name="Utilisateur" height={300} isActor={true} />
      <Lifeline x={180} y={20} name=":IHM" height={300} />
      <Lifeline x={330} y={20} name=":Contrôleur" height={300} />
      <Lifeline x={480} y={20} name=":BaseDonnées" height={300} />
      
      {/* Activation boxes */}
      <ActivationBox x={212} y={90} height={180} />
      <ActivationBox x={362} y={120} height={120} />
      <ActivationBox x={512} y={150} height={60} />
      
      {/* Messages */}
      <SyncMessage x1={60} y={90} x2={212} label="1: saisirIdentifiants(login, pwd)" />
      <SyncMessage x1={228} y={120} x2={362} label="2: authentifier(login, pwd)" />
      <SyncMessage x1={378} y={150} x2={512} label="3: vérifier(login, pwd)" />
      <SyncMessage x1={528} y={190} x2={378} label="4: utilisateur" isReturn={true} />
      <SyncMessage x1={378} y={220} x2={228} label="5: résultat" isReturn={true} />
      <SyncMessage x1={228} y={250} x2={60} label="6: afficherAccueil()" isReturn={true} />
    </svg>
    <div className="diagram-legend">
      <div className="legend-item">
        <svg width="60" height="25">
          <line x1="5" y1="12" x2="45" y2="12" stroke="#333" strokeWidth="1.5"/>
          <path d="M45,12 L38,7 L38,17 z" fill="#333"/>
        </svg>
        <span>Message synchrone</span>
      </div>
      <div className="legend-item">
        <svg width="60" height="25">
          <line x1="5" y1="12" x2="45" y2="12" stroke="#333" strokeWidth="1.5" strokeDasharray="5,3"/>
          <path d="M45,12 L38,7 M45,12 L38,17" fill="none" stroke="#333" strokeWidth="1.5"/>
        </svg>
        <span>Message de retour</span>
      </div>
      <div className="legend-item">
        <svg width="40" height="25">
          <rect x="5" y="2" width="12" height="20" fill="#fff" stroke="#333" strokeWidth="1.5"/>
        </svg>
        <span>Activation</span>
      </div>
    </div>
  </div>
);

// Sequence with Alt Fragment
export const AltSequenceDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Diagramme de Séquence avec Fragment Alt (Condition)</h4>
    <svg viewBox="0 0 550 400" className="uml-diagram">
      {/* Lifelines */}
      <Lifeline x={50} y={20} name="Client" height={350} isActor={true} />
      <Lifeline x={200} y={20} name=":Système" height={350} />
      <Lifeline x={380} y={20} name=":Compte" height={350} />
      
      {/* Activation */}
      <ActivationBox x={232} y={90} height={250} />
      <ActivationBox x={412} y={120} height={60} />
      
      {/* Alt fragment */}
      <CombinedFragment x={160} y={180} width={300} height={150} type="alt" conditions={["solde >= montant", "sinon"]} />
      
      {/* Messages */}
      <SyncMessage x1={80} y={90} x2={232} label="1: retirer(montant)" />
      <SyncMessage x1={248} y={120} x2={412} label="2: getSolde()" />
      <SyncMessage x1={428} y={160} x2={248} label="3: solde" isReturn={true} />
      
      {/* Inside alt - success */}
      <SyncMessage x1={248} y={220} x2={412} label="4: débiter(montant)" />
      <SyncMessage x1={248} y={250} x2={80} label="5: succès" isReturn={true} />
      
      {/* Inside alt - failure */}
      <SyncMessage x1={248} y={300} x2={80} label="6: erreur: solde insuffisant" isReturn={true} />
    </svg>
  </div>
);

// Loop Fragment Example
export const LoopSequenceDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Diagramme de Séquence avec Fragment Loop (Boucle)</h4>
    <svg viewBox="0 0 500 320" className="uml-diagram">
      {/* Lifelines */}
      <Lifeline x={50} y={20} name=":Panier" height={270} />
      <Lifeline x={200} y={20} name=":Article" height={270} />
      <Lifeline x={350} y={20} name=":Stock" height={270} />
      
      {/* Loop fragment */}
      <CombinedFragment x={40} y={80} width={400} height={130} type="loop" conditions={["pour chaque article"]} />
      
      {/* Activation */}
      <ActivationBox x={82} y={60} height={180} />
      <ActivationBox x={232} y={110} height={80} />
      <ActivationBox x={382} y={130} height={40} />
      
      {/* Messages */}
      <SyncMessage x1={98} y={110} x2={232} label="getDetails()" />
      <SyncMessage x1={248} y={140} x2={382} label="vérifierDisponibilité()" />
      <SyncMessage x1={398} y={160} x2={248} label="quantité" isReturn={true} />
      <SyncMessage x1={248} y={180} x2={98} label="détails" isReturn={true} />
      <SyncMessage x1={98} y={230} x2={232} label="calculerTotal()" />
    </svg>
  </div>
);

// Notation Reference
export const SequenceNotationDiagram = () => (
  <div className="svg-diagram-container">
    <h4>Notation des Diagrammes de Séquence</h4>
    <svg viewBox="0 0 700 400" className="uml-diagram">
      {/* Object/Lifeline */}
      <g transform="translate(30, 30)">
        <text x="50" y="-10" textAnchor="middle" className="section-title">Objet / Ligne de vie</text>
        <rect x="10" y="10" width="80" height="30" fill="#e8f4fd" stroke="#333" strokeWidth="2"/>
        <text x="50" y="30" textAnchor="middle" className="lifeline-name">:Classe</text>
        <line x1="50" y1="40" x2="50" y2="100" stroke="#333" strokeWidth="1.5" strokeDasharray="8,4"/>
      </g>
      
      {/* Actor */}
      <g transform="translate(180, 30)">
        <text x="30" y="-10" textAnchor="middle" className="section-title">Acteur</text>
        <circle cx="30" cy="20" r="10" fill="none" stroke="#333" strokeWidth="2"/>
        <line x1="30" y1="30" x2="30" y2="50" stroke="#333" strokeWidth="2"/>
        <line x1="15" y1="38" x2="45" y2="38" stroke="#333" strokeWidth="2"/>
        <line x1="30" y1="50" x2="18" y2="65" stroke="#333" strokeWidth="2"/>
        <line x1="30" y1="50" x2="42" y2="65" stroke="#333" strokeWidth="2"/>
        <line x1="30" y1="70" x2="30" y2="100" stroke="#333" strokeWidth="1.5" strokeDasharray="8,4"/>
      </g>
      
      {/* Sync Message */}
      <g transform="translate(300, 30)">
        <text x="60" y="-10" textAnchor="middle" className="section-title">Message synchrone</text>
        <line x1="10" y1="40" x2="100" y2="40" stroke="#333" strokeWidth="1.5"/>
        <path d="M100,40 L90,35 L90,45 z" fill="#333"/>
        <text x="55" y="30" textAnchor="middle" className="message-label">méthode()</text>
      </g>
      
      {/* Return Message */}
      <g transform="translate(450, 30)">
        <text x="60" y="-10" textAnchor="middle" className="section-title">Message de retour</text>
        <line x1="10" y1="40" x2="100" y2="40" stroke="#333" strokeWidth="1.5" strokeDasharray="5,3"/>
        <path d="M100,40 L90,35 M100,40 L90,45" fill="none" stroke="#333" strokeWidth="1.5"/>
        <text x="55" y="30" textAnchor="middle" className="message-label">résultat</text>
      </g>
      
      {/* Async Message */}
      <g transform="translate(30, 160)">
        <text x="60" y="-10" textAnchor="middle" className="section-title">Message asynchrone</text>
        <line x1="10" y1="40" x2="100" y2="40" stroke="#333" strokeWidth="1.5"/>
        <path d="M100,40 L90,35 M100,40 L90,45" fill="none" stroke="#333" strokeWidth="1.5"/>
      </g>
      
      {/* Self Message */}
      <g transform="translate(180, 160)">
        <text x="40" y="-10" textAnchor="middle" className="section-title">Auto-message</text>
        <path d="M20,30 L60,30 L60,55 L30,55" fill="none" stroke="#333" strokeWidth="1.5"/>
        <path d="M30,55 L38,50 L38,60 z" fill="#333"/>
      </g>
      
      {/* Activation Box */}
      <g transform="translate(300, 160)">
        <text x="40" y="-10" textAnchor="middle" className="section-title">Activation</text>
        <line x1="40" y1="10" x2="40" y2="80" stroke="#333" strokeWidth="1.5" strokeDasharray="8,4"/>
        <rect x="32" y="25" width="16" height="40" fill="#fff" stroke="#333" strokeWidth="1.5"/>
      </g>
      
      {/* Fragments */}
      <g transform="translate(400, 160)">
        <text x="80" y="-10" textAnchor="middle" className="section-title">Fragments combinés</text>
        <rect x="10" y="10" width="140" height="80" fill="none" stroke="#333" strokeWidth="1.5"/>
        <rect x="10" y="10" width="40" height="18" fill="#f5f5f5" stroke="#333" strokeWidth="1"/>
        <text x="30" y="24" textAnchor="middle" className="fragment-type">alt</text>
        <line x1="10" y1="50" x2="150" y2="50" stroke="#333" strokeWidth="1" strokeDasharray="5,3"/>
        <text x="20" y="40" className="condition-text">[cond1]</text>
        <text x="20" y="70" className="condition-text">[sinon]</text>
      </g>
      
      {/* Fragment types */}
      <g transform="translate(30, 290)">
        <text x="0" y="0" className="section-title">Types de fragments:</text>
        <text x="0" y="25" className="fragment-type-list"><tspan fontWeight="bold">alt</tspan> - alternatives (if-else)</text>
        <text x="0" y="45" className="fragment-type-list"><tspan fontWeight="bold">opt</tspan> - optionnel (if)</text>
        <text x="0" y="65" className="fragment-type-list"><tspan fontWeight="bold">loop</tspan> - boucle (for/while)</text>
        <text x="200" y="25" className="fragment-type-list"><tspan fontWeight="bold">par</tspan> - parallèle</text>
        <text x="200" y="45" className="fragment-type-list"><tspan fontWeight="bold">ref</tspan> - référence</text>
        <text x="200" y="65" className="fragment-type-list"><tspan fontWeight="bold">break</tspan> - interruption</text>
      </g>
    </svg>
  </div>
);

export default { 
  ATMSequenceDiagram, 
  AuthSequenceDiagram, 
  AltSequenceDiagram,
  LoopSequenceDiagram,
  SequenceNotationDiagram 
};
