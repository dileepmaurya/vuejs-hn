<template>
  <div class = "navigation">
    <ul>
      <li><router-link to="/">Stories</router-link></li>
      <li><router-link to="/new-stories">New Stories</router-link></li>
      <li><router-link to="/best-stories">Best Stories</router-link></li>
    </ul>
  </div>
</template>

<script>
 export default {
 	name: 'navigation'
 }
</script>