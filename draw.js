/*画板*/
class Draw {
  constructor (canvas, context) {
    this.canvas = canvas
    this.width = canvas.width
    this.height = canvas.height
    //2d对象
    this.context = context
    //图形样式
    this.style = {
      strokeColor: '#000',
      fillColor: '#000',
      lineWidth: '1'
    }
  }

  init () {
    this.context.fillStyle = this.style.fillColor
    this.context.strokeStyle = this.style.strokeColor
    this.context.lineWidth = this.style.lineWidth
  }

  line (x1, y1, x2, y2) {
    this.context.beginPath()
    this.init()
    this.context.moveTo(x1, y1)
    this.context.lineTo(x2, y2)
    this.context.stroke()
    this.context.closePath()
  }
}