<template>
  <div id="app">
    <headerMain />
    <router-view />
  </div>
</template>

<script>
import headerMain from '@/components/Navbar'
export default {
  components: {
    headerMain, 
  }
}
</script>