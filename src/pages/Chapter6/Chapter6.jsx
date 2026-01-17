import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GitBranch,
  MessageSquare,
  ArrowRight,
  ArrowLeftRight,
  Clock,
  Repeat,
  HelpCircle,
  AlertTriangle,
  Zap,
  ChevronRight,
  CheckCircle2,
  Users,
  Box,
  LifeBuoy
} from 'lucide-react';
import './Chapter6.css';

const sections = [
  { id: 'intro', title: 'Introduction', icon: GitBranch },
  { id: 'elements', title: 'Éléments de Base', icon: Box },
  { id: 'messages', title: 'Types de Messages', icon: MessageSquare },
  { id: 'fragments', title: 'Fragments Combinés', icon: Repeat },
  { id: 'example', title: 'Exemple Complet', icon: Zap }
];

export default function Chapter6() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div className="chapter-page">
      <motion.div
        className="chapter-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="chapter-number">Chapitre 06</div>
        <h1>Diagramme de Séquence</h1>
        <p className="chapter-subtitle">
          Modélisation des interactions temporelles entre objets
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
          {activeSection === 'elements' && <ElementsSection />}
          {activeSection === 'messages' && <MessagesSection />}
          {activeSection === 'fragments' && <FragmentsSection />}
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
        <GitBranch className="section-icon" />
        Qu'est-ce qu'un Diagramme de Séquence ?
      </h2>

      <div className="intro-card highlight">
        <p>
          Le <strong>diagramme de séquence</strong> est un diagramme d'interaction qui 
          montre comment les objets communiquent entre eux dans le temps. Il met l'accent 
          sur l'<strong>ordre chronologique</strong> des messages échangés.
        </p>
      </div>

      <h3>Caractéristiques Principales</h3>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <Clock />
          </div>
          <h4>Axe Temporel</h4>
          <p>Le temps s'écoule de haut en bas. Les messages sont ordonnés chronologiquement.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <Users />
          </div>
          <h4>Participants</h4>
          <p>Acteurs et objets représentés par des lignes de vie verticales.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <MessageSquare />
          </div>
          <h4>Messages</h4>
          <p>Flèches horizontales représentant les communications entre participants.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <ArrowLeftRight />
          </div>
          <h4>Interactions</h4>
          <p>Décrit un scénario d'exécution d'un cas d'utilisation.</p>
        </div>
      </div>

      <h3>Quand Utiliser ?</h3>

      <div className="use-cases-list">
        <div className="use-case-item">
          <CheckCircle2 className="check-icon" />
          <span>Détailler le déroulement d'un cas d'utilisation</span>
        </div>
        <div className="use-case-item">
          <CheckCircle2 className="check-icon" />
          <span>Comprendre l'enchaînement des appels de méthodes</span>
        </div>
        <div className="use-case-item">
          <CheckCircle2 className="check-icon" />
          <span>Documenter les protocoles de communication</span>
        </div>
        <div className="use-case-item">
          <CheckCircle2 className="check-icon" />
          <span>Valider la conception d'une fonctionnalité</span>
        </div>
      </div>
    </div>
  );
}

function ElementsSection() {
  return (
    <div className="section">
      <h2>
        <Box className="section-icon" />
        Éléments de Base
      </h2>

      <h3>1. Ligne de Vie (Lifeline)</h3>

      <div className="element-showcase">
        <div className="lifeline-demo">
          <div className="participant">
            <div className="participant-box">
              <span className="underlined">:Client</span>
            </div>
            <div className="lifeline-line"></div>
          </div>

          <div className="participant actor">
            <div className="actor-symbol">
              <div className="actor-head"></div>
              <div className="actor-body"></div>
              <div className="actor-arms"></div>
              <div className="actor-legs"></div>
            </div>
            <span className="actor-name">Utilisateur</span>
            <div className="lifeline-line"></div>
          </div>
        </div>

        <div className="element-explanation">
          <p>Une <strong>ligne de vie</strong> représente un participant à l'interaction :</p>
          <ul>
            <li><strong>Rectangle</strong> : Objet ou instance (nom souligné)</li>
            <li><strong>Bonhomme</strong> : Acteur du système</li>
            <li><strong>Ligne pointillée</strong> : Durée d'existence dans le scénario</li>
          </ul>
          <div className="notation-hint">
            <code>:NomClasse</code> - Instance anonyme<br />
            <code>nomObjet:NomClasse</code> - Instance nommée
          </div>
        </div>
      </div>

      <h3>2. Barre d'Activation</h3>

      <div className="activation-demo">
        <div className="activation-visual">
          <div className="participant">
            <div className="participant-box">
              <span className="underlined">:Service</span>
            </div>
            <div className="lifeline-with-activation">
              <div className="lifeline-segment"></div>
              <div className="activation-bar"></div>
              <div className="lifeline-segment"></div>
            </div>
          </div>
        </div>

        <div className="activation-info">
          <h4>Focus de Contrôle</h4>
          <p>
            La <strong>barre d'activation</strong> (rectangle vertical) indique 
            la période pendant laquelle l'objet exécute une opération.
          </p>
          <ul>
            <li>Début : réception d'un message</li>
            <li>Fin : retour du message ou fin d'exécution</li>
            <li>Emboîtement : appel récursif ou auto-délégation</li>
          </ul>
        </div>
      </div>

      <h3>3. Symboles de Terminaison</h3>

      <div className="termination-symbols">
        <div className="symbol-card">
          <div className="destruction-symbol">✕</div>
          <h4>Destruction</h4>
          <p>L'objet est détruit et n'existe plus après ce point</p>
        </div>

        <div className="symbol-card">
          <div className="found-symbol">●→</div>
          <h4>Message Trouvé</h4>
          <p>Message dont l'émetteur est inconnu ou hors du diagramme</p>
        </div>

        <div className="symbol-card">
          <div className="lost-symbol">→●</div>
          <h4>Message Perdu</h4>
          <p>Message dont le destinataire est inconnu</p>
        </div>
      </div>
    </div>
  );
}

function MessagesSection() {
  return (
    <div className="section">
      <h2>
        <MessageSquare className="section-icon" />
        Types de Messages
      </h2>

      <div className="messages-showcase">
        <div className="message-type">
          <div className="message-visual">
            <div className="msg-line sync">
              <div className="msg-arrow filled"></div>
            </div>
          </div>
          <div className="message-info">
            <h4>Message Synchrone</h4>
            <p>
              L'émetteur attend la réponse avant de continuer. 
              Représenté par une flèche avec pointe <strong>pleine</strong>.
            </p>
            <code>objetA → objetB : méthode()</code>
          </div>
        </div>

        <div className="message-type">
          <div className="message-visual">
            <div className="msg-line async">
              <div className="msg-arrow open"></div>
            </div>
          </div>
          <div className="message-info">
            <h4>Message Asynchrone</h4>
            <p>
              L'émetteur continue sans attendre. 
              Représenté par une flèche avec pointe <strong>ouverte</strong>.
            </p>
            <code>objetA → objetB : signal</code>
          </div>
        </div>

        <div className="message-type">
          <div className="message-visual">
            <div className="msg-line return">
              <div className="msg-arrow return"></div>
            </div>
          </div>
          <div className="message-info">
            <h4>Message de Retour</h4>
            <p>
              Réponse à un message synchrone. 
              Représenté par une flèche <strong>pointillée</strong>.
            </p>
            <code>objetB --→ objetA : résultat</code>
          </div>
        </div>

        <div className="message-type">
          <div className="message-visual">
            <div className="msg-line create">
              <div className="msg-arrow create"></div>
            </div>
          </div>
          <div className="message-info">
            <h4>Message de Création</h4>
            <p>
              Crée une nouvelle instance. 
              Flèche pointillée vers un nouveau participant.
            </p>
            <code>«create» objetA --→ :NouvelObjet</code>
          </div>
        </div>

        <div className="message-type self-call">
          <div className="message-visual">
            <div className="msg-self">
              <div className="self-arrow"></div>
            </div>
          </div>
          <div className="message-info">
            <h4>Auto-Appel (Self-Call)</h4>
            <p>
              L'objet s'envoie un message à lui-même. 
              Représenté par une flèche qui revient.
            </p>
            <code>objetA → objetA : méthodeInterne()</code>
          </div>
        </div>
      </div>

      <h3>Syntaxe des Messages</h3>

      <div className="syntax-rules">
        <div className="syntax-card">
          <h4>Format Général</h4>
          <code>[séquence] [garde] : nomMessage(arguments) [:retour]</code>
        </div>

        <div className="syntax-examples-grid">
          <div className="syntax-example">
            <code>1: retirer(montant)</code>
            <span>Message numéroté simple</span>
          </div>
          <div className="syntax-example">
            <code>1.1: vérifierSolde()</code>
            <span>Sous-message (hiérarchie)</span>
          </div>
          <div className="syntax-example">
            <code>[solde &gt; 0] : débiter()</code>
            <span>Message avec garde (condition)</span>
          </div>
          <div className="syntax-example">
            <code>calculer(x) : résultat</code>
            <span>Message avec valeur de retour</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FragmentsSection() {
  return (
    <div className="section">
      <h2>
        <Repeat className="section-icon" />
        Fragments Combinés
      </h2>

      <p className="intro-text">
        Les <strong>fragments combinés</strong> permettent de représenter des comportements 
        conditionnels, des boucles et d'autres structures de contrôle dans un diagramme de séquence.
      </p>

      <div className="fragments-grid">
        <div className="fragment-card">
          <div className="fragment-visual">
            <div className="fragment-box alt">
              <div className="fragment-label">alt</div>
              <div className="fragment-content">
                <div className="operand">[condition vraie]</div>
                <div className="fragment-divider">----</div>
                <div className="operand">[sinon]</div>
              </div>
            </div>
          </div>
          <div className="fragment-info">
            <h4>alt - Alternative</h4>
            <p>Équivalent du if-else. Plusieurs branches mutuellement exclusives.</p>
            <code>if (condition) ... else ...</code>
          </div>
        </div>

        <div className="fragment-card">
          <div className="fragment-visual">
            <div className="fragment-box opt">
              <div className="fragment-label">opt</div>
              <div className="fragment-content">
                <div className="operand">[condition]</div>
              </div>
            </div>
          </div>
          <div className="fragment-info">
            <h4>opt - Option</h4>
            <p>Exécuté uniquement si la condition est vraie. Équivalent d'un if sans else.</p>
            <code>if (condition) ...</code>
          </div>
        </div>

        <div className="fragment-card">
          <div className="fragment-visual">
            <div className="fragment-box loop">
              <div className="fragment-label">loop</div>
              <div className="fragment-content">
                <div className="operand">[min..max]</div>
              </div>
            </div>
          </div>
          <div className="fragment-info">
            <h4>loop - Boucle</h4>
            <p>Répétition d'une séquence. Peut spécifier min/max itérations.</p>
            <code>for/while (...) ...</code>
          </div>
        </div>

        <div className="fragment-card">
          <div className="fragment-visual">
            <div className="fragment-box break">
              <div className="fragment-label">break</div>
              <div className="fragment-content">
                <div className="operand">[condition sortie]</div>
              </div>
            </div>
          </div>
          <div className="fragment-info">
            <h4>break - Interruption</h4>
            <p>Sort de la boucle englobante si la condition est vraie.</p>
            <code>break;</code>
          </div>
        </div>

        <div className="fragment-card">
          <div className="fragment-visual">
            <div className="fragment-box par">
              <div className="fragment-label">par</div>
              <div className="fragment-content">
                <div className="operand">branche 1</div>
                <div className="fragment-divider">----</div>
                <div className="operand">branche 2</div>
              </div>
            </div>
          </div>
          <div className="fragment-info">
            <h4>par - Parallèle</h4>
            <p>Exécution simultanée de plusieurs séquences.</p>
            <code>thread1 || thread2</code>
          </div>
        </div>

        <div className="fragment-card">
          <div className="fragment-visual">
            <div className="fragment-box critical">
              <div className="fragment-label">critical</div>
              <div className="fragment-content">
                <div className="operand">section critique</div>
              </div>
            </div>
          </div>
          <div className="fragment-info">
            <h4>critical - Section Critique</h4>
            <p>Séquence atomique qui ne peut être interrompue.</p>
            <code>{'synchronized { ... }'}</code>
          </div>
        </div>

        <div className="fragment-card">
          <div className="fragment-visual">
            <div className="fragment-box ref">
              <div className="fragment-label">ref</div>
              <div className="fragment-content">
                <div className="operand">NomDiagramme</div>
              </div>
            </div>
          </div>
          <div className="fragment-info">
            <h4>ref - Référence</h4>
            <p>Référence vers un autre diagramme de séquence (réutilisation).</p>
            <code>include(autre_séquence)</code>
          </div>
        </div>

        <div className="fragment-card">
          <div className="fragment-visual">
            <div className="fragment-box neg">
              <div className="fragment-label">neg</div>
              <div className="fragment-content">
                <div className="operand">trace invalide</div>
              </div>
            </div>
          </div>
          <div className="fragment-info">
            <h4>neg - Négation</h4>
            <p>Séquence invalide qui ne doit pas se produire.</p>
            <code>assert !(condition)</code>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExampleSection() {
  return (
    <div className="section">
      <h2>
        <Zap className="section-icon" />
        Exemple : Retrait GAB
      </h2>

      <p className="intro-text">
        Voici un exemple complet de diagramme de séquence pour un retrait d'argent 
        à un Guichet Automatique Bancaire (GAB).
      </p>

      <div className="sequence-diagram">
        <div className="diagram-header">
          <span className="diagram-title">sd Retrait GAB</span>
        </div>

        <div className="diagram-content">
          {/* Participants */}
          <div className="participants-row">
            <div className="sd-participant actor">
              <div className="sd-actor-icon">👤</div>
              <span>Client</span>
            </div>
            <div className="sd-participant">
              <div className="sd-box">:IHM</div>
            </div>
            <div className="sd-participant">
              <div className="sd-box">:Contrôleur</div>
            </div>
            <div className="sd-participant">
              <div className="sd-box">:Compte</div>
            </div>
            <div className="sd-participant">
              <div className="sd-box">:Distributeur</div>
            </div>
          </div>

          {/* Interactions */}
          <div className="interactions">
            <div className="interaction-row">
              <div className="msg-full" data-from="0" data-to="1">
                <span className="msg-text">1: insérerCarte()</span>
              </div>
            </div>

            <div className="interaction-row">
              <div className="msg-full" data-from="1" data-to="2">
                <span className="msg-text">2: validerCarte(numCarte)</span>
              </div>
            </div>

            <div className="interaction-row">
              <div className="msg-return" data-from="2" data-to="1">
                <span className="msg-text">carteValide</span>
              </div>
            </div>

            <div className="interaction-row">
              <div className="msg-full" data-from="1" data-to="0">
                <span className="msg-text">3: demanderCode()</span>
              </div>
            </div>

            <div className="interaction-row">
              <div className="msg-full" data-from="0" data-to="1">
                <span className="msg-text">4: saisirCode(code)</span>
              </div>
            </div>

            {/* Loop Fragment */}
            <div className="fragment-wrapper loop">
              <div className="fragment-header">
                <span className="fragment-type">loop</span>
                <span className="fragment-guard">[essais &lt; 3 && !codeValide]</span>
              </div>
              <div className="fragment-body">
                <div className="interaction-row">
                  <div className="msg-full" data-from="1" data-to="2">
                    <span className="msg-text">5: vérifierCode(code)</span>
                  </div>
                </div>

                {/* Alt Fragment */}
                <div className="fragment-wrapper alt nested">
                  <div className="fragment-header">
                    <span className="fragment-type">alt</span>
                  </div>
                  <div className="fragment-body">
                    <div className="operand-header">[code incorrect]</div>
                    <div className="interaction-row">
                      <div className="msg-return" data-from="2" data-to="1">
                        <span className="msg-text">codeInvalide</span>
                      </div>
                    </div>
                    <div className="interaction-row">
                      <div className="msg-full" data-from="1" data-to="0">
                        <span className="msg-text">afficherErreur()</span>
                      </div>
                    </div>
                    <div className="operand-divider"></div>
                    <div className="operand-header">[code correct]</div>
                    <div className="interaction-row">
                      <div className="msg-return" data-from="2" data-to="1">
                        <span className="msg-text">codeValide</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="interaction-row">
              <div className="msg-full" data-from="1" data-to="0">
                <span className="msg-text">6: demanderMontant()</span>
              </div>
            </div>

            <div className="interaction-row">
              <div className="msg-full" data-from="0" data-to="1">
                <span className="msg-text">7: saisirMontant(montant)</span>
              </div>
            </div>

            <div className="interaction-row">
              <div className="msg-full" data-from="1" data-to="2">
                <span className="msg-text">8: effectuerRetrait(numCarte, montant)</span>
              </div>
            </div>

            <div className="interaction-row">
              <div className="msg-full" data-from="2" data-to="3">
                <span className="msg-text">9: débiter(montant)</span>
              </div>
            </div>

            <div className="interaction-row">
              <div className="msg-return" data-from="3" data-to="2">
                <span className="msg-text">ok</span>
              </div>
            </div>

            <div className="interaction-row">
              <div className="msg-full" data-from="2" data-to="4">
                <span className="msg-text">10: distribuerBillets(montant)</span>
              </div>
            </div>

            <div className="interaction-row">
              <div className="msg-full" data-from="1" data-to="0">
                <span className="msg-text">11: éjecterCarte()</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>Points Clés de l'Exemple</h3>

      <div className="key-points">
        <div className="key-point">
          <ChevronRight className="point-icon" />
          <div>
            <strong>Numérotation</strong> : Les messages sont numérotés pour indiquer l'ordre d'exécution
          </div>
        </div>
        <div className="key-point">
          <ChevronRight className="point-icon" />
          <div>
            <strong>Fragment loop</strong> : Gère les tentatives multiples de saisie du code
          </div>
        </div>
        <div className="key-point">
          <ChevronRight className="point-icon" />
          <div>
            <strong>Fragment alt</strong> : Distingue le cas code correct/incorrect
          </div>
        </div>
        <div className="key-point">
          <ChevronRight className="point-icon" />
          <div>
            <strong>Messages de retour</strong> : Lignes pointillées pour les réponses
          </div>
        </div>
      </div>
    </div>
  );
}
