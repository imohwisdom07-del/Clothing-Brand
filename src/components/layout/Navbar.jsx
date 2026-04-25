import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance: Subtle slide down with a long fade
      const tl = gsap.timeline();
      tl.from([logoRef.current, ...linksRef.current], {
        y: -10,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.2
      });

      // 2. Scroll Animation: The 'Glass Reveal'
      gsap.to(navRef.current, {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(15px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        paddingTop: "1.25rem",
        paddingBottom: "1.25rem",
        scrollTrigger: {
          trigger: "body",
          start: "top -30",
          toggleActions: "play none none reverse",
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <nav 
      ref={navRef}
      /* Initial state is transparent with a soft gradient for contrast */
      className="fixed top-0 z-[100] w-full px-6 py-8 md:px-16 bg-gradient-to-b from-black/50 to-transparent transition-all duration-700 ease-in-out"
    >
      <div className="mx-auto flex max-w-[1800px] items-center justify-between">
        
        {/* Branding: Ultra-italic & heavy for impact */}
        <div 
          ref={logoRef}
          className="cursor-pointer text-3xl font-black italic tracking-tighter text-white hover:opacity-80 transition-opacity"
        >
          DAVA
        </div>

        {/* Navigation Links: Spaced out for high-fashion aesthetic */}
        <div className="hidden items-center gap-14 md:flex">
          {['The Drop', 'Collection', 'Archive'].map((link, i) => (
            <a 
              key={link}
              ref={el => linksRef.current[i] = el}
              href={`#${link.toLowerCase().replace(' ', '-')}`} 
              className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/60 hover:text-white transition-all hover:translate-y-[-1px]"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Functional Links */}
        <div className="flex items-center gap-8">
          <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 hover:text-white transition-opacity">
            Search
          </button>
          
          {/* Cart Button: High-contrast white box */}
          <button className="bg-white px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-black hover:bg-zinc-200 transition-colors">
            Cart (0)
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;