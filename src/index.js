import lottie from 'lottie-web'
import data from './data.json'

const element = document.getElementById('bm')

var anim = lottie.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  animationData: data
})

element.addEventListener('click', ev => anim.play())
