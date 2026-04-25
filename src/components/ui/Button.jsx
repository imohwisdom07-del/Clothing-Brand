import React from 'react';

const Button = ({ children, variant = 'primary', className = '' }) => {
  const styles = {
    primary: 'bg-white text-black hover:bg-gray-200',
    outline: 'border border-white/20 text-white hover:bg-white/5 backdrop-blur-sm',
  };

  return (
    <button className={`
      px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300
      active:scale-95 rounded-none ${styles[variant]} ${className}
    `}>
      {children}
    </button>
  );
};

export default Button;