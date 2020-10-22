<template>
  <div>
    <el-row style="height: 840px;">
      <!--<search-bar></search-bar>-->
      <el-tooltip effect="dark" placement="right"
                  v-for="item in movies"
                  hide-after=10000000
                  :key="item.id">
        <h1 slot="content" style="font-size: 24px;margin-bottom: 6px;">{{item.title}}({{item.date}})</h1>
        <div slot="content">
          <star-rate
              :value=item.rate
              :disabled="true"
              type="star1"/>
          <span class="rate-text" style="color: #3a91ba;font-size: 20px">{{item.rate}}</span>
        </div>
        <h3 slot="content">导演：{{item.director}}</h3>
        <h3 slot="content">编剧：{{item.scriptwriter}}</h3>
        <h3 slot="content">主演：{{item.actors}}</h3>
        <h3 slot="content">类型：{{item.type}}</h3>
        <h3 slot="content">地区：{{item.nation}}</h3>

        <p slot="content" style="width: 300px" class="abstract">{{item.abs}}</p>
        <el-card style="background-color:transparent;border:none;width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px" class="book"
                 bodyStyle="padding:10px" shadow="hover">
          <div class="cover">
            <img :src="item.cover" alt="封面">
          </div>
          <div class="info">
            <div class="title" style="padding-left: 15px">
              <a href="">{{item.title}}</a>
            </div>
          </div>
        </el-card>
      </el-tooltip>
    </el-row>
    <el-row>
      <el-pagination
          :current-page="1"
          :page-size="10"
          :total="20">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
import StarRate from 'vue-cute-rate'
export default {
  name: 'MoviesView',
  data () {
    return {
      value: 9.7,
      movies: [
        {
          cover: 'https://i.loli.net/2019/04/10/5cada7e73d601.jpg',
          title: '肖申克的救赎',
          director: '弗兰克·德拉邦特',
          scriptwriter: '弗兰克·德拉邦特 / 斯蒂芬·金',
          nation:'美国',
          date: '1994',
          actors: '蒂姆·罗宾斯 / 摩根·弗里曼 / 鲍勃·冈顿 / 威廉姆·赛德勒 ',
          type: '剧情 / 犯罪',
          rate: 9.7,
          abs: '20世纪40年代末，小有成就的青年银行家安迪（蒂姆·罗宾斯 Tim Robbins 饰）因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为鲨堡的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。未过多久，安迪尝试接近囚犯中颇有声望的瑞德（摩根·弗 里曼 Morgan Freeman 饰），请求对方帮自己搞来小锤子。以此为契机，二人逐渐熟稔，安迪也仿佛在鱼龙混杂、罪恶横生、黑白混淆的牢狱中找到属于自己的求生之道。他利用自身的专业知识，帮助监狱管理层逃税、洗黑钱，同时凭借与瑞德的交往在犯人中间也渐渐受到礼遇。表面看来，他已如瑞德那样对那堵高墙从憎恨转变为处之泰然，但是对自由的渴望仍促使他朝着心中的希望和目标前进。而关于其罪行的真相，似乎更使这一切朝前推进了一步……'
        }
      ]
    }
  },
  components: {StarRate}

}
</script>

<style scoped>
.cover {
  width: 115px;
  height: 172px;
  margin-bottom: 7px;
  overflow: hidden;
  cursor: pointer;
}

img {
  width: 115px;
  height: 172px;
  /*margin: 0 auto;*/
}

.title {
  font-size: 14px;
  text-align: left;
}

.abstract {
  display: block;
  line-height: 17px;
}

a {
  text-decoration: none;
}

a:link, a:visited, a:focus {
  color: #3377aa;
}
</style>

