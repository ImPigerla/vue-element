export default {
  data () {
    return {
      fetchUrl: `/legal/cases/list`,
      lists: [],
      timeout: null,
      searchData: {
        pageSize: 20,
        pageIndex: 1
      },
      firstRendered: false, // 第一次loading
      partialLoading: false, // 局部loading变量
      pagination: {} // 分页
    }
  },
  watch: {
    'searchData': {
      handler: function (newVal) {
        this.searchDataChange(newVal)
      },
      deep: true
    }
  },
  methods: {
    fetchData () {
      // 局部loading开启
      this.partialLoading = true

      this.$axios.get(this.fetchUrl, {
        'X-loadingOff': this.firstRendered,
        params: this.searchData,
        timeout: this.timeout || this.$axios.defaults.timeout
      }).then((res) => {
        this.lists = res.result.list
        this.pagination = res.page || this.pagination
        // 存在是字符串型数字，统一转换成整型
        Object.keys(this.pagination).forEach(attr => {
          this.pagination[attr] = parseInt(this.pagination[attr], 10)
        })

        this.firstTimeProcess()
        this.fetchCallback(res)
      }).catch(() => {
        this.lists = []
        this.firstTimeProcess()
      })
    },
    fetchCallback (res) {
    },
    firstTimeProcess () {
      if (!this.firstRendered) {
        // 第一次渲染要做接下来的逻辑
        this.firstRendered = true
      }
      // 局部loading关闭
      this.partialLoading = false
    },
    pageSizeChange: function (val) {
      this.searchData.pageSize = val
    },
    pageIndexChange: function (val) {
      this.searchData.pageIndex = val
    },
    resetPage () {
      this.searchData.pageIndex = 1
      this.searchData.pageSize = 20
    },
    searchDataChange (newVal) {
      this.fetchData()
    },
    startUp () {
      this.fetchData()
    }
  },
  created () {
    this.startUp()
  }
}
