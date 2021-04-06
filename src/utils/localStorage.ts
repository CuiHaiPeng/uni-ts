import { UserInfo } from '@/model/user'
//本地存储key
enum localEnu {
  userInfo = 'USER_INFO',
  token = 'TOKEN',
}

/**
 * 存储用户信息
 * @param userInfo 用户信息
 */
export const setUserInfo = (userInfo: UserInfo) => {
  uni.setStorageSync(localEnu.userInfo, JSON.stringify(userInfo))
}

/**
 * 存储token
 * @param token token
 */
export const setToken = (token: string) => {
  uni.setStorageSync(localEnu.token, token)
}

/**
 * 读取token
 */
export const getToken = (): string => {
  return uni.getStorageSync(localEnu.token) || ''
}

/**
 * 读取userInfo
 */
export const getUserInfo = (): UserInfo => {
  const userInfo = uni.getStorageSync(localEnu.userInfo)
  if (userInfo) {
    return JSON.parse(userInfo)
  } else {
    return {}
  }
}
