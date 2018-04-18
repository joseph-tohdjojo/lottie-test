const lottie = require('lottie-web')
const data = require('./data.json')

var anim = lottie.loadAnimation({
  container: document.getElementById('bm'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: data // the path to the animation json
})

anim.play()
