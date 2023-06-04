<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      博客管理系统
    </div>
    <br>
    <div>
      你到后台啦！
    </div>
<!--    <div>-->
<!--      项目资料获取：关注后会收到自动回复的交流群号，三连截图私聊群主即可获得项目资料。-->
<!--    </div>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
