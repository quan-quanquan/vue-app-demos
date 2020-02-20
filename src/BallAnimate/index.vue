<template>
  <div class="animate-container">
    <div id="ball" ref="ball"></div>
  </div>
</template>
<script>
import BallAnimate from './core/AnimateClass'
export default {
  data () {
    return {
      ball: null
    }
  },
  mounted () {
    this.ball = this.$refs.ball
    this.moving()
  },
  methods: {
    moving () {
      let animate = new BallAnimate(this.ball)
      animate.start('left', 450, 5000, 'strongEaseOut')
      console.log(this.ball.style.left)
    }
  }
}
</script>
<style scoped>
.animate-container {
  width: 500px;
  height: 500px;
  transform: translateY(50%);
  margin: 0 auto;
  margin-top: -250px;
  background-color: cadetblue;
}
#ball {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: coral;
  position: absolute;
}
</style>