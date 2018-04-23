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

window.addEventListener('mousedown', ev => {
  anim.setDirection(1)
  anim.play()
})
window.addEventListener('touchstart', ev => {
  anim.setDirection(1)
  anim.play()
})
window.addEventListener('mouseup', ev => {
  anim.setDirection(-1)
  anim.play()
})
window.addEventListener('touchend', ev => {
  anim.setDirection(-1)
  anim.play()
})
