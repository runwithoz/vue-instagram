<template>
  <div class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${post.userImage})` }"
      ></div>
      <span class="profile-name">{{ post.name }}</span>
    </div>
    <div
      class="post-body"
      :style="{ backgroundImage: `url(${post.postImage})` }"
      @click="$store.commit('like', index)"
    ></div>
    <div class="post-content">
      <p>{{ $store.state.likes[index] }} Likes</p>
      <p>
        <strong>{{ post.name }}</strong> {{ post.content }}
      </p>
      <p class="date">{{ post.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
    index: Number,
  },
};
</script>

<style>
.post {
  width: 100%;
  margin-bottom: 40px;
}
.profile {
  background-image: url("https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://images.unsplash.com/photo-1497290756760-23ac55edf36f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: gray;
  margin-top: -8px;
}
</style>
