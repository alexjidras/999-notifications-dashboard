<template>
    <div class="overview">
        <AddButton/>
        <span class="divider"></span>
        <div class="new-notifications" >
            <div class="status-circle"></div>
            3 Notificări noi
        </div>
        <div class="notification-toggle">
            <ToggleButton v-model="notificationsChecked"/>
            <i :style="{ color: notificationsChecked ? 'rgb(101, 183, 251)' : '#dae1e7' }" class="fas fa-bell"></i>
        </div>
    </div>
</template>

<script>
import ToggleButton from './ToggleButton'
import AddButton from './AddButton'

export default {
  components: {
    AddButton,
    ToggleButton
  },
  data: () => ({
    notificationsChecked: true
  })
}
</script>

<style lang="scss">
.divider {
    flex-grow:1;
}
.new-notifications {
    font-size: 14px;
    display: inline-block;
    margin-right: 35px;
    .status-circle {
        display: inline-block;
        background-color: rgb(12, 194, 126);
        height: 10px;
        width: 10px;
        border-radius: 50%;
        margin-right: 3px;
    }
}
.overview {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
}
.notification-toggle {
    float: right;
}
</style>
