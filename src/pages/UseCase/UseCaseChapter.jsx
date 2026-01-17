import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  BookOpen, 
  Users, 
  Target,
  Link as LinkIcon,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Layers,
  GitBranch
} from 'lucide-react';
import UseCaseDiagram from '../../components/Diagrams/UseCaseDiagram';
import './ChapterPage.css';

const sections = [
  { id: 'intro', title: 'Introduction', icon: BookOpen },
  { id: 'definition', title: 'Définition & Concepts', icon: Target },
  { id: 'actors', title: 'Les Acteurs', icon: Users },
  { id: 'usecases', title: 'Cas d\'Utilisation', icon: Layers },
  { id: 'relations', title: 'Relations', icon: LinkIcon },
  { id: 'examples', title: 'Exemples Pratiques', icon: GitBranch },
];

export default function UseCaseChapter() {
  const [activeSection, setActiveSection] = useState('intro');
  const [expandedExample, setExpandedExample] = useState(null);

  return (
    <div className="chapter-page">
      {/* Chapter Navigation */}
      <nav className="chapter-nav">
        <div className="chapter-nav-header">
          <span className="chapter-number">04</span>
          <div>
            <h2 className="chapter-nav-title">Diagramme de Cas d'Utilisation</h2>
            <p className="chapter-nav-subtitle">Use Case Diagram</p>
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
              <IntroSection onNext={() => setActiveSection('definition')} />
            )}
            {activeSection === 'definition' && (
              <DefinitionSection onNext={() => setActiveSection('actors')} />
            )}
            {activeSection === 'actors' && (
              <ActorsSection onNext={() => setActiveSection('usecases')} />
            )}
            {activeSection === 'usecases' && (
              <UseCasesSection onNext={() => setActiveSection('relations')} />
            )}
            {activeSection === 'relations' && (
              <RelationsSection onNext={() => setActiveSection('examples')} />
            )}
            {activeSection === 'examples' && (
              <ExamplesSection 
                expandedExample={expandedExample}
                setExpandedExample={setExpandedExample}
              />
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
        <h1 className="section-title">Diagramme de Cas d'Utilisation</h1>
        <p className="section-lead">
          Le diagramme de cas d'utilisation est un outil fondamental en UML pour capturer 
          les exigences fonctionnelles d'un système du point de vue des utilisateurs.
        </p>
      </header>

      <div className="content-card highlight">
        <div className="highlight-icon">
          <Lightbulb size={24} />
        </div>
        <div className="highlight-content">
          <h4>Objectif Principal</h4>
          <p>
            Décrire <strong>ce que fait le système</strong> (et non comment il le fait) 
            en se concentrant sur les interactions entre le système et ses utilisateurs externes.
          </p>
        </div>
      </div>

      <div className="content-grid">
        <div className="content-card">
          <h3>📌 Rôle du Diagramme</h3>
          <ul className="styled-list">
            <li>Capturer les besoins fonctionnels du système</li>
            <li>Identifier les acteurs et leurs interactions</li>
            <li>Définir les limites du système</li>
            <li>Servir de base pour les tests fonctionnels</li>
          </ul>
        </div>

        <div className="content-card">
          <h3>🎯 Quand l'utiliser ?</h3>
          <ul className="styled-list">
            <li>Phase d'analyse des besoins</li>
            <li>Communication avec les clients</li>
            <li>Documentation des fonctionnalités</li>
            <li>Planification des itérations de développement</li>
          </ul>
        </div>
      </div>

      <div className="diagram-container">
        <h3>Vue d'ensemble d'un Diagramme de Cas d'Utilisation</h3>
        <UseCaseDiagram variant="simple" />
        <p className="diagram-caption">
          Un diagramme de cas d'utilisation montre les acteurs, les cas d'utilisation 
          et les relations qui les lient au sein d'un système délimité.
        </p>
      </div>

      <div className="content-card info">
        <h4>🔑 Éléments Clés</h4>
        <div className="key-elements">
          <div className="key-element">
            <span className="element-icon">👤</span>
            <div>
              <strong>Acteurs</strong>
              <p>Entités externes qui interagissent avec le système</p>
            </div>
          </div>
          <div className="key-element">
            <span className="element-icon">⭕</span>
            <div>
              <strong>Cas d'utilisation</strong>
              <p>Fonctionnalités ou services offerts par le système</p>
            </div>
          </div>
          <div className="key-element">
            <span className="element-icon">📦</span>
            <div>
              <strong>Système</strong>
              <p>Rectangle délimitant le périmètre du système</p>
            </div>
          </div>
          <div className="key-element">
            <span className="element-icon">↔️</span>
            <div>
              <strong>Relations</strong>
              <p>Liens entre acteurs et cas d'utilisation</p>
            </div>
          </div>
        </div>
      </div>

      <button className="next-section-btn" onClick={onNext}>
        <span>Continuer vers Définition & Concepts</span>
        <ArrowRight size={18} />
      </button>
    </article>
  );
}

function DefinitionSection({ onNext }) {
  return (
    <article className="content-section">
      <header className="section-header">
        <div className="section-badge">Concepts</div>
        <h1 className="section-title">Définition & Concepts Fondamentaux</h1>
      </header>

      <div className="definition-box">
        <h3>📖 Définition Formelle</h3>
        <blockquote>
          Un <strong>cas d'utilisation</strong> (Use Case) représente un ensemble de séquences 
          d'actions réalisées par le système et produisant un résultat observable ayant 
          de la valeur pour un acteur particulier.
        </blockquote>
      </div>

      <div className="content-card">
        <h3>🎯 Caractéristiques d'un Bon Cas d'Utilisation</h3>
        <div className="checklist">
          <div className="check-item success">
            <CheckCircle2 size={20} />
            <span>Commence par un <strong>verbe à l'infinitif</strong> (ex: "Réserver", "Consulter")</span>
          </div>
          <div className="check-item success">
            <CheckCircle2 size={20} />
            <span>Représente une <strong>fonctionnalité complète</strong> du point de vue de l'acteur</span>
          </div>
          <div className="check-item success">
            <CheckCircle2 size={20} />
            <span>Produit un <strong>résultat observable</strong> pour l'acteur</span>
          </div>
          <div className="check-item success">
            <CheckCircle2 size={20} />
            <span>Est <strong>indépendant de l'implémentation</strong> technique</span>
          </div>
          <div className="check-item error">
            <XCircle size={20} />
            <span>N'est <strong>pas</strong> une simple action (ex: "Cliquer sur un bouton")</span>
          </div>
          <div className="check-item error">
            <XCircle size={20} />
            <span>N'est <strong>pas</strong> un processus interne au système</span>
          </div>
        </div>
      </div>

      <div className="content-grid">
        <div className="content-card">
          <h3>✅ Bons Exemples</h3>
          <ul className="example-list good">
            <li>Réserver un vol</li>
            <li>Consulter le solde du compte</li>
            <li>Passer une commande</li>
            <li>S'authentifier</li>
            <li>Générer un rapport</li>
          </ul>
        </div>

        <div className="content-card">
          <h3>❌ Mauvais Exemples</h3>
          <ul className="example-list bad">
            <li>Cliquer sur le bouton Valider</li>
            <li>Vérifier les données</li>
            <li>Accéder à la base de données</li>
            <li>Afficher un message d'erreur</li>
            <li>Se connecter au serveur</li>
          </ul>
        </div>
      </div>

      <div className="content-card">
        <h3>📋 Structure d'un Cas d'Utilisation</h3>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Élément</th>
              <th>Description</th>
              <th>Exemple</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nom</strong></td>
              <td>Verbe + complément décrivant l'objectif</td>
              <td>"Réserver un billet"</td>
            </tr>
            <tr>
              <td><strong>Acteur principal</strong></td>
              <td>Celui qui déclenche le cas d'utilisation</td>
              <td>Client</td>
            </tr>
            <tr>
              <td><strong>Préconditions</strong></td>
              <td>État requis avant l'exécution</td>
              <td>L'utilisateur est authentifié</td>
            </tr>
            <tr>
              <td><strong>Postconditions</strong></td>
              <td>État après l'exécution réussie</td>
              <td>Le billet est réservé</td>
            </tr>
            <tr>
              <td><strong>Scénario nominal</strong></td>
              <td>Séquence d'actions normale</td>
              <td>1. Sélectionner vol, 2. Choisir siège...</td>
            </tr>
            <tr>
              <td><strong>Scénarios alternatifs</strong></td>
              <td>Variantes du scénario principal</td>
              <td>Vol complet → proposer alternative</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="next-section-btn" onClick={onNext}>
        <span>Continuer vers Les Acteurs</span>
        <ArrowRight size={18} />
      </button>
    </article>
  );
}

function ActorsSection({ onNext }) {
  return (
    <article className="content-section">
      <header className="section-header">
        <div className="section-badge">Acteurs</div>
        <h1 className="section-title">Les Acteurs</h1>
        <p className="section-lead">
          Un acteur représente une entité externe qui interagit avec le système. 
          Il peut être une personne, un autre système, ou même le temps.
        </p>
      </header>

      <div className="definition-box">
        <h3>📖 Définition</h3>
        <blockquote>
          Un <strong>acteur</strong> est une entité externe au système qui interagit avec celui-ci 
          en échangeant de l'information (entrées/sorties). Il représente un <strong>rôle</strong>, 
          pas une personne spécifique.
        </blockquote>
      </div>

      <div className="content-card">
        <h3>👥 Types d'Acteurs</h3>
        <div className="actor-types">
          <div className="actor-type-card">
            <div className="actor-visual primary">
              <svg viewBox="0 0 60 80" width="60" height="80">
                <circle cx="30" cy="15" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
                <line x1="30" y1="27" x2="30" y2="55" stroke="currentColor" strokeWidth="2"/>
                <line x1="10" y1="40" x2="50" y2="40" stroke="currentColor" strokeWidth="2"/>
                <line x1="30" y1="55" x2="15" y2="75" stroke="currentColor" strokeWidth="2"/>
                <line x1="30" y1="55" x2="45" y2="75" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h4>Acteur Principal</h4>
            <p>
              Celui qui <strong>initie</strong> le cas d'utilisation et bénéficie 
              directement du service rendu.
            </p>
            <span className="actor-example">Ex: Client, Utilisateur</span>
          </div>

          <div className="actor-type-card">
            <div className="actor-visual secondary">
              <svg viewBox="0 0 60 80" width="60" height="80">
                <circle cx="30" cy="15" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
                <line x1="30" y1="27" x2="30" y2="55" stroke="currentColor" strokeWidth="2"/>
                <line x1="10" y1="40" x2="50" y2="40" stroke="currentColor" strokeWidth="2"/>
                <line x1="30" y1="55" x2="15" y2="75" stroke="currentColor" strokeWidth="2"/>
                <line x1="30" y1="55" x2="45" y2="75" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h4>Acteur Secondaire</h4>
            <p>
              Celui qui est <strong>sollicité</strong> par le système pour accomplir 
              une partie du cas d'utilisation.
            </p>
            <span className="actor-example">Ex: Système bancaire, Service email</span>
          </div>

          <div className="actor-type-card">
            <div className="actor-visual system">
              <svg viewBox="0 0 60 60" width="60" height="60">
                <rect x="5" y="5" width="50" height="50" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                <text x="30" y="35" textAnchor="middle" fontSize="12" fill="currentColor">&lt;&lt;sys&gt;&gt;</text>
              </svg>
            </div>
            <h4>Acteur Système</h4>
            <p>
              Un système externe qui interagit automatiquement avec notre système.
            </p>
            <span className="actor-example">Ex: API externe, Base de données</span>
          </div>
        </div>
      </div>

      <div className="content-card info">
        <h3>🔍 Comment Identifier les Acteurs ?</h3>
        <div className="steps-list">
          <div className="step">
            <span className="step-number">1</span>
            <div>
              <strong>Poser les bonnes questions</strong>
              <p>Qui utilise le système ? Qui fournit des informations ? Qui reçoit des informations ?</p>
            </div>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <div>
              <strong>Identifier les rôles, pas les personnes</strong>
              <p>Une personne peut jouer plusieurs rôles, un rôle peut être joué par plusieurs personnes.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <div>
              <strong>Chercher les systèmes externes</strong>
              <p>Quels autres systèmes communiquent avec le nôtre ?</p>
            </div>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <div>
              <strong>Ne pas oublier le temps</strong>
              <p>Y a-t-il des actions déclenchées automatiquement à intervalles réguliers ?</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-card">
        <h3>⚠️ Erreurs Courantes</h3>
        <div className="checklist">
          <div className="check-item error">
            <XCircle size={20} />
            <span>Confondre un acteur avec un <strong>composant interne</strong> du système</span>
          </div>
          <div className="check-item error">
            <XCircle size={20} />
            <span>Nommer l'acteur par une <strong>personne spécifique</strong> au lieu d'un rôle</span>
          </div>
          <div className="check-item error">
            <XCircle size={20} />
            <span>Créer un acteur pour chaque <strong>action différente</strong> d'une même personne</span>
          </div>
        </div>
      </div>

      <button className="next-section-btn" onClick={onNext}>
        <span>Continuer vers Cas d'Utilisation</span>
        <ArrowRight size={18} />
      </button>
    </article>
  );
}

function UseCasesSection({ onNext }) {
  return (
    <article className="content-section">
      <header className="section-header">
        <div className="section-badge">Cas d'Utilisation</div>
        <h1 className="section-title">Les Cas d'Utilisation</h1>
        <p className="section-lead">
          Représentation graphique et textuelle des fonctionnalités offertes par le système.
        </p>
      </header>

      <div className="content-card">
        <h3>📐 Représentation Graphique</h3>
        <div className="visual-demo">
          <div className="use-case-visual">
            <svg viewBox="0 0 200 100" width="200" height="100">
              <ellipse cx="100" cy="50" rx="80" ry="35" fill="none" stroke="var(--color-accent)" strokeWidth="2"/>
              <text x="100" y="55" textAnchor="middle" fill="var(--color-text-primary)" fontSize="14">
                Réserver un vol
              </text>
            </svg>
          </div>
          <div className="visual-explanation">
            <p>Un cas d'utilisation est représenté par une <strong>ellipse</strong> contenant son nom.</p>
            <p>Le nom doit commencer par un <strong>verbe à l'infinitif</strong>.</p>
          </div>
        </div>
      </div>

      <div className="content-card">
        <h3>📝 Description Textuelle (Scénario)</h3>
        <div className="scenario-example">
          <div className="scenario-header">
            <strong>Cas d'utilisation:</strong> Retirer de l'argent
          </div>
          <div className="scenario-body">
            <div className="scenario-section">
              <span className="scenario-label">Acteur principal:</span>
              <span>Client</span>
            </div>
            <div className="scenario-section">
              <span className="scenario-label">Préconditions:</span>
              <span>La carte bancaire est insérée et le code PIN validé</span>
            </div>
            <div className="scenario-section">
              <span className="scenario-label">Scénario nominal:</span>
              <ol className="scenario-steps">
                <li>Le client sélectionne "Retrait"</li>
                <li>Le système affiche les montants prédéfinis</li>
                <li>Le client choisit un montant</li>
                <li>Le système vérifie le solde</li>
                <li>Le système distribue les billets</li>
                <li>Le système éjecte la carte</li>
                <li>Le système imprime le reçu</li>
              </ol>
            </div>
            <div className="scenario-section">
              <span className="scenario-label">Postconditions:</span>
              <span>Le compte est débité du montant retiré</span>
            </div>
            <div className="scenario-section">
              <span className="scenario-label">Exceptions:</span>
              <ul className="scenario-exceptions">
                <li>4a. Solde insuffisant → afficher message d'erreur</li>
                <li>5a. Pas assez de billets → proposer montant alternatif</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-card info">
        <h3>💡 Bonnes Pratiques</h3>
        <ul className="styled-list">
          <li>Garder les cas d'utilisation à un niveau d'<strong>abstraction approprié</strong></li>
          <li>Éviter les cas trop détaillés ou trop généraux</li>
          <li>Un cas d'utilisation = <strong>un objectif utilisateur</strong></li>
          <li>Utiliser un <strong>vocabulaire métier</strong>, pas technique</li>
          <li>Documenter les <strong>scénarios alternatifs</strong> importants</li>
        </ul>
      </div>

      <button className="next-section-btn" onClick={onNext}>
        <span>Continuer vers Les Relations</span>
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
        <h1 className="section-title">Les Relations en UML</h1>
        <p className="section-lead">
          Les relations définissent comment les acteurs et les cas d'utilisation sont connectés.
        </p>
      </header>

      <div className="relations-grid">
        {/* Association */}
        <div className="relation-card">
          <div className="relation-header">
            <h3>Association</h3>
            <span className="relation-type">Acteur ↔ Cas d'utilisation</span>
          </div>
          <div className="relation-visual">
            <svg viewBox="0 0 300 80" width="100%" height="80">
              {/* Actor */}
              <g>
                <circle cx="40" cy="20" r="10" fill="none" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
                <line x1="40" y1="30" x2="40" y2="50" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
                <line x1="25" y1="38" x2="55" y2="38" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
                <line x1="40" y1="50" x2="28" y2="65" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
                <line x1="40" y1="50" x2="52" y2="65" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
              </g>
              {/* Line */}
              <line x1="60" y1="40" x2="140" y2="40" stroke="var(--color-accent)" strokeWidth="2"/>
              {/* Use Case */}
              <ellipse cx="210" cy="40" rx="60" ry="25" fill="none" stroke="var(--color-accent)" strokeWidth="2"/>
              <text x="210" y="45" textAnchor="middle" fill="var(--color-text-secondary)" fontSize="11">Cas d'utilisation</text>
            </svg>
          </div>
          <p className="relation-description">
            Représente la <strong>participation</strong> d'un acteur à un cas d'utilisation.
            C'est une simple ligne continue.
          </p>
        </div>

        {/* Include */}
        <div className="relation-card">
          <div className="relation-header">
            <h3>Include (Inclusion)</h3>
            <span className="relation-type keyword">&lt;&lt;include&gt;&gt;</span>
          </div>
          <div className="relation-visual">
            <svg viewBox="0 0 320 80" width="100%" height="80">
              <ellipse cx="80" cy="40" rx="60" ry="25" fill="none" stroke="var(--color-accent)" strokeWidth="2"/>
              <text x="80" y="45" textAnchor="middle" fill="var(--color-text-secondary)" fontSize="10">Cas principal</text>
              
              <line x1="140" y1="40" x2="180" y2="40" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="5,3"/>
              <polygon points="180,40 173,36 173,44" fill="var(--color-accent)"/>
              <text x="160" y="30" textAnchor="middle" fill="var(--color-text-muted)" fontSize="9">&lt;&lt;include&gt;&gt;</text>
              
              <ellipse cx="250" cy="40" rx="55" ry="25" fill="none" stroke="var(--color-success)" strokeWidth="2"/>
              <text x="250" y="45" textAnchor="middle" fill="var(--color-text-secondary)" fontSize="10">Cas inclus</text>
            </svg>
          </div>
          <p className="relation-description">
            Le cas source <strong>inclut obligatoirement</strong> le comportement du cas cible.
            Utilisé pour factoriser des comportements communs.
          </p>
          <div className="relation-example">
            <strong>Exemple:</strong> "Passer commande" <em>include</em> "S'authentifier"
          </div>
        </div>

        {/* Extend */}
        <div className="relation-card">
          <div className="relation-header">
            <h3>Extend (Extension)</h3>
            <span className="relation-type keyword">&lt;&lt;extend&gt;&gt;</span>
          </div>
          <div className="relation-visual">
            <svg viewBox="0 0 320 80" width="100%" height="80">
              <ellipse cx="80" cy="40" rx="60" ry="25" fill="none" stroke="var(--color-warning)" strokeWidth="2"/>
              <text x="80" y="45" textAnchor="middle" fill="var(--color-text-secondary)" fontSize="10">Extension</text>
              
              <line x1="140" y1="40" x2="180" y2="40" stroke="var(--color-warning)" strokeWidth="1.5" strokeDasharray="5,3"/>
              <polygon points="180,40 173,36 173,44" fill="var(--color-warning)"/>
              <text x="160" y="30" textAnchor="middle" fill="var(--color-text-muted)" fontSize="9">&lt;&lt;extend&gt;&gt;</text>
              
              <ellipse cx="250" cy="40" rx="55" ry="25" fill="none" stroke="var(--color-accent)" strokeWidth="2"/>
              <text x="250" y="45" textAnchor="middle" fill="var(--color-text-secondary)" fontSize="10">Cas de base</text>
            </svg>
          </div>
          <p className="relation-description">
            Le cas source peut <strong>optionnellement étendre</strong> le cas cible 
            sous certaines conditions.
          </p>
          <div className="relation-example">
            <strong>Exemple:</strong> "Payer par carte" <em>extend</em> "Passer commande"
          </div>
        </div>

        {/* Generalization */}
        <div className="relation-card">
          <div className="relation-header">
            <h3>Généralisation (Héritage)</h3>
            <span className="relation-type">Parent ← Enfant</span>
          </div>
          <div className="relation-visual">
            <svg viewBox="0 0 320 100" width="100%" height="100">
              {/* Parent Actor */}
              <g>
                <circle cx="80" cy="25" r="10" fill="none" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
                <line x1="80" y1="35" x2="80" y2="55" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
                <line x1="65" y1="43" x2="95" y2="43" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
                <line x1="80" y1="55" x2="68" y2="70" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
                <line x1="80" y1="55" x2="92" y2="70" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
                <text x="80" y="85" textAnchor="middle" fill="var(--color-text-muted)" fontSize="9">Utilisateur</text>
              </g>
              
              {/* Inheritance arrow */}
              <line x1="160" y1="50" x2="110" y2="50" stroke="var(--color-info)" strokeWidth="1.5"/>
              <polygon points="110,50 120,45 120,55" fill="none" stroke="var(--color-info)" strokeWidth="1.5"/>
              
              {/* Child Actors */}
              <g>
                <circle cx="200" cy="25" r="8" fill="none" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
                <line x1="200" y1="33" x2="200" y2="48" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
                <line x1="188" y1="40" x2="212" y2="40" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
                <line x1="200" y1="48" x2="190" y2="60" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
                <line x1="200" y1="48" x2="210" y2="60" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
                <text x="200" y="75" textAnchor="middle" fill="var(--color-text-muted)" fontSize="9">Client</text>
              </g>
              
              <g>
                <circle cx="270" cy="25" r="8" fill="none" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
                <line x1="270" y1="33" x2="270" y2="48" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
                <line x1="258" y1="40" x2="282" y2="40" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
                <line x1="270" y1="48" x2="260" y2="60" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
                <line x1="270" y1="48" x2="280" y2="60" stroke="var(--color-text-secondary)" strokeWidth="1.5"/>
                <text x="270" y="75" textAnchor="middle" fill="var(--color-text-muted)" fontSize="9">Admin</text>
              </g>
              
              <line x1="160" y1="50" x2="200" y2="50" stroke="var(--color-info)" strokeWidth="1"/>
              <line x1="200" y1="50" x2="270" y2="50" stroke="var(--color-info)" strokeWidth="1"/>
            </svg>
          </div>
          <p className="relation-description">
            Un acteur ou cas d'utilisation <strong>hérite</strong> des caractéristiques 
            d'un autre plus général.
          </p>
        </div>
      </div>

      <div className="content-card highlight">
        <h3>📊 Tableau Récapitulatif</h3>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Relation</th>
              <th>Symbole</th>
              <th>Direction</th>
              <th>Signification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Association</td>
              <td>———</td>
              <td>Bidirectionnelle</td>
              <td>Participation simple</td>
            </tr>
            <tr>
              <td>Include</td>
              <td>- - - - ▶</td>
              <td>Base → Inclus</td>
              <td>Inclusion obligatoire</td>
            </tr>
            <tr>
              <td>Extend</td>
              <td>- - - - ▶</td>
              <td>Extension → Base</td>
              <td>Extension optionnelle</td>
            </tr>
            <tr>
              <td>Généralisation</td>
              <td>———▷</td>
              <td>Spécifique → Général</td>
              <td>Héritage</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="next-section-btn" onClick={onNext}>
        <span>Continuer vers Exemples Pratiques</span>
        <ArrowRight size={18} />
      </button>
    </article>
  );
}

function ExamplesSection({ expandedExample, setExpandedExample }) {
  const examples = [
    {
      id: 'banking',
      title: 'Système Bancaire (GAB)',
      description: 'Guichet Automatique Bancaire',
      actors: ['Client', 'Banque', 'Technicien'],
      useCases: ['Retirer argent', 'Consulter solde', 'Déposer argent', 'Imprimer relevé', 'S\'authentifier', 'Maintenance']
    },
    {
      id: 'library',
      title: 'Système de Bibliothèque',
      description: 'Gestion des emprunts de livres',
      actors: ['Abonné', 'Bibliothécaire', 'Système de rappel'],
      useCases: ['Emprunter livre', 'Rendre livre', 'Rechercher livre', 'Réserver livre', 'Gérer abonnés', 'Envoyer rappels']
    }
  ];

  return (
    <article className="content-section">
      <header className="section-header">
        <div className="section-badge">Exemples</div>
        <h1 className="section-title">Exemples Pratiques</h1>
        <p className="section-lead">
          Mettez en pratique vos connaissances avec ces exemples détaillés.
        </p>
      </header>

      <div className="examples-list">
        {examples.map(example => (
          <div 
            key={example.id} 
            className={`example-card ${expandedExample === example.id ? 'expanded' : ''}`}
          >
            <button 
              className="example-header"
              onClick={() => setExpandedExample(expandedExample === example.id ? null : example.id)}
            >
              <div className="example-info">
                <h3>{example.title}</h3>
                <p>{example.description}</p>
              </div>
              <ChevronRight 
                size={20} 
                className={`example-chevron ${expandedExample === example.id ? 'rotated' : ''}`} 
              />
            </button>
            
            {expandedExample === example.id && (
              <motion.div 
                className="example-content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div className="example-diagram">
                  <UseCaseDiagram variant={example.id} />
                </div>
                
                <div className="example-details">
                  <div className="detail-section">
                    <h4>👥 Acteurs identifiés</h4>
                    <div className="tags">
                      {example.actors.map(actor => (
                        <span key={actor} className="tag actor-tag">{actor}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="detail-section">
                    <h4>📋 Cas d'utilisation</h4>
                    <div className="tags">
                      {example.useCases.map(uc => (
                        <span key={uc} className="tag usecase-tag">{uc}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <div className="content-card success">
        <h3>🎉 Félicitations !</h3>
        <p>
          Vous avez terminé le chapitre sur les Diagrammes de Cas d'Utilisation. 
          Passez au quiz pour tester vos connaissances !
        </p>
      </div>
    </article>
  );
}
