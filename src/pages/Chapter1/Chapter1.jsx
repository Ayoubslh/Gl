import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Code, Cog, Users, Target, AlertTriangle,
  CheckCircle2, XCircle, Layers, Workflow, Settings,
  ChevronDown, ChevronRight, Lightbulb, Box, Wrench
} from 'lucide-react';
import './Chapter1.css';

const Chapter1 = () => {
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
    { id: 'software', label: 'Logiciel', icon: Code },
    { id: 'engineering', label: 'Génie Logiciel', icon: Cog },
    { id: 'crisis', label: 'Crise du Logiciel', icon: AlertTriangle },
    { id: 'quality', label: 'Qualité', icon: Target }
  ];

  const softwareTypes = [
    {
      type: 'Logiciel Générique',
      icon: Box,
      description: 'Produits autonomes vendus sur le marché ouvert',
      examples: ['Systèmes d\'exploitation', 'Traitements de texte', 'Navigateurs web'],
      color: '#6366f1'
    },
    {
      type: 'Logiciel Sur Mesure',
      icon: Wrench,
      description: 'Systèmes commandés par un client particulier',
      examples: ['Systèmes de contrôle', 'Systèmes de gestion spécifiques', 'Applications métier'],
      color: '#8b5cf6'
    }
  ];

  const softwareCrisisReasons = [
    {
      title: 'Complexité croissante',
      description: 'Les logiciels deviennent de plus en plus complexes',
      icon: Layers
    },
    {
      title: 'Manque de méthodes',
      description: 'Absence de méthodologies de développement rigoureuses',
      icon: Workflow
    },
    {
      title: 'Gestion déficiente',
      description: 'Mauvaise estimation des coûts et des délais',
      icon: Settings
    },
    {
      title: 'Communication',
      description: 'Difficultés de communication entre équipes',
      icon: Users
    }
  ];

  const qualityFactors = [
    { name: 'Validité', description: 'Aptitude à réaliser les tâches définies par la spécification', icon: CheckCircle2 },
    { name: 'Fiabilité', description: 'Aptitude à fonctionner dans des conditions anormales', icon: Target },
    { name: 'Robustesse', description: 'Aptitude à fonctionner même en dehors des conditions normales', icon: Cog },
    { name: 'Extensibilité', description: 'Facilité d\'adaptation aux changements de spécification', icon: Layers },
    { name: 'Réutilisabilité', description: 'Aptitude à être réutilisé en tout ou partie', icon: Box },
    { name: 'Compatibilité', description: 'Aptitude à être combiné avec d\'autres logiciels', icon: Workflow },
    { name: 'Efficacité', description: 'Bonne utilisation des ressources matérielles', icon: Cog },
    { name: 'Portabilité', description: 'Facilité de transfert vers d\'autres environnements', icon: Settings },
    { name: 'Vérifiabilité', description: 'Facilité de préparation des procédures de test', icon: CheckCircle2 },
    { name: 'Intégrité', description: 'Protection contre les accès non autorisés', icon: Target }
  ];

  return (
    <div className="chapter-page">
      <motion.div 
        className="chapter-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="chapter-number">Chapitre 01</div>
        <h1>Introduction au Génie Logiciel</h1>
        <p className="chapter-subtitle">
          Fondamentaux du développement logiciel et importance de l'ingénierie
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
                <h2>Qu'est-ce que le Génie Logiciel ?</h2>
                <p>
                  Le génie logiciel est l'application d'une approche systématique, 
                  disciplinée et quantifiable au développement, à l'exploitation 
                  et à la maintenance du logiciel.
                </p>
              </div>

              <div className="key-concepts">
                <h3>Concepts Clés</h3>
                <div className="concepts-grid">
                  <div className="concept-card">
                    <div className="concept-icon" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
                      <Code size={24} />
                    </div>
                    <h4>Logiciel</h4>
                    <p>Ensemble des programmes, procédures et documentation associée</p>
                  </div>
                  <div className="concept-card">
                    <div className="concept-icon" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                      <Cog size={24} />
                    </div>
                    <h4>Ingénierie</h4>
                    <p>Application de principes scientifiques et mathématiques</p>
                  </div>
                  <div className="concept-card">
                    <div className="concept-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                      <Users size={24} />
                    </div>
                    <h4>Processus</h4>
                    <p>Ensemble structuré d'activités pour le développement</p>
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
              <h2>Le Logiciel</h2>
              
              <div className="definition-box">
                <Lightbulb size={24} />
                <div>
                  <h4>Définition</h4>
                  <p>
                    Un logiciel est un ensemble de programmes, de procédures, 
                    de règles et de documentation associée, relatifs au fonctionnement 
                    d'un ensemble de traitement de l'information.
                  </p>
                </div>
              </div>

              <h3>Types de Logiciels</h3>
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
                      <strong>Exemples:</strong>
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
                <h3>Composants d'un Logiciel</h3>
                <div className="components-diagram">
                  <div className="component-box main">
                    <Code size={24} />
                    <span>Logiciel</span>
                  </div>
                  <div className="component-arrows">
                    <div className="arrow-down"></div>
                  </div>
                  <div className="sub-components">
                    <div className="component-box">
                      <span>Programmes</span>
                    </div>
                    <div className="component-box">
                      <span>Données</span>
                    </div>
                    <div className="component-box">
                      <span>Documentation</span>
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
              <h2>Le Génie Logiciel</h2>

              <div className="definition-box highlight">
                <Cog size={24} />
                <div>
                  <h4>Définition IEEE</h4>
                  <p>
                    "Application d'une approche systématique, disciplinée et quantifiable 
                    au développement, à l'exploitation et à la maintenance du logiciel; 
                    c'est-à-dire l'application de l'ingénierie au logiciel."
                  </p>
                </div>
              </div>

              <div className="objectives-section">
                <h3>Objectifs du Génie Logiciel</h3>
                <div className="objectives-grid">
                  <div className="objective-card">
                    <div className="obj-number">01</div>
                    <h4>Qualité</h4>
                    <p>Produire des logiciels de haute qualité répondant aux besoins</p>
                  </div>
                  <div className="objective-card">
                    <div className="obj-number">02</div>
                    <h4>Délais</h4>
                    <p>Respecter les échéances de livraison</p>
                  </div>
                  <div className="objective-card">
                    <div className="obj-number">03</div>
                    <h4>Coûts</h4>
                    <p>Maîtriser les coûts de développement</p>
                  </div>
                  <div className="objective-card">
                    <div className="obj-number">04</div>
                    <h4>Maintenance</h4>
                    <p>Faciliter l'évolution et la maintenance</p>
                  </div>
                </div>
              </div>

              <div className="engineering-principles">
                <h3>Principes Fondamentaux</h3>
                <div className="principles-list">
                  <div className="principle-item" onClick={() => toggleCard('p1')}>
                    <div className="principle-header">
                      {expandedCards['p1'] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                      <span>Rigueur et Formalisme</span>
                    </div>
                    <AnimatePresence>
                      {expandedCards['p1'] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="principle-content"
                        >
                          Utilisation de méthodes formelles et d'outils pour garantir la qualité
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="principle-item" onClick={() => toggleCard('p2')}>
                    <div className="principle-header">
                      {expandedCards['p2'] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                      <span>Séparation des préoccupations</span>
                    </div>
                    <AnimatePresence>
                      {expandedCards['p2'] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="principle-content"
                        >
                          Décomposition du problème en sous-problèmes indépendants
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="principle-item" onClick={() => toggleCard('p3')}>
                    <div className="principle-header">
                      {expandedCards['p3'] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                      <span>Modularité</span>
                    </div>
                    <AnimatePresence>
                      {expandedCards['p3'] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="principle-content"
                        >
                          Division du système en modules indépendants et cohésifs
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="principle-item" onClick={() => toggleCard('p4')}>
                    <div className="principle-header">
                      {expandedCards['p4'] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                      <span>Abstraction</span>
                    </div>
                    <AnimatePresence>
                      {expandedCards['p4'] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="principle-content"
                        >
                          Masquer les détails pour se concentrer sur l'essentiel
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
              <h2>La Crise du Logiciel</h2>

              <div className="crisis-intro">
                <AlertTriangle size={48} className="crisis-icon" />
                <p>
                  La "crise du logiciel" désigne les difficultés rencontrées dans le 
                  développement de logiciels depuis les années 1960. Elle se manifeste 
                  par des dépassements de budget, des retards et des logiciels défaillants.
                </p>
              </div>

              <div className="crisis-stats">
                <div className="stat-card failed">
                  <XCircle size={32} />
                  <div className="stat-value">31%</div>
                  <div className="stat-label">Projets annulés</div>
                </div>
                <div className="stat-card warning">
                  <AlertTriangle size={32} />
                  <div className="stat-value">53%</div>
                  <div className="stat-label">Dépassement coûts/délais</div>
                </div>
                <div className="stat-card success">
                  <CheckCircle2 size={32} />
                  <div className="stat-value">16%</div>
                  <div className="stat-label">Projets réussis</div>
                </div>
              </div>

              <h3>Causes de la Crise</h3>
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
                <h3>Solutions Apportées</h3>
                <ul>
                  <li><CheckCircle2 size={16} /> Adoption de méthodologies structurées</li>
                  <li><CheckCircle2 size={16} /> Utilisation de langages de programmation évolués</li>
                  <li><CheckCircle2 size={16} /> Mise en place d'outils de gestion de projet</li>
                  <li><CheckCircle2 size={16} /> Formation des développeurs aux bonnes pratiques</li>
                  <li><CheckCircle2 size={16} /> Approches orientées objet et UML</li>
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
              <h2>Qualité du Logiciel</h2>

              <div className="quality-intro">
                <Target size={48} className="quality-icon" />
                <p>
                  La qualité logicielle est l'ensemble des caractéristiques d'un logiciel 
                  qui lui confèrent l'aptitude à satisfaire des besoins exprimés ou implicites.
                </p>
              </div>

              <h3>Facteurs de Qualité</h3>
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
                <h3>Le Triangle de la Qualité</h3>
                <div className="triangle-diagram">
                  <div className="triangle-vertex top">
                    <span>Qualité</span>
                  </div>
                  <div className="triangle-vertex left">
                    <span>Coût</span>
                  </div>
                  <div className="triangle-vertex right">
                    <span>Délai</span>
                  </div>
                  <div className="triangle-center">
                    <span>Équilibre</span>
                  </div>
                </div>
                <p className="triangle-note">
                  Ces trois contraintes sont interdépendantes : améliorer l'une 
                  impacte généralement les deux autres.
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
