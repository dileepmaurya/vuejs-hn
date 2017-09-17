<template>
  <div class = "navigation">
    <ul>
      <li><router-link to="/top-stories">Stories</router-link></li>
      <li><router-link to="/new-stories">New Stories</router-link></li>
      <li><router-link to="/best-stories">Best Stories</router-link></li>
      <li><router-link to="/ask-stories">Ask Stories</router-link></li>
    </ul>
  </div>
</template>

<script>
 export default {
 	name: 'navigation'
 }
</script>