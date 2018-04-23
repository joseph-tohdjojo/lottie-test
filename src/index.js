import lottie from 'lottie-web'
import data from './data.json'

const element = document.getElementById('bm')

var anim = lottie.loadAnimation({
  container: element,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  animationData: data
})

const forward = ev => {
  anim.setDirection(1)
  anim.play()
}

const backward = ev => {
  anim.setDirection(-1)
  anim.play()
}

window.addEventListener('mousedown', forward)
window.addEventListener('touchstart', forward)
window.addEventListener('mouseup', backward)
window.addEventListener('touchend', backward)
