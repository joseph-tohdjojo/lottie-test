import lottie from 'lottie-web'
import data from './data.json'

var anim = lottie.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: data
})
