<template>
    <div
    class="navigator"
    :style="{ justifyContent: alignTabs }"
    >
        <nuxt-link
            v-for="({ name, path, icon }, index) in tabs"
            :key="index"
            :to="`/dashboard${path}`"
            :class="['navigator-tab', { active: index == active }]"
            >
            <i :class="[icon, 'margin-3']"></i>
                {{ name }}
        </nuxt-link>
    </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    },
    active: {
      required: true,
      type: Number
    },
    align: {
      type: String,
      required: false,
      default: 'center'
    }
  },
  computed: {
    alignTabs: function () {
      switch (this.align) {
        case 'left': return 'flex-start'
        case 'center': return 'center'
        case 'right': return 'flex-end'
        default: return 'center'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navigator {
    display: flex;
    margin-bottom: 40px;
    font-size: 20px;
}
.navigator-tab {
    font-size: 16px;
    padding: 20px 20px 20px;
    margin: 0px 10px;
    color: #1A3B60;
    &:hover {
        text-decoration: none;
        color: black;
    }
}
.active {
    border-bottom: 3px solid rgb(30, 178, 244);
}
.margin-3 {
  margin-right: 5px;
}
</style>
