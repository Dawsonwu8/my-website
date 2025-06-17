import { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '@/App';

const languages = [
  { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
  { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'zh-TW';
    const lang = languages.find(l => l.code === savedLanguage);
    if (lang) {
      setCurrentLanguage(lang);
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = e.target.value;
    const lang = languages.find(l => l.code === selectedCode);
    if (lang) {
      setCurrentLanguage(lang);
      setLanguage(selectedCode);
      localStorage.setItem('language', selectedCode);
    }
  };

  return (
    <div className="relative">
      <select
        value={currentLanguage.code}
        onChange={handleLanguageChange}
        className="appearance-none bg-white bg-opacity-10 hover:bg-opacity-20 transition-all rounded-full pl-3 pr-8 py-1 cursor-pointer focus:outline-none"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <i className="fa-solid fa-chevron-down text-xs"></i>
      </div>
    </div>
  );
}