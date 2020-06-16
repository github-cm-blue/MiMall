/**
 * Storage封装
 * 
 * key            键 string
 * value          值 string or json
 * module_name    模块名称 string
 * 1）、如果没有module_name 参数表示 创建一个对象 对象名为key 值为value
 * 2）、如果有module_name 表示 往一个名为module_name的对象中添加一个 属性key 值为 value
 * 
 */
const STORAGE_KEY = 'mall'
export default {
    //存储值
    setItem(key, value, module_name) {
        if (module_name) {//如果module_name 不为空
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name, val);
        } else {
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
        }
    },
    //获取某一个模块下面的属性，例如user下的username
    getItem(key, module_name) {
        if (module_name) {//如果module_name 不为空
            let val = this.getItem(module_name);
            if (val) {
                return val[key];
            }
        }
        return this.getStorage()[key];
    },
    //获取整个数据
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');//如果为空则返回一个空的 字符串object
    },
    //清空数据
    clear(key, module_name) {
        let val = this.getStorage();
        if (module_name) {
            if(!val[module_name])return;//如果指定的模块不存在return
            delete val[module_name][key];
        } else {
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
}

