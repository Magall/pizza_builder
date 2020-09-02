module.exports = {
  publicPath: '/pizzaBuilder/',
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/constraints.scss";`
        }
      }
    }
  };// vue.config.js
