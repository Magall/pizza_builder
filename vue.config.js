module.exports = {
   // publicPath:'/tchambows/',
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/constraints.scss";`
        }
      }
    }
  };