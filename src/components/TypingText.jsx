import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingText = ({ text, speed = 100, deleteSpeed = 50, pauseTime = 2000, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;

    const type = () => {
      if (!isDeleting && currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(type, speed);
      } else if (!isDeleting && currentIndex === text.length) {
        // Pause at full text
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
          type();
        }, pauseTime);
      } else if (isDeleting && currentIndex > 0) {
        // Delete
        currentIndex--;
        setDisplayedText(text.slice(0, currentIndex));
        timeoutId = setTimeout(type, deleteSpeed);
      } else if (isDeleting && currentIndex === 0) {
        // Start typing again
        setIsDeleting(false);
        timeoutId = setTimeout(type, 500);
      }
    };

    timeoutId = setTimeout(type, 500);

    return () => clearTimeout(timeoutId);
  }, [text, speed, deleteSpeed, pauseTime, isDeleting]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-0.5 h-full bg-current ml-1"
      >
        |
      </motion.span>
    </span>
  );
};

export default TypingText;
