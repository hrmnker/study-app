module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        disableHostCheck: true,
        proxy: {
            '/cyj': {
                target: 'http://yapi.demo.qunar.com/mock/1186/',
                ws: true,  // proxy websockets
                changeOrigin: true,
                pathRewrite: {
                   '^/cyj': ''
                }
            },

          '': {//拦截名
            target: 'http://dev.home.rulaifozu.xiuzhenyuan.cn',
            ws: true,  // proxy websockets
            changeOrigin: true,
            pathRewrite: {
              '': ''  //拦截名
            }
          },
         
        }
    },


};
