import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  ChevronRight, 
  BookOpen, 
  History,
  Grid3X3,
  Eye,
  Lightbulb,
  Box,
  Users,
  GitBranch,
  Activity,
  FileText,
  Package,
  Workflow
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Chapter3.css';

export default function Chapter3() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', title: t('chapter3.sections.intro'), icon: BookOpen },
    { id: 'history', title: t('chapter3.sections.history'), icon: History },
    { id: 'diagrams', title: t('chapter3.sections.diagrams'), icon: Grid3X3 },
    { id: 'views', title: t('chapter3.sections.views'), icon: Eye }
  ];

  return (
    <div className="chapter-page">
      <motion.header 
        className="chapter-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="chapter-badge">
          <Layers size={20} />
          <span>{t('common.chapter')} 3</span>
        </div>
        <h1>{t('chapter3.title')}</h1>
        <p className="chapter-description">
          {t('chapter3.subtitle')}
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
                <h2>🎯 {t('chapter3.intro.title')}</h2>
                
                <div className="info-card highlight">
                  <Lightbulb className="card-icon" />
                  <div>
                    <h4>{t('common.definition')}</h4>
                    <p>
                      {t('chapter3.intro.description')}
                    </p>
                  </div>
                </div>

                <h3>{t('common.characteristics')}</h3>
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon">📐</div>
                    <h4>{t('chapter3.intro.visualize')}</h4>
                    <p>{t('chapter3.intro.visualizeDesc')}</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🎨</div>
                    <h4>{t('chapter3.intro.specify')}</h4>
                    <p>{t('chapter3.intro.specifyDesc')}</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🌐</div>
                    <h4>{t('chapter3.intro.construct')}</h4>
                    <p>{t('chapter3.intro.constructDesc')}</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🔧</div>
                    <h4>{t('chapter3.intro.document')}</h4>
                    <p>{t('chapter3.intro.documentDesc')}</p>
                  </div>
                </div>

                <h3>Ce qu'UML n'est PAS</h3>
                <div className="warning-cards">
                  <div className="warning-card">
                    <span className="warning-icon">❌</span>
                    <div>
                      <strong>Pas une méthode</strong>
                      <p>UML ne prescrit pas de processus de développement</p>
                    </div>
                  </div>
                  <div className="warning-card">
                    <span className="warning-icon">❌</span>
                    <div>
                      <strong>Pas un langage de programmation</strong>
                      <p>UML modélise mais ne génère pas directement de code</p>
                    </div>
                  </div>
                  <div className="warning-card">
                    <span className="warning-icon">❌</span>
                    <div>
                      <strong>Pas un outil</strong>
                      <p>UML est une notation, pas un logiciel</p>
                    </div>
                  </div>
                </div>

                <h3>Objectifs d'UML</h3>
                <div className="objectives-list">
                  <div className="objective">
                    <span className="obj-number">1</span>
                    <span>Fournir un langage visuel expressif pour créer des modèles</span>
                  </div>
                  <div className="objective">
                    <span className="obj-number">2</span>
                    <span>Proposer des mécanismes d'extension et de spécialisation</span>
                  </div>
                  <div className="objective">
                    <span className="obj-number">3</span>
                    <span>Être indépendant des langages et des processus</span>
                  </div>
                  <div className="objective">
                    <span className="obj-number">4</span>
                    <span>Fournir une base formelle pour comprendre le langage</span>
                  </div>
                  <div className="objective">
                    <span className="obj-number">5</span>
                    <span>Encourager la croissance du marché des outils OO</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'history' && (
              <motion.div
                key="history"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-section"
              >
                <h2>📜 {t('chapter3.history.title')}</h2>
                
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-marker">1980s</div>
                    <div className="timeline-content">
                      <h4>Prolifération des méthodes OO</h4>
                      <p>Plus de 50 méthodes orientées objet apparaissent, chacune avec sa propre notation</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker">1994</div>
                    <div className="timeline-content">
                      <h4>Début de l'unification</h4>
                      <p>Grady Booch et James Rumbaugh (Rational) commencent à unifier leurs méthodes</p>
                    </div>
                  </div>
                  <div className="timeline-item highlight">
                    <div className="timeline-marker">1995</div>
                    <div className="timeline-content">
                      <h4>Les "Trois Amigos"</h4>
                      <p>Ivar Jacobson rejoint Rational. Ensemble, ils créent UML 0.8</p>
                      <div className="founders">
                        <div className="founder">
                          <span className="founder-avatar">GB</span>
                          <span>Grady Booch</span>
                        </div>
                        <div className="founder">
                          <span className="founder-avatar">JR</span>
                          <span>James Rumbaugh</span>
                        </div>
                        <div className="founder">
                          <span className="founder-avatar">IJ</span>
                          <span>Ivar Jacobson</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker">1997</div>
                    <div className="timeline-content">
                      <h4>Adoption par l'OMG</h4>
                      <p>UML 1.1 devient un standard de l'Object Management Group</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker">2005</div>
                    <div className="timeline-content">
                      <h4>UML 2.0</h4>
                      <p>Refonte majeure avec 13 types de diagrammes et amélioration de la sémantique</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker">2017</div>
                    <div className="timeline-content">
                      <h4>UML 2.5.1</h4>
                      <p>Version actuelle avec clarifications et corrections</p>
                    </div>
                  </div>
                </div>

                <h3>Les Méthodes Unifiées</h3>
                <div className="methods-merge">
                  <div className="method-source">
                    <div className="method-card booch">
                      <h4>Méthode Booch</h4>
                      <p>Conception et implémentation</p>
                    </div>
                    <div className="method-card omt">
                      <h4>OMT (Rumbaugh)</h4>
                      <p>Analyse orientée objet</p>
                    </div>
                    <div className="method-card oose">
                      <h4>OOSE (Jacobson)</h4>
                      <p>Use Cases</p>
                    </div>
                  </div>
                  <div className="merge-arrow">→</div>
                  <div className="method-result">
                    <div className="uml-badge">UML</div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'diagrams' && (
              <motion.div
                key="diagrams"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-section"
              >
                <h2>📊 {t('chapter3.diagrams.title')}</h2>
                
                <div className="info-card">
                  <div>
                    <p>
                      UML 2.x définit <strong>14 types de diagrammes</strong> divisés en deux catégories principales :
                      les diagrammes de <strong>structure</strong> et les diagrammes de <strong>comportement</strong>.
                    </p>
                  </div>
                </div>

                <div className="diagrams-taxonomy">
                  <div className="diagram-category structure">
                    <div className="category-header">
                      <Box size={24} />
                      <h3>Diagrammes de Structure</h3>
                      <span className="category-desc">Vue statique du système</span>
                    </div>
                    <div className="diagram-list">
                      <div className="diagram-item">
                        <div className="diagram-icon"><Box size={18} /></div>
                        <div className="diagram-info">
                          <h4>Diagramme de Classes</h4>
                          <p>Classes, attributs, méthodes et relations</p>
                        </div>
                        <span className="importance high">Essentiel</span>
                      </div>
                      <div className="diagram-item">
                        <div className="diagram-icon"><Box size={18} /></div>
                        <div className="diagram-info">
                          <h4>Diagramme d'Objets</h4>
                          <p>Instances de classes à un moment donné</p>
                        </div>
                        <span className="importance medium">Important</span>
                      </div>
                      <div className="diagram-item">
                        <div className="diagram-icon"><Package size={18} /></div>
                        <div className="diagram-info">
                          <h4>Diagramme de Paquetages</h4>
                          <p>Organisation logique en packages</p>
                        </div>
                        <span className="importance medium">Important</span>
                      </div>
                      <div className="diagram-item">
                        <div className="diagram-icon"><Layers size={18} /></div>
                        <div className="diagram-info">
                          <h4>Diagramme de Composants</h4>
                          <p>Architecture physique des composants</p>
                        </div>
                        <span className="importance medium">Important</span>
                      </div>
                      <div className="diagram-item">
                        <div className="diagram-icon"><FileText size={18} /></div>
                        <div className="diagram-info">
                          <h4>Diagramme de Déploiement</h4>
                          <p>Infrastructure matérielle</p>
                        </div>
                        <span className="importance medium">Important</span>
                      </div>
                      <div className="diagram-item">
                        <div className="diagram-icon"><Layers size={18} /></div>
                        <div className="diagram-info">
                          <h4>Diagramme de Structure Composite</h4>
                          <p>Structure interne d'une classe</p>
                        </div>
                        <span className="importance low">Spécialisé</span>
                      </div>
                      <div className="diagram-item">
                        <div className="diagram-icon"><FileText size={18} /></div>
                        <div className="diagram-info">
                          <h4>Diagramme de Profil</h4>
                          <p>Extension du métamodèle UML</p>
                        </div>
                        <span className="importance low">Avancé</span>
                      </div>
                    </div>
                  </div>

                  <div className="diagram-category behavior">
                    <div className="category-header">
                      <Activity size={24} />
                      <h3>Diagrammes de Comportement</h3>
                      <span className="category-desc">Vue dynamique du système</span>
                    </div>
                    <div className="diagram-list">
                      <div className="diagram-item">
                        <div className="diagram-icon"><Users size={18} /></div>
                        <div className="diagram-info">
                          <h4>Diagramme de Cas d'Utilisation</h4>
                          <p>Fonctionnalités vues par les utilisateurs</p>
                        </div>
                        <span className="importance high">Essentiel</span>
                      </div>
                      <div className="diagram-item">
                        <div className="diagram-icon"><Activity size={18} /></div>
                        <div className="diagram-info">
                          <h4>Diagramme d'Activité</h4>
                          <p>Flux de travail et processus</p>
                        </div>
                        <span className="importance high">Essentiel</span>
                      </div>
                      <div className="diagram-item">
                        <div className="diagram-icon"><Workflow size={18} /></div>
                        <div className="diagram-info">
                          <h4>Diagramme d'États</h4>
                          <p>Cycle de vie d'un objet</p>
                        </div>
                        <span className="importance high">Essentiel</span>
                      </div>
                      <div className="diagram-item">
                        <div className="diagram-icon"><GitBranch size={18} /></div>
                        <div className="diagram-info">
                          <h4>Diagramme de Séquence</h4>
                          <p>Interactions ordonnées dans le temps</p>
                        </div>
                        <span className="importance high">Essentiel</span>
                      </div>
                      <div className="diagram-item">
                        <div className="diagram-icon"><GitBranch size={18} /></div>
                        <div className="diagram-info">
                          <h4>Diagramme de Communication</h4>
                          <p>Interactions structurées</p>
                        </div>
                        <span className="importance medium">Important</span>
                      </div>
                      <div className="diagram-item">
                        <div className="diagram-icon"><GitBranch size={18} /></div>
                        <div className="diagram-info">
                          <h4>Diagramme de Temps</h4>
                          <p>Contraintes temporelles</p>
                        </div>
                        <span className="importance low">Spécialisé</span>
                      </div>
                      <div className="diagram-item">
                        <div className="diagram-icon"><GitBranch size={18} /></div>
                        <div className="diagram-info">
                          <h4>Diagramme d'Interaction</h4>
                          <p>Vue d'ensemble des interactions</p>
                        </div>
                        <span className="importance low">Spécialisé</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'views' && (
              <motion.div
                key="views"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-section"
              >
                <h2>👁️ {t('chapter3.views.title')}</h2>
                
                <div className="info-card highlight">
                  <div>
                    <h4>Le Modèle de Philippe Kruchten</h4>
                    <p>
                      Le modèle 4+1 propose d'organiser la description d'un système selon 
                      <strong> 5 vues complémentaires</strong>, chacune répondant aux préoccupations 
                      de différentes parties prenantes.
                    </p>
                  </div>
                </div>

                <div className="views-diagram">
                  <div className="view-card logical">
                    <div className="view-header">
                      <h4>📐 Vue Logique</h4>
                    </div>
                    <div className="view-body">
                      <p><strong>Quoi?</strong> Structure statique du système</p>
                      <p><strong>Pour qui?</strong> Analystes, concepteurs</p>
                      <p><strong>Diagrammes:</strong></p>
                      <ul>
                        <li>Classes</li>
                        <li>Objets</li>
                        <li>Paquetages</li>
                      </ul>
                    </div>
                  </div>

                  <div className="view-card process">
                    <div className="view-header">
                      <h4>⚡ Vue Processus</h4>
                    </div>
                    <div className="view-body">
                      <p><strong>Quoi?</strong> Comportement dynamique</p>
                      <p><strong>Pour qui?</strong> Intégrateurs</p>
                      <p><strong>Diagrammes:</strong></p>
                      <ul>
                        <li>Séquence</li>
                        <li>Activité</li>
                        <li>États</li>
                      </ul>
                    </div>
                  </div>

                  <div className="view-card usecase">
                    <div className="view-header">
                      <h4>🎯 Vue Cas d'Utilisation</h4>
                      <span className="central-badge">+1 (Centrale)</span>
                    </div>
                    <div className="view-body">
                      <p><strong>Quoi?</strong> Besoins des utilisateurs</p>
                      <p><strong>Pour qui?</strong> Tous les acteurs</p>
                      <p><strong>Diagrammes:</strong></p>
                      <ul>
                        <li>Cas d'utilisation</li>
                        <li>Scénarios</li>
                      </ul>
                    </div>
                  </div>

                  <div className="view-card implementation">
                    <div className="view-header">
                      <h4>🔧 Vue Implémentation</h4>
                    </div>
                    <div className="view-body">
                      <p><strong>Quoi?</strong> Organisation du code</p>
                      <p><strong>Pour qui?</strong> Développeurs</p>
                      <p><strong>Diagrammes:</strong></p>
                      <ul>
                        <li>Composants</li>
                        <li>Paquetages</li>
                      </ul>
                    </div>
                  </div>

                  <div className="view-card deployment">
                    <div className="view-header">
                      <h4>🖥️ Vue Déploiement</h4>
                    </div>
                    <div className="view-body">
                      <p><strong>Quoi?</strong> Infrastructure physique</p>
                      <p><strong>Pour qui?</strong> Ops, Admins</p>
                      <p><strong>Diagrammes:</strong></p>
                      <ul>
                        <li>Déploiement</li>
                        <li>Composants</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3>Synthèse des Vues</h3>
                <div className="views-summary">
                  <div className="summary-item">
                    <span className="summary-icon">👥</span>
                    <div>
                      <strong>Utilisateurs finaux</strong>
                      <p>Vue Cas d'Utilisation → Fonctionnalités</p>
                    </div>
                  </div>
                  <div className="summary-item">
                    <span className="summary-icon">💻</span>
                    <div>
                      <strong>Développeurs</strong>
                      <p>Vue Logique + Implémentation → Code</p>
                    </div>
                  </div>
                  <div className="summary-item">
                    <span className="summary-icon">🔄</span>
                    <div>
                      <strong>Intégrateurs</strong>
                      <p>Vue Processus → Performance, concurrence</p>
                    </div>
                  </div>
                  <div className="summary-item">
                    <span className="summary-icon">🖥️</span>
                    <div>
                      <strong>Ops/Admins</strong>
                      <p>Vue Déploiement → Infrastructure</p>
                    </div>
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
