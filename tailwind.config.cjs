// tailwind.config.cjs

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/form'),
    ],
  };