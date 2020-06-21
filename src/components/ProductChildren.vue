<template>
  <div>
    <ul>
      <li v-for="(item,index) in getArrayList(DataList,0,4)" :key="index">
        <a href id>
          <img :src="item.picture.productPicture1" alt />
          {{item.product.productName}}
        </a>
      </li>
    </ul>
    <ul>
      <li v-for="(item,index) in getArrayList(DataList,5,9)" :key="index">
        <a href id>
          <img :src="item.picture.productPicture1" alt />
          {{item.product.productName}}
        </a>
      </li>
    </ul>
    <ul>
      <li v-for="(item,index) in getArrayList(DataList,9,13)" :key="index">
        <a href id>
          <img :src="item.picture.productPicture1" alt />
          {{item.product.productName}}
        </a>
      </li>
    </ul>
    <ul>
      <li v-for="(item,index) in getArrayList(DataList,13,17)" :key="index">
        <a href id>
          <img :src="item.picture.productPicture1" alt />
          {{item.product.productName}}
        </a>
      </li>
    </ul>
    <ul>
      <li v-for="(item,index) in getArrayList(DataList,18,22)" :key="index">
        <a href id>
          <img :src="item.picture.productPicture1" alt />
          {{item.product.productName}}
        </a>
      </li>
    </ul>
    <ul>
      <li v-for="(item,index) in getArrayList(DataList,23,27)" :key="index">
        <a href id>
          <img :src="item.picture.productPicture1" alt />
          {{item.product.productName}}
        </a>
      </li>
    </ul>
   
  </div>
</template>

<script>
export default {
  name: "product-children",
  props: {
    DataList: {
      type: Array,
      required: true
    }
  },
  computed: {
    getArrayList() {
      return function(list, start, end) {
        //数据源、从哪开始截取、截取到哪里
        return list.slice(start, end);
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
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


</style>