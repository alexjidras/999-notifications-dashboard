<template>
  <div class="notification">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style>
.notification {
    padding: 10px;
    border-radius: 4px;
    color: #fff;
    background: #CB2C3D;
}
</style>
