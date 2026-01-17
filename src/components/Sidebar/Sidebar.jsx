import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Box, 
  Home,
  GraduationCap,
  ChevronRight,
  Sparkles,
  Settings,
  Layers,
  GitBranch,
  Activity,
  RotateCcw,
  Cog
} from 'lucide-react';
import './Sidebar.css';

const chapters = [
  {
    id: 'home',
    path: '/',
    title: 'Accueil',
    icon: Home,
    description: 'Vue d\'ensemble'
  },
  {
    id: 'chapter1',
    path: '/chapter1',
    title: 'Chapitre 1',
    subtitle: 'Intro Génie Logiciel',
    icon: Cog,
    description: 'Fondamentaux'
  },
  {
    id: 'chapter2',
    path: '/chapter2',
    title: 'Chapitre 2',
    subtitle: 'Processus de Développement',
    icon: Settings,
    description: 'Merise, UP, 2TUP'
  },
  {
    id: 'chapter3',
    path: '/chapter3',
    title: 'Chapitre 3',
    subtitle: 'Introduction à UML',
    icon: Layers,
    description: 'Concepts UML'
  },
  {
    id: 'chapter4',
    path: '/chapter4',
    title: 'Chapitre 4',
    subtitle: 'Cas d\'Utilisation',
    icon: Users,
    description: 'Use Cases'
  },
  {
    id: 'chapter5',
    path: '/chapter5',
    title: 'Chapitre 5',
    subtitle: 'Classes & Objets',
    icon: Box,
    description: 'Diagrammes de Classes'
  },
  {
    id: 'chapter6',
    path: '/chapter6',
    title: 'Chapitre 6',
    subtitle: 'Diagrammes de Séquence',
    icon: GitBranch,
    description: 'Interactions'
  },
  {
    id: 'chapter7',
    path: '/chapter7',
    title: 'Chapitre 7',
    subtitle: 'Diagrammes d\'Activité',
    icon: Activity,
    description: 'Flux & Actions'
  },
  {
    id: 'chapter8',
    path: '/chapter8',
    title: 'Chapitre 8',
    subtitle: 'Diagrammes d\'États',
    icon: RotateCcw,
    description: 'State Diagrams'
  },
  {
    id: 'quiz',
    path: '/quiz',
    title: 'Quiz Interactif',
    icon: GraduationCap,
    description: 'Testez vos connaissances'
  }
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="logo-icon">
            <BookOpen size={24} />
          </div>
          <div className="logo-text">
            <span className="logo-title">GL Revision</span>
            <span className="logo-subtitle">UML Mastery</span>
          </div>
        </motion.div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <span className="nav-section-title">Navigation</span>
          <ul className="nav-list">
            {chapters.map((chapter, index) => (
              <motion.li 
                key={chapter.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <NavLink 
                  to={chapter.path}
                  className={({ isActive }) => 
                    `nav-item ${isActive ? 'active' : ''}`
                  }
                >
                  <chapter.icon className="nav-icon" size={20} />
                  <div className="nav-content">
                    <span className="nav-title">{chapter.title}</span>
                    {chapter.subtitle && (
                      <span className="nav-subtitle">{chapter.subtitle}</span>
                    )}
                  </div>
                  <ChevronRight className="nav-arrow" size={16} />
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="progress-card">
          <div className="progress-header">
            <Sparkles size={16} />
            <span>Votre Progression</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '45%' }}></div>
          </div>
          <span className="progress-text">45% complété</span>
        </div>
      </div>
    </aside>
  );
}
