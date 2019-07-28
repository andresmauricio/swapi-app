<template>
  <div class="humano">
    <img alt="Vue logo" src="../assets/logo.png">
    <planet></planet>
  </div>
</template>

<script>
// @ is an alias to /src
import Planet from '@/components/Planet'

export default {
  name: 'estrella',
  components: {
    Planet
  }
}
</script>