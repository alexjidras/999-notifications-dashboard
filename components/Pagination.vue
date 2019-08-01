<template>
    <ul class="pagination">
        <li
        v-for="({ type, number, active, disabled, icon }, index) in pages"
        :key="index"
        @click="handlePageChange(number)"
        :class="[ 'pagination-item', { disabled, active } ]"
        >
            <i v-if="type === 'control'" :class="icon" />
            {{ type === 'page' ? number : type === 'dots' ? '...' : '' }}
        </li>
    </ul>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      default: 10
    },
    page: {
      type: Number,
      required: true
    }
  },
  computed: {
    pages: function () {
      const pages = []
      const { page, total, limit } = this
      const last = Math.ceil(total / limit)

      if (last < 2) {
        return []
      }
      if (page === 1) {
        pages.push({ type: 'control', number: page, icon: 'fa fa-angle-left', disabled: true }, { type: 'page', number: 1, active: true })
      } else {
        pages.push({ type: 'control', number: page - 1, icon: 'fa fa-angle-left' }, { type: 'page', number: 1 })
      }
      if (page > 4) {
        pages.push({ type: 'dots' })
      }
      for (let i = page - 2; i < page + 3 && i < last; i++) {
        if (i > 1) {
          pages.push({ type: 'page', number: i, active: i === page })
        }
      }

      if (page + 3 < last) {
        pages.push({ type: 'dots' })
      }

      if (last !== page) {
        pages.push({ type: 'page', number: last }, { type: 'control', number: page + 1, icon: 'fa fa-angle-right' })
      } else {
        pages.push({ type: 'page', number: last, active: true }, { type: 'control', number: page, icon: 'fa fa-angle-right', disabled: true })
      }

      return pages
    }
  },
  methods: {
    handlePageChange(page) {
      if (page && page !== this.page) {
        this.$emit('page-change', { page })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
    .pagination-item {
        font-size: 18px;
        display: inline-block;
        line-height: 2;
        width: 2.25rem;
        text-align: center;
        margin-right: 0.5rem;
        cursor: pointer;
        &:hover {
            background-color: #f7fafc;
        }
        &.disabled {
        background-color: #EDF2F8;
        }
        &.active {
            color: #fff;
            background-color: #38B2AD;
            cursor: default;
        }
    }
}
</style>
