"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [gradients, setGradients] = useState({
    gradient1: {
      background: "linear-gradient(-45deg, #e5f4fe, #e3effd, #f0ecfe, #f6eeff, #fcf0ff, #fdf0f7)",
      opacity: 1
    },
    gradient2: {
      background: "linear-gradient(45deg, #e3effd, #e5eeff, #f7f5ff, #fcf0ff, #fce7f2, #fdf0f7)",
      opacity: 0
    }
  });

  const generateGradient = () => {
    // Only blues, purples, and pinks with slightly reduced saturation
    const colors = [
      // Blues (less saturated)
      "#e5f4fe", "#e3effd", "#d0e6fd", "#b5d8fd", "#8ac0fa", "#6ea8f0", "#5b89e6", "#4f76d8",
      // Purples (less saturated)
      "#f0ecfe", "#e6e0fd", "#d8cffa", "#bfb0f5", "#a996ed", "#9280e2", "#7c6ad5", "#6a5cc0",
      // Pinks (less saturated)
      "#fdf0f7", "#fce7f2", "#fac5e3", "#f5a5c8", "#ea8ab6", "#d66d9d", "#c45585", "#af4e7b"
    ];

    // Shuffle and select colors
    const shuffled = [...colors].sort(() => 0.5 - Math.random());
    const selectedColors = shuffled.slice(0, Math.floor(Math.random() * 3) + 6);
    
    // Random angle
    const angle = Math.floor(Math.random() * 360);
    
    return `linear-gradient(${angle}deg, ${selectedColors.join(', ')})`;
  };

  useEffect(() => {
    const transitionGradients = () => {
      // First transition: fade out gradient1, fade in gradient2
      setGradients(prev => ({
        gradient1: { ...prev.gradient1, opacity: 0 },
        gradient2: { ...prev.gradient2, opacity: 1 }
      }));

      // After fade completes, prepare the next gradient for gradient1
      setTimeout(() => {
        setGradients(prev => ({
          gradient1: { background: generateGradient(), opacity: 0 },
          gradient2: { ...prev.gradient2 }
        }));
        
        // Start fading gradient1 back in and gradient2 out
        setTimeout(() => {
          setGradients(prev => ({
            gradient1: { ...prev.gradient1, opacity: 1 },
            gradient2: { ...prev.gradient2, opacity: 0 }
          }));
          
          // After fade completes, prepare the next gradient for gradient2
          setTimeout(() => {
            setGradients(prev => ({
              gradient1: { ...prev.gradient1 },
              gradient2: { background: generateGradient(), opacity: 0 }
            }));
          }, 3000);
        }, 200);
      }, 3000);
    };

    // Initial gradient transition (slowed down)
    const intervalId = setInterval(transitionGradients, 12000);
    
    // Clean up
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div 
        className="fixed inset-0 -z-10" 
        style={{
          background: gradients.gradient1.background,
          opacity: gradients.gradient1.opacity,
          transition: "opacity 3s cubic-bezier(0.4, 0, 0.2, 1)"
        }} 
      />
      <div 
        className="fixed inset-0 -z-10" 
        style={{
          background: gradients.gradient2.background,
          opacity: gradients.gradient2.opacity,
          transition: "opacity 3s cubic-bezier(0.4, 0, 0.2, 1)"
        }} 
      />
      <main className="flex flex-1 flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">Welcome to RMinte Docs</h1>
          <p className="text-fd-muted-foreground">
            You can open{' '}
            <Link
              href="/docs"
              className="text-fd-foreground font-semibold underline"
            >
              /docs
            </Link>{' '}
            and see the documentation.
          </p>
        </div>
      </main>
    </>
  );
}
