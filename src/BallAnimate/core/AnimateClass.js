export default class Animate {
  constructor (dom) {
    this.dom = dom // 进行运动的dom节点
    this.startTime = 0
    this.startPos = 0
    this.endPos = 0
    this.propertyName = null // dom节点需要被改变的css属性名
    this.easing = null
    this.duration = null // 动画持续时间
  }

  start (propertyName, endPos, duration, easing) {
    this.startTime = +new Date
    this.startPos = this.dom.getBoundingClientRect()[propertyName]
    this.propertyName = propertyName
    this.endPos = endPos
    this.duration = duration
    this.easing = easing

    let timeId = setInterval(() => {
      if (this.step() === false) {
        clearInterval(timeId)
      }
    })
  }

  step () {
    let t = +new Date

    if (t >= this.startTime + this.duration) {
      this.update(this.endPos)
      return false
    }

    let usedTime = t - this.startTime
    let disTance = this.endPos - this.startPos
    let pos = this.easing(usedTime, this.startPos, disTance, this.duration)
    this.update(pos)
  }

  update (pos) {
    this.dom.style[this.propertyName] = pos + 'px'
  }
}