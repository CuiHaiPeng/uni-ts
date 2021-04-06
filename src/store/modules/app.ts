export interface App {
  crumbsArr: Array<string>
}

const state: App = {
  crumbsArr: ['首页'],
}

const mutations = {
  ADDCRUMBSARR: (state: any, view: any) => {
    state.crumbsArr.push(view)
  },
  DELCRUMBSARR: (state: any, view: any) => {
    let index = state.crumbsArr.indexOf(view)
    if (index > -1) {
      state.crumbsArr.splice(index, 1)
    }
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
