import animations from '@midudev/tailwind-animations'
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,vue,ts}"],
  theme: {
    extend: {},
  },
  plugins: [animations],
}

