module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        'xxl' : '750px',
        'xl' : '500px',
        'l' : '350px',
      },
      height: {
        'xxl' : '750px',
        'xl' : '500px',
        'l' : '350px',
      },
      inset: {
        '22': '22%',
      },
      spacing: {
        'halfplus': '54%'
      }
    },
    fontFamily: {
      playfair: ['Playfair Display'],
      syne: ['Syne'],
      cigra: ['Cigra'],
      gyahegi: ['Gyahegi'],
    },
    animation: {
      blob: "blob 20s infinite",
    },
    keyframes: {
      blob: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
        },
        "33%": {
          transform: "translate(-96px, -80px) scale(1.3)",
        },
        "66%": {
          transform: "translate(-20px, 20px) scale(1.1)",
        },
        "100%": {
          transform: "tranlate(0px, 0px) scale(1)",
        },
      },
    },
  },
    variants: {
    extend: {},
  },
  plugins: [],
}
