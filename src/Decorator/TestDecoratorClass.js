function log(target, name, descriptor) {
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

export defalut Car {
  @log
  run() {
    console.log('car run')
  }
}
