import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Circle, Square, ArrowRight, Play, ChevronDown, 
  ChevronRight, Lightbulb, GitBranch, RotateCcw, Timer,
  Zap, Target, CheckCircle2, XCircle, AlertCircle
} from 'lucide-react';
import './Chapter8.css';

const Chapter8 = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const sections = [
    { id: 'intro', label: 'Introduction', icon: BookOpen },
    { id: 'elements', label: 'Éléments', icon: Circle },
    { id: 'transitions', label: 'Transitions', icon: ArrowRight },
    { id: 'examples', label: 'Exemples', icon: Play },
    { id: 'composite', label: 'États Composites', icon: GitBranch }
  ];

  const stateElements = [
    {
      name: 'État (State)',
      symbol: 'rectangle-rounded',
      description: 'Situation dans laquelle un objet satisfait une condition, exécute une activité ou attend un événement',
      color: '#6366f1'
    },
    {
      name: 'État Initial',
      symbol: 'circle-filled',
      description: 'Point de départ du diagramme, représenté par un cercle plein noir',
      color: '#10b981'
    },
    {
      name: 'État Final',
      symbol: 'circle-target',
      description: 'Point d\'arrivée du diagramme, représenté par un cercle avec un point central',
      color: '#ef4444'
    },
    {
      name: 'Transition',
      symbol: 'arrow',
      description: 'Passage d\'un état à un autre, déclenché par un événement',
      color: '#f59e0b'
    }
  ];

  const transitionComponents = [
    {
      name: 'Événement (Event)',
      description: 'Stimulus qui déclenche la transition',
      example: 'clic(), timeout, messageReçu',
      icon: Zap
    },
    {
      name: 'Garde (Guard)',
      description: 'Condition booléenne qui doit être vraie pour que la transition se déclenche',
      example: '[solde > 0], [estValide]',
      icon: Target
    },
    {
      name: 'Action',
      description: 'Opération exécutée lors de la transition',
      example: '/ afficherMessage(), / enregistrer()',
      icon: Play
    }
  ];

  const stateActions = [
    { type: 'entry', description: 'Action exécutée à l\'entrée dans l\'état', example: 'entry / initialiser()' },
    { type: 'do', description: 'Activité continue pendant que l\'objet est dans l\'état', example: 'do / traiter()' },
    { type: 'exit', description: 'Action exécutée à la sortie de l\'état', example: 'exit / nettoyer()' }
  ];

  return (
    <div className="chapter-page">
      <motion.div 
        className="chapter-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="chapter-number">Chapitre 08</div>
        <h1>Diagramme d'États (State Diagram)</h1>
        <p className="chapter-subtitle">
          Modélisation du comportement dynamique des objets à travers leurs états
        </p>
      </motion.div>

      <div className="section-nav">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`section-btn ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            <section.icon size={18} />
            <span>{section.label}</span>
          </button>
        ))}
      </div>

      <div className="chapter-content">
        <AnimatePresence mode="wait">
          {activeSection === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="content-section"
            >
              <div className="intro-hero">
                <div className="hero-icon">
                  <RotateCcw size={48} />
                </div>
                <h2>Qu'est-ce qu'un Diagramme d'États?</h2>
                <p>
                  Un diagramme d'états (ou statechart) décrit le comportement 
                  d'un objet en montrant les différents états qu'il peut prendre 
                  et les transitions entre ces états.
                </p>
              </div>

              <div className="key-points">
                <h3>Points Clés</h3>
                <div className="points-grid">
                  <div className="point-card">
                    <div className="point-icon" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
                      <Circle size={24} />
                    </div>
                    <h4>États</h4>
                    <p>Situations stables dans lesquelles un objet peut se trouver</p>
                  </div>
                  <div className="point-card">
                    <div className="point-icon" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                      <ArrowRight size={24} />
                    </div>
                    <h4>Transitions</h4>
                    <p>Passages d'un état à un autre déclenchés par des événements</p>
                  </div>
                  <div className="point-card">
                    <div className="point-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                      <Zap size={24} />
                    </div>
                    <h4>Événements</h4>
                    <p>Stimuli qui provoquent les changements d'état</p>
                  </div>
                </div>
              </div>

              <div className="definition-box">
                <Lightbulb size={24} />
                <div>
                  <h4>Utilisation</h4>
                  <p>
                    Le diagramme d'états est utilisé pour modéliser le cycle de vie 
                    des objets complexes, les protocoles de communication, les interfaces 
                    utilisateur, et tout système réactif.
                  </p>
                </div>
              </div>

              <div className="when-to-use">
                <h3>Quand Utiliser un Diagramme d'États?</h3>
                <div className="use-cases">
                  <div className="use-case">
                    <CheckCircle2 size={20} />
                    <span>Objets avec comportement dépendant de l'historique</span>
                  </div>
                  <div className="use-case">
                    <CheckCircle2 size={20} />
                    <span>Systèmes réactifs et temps réel</span>
                  </div>
                  <div className="use-case">
                    <CheckCircle2 size={20} />
                    <span>Interfaces utilisateur complexes</span>
                  </div>
                  <div className="use-case">
                    <CheckCircle2 size={20} />
                    <span>Protocoles de communication</span>
                  </div>
                  <div className="use-case">
                    <CheckCircle2 size={20} />
                    <span>Workflows et processus métier</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'elements' && (
            <motion.div
              key="elements"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="content-section"
            >
              <h2>Éléments du Diagramme d'États</h2>

              <div className="elements-grid">
                {stateElements.map((element, index) => (
                  <motion.div
                    key={element.name}
                    className="element-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="element-symbol" style={{ borderColor: element.color }}>
                      {element.symbol === 'rectangle-rounded' && (
                        <div className="symbol-state">État</div>
                      )}
                      {element.symbol === 'circle-filled' && (
                        <div className="symbol-initial"></div>
                      )}
                      {element.symbol === 'circle-target' && (
                        <div className="symbol-final">
                          <div className="final-inner"></div>
                        </div>
                      )}
                      {element.symbol === 'arrow' && (
                        <div className="symbol-arrow">
                          <div className="arrow-line"></div>
                          <div className="arrow-head"></div>
                        </div>
                      )}
                    </div>
                    <h4 style={{ color: element.color }}>{element.name}</h4>
                    <p>{element.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="state-anatomy">
                <h3>Anatomie d'un État</h3>
                <div className="anatomy-diagram">
                  <div className="state-box">
                    <div className="state-name">NomÉtat</div>
                    <div className="state-separator"></div>
                    <div className="state-actions">
                      <div className="state-action">entry / actionEntrée()</div>
                      <div className="state-action">do / activité()</div>
                      <div className="state-action">exit / actionSortie()</div>
                    </div>
                  </div>
                </div>

                <div className="actions-explanation">
                  {stateActions.map((action, index) => (
                    <div key={action.type} className="action-item">
                      <div className="action-type">{action.type}</div>
                      <div className="action-details">
                        <p>{action.description}</p>
                        <code>{action.example}</code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'transitions' && (
            <motion.div
              key="transitions"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="content-section"
            >
              <h2>Transitions</h2>

              <div className="transition-syntax">
                <h3>Syntaxe d'une Transition</h3>
                <div className="syntax-box">
                  <code>événement [garde] / action</code>
                </div>
                <p className="syntax-note">
                  Tous les éléments sont optionnels. Une transition peut être 
                  déclenchée automatiquement (transition de complétion).
                </p>
              </div>

              <div className="transition-components">
                <h3>Composants d'une Transition</h3>
                <div className="components-grid">
                  {transitionComponents.map((comp, index) => (
                    <motion.div
                      key={comp.name}
                      className="component-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <comp.icon size={28} className="component-icon" />
                      <h4>{comp.name}</h4>
                      <p>{comp.description}</p>
                      <code>{comp.example}</code>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="transition-types">
                <h3>Types de Transitions</h3>
                <div className="types-grid">
                  <div className="type-card">
                    <h4>Transition Externe</h4>
                    <p>Provoque la sortie de l'état source et l'entrée dans l'état cible</p>
                    <div className="type-diagram">
                      <div className="mini-state">A</div>
                      <div className="mini-arrow">→</div>
                      <div className="mini-state">B</div>
                    </div>
                  </div>
                  <div className="type-card">
                    <h4>Transition Interne</h4>
                    <p>Reste dans le même état sans exécuter entry/exit</p>
                    <div className="type-diagram">
                      <div className="mini-state self">
                        A
                        <div className="self-loop">↺</div>
                      </div>
                    </div>
                  </div>
                  <div className="type-card">
                    <h4>Auto-transition</h4>
                    <p>Sort et rentre dans le même état (exécute entry/exit)</p>
                    <div className="type-diagram">
                      <div className="mini-state">A</div>
                      <div className="mini-arrow curved">↻</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'examples' && (
            <motion.div
              key="examples"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="content-section"
            >
              <h2>Exemples de Diagrammes d'États</h2>

              {/* Example 1: Order */}
              <div className="example-section">
                <h3>Exemple 1: Cycle de vie d'une Commande</h3>
                <div className="state-diagram">
                  <div className="diagram-flow">
                    <div className="initial-node"></div>
                    <div className="diagram-arrow">
                      <span>créer()</span>
                    </div>
                    <div className="state-node">
                      <div className="state-title">Créée</div>
                    </div>
                    <div className="diagram-arrow">
                      <span>valider()</span>
                    </div>
                    <div className="state-node">
                      <div className="state-title">Validée</div>
                    </div>
                    <div className="diagram-arrow">
                      <span>payer()</span>
                    </div>
                    <div className="state-node">
                      <div className="state-title">Payée</div>
                    </div>
                    <div className="diagram-arrow">
                      <span>expédier()</span>
                    </div>
                    <div className="state-node">
                      <div className="state-title">Expédiée</div>
                    </div>
                    <div className="diagram-arrow">
                      <span>livrer()</span>
                    </div>
                    <div className="state-node final-state">
                      <div className="state-title">Livrée</div>
                    </div>
                  </div>
                  <div className="cancel-path">
                    <div className="cancel-arrow">
                      <span>annuler()</span>
                    </div>
                    <div className="state-node error">
                      <div className="state-title">Annulée</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Example 2: Phone Call */}
              <div className="example-section">
                <h3>Exemple 2: Appel Téléphonique</h3>
                <div className="phone-diagram">
                  <div className="phone-states">
                    <div className="phone-state idle">
                      <span>Inactif</span>
                    </div>
                    <div className="phone-arrows">
                      <div className="arrow-label top">décrocher()</div>
                      <div className="arrow-label bottom">raccrocher()</div>
                    </div>
                    <div className="phone-state active">
                      <span>Tonalité</span>
                    </div>
                    <div className="phone-arrows">
                      <div className="arrow-label top">composer(numéro)</div>
                    </div>
                    <div className="phone-state active">
                      <span>Numérotation</span>
                    </div>
                    <div className="phone-arrows split">
                      <div className="arrow-label top">[occupé]</div>
                      <div className="arrow-label bottom">[disponible]</div>
                    </div>
                    <div className="phone-outcomes">
                      <div className="phone-state error">Occupé</div>
                      <div className="phone-state success">Connecté</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Example 3: Door */}
              <div className="example-section">
                <h3>Exemple 3: Porte Automatique</h3>
                <div className="door-diagram">
                  <div className="door-container">
                    <div className="door-state closed">
                      <span>Fermée</span>
                      <div className="door-action">entry / verrouiller()</div>
                    </div>
                    <div className="door-transition opening">
                      <span>ouvrir() [!bloquée]</span>
                    </div>
                    <div className="door-state opening-state">
                      <span>Ouverture</span>
                      <div className="door-action">do / actionnerMoteur()</div>
                    </div>
                    <div className="door-transition">
                      <span>finOuverture</span>
                    </div>
                    <div className="door-state open">
                      <span>Ouverte</span>
                      <div className="door-action">entry / démarrerTimer()</div>
                    </div>
                    <div className="door-transition closing">
                      <span>timeout / fermer()</span>
                    </div>
                    <div className="door-state closing-state">
                      <span>Fermeture</span>
                      <div className="door-action">do / actionnerMoteur()</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'composite' && (
            <motion.div
              key="composite"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="content-section"
            >
              <h2>États Composites</h2>

              <div className="definition-box">
                <GitBranch size={24} />
                <div>
                  <h4>Définition</h4>
                  <p>
                    Un état composite (ou état hiérarchique) contient d'autres états 
                    à l'intérieur. Il permet de décomposer un comportement complexe 
                    en sous-comportements.
                  </p>
                </div>
              </div>

              <div className="composite-types">
                <h3>Types d'États Composites</h3>
                <div className="composite-grid">
                  <div className="composite-card">
                    <h4>État Séquentiel (OR)</h4>
                    <p>L'objet est dans un seul sous-état à la fois</p>
                    <div className="composite-diagram or">
                      <div className="composite-container">
                        <div className="composite-title">État Composite</div>
                        <div className="composite-substates">
                          <div className="substate active">A</div>
                          <div className="substate-arrow">→</div>
                          <div className="substate">B</div>
                          <div className="substate-arrow">→</div>
                          <div className="substate">C</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="composite-card">
                    <h4>État Concurrent (AND)</h4>
                    <p>L'objet est dans plusieurs sous-états simultanément</p>
                    <div className="composite-diagram and">
                      <div className="composite-container">
                        <div className="composite-title">État Composite</div>
                        <div className="concurrent-regions">
                          <div className="region">
                            <div className="region-label">Région 1</div>
                            <div className="substate active">X</div>
                          </div>
                          <div className="region-separator"></div>
                          <div className="region">
                            <div className="region-label">Région 2</div>
                            <div className="substate active">Y</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="history-states">
                <h3>États Historiques</h3>
                <div className="history-grid">
                  <div className="history-card">
                    <div className="history-symbol">H</div>
                    <h4>Historique Superficiel</h4>
                    <p>Mémorise le dernier sous-état actif au niveau supérieur</p>
                  </div>
                  <div className="history-card">
                    <div className="history-symbol">H*</div>
                    <h4>Historique Profond</h4>
                    <p>Mémorise l'état complet incluant tous les niveaux de profondeur</p>
                  </div>
                </div>
              </div>

              <div className="special-nodes">
                <h3>Pseudo-états Spéciaux</h3>
                <div className="nodes-grid">
                  <div className="node-item">
                    <div className="node-symbol fork">
                      <div className="fork-bar"></div>
                    </div>
                    <div className="node-info">
                      <h4>Fork (Bifurcation)</h4>
                      <p>Divise une transition en plusieurs transitions parallèles</p>
                    </div>
                  </div>
                  <div className="node-item">
                    <div className="node-symbol join">
                      <div className="join-bar"></div>
                    </div>
                    <div className="node-info">
                      <h4>Join (Jonction)</h4>
                      <p>Synchronise plusieurs transitions parallèles</p>
                    </div>
                  </div>
                  <div className="node-item">
                    <div className="node-symbol choice">◇</div>
                    <div className="node-info">
                      <h4>Choice (Choix)</h4>
                      <p>Point de décision dynamique basé sur les gardes</p>
                    </div>
                  </div>
                  <div className="node-item">
                    <div className="node-symbol junction">●</div>
                    <div className="node-info">
                      <h4>Junction</h4>
                      <p>Point de connexion statique pour simplifier les transitions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tips-section">
                <h3>Bonnes Pratiques</h3>
                <div className="tips-list">
                  <div className="tip-item">
                    <CheckCircle2 size={20} />
                    <span>Nommer les états avec des adjectifs ou participes passés (Ouvert, Validé)</span>
                  </div>
                  <div className="tip-item">
                    <CheckCircle2 size={20} />
                    <span>Garder le diagramme simple et lisible</span>
                  </div>
                  <div className="tip-item">
                    <CheckCircle2 size={20} />
                    <span>Utiliser les états composites pour gérer la complexité</span>
                  </div>
                  <div className="tip-item">
                    <CheckCircle2 size={20} />
                    <span>Documenter les gardes et actions complexes</span>
                  </div>
                  <div className="tip-item">
                    <XCircle size={20} className="warning" />
                    <span>Éviter trop de transitions croisées</span>
                  </div>
                  <div className="tip-item">
                    <XCircle size={20} className="warning" />
                    <span>Ne pas oublier les états d'erreur et les cas limites</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Chapter8;
