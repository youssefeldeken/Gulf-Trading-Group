module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gtg: {
          blue: {
            50: '#e6f4f8',
            100: '#cce9f1',
            500: '#0091b9',
            600: '#007494',
            700: '#00576f',
            900: '#001d25',
          },
          cyan: {
            50: '#e6f9fc',
            100: '#ccf3f9',
            500: '#00c3e1',
            600: '#009cb4',
          },
          green: {
            50: '#e8f7f0',
            500: '#19af69',
            600: '#148c54',
          },
        },
      },
    },
  },
  plugins: [],
}