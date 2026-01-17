import { motion } from 'framer-motion';
import './Diagrams.css';

export default function ClassDiagram({ variant = 'overview' }) {
  if (variant === 'overview') {
    return <OverviewDiagram />;
  }
  if (variant === 'ecommerce') {
    return <EcommerceDiagram />;
  }
  if (variant === 'university') {
    return <UniversityDiagram />;
  }
  return <OverviewDiagram />;
}

function OverviewDiagram() {
  return (
    <motion.svg 
      viewBox="0 0 600 280" 
      className="uml-diagram class-diagram"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Class 1 - Personne */}
      <g className="class-box">
        <rect x="50" y="30" width="160" height="100" fill="var(--color-bg-tertiary)" stroke="var(--color-accent)" strokeWidth="2" rx="4"/>
        <rect x="50" y="30" width="160" height="30" fill="var(--color-accent-muted)" rx="4"/>
        <rect x="50" y="56" width="160" height="4" fill="var(--color-accent-muted)"/>
        <line x1="50" y1="60" x2="210" y2="60" stroke="var(--color-accent)" strokeWidth="1"/>
        <line x1="50" y1="95" x2="210" y2="95" stroke="var(--color-accent)" strokeWidth="1"/>
        <text x="130" y="50" textAnchor="middle" className="class-name">Personne</text>
        <text x="60" y="78" className="class-attr">- nom: String</text>
        <text x="60" y="92" className="class-attr">- age: Integer</text>
        <text x="60" y="115" className="class-method">+ getNom(): String</text>
      </g>
      
      {/* Class 2 - Voiture */}
      <g className="class-box">
        <rect x="350" y="30" width="180" height="110" fill="var(--color-bg-tertiary)" stroke="var(--color-info)" strokeWidth="2" rx="4"/>
        <rect x="350" y="30" width="180" height="30" fill="var(--color-info-muted)" rx="4"/>
        <rect x="350" y="56" width="180" height="4" fill="var(--color-info-muted)"/>
        <line x1="350" y1="60" x2="530" y2="60" stroke="var(--color-info)" strokeWidth="1"/>
        <line x1="350" y1="100" x2="530" y2="100" stroke="var(--color-info)" strokeWidth="1"/>
        <text x="440" y="50" textAnchor="middle" className="class-name">Voiture</text>
        <text x="360" y="78" className="class-attr">- marque: String</text>
        <text x="360" y="92" className="class-attr">- immatriculation: String</text>
        <text x="360" y="120" className="class-method">+ demarrer(): void</text>
      </g>
      
      {/* Association line */}
      <line x1="210" y1="80" x2="350" y2="80" stroke="var(--color-text-secondary)" strokeWidth="2"/>
      <text x="280" y="70" textAnchor="middle" className="relation-label">possède</text>
      <text x="220" y="95" className="multiplicity">1</text>
      <text x="340" y="95" className="multiplicity">0..*</text>
      
      {/* Class 3 - Moteur (Composition) */}
      <g className="class-box">
        <rect x="350" y="180" width="180" height="80" fill="var(--color-bg-tertiary)" stroke="var(--color-warning)" strokeWidth="2" rx="4"/>
        <rect x="350" y="180" width="180" height="30" fill="var(--color-warning-muted)" rx="4"/>
        <rect x="350" y="206" width="180" height="4" fill="var(--color-warning-muted)"/>
        <line x1="350" y1="210" x2="530" y2="210" stroke="var(--color-warning)" strokeWidth="1"/>
        <text x="440" y="200" textAnchor="middle" className="class-name">Moteur</text>
        <text x="360" y="228" className="class-attr">- puissance: Integer</text>
        <text x="360" y="248" className="class-method">+ allumer(): void</text>
      </g>
      
      {/* Composition line */}
      <line x1="440" y1="140" x2="440" y2="180" stroke="var(--color-text-secondary)" strokeWidth="2"/>
      <polygon points="440,140 433,152 447,152" fill="var(--color-text-secondary)"/>
      <text x="455" y="165" className="multiplicity">1</text>
    </motion.svg>
  );
}

function EcommerceDiagram() {
  return (
    <motion.svg 
      viewBox="0 0 700 350" 
      className="uml-diagram class-diagram"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Client Class */}
      <g className="class-box">
        <rect x="20" y="100" width="150" height="120" fill="var(--color-bg-tertiary)" stroke="var(--color-accent)" strokeWidth="2" rx="4"/>
        <rect x="20" y="100" width="150" height="28" fill="var(--color-accent-muted)" rx="4"/>
        <rect x="20" y="124" width="150" height="4" fill="var(--color-accent-muted)"/>
        <line x1="20" y1="128" x2="170" y2="128" stroke="var(--color-accent)" strokeWidth="1"/>
        <line x1="20" y1="175" x2="170" y2="175" stroke="var(--color-accent)" strokeWidth="1"/>
        <text x="95" y="118" textAnchor="middle" className="class-name">Client</text>
        <text x="28" y="145" className="class-attr">- id: Integer</text>
        <text x="28" y="160" className="class-attr">- nom: String</text>
        <text x="28" y="175" className="class-attr">- email: String</text>
        <text x="28" y="195" className="class-method">+ commander(): void</text>
        <text x="28" y="210" className="class-method">+ getCommandes()</text>
      </g>
      
      {/* Commande Class */}
      <g className="class-box">
        <rect x="250" y="80" width="160" height="140" fill="var(--color-bg-tertiary)" stroke="var(--color-info)" strokeWidth="2" rx="4"/>
        <rect x="250" y="80" width="160" height="28" fill="var(--color-info-muted)" rx="4"/>
        <rect x="250" y="104" width="160" height="4" fill="var(--color-info-muted)"/>
        <line x1="250" y1="108" x2="410" y2="108" stroke="var(--color-info)" strokeWidth="1"/>
        <line x1="250" y1="170" x2="410" y2="170" stroke="var(--color-info)" strokeWidth="1"/>
        <text x="330" y="98" textAnchor="middle" className="class-name">Commande</text>
        <text x="258" y="125" className="class-attr">- numero: String</text>
        <text x="258" y="140" className="class-attr">- date: Date</text>
        <text x="258" y="155" className="class-attr">- statut: String</text>
        <text x="258" y="170" className="class-attr">/ total: Double</text>
        <text x="258" y="190" className="class-method">+ valider(): void</text>
        <text x="258" y="205" className="class-method">+ calculerTotal(): Double</text>
      </g>
      
      {/* LigneCommande Class */}
      <g className="class-box">
        <rect x="250" y="260" width="160" height="80" fill="var(--color-bg-tertiary)" stroke="var(--color-warning)" strokeWidth="2" rx="4"/>
        <rect x="250" y="260" width="160" height="28" fill="var(--color-warning-muted)" rx="4"/>
        <rect x="250" y="284" width="160" height="4" fill="var(--color-warning-muted)"/>
        <line x1="250" y1="288" x2="410" y2="288" stroke="var(--color-warning)" strokeWidth="1"/>
        <line x1="250" y1="308" x2="410" y2="308" stroke="var(--color-warning)" strokeWidth="1"/>
        <text x="330" y="278" textAnchor="middle" className="class-name">LigneCommande</text>
        <text x="258" y="303" className="class-attr">- quantite: Integer</text>
        <text x="258" y="328" className="class-method">+ getSousTotal(): Double</text>
      </g>
      
      {/* Produit Class */}
      <g className="class-box">
        <rect x="500" y="240" width="160" height="100" fill="var(--color-bg-tertiary)" stroke="var(--color-success)" strokeWidth="2" rx="4"/>
        <rect x="500" y="240" width="160" height="28" fill="var(--color-success-muted)" rx="4"/>
        <rect x="500" y="264" width="160" height="4" fill="var(--color-success-muted)"/>
        <line x1="500" y1="268" x2="660" y2="268" stroke="var(--color-success)" strokeWidth="1"/>
        <line x1="500" y1="305" x2="660" y2="305" stroke="var(--color-success)" strokeWidth="1"/>
        <text x="580" y="258" textAnchor="middle" className="class-name">Produit</text>
        <text x="508" y="285" className="class-attr">- nom: String</text>
        <text x="508" y="300" className="class-attr">- prix: Double</text>
        <text x="508" y="325" className="class-method">+ getPrix(): Double</text>
      </g>
      
      {/* Client -> Commande (Association) */}
      <line x1="170" y1="160" x2="250" y2="150" stroke="var(--color-text-secondary)" strokeWidth="2"/>
      <text x="200" y="140" className="relation-label">passe</text>
      <text x="175" y="170" className="multiplicity">1</text>
      <text x="235" y="145" className="multiplicity">0..*</text>
      
      {/* Commande -> LigneCommande (Composition) */}
      <line x1="330" y1="220" x2="330" y2="260" stroke="var(--color-text-secondary)" strokeWidth="2"/>
      <polygon points="330,220 323,232 337,232" fill="var(--color-text-secondary)"/>
      <text x="345" y="245" className="multiplicity">1..*</text>
      
      {/* LigneCommande -> Produit (Association) */}
      <line x1="410" y1="300" x2="500" y2="290" stroke="var(--color-text-secondary)" strokeWidth="2"/>
      <text x="450" y="280" className="relation-label">référence</text>
      <text x="420" y="310" className="multiplicity">*</text>
      <text x="485" y="285" className="multiplicity">1</text>
    </motion.svg>
  );
}

function UniversityDiagram() {
  return (
    <motion.svg 
      viewBox="0 0 700 400" 
      className="uml-diagram class-diagram"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Personne (Abstract) */}
      <g className="class-box">
        <rect x="250" y="20" width="150" height="90" fill="var(--color-bg-tertiary)" stroke="var(--color-accent)" strokeWidth="2" rx="4"/>
        <rect x="250" y="20" width="150" height="28" fill="var(--color-accent-muted)" rx="4"/>
        <rect x="250" y="44" width="150" height="4" fill="var(--color-accent-muted)"/>
        <line x1="250" y1="48" x2="400" y2="48" stroke="var(--color-accent)" strokeWidth="1"/>
        <line x1="250" y1="75" x2="400" y2="75" stroke="var(--color-accent)" strokeWidth="1"/>
        <text x="325" y="38" textAnchor="middle" className="class-name italic">Personne</text>
        <text x="258" y="65" className="class-attr"># nom: String</text>
        <text x="258" y="78" className="class-attr"># email: String</text>
        <text x="258" y="98" className="class-method">+ getInfo(): String</text>
      </g>
      
      {/* Inheritance line */}
      <line x1="325" y1="110" x2="325" y2="130" stroke="var(--color-text-secondary)" strokeWidth="2"/>
      <line x1="150" y1="130" x2="500" y2="130" stroke="var(--color-text-secondary)" strokeWidth="2"/>
      <polygon points="325,110 318,122 332,122" fill="none" stroke="var(--color-text-secondary)" strokeWidth="2"/>
      
      <line x1="150" y1="130" x2="150" y2="150" stroke="var(--color-text-secondary)" strokeWidth="2"/>
      <line x1="500" y1="130" x2="500" y2="150" stroke="var(--color-text-secondary)" strokeWidth="2"/>
      
      {/* Etudiant */}
      <g className="class-box">
        <rect x="60" y="150" width="160" height="100" fill="var(--color-bg-tertiary)" stroke="var(--color-info)" strokeWidth="2" rx="4"/>
        <rect x="60" y="150" width="160" height="28" fill="var(--color-info-muted)" rx="4"/>
        <rect x="60" y="174" width="160" height="4" fill="var(--color-info-muted)"/>
        <line x1="60" y1="178" x2="220" y2="178" stroke="var(--color-info)" strokeWidth="1"/>
        <line x1="60" y1="215" x2="220" y2="215" stroke="var(--color-info)" strokeWidth="1"/>
        <text x="140" y="168" textAnchor="middle" className="class-name">Etudiant</text>
        <text x="68" y="195" className="class-attr">- numEtudiant: String</text>
        <text x="68" y="210" className="class-attr">- niveau: Integer</text>
        <text x="68" y="235" className="class-method">+ sInscrire(c: Cours)</text>
      </g>
      
      {/* Professeur */}
      <g className="class-box">
        <rect x="420" y="150" width="160" height="100" fill="var(--color-bg-tertiary)" stroke="var(--color-warning)" strokeWidth="2" rx="4"/>
        <rect x="420" y="150" width="160" height="28" fill="var(--color-warning-muted)" rx="4"/>
        <rect x="420" y="174" width="160" height="4" fill="var(--color-warning-muted)"/>
        <line x1="420" y1="178" x2="580" y2="178" stroke="var(--color-warning)" strokeWidth="1"/>
        <line x1="420" y1="215" x2="580" y2="215" stroke="var(--color-warning)" strokeWidth="1"/>
        <text x="500" y="168" textAnchor="middle" className="class-name">Professeur</text>
        <text x="428" y="195" className="class-attr">- specialite: String</text>
        <text x="428" y="210" className="class-attr">- grade: String</text>
        <text x="428" y="235" className="class-method">+ enseigner(c: Cours)</text>
      </g>
      
      {/* Cours */}
      <g className="class-box">
        <rect x="250" y="300" width="150" height="90" fill="var(--color-bg-tertiary)" stroke="var(--color-success)" strokeWidth="2" rx="4"/>
        <rect x="250" y="300" width="150" height="28" fill="var(--color-success-muted)" rx="4"/>
        <rect x="250" y="324" width="150" height="4" fill="var(--color-success-muted)"/>
        <line x1="250" y1="328" x2="400" y2="328" stroke="var(--color-success)" strokeWidth="1"/>
        <line x1="250" y1="355" x2="400" y2="355" stroke="var(--color-success)" strokeWidth="1"/>
        <text x="325" y="318" textAnchor="middle" className="class-name">Cours</text>
        <text x="258" y="345" className="class-attr">- code: String</text>
        <text x="258" y="358" className="class-attr">- intitule: String</text>
        <text x="258" y="378" className="class-method">+ getEtudiants(): List</text>
      </g>
      
      {/* Etudiant -> Cours */}
      <line x1="180" y1="250" x2="280" y2="300" stroke="var(--color-text-secondary)" strokeWidth="2"/>
      <text x="200" y="275" className="relation-label">s'inscrit</text>
      <text x="175" y="265" className="multiplicity">*</text>
      <text x="270" y="295" className="multiplicity">*</text>
      
      {/* Professeur -> Cours */}
      <line x1="460" y1="250" x2="370" y2="300" stroke="var(--color-text-secondary)" strokeWidth="2"/>
      <text x="420" y="275" className="relation-label">enseigne</text>
      <text x="465" y="265" className="multiplicity">1</text>
      <text x="380" y="295" className="multiplicity">1..*</text>
    </motion.svg>
  );
}
