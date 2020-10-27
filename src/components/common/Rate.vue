<template>
  <ul>
    <li v-for="(item, index) in starArr" :key="index">
      <img :src="[ item == 0 ? starIcon[0] : starIcon[1] ]" alt="星级评分">
    </li>
    <span class="rate-text" style="margin-left:5px;color: #3a91ba;font-size: 20px;text-align: center">{{this.grade}}</span>
  </ul>
</template>

<script>
export default {
  name:'Rate',
  data() {
    return {
      starArr: [],//星级评分所需处理的数组
      starIcon: [
        require("../../assets/ico/emptyStar.png"),
        require("../../assets/ico/fullStar.png")
      ]//星级评分所需图片
    };
  },
  methods: {
    //处理评分所得对应星级
    starLevel(evaluate) {
      let starGrade = Math.round(evaluate / 2);//最高评分为10，星级只有5级 所以需要除2，再四舍五入获取评分数
      for (let i = 1; i <= 5; i++) {
        i <= starGrade ? this.starArr.push(1) : this.starArr.push(0)//如果i小于当前评分，则满星，否则为不满
      }
    }
  },
  mounted: function() {
    //若父组件有评分参数传递过来就立刻执行处理函数starLevel()
    if (this.grade) {
      this.starLevel(this.grade)
    }
  },
  props: ['grade']//获取父组件传递过来的评分参数
};
</script>

<style scoped lang="scss">
ul {
  overflow: hidden;
  padding: 0;
}
li {
  width: 20px;
  float: left;
  img {
    width: 100%;
  }
  list-style-type: none;
}
</style>
