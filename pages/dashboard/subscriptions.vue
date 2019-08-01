<template>
    <div class="container">
      <Navigator
      :tabs="[{
          name: 'Prezentare',
          path: '/',
          icon: 'fas fa-align-center'
      },{
          name: 'Abonări',
          path: '/subscriptions',
          icon: 'fas fa-layer-group'
      }, {
          name: 'Notificări',
          path: '/notifications',
          icon: 'fas fa-comment-alt'
      }]"
      active=1></Navigator>
      <div class="mb-40">
        <AddButton/>
      </div>
      <SubscriptionsTable :subscriptions="subscriptions" :subscriptionCount="subscriptionCount"/>
      <Pagination :page="data.page" :limit="data.limit" :total="subscriptionCount" @page-change="onDataChange($event)"/>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Navigator from '../../components/Navigator'
import AddButton from '../../components/AddButton'
import SubscriptionsTable from '../../components/SubscriptionsTable'
import Pagination from '../../components/Pagination'

export default {
  middleware: 'auth',
  components: {
    Navigator,
    AddButton,
    SubscriptionsTable,
    Pagination
  },
  data: () => ({
    data: {
      limit: 10,
      page: 1
    }
  }),
  computed: {
    ...mapState('Subscription', {
      subscriptions: ({ subscriptions }) => subscriptions,
      subscriptionCount: ({ subscriptionCount }) => subscriptionCount
    })
  },
  methods: {
    ...mapActions('Subscription', ['getSubscriptions']),
    onDataChange(data) {
      this.data = { ...this.data, ...data }
      this.getSubscriptions(this.data)
    }
  },
  created() {
    this.getSubscriptions()
  }
}
</script>

<style>
.mb-40 {
  margin-bottom: 40px;
}
</style>
