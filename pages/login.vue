<template>
    <div class="container">
        <div class="main">
            <div class="center-content">
                <Notification :message="error" v-show="error"/>
                 <img src="~assets/999-logo.svg" class="img-999"/>
                <div class="auth-form-body">
                      <!-- <div class="title-box">
                          Autentificare
                      </div> -->
                    <form name="login" class="login-form" method="POST" @submit.prevent="login">
                        <label class="login-label">Nume utilizator</label>
                        <input
                            name="username"
                            v-model="username"
                            type="text"
                            class="login-input"
                            required
                        />
                        <label class="login-label">Parolă<nuxt-link class="forgot-password" to="/forgot-password">Am uitat parola</nuxt-link></label>
                        <input
                            name="password"
                            v-model="password"
                            type="password"
                            class="login-input"
                            required
                        />
                        <button class="button-primary login-submit" type="submit">Intră</button>
                    </form>
                </div>
                <p class="register">Nu ai cont? <nuxt-link to="/register" class="register-link">Înregistrează-te</nuxt-link></p>
            </div>
        </div>
    </div>
</template>

<script>
import Notification from '~/components/Notification'

export default {
  middleware: 'guest',
  components: {
    Notification
  },
  head: {
    title: 'Autentificare',
    bodyAttrs: {
      style: 'background: #262830'
    }
  },
  data() {
    return {
      username: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })

        this.$router.push('/dashboard')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login-form{
    margin-bottom: 10px;
}
.auth-form-body {
    background: #434857;
    border-radius: 5px;
    border: 1px solid #434857;
    padding: 25px;
    margin-bottom: 20px;
}
.img-999 {
    height: 50px;
    margin: 0 auto;
    display: block;
    margin-bottom: 30px;
}
.main {
    min-height: 100vh;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-top: -70px;
}
.center-content {
    margin: 0 auto;
    width: 300px;
}
.title-box {
    margin-bottom: 20px;
    text-align: center;
    font-size: 30px;
}
.login-submit {
    width: 100%;
    font-size: 16px;
    background: #FF4C01;
    border-color: #FF4C01;
    &:focus, &:active, &:hover {
      background: #FF4C01;
      border-color: #FF4C01;
    }
}
.login-input {
    font-size: 16px;
    margin-bottom: 15px;
    width: 100%;
    &:focus {
      border-color: #fff;
    }
}

.login-label {
    color: #fff;
    font-size: 16px;
    margin-bottom: 5px;
}
.register {
    font-size: 16px;
    text-align: center;
    margin-bottom: 5px;
    color: #fff;
}
.forgot-password {
    float: right;
    font-size: 14px;
}
</style>
