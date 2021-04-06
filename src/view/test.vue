<!--
 * @Author: cui
 * @Date: 2021-03-04 11:42:00
 * @LastEditors: 最后编辑时间
 * @LastEditTime: 2021-03-05 14:59:43
 * @Description: 说明
-->
<template>
  <div>
    <button type="primary" open-type="getUserInfo" @getuserinfo="login">立即登陆</button>
    <button type="primary" @click="click">测试</button>
  </div>
</template>

<script>
import { test } from '@/api/test'
import { showLoading } from '@/utils'
const testLogin = userInfo => {
  return new Promise(reslove => {
    const loading = showLoading('登录中')
    setTimeout(() => {
      loading()
      reslove({
        code: 200,
        data: {
          userInfo,
          token: '我是token',
        },
      })
    }, 3000)
  })
}
export default {
  onLoad() {},
  methods: {
    async login({ detail }) {
      //拿到用户数据 发送给后台
      const { code, data } = await testLogin(detail.userInfo)
      //返回的数据
      const { userInfo, token } = data
      //登陆成功
      if (code === 200) {
        this.$s.commit('user/setUserInfo', userInfo)
        this.$s.commit('user/setToken', token)
        await this.$toast.success('登陆成功')
        this.$to('back')
      }
    },
    async testApi(content) {
      try {
        const { data } = await test(content)
        console.log('返回成功:', data)
      } catch (err) {
        console.log('失败:', err)
      }
    },
    //接口并发
    async click() {
      console.log(11)
      const { testApi } = this
      testApi(22)
      testApi(22)
      testApi(22)
      testApi(22)
      testApi(22)
      testApi(22)
      testApi(22)
      testApi(22)
      testApi(22)
      testApi(22)
      testApi(224)
    },
  },
}
</script>

<style></style>
