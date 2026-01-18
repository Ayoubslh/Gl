import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, 
  ChevronRight, 
  BookOpen, 
  Target, 
  Layers,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Code2,
  RefreshCw,
  GitBranch,
  Users
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Chapter2.css';

export default function Chapter2() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', title: t('common.introduction'), icon: BookOpen },
    { id: 'merise', title: t('chapter2.merise.title'), icon: Layers },
    { id: 'up', title: t('chapter2.up.title'), icon: RefreshCw },
    { id: '2tup', title: t('chapter2.tup.title'), icon: GitBranch },
    { id: 'comparison', title: t('chapter2.comparison.title'), icon: Target }
  ];

  return (
    <div className="chapter-page">
      <motion.header 
        className="chapter-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="chapter-badge">
          <Settings size={20} />
          <span>{t('common.chapter')} 2</span>
        </div>
        <h1>{t('chapter2.title')}</h1>
        <p className="chapter-description">
          {t('chapter2.subtitle')}
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
                <h2>🎯 {t('chapter2.processIntro.title')}</h2>
                
                <div className="info-card highlight">
                  <Lightbulb className="card-icon" />
                  <div>
                    <h4>{t('chapter2.processIntro.why')}</h4>
                    <p>
                      {t('chapter2.processIntro.whyDesc')}
                    </p>
                  </div>
                </div>

                <div className="concept-grid">
                  <div className="concept-card">
                    <div className="concept-icon">📋</div>
                    <h4>{t('common.definition')}</h4>
                    <p>
                      {t('chapter2.processIntro.definition')}
                    </p>
                  </div>
                  <div className="concept-card">
                    <div className="concept-icon">🔄</div>
                    <h4>{t('chapter2.processIntro.lifecycle')}</h4>
                    <p>
                      {t('chapter2.processIntro.lifecycleDesc')}
                    </p>
                  </div>
                  <div className="concept-card">
                    <div className="concept-icon">✅</div>
                    <h4>{t('common.objectives')}</h4>
                    <p>
                      {t('chapter2.processIntro.objectives')}
                    </p>
                  </div>
                </div>

                <h3>{t('chapter2.processIntro.phases')}</h3>
                <div className="phases-diagram">
                  <div className="phase-item">
                    <div className="phase-number">1</div>
                    <div className="phase-content">
                      <h4>{t('chapter2.processIntro.phase1')}</h4>
                      <p>{t('chapter2.processIntro.phase1Desc')}</p>
                    </div>
                  </div>
                  <ArrowRight className="phase-arrow" />
                  <div className="phase-item">
                    <div className="phase-number">2</div>
                    <div className="phase-content">
                      <h4>{t('chapter2.processIntro.phase2')}</h4>
                      <p>{t('chapter2.processIntro.phase2Desc')}</p>
                    </div>
                  </div>
                  <ArrowRight className="phase-arrow" />
                  <div className="phase-item">
                    <div className="phase-number">3</div>
                    <div className="phase-content">
                      <h4>{t('chapter2.processIntro.phase3')}</h4>
                      <p>{t('chapter2.processIntro.phase3Desc')}</p>
                    </div>
                  </div>
                  <ArrowRight className="phase-arrow" />
                  <div className="phase-item">
                    <div className="phase-number">4</div>
                    <div className="phase-content">
                      <h4>{t('chapter2.processIntro.phase4')}</h4>
                      <p>{t('chapter2.processIntro.phase4Desc')}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'merise' && (
              <motion.div
                key="merise"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-section"
              >
                <h2>📊 {t('chapter2.merise.title')}</h2>
                
                <div className="info-card">
                  <div>
                    <h4>{t('common.definition')}</h4>
                    <p>
                      {t('chapter2.merise.definition')}
                    </p>
                  </div>
                </div>

                <h3>{t('chapter2.merise.cycles')}</h3>
                <div className="merise-cycles">
                  <div className="cycle-card">
                    <div className="cycle-header abstraction">
                      <Layers size={24} />
                      <h4>{t('chapter2.merise.abstraction')}</h4>
                    </div>
                    <div className="cycle-body">
                      <ul>
                        <li>{t('chapter2.merise.abstractionLevels.conceptual')}</li>
                        <li>{t('chapter2.merise.abstractionLevels.logical')}</li>
                        <li>{t('chapter2.merise.abstractionLevels.physical')}</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="cycle-card">
                    <div className="cycle-header decision">
                      <Target size={24} />
                      <h4>{t('chapter2.merise.decision')}</h4>
                    </div>
                    <div className="cycle-body">
                      <ul>
                        {t('chapter2.merise.decisionPhases').map((phase, i) => (
                          <li key={i}>{phase}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="cycle-card">
                    <div className="cycle-header lifecycle">
                      <RefreshCw size={24} />
                      <h4>{t('chapter2.merise.lifecycle')}</h4>
                    </div>
                    <div className="cycle-body">
                      <ul>
                        {t('chapter2.merise.lifecyclePhases').map((phase, i) => (
                          <li key={i}>{phase}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <h3>{t('chapter2.merise.models')}</h3>
                <div className="models-table">
                  <div className="table-header">
                    <span>{t('chapter2.merise.level')}</span>
                    <span>{t('chapter2.merise.data')}</span>
                    <span>{t('chapter2.merise.treatments')}</span>
                  </div>
                  <div className="table-row">
                    <span className="level">Conceptuel</span>
                    <span>MCD (Modèle Conceptuel de Données)</span>
                    <span>MCT (Modèle Conceptuel de Traitements)</span>
                  </div>
                  <div className="table-row">
                    <span className="level">Logique</span>
                    <span>MLD (Modèle Logique de Données)</span>
                    <span>MLT/MOT (Modèle Organisationnel)</span>
                  </div>
                  <div className="table-row">
                    <span className="level">Physique</span>
                    <span>MPD (Modèle Physique de Données)</span>
                    <span>MPT (Modèle Physique de Traitements)</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'up' && (
              <motion.div
                key="up"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-section"
              >
                <h2>🔄 {t('chapter2.up.title')}</h2>
                
                <div className="info-card highlight">
                  <div>
                    <h4>{t('common.definition')}</h4>
                    <p>
                      {t('chapter2.up.definition')}
                    </p>
                  </div>
                </div>

                <h3>{t('chapter2.up.characteristics')}</h3>
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon">🔁</div>
                    <h4>{t('chapter2.up.iterative')}</h4>
                    <p>{t('chapter2.up.iterativeDesc')}</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">📈</div>
                    <h4>{t('chapter2.up.incremental')}</h4>
                    <p>{t('chapter2.up.incrementalDesc')}</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🏗️</div>
                    <h4>{t('chapter2.up.architecture')}</h4>
                    <p>{t('chapter2.up.architectureDesc')}</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">👥</div>
                    <h4>{t('chapter2.up.useCaseDriven')}</h4>
                    <p>{t('chapter2.up.useCaseDrivenDesc')}</p>
                  </div>
                </div>

                <h3>{t('chapter2.up.phases')}</h3>
                <div className="up-phases">
                  <div className="up-phase inception">
                    <div className="phase-label">{t('chapter2.up.inception')}</div>
                    <div className="phase-desc">
                      <h4>{t('chapter2.up.inceptionTitle')}</h4>
                      <ul>
                        {t('chapter2.up.inceptionItems').map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="up-phase elaboration">
                    <div className="phase-label">{t('chapter2.up.elaboration')}</div>
                    <div className="phase-desc">
                      <h4>{t('chapter2.up.elaborationTitle')}</h4>
                      <ul>
                        {t('chapter2.up.elaborationItems').map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="up-phase construction">
                    <div className="phase-label">{t('chapter2.up.construction')}</div>
                    <div className="phase-desc">
                      <h4>{t('chapter2.up.constructionTitle')}</h4>
                      <ul>
                        {t('chapter2.up.constructionItems').map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="up-phase transition">
                    <div className="phase-label">{t('chapter2.up.transition')}</div>
                    <div className="phase-desc">
                      <h4>{t('chapter2.up.transitionTitle')}</h4>
                      <ul>
                        {t('chapter2.up.transitionItems').map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <h3>{t('chapter2.up.disciplines')}</h3>
                <div className="disciplines-list">
                  <div className="discipline"><Code2 size={18} /> Modélisation métier</div>
                  <div className="discipline"><Users size={18} /> Gestion des exigences</div>
                  <div className="discipline"><Layers size={18} /> Analyse et conception</div>
                  <div className="discipline"><Code2 size={18} /> Implémentation</div>
                  <div className="discipline"><CheckCircle2 size={18} /> Tests</div>
                  <div className="discipline"><Settings size={18} /> Déploiement</div>
                </div>
              </motion.div>
            )}

            {activeSection === '2tup' && (
              <motion.div
                key="2tup"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-section"
              >
                <h2>🔀 {t('chapter2.tup.title')}</h2>
                
                <div className="info-card highlight">
                  <div>
                    <h4>{t('common.definition')}</h4>
                    <p>
                      {t('chapter2.tup.definition')}
                    </p>
                  </div>
                </div>

                <h3>{t('chapter2.tup.architecture')}</h3>
                <div className="tup-diagram">
                  <div className="tup-branch functional">
                    <div className="branch-header">🎯 {t('chapter2.tup.functional')}</div>
                    <div className="branch-steps">
                      {t('chapter2.tup.functionalSteps').map((step, i) => (
                        <div className="step" key={i}>{step}</div>
                      ))}
                    </div>
                  </div>
                  <div className="tup-merge">
                    <div className="merge-point">⚡ {t('chapter2.tup.merge')}</div>
                    <div className="merge-steps">
                      {t('chapter2.tup.mergeSteps').map((step, i) => (
                        <div className="step" key={i}>{step}</div>
                      ))}
                    </div>
                  </div>
                  <div className="tup-branch technical">
                    <div className="branch-header">⚙️ {t('chapter2.tup.technical')}</div>
                    <div className="branch-steps">
                      {t('chapter2.tup.technicalSteps').map((step, i) => (
                        <div className="step" key={i}>{step}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <h3>{t('chapter2.tup.advantages')}</h3>
                <div className="advantages-grid">
                  <div className="advantage-card">
                    <CheckCircle2 className="advantage-icon" />
                    <div>
                      <h4>{t('chapter2.tup.parallel')}</h4>
                      <p>{t('chapter2.tup.parallelDesc')}</p>
                    </div>
                  </div>
                  <div className="advantage-card">
                    <CheckCircle2 className="advantage-icon" />
                    <div>
                      <h4>{t('chapter2.tup.reuse')}</h4>
                      <p>{t('chapter2.tup.reuseDesc')}</p>
                    </div>
                  </div>
                  <div className="advantage-card">
                    <CheckCircle2 className="advantage-icon" />
                    <div>
                      <h4>{t('chapter2.tup.flexibility')}</h4>
                      <p>{t('chapter2.tup.flexibilityDesc')}</p>
                    </div>
                  </div>
                  <div className="advantage-card">
                    <CheckCircle2 className="advantage-icon" />
                    <div>
                      <h4>{t('chapter2.tup.specialization')}</h4>
                      <p>{t('chapter2.tup.specializationDesc')}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'comparison' && (
              <motion.div
                key="comparison"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-section"
              >
                <h2>📊 {t('chapter2.comparison.title')}</h2>
                
                <div className="comparison-table">
                  <div className="comp-header">
                    <span>{t('chapter2.comparisonTable.criteria')}</span>
                    <span>MERISE</span>
                    <span>UP</span>
                    <span>2TUP</span>
                  </div>
                  <div className="comp-row">
                    <span className="criteria">{t('chapter2.comparisonTable.origin')}</span>
                    <span>{t('chapter2.comparisonTable.france')}</span>
                    <span>{t('chapter2.comparisonTable.rational')}</span>
                    <span>{t('chapter2.comparisonTable.valtech')}</span>
                  </div>
                  <div className="comp-row">
                    <span className="criteria">{t('chapter2.comparisonTable.approach')}</span>
                    <span>{t('chapter2.comparisonTable.sequential')}</span>
                    <span>{t('chapter2.comparisonTable.iterative')}</span>
                    <span>{t('chapter2.comparisonTable.iterativeY')}</span>
                  </div>
                  <div className="comp-row">
                    <span className="criteria">{t('chapter2.comparisonTable.focus')}</span>
                    <span>{t('chapter2.comparisonTable.dataFocus')}</span>
                    <span>{t('chapter2.comparisonTable.useCaseFocus')}</span>
                    <span>{t('chapter2.comparisonTable.funcTechFocus')}</span>
                  </div>
                  <div className="comp-row">
                    <span className="criteria">{t('chapter2.comparisonTable.notation')}</span>
                    <span>{t('chapter2.comparisonTable.ownNotation')}</span>
                    <span>{t('chapter2.comparisonTable.uml')}</span>
                    <span>{t('chapter2.comparisonTable.uml')}</span>
                  </div>
                  <div className="comp-row">
                    <span className="criteria">{t('chapter2.comparisonTable.flexibility')}</span>
                    <span>{t('chapter2.comparisonTable.low')}</span>
                    <span>{t('chapter2.comparisonTable.high')}</span>
                    <span>{t('chapter2.comparisonTable.high')}</span>
                  </div>
                </div>

                <div className="summary-cards">
                  <div className="summary-card merise">
                    <h4>📋 MERISE</h4>
                    <p>{t('chapter2.comparisonTable.meriseSummary')}</p>
                    <div className="tags">
                      <span className="tag">Bases de données</span>
                      <span className="tag">SI classiques</span>
                    </div>
                  </div>
                  <div className="summary-card up">
                    <h4>🔄 UP</h4>
                    <p>{t('chapter2.comparisonTable.upSummary')}</p>
                    <div className="tags">
                      <span className="tag">Projets complexes</span>
                      <span className="tag">Équipes agiles</span>
                    </div>
                  </div>
                  <div className="summary-card tup">
                    <h4>🔀 2TUP</h4>
                    <p>{t('chapter2.comparisonTable.tupSummary')}</p>
                    <div className="tags">
                      <span className="tag">Grandes équipes</span>
                      <span className="tag">Architecture SOA</span>
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
