import React from 'react';
import Navbar from '../components/layout/Navbar'; // Import the new component
import heroImage from '../assets/Dava-logo2.jpeg';

const Home = () => {
  return (
    <div className="relative">
      {/* The Navbar stays fixed at the top */}
      <Navbar /> 
      
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {/* Your Hero Image Code here */}
        <img 
          src={heroImage} 
          className="h-full w-full object-cover object-center" 
          alt="DAVA Crew" 
        />
      </section>

      {/* Adding enough height so you can actually test the scroll animation */}
      <section className="h-screen bg-zinc-900">
        <h2 className="p-20 text-white">Keep scrolling to see the Navbar blur...</h2>
      </section>
    </div>
  );
};

export default Home;