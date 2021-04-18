import { getUserInfo, getToken, setUserInfo, setToken } from '@/utils/localStorage'
import { UserInfo } from '@/model/user'
export interface User {
  login: boolean
  userInfo: UserInfo
  token: string
}
type Mutations = Record<string, (state: User, data?: any) => void>
//token
const token = getToken()
//state
const state: User = {
  login: !!token,
  userInfo: getUserInfo(),
  token,
}

const mutations: Mutations = {
  // vuex存储userInfo
  setUserInfo(state, userInfo) {
    setUserInfo(userInfo)
    state.userInfo = userInfo
  },
  //存放token
  setToken(state, token) {
    setToken(token)
    state.token = token
    state.login = true
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
