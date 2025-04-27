"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ResizableNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Controlar visibilidade baseada no scroll
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Se rolar mais de 100px para baixo, mostrar o navbar
        if (window.scrollY > 100) {
          setShow(true);
        } 
        // Armazenar a posição atual do scroll
        setLastScrollY(window.scrollY);
      }
    };

    // Adicionar event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      
      // Cleanup - remover event listener
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navItems = [
    { name: 'Solutions', link: '/solutions' },
    { name: 'Services', link: '/services' },
    { name: 'Integrations', link: '/integrations' },
    { name: 'Process', link: '/process' },
  ];

  return (
    <div className={`w-full bg-transparent py-4 px-4 sm:px-6 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto">
        <div className="bg-gray-100/80 backdrop-blur-sm rounded-full px-6 py-3 flex flex-wrap items-center justify-between shadow-sm">
          {/* Logo */}
          <Link href="/" className="text-blue-500 font-bold text-xl mr-6">
            LOOK SMARTE
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden ml-auto" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-center">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/get-started"
              className="px-6 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden mt-2 bg-gray-100/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm">
            <nav className="px-4 py-3">
              <ul className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <li key={item.link}>
                    <Link
                      href={item.link}
                      onClick={() => setMobileOpen(false)}
                      className="block text-gray-700 hover:text-gray-900 py-2"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href="/get-started"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full px-6 py-2 bg-black text-white text-center font-medium rounded-full hover:bg-gray-800 transition-colors"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
