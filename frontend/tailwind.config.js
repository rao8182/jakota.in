/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Blue - Authority + Trust
        primary: {
          50: '#e8ecf2',
          100: '#d1dae5',
          200: '#a3b5cb',
          300: '#7590b1',
          400: '#476b97',
          500: '#1F3A5F', // Main brand blue
          600: '#1a3151',
          700: '#152843',
          800: '#101f35',
          900: '#0b1627',
        },
        // Accent Yellow/Gold - Speed + Execution
        accent: {
          50: '#fef9eb',
          100: '#fdf3d7',
          200: '#fbe7af',
          300: '#f9db87',
          400: '#f7cf5f',
          500: '#F5B21A', // Main accent gold
          600: '#d99c12',
          700: '#b5820f',
          800: '#91680c',
          900: '#6d4e09',
        },
        // Steel Grey - Industrial Neutral
        steel: {
          50: '#f7f9fc',  // Off-white/Concrete background
          100: '#eef1f5',
          200: '#dde3eb',
          300: '#bcc6d3',
          400: '#8d9bac',
          500: '#5F6C7B', // Main steel grey
          600: '#4d5866',
          700: '#3b4450',
          800: '#29303b',
          900: '#0F172A', // Dark slate
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
