/*
 * @Author: cui
 * @Date: 2021-03-05 14:11:42
 * @LastEditors: 最后编辑时间
 * @LastEditTime: 2021-03-05 14:14:25
 * @Description: 说明
 */

/**
 * 加载动画
 * @param tips 提示语句
 * @returns 关闭loading
 */
export const showLoading = (tips: string = '加载中...'): (() => null) => {
  uni.showLoading({
    title: tips,
    mask: true,
  })
  uni.showNavigationBarLoading()
  return () => {
    uni.hideLoading()
    uni.hideNavigationBarLoading()
    return null
  }
}
