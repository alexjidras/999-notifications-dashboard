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
      active=2></Navigator>
      <NotificationSort :status="data.status" :subIds="subIds" :subId="data.subId" @subId-change="onDataChange($event)" @status-change="onDataChange($event)"/>
      <NotificationsTable :notifications="notifications" :notificationCount="notificationCount"/>
      <Pagination :page="data.page" :limit="data.limit" :total="notificationCount" @page-change="onDataChange($event)"/>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Navigator from '../../components/Navigator'
import NotificationSort from '../../components/NotificationSort'
import NotificationsTable from '../../components/NotificationsTable'
import Pagination from '../../components/Pagination'

export default {
  middleware: 'auth',
  components: {
    Navigator,
    NotificationSort,
    NotificationsTable,
    Pagination
  },
  data: () => ({
    data: {
      limit: 10,
      page: 1,
      subId: '',
      status: 'all'
    }
  }),
  computed: {
    ...mapState('Notification', {
      notifications: ({ notifications }) => notifications,
      notificationCount: ({ notificationCount }) => notificationCount,
      subIds: ({ subIds }) => subIds
    })
  },
  methods: {
    ...mapActions('Notification', ['getNotifications', 'getSubIds']),
    onDataChange(data) {
      this.data = { ...this.data, ...data }
      this.getNotifications(this.data)
    }
  },
  created() {
    this.getNotifications()
    this.getSubIds()
  }
}
</script>

<style>

</style>
