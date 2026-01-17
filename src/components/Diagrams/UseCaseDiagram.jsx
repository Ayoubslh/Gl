import { motion } from 'framer-motion';
import './Diagrams.css';

export default function UseCaseDiagram({ variant = 'simple' }) {
  if (variant === 'simple') {
    return <SimpleDiagram />;
  }
  if (variant === 'banking') {
    return <BankingDiagram />;
  }
  if (variant === 'library') {
    return <LibraryDiagram />;
  }
  return <SimpleDiagram />;
}

function SimpleDiagram() {
  return (
    <motion.svg 
      viewBox="0 0 600 350" 
      className="uml-diagram"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* System boundary */}
      <rect 
        x="180" y="30" 
        width="320" height="290" 
        fill="none" 
        stroke="var(--color-border)" 
        strokeWidth="2" 
        strokeDasharray="8,4"
        rx="8"
      />
      <text x="340" y="55" textAnchor="middle" className="system-label">Système de Réservation</text>
      
      {/* Actor 1 - Client */}
      <g className="actor">
        <circle cx="70" cy="100" r="18" fill="none" stroke="var(--color-accent)" strokeWidth="2"/>
        <line x1="70" y1="118" x2="70" y2="170" stroke="var(--color-accent)" strokeWidth="2"/>
        <line x1="40" y1="140" x2="100" y2="140" stroke="var(--color-accent)" strokeWidth="2"/>
        <line x1="70" y1="170" x2="45" y2="210" stroke="var(--color-accent)" strokeWidth="2"/>
        <line x1="70" y1="170" x2="95" y2="210" stroke="var(--color-accent)" strokeWidth="2"/>
        <text x="70" y="235" textAnchor="middle" className="actor-label">Client</text>
      </g>
      
      {/* Actor 2 - Admin */}
      <g className="actor">
        <circle cx="70" cy="280" r="18" fill="none" stroke="var(--color-text-secondary)" strokeWidth="2"/>
        <line x1="70" y1="298" x2="70" y2="340" stroke="var(--color-text-secondary)" strokeWidth="2"/>
        <line x1="40" y1="315" x2="100" y2="315" stroke="var(--color-text-secondary)" strokeWidth="2"/>
        <line x1="70" y1="340" x2="45" y2="370" stroke="var(--color-text-secondary)" strokeWidth="2"/>
        <line x1="70" y1="340" x2="95" y2="370" stroke="var(--color-text-secondary)" strokeWidth="2"/>
        <text x="70" y="395" textAnchor="middle" className="actor-label">Admin</text>
      </g>
      
      {/* Use Cases */}
      <ellipse cx="340" cy="100" rx="90" ry="35" fill="var(--color-accent-muted)" stroke="var(--color-accent)" strokeWidth="2"/>
      <text x="340" y="105" textAnchor="middle" className="usecase-label">Réserver un vol</text>
      
      <ellipse cx="340" cy="190" rx="90" ry="35" fill="var(--color-bg-tertiary)" stroke="var(--color-border)" strokeWidth="2"/>
      <text x="340" y="195" textAnchor="middle" className="usecase-label">Consulter horaires</text>
      
      <ellipse cx="340" cy="280" rx="90" ry="35" fill="var(--color-bg-tertiary)" stroke="var(--color-border)" strokeWidth="2"/>
      <text x="340" y="285" textAnchor="middle" className="usecase-label">Gérer réservations</text>
      
      {/* Connections */}
      <line x1="100" y1="140" x2="250" y2="100" stroke="var(--color-accent)" strokeWidth="1.5"/>
      <line x1="100" y1="160" x2="250" y2="190" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
      <line x1="100" y1="300" x2="250" y2="280" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
      
      {/* Secondary Actor - System */}
      <g className="actor system-actor">
        <rect x="520" y="160" width="60" height="50" fill="var(--color-bg-tertiary)" stroke="var(--color-info)" strokeWidth="2" rx="4"/>
        <text x="550" y="180" textAnchor="middle" className="actor-label small">&lt;&lt;system&gt;&gt;</text>
        <text x="550" y="198" textAnchor="middle" className="actor-label small">Paiement</text>
      </g>
      <line x1="430" y1="100" x2="520" y2="180" stroke="var(--color-info)" strokeWidth="1.5" strokeDasharray="5,3"/>
    </motion.svg>
  );
}

function BankingDiagram() {
  return (
    <motion.svg 
      viewBox="0 0 650 400" 
      className="uml-diagram"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* System boundary */}
      <rect x="150" y="20" width="380" height="360" fill="none" stroke="var(--color-border)" strokeWidth="2" strokeDasharray="8,4" rx="8"/>
      <text x="340" y="45" textAnchor="middle" className="system-label">Guichet Automatique Bancaire</text>
      
      {/* Client Actor */}
      <g className="actor">
        <circle cx="60" cy="150" r="16" fill="none" stroke="var(--color-accent)" strokeWidth="2"/>
        <line x1="60" y1="166" x2="60" y2="210" stroke="var(--color-accent)" strokeWidth="2"/>
        <line x1="35" y1="185" x2="85" y2="185" stroke="var(--color-accent)" strokeWidth="2"/>
        <line x1="60" y1="210" x2="40" y2="245" stroke="var(--color-accent)" strokeWidth="2"/>
        <line x1="60" y1="210" x2="80" y2="245" stroke="var(--color-accent)" strokeWidth="2"/>
        <text x="60" y="265" textAnchor="middle" className="actor-label">Client</text>
      </g>
      
      {/* Technician Actor */}
      <g className="actor">
        <circle cx="60" cy="320" r="16" fill="none" stroke="var(--color-text-secondary)" strokeWidth="2"/>
        <line x1="60" y1="336" x2="60" y2="370" stroke="var(--color-text-secondary)" strokeWidth="2"/>
        <line x1="35" y1="350" x2="85" y2="350" stroke="var(--color-text-secondary)" strokeWidth="2"/>
        <line x1="60" y1="370" x2="40" y2="395" stroke="var(--color-text-secondary)" strokeWidth="2"/>
        <line x1="60" y1="370" x2="80" y2="395" stroke="var(--color-text-secondary)" strokeWidth="2"/>
        <text x="60" y="415" textAnchor="middle" className="actor-label">Technicien</text>
      </g>
      
      {/* Use Cases */}
      <ellipse cx="340" cy="90" rx="80" ry="30" fill="var(--color-accent-muted)" stroke="var(--color-accent)" strokeWidth="2"/>
      <text x="340" y="95" textAnchor="middle" className="usecase-label">Retirer argent</text>
      
      <ellipse cx="340" cy="160" rx="80" ry="30" fill="var(--color-bg-tertiary)" stroke="var(--color-border)" strokeWidth="2"/>
      <text x="340" y="165" textAnchor="middle" className="usecase-label">Consulter solde</text>
      
      <ellipse cx="340" cy="230" rx="80" ry="30" fill="var(--color-bg-tertiary)" stroke="var(--color-border)" strokeWidth="2"/>
      <text x="340" y="235" textAnchor="middle" className="usecase-label">Déposer argent</text>
      
      <ellipse cx="340" cy="300" rx="80" ry="30" fill="var(--color-success-muted)" stroke="var(--color-success)" strokeWidth="2"/>
      <text x="340" y="305" textAnchor="middle" className="usecase-label">S'authentifier</text>
      
      <ellipse cx="340" cy="360" rx="80" ry="30" fill="var(--color-bg-tertiary)" stroke="var(--color-border)" strokeWidth="2"/>
      <text x="340" y="365" textAnchor="middle" className="usecase-label">Maintenance</text>
      
      {/* Connections from Client */}
      <line x1="85" y1="160" x2="260" y2="90" stroke="var(--color-accent)" strokeWidth="1.5"/>
      <line x1="85" y1="180" x2="260" y2="160" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
      <line x1="85" y1="200" x2="260" y2="230" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
      
      {/* Connection from Technician */}
      <line x1="85" y1="340" x2="260" y2="360" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
      
      {/* Include relations */}
      <line x1="340" y1="120" x2="340" y2="270" stroke="var(--color-success)" strokeWidth="1.5" strokeDasharray="5,3"/>
      <polygon points="340,270 335,260 345,260" fill="var(--color-success)"/>
      <text x="370" y="200" className="relation-label">&lt;&lt;include&gt;&gt;</text>
      
      {/* Bank System */}
      <g className="actor system-actor">
        <rect x="560" y="120" width="70" height="50" fill="var(--color-bg-tertiary)" stroke="var(--color-info)" strokeWidth="2" rx="4"/>
        <text x="595" y="142" textAnchor="middle" className="actor-label small">&lt;&lt;system&gt;&gt;</text>
        <text x="595" y="158" textAnchor="middle" className="actor-label small">Banque</text>
      </g>
      <line x1="420" y1="90" x2="560" y2="140" stroke="var(--color-info)" strokeWidth="1.5" strokeDasharray="5,3"/>
    </motion.svg>
  );
}

function LibraryDiagram() {
  return (
    <motion.svg 
      viewBox="0 0 650 380" 
      className="uml-diagram"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* System boundary */}
      <rect x="140" y="20" width="380" height="340" fill="none" stroke="var(--color-border)" strokeWidth="2" strokeDasharray="8,4" rx="8"/>
      <text x="330" y="45" textAnchor="middle" className="system-label">Système de Bibliothèque</text>
      
      {/* Subscriber Actor */}
      <g className="actor">
        <circle cx="55" cy="150" r="16" fill="none" stroke="var(--color-accent)" strokeWidth="2"/>
        <line x1="55" y1="166" x2="55" y2="205" stroke="var(--color-accent)" strokeWidth="2"/>
        <line x1="32" y1="182" x2="78" y2="182" stroke="var(--color-accent)" strokeWidth="2"/>
        <line x1="55" y1="205" x2="38" y2="235" stroke="var(--color-accent)" strokeWidth="2"/>
        <line x1="55" y1="205" x2="72" y2="235" stroke="var(--color-accent)" strokeWidth="2"/>
        <text x="55" y="255" textAnchor="middle" className="actor-label">Abonné</text>
      </g>
      
      {/* Librarian Actor */}
      <g className="actor">
        <circle cx="55" cy="310" r="16" fill="none" stroke="var(--color-warning)" strokeWidth="2"/>
        <line x1="55" y1="326" x2="55" y2="360" stroke="var(--color-warning)" strokeWidth="2"/>
        <line x1="32" y1="340" x2="78" y2="340" stroke="var(--color-warning)" strokeWidth="2"/>
        <line x1="55" y1="360" x2="38" y2="385" stroke="var(--color-warning)" strokeWidth="2"/>
        <line x1="55" y1="360" x2="72" y2="385" stroke="var(--color-warning)" strokeWidth="2"/>
        <text x="55" y="405" textAnchor="middle" className="actor-label">Bibliothécaire</text>
      </g>
      
      {/* Use Cases */}
      <ellipse cx="330" cy="80" rx="75" ry="28" fill="var(--color-accent-muted)" stroke="var(--color-accent)" strokeWidth="2"/>
      <text x="330" y="85" textAnchor="middle" className="usecase-label">Emprunter livre</text>
      
      <ellipse cx="330" cy="145" rx="75" ry="28" fill="var(--color-bg-tertiary)" stroke="var(--color-border)" strokeWidth="2"/>
      <text x="330" y="150" textAnchor="middle" className="usecase-label">Rendre livre</text>
      
      <ellipse cx="330" cy="210" rx="75" ry="28" fill="var(--color-bg-tertiary)" stroke="var(--color-border)" strokeWidth="2"/>
      <text x="330" y="215" textAnchor="middle" className="usecase-label">Rechercher livre</text>
      
      <ellipse cx="330" cy="275" rx="75" ry="28" fill="var(--color-bg-tertiary)" stroke="var(--color-border)" strokeWidth="2"/>
      <text x="330" y="280" textAnchor="middle" className="usecase-label">Réserver livre</text>
      
      <ellipse cx="330" cy="340" rx="75" ry="28" fill="var(--color-warning-muted)" stroke="var(--color-warning)" strokeWidth="2"/>
      <text x="330" y="345" textAnchor="middle" className="usecase-label">Gérer abonnés</text>
      
      {/* Connections */}
      <line x1="78" y1="155" x2="255" y2="80" stroke="var(--color-accent)" strokeWidth="1.5"/>
      <line x1="78" y1="170" x2="255" y2="145" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
      <line x1="78" y1="185" x2="255" y2="210" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
      <line x1="78" y1="200" x2="255" y2="275" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
      <line x1="78" y1="320" x2="255" y2="340" stroke="var(--color-warning)" strokeWidth="1.5"/>
      
      {/* Reminder System */}
      <g className="actor system-actor">
        <rect x="545" y="200" width="80" height="45" fill="var(--color-bg-tertiary)" stroke="var(--color-info)" strokeWidth="2" rx="4"/>
        <text x="585" y="218" textAnchor="middle" className="actor-label small">&lt;&lt;system&gt;&gt;</text>
        <text x="585" y="234" textAnchor="middle" className="actor-label small">Rappel</text>
      </g>
      <line x1="405" y1="145" x2="545" y2="215" stroke="var(--color-info)" strokeWidth="1.5" strokeDasharray="5,3"/>
    </motion.svg>
  );
}
