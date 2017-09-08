<template>
  <div>
    <div v-show="loading" class="loading">Loading...</div>
    <Item v-for="(item, index) in items" :key="item.id" :item="item" :index="index"></Item>
  </div>
</template>

<script>
import Store from '../Services/Store'
import Item from './item'

export default {
  name: 'list',
  data () {
    return {
      items: [],
      loading: true
    }
  },
  methods: {

  },
  components: {
    'Item': Item
  },
  mounted () {
    let store = new Store()
    let that = this;
    
    store.getNewStories().then((items) => {
      this.loading = false;
      this.items = [].concat(items);
    }).catch(function(err){
      console.log(err)
    })
  }
}
</script>
