<template>
  <div>
    <div v-if="error.statusCode === 404">
      <Error404 />
    </div>
    <div v-else><Error /></div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error']
}
</script>
