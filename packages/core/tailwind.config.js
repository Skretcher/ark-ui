/** @type {import('tailwindcss').Config} */
const fs = require('fs');
const path = require('path');

// Dynamically load tokens.json (if exists)
let tokens = {};
const tokenPath = path.resolve(__dirname, './tokens.json');
if (fs.existsSync(tokenPath)) {
  tokens = require(tokenPath);
}

module.exports = {
  darkMode: 'class', // supports .dark mode toggling
  content: [
    // Core packages
    '../react/src/**/*.{js,ts,jsx,tsx}',
    '../vue/src/**/*.{js,ts,vue}',
    '../angular/src/**/*.{js,ts,html}',
    '../svelte/src/**/*.{js,ts,svelte}',
    '../docs/src/**/*.{js,ts,jsx,tsx,vue,md}',
    // CSS and example demos
    './src/**/*.{css,html}',
    '../../example/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      /* ------------------------------
         🎨 Colors (mapped to CSS vars)
      ------------------------------ */
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
        warning: 'var(--color-warning)',
        info: 'var(--color-info)',
        light: 'var(--color-light)',
        dark: 'var(--color-dark)',
      },

      /* ------------------------------
         📏 Spacing & Sizing Tokens
      ------------------------------ */
      spacing: {
        ...tokens.spacing,
        128: '32rem',
        144: '36rem',
      },

      /* ------------------------------
         🧱 Radius & Shadows
      ------------------------------ */
      borderRadius: {
        ...tokens.borderRadius,
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: '1.25rem',
        full: '9999px',
      },
      boxShadow: {
        ...tokens.boxShadow,
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: '0 20px 25px rgba(0,0,0,0.1)',
      },

      /* ------------------------------
         🅰️ Typography
      ------------------------------ */
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)'],
        ...tokens.fontFamily,
      },
      fontSize: {
        xs: ['0.75rem', '1rem'],
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.125rem', '1.75rem'],
        xl: ['1.25rem', '1.75rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.25rem'],
        '4xl': ['2.25rem', '2.5rem'],
        ...tokens.fontSize,
      },
      fontWeight: {
        ...tokens.fontWeight,
      },
      lineHeight: {
        ...tokens.lineHeight,
      },

      /* ------------------------------
         ⚡ Transitions, Animations
      ------------------------------ */
      transitionDuration: {
        fast: 'var(--transition-fast)',
        DEFAULT: 'var(--transition-medium)',
        slow: 'var(--transition-slow)',
      },
      zIndex: {
        modal: 'var(--z-modal)',
        toast: 'var(--z-toast)',
        tooltip: 'var(--z-tooltip)',
      },
      keyframes: {
        'ark-fade-in': {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'ark-scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'ark-fade-in 0.3s ease-out',
        'scale-in': 'ark-scale-in 0.25s ease-out',
      },
    },
  },

  /* ------------------------------
     🔌 Plugins (optional)
  ------------------------------ */
  plugins: [
    // Tailwind official plugins (optional)
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
