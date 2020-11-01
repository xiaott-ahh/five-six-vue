<template>
  <div>
    <el-dialog
        title="添加/修改电影信息"
        :visible.sync="dialogFormVisible"
        @close="clear">
      <el-form v-model="form" style="text-align: left" ref="dataForm">
        <el-form-item label="电影名称" :label-width="formLabelWidth" prop="title">
          <el-input v-model="form.title" autocomplete="off" placeholder="请输入电影名称"></el-input>
        </el-form-item>
        <el-form-item label="上映日期" :label-width="formLabelWidth" prop="date">
          <el-input v-model="form.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="rate-item" label="评分" :label-width="formLabelWidth" prop="rate">
          <el-input v-model="form.rate" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="导演" :label-width="formLabelWidth" prop="director">
          <el-input v-model="form.director" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="编剧" :label-width="formLabelWidth" prop="scriptwriter">
          <el-input v-model="form.scriptwriter" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="演员" :label-width="formLabelWidth" prop="actors">
          <el-input v-model="form.actors" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="类型" :label-width="formLabelWidth" prop="categories">
          <el-tag
              style="margin: 3px"
              :key="category.id"
              v-for="category in form.categories"
              closable
              :disable-transitions="false"
              @close="handleClose(category.type)">
            {{category.type}}
          </el-tag>
          <el-input
              class="input-new-tag"
              v-if="categoriesInputVisible"
              v-model="categoriesInputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleBlur"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新建标签</el-button>
        </el-form-item>
        <el-form-item label="国家/地区" :label-width="formLabelWidth" prop="district">
          <el-input v-model="form.district" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="语言" :label-width="formLabelWidth" prop="language">
          <el-input v-model="form.language" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="时长" :label-width="formLabelWidth" prop="duration">
          <el-input v-model="form.duration" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="电影简介" :label-width="formLabelWidth" prop="abs">
          <el-input type="textarea" v-model="form.abs" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="海报" :label-width="formLabelWidth" prop="cover">
          <el-input v-model="form.cover" autocomplete="off" placeholder="海报 URL"></el-input>
          <img-upload @onUpload="uploading" ref="imgUpload"></img-upload>
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
import ImgUpload from "@/components/admin/content/ImgUpload";
export default {
  name: "EditInformation",
  components: {ImgUpload},
  data () {
    return {
      typeToId: {
        1:'剧情', 2:'喜剧', 3:'动作',
        4:'爱情', 5: '科幻', 6: '动画',
        7:'悬疑', 8:'惊悚', 9:'恐怖',
        10:'犯罪', 11:'同性', 12:'音乐',
        13:'歌舞' ,14: '传记' , 15: '历史',
        16:'战争', 17: '西部', 18: '奇幻',
        19:'冒险', 20: '灾难', 21: '武侠',22:'情色'
      },
      categoriesChanged:'false',
      categoriesInputVisible: false,
      categoriesInputValue: '',
      dialogFormVisible: false,
      form: {
        id: '',
        title: '',
        date: '',
        rate: '',
        director: '',
        scriptwriter: '',
        actors: '',
        district: '',
        language: '',
        duration: '',
        cover: '',
        abs: '',
        categories: []
      },
      formLabelWidth: '120px'
    }
  },
  methods: {

    findKey (obj,value, compare = (a, b) => a === b){
      return Object.keys(obj).find(k => compare(obj[k], value))
    },
    clear () {
      this.categoriesChanged = 'false'
      this.form = {
        id: '',
        title: '',
        date: '',
        rate: '',
        director: '',
        scriptwriter: '',
        actors: '',
        district: '',
        language: '',
        duration: '',
        cover: '',
        abs: '',
        categories: []
      }
    },
    onSubmit () {
      this.$axios
          .post('admin/content/movie/update'+'?changeCategories='+this.categoriesChanged, {
            id: this.form.id,
            cover: this.form.cover,
            title: this.form.title,
            director: this.form.director,
            scriptwriter: this.form.scriptwriter,
            actors: this.form.actors,
            language: this.form.language,
            district: this.form.district,
            rate: this.form.rate,
            date: this.form.date,
            abs: this.form.abs,
            duration: this.form.duration,
            categories: this.form.categories
          }).then(resp => {
            if (resp && resp.status === 200) {
              this.dialogFormVisible = false
              this.$emit('onSubmit')
        }
      }).catch((failureResponse)=>{
        this.$alert('请求失败')
      })
    },
    handleClose(tag) {
      console.log('delete before' + this.form.categories)
      this.categoriesChanged = 'true';
      this.form.categories = this.form.categories.filter(category=>category.type != tag)
      console.log('delete after' + this.form.categories)
    },

    showInput() {
      this.categoriesInputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleBlur() {
      this.categoriesInputVisible = false;
      this.categoriesInputValue = '';
    },
    handleInputConfirm() {
      let inputValue = this.categoriesInputValue;
      let flag = (Object.values(this.typeToId).indexOf(inputValue))
      if (flag === -1) {
        this.$confirm("不支持的类型","注意",{
          type:'warning'
        });
      } else {
        let new_category = {id: this.findKey(this.typeToId,inputValue),type:inputValue};
        console.log('add before'+ this.form.categories)
        this.form.categories.push(new_category);
        console.log('add after' + this.form.categories)
        this.categoriesChanged = 'true';
      }
      this.categoriesInputVisible = false;
      this.categoriesInputValue = '';
    },
    uploading() {
      this.form.cover = this.$refs.imgUpload.url
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

  /deep/ .rate-item lable.el-form-item__label {
    margin-top: 5px !important;
  }
</style>