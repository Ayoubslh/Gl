import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Code, Cog, Users, Target, AlertTriangle,
  CheckCircle2, XCircle, Layers, Workflow, Settings,
  ChevronDown, ChevronRight, Lightbulb, Box, Wrench
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Chapter1.css';

const Chapter1 = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('intro');
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const sections = [
    { id: 'intro', label: t('chapter1.sections.intro'), icon: BookOpen },
    { id: 'software', label: t('chapter1.sections.software'), icon: Code },
    { id: 'engineering', label: t('chapter1.sections.engineering'), icon: Cog },
    { id: 'crisis', label: t('chapter1.sections.crisis'), icon: AlertTriangle },
    { id: 'quality', label: t('chapter1.sections.quality'), icon: Target }
  ];

  const softwareTypes = [
    {
      type: t('chapter1.software.generic'),
      icon: Box,
      description: t('chapter1.software.genericDesc'),
      examples: t('chapter1.software.genericEx'),
      color: '#6366f1'
    },
    {
      type: t('chapter1.software.custom'),
      icon: Wrench,
      description: t('chapter1.software.customDesc'),
      examples: t('chapter1.software.customEx'),
      color: '#8b5cf6'
    }
  ];

  const softwareCrisisReasons = [
    {
      title: t('chapter1.crisis.r1'),
      description: t('chapter1.crisis.r1Desc'),
      icon: Layers
    },
    {
      title: t('chapter1.crisis.r2'),
      description: t('chapter1.crisis.r2Desc'),
      icon: Workflow
    },
    {
      title: t('chapter1.crisis.r3'),
      description: t('chapter1.crisis.r3Desc'),
      icon: Settings
    },
    {
      title: t('chapter1.crisis.r4'),
      description: t('chapter1.crisis.r4Desc'),
      icon: Users
    }
  ];

  const qualityFactors = [
    { name: t('chapter1.quality.validity'), description: t('chapter1.quality.validityDesc'), icon: CheckCircle2 },
    { name: t('chapter1.quality.reliability'), description: t('chapter1.quality.reliabilityDesc'), icon: Target },
    { name: t('chapter1.quality.robustness'), description: t('chapter1.quality.robustnessDesc'), icon: Cog },
    { name: t('chapter1.quality.extensibility'), description: t('chapter1.quality.extensibilityDesc'), icon: Layers },
    { name: t('chapter1.quality.reusability'), description: t('chapter1.quality.reusabilityDesc'), icon: Box },
    { name: t('chapter1.quality.compatibility'), description: t('chapter1.quality.compatibilityDesc'), icon: Workflow },
    { name: t('chapter1.quality.efficiency'), description: t('chapter1.quality.efficiencyDesc'), icon: Cog },
    { name: t('chapter1.quality.portability'), description: t('chapter1.quality.portabilityDesc'), icon: Settings },
    { name: t('chapter1.quality.verifiability'), description: t('chapter1.quality.verifiabilityDesc'), icon: CheckCircle2 },
    { name: t('chapter1.quality.integrity'), description: t('chapter1.quality.integrityDesc'), icon: Target }
  ];

  return (
    <div className="chapter-page">
      <motion.div 
        className="chapter-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="chapter-number">{t('common.chapter')} 01</div>
        <h1>{t('chapter1.title')}</h1>
        <p className="chapter-subtitle">
          {t('chapter1.subtitle')}
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
                  <BookOpen size={48} />
                </div>
                <h2>{t('chapter1.intro.title')}</h2>
                <p>
                  {t('chapter1.intro.description')}
                </p>
              </div>

              <div className="key-concepts">
                <h3>{t('common.keyConcepts')}</h3>
                <div className="concepts-grid">
                  <div className="concept-card">
                    <div className="concept-icon" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
                      <Code size={24} />
                    </div>
                    <h4>{t('chapter1.intro.software')}</h4>
                    <p>{t('chapter1.intro.softwareDesc')}</p>
                  </div>
                  <div className="concept-card">
                    <div className="concept-icon" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                      <Cog size={24} />
                    </div>
                    <h4>{t('chapter1.intro.engineering')}</h4>
                    <p>{t('chapter1.intro.engineeringDesc')}</p>
                  </div>
                  <div className="concept-card">
                    <div className="concept-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                      <Users size={24} />
                    </div>
                    <h4>{t('chapter1.intro.process')}</h4>
                    <p>{t('chapter1.intro.processDesc')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'software' && (
            <motion.div
              key="software"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="content-section"
            >
              <h2>{t('chapter1.software.title')}</h2>
              
              <div className="definition-box">
                <Lightbulb size={24} />
                <div>
                  <h4>{t('common.definition')}</h4>
                  <p>
                    {t('chapter1.software.definition')}
                  </p>
                </div>
              </div>

              <h3>{t('chapter1.software.typesTitle')}</h3>
              <div className="software-types">
                {softwareTypes.map((type, index) => (
                  <motion.div
                    key={type.type}
                    className="software-type-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="type-header" style={{ borderColor: type.color }}>
                      <type.icon size={32} style={{ color: type.color }} />
                      <h4>{type.type}</h4>
                    </div>
                    <p>{type.description}</p>
                    <div className="examples">
                      <strong>{t('common.examples')}:</strong>
                      <ul>
                        {type.examples.map((ex, i) => (
                          <li key={i}>{ex}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="software-components">
                <h3>{t('chapter1.software.componentsTitle')}</h3>
                <div className="components-diagram">
                  <div className="component-box main">
                    <Code size={24} />
                    <span>{t('chapter1.software.software')}</span>
                  </div>
                  <div className="component-arrows">
                    <div className="arrow-down"></div>
                  </div>
                  <div className="sub-components">
                    <div className="component-box">
                      <span>{t('chapter1.software.programs')}</span>
                    </div>
                    <div className="component-box">
                      <span>{t('chapter1.software.data')}</span>
                    </div>
                    <div className="component-box">
                      <span>{t('chapter1.software.documentation')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'engineering' && (
            <motion.div
              key="engineering"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="content-section"
            >
              <h2>{t('chapter1.engineering.title')}</h2>

              <div className="definition-box highlight">
                <Cog size={24} />
                <div>
                  <h4>{t('chapter1.engineering.ieeeTitle')}</h4>
                  <p>
                    {t('chapter1.engineering.ieeeDefinition')}
                  </p>
                </div>
              </div>

              <div className="objectives-section">
                <h3>{t('chapter1.engineering.objectivesTitle')}</h3>
                <div className="objectives-grid">
                  <div className="objective-card">
                    <div className="obj-number">01</div>
                    <h4>{t('chapter1.engineering.obj1')}</h4>
                    <p>{t('chapter1.engineering.obj1Desc')}</p>
                  </div>
                  <div className="objective-card">
                    <div className="obj-number">02</div>
                    <h4>{t('chapter1.engineering.obj2')}</h4>
                    <p>{t('chapter1.engineering.obj2Desc')}</p>
                  </div>
                  <div className="objective-card">
                    <div className="obj-number">03</div>
                    <h4>{t('chapter1.engineering.obj3')}</h4>
                    <p>{t('chapter1.engineering.obj3Desc')}</p>
                  </div>
                  <div className="objective-card">
                    <div className="obj-number">04</div>
                    <h4>{t('chapter1.engineering.obj4')}</h4>
                    <p>{t('chapter1.engineering.obj4Desc')}</p>
                  </div>
                </div>
              </div>

              <div className="engineering-principles">
                <h3>{t('chapter1.engineering.principlesTitle')}</h3>
                <div className="principles-list">
                  <div className="principle-item" onClick={() => toggleCard('p1')}>
                    <div className="principle-header">
                      {expandedCards['p1'] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                      <span>{t('chapter1.engineering.p1')}</span>
                    </div>
                    <AnimatePresence>
                      {expandedCards['p1'] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="principle-content"
                        >
                          {t('chapter1.engineering.p1Desc')}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="principle-item" onClick={() => toggleCard('p2')}>
                    <div className="principle-header">
                      {expandedCards['p2'] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                      <span>{t('chapter1.engineering.p2')}</span>
                    </div>
                    <AnimatePresence>
                      {expandedCards['p2'] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="principle-content"
                        >
                          {t('chapter1.engineering.p2Desc')}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="principle-item" onClick={() => toggleCard('p3')}>
                    <div className="principle-header">
                      {expandedCards['p3'] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                      <span>{t('chapter1.engineering.p3')}</span>
                    </div>
                    <AnimatePresence>
                      {expandedCards['p3'] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="principle-content"
                        >
                          {t('chapter1.engineering.p3Desc')}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="principle-item" onClick={() => toggleCard('p4')}>
                    <div className="principle-header">
                      {expandedCards['p4'] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                      <span>{t('chapter1.engineering.p4')}</span>
                    </div>
                    <AnimatePresence>
                      {expandedCards['p4'] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="principle-content"
                        >
                          {t('chapter1.engineering.p4Desc')}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'crisis' && (
            <motion.div
              key="crisis"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="content-section"
            >
              <h2>{t('chapter1.crisis.title')}</h2>

              <div className="crisis-intro">
                <AlertTriangle size={48} className="crisis-icon" />
                <p>
                  {t('chapter1.crisis.description')}
                </p>
              </div>

              <div className="crisis-stats">
                <div className="stat-card failed">
                  <XCircle size={32} />
                  <div className="stat-value">31%</div>
                  <div className="stat-label">{t('chapter1.crisis.cancelled')}</div>
                </div>
                <div className="stat-card warning">
                  <AlertTriangle size={32} />
                  <div className="stat-value">53%</div>
                  <div className="stat-label">{t('chapter1.crisis.overrun')}</div>
                </div>
                <div className="stat-card success">
                  <CheckCircle2 size={32} />
                  <div className="stat-value">16%</div>
                  <div className="stat-label">{t('chapter1.crisis.success')}</div>
                </div>
              </div>

              <h3>{t('chapter1.crisis.reasonsTitle')}</h3>
              <div className="causes-grid">
                {softwareCrisisReasons.map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    className="cause-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <reason.icon size={28} />
                    <h4>{reason.title}</h4>
                    <p>{reason.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="solution-box">
                <h3>{t('chapter1.crisis.solutionsTitle')}</h3>
                <ul>
                  <li><CheckCircle2 size={16} /> {t('chapter1.crisis.s1')}</li>
                  <li><CheckCircle2 size={16} /> {t('chapter1.crisis.s2')}</li>
                  <li><CheckCircle2 size={16} /> {t('chapter1.crisis.s3')}</li>
                  <li><CheckCircle2 size={16} /> {t('chapter1.crisis.s4')}</li>
                  <li><CheckCircle2 size={16} /> {t('chapter1.crisis.s5')}</li>
                </ul>
              </div>
            </motion.div>
          )}

          {activeSection === 'quality' && (
            <motion.div
              key="quality"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="content-section"
            >
              <h2>{t('chapter1.quality.title')}</h2>

              <div className="quality-intro">
                <Target size={48} className="quality-icon" />
                <p>
                  {t('chapter1.quality.description')}
                </p>
              </div>

              <h3>{t('chapter1.quality.factorsTitle')}</h3>
              <div className="quality-factors">
                {qualityFactors.map((factor, index) => (
                  <motion.div
                    key={factor.name}
                    className="quality-factor-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="factor-icon">
                      <factor.icon size={20} />
                    </div>
                    <div className="factor-content">
                      <h4>{factor.name}</h4>
                      <p>{factor.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="quality-triangle">
                <h3>{t('chapter1.quality.triangleTitle')}</h3>
                <div className="triangle-diagram">
                  <div className="triangle-vertex top">
                    <span>{t('chapter1.quality.triangleQuality')}</span>
                  </div>
                  <div className="triangle-vertex left">
                    <span>{t('chapter1.quality.triangleCost')}</span>
                  </div>
                  <div className="triangle-vertex right">
                    <span>{t('chapter1.quality.triangleTime')}</span>
                  </div>
                  <div className="triangle-center">
                    <span>{t('chapter1.quality.triangleBalance')}</span>
                  </div>
                </div>
                <p className="triangle-note">
                  {t('chapter1.quality.triangleNote')}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Chapter1;
