<template>
    <div class="sort-container">
        <div class="mr-2">
          <span>Status:</span>
          <select class="sort-select" :value="status" @change="handleStatusChange($event.target.value)">
              <option v-for="({ value, text, selected }, index) in statusOptions" :value="value" :key="index">{{ text }}</option>
          </select>
        </div>
        <div>
          <span>Abonament:</span>
          <select class="sort-select" :value="subId" @change="handleSubIdChange($event.target.value)">
              <option selected value="">Toate</option>
              <option v-for="{ name, id } in subIds" :value="id" :key="id">{{ name }}</option>
          </select>
        </div>
      </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      required: true
    },
    subId: {
      type: String,
      required: true
    },
    subIds: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    statusOptions: [{
      value: 'all',
      text: 'Toate',
      selected: true
    }, {
      value: 'new',
      text: 'Noi'
    }, {
      value: 'seen',
      text: 'Văzute'
    }]
  }),
  methods: {
    handleStatusChange(status) {
      if (status !== this.status) {
        this.$emit('status-change', { status })
      }
    },
    handleSubIdChange(subId) {
      if (subId !== this.subId) {
        this.$emit('subId-change', { subId })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sort-container {
  font-size: 16px;
  display: flex;
  margin-bottom: 20px;
  span {
      margin-right: 10px;
  }
  .sort-select {
      padding-right: 30px;
      background: #fff url(~assets/img/caret.svg) no-repeat right 0rem center;
      background-size: 30px 30px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
  }
  .mr-2 {
    margin-right: 20px;
}
}

</style>
