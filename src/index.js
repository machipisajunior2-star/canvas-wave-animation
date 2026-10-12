import './style/main.scss'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight


// Wave animation across screen with wave effect
addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight
})

const wave = {
  length: 0.005,
  amplitude: 60,
  frequency: 0.02
}

let increment = wave.frequency;
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  let y = canvas.height;
  c.beginPath()
  c.moveTo(0, canvas.height)
  for(let i = 0; i < canvas.width; i++) {
      y -= 0.5;
      const yIncrement = Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment)
      c.lineTo(i, y + yIncrement)
      c.save()
      c.moveTo(i, y + yIncrement)
      c.lineTo(i, canvas.height)
      c.restore()
  }
  c.strokeStyle = 'white'
  c.stroke()
  c.closePath()

  increment += wave.frequency
}

animate()
