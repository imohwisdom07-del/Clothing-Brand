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
      // 1. Entrance: Fast, aggressive "power" ease
      const tl = gsap.timeline();
      tl.from([logoRef.current, ...linksRef.current], {
        y: -15,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power4.out",
        delay: 0.5
      });

      // 2. Scroll Logic: Smooth transition to dark glass
      gsap.to(navRef.current, {
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        paddingTop: "1.25rem",
        paddingBottom: "1.25rem",
        scrollTrigger: {
          trigger: "body",
          start: "top -20",
          toggleActions: "play none none reverse",
        }
      });
    });
    return () => ctx.revert();
  }, []);

return (
    <nav 
      ref={navRef}
      /* We use 'bg-gradient-to-b' to fade from a soft dark tint to total transparency */
      className="fixed top-0 z-[100] w-full px-6 py-10 md:px-16 bg-gradient-to-b from-black/40 to-transparent"
    >
      <div className="mx-auto flex max-w-[1800px] items-center justify-between">
        
        {/* Logo - It needs to be bold to stand out against the background */}
        <div 
          ref={logoRef}
          className="cursor-pointer text-3xl font-black italic tracking-tighter text-white drop-shadow-lg"
        >
          DAVA
        </div>

        {/* Links - We use a high 'tracking' and lowercase/uppercase mix for luxury vibes */}
        <div className="hidden items-center gap-14 md:flex">
          {['The Drop', 'Collection', 'Archive'].map((link, i) => (
            <a 
              key={link}
              ref={el => linksRef.current[i] = el}
              href={`#${link.toLowerCase()}`} 
              className="text-[10px] font-medium uppercase tracking-[0.5em] text-white/90 hover:text-white transition-all hover:scale-105"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA - Remove the button borders for a cleaner look */}
        <div className="flex items-center gap-10">
          <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 hover:text-white transition-opacity">
            Search
          </button>
          <button className="bg-white px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-black hover:bg-zinc-200 transition-colors">
            Cart (0)
          </button>
        </div>
      </div>
    </nav>
  );}

export default Navbar;