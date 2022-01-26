<template>
  <div class="app-image-container">
    <figure>
      <img :src="source" />
      <figcaption><slot name="image-container"></slot></figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style scoped>
.app-image-container {
  text-align: center;
}

figure {
  display: inline-block;
  padding: 6px 12px 6px 6px;
}

figcaption {
  margin: 10px 10px 0 0;
  font-size: 14px;
  font-variant: small-caps;
  color: #dadada;
}
</style>
