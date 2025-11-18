import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaTimes } from 'react-icons/fa';

const Toast = ({ message, type, onClose, duration = 5000 }) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const icons = {
    success: <FaCheckCircle className="text-green-400" />,
    error: <FaTimesCircle className="text-red-400" />,
  };

  const styles = {
    success: 'bg-green-500/20 border-green-500/50 text-green-400',
    error: 'bg-red-500/20 border-red-500/50 text-red-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed top-4 right-4 md:top-6 md:right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-lg border backdrop-blur-md shadow-lg shadow-primary/20 min-w-[300px] max-w-[400px] ${styles[type]}`}
    >
      <div className="text-xl">{icons[type]}</div>
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="text-current/70 hover:text-current transition-colors"
      >
        <FaTimes className="text-sm" />
      </button>
    </motion.div>
  );
};

export const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <AnimatePresence>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
          duration={toast.duration}
        />
      ))}
    </AnimatePresence>
  );
};

export default Toast;

