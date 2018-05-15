import vue from "vue";
import vuex from "vuex";
vue.use(vuex);
//vuex接受插件
const myPlugin = store => {
    // 当 store 初始化后调用
    store.subscribe((mutation, state) => {
      // 每次 mutation 之后调用
      // mutation 的格式为 { type, payload }
    })
  }
export default new vuex.Store({
    state:{

    },
    getter:{

    },
    mutations:{

    },
    actions:{

    },
    plugins:[
        myPlugin
    ]
})