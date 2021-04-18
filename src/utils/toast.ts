//返回值
type ToastReturnData = Promise<null>
/** 弹框 */
export type Toast = {
  /** 默认方法 */
  (param: UniApp.ShowToastOptions | string, config?: UniApp.ShowToastOptions): ToastReturnData
  /** 成功方法 */
  success: (tips: string, config?: UniApp.ShowToastOptions) => ToastReturnData
  /** 加载方法 */
  loading: (tips: string, config?: UniApp.ShowToastOptions) => ToastReturnData
}

//提示
const toast: Toast = function (param, config = {}) {
  const toastOptions: UniApp.ShowToastOptions = {
    title: '',
    duration: 2000,
    icon: 'none',
  }

  if (typeof param === 'string') {
    Object.assign(toastOptions, config, { title: param })
  } else {
    Object.assign(toastOptions, param)
  }

  return new Promise((resolve, reject) => {
    uni.showToast({
      ...toastOptions,
      success() {
        setTimeout(() => {
          resolve(null)
        }, toastOptions.duration)
      },
      fail() {
        reject(null)
      },
    })
  })
}

//成功框
toast.success = (tips, config = {}) => {
  return toast({
    title: tips,
    icon: 'success',
    ...config,
  })
}

//加载框
toast.loading = (tips, config = {}) => {
  return toast({
    title: tips,
    icon: 'loading',
    ...config,
  })
}

export default toast
