<template>
  <div :style="'color:' + color">Hello <slot></slot></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    color: {
      type: String,
      default: 'black',
    },
  },
})
</script>
