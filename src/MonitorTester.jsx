import React, { useState, useEffect } from 'react';

export default function MonitorTester({ onBack }) {
  const colors = ['#ffffff', '#ff0000', '#00ff00', '#0000ff', '#000000'];
  const [index, setIndex] = useState(0);

  // Fecha o teste ao apertar ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onBack();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onBack]);

  return (
    <div 
      onClick={() => setIndex((index + 1) % colors.length)}
      style={{ 
        backgroundColor: colors[index], 
        position: 'fixed', top: 0, left: 0,
        width: '100vw', height: '100vh', 
        zIndex: 9999, cursor: 'none'
      }}
    >
      <div style={{ 
        color: index === 0 ? '#000' : '#fff', 
        opacity: 0.2, textAlign: 'center', marginTop: '45vh',
        pointerEvents: 'none', fontSize: '12px'
      }}>
        CLIQUE PARA TROCAR COR | ESC PARA VOLTAR
      </div>
    </div>
  );
}