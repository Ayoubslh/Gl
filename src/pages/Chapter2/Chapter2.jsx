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
import './Chapter2.css';

const sections = [
  { id: 'intro', title: 'Introduction', icon: BookOpen },
  { id: 'merise', title: 'Méthode MERISE', icon: Layers },
  { id: 'up', title: 'Processus Unifié (UP)', icon: RefreshCw },
  { id: '2tup', title: 'Processus 2TUP', icon: GitBranch },
  { id: 'comparison', title: 'Comparaison', icon: Target }
];

export default function Chapter2() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div className="chapter-page">
      <motion.header 
        className="chapter-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="chapter-badge">
          <Settings size={20} />
          <span>Chapitre 2</span>
        </div>
        <h1>Processus de Développement Logiciel</h1>
        <p className="chapter-description">
          Découvrez les principales méthodologies de développement : MERISE, UP et 2TUP
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
                <h2>🎯 Introduction aux Processus de Développement</h2>
                
                <div className="info-card highlight">
                  <Lightbulb className="card-icon" />
                  <div>
                    <h4>Pourquoi un processus de développement ?</h4>
                    <p>
                      Un processus de développement logiciel est un ensemble structuré d'activités 
                      nécessaires pour transformer les besoins d'un utilisateur en produit logiciel.
                    </p>
                  </div>
                </div>

                <div className="concept-grid">
                  <div className="concept-card">
                    <div className="concept-icon">📋</div>
                    <h4>Définition</h4>
                    <p>
                      Un processus définit <strong>QUI</strong> fait <strong>QUOI</strong>, 
                      <strong>QUAND</strong> et <strong>COMMENT</strong> pour atteindre un objectif donné.
                    </p>
                  </div>
                  <div className="concept-card">
                    <div className="concept-icon">🔄</div>
                    <h4>Cycle de Vie</h4>
                    <p>
                      Le cycle de vie du logiciel comprend toutes les phases depuis la conception 
                      jusqu'à la maintenance et l'évolution.
                    </p>
                  </div>
                  <div className="concept-card">
                    <div className="concept-icon">✅</div>
                    <h4>Objectifs</h4>
                    <p>
                      Garantir la qualité, respecter les délais, maîtriser les coûts et 
                      satisfaire les besoins des utilisateurs.
                    </p>
                  </div>
                </div>

                <h3>Les Phases Classiques du Développement</h3>
                <div className="phases-diagram">
                  <div className="phase-item">
                    <div className="phase-number">1</div>
                    <div className="phase-content">
                      <h4>Étude Préalable</h4>
                      <p>Analyse des besoins et faisabilité</p>
                    </div>
                  </div>
                  <ArrowRight className="phase-arrow" />
                  <div className="phase-item">
                    <div className="phase-number">2</div>
                    <div className="phase-content">
                      <h4>Conception</h4>
                      <p>Architecture et modélisation</p>
                    </div>
                  </div>
                  <ArrowRight className="phase-arrow" />
                  <div className="phase-item">
                    <div className="phase-number">3</div>
                    <div className="phase-content">
                      <h4>Réalisation</h4>
                      <p>Codage et tests unitaires</p>
                    </div>
                  </div>
                  <ArrowRight className="phase-arrow" />
                  <div className="phase-item">
                    <div className="phase-number">4</div>
                    <div className="phase-content">
                      <h4>Mise en Œuvre</h4>
                      <p>Déploiement et formation</p>
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
                <h2>📊 Méthode MERISE</h2>
                
                <div className="info-card">
                  <div>
                    <h4>Définition</h4>
                    <p>
                      MERISE (Méthode d'Étude et de Réalisation Informatique pour les Systèmes d'Entreprise) 
                      est une méthode française de conception des systèmes d'information, créée dans les années 1970.
                    </p>
                  </div>
                </div>

                <h3>Les 3 Cycles de MERISE</h3>
                <div className="merise-cycles">
                  <div className="cycle-card">
                    <div className="cycle-header abstraction">
                      <Layers size={24} />
                      <h4>Cycle d'Abstraction</h4>
                    </div>
                    <div className="cycle-body">
                      <ul>
                        <li><strong>Conceptuel</strong> - QUOI ? (le métier)</li>
                        <li><strong>Logique/Organisationnel</strong> - QUI ? OÙ ? QUAND ?</li>
                        <li><strong>Physique</strong> - COMMENT ?</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="cycle-card">
                    <div className="cycle-header decision">
                      <Target size={24} />
                      <h4>Cycle de Décision</h4>
                    </div>
                    <div className="cycle-body">
                      <ul>
                        <li>Étude préalable</li>
                        <li>Étude détaillée</li>
                        <li>Étude technique</li>
                        <li>Production</li>
                      </ul>
                    </div>
                  </div>

                  <div className="cycle-card">
                    <div className="cycle-header lifecycle">
                      <RefreshCw size={24} />
                      <h4>Cycle de Vie</h4>
                    </div>
                    <div className="cycle-body">
                      <ul>
                        <li>Conception</li>
                        <li>Réalisation</li>
                        <li>Maintenance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3>Modèles MERISE</h3>
                <div className="models-table">
                  <div className="table-header">
                    <span>Niveau</span>
                    <span>Données</span>
                    <span>Traitements</span>
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
                <h2>🔄 Processus Unifié (UP)</h2>
                
                <div className="info-card highlight">
                  <div>
                    <h4>Définition</h4>
                    <p>
                      Le Processus Unifié (UP - Unified Process) est un processus de développement logiciel 
                      <strong> itératif et incrémental</strong>, centré sur l'architecture et piloté par les cas d'utilisation.
                    </p>
                  </div>
                </div>

                <h3>Caractéristiques Clés</h3>
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon">🔁</div>
                    <h4>Itératif</h4>
                    <p>Le projet est découpé en itérations courtes avec des livrables à chaque cycle</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">📈</div>
                    <h4>Incrémental</h4>
                    <p>Chaque itération ajoute de nouvelles fonctionnalités au système</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🏗️</div>
                    <h4>Centré Architecture</h4>
                    <p>L'architecture logicielle est au cœur du processus</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">👥</div>
                    <h4>Piloté par Use Cases</h4>
                    <p>Les cas d'utilisation guident le développement</p>
                  </div>
                </div>

                <h3>Les 4 Phases du UP</h3>
                <div className="up-phases">
                  <div className="up-phase inception">
                    <div className="phase-label">Inception</div>
                    <div className="phase-desc">
                      <h4>Lancement</h4>
                      <ul>
                        <li>Définir la portée du projet</li>
                        <li>Identifier les risques majeurs</li>
                        <li>Établir l'étude de faisabilité</li>
                      </ul>
                    </div>
                  </div>
                  <div className="up-phase elaboration">
                    <div className="phase-label">Élaboration</div>
                    <div className="phase-desc">
                      <h4>Planification</h4>
                      <ul>
                        <li>Analyser le domaine</li>
                        <li>Établir l'architecture</li>
                        <li>Éliminer les risques</li>
                      </ul>
                    </div>
                  </div>
                  <div className="up-phase construction">
                    <div className="phase-label">Construction</div>
                    <div className="phase-desc">
                      <h4>Développement</h4>
                      <ul>
                        <li>Développer le système</li>
                        <li>Réaliser les tests</li>
                        <li>Produire les versions bêta</li>
                      </ul>
                    </div>
                  </div>
                  <div className="up-phase transition">
                    <div className="phase-label">Transition</div>
                    <div className="phase-desc">
                      <h4>Déploiement</h4>
                      <ul>
                        <li>Déployer le système</li>
                        <li>Former les utilisateurs</li>
                        <li>Corriger les défauts</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3>Disciplines du UP</h3>
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
                <h2>🔀 Processus 2TUP</h2>
                
                <div className="info-card highlight">
                  <div>
                    <h4>Définition</h4>
                    <p>
                      2TUP (2 Track Unified Process) est un processus qui sépare les aspects 
                      <strong> fonctionnels</strong> et <strong>techniques</strong> du développement 
                      en deux branches parallèles qui fusionnent ensuite.
                    </p>
                  </div>
                </div>

                <h3>Architecture en Y</h3>
                <div className="tup-diagram">
                  <div className="tup-branch functional">
                    <div className="branch-header">🎯 Branche Fonctionnelle</div>
                    <div className="branch-steps">
                      <div className="step">Capture des besoins fonctionnels</div>
                      <div className="step">Analyse des besoins</div>
                      <div className="step">Modélisation métier</div>
                    </div>
                  </div>
                  <div className="tup-merge">
                    <div className="merge-point">⚡ Fusion</div>
                    <div className="merge-steps">
                      <div className="step">Conception préliminaire</div>
                      <div className="step">Conception détaillée</div>
                      <div className="step">Codage & Tests</div>
                      <div className="step">Recette & Déploiement</div>
                    </div>
                  </div>
                  <div className="tup-branch technical">
                    <div className="branch-header">⚙️ Branche Technique</div>
                    <div className="branch-steps">
                      <div className="step">Capture des besoins techniques</div>
                      <div className="step">Conception générique</div>
                      <div className="step">Architecture technique</div>
                    </div>
                  </div>
                </div>

                <h3>Avantages du 2TUP</h3>
                <div className="advantages-grid">
                  <div className="advantage-card">
                    <CheckCircle2 className="advantage-icon" />
                    <div>
                      <h4>Parallélisation</h4>
                      <p>Les équipes fonctionnelles et techniques travaillent en parallèle</p>
                    </div>
                  </div>
                  <div className="advantage-card">
                    <CheckCircle2 className="advantage-icon" />
                    <div>
                      <h4>Réutilisation</h4>
                      <p>L'architecture technique peut être réutilisée pour d'autres projets</p>
                    </div>
                  </div>
                  <div className="advantage-card">
                    <CheckCircle2 className="advantage-icon" />
                    <div>
                      <h4>Flexibilité</h4>
                      <p>Changements fonctionnels sans impact sur l'architecture technique</p>
                    </div>
                  </div>
                  <div className="advantage-card">
                    <CheckCircle2 className="advantage-icon" />
                    <div>
                      <h4>Spécialisation</h4>
                      <p>Chaque équipe se concentre sur son domaine d'expertise</p>
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
                <h2>📊 Comparaison des Processus</h2>
                
                <div className="comparison-table">
                  <div className="comp-header">
                    <span>Critère</span>
                    <span>MERISE</span>
                    <span>UP</span>
                    <span>2TUP</span>
                  </div>
                  <div className="comp-row">
                    <span className="criteria">Origine</span>
                    <span>France (1970s)</span>
                    <span>Rational/IBM</span>
                    <span>Valtech</span>
                  </div>
                  <div className="comp-row">
                    <span className="criteria">Approche</span>
                    <span>Séquentielle</span>
                    <span>Itérative</span>
                    <span>Itérative (Y)</span>
                  </div>
                  <div className="comp-row">
                    <span className="criteria">Focus</span>
                    <span>Données</span>
                    <span>Use Cases</span>
                    <span>Fonc. + Tech.</span>
                  </div>
                  <div className="comp-row">
                    <span className="criteria">Notation</span>
                    <span>Propre (MCD...)</span>
                    <span>UML</span>
                    <span>UML</span>
                  </div>
                  <div className="comp-row">
                    <span className="criteria">Flexibilité</span>
                    <span>Faible</span>
                    <span>Élevée</span>
                    <span>Élevée</span>
                  </div>
                </div>

                <div className="summary-cards">
                  <div className="summary-card merise">
                    <h4>📋 MERISE</h4>
                    <p>Idéal pour les SI avec forte composante données. Approche structurée et rigoureuse.</p>
                    <div className="tags">
                      <span className="tag">Bases de données</span>
                      <span className="tag">SI classiques</span>
                    </div>
                  </div>
                  <div className="summary-card up">
                    <h4>🔄 UP</h4>
                    <p>Processus flexible et adaptable. Standard de l'industrie avec UML.</p>
                    <div className="tags">
                      <span className="tag">Projets complexes</span>
                      <span className="tag">Équipes agiles</span>
                    </div>
                  </div>
                  <div className="summary-card tup">
                    <h4>🔀 2TUP</h4>
                    <p>Séparation claire fonctionnel/technique. Permet la réutilisation.</p>
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
