let tween = {
  /**
   * 
   * @param {number} t 动画已消耗的时间
   * @param {number} b 原始位置
   * @param {number} c 目标位置
   * @param {number} d 动画持续时间
   */
  linear (t, b, c, d) {
    return c * t/d + b
  },
  easeIn (t, b, c, d) {
    return c * (t/=d)*t + b
  },
  strongEaseIn (t, b, c, d) {
    return c * (t/=d)*t*t*t*t + b
  },
  strongEaseOut (t, b, c, d) {
    return c * ((t=t/d - 1)*t*t*t*t + 1) + b
  },
  sinEaseIn (t, b, c, d) {
    return c * (t/=d)*t*t + b
  },
  sinEaseOut (t, b, c, d) {
    return c * ((t=t/d - 1)*t*t + 1) + b
  }
}

export default tween
