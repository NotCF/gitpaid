module.exports = {
    runtimeCompiler: true,
    configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.common.js' // 'vue/dist/vue.common.js' for webpack 1
      }
    }
  }
  }