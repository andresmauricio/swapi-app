<template>
  <div class="humano">
    <img alt="Vue logo" src="../assets/logo.png">
    <people></people>
  </div>
</template>

<script>
// @ is an alias to /src
import People from '@/components/People'

export default {
  name: 'humano',
  components: {
    People
  }
}
</script>