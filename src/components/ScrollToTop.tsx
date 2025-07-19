import React from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  showScrollTop: boolean;
  scrollToTop: () => void;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ showScrollTop, scrollToTop }) => {
  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-8 w-12 h-12 bg-gradient-primary text-primary-foreground rounded-full shadow-elegant hover:opacity-90 transition-opacity z-50"
    >
      <ArrowUp className="w-6 h-6 mx-auto" />
    </button>
  );
};

export default ScrollToTop; 