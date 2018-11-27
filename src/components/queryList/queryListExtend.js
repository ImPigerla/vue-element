/**
 * Created by wjjn3481 on 2017/4/10.
 *
 * 定义一个查询列表父组件，
 * 使用过滤器查询、关键字查询和分页查询时，都会把这些信息作为路由参数加在路由上，
 * 目的是复制链接再打开就可以看到一样的查询结果
 */
import _ from 'underscore'
import SearchBar from 'components/searchPanel/searchBar'
import QueryListNoRoute from './queryListNoRoute'

export default {
    extends: QueryListNoRoute,
    components: {SearchBar},
    data () {
        return {
            searchData: {
                searchWord: null
            },
            keyword: this.$route.query.searchWord || ''
        }
    },
    watch: {
        '$route': 'fetchData'
    },
    computed: {
        fetchUrlExtend () {
            return this.fetchUrl
        }
    },
    methods: {
        fetchData () {
            let routeQuery = this.$route.query
            // 如果routeQuery为{}时，重置搜索条件(不重置默认值)
            if (!Object.keys(routeQuery).length) {
                Object.keys(this.searchData).forEach(attr => {
                    this.searchData[attr] = this.searchData[attr] || null
                })
            }
            Object.assign(this.searchData, routeQuery)

            // 局部loading开启
            this.partialLoading = true

            this.$axios.get(this.fetchUrlExtend, {
                'X-loadingOff': this.firstRendered,
                params: this.searchData,
                timeout: this.timeout || this.$axios.defaults.timeout
            }).then((res) => {
                this.lists = res.result
                this.pagination = res.page || this.pagination
                // 存在是字符串型数字，统一转换成整型
                Object.keys(this.pagination).forEach(attr => {
                    this.pagination[attr] = parseInt(this.pagination[attr], 10)
                })

                this.firstTimeProcess()
                this.fetchCallback(res)
            }).catch((err) => {
                console.error(err)
                this.lists = []
                this.firstTimeProcess()
            })
        },
        searchKeyword (value) {
            this.searchData.searchWord = typeof value === 'string' ? value : this.$refs.searchKeyword.$refs.input.value
            this.resetPage()
            if (this.keyword !== value) {
                this.keyword = value
            }
        },
        removeRecordById (id) {
            this.lists = _.reject(this.lists, function (item) {
                return item.id === id
            })
        },
        searchDataChange (newVal) {
            this.$router.replace({query: Object.assign({}, newVal)})
        },
        startUp () {
            this.fetchData()
        }
    }
}