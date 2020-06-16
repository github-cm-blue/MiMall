/**
 * 环境的配置：
 *  在package.json中：使用 --model=  指定相应的环境
 * "scripts": {
    "serve": "vue-cli-service serve --model=development",//执行npm run serve 启动时，使用的是开发环境
    "build": "vue-cli-service build --model=production",//执行npm run build  启动时，使用的是 线上环境
    "test": "vue-cli-service serve --model=test",//执行npm run test 启动时，使用测试环境
    //使用的是这个我们自定义的环境(需要在src下建一个以 .env.自定义名称  的文件 里面 NODE_ENV='custom' 对 NODE_ENV 进行赋值 注意需要和这里的配置名称一致)
    "custom": "vue-cli-service serve --model=custom",//自定义的，使用npm run custom 启动时，
    "lint": "vue-cli-service lint" //
  },
 * 
 * 
 */

let baseURL;

switch (process.env.NODE_ENV) {//获取当前进程里nodeJs的环境变量
    case 'development':
        baseURL = 'http://mall-pre.springboot.cn/api'//开发环境
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api'//测试环境
        break;
    case 'production':
        baseURL = 'http://mall-pre.springboot.cn/api'//线上环境
        break;
    case 'custom':
        baseURL = 'http://custom-mall-pre.springboot.cn/api'//自定义
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn/api'//默认线上环境
        break;
}

export default {
    baseURL
}