"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

type GradientState = {
  background: string;
  opacity: number;
  colors: string[];
  angle: number;
};

type GradientsState = {
  gradient1: GradientState;
  gradient2: GradientState;
};

export default function HomePage() {
  const generateGradient = (previousColors: string[] = []) => {
    // Only blues, purples, and pinks with slightly reduced saturation
    const colors = [
      // Blues (less saturated)
      "#e5f4fe", "#e3effd", "#d0e6fd", "#b5d8fd", "#8ac0fa", "#6ea8f0", "#5b89e6", "#4f76d8",
      // Purples (less saturated)
      "#f0ecfe", "#e6e0fd", "#d8cffa", "#bfb0f5", "#a996ed", "#9280e2", "#7c6ad5", "#6a5cc0",
      // Pinks (less saturated)
      "#fdf0f7", "#fce7f2", "#fac5e3", "#f5a5c8", "#ea8ab6", "#d66d9d", "#c45585", "#af4e7b"
    ];

    // Keep 2-3 colors from the previous gradient if available
    const keepFromPrevious = previousColors.length > 0 
      ? previousColors.slice(0, Math.floor(Math.random() * 2) + 2)
      : [];

    // Get remaining colors from the palette
    const remainingColors = colors.filter(color => !keepFromPrevious.includes(color));
    const shuffled = [...remainingColors].sort(() => 0.5 - Math.random());
    const newColors = shuffled.slice(0, Math.floor(Math.random() * 2) + 4);
    
    // Combine previous and new colors
    const selectedColors = [...keepFromPrevious, ...newColors];
    
    // Random angle, but keep it within 45 degrees of the previous angle if available
    const previousAngle = previousColors.length > 0 ? parseInt(previousColors[0]) : null;
    const angle = previousAngle 
      ? previousAngle + (Math.random() * 90 - 45)
      : Math.floor(Math.random() * 360);
    
    return {
      gradient: `linear-gradient(${angle}deg, ${selectedColors.join(', ')})`,
      colors: selectedColors,
      angle
    };
  };

  const [gradients, setGradients] = useState<GradientsState>(() => {
    const initialGradient = generateGradient();
    return {
      gradient1: {
        background: initialGradient.gradient,
        opacity: 1,
        colors: initialGradient.colors,
        angle: initialGradient.angle
      },
      gradient2: {
        background: generateGradient(initialGradient.colors).gradient,
        opacity: 0,
        colors: [],
        angle: 0
      }
    };
  });

  useEffect(() => {
    const transitionGradients = () => {
      // First transition: fade out gradient1, fade in gradient2
      setGradients(prev => ({
        gradient1: { ...prev.gradient1, opacity: 0 },
        gradient2: { ...prev.gradient2, opacity: 1 }
      }));

      // After fade completes, prepare the next gradient for gradient1
      setTimeout(() => {
        const newGradient = generateGradient(gradients.gradient2.colors);
        setGradients(prev => ({
          gradient1: { 
            background: newGradient.gradient,
            opacity: 0,
            colors: newGradient.colors,
            angle: newGradient.angle
          },
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
            const newGradient = generateGradient(gradients.gradient1.colors);
            setGradients(prev => ({
              gradient1: { ...prev.gradient1 },
              gradient2: { 
                background: newGradient.gradient,
                opacity: 0,
                colors: newGradient.colors,
                angle: newGradient.angle
              }
            }));
          }, 2000);
        }, 200);
      }, 2000);
    };

    // Initial gradient transition
    const intervalId = setInterval(transitionGradients, 8000);
    
    // Clean up
    return () => clearInterval(intervalId);
  }, [gradients.gradient1.colors, gradients.gradient2.colors]);

  return (
    <>
      <div 
        className="fixed inset-0 -z-10" 
        style={{
          background: gradients.gradient1.background,
          opacity: gradients.gradient1.opacity,
          transition: "opacity 2s cubic-bezier(0.4, 0, 0.2, 1)"
        }} 
      />
      <div 
        className="fixed inset-0 -z-10" 
        style={{
          background: gradients.gradient2.background,
          opacity: gradients.gradient2.opacity,
          transition: "opacity 2s cubic-bezier(0.4, 0, 0.2, 1)"
        }} 
      />
      <main className="flex flex-1 flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-black mb-4 text-2xl font-bold">Welcome to RMinte Docs</h1>
          <p className="text-white">
            You can open{' '}
            <Link
              href="/docs"
              className="text-black font-semibold underline"
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
