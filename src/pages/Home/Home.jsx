import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Box, Brain, Zap, Target, Settings, Layers, GitBranch, Activity, Cog, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './Home.css';

const getFeatures = (language) => [
  {
    icon: Brain,
    title: language === 'fr' ? 'Apprentissage Interactif' : 'Interactive Learning',
    description: language === 'fr' 
      ? 'Visualisez les concepts UML avec des diagrammes animés et interactifs.'
      : 'Visualize UML concepts with animated and interactive diagrams.'
  },
  {
    icon: Zap,
    title: language === 'fr' ? 'Quiz Adaptatifs' : 'Adaptive Quizzes',
    description: language === 'fr'
      ? 'Testez vos connaissances avec des questions adaptées à votre niveau.'
      : 'Test your knowledge with questions adapted to your level.'
  },
  {
    icon: Target,
    title: language === 'fr' ? 'Exemples Pratiques' : 'Practical Examples',
    description: language === 'fr'
      ? 'Apprenez avec des cas d\'utilisation réels et des exercices guidés.'
      : 'Learn with real use cases and guided exercises.'
  }
];

const getChapters = (language) => [
  {
    id: 'chapter1',
    path: '/chapter1',
    number: '01',
    title: language === 'fr' ? 'Introduction au Génie Logiciel' : 'Introduction to Software Engineering',
    description: language === 'fr' 
      ? 'Fondamentaux du développement logiciel, qualité et crise du logiciel.'
      : 'Software development fundamentals, quality and software crisis.',
    icon: Cog,
    topics: language === 'fr' ? ['Logiciel', 'Qualité', 'Crise', 'Ingénierie'] : ['Software', 'Quality', 'Crisis', 'Engineering'],
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)'
  },
  {
    id: 'chapter2',
    path: '/chapter2',
    number: '02',
    title: language === 'fr' ? 'Processus de Développement' : 'Development Process',
    description: language === 'fr'
      ? 'Découvrez MERISE, UP et 2TUP : les méthodologies de développement logiciel.'
      : 'Discover MERISE, UP and 2TUP: software development methodologies.',
    icon: Settings,
    topics: ['MERISE', 'UP', '2TUP', language === 'fr' ? 'Cycles' : 'Cycles'],
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
  },
  {
    id: 'chapter3',
    path: '/chapter3',
    number: '03',
    title: language === 'fr' ? 'Introduction à UML' : 'Introduction to UML',
    description: language === 'fr'
      ? 'Les fondamentaux d\'UML : historique, diagrammes et vues architecturales.'
      : 'UML fundamentals: history, diagrams and architectural views.',
    icon: Layers,
    topics: language === 'fr' ? ['Historique', 'Diagrammes', 'Vues 4+1', 'Notation'] : ['History', 'Diagrams', '4+1 Views', 'Notation'],
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
  },
  {
    id: 'chapter4',
    path: '/chapter4',
    number: '04',
    title: language === 'fr' ? 'Diagrammes de Cas d\'Utilisation' : 'Use Case Diagrams',
    description: language === 'fr'
      ? 'Maîtrisez les Use Cases : acteurs, relations et modélisation des besoins.'
      : 'Master Use Cases: actors, relations and requirements modeling.',
    icon: Users,
    topics: language === 'fr' ? ['Acteurs', 'Use Cases', 'Include/Extend', 'Scénarios'] : ['Actors', 'Use Cases', 'Include/Extend', 'Scenarios'],
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
  },
  {
    id: 'chapter5',
    path: '/chapter5',
    number: '05',
    title: language === 'fr' ? 'Diagrammes de Classes & Objets' : 'Class & Object Diagrams',
    description: language === 'fr'
      ? 'Structure statique : classes, attributs, méthodes et associations.'
      : 'Static structure: classes, attributes, methods and associations.',
    icon: Box,
    topics: language === 'fr' ? ['Classes', 'Attributs', 'Relations', 'Héritage'] : ['Classes', 'Attributes', 'Relations', 'Inheritance'],
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)'
  },
  {
    id: 'chapter6',
    path: '/chapter6',
    number: '06',
    title: language === 'fr' ? 'Diagrammes de Séquence' : 'Sequence Diagrams',
    description: language === 'fr'
      ? 'Modélisez les interactions temporelles entre objets du système.'
      : 'Model temporal interactions between system objects.',
    icon: GitBranch,
    topics: ['Lifelines', 'Messages', 'Fragments', language === 'fr' ? 'Boucles' : 'Loops'],
    gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)'
  },
  {
    id: 'chapter7',
    path: '/chapter7',
    number: '07',
    title: language === 'fr' ? 'Diagrammes d\'Activité' : 'Activity Diagrams',
    description: language === 'fr'
      ? 'Flux de contrôle, processus métier et algorithmes visuels.'
      : 'Control flow, business processes and visual algorithms.',
    icon: Activity,
    topics: ['Actions', language === 'fr' ? 'Décisions' : 'Decisions', 'Fork/Join', 'Swimlanes'],
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)'
  },
  {
    id: 'chapter8',
    path: '/chapter8',
    number: '08',
    title: language === 'fr' ? 'Diagrammes d\'États' : 'State Diagrams',
    description: language === 'fr'
      ? 'Modélisez le comportement dynamique avec les états et transitions.'
      : 'Model dynamic behavior with states and transitions.',
    icon: RotateCcw,
    topics: language === 'fr' ? ['États', 'Transitions', 'Gardes', 'Composites'] : ['States', 'Transitions', 'Guards', 'Composites'],
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)'
  }
];

export default function Home() {
  const { language } = useLanguage();
  const features = getFeatures(language);
  const chapters = getChapters(language);
  
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
            <span>{language === 'fr' ? 'Révision Génie Logiciel' : 'Software Engineering Review'}</span>
          </div>
          
          <h1 className="hero-title">
            {language === 'fr' ? 'Maîtrisez' : 'Master'} <span className="gradient-text">UML</span> {language === 'fr' ? 'pour vos examens' : 'for your exams'}
          </h1>
          
          <p className="hero-description">
            {language === 'fr' 
              ? 'Une plateforme de révision interactive pour comprendre les diagrammes UML en profondeur. Visualisez, pratiquez, et réussissez.'
              : 'An interactive review platform to understand UML diagrams in depth. Visualize, practice, and succeed.'}
          </p>
          
          <div className="hero-actions">
            <Link to="/chapter1" className="btn btn-primary">
              <span>{language === 'fr' ? 'Commencer la révision' : 'Start reviewing'}</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/quiz" className="btn btn-secondary">
              {language === 'fr' ? 'Tester mes connaissances' : 'Test my knowledge'}
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
          <h2 className="section-title">{language === 'fr' ? 'Chapitres de Révision' : 'Review Chapters'}</h2>
          <p className="section-description">
            {language === 'fr' 
              ? 'Explorez chaque chapitre en détail avec des explications visuelles et des exercices pratiques.'
              : 'Explore each chapter in detail with visual explanations and practical exercises.'}
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
                  <span>{language === 'fr' ? 'Explorer le chapitre' : 'Explore chapter'}</span>
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
