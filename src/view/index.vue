<template>
  <view>
    <button type="primary" @click="toLogin">去登陆</button>
    <!-- {{ JSON.stringify(state.userInfo) }} -->
    <p>是否登陆：{{ user.login }}</p>
    <p>token：{{ user.token }}</p>
    <p>用户信息：</p>
    <p v-for="(item, index) in user.userInfo" :key="index">
      {{ item }}
    </p>
    {{ 2 | numberToCapitalize }}
  </view>
</template>

<script>
export default {
  onLoad() {
    console.log(this)
    this.$toast.success('sdsd ')
  },
  computed: {
    user() {
      return this.$s.state.user
    },
  },
  methods: {
    toLogin() {
      uni.navigateTo({
        url: 'test',
      })
    },
  },
}
</script>

<style></style>
