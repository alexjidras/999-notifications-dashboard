<template>
    <div class="container">
        <div class="main">
            <div class="center-content">
                <Notification :message="error" v-show="error"/>
                 <img src="~assets/img/999-logo.svg" class="img-999"/>
                <div class="auth-form-body">
                      <!-- <div class="title-box">
                          Înregistrare
                      </div> -->
                    <form name="login" class="login-form" method="POST" @submit.prevent="register">
                        <label class="login-label">Nume utilizator</label>
                        <div style="position: relative">
                            <i class="fas fa-user input-icon"></i>
                        <input
                            name="username"
                            v-model="username"
                            type="text"
                            class="login-input"
                            required
                            autofocus
                        />
                        </div>
                        <label class="login-label">Parolă</label>
                        <div style="position: relative">
                            <i class="fas fa-lock input-icon"></i>
                        <input
                            name="password"
                            v-model="password"
                            type="password"
                            class="login-input"
                            style="margin-bottom: 10px"
                            required
                        />
                        </div>
                        <input
                        v-model="agreement"
                        type="checkbox"
                        required
                        /><span class="agreement"> Accept termenii și condițiile</span>
                        <button class="button-primary login-submit" type="submit">Înregistrare</button>
                    </form>
                </div>
                <p class="register">Ești deja înregistrat? <nuxt-link to="/login" class="register-link">Loghează-te</nuxt-link></p>
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
    title: 'Înregistrare',
    bodyAttrs: {
      style: 'background: #262830'
    }
  },
  data() {
    return {
      username: '',
      password: '',
      agreement: false,
      error: null
    }
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('/auth/register', {
          username: this.username,
          password: this.password
        })
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
.input-icon {
    position: absolute;
    top: 14px;
    left: 10px;
    font-size: 16px;
}
.agreement {
  font-size: 14px;
  color: #fff;
}
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
    margin-top: 15px;
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
    padding-left: 32px;
}

.login-label {
    color: #fff;
    font-size: 16px;
    margin-bottom: 10px;
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
