import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* This renders your Home.jsx where the DAVA hero image lives */}
      <Home />
    </div>
  );
}

// This line fixes the "Requested module does not provide an export named 'default'" error
export default App;