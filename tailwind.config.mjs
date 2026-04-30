/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "surface-tint": "var(--surface-tint)",
        "accent-purple": "var(--accent-purple)",
        "background": "var(--background)",
        "on-background": "var(--on-background)",
        "surface": "var(--surface)",
        "on-surface": "var(--on-surface)",
        "surface-container": "var(--surface-container)",
        "surface-container-low": "var(--surface-container-low)",
        "surface-container-high": "var(--surface-container-high)",
        "surface-container-highest": "var(--surface-container-highest)",
        "surface-container-lowest": "var(--surface-container-lowest)",
        "on-surface-variant": "var(--on-surface-variant)",
        "outline": "var(--outline)",
        "outline-variant": "var(--outline-variant)",
        "primary-container": "var(--primary-container)",
        "on-primary-container": "var(--on-primary-container)",
        
        // Glass effect colors (mapped to variables)
        'glass-bg': 'var(--glass-bg)',
        'glass-border': 'var(--glass-border)',
        'glass-hover-bg': 'var(--glass-hover-bg)',
        
        // Keep legacy brand colors or map them if needed
        brand: {
          dark: '#0f111a',
          purple: '#8b5cf6',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          indigo: '#6366f1',
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
        "headline": ["Space Grotesk"],
        "display": ["Space Grotesk"],
        "body": ["Inter"],
        "label": ["Space Grotesk"],
        "sans": ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        "mono": ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
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
        "2xl": "1.5rem",
        "3xl": "2rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
};
