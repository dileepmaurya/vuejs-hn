<template>
  <div>
    <div v-show="loading" class="loading">Loading...</div>
    <Item v-show="!loading" v-for="(item, index) in items" :key="item.id" :item="item" :index="index"></Item>
  </div>
</template>

<script>
import Store from '../Services/Store'
import Item from './item'

export default {
  name: 'list',
  props: ['type'],
  data () {
    return {
      items: [],
      loading: true
    }
  },
  methods: {
    fetchData () {
      this.loading = true;
      let store = new Store()
      let that = this;

      store.getStories(this.type).then((items) => {
        this.loading = false;
        this.items = [].concat(items);
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
