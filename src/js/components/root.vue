<template lang="pug">
section#root
</template>

<script>
export default {
  ready() {
    App.DatasetHelper.set(['content', 'bglayer'], 'contentRender', '/');
  }
}
</script>
