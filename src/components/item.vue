<template>
  <div class="item">
    <span class="index">{{ srialNo }}.</span>
    <p> 
      <a class="title" target="_blank" :href="item.url">{{ item.title }}</a> 
      <span class="domain"> ({{ item.url | domain }}) </span> 
    </p> 
    <p class="subtext"> 
      <span> {{ item.score }} points by <a href="#/user/item.by">{{ item.by }}</a> </span>
       {{ item.time | fromNow }}
       <span class="comments-link"> | <a href="#/item/15051156">{{ item.descendants | pluralize('comment') }}</a> </span> 
    </p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'item',
  props: ['item', 'index'],
  computed: {
  	comments() {
  		return this.item.descendants
  	},
  	srialNo() {
  		return this.index+1
  	}
  }
}
</script>
