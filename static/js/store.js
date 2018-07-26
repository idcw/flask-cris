Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    count: 0,
    data: Object,
    dataFile: ''
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})
