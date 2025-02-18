module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',  // Custom background color
        foreground: 'var(--foreground)',  // Custom foreground/text color
        primary: 'var(--primary)',        // Custom primary color
        secondary: 'var(--secondary)',    // Custom secondary color
        accent: 'var(--accent)',          // Custom accent color
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
