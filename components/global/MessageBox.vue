<template>
  <v-alert prominent dark :type="type">
    <p><slot name="message-box">default</slot></p>
  </v-alert>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>
