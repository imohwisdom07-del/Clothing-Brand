import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/Dava-logo2.jpeg'; 

const Home = () => {
  return (
    <div className="relative min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-zinc-900">
        
        {/* The Photoshoot Image */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.19, 1, 0.22, 1] }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={heroImage} 
            alt="DAVA Collection" 
            /* object-right keeps the models in view even as the width shrinks */
            className="h-full w-full object-cover object-right brightness-75 transition-all duration-700"
          />
          
          {/* Subtle gradient to ensure the Nav and Hero text stay crisp */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </motion.div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <h1 className="text-8xl font-black italic tracking-tighter text-white md:text-[12rem] drop-shadow-2xl">
              DAVA
            </h1>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.6em] text-white/60">
              Lagos worldwide — 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Next Content Area (Placeholder for Grid) */}
      <section className="h-screen bg-black">
        {/* Your ProductGrid component will go here later */}
      </section>
      
    </div>
  );
};

export default Home;