<template>
  <div style="text-align: left">
    <el-row style="margin: 18px 0 0 18px ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin/dashboard' }">管理中心</el-breadcrumb-item>
        <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        <el-breadcrumb-item>电影管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-button class="add-button" type="success" @click="editMovie(emptyMovie)">添加电影</el-button>
    <edit-information @onSubmit="loadMovies()" ref="edit"></edit-information>
    <el-card style="margin: 18px 2%;width: 95%">
      <el-table
          :data="movies"
          stripe
          ref="multipleTable"
          style="width: 100%"
          :default-sort="{prop:'date',order: 'descending'}"
          :max-height="tableHeight">
        <el-table-column
            fixed="left"
            type="selection"
            width="45">
        </el-table-column>
        <el-table-column
            fixed="left"
            type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline>
              <el-form-item>
                <span>{{ props.row.abs }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
            fixed="left"
            prop="title"
            label="电影名称（展开查看摘要）"
            fit>
        </el-table-column>
        <el-table-column
            prop="date"
            label="上映日期"
            sortable
            width="120">
        </el-table-column>
        <el-table-column
            prop="director"
            label="导演"
        >
        </el-table-column>
        <el-table-column
            prop="scriptwriter"
            label="编剧"
            width="100"
            fit>
        </el-table-column>
        <el-table-column
            prop="actors"
            label="主演"
            width="400"
            fit>
        </el-table-column>
        <el-table-column
          label="类型"
          width="200"
        >
          <template slot-scope="props">
            <el-tag v-for="(category,i) in props.row.categories" :key="i">{{category.type}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
            prop="district"
            label="国家/地区"
        >
        </el-table-column>
        <el-table-column
            prop="language"
            label="语言"
        >
        </el-table-column>
        <el-table-column
            prop="rate"
            sortable
            label="评分"
        >
        </el-table-column>
        <el-table-column
            prop="duration"
            label="时长"
        >
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="120">
          <template slot-scope="scope">
            <el-button
                @click.native.prevent="editMovie(scope.row)"
                type="text"
                size="small">
              编辑
            </el-button>
            <el-button
                @click.native.prevent="deleteMovie(scope.row.id)"
                type="text"
                size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin: 20px 0 20px 0;float: left">
        <el-button @click="cancelSelect">取消选择</el-button>
        <el-button @click="batchDelete">批量删除</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import EditInformation from "@/components/admin/content/EditInformation";
export default {
  name: 'MovieManagement',
  components: {EditInformation},
  data () {
    return {
      emptyMovie: {
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
      movies: []
    }
  },
  mounted () {
    this.loadMovies()
  },
  computed: {
    tableHeight () {
      return window.innerHeight - 330
    }
  },
  methods: {
    loadMovies () {
      const _this = this;
      this.$axios.get('/movies').then(resp => {
        console.log(resp.status)
        console.log(resp.data)
        if (resp && resp.status === 200) {
          _this.movies = resp.data
        }
      })
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage)
    },
    deleteMovie (id) {
      this.$confirm('此操作将永久删除该电影信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
            this.$axios
                .post('admin/content/movie/delete', {id: id}).then(resp => {
              if (resp && resp.status === 200) {
                this.loadMovies()
              }
            })
          }
      ).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
      // alert(id)
    },
    editMovie (item) {
      this.$refs.edit.dialogFormVisible = true
      this.$refs.edit.form = {
        id: item.id,
        cover: item.cover,
        title: item.title,
        date: item.date,
        rate: item.rate,
        director: item.director,
        scriptwriter: item.scriptwriter,
        actors: item.actors,
        language: item.language,
        district: item.district,
        duration: item.duration,
        abs: item.abs,
        categories: item.categories
      }
    },
    cancelSelect() {
      this.$refs.multipleTable.clearSelection();
    },
    batchDelete() {
      this.$alert("暂不支持该功能.")
    }
  }
}
</script>

<style scoped>
.add-button {
  margin: 18px 0 0 10px;
}
</style>