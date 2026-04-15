import { useEffect } from 'react';

const Toast = ({ message, show, onClose }) => {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(onClose, 2500);
    return () => clearTimeout(timer);
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-xs rounded-2xl bg-white/95 px-5 py-4 shadow-2xl shadow-slate-500/10 ring-1 ring-slate-200 backdrop-blur-sm transition-all duration-300">
      <p className="text-sm font-semibold text-slate-900">{message}</p>
    </div>
  );
};

export default Toast;
