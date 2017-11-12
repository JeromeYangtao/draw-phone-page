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
    //画图的方式
    this.drawStyle = 'stroke'
  }

  init () {
    this.context.fillStyle = this.style.fillColor
    this.context.strokeStyle = this.style.strokeColor
    this.context.lineWidth = this.style.lineWidth
  }

  // 直线
  line (x1, y1, x2, y2) {
    this.context.beginPath()
    this.init()
    this.context.moveTo(x1, y1)
    this.context.lineTo(x2, y2)
    this.context.stroke()
    this.context.closePath()
  }

  // 矩形
  rect (x1, y1, x2, y2) {
    this.init()
    this.context.beginPath()
    let width = x2 - x1
    let height = y2 - y1
    this.context.rect(x1, y1, width, height)
    this.context[this.drawStyle]()
    this.context.closePath()
  }
}