import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-black selection:bg-white selection:text-black">
      {/* Navbar sits here globally */}
      <Navbar />
      
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;