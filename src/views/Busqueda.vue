<template>
  <div class="peli">
    <img alt="Vue logo" src="../assets/logo.png">
    <search></search>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search'

export default {
  name: 'peli',
  components: {
    Search
  }
}
</script>

