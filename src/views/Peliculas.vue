<template>
  <div class="peli">
    <img alt="Vue logo" src="../assets/logo.png">
    <films></films>
  </div>
</template>

<script>
// @ is an alias to /src
import Films from '@/components/Films'

export default {
  name: 'peli',
  components: {
    Films
  }
}
</script>