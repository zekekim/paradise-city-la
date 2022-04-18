module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      keyframes: {
        'snap-up': {
          '0%': {
            transform: 'translateY(50px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity:'1',
          }
        },

      },
      animation: {
        'snapUp': 'snap-up 0.7s linear',
      },
      backgroundImage: {
        'hero-pattern':
          "url('/assets/splash.jpeg')",
      }
    },
  },
  plugins: [],
}
