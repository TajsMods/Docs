/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "on-tertiary-fixed-variant": "#41474f",
        "surface-tint": "#00dbe9",
        "surface-bright": "#353940",
        "surface": "#10141a",
        "on-tertiary-fixed": "#161c23",
        "surface-container": "#1c2026",
        "on-secondary-fixed-variant": "#42474f",
        "secondary-fixed-dim": "#c2c7d0",
        "error-container": "#93000a",
        "primary-fixed": "#7df4ff",
        "on-tertiary-container": "#595f67",
        "on-primary-container": "#006970",
        "on-error-container": "#ffdad6",
        "primary-container": "#00f0ff",
        "surface-container-low": "#181c22",
        "surface-container-high": "#262a31",
        "tertiary": "#f1f6ff",
        "on-surface-variant": "#b9cacb",
        "secondary": "#c2c7d0",
        "inverse-primary": "#006970",
        "tertiary-fixed-dim": "#c1c7d0",
        "on-primary": "#00363a",
        "outline": "#849495",
        "tertiary-container": "#d4dae3",
        "outline-variant": "#3b494b",
        "inverse-on-surface": "#2d3137",
        "inverse-surface": "#dfe2eb",
        "background": "#10141a",
        "on-secondary": "#2c3138",
        "primary": "#dbfcff",
        "on-secondary-fixed": "#171c23",
        "secondary-container": "#42474f",
        "surface-container-lowest": "#0a0e14",
        "tertiary-fixed": "#dde3ec",
        "on-background": "#dfe2eb",
        "secondary-fixed": "#dee2ec",
        "on-primary-fixed-variant": "#004f54",
        "on-tertiary": "#2b3138",
        "surface-container-highest": "#31353c",
        "surface-dim": "#10141a",
        "on-surface": "#dfe2eb",
        "on-error": "#690005",
        "on-secondary-container": "#b1b5bf",
        "primary-fixed-dim": "#00dbe9",
        "surface-variant": "#31353c",
        "on-primary-fixed": "#002022",
        "error": "#ffb4ab",
        "accent-purple": "#8b5cf6",
        
        // Accent colors (keeping for backwards compatibility)
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Primary orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        
        // Background colors from the new design
        'bg-dark': '#0f111a', // Deep dark blue/black
        'bg-panel': 'rgba(30, 32, 45, 0.6)',
        
        // Glass effect colors
        'glass-bg': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'glass-highlight': 'rgba(255, 255, 255, 0.15)',
        
        // Brand specific colors
        brand: {
          dark: '#0f111a',   // Deep dark background
          purple: '#8b5cf6', // Neon purple
          blue: '#3b82f6',   // Neon blue
          cyan: '#06b6d4',   // Cyber cyan
          indigo: '#6366f1', // Indigo
        },
        
        // Dark theme backgrounds (updated for new design)
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#0f111a', // Updated to match new design
        },
      },
      backgroundImage: {
         'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
         'glow-mesh': 'radial-gradient(at 0% 0%, rgba(139, 92, 246, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(0, 219, 233, 0.15) 0px, transparent 50%)',
         'page-gradient': 'radial-gradient(circle at 50% 0%, #1c2026 0%, #10141a 60%)',
         'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #1c2026 0deg, #00dbe9 180deg, #1c2026 360deg)',
         'hero-glow': 'radial-gradient(ellipse at center, rgba(0, 219, 233, 0.15) 0%, transparent 60%)',
      },
      fontFamily: {
        "headline": [
                "Space Grotesk"
        ],
        "display": [
                "Space Grotesk"
        ],
        "body": [
                "Inter"
        ],
        "label": [
                "Space Grotesk"
        ]
,
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 219, 233, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 219, 233, 0.5)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
,
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};
