import { post, get } from '@/utils/request'

export const test = (test: number) =>
  get<
    {
      test: string
      test1: string
      data: string
      msg: string
    },
    {
      test: number
    }
  >('https://api.apiopen.top/getJoke?page=1&count=2&type=video', {
    test,
  })
