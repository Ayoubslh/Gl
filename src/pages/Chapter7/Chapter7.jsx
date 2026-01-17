import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Play,
  Square,
  GitMerge,
  GitFork,
  Columns,
  ArrowRight,
  Circle,
  Diamond,
  Zap,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import './Chapter7.css';

const sections = [
  { id: 'intro', title: 'Introduction', icon: Activity },
  { id: 'nodes', title: 'Nœuds d\'Action', icon: Square },
  { id: 'control', title: 'Nœuds de Contrôle', icon: GitMerge },
  { id: 'swimlanes', title: 'Partitions', icon: Columns },
  { id: 'example', title: 'Exemple Complet', icon: Zap }
];

export default function Chapter7() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div className="chapter-page">
      <motion.div
        className="chapter-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="chapter-number">Chapitre 07</div>
        <h1>Diagramme d'Activité</h1>
        <p className="chapter-subtitle">
          Modélisation du flux de contrôle et des processus métier
        </p>
      </motion.div>

      <nav className="section-nav">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            <section.icon size={18} />
            <span>{section.title}</span>
          </button>
        ))}
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="section-content"
        >
          {activeSection === 'intro' && <IntroSection />}
          {activeSection === 'nodes' && <NodesSection />}
          {activeSection === 'control' && <ControlSection />}
          {activeSection === 'swimlanes' && <SwimlanesSection />}
          {activeSection === 'example' && <ExampleSection />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function IntroSection() {
  return (
    <div className="section">
      <h2>
        <Activity className="section-icon" />
        Qu'est-ce qu'un Diagramme d'Activité ?
      </h2>

      <div className="intro-card highlight">
        <p>
          Le <strong>diagramme d'activité</strong> modélise le comportement dynamique 
          d'un système en représentant le <strong>flux de contrôle</strong> entre 
          différentes actions. C'est l'équivalent UML des organigrammes (flowcharts).
        </p>
      </div>

      <h3>Applications</h3>

      <div className="applications-grid">
        <div className="app-card">
          <div className="app-icon">
            <Activity />
          </div>
          <h4>Processus Métier</h4>
          <p>Modéliser les workflows et processus d'entreprise</p>
        </div>

        <div className="app-card">
          <div className="app-icon">
            <Play />
          </div>
          <h4>Cas d'Utilisation</h4>
          <p>Détailler le déroulement interne d'un use case</p>
        </div>

        <div className="app-card">
          <div className="app-icon">
            <GitFork />
          </div>
          <h4>Algorithmes</h4>
          <p>Représenter la logique d'une opération complexe</p>
        </div>

        <div className="app-card">
          <div className="app-icon">
            <Columns />
          </div>
          <h4>Responsabilités</h4>
          <p>Répartir les actions entre différents acteurs</p>
        </div>
      </div>

      <h3>Caractéristiques</h3>

      <div className="characteristics-list">
        <div className="char-item">
          <CheckCircle2 className="char-icon" />
          <div>
            <strong>Flux séquentiel</strong> - Actions exécutées dans un ordre défini
          </div>
        </div>
        <div className="char-item">
          <CheckCircle2 className="char-icon" />
          <div>
            <strong>Branchements</strong> - Décisions et conditions alternatives
          </div>
        </div>
        <div className="char-item">
          <CheckCircle2 className="char-icon" />
          <div>
            <strong>Parallélisme</strong> - Exécution simultanée d'activités
          </div>
        </div>
        <div className="char-item">
          <CheckCircle2 className="char-icon" />
          <div>
            <strong>Partitions</strong> - Organisation par responsabilité (swimlanes)
          </div>
        </div>
      </div>
    </div>
  );
}

function NodesSection() {
  return (
    <div className="section">
      <h2>
        <Square className="section-icon" />
        Nœuds d'Action
      </h2>

      <p className="intro-text">
        Les <strong>nœuds d'action</strong> représentent les unités de travail 
        fondamentales dans un diagramme d'activité.
      </p>

      <div className="nodes-showcase">
        <div className="node-card">
          <div className="node-visual">
            <div className="action-node">
              <span>Traiter Commande</span>
            </div>
          </div>
          <div className="node-info">
            <h4>Action</h4>
            <p>
              Rectangle arrondi représentant une tâche atomique. 
              Une action ne peut pas être décomposée davantage.
            </p>
            <div className="node-examples">
              <span>Vérifier stock</span>
              <span>Calculer total</span>
              <span>Envoyer email</span>
            </div>
          </div>
        </div>

        <div className="node-card">
          <div className="node-visual">
            <div className="call-behavior-node">
              <div className="rake-symbol">⊏⊐</div>
              <span>Valider Paiement</span>
            </div>
          </div>
          <div className="node-info">
            <h4>Appel de Comportement</h4>
            <p>
              Action qui appelle une autre activité ou comportement.
              Le symbole "fourche" indique un sous-diagramme.
            </p>
            <div className="node-examples">
              <span>Appel d'une sous-activité</span>
              <span>Réutilisation de processus</span>
            </div>
          </div>
        </div>

        <div className="node-card">
          <div className="node-visual">
            <div className="object-node">
              <span>[Commande]</span>
            </div>
          </div>
          <div className="node-info">
            <h4>Nœud Objet</h4>
            <p>
              Rectangle représentant un objet manipulé par les actions.
              Montre le flux de données (pas seulement le contrôle).
            </p>
            <div className="node-examples">
              <span>[Facture créée]</span>
              <span>[Dossier validé]</span>
            </div>
          </div>
        </div>

        <div className="node-card">
          <div className="node-visual">
            <div className="signal-nodes">
              <div className="send-signal">▷</div>
              <div className="receive-signal">◁</div>
            </div>
          </div>
          <div className="node-info">
            <h4>Signaux</h4>
            <p>
              <strong>Émission</strong> (flèche sortante) : envoie un signal<br />
              <strong>Réception</strong> (flèche entrante) : attend un signal
            </p>
            <div className="node-examples">
              <span>Événement externe</span>
              <span>Communication asynchrone</span>
            </div>
          </div>
        </div>
      </div>

      <h3>Flux et Transitions</h3>

      <div className="flow-types">
        <div className="flow-card">
          <div className="flow-visual">
            <div className="mini-action">A</div>
            <div className="control-flow">→</div>
            <div className="mini-action">B</div>
          </div>
          <div>
            <h4>Flux de Contrôle</h4>
            <p>Flèche simple montrant l'ordre d'exécution</p>
          </div>
        </div>

        <div className="flow-card">
          <div className="flow-visual">
            <div className="mini-action">A</div>
            <div className="object-flow">
              <span>[Objet]</span>
              <div className="flow-arrow">→</div>
            </div>
            <div className="mini-action">B</div>
          </div>
          <div>
            <h4>Flux d'Objet</h4>
            <p>Passage de données entre actions via un objet</p>
          </div>
        </div>

        <div className="flow-card">
          <div className="flow-visual">
            <div className="guarded-flow">
              <span>[condition]</span>
              <div className="flow-arrow">→</div>
            </div>
          </div>
          <div>
            <h4>Garde</h4>
            <p>Condition qui doit être vraie pour franchir la transition</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ControlSection() {
  return (
    <div className="section">
      <h2>
        <GitMerge className="section-icon" />
        Nœuds de Contrôle
      </h2>

      <p className="intro-text">
        Les <strong>nœuds de contrôle</strong> gèrent le flux d'exécution : 
        démarrage, arrêt, branchements et synchronisation.
      </p>

      <div className="control-nodes-grid">
        <div className="control-card">
          <div className="control-visual">
            <div className="initial-node"></div>
          </div>
          <h4>Nœud Initial</h4>
          <p>Point de départ de l'activité. Un seul par diagramme (ou partition).</p>
        </div>

        <div className="control-card">
          <div className="control-visual">
            <div className="final-node">
              <div className="final-inner"></div>
            </div>
          </div>
          <h4>Nœud Final</h4>
          <p>Termine l'ensemble de l'activité. Arrête tous les flux.</p>
        </div>

        <div className="control-card">
          <div className="control-visual">
            <div className="flow-final-node">✕</div>
          </div>
          <h4>Fin de Flux</h4>
          <p>Termine uniquement ce flux, les autres continuent.</p>
        </div>

        <div className="control-card decision">
          <div className="control-visual">
            <div className="decision-node">◇</div>
          </div>
          <h4>Décision</h4>
          <p>Branchement conditionnel. Une entrée, plusieurs sorties avec gardes.</p>
        </div>

        <div className="control-card merge">
          <div className="control-visual">
            <div className="merge-node">◇</div>
          </div>
          <h4>Fusion (Merge)</h4>
          <p>Réunit plusieurs flux alternatifs. Plusieurs entrées, une sortie.</p>
        </div>

        <div className="control-card fork">
          <div className="control-visual">
            <div className="fork-node"></div>
          </div>
          <h4>Fork (Bifurcation)</h4>
          <p>Divise le flux en branches parallèles. Une entrée, plusieurs sorties simultanées.</p>
        </div>

        <div className="control-card join">
          <div className="control-visual">
            <div className="join-node"></div>
          </div>
          <h4>Join (Synchronisation)</h4>
          <p>Attend que tous les flux parallèles soient terminés. Plusieurs entrées, une sortie.</p>
        </div>
      </div>

      <h3>Décision vs Fusion</h3>

      <div className="comparison-box">
        <div className="comp-side">
          <h4>Décision (Decision)</h4>
          <div className="comp-diagram">
            <div className="comp-flow-in">→</div>
            <div className="decision-node">◇</div>
            <div className="comp-flow-out">
              <span>[oui] →</span>
              <span>[non] →</span>
            </div>
          </div>
          <p>Choisit UN seul chemin parmi plusieurs (OU exclusif)</p>
        </div>

        <div className="comp-divider"></div>

        <div className="comp-side">
          <h4>Fusion (Merge)</h4>
          <div className="comp-diagram">
            <div className="comp-flow-in multiple">
              <span>→</span>
              <span>→</span>
            </div>
            <div className="decision-node">◇</div>
            <div className="comp-flow-out single">→</div>
          </div>
          <p>Regroupe des chemins alternatifs (pas d'attente)</p>
        </div>
      </div>

      <h3>Fork vs Join</h3>

      <div className="comparison-box">
        <div className="comp-side">
          <h4>Fork (Parallélisme)</h4>
          <div className="comp-diagram vertical">
            <div className="comp-flow-in">↓</div>
            <div className="bar-node"></div>
            <div className="comp-flow-out parallel">
              <span>↓</span>
              <span>↓</span>
              <span>↓</span>
            </div>
          </div>
          <p>Lance plusieurs activités EN MÊME TEMPS (ET)</p>
        </div>

        <div className="comp-divider"></div>

        <div className="comp-side">
          <h4>Join (Synchronisation)</h4>
          <div className="comp-diagram vertical">
            <div className="comp-flow-in parallel">
              <span>↓</span>
              <span>↓</span>
              <span>↓</span>
            </div>
            <div className="bar-node"></div>
            <div className="comp-flow-out single">↓</div>
          </div>
          <p>Attend que TOUTES les branches soient terminées</p>
        </div>
      </div>
    </div>
  );
}

function SwimlanesSection() {
  return (
    <div className="section">
      <h2>
        <Columns className="section-icon" />
        Partitions (Swimlanes)
      </h2>

      <div className="intro-card highlight">
        <p>
          Les <strong>partitions</strong> (ou swimlanes) organisent les actions par 
          <strong> responsabilité</strong>. Chaque colonne/ligne représente un acteur, 
          un système ou un département responsable des actions qu'elle contient.
        </p>
      </div>

      <h3>Représentation</h3>

      <div className="swimlane-demo">
        <div className="swimlane-container">
          <div className="swimlane">
            <div className="swimlane-header">Client</div>
            <div className="swimlane-content">
              <div className="demo-action">Passer commande</div>
              <div className="demo-action">Effectuer paiement</div>
            </div>
          </div>
          <div className="swimlane">
            <div className="swimlane-header">Système</div>
            <div className="swimlane-content">
              <div className="demo-action">Vérifier stock</div>
              <div className="demo-action">Calculer total</div>
              <div className="demo-action">Générer facture</div>
            </div>
          </div>
          <div className="swimlane">
            <div className="swimlane-header">Entrepôt</div>
            <div className="swimlane-content">
              <div className="demo-action">Préparer colis</div>
              <div className="demo-action">Expédier</div>
            </div>
          </div>
        </div>
      </div>

      <h3>Utilité des Partitions</h3>

      <div className="benefits-list">
        <div className="benefit-item">
          <ChevronRight className="benefit-icon" />
          <div>
            <strong>Clarté</strong> : Visualise qui fait quoi dans le processus
          </div>
        </div>
        <div className="benefit-item">
          <ChevronRight className="benefit-icon" />
          <div>
            <strong>Responsabilité</strong> : Identifie le responsable de chaque action
          </div>
        </div>
        <div className="benefit-item">
          <ChevronRight className="benefit-icon" />
          <div>
            <strong>Coordination</strong> : Montre les interactions entre acteurs
          </div>
        </div>
        <div className="benefit-item">
          <ChevronRight className="benefit-icon" />
          <div>
            <strong>Optimisation</strong> : Détecte les goulots d'étranglement et transferts excessifs
          </div>
        </div>
      </div>

      <h3>Partitions Multidimensionnelles</h3>

      <div className="multidim-demo">
        <div className="multidim-grid">
          <div className="dim-header row-header"></div>
          <div className="dim-header col-header">Service Client</div>
          <div className="dim-header col-header">Service Technique</div>

          <div className="dim-header row-header">Niveau 1</div>
          <div className="dim-cell">Recevoir appel</div>
          <div className="dim-cell">Diagnostic initial</div>

          <div className="dim-header row-header">Niveau 2</div>
          <div className="dim-cell">Escalader ticket</div>
          <div className="dim-cell">Résoudre problème</div>
        </div>
        <p className="dim-note">
          Les partitions peuvent être bidimensionnelles pour croiser deux critères 
          (ex: département × niveau hiérarchique)
        </p>
      </div>
    </div>
  );
}

function ExampleSection() {
  return (
    <div className="section">
      <h2>
        <Zap className="section-icon" />
        Exemple : Processus de Commande
      </h2>

      <p className="intro-text">
        Voici un exemple complet de diagramme d'activité modélisant le processus 
        de traitement d'une commande en ligne.
      </p>

      <div className="activity-diagram">
        <div className="ad-header">
          <span className="ad-title">act Traitement Commande</span>
        </div>

        <div className="ad-content">
          <div className="ad-swimlanes">
            <div className="ad-swimlane">
              <div className="ad-lane-header">Client</div>
              <div className="ad-lane-content">
                <div className="ad-initial"></div>
                <div className="ad-arrow">↓</div>
                <div className="ad-action">Sélectionner produits</div>
                <div className="ad-arrow">↓</div>
                <div className="ad-action">Valider panier</div>
              </div>
            </div>

            <div className="ad-swimlane">
              <div className="ad-lane-header">Système</div>
              <div className="ad-lane-content">
                <div className="ad-spacer"></div>
                <div className="ad-arrow from-left">←</div>
                <div className="ad-action">Vérifier disponibilité</div>
                <div className="ad-arrow">↓</div>
                <div className="ad-decision">◇</div>
                <div className="ad-branches">
                  <div className="ad-branch">
                    <span className="guard">[disponible]</span>
                    <div className="ad-action">Calculer total</div>
                  </div>
                  <div className="ad-branch alt">
                    <span className="guard">[indisponible]</span>
                    <div className="ad-action">Notifier rupture</div>
                    <div className="ad-flow-final">⊗</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ad-swimlane">
              <div className="ad-lane-header">Paiement</div>
              <div className="ad-lane-content">
                <div className="ad-spacer large"></div>
                <div className="ad-arrow from-left">←</div>
                <div className="ad-action">Traiter paiement</div>
                <div className="ad-arrow">↓</div>
                <div className="ad-decision">◇</div>
                <div className="ad-branches">
                  <div className="ad-branch">
                    <span className="guard">[accepté]</span>
                    <div className="ad-arrow to-right">→</div>
                  </div>
                  <div className="ad-branch alt">
                    <span className="guard">[refusé]</span>
                    <div className="ad-action small">Notifier échec</div>
                    <div className="ad-flow-final">⊗</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ad-swimlane">
              <div className="ad-lane-header">Logistique</div>
              <div className="ad-lane-content">
                <div className="ad-spacer xlarge"></div>
                <div className="ad-arrow from-left">←</div>
                <div className="ad-fork"></div>
                <div className="ad-parallel">
                  <div className="ad-action small">Préparer colis</div>
                  <div className="ad-action small">Générer facture</div>
                </div>
                <div className="ad-join"></div>
                <div className="ad-arrow">↓</div>
                <div className="ad-action">Expédier</div>
                <div className="ad-arrow">↓</div>
                <div className="ad-final">
                  <div className="ad-final-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>Éléments Utilisés</h3>

      <div className="elements-summary">
        <div className="element-item">
          <div className="element-symbol initial"></div>
          <span>Nœud initial - Début du processus</span>
        </div>
        <div className="element-item">
          <div className="element-symbol action">Action</div>
          <span>Actions - Tâches exécutées</span>
        </div>
        <div className="element-item">
          <div className="element-symbol decision">◇</div>
          <span>Décisions - Branchements conditionnels</span>
        </div>
        <div className="element-item">
          <div className="element-symbol fork"></div>
          <span>Fork/Join - Parallélisme</span>
        </div>
        <div className="element-item">
          <div className="element-symbol flow-end">⊗</div>
          <span>Fin de flux - Termine une branche</span>
        </div>
        <div className="element-item">
          <div className="element-symbol final">
            <div className="final-inner"></div>
          </div>
          <span>Nœud final - Fin de l'activité</span>
        </div>
      </div>

      <h3>Conseils de Modélisation</h3>

      <div className="tips-list">
        <div className="tip-item">
          <span className="tip-number">1</span>
          <p>Commencez par identifier le point de départ et les conditions de fin</p>
        </div>
        <div className="tip-item">
          <span className="tip-number">2</span>
          <p>Listez toutes les actions principales du processus</p>
        </div>
        <div className="tip-item">
          <span className="tip-number">3</span>
          <p>Identifiez les décisions et leurs conditions (gardes)</p>
        </div>
        <div className="tip-item">
          <span className="tip-number">4</span>
          <p>Détectez les activités parallèles (fork/join)</p>
        </div>
        <div className="tip-item">
          <span className="tip-number">5</span>
          <p>Organisez par swimlanes si plusieurs acteurs sont impliqués</p>
        </div>
      </div>
    </div>
  );
}
