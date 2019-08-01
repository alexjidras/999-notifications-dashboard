<template>
    <a :href="`http://999.md/ro/${href}`" target="_blank" class="link-button"><LinkImg color="#37A9DA" class="link-img"/> Link</a>
</template>

<script>
import LinkImg from './LinkImg'
export default {
  components: {
    LinkImg
  },
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.link-img {
    margin-right: 10px;
    height: 20px;
}
.link-button {
    font-weight:bold;
    border: 1px solid #37A9DA;
    border-radius: 5px;
    color: #37A9DA;
    display: flex;
    padding: 7px 10px;
    width: 90px;
}
</style>
