import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Box, Brain, Zap, Target, Settings, Layers, GitBranch, Activity, Cog, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const features = [
  {
    icon: Brain,
    title: 'Apprentissage Interactif',
    description: 'Visualisez les concepts UML avec des diagrammes animés et interactifs.'
  },
  {
    icon: Zap,
    title: 'Quiz Adaptatifs',
    description: 'Testez vos connaissances avec des questions adaptées à votre niveau.'
  },
  {
    icon: Target,
    title: 'Exemples Pratiques',
    description: 'Apprenez avec des cas d\'utilisation réels et des exercices guidés.'
  }
];

const chapters = [
  {
    id: 'chapter1',
    path: '/chapter1',
    number: '01',
    title: 'Introduction au Génie Logiciel',
    description: 'Fondamentaux du développement logiciel, qualité et crise du logiciel.',
    icon: Cog,
    topics: ['Logiciel', 'Qualité', 'Crise', 'Ingénierie'],
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)'
  },
  {
    id: 'chapter2',
    path: '/chapter2',
    number: '02',
    title: 'Processus de Développement',
    description: 'Découvrez MERISE, UP et 2TUP : les méthodologies de développement logiciel.',
    icon: Settings,
    topics: ['MERISE', 'UP', '2TUP', 'Cycles'],
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
  },
  {
    id: 'chapter3',
    path: '/chapter3',
    number: '03',
    title: 'Introduction à UML',
    description: 'Les fondamentaux d\'UML : historique, diagrammes et vues architecturales.',
    icon: Layers,
    topics: ['Historique', 'Diagrammes', 'Vues 4+1', 'Notation'],
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
  },
  {
    id: 'chapter4',
    path: '/chapter4',
    number: '04',
    title: 'Diagrammes de Cas d\'Utilisation',
    description: 'Maîtrisez les Use Cases : acteurs, relations et modélisation des besoins.',
    icon: Users,
    topics: ['Acteurs', 'Use Cases', 'Include/Extend', 'Scénarios'],
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
  },
  {
    id: 'chapter5',
    path: '/chapter5',
    number: '05',
    title: 'Diagrammes de Classes & Objets',
    description: 'Structure statique : classes, attributs, méthodes et associations.',
    icon: Box,
    topics: ['Classes', 'Attributs', 'Relations', 'Héritage'],
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)'
  },
  {
    id: 'chapter6',
    path: '/chapter6',
    number: '06',
    title: 'Diagrammes de Séquence',
    description: 'Modélisez les interactions temporelles entre objets du système.',
    icon: GitBranch,
    topics: ['Lifelines', 'Messages', 'Fragments', 'Boucles'],
    gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)'
  },
  {
    id: 'chapter7',
    path: '/chapter7',
    number: '07',
    title: 'Diagrammes d\'Activité',
    description: 'Flux de contrôle, processus métier et algorithmes visuels.',
    icon: Activity,
    topics: ['Actions', 'Décisions', 'Fork/Join', 'Swimlanes'],
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)'
  },
  {
    id: 'chapter8',
    path: '/chapter8',
    number: '08',
    title: 'Diagrammes d\'États',
    description: 'Modélisez le comportement dynamique avec les états et transitions.',
    icon: RotateCcw,
    topics: ['États', 'Transitions', 'Gardes', 'Composites'],
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)'
  }
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-badge">
            <BookOpen size={14} />
            <span>Révision Génie Logiciel</span>
          </div>
          
          <h1 className="hero-title">
            Maîtrisez <span className="gradient-text">UML</span> pour vos examens
          </h1>
          
          <p className="hero-description">
            Une plateforme de révision interactive pour comprendre les diagrammes UML 
            en profondeur. Visualisez, pratiquez, et réussissez.
          </p>
          
          <div className="hero-actions">
            <Link to="/chapter2" className="btn btn-primary">
              <span>Commencer la révision</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/quiz" className="btn btn-secondary">
              Tester mes connaissances
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="visual-card">
            <div className="visual-diagram">
              <svg viewBox="0 0 300 200" className="uml-preview">
                {/* Actor */}
                <g className="actor">
                  <circle cx="50" cy="40" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <line x1="50" y1="52" x2="50" y2="85" stroke="currentColor" strokeWidth="2"/>
                  <line x1="30" y1="65" x2="70" y2="65" stroke="currentColor" strokeWidth="2"/>
                  <line x1="50" y1="85" x2="35" y2="110" stroke="currentColor" strokeWidth="2"/>
                  <line x1="50" y1="85" x2="65" y2="110" stroke="currentColor" strokeWidth="2"/>
                  <text x="50" y="125" textAnchor="middle" className="diagram-text">Acteur</text>
                </g>
                
                {/* Use Case */}
                <ellipse cx="180" cy="60" rx="60" ry="30" fill="none" stroke="currentColor" strokeWidth="2"/>
                <text x="180" y="65" textAnchor="middle" className="diagram-text">Cas d'utilisation</text>
                
                {/* Connection */}
                <line x1="70" y1="55" x2="120" y2="55" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5,3"/>
                
                {/* Class */}
                <rect x="130" y="120" width="100" height="60" fill="none" stroke="currentColor" strokeWidth="2" rx="4"/>
                <line x1="130" y1="140" x2="230" y2="140" stroke="currentColor" strokeWidth="1"/>
                <line x1="130" y1="160" x2="230" y2="160" stroke="currentColor" strokeWidth="1"/>
                <text x="180" y="134" textAnchor="middle" className="diagram-text-bold">Classe</text>
                <text x="180" y="154" textAnchor="middle" className="diagram-text-small">- attribut: Type</text>
                <text x="180" y="174" textAnchor="middle" className="diagram-text-small">+ methode()</text>
              </svg>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <div className="feature-icon">
                <feature.icon size={24} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chapters Section */}
      <section className="chapters">
        <div className="section-header">
          <h2 className="section-title">Chapitres de Révision</h2>
          <p className="section-description">
            Explorez chaque chapitre en détail avec des explications visuelles et des exercices pratiques.
          </p>
        </div>

        <div className="chapters-grid">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
            >
              <Link to={chapter.path} className="chapter-card">
                <div className="chapter-header">
                  <span className="chapter-number">{chapter.number}</span>
                  <div className="chapter-icon" style={{ background: chapter.gradient }}>
                    <chapter.icon size={24} />
                  </div>
                </div>
                
                <h3 className="chapter-title">{chapter.title}</h3>
                <p className="chapter-description">{chapter.description}</p>
                
                <div className="chapter-topics">
                  {chapter.topics.map(topic => (
                    <span key={topic} className="topic-tag">{topic}</span>
                  ))}
                </div>
                
                <div className="chapter-action">
                  <span>Explorer le chapitre</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
