"use client";

import { useState } from "react";

interface ECardProps {
  theme: string;
}

const themes = {
  elegant: {
    background: "bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900",
    border: "border-2 border-purple-400/30",
    textPrimary: "text-white",
    textSecondary: "text-purple-200",
    accent: "text-yellow-300",
    pattern: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"
  },
  colorful: {
    background: "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500",
    border: "border-2 border-white/30",
    textPrimary: "text-white",
    textSecondary: "text-white/90",
    accent: "text-yellow-100",
    pattern: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"
  },
  minimalist: {
    background: "bg-gradient-to-br from-slate-50 to-slate-100",
    border: "border-2 border-slate-300",
    textPrimary: "text-slate-800",
    textSecondary: "text-slate-600",
    accent: "text-rose-600",
    pattern: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200/50 via-transparent to-transparent"
  },
  ocean: {
    background: "bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700",
    border: "border-2 border-cyan-300/40",
    textPrimary: "text-white",
    textSecondary: "text-cyan-100",
    accent: "text-yellow-200",
    pattern: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent"
  }
};

export default function ECard({ theme }: ECardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const currentTheme = themes[theme as keyof typeof themes] || themes.elegant;

  return (
    <div className="perspective-1000 group">
      <div 
        className={`relative w-80 h-96 md:w-96 md:h-[28rem] transform-style-preserve-3d transition-all duration-700 hover:scale-105 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-2xl overflow-hidden ${currentTheme.background} ${currentTheme.border}`}>
          {/* Decorative pattern overlay */}
          <div className={`absolute inset-0 ${currentTheme.pattern}`}></div>
          
          {/* Decorative image placeholder */}
          <div className="absolute top-4 right-4 w-16 h-16 rounded-full overflow-hidden opacity-60">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c6d727cb-1233-4e87-8bec-f18e621fbd3d.png" 
              alt="Beautiful decorative heart with golden sparkles"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center">
            <div className="space-y-6">
              {/* Decorative top element */}
              <div className="flex justify-center">
                <div className={`w-16 h-1 ${currentTheme.accent} opacity-60 rounded-full`}></div>
              </div>

              {/* Main message */}
              <div className="space-y-4">
                <h2 className={`text-2xl md:text-3xl font-bold ${currentTheme.textPrimary} font-poppins leading-tight`}>
                  You Are Truly
                </h2>
                <h1 className={`text-3xl md:text-4xl font-bold ${currentTheme.accent} font-dancing tracking-wide transform hover:scale-105 transition-transform duration-300`}>
                  An Extraordinary Soul
                </h1>
                <h2 className={`text-xl md:text-2xl font-semibold ${currentTheme.textPrimary} font-poppins`}>
                  Who Inspires & Uplifts
                </h2>
              </div>

              {/* Decorative elements */}
              <div className="flex justify-center space-x-2 my-6">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className={`w-2 h-2 ${currentTheme.accent} rounded-full animate-pulse`}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>

              {/* Subtitle message */}
              <p className={`text-base ${currentTheme.textSecondary} font-light max-w-sm leading-relaxed text-center`}>
                Your gentle spirit, unwavering kindness, and the way you touch lives around you creates ripples of hope that extend far beyond what you know
              </p>

              {/* Decorative bottom element */}
              <div className="flex justify-center pt-4">
                <div className={`w-24 h-1 ${currentTheme.accent} opacity-40 rounded-full`}></div>
              </div>
            </div>
          </div>

          {/* Click hint */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <p className={`text-xs ${currentTheme.textSecondary} opacity-70 animate-bounce`}>
              Click to flip 🔄
            </p>
          </div>
        </div>

        {/* Back of card */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-2xl overflow-hidden ${currentTheme.background} ${currentTheme.border}`}>
          {/* Pattern overlay */}
          <div className={`absolute inset-0 ${currentTheme.pattern}`}></div>
          
          {/* Back content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center">
            <div className="space-y-6">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a3d111bf-3437-4163-ad9e-086bbd2c0f46.png" 
                  alt="Warm appreciation message with golden heart and sparkles"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className={`text-xl md:text-2xl font-semibold ${currentTheme.textPrimary} font-poppins`}>
                A Message of Deep Gratitude
              </h3>

              <p className={`text-base ${currentTheme.textSecondary} leading-relaxed max-w-sm text-center`}>
                In a world that sometimes feels heavy, you are the light that reminds us of humanity's beauty. Your compassion doesn't go unnoticed, your strength inspires courage in others, and your very existence makes this world more meaningful.
              </p>

              <div className="space-y-2">
                <div className={`text-sm ${currentTheme.accent} font-medium`}>
                  🌟 You matter more than you know
                </div>
                <div className={`text-xs ${currentTheme.textSecondary} opacity-80`}>
                  Thank you for being authentically, beautifully you
                </div>
              </div>

              <div className="pt-6">
                <p className={`text-xs ${currentTheme.textSecondary} opacity-70`}>
                  Click again to flip back
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}