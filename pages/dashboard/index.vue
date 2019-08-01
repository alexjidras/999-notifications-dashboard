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
      active="0"></Navigator>
      <Overview/>
      <SubscriptionsTable :subscriptions="subscriptions" :subscriptionCount="subscriptionCount"/>
      <NotificationsTable :notifications="notifications" :notificationCount="notificationCount"/>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Navigator from '../../components/Navigator'
import Overview from '../../components/Overview'
import SubscriptionsTable from '../../components/SubscriptionsTable'
import NotificationsTable from '../../components/NotificationsTable'

export default {
  middleware: 'auth',
  components: {
    Navigator,
    Overview,
    SubscriptionsTable,
    NotificationsTable
  },
  computed: {
    ...mapState('Subscription', {
      subscriptions: ({ lastSubscriptions }) => lastSubscriptions,
      subscriptionCount: ({ lastSubscriptionCount }) => lastSubscriptionCount
    }),
    ...mapState('Notification', {
      notifications: ({ lastNotifications }) => lastNotifications,
      notificationCount: ({ lastNotificationCount }) => lastNotificationCount
    })
  },
  methods: {
    ...mapActions('Subscription', ['getLastSubscriptions']),
    ...mapActions('Notification', ['getLastNotifications'])
  },
  created() {
    this.getLastSubscriptions()
    this.getLastNotifications()
  }
}
</script>

<style>
</style>
