import { useRef, useState, useEffect } from 'react';

export function useServiceNavigation() {
  const [activeCategory, setActiveCategory] = useState<string>('');
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const categoryBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      let currentActive = '';

      Object.entries(categoryRefs.current).forEach(([categoryId, ref]) => {
        if (ref) {
          const { top, bottom } = ref.getBoundingClientRect();
          if (top <= viewportHeight * 0.5 && bottom >= 0) {
            currentActive = categoryId;
          }
        }
      });

      if (currentActive) {
        setActiveCategory(currentActive);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    activeCategory,
    setActiveCategory,
    categoryRefs,
    categoryBarRef,
  };
}
