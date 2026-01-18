import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  ChevronRight, 
  BookOpen, 
  Target,
  Link,
  FileText,
  Lightbulb,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { 
  LibraryUseCaseDiagram, 
  ATMUseCaseDiagram, 
  SimpleUseCaseDiagram 
} from '../../components/Diagrams/UseCaseDiagramSVG';
import { useLanguage } from '../../context/LanguageContext';
import './Chapter4.css';

export default function Chapter4() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', title: t('common.introduction'), icon: BookOpen },
    { id: 'actors', title: t('chapter4.elements.actor'), icon: Users },
    { id: 'usecases', title: t('chapter4.elements.useCase'), icon: Target },
    { id: 'relations', title: t('common.relations'), icon: Link },
    { id: 'example', title: t('common.example'), icon: FileText }
  ];

  return (
    <div className="chapter-page">
      <motion.header 
        className="chapter-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="chapter-badge">
          <Users size={20} />
          <span>{t('common.chapter')} 4</span>
        </div>
        <h1>{t('chapter4.title')}</h1>
        <p className="chapter-description">
          {t('chapter4.subtitle')}
        </p>
      </motion.header>

      <div className="chapter-layout">
        <nav className="section-nav">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              className={`section-nav-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <section.icon size={18} />
              <span>{section.title}</span>
              <ChevronRight size={16} className="arrow" />
            </motion.button>
          ))}
        </nav>

        <div className="section-content">
          <AnimatePresence mode="wait">
            {activeSection === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-section"
              >
                <h2>🎯 {t('chapter4.intro.title')}</h2>
                
                <div className="info-card highlight">
                  <Lightbulb className="card-icon" />
                  <div>
                    <h4>{t('common.definition')}</h4>
                    <p>
                      {t('chapter4.intro.description')}
                    </p>
                  </div>
                </div>

                <h3>{t('common.objectives')}</h3>
                <div className="objectives-grid">
                  <div className="objective-card">
                    <CheckCircle2 className="obj-icon" />
                    <div>
                      <h4>Capturer les besoins</h4>
                      <p>Identifier les fonctionnalités attendues par les utilisateurs</p>
                    </div>
                  </div>
                  <div className="objective-card">
                    <CheckCircle2 className="obj-icon" />
                    <div>
                      <h4>Communiquer</h4>
                      <p>Faciliter le dialogue entre développeurs et utilisateurs</p>
                    </div>
                  </div>
                  <div className="objective-card">
                    <CheckCircle2 className="obj-icon" />
                    <div>
                      <h4>Délimiter le système</h4>
                      <p>Définir les frontières et le périmètre du système</p>
                    </div>
                  </div>
                  <div className="objective-card">
                    <CheckCircle2 className="obj-icon" />
                    <div>
                      <h4>Planifier</h4>
                      <p>Base pour l'estimation et la planification du projet</p>
                    </div>
                  </div>
                </div>

                <h3>Structure de Base</h3>
                <SimpleUseCaseDiagram />

                <h3>Éléments du Diagramme</h3>
                <div className="elements-showcase">
                  <div className="element-item">
                    <div className="element-visual actor-visual">
                      <div className="stick-figure">
                        <div className="head"></div>
                        <div className="body"></div>
                        <div className="arms"></div>
                        <div className="legs"></div>
                      </div>
                    </div>
                    <div className="element-info">
                      <h4>Acteur</h4>
                      <p>Entité externe interagissant avec le système</p>
                    </div>
                  </div>
                  <div className="element-item">
                    <div className="element-visual usecase-visual">
                      <div className="usecase-ellipse">Action</div>
                    </div>
                    <div className="element-info">
                      <h4>Cas d'Utilisation</h4>
                      <p>Fonctionnalité offerte par le système</p>
                    </div>
                  </div>
                  <div className="element-item">
                    <div className="element-visual system-visual">
                      <div className="system-box">
                        <span>Système</span>
                      </div>
                    </div>
                    <div className="element-info">
                      <h4>Sujet (Système)</h4>
                      <p>Frontière délimitant le périmètre</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'actors' && (
              <motion.div
                key="actors"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-section"
              >
                <h2>👤 {t('chapter4.elements.actor')}</h2>
                
                <div className="info-card">
                  <div>
                    <h4>{t('chapter4.elements.actorDesc')}</h4>
                    <p>
                      {t('chapter4.elements.actorDesc')}
                    </p>
                  </div>
                </div>

                <h3>{t('common.types')}</h3>
                <div className="actor-types">
                  <div className="actor-type primary">
                    <div className="actor-icon">
                      <div className="stick-figure small">
                        <div className="head"></div>
                        <div className="body"></div>
                        <div className="arms"></div>
                        <div className="legs"></div>
                      </div>
                    </div>
                    <div className="actor-details">
                      <h4>Acteur Principal</h4>
                      <p>Initie le cas d'utilisation et en est le bénéficiaire direct</p>
                      <div className="example">Ex: Client, Administrateur</div>
                    </div>
                  </div>
                  <div className="actor-type secondary">
                    <div className="actor-icon">
                      <div className="stick-figure small">
                        <div className="head"></div>
                        <div className="body"></div>
                        <div className="arms"></div>
                        <div className="legs"></div>
                      </div>
                    </div>
                    <div className="actor-details">
                      <h4>Acteur Secondaire</h4>
                      <p>Sollicité par le système pendant l'exécution du cas d'utilisation</p>
                      <div className="example">Ex: Service de paiement, Système bancaire</div>
                    </div>
                  </div>
                </div>

                <h3>Notation des Acteurs</h3>
                <div className="notation-grid">
                  <div className="notation-item">
                    <div className="notation-visual">
                      <div className="stick-figure">
                        <div className="head"></div>
                        <div className="body"></div>
                        <div className="arms"></div>
                        <div className="legs"></div>
                      </div>
                      <span className="actor-name">Client</span>
                    </div>
                    <p>Notation standard (stick figure)</p>
                  </div>
                  <div className="notation-item">
                    <div className="notation-visual">
                      <div className="actor-box">
                        <span>«actor»</span>
                        <span className="box-name">Système Externe</span>
                      </div>
                    </div>
                    <p>Notation rectangulaire (pour systèmes)</p>
                  </div>
                </div>

                <h3>Héritage entre Acteurs</h3>
                <div className="inheritance-demo">
                  <div className="parent-actor">
                    <div className="stick-figure small">
                      <div className="head"></div>
                      <div className="body"></div>
                      <div className="arms"></div>
                      <div className="legs"></div>
                    </div>
                    <span>Utilisateur</span>
                  </div>
                  <div className="inheritance-line">
                    <div className="triangle"></div>
                    <div className="line"></div>
                  </div>
                  <div className="child-actors">
                    <div className="child-actor">
                      <div className="stick-figure small">
                        <div className="head"></div>
                        <div className="body"></div>
                        <div className="arms"></div>
                        <div className="legs"></div>
                      </div>
                      <span>Client</span>
                    </div>
                    <div className="child-actor">
                      <div className="stick-figure small">
                        <div className="head"></div>
                        <div className="body"></div>
                        <div className="arms"></div>
                        <div className="legs"></div>
                      </div>
                      <span>Admin</span>
                    </div>
                  </div>
                </div>
                <p className="demo-note">
                  L'héritage permet de factoriser les cas d'utilisation communs. 
                  Les acteurs enfants héritent des cas d'utilisation de l'acteur parent.
                </p>
              </motion.div>
            )}

            {activeSection === 'usecases' && (
              <motion.div
                key="usecases"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-section"
              >
                <h2>🎯 {t('chapter4.elements.useCase')}</h2>
                
                <div className="info-card highlight">
                  <div>
                    <h4>{t('common.definition')}</h4>
                    <p>
                      {t('chapter4.elements.useCaseDesc')}
                    </p>
                  </div>
                </div>

                <h3>Représentation</h3>
                <div className="uc-representation">
                  <div className="uc-visual">
                    <div className="uc-ellipse large">
                      <span>Passer une commande</span>
                    </div>
                  </div>
                  <div className="uc-rules">
                    <div className="rule">
                      <CheckCircle2 size={16} />
                      <span>Nom = verbe à l'infinitif + complément</span>
                    </div>
                    <div className="rule">
                      <CheckCircle2 size={16} />
                      <span>Représenté par une ellipse</span>
                    </div>
                    <div className="rule">
                      <CheckCircle2 size={16} />
                      <span>Doit apporter une valeur à l'acteur</span>
                    </div>
                  </div>
                </div>

                <h3>Description Textuelle</h3>
                <div className="uc-description">
                  <div className="desc-header">
                    <h4>📝 Fiche de Description</h4>
                  </div>
                  <div className="desc-body">
                    <div className="desc-row">
                      <span className="desc-label">Nom</span>
                      <span className="desc-value">Retirer de l'argent</span>
                    </div>
                    <div className="desc-row">
                      <span className="desc-label">Acteur principal</span>
                      <span className="desc-value">Client</span>
                    </div>
                    <div className="desc-row">
                      <span className="desc-label">Préconditions</span>
                      <span className="desc-value">Le client possède une carte bancaire valide</span>
                    </div>
                    <div className="desc-row">
                      <span className="desc-label">Postconditions</span>
                      <span className="desc-value">L'argent est retiré, le solde est mis à jour</span>
                    </div>
                    <div className="desc-row full">
                      <span className="desc-label">Scénario nominal</span>
                      <div className="scenario-steps">
                        <div className="step">1. Le client insère sa carte</div>
                        <div className="step">2. Le système demande le code PIN</div>
                        <div className="step">3. Le client saisit son code</div>
                        <div className="step">4. Le système vérifie le code</div>
                        <div className="step">5. Le client choisit le montant</div>
                        <div className="step">6. Le système distribue l'argent</div>
                      </div>
                    </div>
                    <div className="desc-row full">
                      <span className="desc-label">Scénarios alternatifs</span>
                      <div className="scenario-steps alt">
                        <div className="step">4a. Code incorrect → Demander à nouveau (max 3 fois)</div>
                        <div className="step">5a. Solde insuffisant → Afficher message d'erreur</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'relations' && (
              <motion.div
                key="relations"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-section"
              >
                <h2>🔗 {t('chapter4.relations.title')}</h2>

                <div className="relations-grid">
                  <div className="relation-card">
                    <div className="relation-header include">
                      <h4>«include»</h4>
                      <span>Inclusion</span>
                    </div>
                    <div className="relation-body">
                      <div className="relation-diagram">
                        <div className="uc-small">Passer commande</div>
                        <div className="relation-arrow include">
                          <span className="arrow-line">- - - - →</span>
                          <span className="stereotype">«include»</span>
                        </div>
                        <div className="uc-small">S'authentifier</div>
                      </div>
                      <p>
                        <strong>Définition:</strong> Le cas de base inclut TOUJOURS le cas inclus. 
                        L'inclusion est obligatoire.
                      </p>
                      <p><strong>Usage:</strong> Factoriser un comportement commun à plusieurs cas d'utilisation.</p>
                    </div>
                  </div>

                  <div className="relation-card">
                    <div className="relation-header extend">
                      <h4>«extend»</h4>
                      <span>Extension</span>
                    </div>
                    <div className="relation-body">
                      <div className="relation-diagram">
                        <div className="uc-small">Appliquer promo</div>
                        <div className="relation-arrow extend">
                          <span className="arrow-line">- - - - →</span>
                          <span className="stereotype">«extend»</span>
                        </div>
                        <div className="uc-small">Passer commande</div>
                      </div>
                      <p>
                        <strong>Définition:</strong> Le cas d'extension peut optionnellement étendre 
                        le cas de base sous certaines conditions.
                      </p>
                      <p><strong>Usage:</strong> Modéliser un comportement optionnel ou conditionnel.</p>
                    </div>
                  </div>

                  <div className="relation-card">
                    <div className="relation-header generalization">
                      <h4>Généralisation</h4>
                      <span>Héritage</span>
                    </div>
                    <div className="relation-body">
                      <div className="relation-diagram vertical">
                        <div className="uc-small">Payer</div>
                        <div className="generalization-arrow">
                          <div className="gen-line"></div>
                          <div className="gen-triangle"></div>
                        </div>
                        <div className="gen-children">
                          <div className="uc-small">Payer CB</div>
                          <div className="uc-small">Payer espèces</div>
                        </div>
                      </div>
                      <p>
                        <strong>Définition:</strong> Le cas enfant hérite du comportement du cas parent 
                        et peut le spécialiser.
                      </p>
                      <p><strong>Usage:</strong> Modéliser des variantes d'un même cas d'utilisation.</p>
                    </div>
                  </div>
                </div>

                <h3>Récapitulatif des Relations</h3>
                <div className="relations-summary">
                  <div className="summary-row header">
                    <span>Relation</span>
                    <span>Direction</span>
                    <span>Signification</span>
                    <span>Obligatoire?</span>
                  </div>
                  <div className="summary-row">
                    <span className="rel-name include">«include»</span>
                    <span>Base → Inclus</span>
                    <span>A fait toujours appel à B</span>
                    <span className="yes">Oui</span>
                  </div>
                  <div className="summary-row">
                    <span className="rel-name extend">«extend»</span>
                    <span>Extension → Base</span>
                    <span>A peut étendre B (sous condition)</span>
                    <span className="no">Non</span>
                  </div>
                  <div className="summary-row">
                    <span className="rel-name gen">Généralisation</span>
                    <span>Enfant → Parent</span>
                    <span>A est une spécialisation de B</span>
                    <span>—</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'example' && (
              <motion.div
                key="example"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-section"
              >
                <h2>📝 {t('chapter4.example.title')}</h2>
                
                <div className="info-card">
                  <div>
                    <h4>Contexte</h4>
                    <p>
                      Voici des exemples complets de diagrammes de cas d'utilisation pour 
                      un <strong>Système de Gestion de Bibliothèque</strong> et un 
                      <strong> Guichet Automatique Bancaire (GAB)</strong>.
                    </p>
                  </div>
                </div>

                {/* Proper SVG Diagrams */}
                <LibraryUseCaseDiagram />
                <ATMUseCaseDiagram />

                <h3>{t('common.keyPoints')}</h3>
                <div className="key-points">
                  <div className="key-point">
                    <span className="point-number">1</span>
                    <p>Le <strong>Client</strong> est l'acteur principal qui initie les cas d'utilisation</p>
                  </div>
                  <div className="key-point">
                    <span className="point-number">2</span>
                    <p>Le <strong>Système Bancaire</strong> est un acteur secondaire consulté pour vérification</p>
                  </div>
                  <div className="key-point">
                    <span className="point-number">3</span>
                    <p><strong>S'authentifier</strong> est inclus (obligatoire) dans tous les cas d'utilisation</p>
                  </div>
                  <div className="key-point">
                    <span className="point-number">4</span>
                    <p><strong>Imprimer reçu</strong> est une extension optionnelle de "Retirer argent"</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
