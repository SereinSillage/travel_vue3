const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
    transpileDependencies: true,

    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:8080",
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    "^/api": "",
                },
            },
        },
        host: "localhost", //
        port: 8080, //
    },
});