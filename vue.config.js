//nodeJs的语法规范，就是使用module.exports ，而不是 export default
//暴露出一个object对象
module.exports = {
    //devServer名称是固定的，会默认的加载devServer中的配置表
    devServer:{
        host:'localhost',//主机
        port:8080,//端口
        proxy:{//代理
            '/api':{//拦截访问 /activity 的时候
                target:'http://mall-pre.springboot.cn',//代理到http://www.imooc.com
                changeOrigin:true,//是否要将主机头的源点更改为目标url地址
                pathRewrite:{//转发地址
                    '/api':''
                }
            }
        }
    }
}