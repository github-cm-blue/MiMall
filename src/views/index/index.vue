<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <product-children :DataList="phoneList"></product-children>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children">
                <product-children :DataList="phoneList"></product-children>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children">
                <product-children :DataList="phoneList"></product-children>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children">
                <product-children :DataList="phoneList"></product-children>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children">
                <product-children :DataList="phoneList"></product-children>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children">
                <product-children :DataList="phoneList"></product-children>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children">
                <product-children :DataList="phoneList"></product-children>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children">
                <product-children :DataList="phoneList"></product-children>
              </div>
            </li>
          </ul>
        </div>
        <swiper v-bind:options="swiperOption">
          <!-- slides -->
          <swiper-slide>
            <img src="/imgs/slider/slide-1.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/slider/slide-2.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/slider/slide-3.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/slider/slide-4.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/slider/slide-5.jpg" alt />
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a href id>
          <img src="/imgs/ads/ads-1.png" alt />
        </a>
        <a href id>
          <img src="/imgs/ads/ads-2.jpg" alt />
        </a>
        <a href id>
          <img src="/imgs/ads/ads-3.png" alt />
        </a>
        <a href id>
          <img src="/imgs/ads/ads-4.jpg" alt />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img src="/imgs/banner-1.png" alt />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img src="/imgs/mix-alpha.jpg" alt />
            </a>
          </div>
          <div class="list-box">
            <div class="list">
              <div class="item" v-for="item in hotPhone" :key="item.product.productId">
                <!-- <span class="new-pro">新品</span> -->
                <div class="item-img">
                  <img :src="item.picture.productPicture1" alt />
                </div>
                <div class="item-info">
                  <h3>{{item.product.productName}}</h3>
                  <p>{{item.product.productIntro.length>6?item.product.productIntro.substring(0,6):item.product.productIntro}}</p>
                  <p
                    class="price"
                    @click="addProductToCart(item.picture.productId)"
                  >{{item.product.productPrice}}</p>
                </div>
              </div>
            </div>
            <div class="list">
              <div class="item" v-for="item in newPhone" :key="item.product.productId">
                <!-- <span class="new-pro">新品</span> -->
                <div class="item-img">
                  <img :src="item.picture.productPicture1" alt />
                </div>
                <div class="item-info">
                  <h3>{{item.product.productName}}</h3>
                  <p>{{item.product.productIntro.length>6?item.product.productIntro.substring(0,6):item.product.productIntro}}</p>
                  <p
                    class="price"
                    @click="addProductToCart(item.picture.productId)"
                  >{{item.product.productPrice}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ProductChildren from "@/components/ProductChildren";
import ServiceBar from "../../components/ServiceBar";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "index",
  mounted() {
    //获取手机数据
    this.getPhoneList();
    //获取热门手机
    this.getHotPhone();
    // this.getNewPhone();
  },

  methods: {
    addProductToCart(id) {
      this.request({
        url: "/ShoppingCart/AddProductToCart",
        method: "post",
        data: this.qs.stringify({
          productId: id
        })
      }).then(response => {
        console.log(response);
        if (response) {
          // alert('添加成功')
          this.$message({
            message: "添加成功",
            type: "success"
          });
          this.getCartCount();
        }
      });
    },
    getCartCount() {
      this.request({
        url: "/ShoppingCart/GetMyCartCount",
        method: "get"
      }).then(response => {
        // console.log(response);
        this.$store.dispatch("saveCartCount", response);
      });
    },
    getHotPhone() {
      this.request({
        url: "/Products/GetList",
        method: "get",
        params: {
          pageSize: 8
        }
      }).then(response => {
        // console.log(response);
        this.hotPhone = response.slice(0, 4);
        this.newPhone = response.slice(4, 8);
      });
    },
    getPhoneList() {
      this.request({
        url: "/Products/GetList",
        params: {
          pageSize: 27
        },
        method: "get"
      }).then(response => {
        // console.log(response);
        this.phoneList = response;
      });
    }
  },
  data() {
    return {
      newPhone: [],
      hotPhone: [],
      phoneList: [],
      swiperOption: {
        autoplay: true, //自动循环切换
        loop: true, //一直循环
        effect: "cube", //切换效果
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: "true"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slideList: [
        {
          id: 42,
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: 45,
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: 46,
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: 1,
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: 2,
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.png",
            name: "RedMi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.png",
            name: "移动4G+专区"
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]
    };
  },
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
    ProductChildren
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/base.scss";
@import "../../assets/scss/mixin.scss";
@import "../../assets/scss/config.scss";
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      background-color: #55585a7a;
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            display: block;
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: " ";
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    @include flex();

    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 50px;
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: $colorG;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                width: 100%;
                height: 195px;
              }
            }
            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                  content: " ";
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>