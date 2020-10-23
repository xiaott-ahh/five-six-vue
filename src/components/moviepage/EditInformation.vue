<template>
  <div>
    <img src="../../assets/ico/add.png" class="add-movie"  @click="dialogFormVisible = true" />
    <el-dialog
        title="添加/修改电影信息"
        :visible.sync="dialogFormVisible"
        @close="clear">
      <el-form v-model="form" style="text-align: left" ref="dataForm">
        <el-form-item label="电影名称" :label-width="formLabelWidth" prop="title">
          <el-input v-model="form.title" autocomplete="off" placeholder="请输入电影名称"></el-input>
        </el-form-item>
        <el-form-item label="导演" :label-width="formLabelWidth" prop="director">
          <el-input v-model="form.director" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="上映日期" :label-width="formLabelWidth" prop="date">
          <el-input v-model="form.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="演员" :label-width="formLabelWidth" prop="actors">
          <el-input v-model="form.actors" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="国家/地区" :label-width="formLabelWidth" prop="nation">
          <el-input v-model="form.nation" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="语言" :label-width="formLabelWidth" prop="language">
          <el-input v-model="form.language" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="评分" :label-width="formLabelWidth" prop="rate">
          <star-rate v-model="form.rate"
                     type="star1"/>
          <span class="rate-text" style="color: #3a91ba">{{form.rate}}</span>
        </el-form-item>
        <el-form-item label="海报" :label-width="formLabelWidth" prop="cover">
          <el-input v-model="form.cover" autocomplete="off" placeholder="海报 URL"></el-input>
        </el-form-item>
        <el-form-item label="电影简介" :label-width="formLabelWidth" prop="abs">
          <el-input type="textarea" v-model="form.abs" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="分类" :label-width="formLabelWidth" prop="category.type">
          <el-select v-model="form.category.id" placeholder=prop>
            <el-option label="剧情" value="1"></el-option>
            <el-option label="爱情" value="2"></el-option>
            <el-option label="科幻" value="3"></el-option>
            <el-option label="恐怖" value="4"></el-option>
            <el-option label="悬疑" value="5"></el-option>
            <el-option label="动画" value="6"></el-option>
            <el-option label="动作" value="7"></el-option>
            <el-option label="喜剧" value="8"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="id" style="height: 0">
          <el-input type="hidden" v-model="form.id" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import StarRate from 'vue-cute-rate'
export default {
  name: "EditInformation",
  components: {StarRate},
  data () {
    return {
      dialogFormVisible: false,
      form: {
        id: '',
        title: '',
        director: '',
        actors: '',
        language: '',
        nation: '',
        rate: 0,
        date: '',
        cover: '',
        abs: '',
        category: {
          id: '',
          type: ''
        }
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    clear () {
      this.form = {
        id: '',
        title: '',
        director: '',
        actors: '',
        language: '',
        nation: '',
        rate: 0,
        date: '',
        cover: '',
        abs: '',
        category: {
          id: '',
          type: ''
        }
      }
    },
    onSubmit () {
      this.$axios
          .post('/movies', {
            id: this.form.id,
            cover: this.form.cover,
            title: this.form.title,
            director: this.form.director,
            actors: this.form.actors,
            language: this.form.language,
            nation: this.form.nation,
            rate: this.form.rate,
            date: this.form.date,
            abs: this.form.abs,
            category: this.form.category
          }).then(resp => {
        if (resp && resp.status === 200) {
          this.dialogFormVisible = false
          this.$emit('onSubmit')
        }
      })
    }
  }
}
</script>

<style scoped>
  .add-movie {
    margin: 50px 0 0 20px;
    font-size: 100px;
    float: left;
    cursor: pointer;
  }

  /deep/ .el-input__inner {
    color: black !important;
  }

</style>