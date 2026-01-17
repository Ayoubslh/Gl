import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  BookOpen, 
  Box,
  Layers,
  Link as LinkIcon,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Lightbulb,
  GitBranch,
  Database,
  Shield
} from 'lucide-react';
import ClassDiagram from '../../components/Diagrams/ClassDiagram';
import '../UseCase/ChapterPage.css';

const sections = [
  { id: 'intro', title: 'Introduction', icon: BookOpen },
  { id: 'classes', title: 'Les Classes', icon: Box },
  { id: 'attributes', title: 'Attributs & Méthodes', icon: Database },
  { id: 'visibility', title: 'Visibilité', icon: Shield },
  { id: 'relations', title: 'Relations', icon: LinkIcon },
  { id: 'objects', title: 'Diagramme d\'Objets', icon: Layers },
  { id: 'examples', title: 'Exemples', icon: GitBranch },
];

export default function ClassDiagramChapter() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div className="chapter-page">
      {/* Chapter Navigation */}
      <nav className="chapter-nav">
        <div className="chapter-nav-header">
          <span className="chapter-number">05</span>
          <div>
            <h2 className="chapter-nav-title">Diagramme de Classes</h2>
            <p className="chapter-nav-subtitle">Class & Object Diagram</p>
          </div>
        </div>
        
        <ul className="chapter-nav-list">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                className={`chapter-nav-item ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                <section.icon size={16} />
                <span>{section.title}</span>
                <ChevronRight size={14} className="nav-chevron" />
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Chapter Content */}
      <main className="chapter-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeSection === 'intro' && (
              <IntroSection onNext={() => setActiveSection('classes')} />
            )}
            {activeSection === 'classes' && (
              <ClassesSection onNext={() => setActiveSection('attributes')} />
            )}
            {activeSection === 'attributes' && (
              <AttributesSection onNext={() => setActiveSection('visibility')} />
            )}
            {activeSection === 'visibility' && (
              <VisibilitySection onNext={() => setActiveSection('relations')} />
            )}
            {activeSection === 'relations' && (
              <RelationsSection onNext={() => setActiveSection('objects')} />
            )}
            {activeSection === 'objects' && (
              <ObjectsSection onNext={() => setActiveSection('examples')} />
            )}
            {activeSection === 'examples' && (
              <ExamplesSection />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function IntroSection({ onNext }) {
  return (
    <article className="content-section">
      <header className="section-header">
        <div className="section-badge">Introduction</div>
        <h1 className="section-title">Diagramme de Classes & d'Objets</h1>
        <p className="section-lead">
          Le diagramme de classes est le pilier central de la modélisation orientée objet en UML.
          Il décrit la structure statique du système.
        </p>
      </header>

      <div className="content-card highlight">
        <div className="highlight-icon">
          <Lightbulb size={24} />
        </div>
        <div className="highlight-content">
          <h4>Objectif Principal</h4>
          <p>
            Représenter la <strong>structure statique</strong> d'un système en montrant 
            les classes, leurs attributs, méthodes et les relations entre elles.
          </p>
        </div>
      </div>

      <div className="content-grid">
        <div className="content-card">
          <h3>📌 Diagramme de Classes</h3>
          <ul className="styled-list">
            <li>Représente les <strong>types</strong> et structures</li>
            <li>Définit les attributs et opérations</li>
            <li>Montre les relations et héritages</li>
            <li>Niveau d'abstraction : <strong>conceptuel</strong></li>
          </ul>
        </div>

        <div className="content-card">
          <h3>📌 Diagramme d'Objets</h3>
          <ul className="styled-list">
            <li>Représente les <strong>instances</strong> à un moment donné</li>
            <li>Montre les valeurs concrètes des attributs</li>
            <li>Illustre un scénario particulier</li>
            <li>Niveau d'abstraction : <strong>instance</strong></li>
          </ul>
        </div>
      </div>

      <div className="diagram-container">
        <h3>Vue d'ensemble d'un Diagramme de Classes</h3>
        <ClassDiagram variant="overview" />
        <p className="diagram-caption">
          Un diagramme de classes montre les classes avec leurs attributs et méthodes,
          ainsi que les relations qui les unissent.
        </p>
      </div>

      <div className="content-card info">
        <h4>🎯 Utilisations du Diagramme de Classes</h4>
        <div className="key-elements">
          <div className="key-element">
            <span className="element-icon">📝</span>
            <div>
              <strong>Phase d'analyse</strong>
              <p>Modéliser les concepts du domaine métier</p>
            </div>
          </div>
          <div className="key-element">
            <span className="element-icon">🔧</span>
            <div>
              <strong>Phase de conception</strong>
              <p>Définir l'architecture logicielle</p>
            </div>
          </div>
          <div className="key-element">
            <span className="element-icon">💻</span>
            <div>
              <strong>Implémentation</strong>
              <p>Générer le code source (squelettes)</p>
            </div>
          </div>
          <div className="key-element">
            <span className="element-icon">📖</span>
            <div>
              <strong>Documentation</strong>
              <p>Documenter la structure du système</p>
            </div>
          </div>
        </div>
      </div>

      <button className="next-section-btn" onClick={onNext}>
        <span>Continuer vers Les Classes</span>
        <ArrowRight size={18} />
      </button>
    </article>
  );
}

function ClassesSection({ onNext }) {
  return (
    <article className="content-section">
      <header className="section-header">
        <div className="section-badge">Classes</div>
        <h1 className="section-title">Les Classes</h1>
        <p className="section-lead">
          Une classe est un modèle (template) qui définit la structure et le comportement
          d'un ensemble d'objets similaires.
        </p>
      </header>

      <div className="definition-box">
        <h3>📖 Définition Formelle</h3>
        <blockquote>
          Une <strong>classe</strong> est la description d'un ensemble d'objets partageant 
          les mêmes attributs, opérations, relations et sémantique. Elle représente un 
          concept abstrait du domaine modélisé.
        </blockquote>
      </div>

      <div className="content-card">
        <h3>📐 Représentation Graphique d'une Classe</h3>
        <div className="class-visual-demo">
          <svg viewBox="0 0 280 200" width="280" height="200">
            {/* Class Box */}
            <rect x="40" y="20" width="200" height="160" fill="var(--color-bg-tertiary)" stroke="var(--color-accent)" strokeWidth="2" rx="4"/>
            
            {/* Name Compartment */}
            <rect x="40" y="20" width="200" height="40" fill="var(--color-accent-muted)" rx="4"/>
            <rect x="40" y="56" width="200" height="4" fill="var(--color-accent-muted)"/>
            <text x="140" y="47" textAnchor="middle" fill="var(--color-text-primary)" fontWeight="600" fontSize="14">NomClasse</text>
            
            {/* Separator lines */}
            <line x1="40" y1="60" x2="240" y2="60" stroke="var(--color-accent)" strokeWidth="1"/>
            <line x1="40" y1="120" x2="240" y2="120" stroke="var(--color-accent)" strokeWidth="1"/>
            
            {/* Attributes */}
            <text x="50" y="80" fill="var(--color-text-secondary)" fontSize="12">- attribut1: Type</text>
            <text x="50" y="98" fill="var(--color-text-secondary)" fontSize="12">- attribut2: Type</text>
            
            {/* Methods */}
            <text x="50" y="140" fill="var(--color-text-secondary)" fontSize="12">+ methode1(): Type</text>
            <text x="50" y="158" fill="var(--color-text-secondary)" fontSize="12">+ methode2(param): void</text>
            
            {/* Labels */}
            <text x="260" y="45" fill="var(--color-accent)" fontSize="10">← Nom</text>
            <text x="260" y="90" fill="var(--color-text-muted)" fontSize="10">← Attributs</text>
            <text x="260" y="150" fill="var(--color-text-muted)" fontSize="10">← Méthodes</text>
          </svg>
        </div>
        <p className="diagram-caption">
          Une classe est représentée par un rectangle divisé en 3 compartiments:
          nom, attributs et méthodes.
        </p>
      </div>

      <div className="content-card">
        <h3>🏷️ Types de Classes</h3>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Notation</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Classe concrète</strong></td>
              <td>NomClasse</td>
              <td>Peut être instanciée directement</td>
            </tr>
            <tr>
              <td><strong>Classe abstraite</strong></td>
              <td><em>NomClasse</em> (italique)</td>
              <td>Ne peut pas être instanciée, sert de modèle</td>
            </tr>
            <tr>
              <td><strong>Interface</strong></td>
              <td>&lt;&lt;interface&gt;&gt;</td>
              <td>Définit un contrat sans implémentation</td>
            </tr>
            <tr>
              <td><strong>Énumération</strong></td>
              <td>&lt;&lt;enumeration&gt;&gt;</td>
              <td>Ensemble de valeurs constantes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-grid">
        <div className="content-card">
          <h3>✅ Bons Noms de Classes</h3>
          <ul className="example-list good">
            <li>Client</li>
            <li>CompteBancaire</li>
            <li>CommandeAchat</li>
            <li>GestionnaireStock</li>
          </ul>
        </div>

        <div className="content-card">
          <h3>❌ Mauvais Noms de Classes</h3>
          <ul className="example-list bad">
            <li>Données</li>
            <li>Info</li>
            <li>TraiterCommande</li>
            <li>client (minuscule)</li>
          </ul>
        </div>
      </div>

      <button className="next-section-btn" onClick={onNext}>
        <span>Continuer vers Attributs & Méthodes</span>
        <ArrowRight size={18} />
      </button>
    </article>
  );
}

function AttributesSection({ onNext }) {
  return (
    <article className="content-section">
      <header className="section-header">
        <div className="section-badge">Attributs & Méthodes</div>
        <h1 className="section-title">Attributs et Méthodes</h1>
        <p className="section-lead">
          Les attributs définissent l'état d'un objet, les méthodes définissent son comportement.
        </p>
      </header>

      <div className="content-card">
        <h3>📊 Syntaxe des Attributs</h3>
        <div className="syntax-box">
          <code className="syntax-code">
            visibilité nom : type [multiplicité] = valeurInitiale {'{'} propriétés {'}'}
          </code>
        </div>
        
        <table className="styled-table">
          <thead>
            <tr>
              <th>Élément</th>
              <th>Exemple</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>visibilité</strong></td>
              <td>+, -, #, ~</td>
              <td>Niveau d'accès (public, privé, protégé, package)</td>
            </tr>
            <tr>
              <td><strong>nom</strong></td>
              <td>solde</td>
              <td>Identifiant de l'attribut (camelCase)</td>
            </tr>
            <tr>
              <td><strong>type</strong></td>
              <td>Double, String</td>
              <td>Type de données de l'attribut</td>
            </tr>
            <tr>
              <td><strong>multiplicité</strong></td>
              <td>[0..1], [*], [1..*]</td>
              <td>Nombre d'occurrences (optionnel)</td>
            </tr>
            <tr>
              <td><strong>valeur initiale</strong></td>
              <td>= 0.0</td>
              <td>Valeur par défaut (optionnel)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-card">
        <h3>🔧 Syntaxe des Méthodes (Opérations)</h3>
        <div className="syntax-box">
          <code className="syntax-code">
            visibilité nom (listeParamètres) : typeRetour {'{'} propriétés {'}'}
          </code>
        </div>
        
        <div className="method-examples">
          <div className="method-example">
            <code>+ deposer(montant: Double): void</code>
            <span>Méthode publique sans retour</span>
          </div>
          <div className="method-example">
            <code>+ getSolde(): Double</code>
            <span>Accesseur retournant un Double</span>
          </div>
          <div className="method-example">
            <code>- calculerInteret(): Double</code>
            <span>Méthode privée avec retour</span>
          </div>
          <div className="method-example">
            <code># verifierSolde(montant: Double): Boolean</code>
            <span>Méthode protégée avec paramètre</span>
          </div>
        </div>
      </div>

      <div className="content-card info">
        <h3>📝 Attributs Dérivés</h3>
        <p>
          Un attribut dérivé est calculé à partir d'autres attributs. Il est noté avec un <strong>/</strong> devant le nom.
        </p>
        <div className="method-examples">
          <div className="method-example">
            <code>/ age: Integer</code>
            <span>Calculé à partir de dateNaissance</span>
          </div>
          <div className="method-example">
            <code>/ montantTTC: Double</code>
            <span>Calculé: montantHT × (1 + tauxTVA)</span>
          </div>
        </div>
      </div>

      <div className="content-card">
        <h3>📌 Attributs et Méthodes de Classe (static)</h3>
        <p>
          Les membres de classe (statiques) sont <strong>soulignés</strong> dans le diagramme.
          Ils appartiennent à la classe elle-même, pas aux instances.
        </p>
        <div className="static-example">
          <svg viewBox="0 0 220 100" width="220" height="100">
            <rect x="10" y="10" width="200" height="80" fill="var(--color-bg-tertiary)" stroke="var(--color-accent)" strokeWidth="2" rx="4"/>
            <line x1="10" y1="35" x2="210" y2="35" stroke="var(--color-accent)" strokeWidth="1"/>
            <line x1="10" y1="60" x2="210" y2="60" stroke="var(--color-accent)" strokeWidth="1"/>
            
            <text x="110" y="27" textAnchor="middle" fill="var(--color-text-primary)" fontWeight="600" fontSize="12">Compteur</text>
            <text x="20" y="52" fill="var(--color-text-secondary)" fontSize="11" textDecoration="underline">- compteur: Integer = 0</text>
            <text x="20" y="77" fill="var(--color-text-secondary)" fontSize="11" textDecoration="underline">+ getCompteur(): Integer</text>
          </svg>
        </div>
      </div>

      <button className="next-section-btn" onClick={onNext}>
        <span>Continuer vers Visibilité</span>
        <ArrowRight size={18} />
      </button>
    </article>
  );
}

function VisibilitySection({ onNext }) {
  return (
    <article className="content-section">
      <header className="section-header">
        <div className="section-badge">Visibilité</div>
        <h1 className="section-title">Niveaux de Visibilité</h1>
        <p className="section-lead">
          La visibilité contrôle l'accès aux membres d'une classe depuis d'autres classes.
        </p>
      </header>

      <div className="visibility-grid">
        <div className="visibility-card public">
          <div className="visibility-symbol">+</div>
          <h3>Public</h3>
          <p>Accessible depuis <strong>n'importe où</strong></p>
          <div className="visibility-example">
            <code>+ getNom(): String</code>
          </div>
        </div>

        <div className="visibility-card private">
          <div className="visibility-symbol">−</div>
          <h3>Privé</h3>
          <p>Accessible uniquement depuis <strong>la classe</strong></p>
          <div className="visibility-example">
            <code>- motDePasse: String</code>
          </div>
        </div>

        <div className="visibility-card protected">
          <div className="visibility-symbol">#</div>
          <h3>Protégé</h3>
          <p>Accessible depuis la classe et ses <strong>sous-classes</strong></p>
          <div className="visibility-example">
            <code># calculer(): Double</code>
          </div>
        </div>

        <div className="visibility-card package">
          <div className="visibility-symbol">~</div>
          <h3>Package</h3>
          <p>Accessible depuis le <strong>même package</strong></p>
          <div className="visibility-example">
            <code>~ helper: Util</code>
          </div>
        </div>
      </div>

      <div className="content-card">
        <h3>🔐 Principe d'Encapsulation</h3>
        <div className="checklist">
          <div className="check-item success">
            <CheckCircle2 size={20} />
            <span>Les <strong>attributs</strong> doivent être <strong>privés</strong> (−)</span>
          </div>
          <div className="check-item success">
            <CheckCircle2 size={20} />
            <span>Fournir des <strong>accesseurs</strong> (getters/setters) publics si nécessaire</span>
          </div>
          <div className="check-item success">
            <CheckCircle2 size={20} />
            <span>Les méthodes de l'<strong>API publique</strong> sont publiques (+)</span>
          </div>
          <div className="check-item error">
            <XCircle size={20} />
            <span>Éviter les attributs publics (sauf constantes)</span>
          </div>
        </div>
      </div>

      <div className="content-card info">
        <h3>💡 Résumé Visuel</h3>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Symbole</th>
              <th>Niveau</th>
              <th>Même Classe</th>
              <th>Sous-classe</th>
              <th>Package</th>
              <th>Externe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>+</strong></td>
              <td>Public</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td><strong>#</strong></td>
              <td>Protégé</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr>
              <td><strong>~</strong></td>
              <td>Package</td>
              <td>✅</td>
              <td>❌</td>
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr>
              <td><strong>−</strong></td>
              <td>Privé</td>
              <td>✅</td>
              <td>❌</td>
              <td>❌</td>
              <td>❌</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="next-section-btn" onClick={onNext}>
        <span>Continuer vers Relations</span>
        <ArrowRight size={18} />
      </button>
    </article>
  );
}

function RelationsSection({ onNext }) {
  return (
    <article className="content-section">
      <header className="section-header">
        <div className="section-badge">Relations</div>
        <h1 className="section-title">Relations entre Classes</h1>
        <p className="section-lead">
          Les relations définissent comment les classes interagissent et dépendent les unes des autres.
        </p>
      </header>

      <div className="relations-grid">
        {/* Association */}
        <div className="relation-card">
          <div className="relation-header">
            <h3>Association</h3>
            <span className="relation-type">Lien structurel</span>
          </div>
          <div className="relation-visual">
            <svg viewBox="0 0 300 60" width="100%" height="60">
              <rect x="20" y="15" width="80" height="30" fill="var(--color-bg-tertiary)" stroke="var(--color-accent)" strokeWidth="1.5" rx="3"/>
              <text x="60" y="35" textAnchor="middle" fill="var(--color-text-primary)" fontSize="11">Personne</text>
              
              <line x1="100" y1="30" x2="200" y2="30" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
              
              <rect x="200" y="15" width="80" height="30" fill="var(--color-bg-tertiary)" stroke="var(--color-accent)" strokeWidth="1.5" rx="3"/>
              <text x="240" y="35" textAnchor="middle" fill="var(--color-text-primary)" fontSize="11">Voiture</text>
              
              <text x="110" y="25" fill="var(--color-text-muted)" fontSize="9">1</text>
              <text x="190" y="25" fill="var(--color-text-muted)" fontSize="9">0..*</text>
              <text x="150" y="50" textAnchor="middle" fill="var(--color-text-muted)" fontSize="9">possède</text>
            </svg>
          </div>
          <p className="relation-description">
            Relation structurelle entre deux classes. Peut être nommée et avoir des multiplicités.
          </p>
        </div>

        {/* Agrégation */}
        <div className="relation-card">
          <div className="relation-header">
            <h3>Agrégation</h3>
            <span className="relation-type">Contient (faible)</span>
          </div>
          <div className="relation-visual">
            <svg viewBox="0 0 300 60" width="100%" height="60">
              <rect x="20" y="15" width="80" height="30" fill="var(--color-bg-tertiary)" stroke="var(--color-accent)" strokeWidth="1.5" rx="3"/>
              <text x="60" y="35" textAnchor="middle" fill="var(--color-text-primary)" fontSize="11">Équipe</text>
              
              <line x1="100" y1="30" x2="200" y2="30" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
              <polygon points="100,30 115,22 115,38" fill="none" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
              
              <rect x="200" y="15" width="80" height="30" fill="var(--color-bg-tertiary)" stroke="var(--color-accent)" strokeWidth="1.5" rx="3"/>
              <text x="240" y="35" textAnchor="middle" fill="var(--color-text-primary)" fontSize="11">Joueur</text>
            </svg>
          </div>
          <p className="relation-description">
            Le tout contient les parties, mais celles-ci peuvent exister indépendamment (losange vide).
          </p>
        </div>

        {/* Composition */}
        <div className="relation-card">
          <div className="relation-header">
            <h3>Composition</h3>
            <span className="relation-type">Composé de (fort)</span>
          </div>
          <div className="relation-visual">
            <svg viewBox="0 0 300 60" width="100%" height="60">
              <rect x="20" y="15" width="80" height="30" fill="var(--color-bg-tertiary)" stroke="var(--color-accent)" strokeWidth="1.5" rx="3"/>
              <text x="60" y="35" textAnchor="middle" fill="var(--color-text-primary)" fontSize="11">Maison</text>
              
              <line x1="115" y1="30" x2="200" y2="30" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
              <polygon points="100,30 115,22 115,38" fill="var(--color-text-secondary)" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
              
              <rect x="200" y="15" width="80" height="30" fill="var(--color-bg-tertiary)" stroke="var(--color-accent)" strokeWidth="1.5" rx="3"/>
              <text x="240" y="35" textAnchor="middle" fill="var(--color-text-primary)" fontSize="11">Pièce</text>
            </svg>
          </div>
          <p className="relation-description">
            Les parties ne peuvent pas exister sans le tout. Destruction du tout = destruction des parties (losange plein).
          </p>
        </div>

        {/* Héritage */}
        <div className="relation-card">
          <div className="relation-header">
            <h3>Généralisation / Héritage</h3>
            <span className="relation-type">Est-un</span>
          </div>
          <div className="relation-visual">
            <svg viewBox="0 0 300 80" width="100%" height="80">
              <rect x="110" y="5" width="80" height="25" fill="var(--color-bg-tertiary)" stroke="var(--color-accent)" strokeWidth="1.5" rx="3"/>
              <text x="150" y="22" textAnchor="middle" fill="var(--color-text-primary)" fontSize="11">Véhicule</text>
              
              <line x1="150" y1="30" x2="150" y2="45" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
              <line x1="60" y1="45" x2="240" y2="45" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
              <polygon points="150,30 143,40 157,40" fill="none" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
              
              <line x1="60" y1="45" x2="60" y2="55" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
              <line x1="240" y1="45" x2="240" y2="55" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
              
              <rect x="20" y="55" width="80" height="25" fill="var(--color-bg-tertiary)" stroke="var(--color-info)" strokeWidth="1.5" rx="3"/>
              <text x="60" y="72" textAnchor="middle" fill="var(--color-text-primary)" fontSize="11">Voiture</text>
              
              <rect x="200" y="55" width="80" height="25" fill="var(--color-bg-tertiary)" stroke="var(--color-info)" strokeWidth="1.5" rx="3"/>
              <text x="240" y="72" textAnchor="middle" fill="var(--color-text-primary)" fontSize="11">Moto</text>
            </svg>
          </div>
          <p className="relation-description">
            La sous-classe hérite des attributs et méthodes de la super-classe (triangle vide vers le parent).
          </p>
        </div>

        {/* Dépendance */}
        <div className="relation-card">
          <div className="relation-header">
            <h3>Dépendance</h3>
            <span className="relation-type">Utilise</span>
          </div>
          <div className="relation-visual">
            <svg viewBox="0 0 300 60" width="100%" height="60">
              <rect x="20" y="15" width="80" height="30" fill="var(--color-bg-tertiary)" stroke="var(--color-accent)" strokeWidth="1.5" rx="3"/>
              <text x="60" y="35" textAnchor="middle" fill="var(--color-text-primary)" fontSize="11">Client</text>
              
              <line x1="100" y1="30" x2="195" y2="30" stroke="var(--color-text-secondary)" strokeWidth="1.5" strokeDasharray="5,3"/>
              <polygon points="200,30 190,25 190,35" fill="var(--color-text-secondary)"/>
              
              <rect x="200" y="15" width="80" height="30" fill="var(--color-bg-tertiary)" stroke="var(--color-warning)" strokeWidth="1.5" rx="3"/>
              <text x="240" y="35" textAnchor="middle" fill="var(--color-text-primary)" fontSize="11">Service</text>
            </svg>
          </div>
          <p className="relation-description">
            Relation d'utilisation temporaire. Changement dans la cible peut affecter la source (flèche pointillée).
          </p>
        </div>

        {/* Réalisation */}
        <div className="relation-card">
          <div className="relation-header">
            <h3>Réalisation</h3>
            <span className="relation-type">Implémente</span>
          </div>
          <div className="relation-visual">
            <svg viewBox="0 0 300 60" width="100%" height="60">
              <rect x="20" y="15" width="80" height="30" fill="var(--color-bg-tertiary)" stroke="var(--color-accent)" strokeWidth="1.5" rx="3"/>
              <text x="60" y="35" textAnchor="middle" fill="var(--color-text-primary)" fontSize="10">ConcreteClass</text>
              
              <line x1="100" y1="30" x2="195" y2="30" stroke="var(--color-text-secondary)" strokeWidth="1.5" strokeDasharray="5,3"/>
              <polygon points="200,30 185,22 185,38" fill="none" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
              
              <rect x="200" y="10" width="80" height="40" fill="var(--color-bg-tertiary)" stroke="var(--color-success)" strokeWidth="1.5" rx="3"/>
              <text x="240" y="25" textAnchor="middle" fill="var(--color-text-muted)" fontSize="8">&lt;&lt;interface&gt;&gt;</text>
              <text x="240" y="40" textAnchor="middle" fill="var(--color-text-primary)" fontSize="10">Interface</text>
            </svg>
          </div>
          <p className="relation-description">
            La classe implémente les méthodes définies par l'interface (triangle vide pointillé).
          </p>
        </div>
      </div>

      <div className="content-card highlight">
        <h3>📊 Multiplicités</h3>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Notation</th>
              <th>Signification</th>
              <th>Exemple</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>1</code></td>
              <td>Exactement un</td>
              <td>Une commande a un client</td>
            </tr>
            <tr>
              <td><code>0..1</code></td>
              <td>Zéro ou un (optionnel)</td>
              <td>Une personne a 0 ou 1 conjoint</td>
            </tr>
            <tr>
              <td><code>*</code> ou <code>0..*</code></td>
              <td>Zéro ou plusieurs</td>
              <td>Un client a 0 ou plusieurs commandes</td>
            </tr>
            <tr>
              <td><code>1..*</code></td>
              <td>Un ou plusieurs</td>
              <td>Une commande a au moins 1 ligne</td>
            </tr>
            <tr>
              <td><code>n..m</code></td>
              <td>Entre n et m</td>
              <td>Un cours a 5 à 30 étudiants</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="next-section-btn" onClick={onNext}>
        <span>Continuer vers Diagramme d'Objets</span>
        <ArrowRight size={18} />
      </button>
    </article>
  );
}

function ObjectsSection({ onNext }) {
  return (
    <article className="content-section">
      <header className="section-header">
        <div className="section-badge">Objets</div>
        <h1 className="section-title">Diagramme d'Objets</h1>
        <p className="section-lead">
          Le diagramme d'objets représente les instances de classes à un instant donné,
          avec leurs valeurs concrètes.
        </p>
      </header>

      <div className="definition-box">
        <h3>📖 Définition</h3>
        <blockquote>
          Un <strong>diagramme d'objets</strong> est une photographie du système à un instant T.
          Il montre les objets (instances de classes) et leurs liens (instances d'associations).
        </blockquote>
      </div>

      <div className="content-card">
        <h3>📐 Notation des Objets</h3>
        <div className="object-comparison">
          <div className="comparison-item">
            <h4>Classe</h4>
            <svg viewBox="0 0 150 80" width="150" height="80">
              <rect x="10" y="10" width="130" height="60" fill="var(--color-bg-tertiary)" stroke="var(--color-accent)" strokeWidth="2" rx="4"/>
              <line x1="10" y1="35" x2="140" y2="35" stroke="var(--color-accent)" strokeWidth="1"/>
              <text x="75" y="27" textAnchor="middle" fill="var(--color-text-primary)" fontWeight="600" fontSize="12">Personne</text>
              <text x="20" y="52" fill="var(--color-text-secondary)" fontSize="10">- nom: String</text>
              <text x="20" y="65" fill="var(--color-text-secondary)" fontSize="10">- age: Integer</text>
            </svg>
          </div>
          
          <div className="comparison-arrow">→</div>
          
          <div className="comparison-item">
            <h4>Objet (Instance)</h4>
            <svg viewBox="0 0 150 80" width="150" height="80">
              <rect x="10" y="10" width="130" height="60" fill="var(--color-bg-tertiary)" stroke="var(--color-info)" strokeWidth="2" rx="4"/>
              <line x1="10" y1="35" x2="140" y2="35" stroke="var(--color-info)" strokeWidth="1"/>
              <text x="75" y="27" textAnchor="middle" fill="var(--color-text-primary)" fontWeight="600" fontSize="11" textDecoration="underline">jean:Personne</text>
              <text x="20" y="52" fill="var(--color-text-secondary)" fontSize="10">nom = "Jean"</text>
              <text x="20" y="65" fill="var(--color-text-secondary)" fontSize="10">age = 25</text>
            </svg>
          </div>
        </div>
        <p className="diagram-caption">
          Le nom de l'objet est <strong>souligné</strong> et suit le format: <code>nomObjet:NomClasse</code>
        </p>
      </div>

      <div className="content-card">
        <h3>🔗 Liens entre Objets</h3>
        <p>
          Les liens sont des instances d'associations. Ils n'ont pas de multiplicités (car ils sont concrets).
        </p>
        <div className="object-diagram-example">
          <svg viewBox="0 0 400 120" width="100%" height="120">
            {/* Object 1 */}
            <rect x="20" y="10" width="120" height="50" fill="var(--color-bg-tertiary)" stroke="var(--color-info)" strokeWidth="1.5" rx="4"/>
            <line x1="20" y1="32" x2="140" y2="32" stroke="var(--color-info)" strokeWidth="1"/>
            <text x="80" y="25" textAnchor="middle" fill="var(--color-text-primary)" fontWeight="500" fontSize="10" textDecoration="underline">alice:Personne</text>
            <text x="30" y="48" fill="var(--color-text-secondary)" fontSize="9">nom = "Alice"</text>
            
            {/* Link */}
            <line x1="140" y1="35" x2="260" y2="35" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
            <text x="200" y="28" textAnchor="middle" fill="var(--color-text-muted)" fontSize="9">possède</text>
            
            {/* Object 2 */}
            <rect x="260" y="10" width="120" height="50" fill="var(--color-bg-tertiary)" stroke="var(--color-info)" strokeWidth="1.5" rx="4"/>
            <line x1="260" y1="32" x2="380" y2="32" stroke="var(--color-info)" strokeWidth="1"/>
            <text x="320" y="25" textAnchor="middle" fill="var(--color-text-primary)" fontWeight="500" fontSize="10" textDecoration="underline">v1:Voiture</text>
            <text x="270" y="48" fill="var(--color-text-secondary)" fontSize="9">marque = "Tesla"</text>
            
            {/* Object 3 */}
            <rect x="260" y="70" width="120" height="40" fill="var(--color-bg-tertiary)" stroke="var(--color-info)" strokeWidth="1.5" rx="4"/>
            <line x1="260" y1="92" x2="380" y2="92" stroke="var(--color-info)" strokeWidth="1"/>
            <text x="320" y="86" textAnchor="middle" fill="var(--color-text-primary)" fontWeight="500" fontSize="10" textDecoration="underline">v2:Voiture</text>
            
            {/* Link 2 */}
            <line x1="140" y1="35" x2="260" y2="90" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
          </svg>
        </div>
      </div>

      <div className="content-grid">
        <div className="content-card">
          <h3>✅ Utilité du Diagramme d'Objets</h3>
          <ul className="styled-list">
            <li>Valider un diagramme de classes</li>
            <li>Illustrer un scénario concret</li>
            <li>Expliquer une situation complexe</li>
            <li>Tester les multiplicités</li>
          </ul>
        </div>

        <div className="content-card">
          <h3>📝 Conventions</h3>
          <ul className="styled-list">
            <li>Noms d'objets en <strong>minuscule</strong></li>
            <li>Nom <strong>souligné</strong></li>
            <li>Valeurs <strong>concrètes</strong> (pas de types)</li>
            <li>Pas de méthodes affichées</li>
          </ul>
        </div>
      </div>

      <button className="next-section-btn" onClick={onNext}>
        <span>Voir les Exemples</span>
        <ArrowRight size={18} />
      </button>
    </article>
  );
}

function ExamplesSection() {
  return (
    <article className="content-section">
      <header className="section-header">
        <div className="section-badge">Exemples</div>
        <h1 className="section-title">Exemples Pratiques</h1>
        <p className="section-lead">
          Mettez en pratique vos connaissances avec ces exemples complets.
        </p>
      </header>

      <div className="content-card">
        <h3>🏪 Exemple: Système de Gestion de Commandes</h3>
        <ClassDiagram variant="ecommerce" />
        
        <div className="example-analysis">
          <div className="analysis-item">
            <h4>Classes identifiées</h4>
            <div className="tags">
              <span className="tag">Client</span>
              <span className="tag">Commande</span>
              <span className="tag">LigneCommande</span>
              <span className="tag">Produit</span>
            </div>
          </div>
          
          <div className="analysis-item">
            <h4>Relations</h4>
            <ul className="styled-list">
              <li>Client <strong>passe</strong> Commande (1 à plusieurs)</li>
              <li>Commande <strong>est composée de</strong> LigneCommande (composition)</li>
              <li>LigneCommande <strong>référence</strong> Produit (association)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-card">
        <h3>🎓 Exemple: Système Universitaire</h3>
        <ClassDiagram variant="university" />
        
        <div className="example-analysis">
          <div className="analysis-item">
            <h4>Héritage</h4>
            <p>Étudiant et Professeur <strong>héritent</strong> de Personne</p>
          </div>
          
          <div className="analysis-item">
            <h4>Associations</h4>
            <ul className="styled-list">
              <li>Étudiant <strong>s'inscrit</strong> à Cours (n à n)</li>
              <li>Professeur <strong>enseigne</strong> Cours (1 à plusieurs)</li>
              <li>Cours <strong>appartient</strong> à Département</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-card success">
        <h3>🎉 Félicitations !</h3>
        <p>
          Vous avez terminé le chapitre sur les Diagrammes de Classes et d'Objets.
          Testez vos connaissances avec le quiz interactif !
        </p>
      </div>
    </article>
  );
}
