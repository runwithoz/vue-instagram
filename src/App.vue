<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step === 0" @click="step++">Next</li>
      <li v-if="step === 1" @click="step++">Next</li>
      <li v-if="step === 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" alt="logo" />
  </div>
  <Container
    :post="post"
    :step="step"
    :imageS="imageS"
    @write="작성한글 = $event"
    @file-change="upload"
  />
  <button v-if="step === 0 && 더보기 !== 3" @click="more">더보기</button>
  <div class="footer">
    <div class="footer-button-plus">
      <div v-if="step === 0" class="input-plus" @click="step = 1">+</div>
    </div>
  </div>
</template>
<script>
import Container from "./components/Container.vue";
import axios from "axios";
import dayjs from "dayjs";

export default {
  name: "App",
  data() {
    return {
      post: [],
      loading: true,
      error: null,
      더보기: 1,
      step: 0,
      imageS: "",
      작성한글: "",
      formattedDate: dayjs().format("M월 D일"), // YYYY-MM-DD 형식으로 날짜 포맷
    };
  },
  async created() {
    try {
      const response = await axios.get(
        "https://runwithoz.github.io/vuestagram/posts.json"
      ); // URL을 적절한 JSON API로 변경
      const posts = response.data;
      this.post = posts;
    } catch (error) {
      this.error = error;
      console.error("Error fetching data:", error);
    } finally {
      this.loading = false;
    }
  },
  components: {
    Container: Container,
  },
  methods: {
    more() {
      axios
        .get(
          `https://runwithoz.github.io/vuestagram/viewmore${this.더보기}.json`
        )
        .then((response) => {
          this.post.unshift(response.data);
          this.$store.commit("changePosts", this.post);
          this.더보기++;
        });
    },
    upload(e) {
      const 파일 = e.target.files; // 업로드 된 모든 파일들.
      console.log(파일[0]); // 업로드 된 파일을 콘솔에서 출력.
      const url = URL.createObjectURL(파일[0]); // url 생성.
      console.log(url);
      this.imageS = url;
      this.step = 2;
    },
    publish() {
      const 내게시물 = {
        name: "milk_thief",
        userImage: "https://runwithoz.github.io/vuestagram/img_06.jpg",
        postImage: this.imageS,
        likes: 0,
        date: this.formattedDate,
        liked: false,
        content: this.작성한글,
        filter: "perpetua",
      };
      this.post.push(내게시물);
      this.step = 0;
      this.$store.commit("changePosts", this.post);
    },
  },
};
</script>

<style>
@import "./css/style.css";
</style>
