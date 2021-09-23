<template>
  <Hello color="red">World</Hello>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hello from './components/Hello.vue'

export default defineComponent({
  components: { Hello },
})
</script>
