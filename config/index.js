'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
    dev: {

        // Paths
        // 下面定义的是静态资源根目录的子目录static，也就是dist目录下面的static
        assetsSubDirectory: 'static',
        // 下面定义的是静态资源的引用路径
        assetsPublicPath: '/',
        // 通过proxyTable来解决跨域问题：代理配置表，在这里可以配置特定的请求代理到对应的API接口，只能用于开发模式
        proxyTable: {
            '/api': {
                /*
                 *这里理解成用‘/api'代替target里面的地址，后面组件中我们调接口时直接用api代替即可。
                 *比如我要调用'https://sus.secoo.com/user/add'
                 *在这里直接写'/api/user/add'即可
                 */
                target: 'http://localhost:3000/api',
                changeOrigin: true, //允许跨域 
                pathRewrite: {
                    '^/api': ''
                        /*
                         *这里的配置是正则表达式，以/api开头的路径/api将会被‘http://localhost:3000/api'替换掉
                         *假如后台文档的接口是 "https://sus.secoo.com/user/add"
                         *前端调取API接口应写：axios.get('/api/user/add')
                         */
                }
            }
        },

        // Various Dev Server settings
        host: '',
        // host: '10.0.8.218', // 公司测试环境
        // host: '192.168.116.234', // 公司环境
        // host: '192.168.0.105', // 家住的地方
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: true,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

        // Use Eslint Loader?
        // If true, your code will be linted during bundling and
        // linting errors and warnings will be shown in the console.
        useEslint: true,
        // If true, eslint errors and warnings will also be shown in the error overlay
        // in the browser.
        showEslintErrorsInOverlay: false,

        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true
    },

    build: {
        // Template for index.html
        // 下面是相对路径的拼接，假如当前跟目录是config，那么下面配置的index属性的属性值就是dist/index.html
        index: path.resolve(__dirname, '../dist/index.html'),

        // Paths
        // 下面定义的是静态资源的根目录 也就是dist目录
        assetsRoot: path.resolve(__dirname, '../dist'),
        // 下面定义的是静态资源根目录的子目录static，也就是dist目录下面的static
        assetsSubDirectory: 'static',
        // 下面定义的是静态资源的公开路径，也就是真正的引用路径/上线的路径
        assetsPublicPath: 'https://mstatic.secooimg.com/game/lucky/',

        /**
         * Source Maps
         */
        //  不生成js的map文件
        productionSourceMap: false,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        // 下面是是否在生产环境中压缩代码，如果要压缩必须安装compression-webpack-plugin
        productionGzip: false,
        // 下面定义要压缩哪些类型的文件
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        // 下面的process.env.npm_config_report表示定义的一个npm_config_report环境变量，可以自行设置
        bundleAnalyzerReport: process.env.npm_config_report
    }
}