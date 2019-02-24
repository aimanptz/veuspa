module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/utils/_vars.scss";
          @import "~/bootstrap/scss/_forms.scss";
        `
      }
    }
  }
};
