import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
    routes:[
        {
            path:'/',
            name:'Home',
            component:()=>import('../views/home/index'),
            redirect:'/index',
            children:[
                {
                    path:'index',
                    name:'Index',
                    component:()=>import('../views/index/index')
                },
                {
                    path:'product/:id',
                    name:'Product',
                    component:()=>import('../views/product/index')
                },
                {
                    path:'detail/:id',
                    name:'Detail',
                    component:()=>import('../views/detail/index')
                }
            ]
        },
        {
            path:'/cart',
            name:'Cart',
            component:()=>import('../views/cart/index')
        },
        {
            path:'/order',
            name:'Order',
            component:()=>import('../views/order/index'),
            children:[
                {
                    path:'list',
                    name:'OrderList',
                    component:()=>import('../views/orderList/index')
                },
                {
                    path:'confirm',
                    name:'OrderConfirm',
                    component:()=>import('../views/orderConfirm/index')
                },
                {
                    path:'pay',
                    name:'OrderPay',
                    component:()=>import('../views/orderPay/index')
                },
                {
                    path:'alipay',
                    name:'AliPay',
                    component:()=>import('../views/aliPay/index')
                }
            ]
        }
    ]
})