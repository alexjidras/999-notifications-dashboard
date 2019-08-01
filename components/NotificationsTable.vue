<template>
    <table class="subscriptions-table">
        <thead>
        <tr>
            <td><div class="subscriptions-num"><span>{{ notificationCount }}</span> Notificari</div></td>
        </tr>
        </thead>
        <tbody>
            <tr v-for="(notification, index) in notifications" :key="index">
                <td style="15%">
                    <div
                      class="status-circle"
                      :style="{ backgroundColor: notification.status === 0 ? '#09C27E' : '#fff'}">
                    </div>
                    <img class="subscription-image" :src="notification.image"/>
                </td>
                <td style="width: 30%">{{ notification.name }}</td>
                <td>{{ `${notification.price[0].value} ${currencies[notification.price[0].currency]}` }}</td>
                <td><LinkButton :href="notification.id"/></td>
                <td><i class="fas fa-trash-alt"></i></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import LinkButton from '../components/LinkButton'
import { currencies } from '../constants'
export default {
  components: {
    LinkButton
  },
  data: () => ({
    currencies
  }),
  props: {
    notifications: {
      type: Array,
      required: true
    },
    notificationCount: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.status-circle {
        display: inline-block;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        margin-right: 20px;
        margin-bottom: 20px;
    }
img.subscription-image {
    height: 50px;
}
.subscriptions-table {
    border-collapse: collapse;
    border-radius: 5px;
    width: 100%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
    thead {
        border-bottom: 1px solid #E6E6E9;
    }
    tbody {
        font-size: 14px;
        tr:not(:last-child) {
          border-bottom: 1px solid #E6E6E9;
        }
    }
    td {
        padding: 20px;
        border-bottom: 0px;
    }
    .subscriptions-num {
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
        width: 150px;
        background: #fff;
        padding: 10px 30px;
        font-size: 16px;
        margin-left: -40px;
        border-radius: 5px;
        border: 1px solid #E9E9E9;
        span {
            font-weight: bold;
        }
    }
}
</style>
