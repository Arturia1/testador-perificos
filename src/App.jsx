import React, { useState } from 'react';
import KeyboardTester from './KeyboardTester';
import MouseTester from './MouseTester';
import WebcamTester from './WebcamTester'; // <--- Importando o módulo de Webcam
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // --- TELA INICIAL (DASHBOARD) ---
  if (activeTab === 'home') {
    return (
      <div className="dashboard-container">
        <header>
          <h1>HARDWARE_TEST_CENTER v1.0</h1>
          <p>Selecione o periférico para diagnóstico</p>
        </header>

        <div className="grid-menu">
          <button className="card" onClick={() => setActiveTab('keyboard')}>
            <span className="icon">⌨️</span>
            <h3>Teclado</h3>
            <p>Layouts Dell, HP, Lenovo e Positivo</p>
          </button>

          <button className="card" onClick={() => setActiveTab('mouse')}>
            <span className="icon">🖱️</span>
            <h3>Mouse</h3>
            <p>DPI, Cliques e Polling Rate</p>
          </button>

          <button className="card" onClick={() => setActiveTab('webcam')}>
            <span className="icon">📷</span>
            <h3>Webcam</h3>
            <p>Resolução e Taxa de Quadros</p>
          </button>

          <button className="card" onClick={() => setActiveTab('monitor')}>
            <span className="icon">🖥️</span>
            <h3>Monitor</h3>
            <p>Cores sólidas e Dead Pixels</p>
          </button>
        </div>
      </div>
    );
  }

  // --- TELA DOS MÓDULOS ---
  return (
    <div className="module-wrapper">
      {/* Botão de voltar padrão do seu layout (Fica visível se o módulo não tiver seu próprio header com voltar) */}
      <button className="back-btn" onClick={() => setActiveTab('home')}>← Voltar ao Menu</button>
      
      {/* MÓDULO TECLADO */}
      {activeTab === 'keyboard' && <KeyboardTester />}
      
      {/* MÓDULO MOUSE (Passando onBack para usar o botão interno dele) */}
      {activeTab === 'mouse' && <MouseTester onBack={() => setActiveTab('home')} />}
      
      {/* MÓDULO WEBCAM (Ativado) */}
      {activeTab === 'webcam' && <WebcamTester onBack={() => setActiveTab('home')} />}
      
      {/* MÓDULO MONITOR (Placeholder) */}
      {activeTab === 'monitor' && (
        <div className="monitor-test" style={{color: 'white', textAlign: 'center', marginTop: '50px'}}>
          <h2>Módulo Monitor em desenvolvimento...</h2>
        </div>
      )}
    </div>
  );
}