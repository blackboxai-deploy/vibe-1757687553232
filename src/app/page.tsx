"use client";

import { useState } from "react";
import ECard from "@/components/ECard";
import ThemeSelector from "@/components/ThemeSelector";

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState("elegant");

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins tracking-tight">
            Special E-Card
          </h1>
          <p className="text-lg md:text-xl text-purple-200 font-light max-w-2xl">
            A heartfelt message crafted with love and beautiful animations
          </p>
        </div>

        <ThemeSelector currentTheme={currentTheme} onThemeChange={setCurrentTheme} />
        
        <ECard theme={currentTheme} />
        
        <div className="text-center space-y-4">
          <p className="text-purple-200 text-sm">
            Share this beautiful message with someone special
          </p>
          <button 
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Link copied to clipboard!");
            }}
            className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105"
          >
            📋 Copy Link to Share
          </button>
        </div>
      </div>
    </main>
  );
}