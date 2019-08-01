<template>
<div class="container--outter">
  <div class="container notifications--outter">
    <div class="row">
      <div class="six columns" >
        <div class="notifications-body">
          <img src="~assets/img/999-logo.svg" class="img-999"/>
          <p class="title">Primește notificări</p>
          <p class="subtitle">Now is a global deployment network built on top of all existing cloud providers. It makes teams productive by removing servers and configuration, giving you a seamless developer experience to build modern scalable web apps.</p>
          <nuxt-link class="details-link" to="/details">Află mai multe</nuxt-link>
        </div>
      </div>
      <div class="six columns">
        <div class="notifications-img">
          <img class="img-phone" src="~assets/img/phone.png" />
        </div>
      </div>
    </div>
  </div>
  <hr class="section-line"/>
  <div class="container">
    <div class="row">
      <div v-for="(item, index) in pricingItems" class="four columns" :key="index">
        <div class="pricing-column" :style="{ backgroundColor: item.color }">
          <h3 class="pricing-price">{{ item.price }} Lei
            <span class="per-month">/Lună</span>
          </h3>
          <p class="pricing-text">{{ item.text }}</p>
          <PricingButton/>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import PricingButton from '../components/PricingButton'

export default {
  data: () => ({
    pricingItems: [
      {
        price: 20,
        text: '1 Abonare',
        color: '#FDBB29'
      },
      {
        price: 50,
        text: '3 Abonări',
        color: '#EF4826'
      },
      {
        price: 100,
        text: 'Nelimitat',
        color: '#ACB44D'
      }
    ]
  }),
  components: {
    PricingButton
  }
}
</script>
<style scoped lang="scss">
.img-999 {
  margin-top:-25px;
  margin-bottom: 40px;
  height: 75px;
}
.img-phone {
  height: 500px;
  /* box-shadow: rgba(0, 0, 0, 0.14) 0px 20px 50px 0px; */
}
.details-link {
  font-size:16px;
  color: #0070f3;
}
.notifications-body {
  margin-top: 70px;
}

.notifications-img {
  text-align:center;
  margin-top: 70px;
}

.title {
  /* font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; */
  display: block;
  font-weight: 400;
  font-size: 40px;
  letter-spacing: 1px;
  margin-bottom: 30px;
}

.subtitle {
  font-weight: 300;
  font-size: 18px;
  word-spacing: 5px;
  margin-bottom: 30px;
}

.links {
  padding-top: 15px;
}

.section-line {
  border-top: 1px solid rgb(234, 234, 234);
}

.pricing-column {
  text-align: center;
  color:white;
  padding: 40px;
  margin: 100px 10px;
  border-radius: 15px;
  box-shadow: 0 0 1px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.05), 0 10px 20px rgba(0,0,0,.1);
  .pricing-text {
    font-size: 18px;
    line-height: 1.7;
    display: block;
    margin-bottom: 15px;
    font-weight: 400;
  }
  .pricing-price {
    display: block;
    margin-bottom: auto;
    font-size: 42px;
    font-weight: 500;
  }
  .per-month {
    margin-right:5px;
    opacity: .75;
    font-size: 12px;
    margin-bottom: 8px;
    font-weight:400;
  }
}

.notifications--outter {
  height: calc(100vh - 36px)
}
</style>
