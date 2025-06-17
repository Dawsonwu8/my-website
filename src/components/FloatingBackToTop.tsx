import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function FloatingBackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <button
        onClick={scrollToTop}
        className={`w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg hover:bg-[#C19B2E] transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="返回頂部"
      >
        <FaArrowUp className="text-white text-2xl" />
      </button>
    </div>
  );
}