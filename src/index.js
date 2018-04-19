import lottie from 'lottie-web'
import data from './data.json'

const element = document.getElementById('bm')
const replay = document.getElementById('replay')

var anim = lottie.loadAnimation({
  container: element,
  renderer: 'svg',
  loop: false,
  autoplay: true,
  animationData: data
})

window.addEventListener('click', ev => anim.goToAndPlay(0, true))
anim.addEventListener('complete', ev => {
  replay.style.opacity = 1
})
