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
    store.getItem(15057627).then(function(item){
          
          console.log(item);

        }).catch(function(err){
          console.log(err)
        })

  // console.log(this.store);
    store.getTopStories().then((items) => {
      this.loading = false;
      items.map(id => {
        store.getItem(id).then(function(item){
          that.items.push(item)
          // console.log(that);

        }).catch(function(err){
          console.log(err)
        })
      })
    }).catch(function(err){
      console.log(err)
    })
  }
}
</script>
