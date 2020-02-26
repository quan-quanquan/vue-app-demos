<template>
  <div id="decorator">
    <h1>测试decorator插件</h1>
  </div>
</template>
<script>
  import TestDecoratorClass from './TestDecoratorClass'
  export default {
    mounted () {
      let t = new TestDecoratorClass()
      t.run(1)
    }
  }
</script>