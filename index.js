let drawing = document.querySelector('#drawing')

//确定浏览器支持canvas
if (drawing.getContext) {
  let context = drawing.getContext('2d')
  // set canvas width and height
  context.canvas.width = document.documentElement.clientWidth
  context.canvas.height = document.documentElement.clientHeight

  let drawObj = new Draw(drawing, context)

  let coordinates = []
  drawing.addEventListener('touchstart', function (e) {
    let {
      pageX,
      pageY
    } = e.touches[0]
    coordinates.push(pageX, pageY)

    if (coordinates.length > 2) {
      console.log(coordinates)
      drawObj.line(coordinates[0], coordinates[1], coordinates[2], coordinates[3])
      coordinates = []
    }

    e.preventDefault()
  })
} else {
  document.body.innerHTML = '抱歉您的浏览器不支持drawing，请升级浏览器版本或者更换其他浏览器浏览'
}
