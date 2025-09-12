"use client";

interface ThemeSelectorProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

const themes = [
  {
    id: "elegant",
    name: "Elegant",
    preview: "bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900",
    description: "Classic and sophisticated"
  },
  {
    id: "colorful",
    name: "Colorful",
    preview: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    description: "Vibrant and energetic"
  },
  {
    id: "minimalist",
    name: "Minimalist",
    preview: "bg-gradient-to-r from-slate-50 to-slate-200",
    description: "Clean and simple"
  },
  {
    id: "ocean",
    name: "Ocean",
    preview: "bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700",
    description: "Calm and refreshing"
  }
];

export default function ThemeSelector({ currentTheme, onThemeChange }: ThemeSelectorProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-white text-sm font-medium opacity-80">Choose a Theme</h3>
      
      <div className="flex flex-wrap gap-3 justify-center">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onThemeChange(theme.id)}
            className={`group relative flex flex-col items-center space-y-2 p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
              currentTheme === theme.id 
                ? 'bg-white/20 backdrop-blur-sm border border-white/40' 
                : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
            }`}
            title={theme.description}
          >
            {/* Theme preview */}
            <div className={`w-12 h-8 rounded-lg ${theme.preview} shadow-lg border border-white/20 ${
              currentTheme === theme.id ? 'ring-2 ring-white/50' : ''
            }`}>
            </div>
            
            {/* Theme name */}
            <span className={`text-xs font-medium transition-colors ${
              currentTheme === theme.id ? 'text-white' : 'text-white/70 group-hover:text-white/90'
            }`}>
              {theme.name}
            </span>

            {/* Active indicator */}
            {currentTheme === theme.id && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}