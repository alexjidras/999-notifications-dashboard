<template>
    <table class="subscriptions-table">
        <thead>
        <tr>
            <td><div class="subscriptions-num"><span>{{ subscriptionCount }}</span> Abonări</div></td>
        </tr>
        </thead>
        <tbody>
            <tr v-for="(subscription, index) in subscriptions" :key="index">
                <td style="width: 15%">
                    <img class="subscription-image" :src="subscription.image"/>
                </td>
                <td style="width: 30%">{{ subscription.name }}</td>
                <td><i class="fas fa-bell"></i></td>
                <td>{{ subscription.notificationCount }} Notificari</td>
                <td><i class="far fa-ellipsis-v"></i></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  props: {
    subscriptions: {
      type: Array,
      required: true
    },
    subscriptionCount: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
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
