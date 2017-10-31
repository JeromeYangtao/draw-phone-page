let canvas = document.querySelector('.canvas')
canvas.addEventListener('touchstart', function (e) {
  console.log(e)
  let {
    pageX,
    pageY
  } = e.touches[0]

  addPoint(pageX, pageY)
  e.preventDefault()
})
canvas.addEventListener('touchmove', function (e) {
  console.log(e)
  let {
    pageX,
    pageY
  } = e.touches[0]

  addPoint(pageX, pageY)
  e.preventDefault()
})

function addPoint (x, y) {
  let div = document.createElement('div')
  div.style.position = 'absolute'

  div.style.top = y + 'px'
  div.style.left = x + 'px'
  div.style.height = '5px'
  div.style.width = '5px'
  div.style.background = 'black'
  div.style.borderRadius = '50%'

  document.body.appendChild(div)
}