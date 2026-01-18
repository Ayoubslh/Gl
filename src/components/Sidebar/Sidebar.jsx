import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
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

const getChapters = (t) => [
  {
    id: 'home',
    path: '/',
    title: t('nav.home'),
    icon: Home,
    description: t('nav.home')
  },
  {
    id: 'chapter1',
    path: '/chapter1',
    title: 'Ch. 1',
    subtitle: t('nav.chapter1'),
    icon: Cog,
    description: t('nav.chapter1')
  },
  {
    id: 'chapter2',
    path: '/chapter2',
    title: 'Ch. 2',
    subtitle: t('nav.chapter2'),
    icon: Settings,
    description: t('nav.chapter2')
  },
  {
    id: 'chapter3',
    path: '/chapter3',
    title: 'Ch. 3',
    subtitle: t('nav.chapter3'),
    icon: Layers,
    description: t('nav.chapter3')
  },
  {
    id: 'chapter4',
    path: '/chapter4',
    title: 'Ch. 4',
    subtitle: t('nav.chapter4'),
    icon: Users,
    description: t('nav.chapter4')
  },
  {
    id: 'chapter5',
    path: '/chapter5',
    title: 'Ch. 5',
    subtitle: t('nav.chapter5'),
    icon: Box,
    description: t('nav.chapter5')
  },
  {
    id: 'chapter6',
    path: '/chapter6',
    title: 'Ch. 6',
    subtitle: t('nav.chapter6'),
    icon: GitBranch,
    description: t('nav.chapter6')
  },
  {
    id: 'chapter7',
    path: '/chapter7',
    title: 'Ch. 7',
    subtitle: t('nav.chapter7'),
    icon: Activity,
    description: t('nav.chapter7')
  },
  {
    id: 'chapter8',
    path: '/chapter8',
    title: 'Ch. 8',
    subtitle: t('nav.chapter8'),
    icon: RotateCcw,
    description: t('nav.chapter8')
  },
  {
    id: 'quiz',
    path: '/quiz',
    title: t('nav.quiz'),
    icon: GraduationCap,
    description: t('nav.quiz')
  }
];

export default function Sidebar() {
  const { t, language } = useLanguage();
  const chapters = getChapters(t);
  
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
        <LanguageToggle />
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <span className="nav-section-title">{t('nav.chapters')}</span>
          <ul className="nav-list">
            {chapters.map((chapter, index) => (
              <motion.li 
                key={chapter.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
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
            <span>{language === 'fr' ? 'Votre Progression' : 'Your Progress'}</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '45%' }}></div>
          </div>
          <span className="progress-text">{language === 'fr' ? '45% complété' : '45% completed'}</span>
        </div>
      </div>
    </aside>
  );
}
