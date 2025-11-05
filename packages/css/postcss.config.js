module.exports = {
  plugins: {
    tailwindcss: {
      config: '../core/tailwind.config.js'
    },
    autoprefixer: {},
    cssnano: process.env.NODE_ENV === 'production' ? {} : false,
  },
}
