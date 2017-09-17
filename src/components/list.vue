<template>
  <div>
    <div v-show="loading" class="loading">Loading...</div>
    <Item v-show="!loading" v-for="(item, index) in items" :key="item.id" :item="item" :index="start_serial_no+index+1"></Item>
   <div v-show="totalPages">
     <ul>
      <li v-for="n in totalPages">
        <router-link :to="{ name: current_path_name, params: { page: n }}">{{ n }}</router-link>
      </li>
     </ul>
   </div>
  </div>
</template>

<script>
import Store from '../Services/Store'
import Item from './item'

export default {
  name: 'list',
  props: { type: [String], page: {type: Number, default:1}},
  data () {
    return {
      items: [],
      totalItems:0,
      totalPages: 0,
      loading: true,
      current_path_name: null,
      start_serial_no: 0
    }
  },
  methods: {
    fetchData () {
      this.current_path_name = this.$route.name;
      this.loading = true;
      this.totalPages = true;

      let store = new Store()

      store.fetchDataByPage(this.type, this.page).then((items) => {
        this.loading = false
        this.items = [].concat(items)
        this.totalItems = store.getTotalItem(this.type)
        this.totalPages = Math.ceil(this.totalItems/store.getStoriesPerPage())
        this.start_serial_no = (this.page === 1) ? 0 : ((this.page-1) * store.getStoriesPerPage())
      }).catch(function(err){
        console.log(err)
      })
      }
  },
  components: {
    'Item': Item
  },
  created () {
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
}
</script>
