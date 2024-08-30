import { createStore } from "vuex";
import postdata from "@/assets/postdata";

export default createStore({
  state() {
    // 데이터 저장소
    return {
      postdata: postdata,
      name: "HM",
      age: 28,
      likes: postdata.map((post) => post.likes),
    };
  },
  getters: {},
  mutations: {
    // 데이터 수정방법을 정의
    이름변경(state) {
      state.name = "park";
    },
    plus(state) {
      state.age++;
    },
    like(state, index) {
      state.likes[index]++;
    },
    changePosts(state, posts) {
      state.postdata = posts;
      state.likes = posts.map((post) => post.likes);
    },
  },
  actions: {},
  modules: {},
});
