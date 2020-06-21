//nodeJs的语法规范，就是使用module.exports ，而不是 export default
//暴露出一个object对象
module.exports = {
    //devServer名称是固定的，会默认的加载devServer中的配置表
    devServer:{
        host:"0.0.0.0",//主机
        port:8080,//端口
        https:false,// https:{type:Boolean}
        open:true,//配置自动启动浏览器
        proxy:{//代理
            '/api':{//拦截访问 /activity 的时候
                target:'http://localhost:5000',//代理到http://www.imooc.com
                ws: true, // 是否启用websockets
                changeOrigin:true,//是否要将主机头的源点更改为目标url地址
                secure:false,
                pathRewrite:{//转发地址
                    '^/api':''
                }
            }
        }
    }
     // publicPath:'/app',
  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false,//{ type:Boolean default:true } 问你是否使用eslint
//   productionSourceMap:true,
//   chainWebpack:(config)=>{
//     config.plugins.delete('prefetch');
//   }
}