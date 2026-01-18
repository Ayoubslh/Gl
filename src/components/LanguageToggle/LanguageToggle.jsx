import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-toggle" 
      onClick={toggleLanguage}
      title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
    >
      <Globe size={18} />
      <span className="language-code">{language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageToggle;
