<template>
    <div id="navbar-body" :style="{ marginTop }">
        <div id="navbar-user">
            <ul id="navbar-list">
                <template v-if="isAuthenticated">
                    <li class="navbar-item">
                        <nuxt-link class="navbar-link" to="/dashboard">dashboard</nuxt-link>
                    </li>
                    <li class="navbar-item">
                        <a class="navbar-link" @click="logout">iesire</a>
                    </li>
                </template>
                <template v-else>
                    <li class="navbar-item">
                        <nuxt-link class="navbar-link" to="/register">înregistrare</nuxt-link>
                    </li>
                    <li class="navbar-item">
                        <nuxt-link class="navbar-link" to="/login">intră</nuxt-link>
                    </li>
                    <li class="navbar-item navbar-lang">
                        <!-- <img class="navbar-lang-img" src="~assets/lang-ro.png"/> -->
                        <span class="navbar-link" >română</span>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapGetters(['isAuthenticated']),
    ...mapState('state/auth', {
      username: ({ user }) => user.username
    }),
    marginTop: function () { return ['login', 'register'].includes(this.$route.name) ? '-36px' : '0px' }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>

<style lang="scss">
#navbar-body {
    display: block;
    position: absolute;
    overflow: visible;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 500px;
    height: 36px;
    z-index: 4;
    font: normal 15px/1.2 Helvetica Neue,Helvetica,sans-serif;
    background: #474d59;
    transition: margin 0.3s ease-in-out;
}
#navbar-user {
    display: inline-block;
    height: 100%;
    width: 100%;
}
#navbar-list {
    display: flex;
    justify-content: flex-end;
    //padding-right: 10px;
}
.navbar-item {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        display: inline-block;
        padding: 0 14px;
        height: 100%;
        text-decoration: none;
        vertical-align: middle;
        line-height: 36px;
        border: none;
        background: none;

        &:hover {
            background-color: #32363e;
        }
        .navbar-link {
            color: #ddd;
        }

        &.navbar-lang {
            padding: 0 20px;
        }

        .navbar-lang-img {
            height: 100%;
            vertical-align: middle;
            height: 20px;

            &:after {
                display: inline-block;
                margin-left: .255em;
                vertical-align: .255em;
                content: "";
                border-top: .3em solid;
                border-right: .3em solid transparent;
                border-bottom: 0;
                border-left: .3em solid transparent;
            }
        }
}

</style>
