<template>
  <div>
    <!-- 게시물 갯수만큼 반복 -->
    <div v-if="step === 0">
      <Post
        :post="one"
        v-for="(one, index) in reversedPosts"
        :key="index"
        :index="reversedPosts.length - 1 - index"
      />
    </div>
    <!-- 필터 선택 페이지 -->
    <div v-if="step === 1">
      <!-- <div
        class="upload-image"
        :style="`background-image:url(${imageS})`"
      ></div> -->
      <input
        @change="emitFileChange"
        accept="image/*"
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="upload-image">Click to Upload an Image</label>
    </div>
    <!-- 글작성 업로드 페이지 -->
    <div v-if="step === 2">
      <div
        class="upload-image"
        :style="`background-image:url(${imageS})`"
      ></div>
      <div class="write">
        <textarea
          class="write-box"
          @input="$emit('write', $event.target.value)"
          placeholder="문구를 작성하세요."
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  name: "Container",
  data() {
    return {};
  },
  components: { Post: Post },
  props: {
    post: Array,
    step: Number,
    imageS: String,
  },
  methods: {
    emitFileChange(event) {
      this.$emit("file-change", event);
    },
  },
  computed: {
    reversedPosts() {
      return [...this.post].reverse();
    },
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: rgb(199, 199, 199);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
