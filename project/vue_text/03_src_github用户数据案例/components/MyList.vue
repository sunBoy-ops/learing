<template>
  <div class="row">
    <!-- 显示用户信息 -->
    <div class="card" v-show="info.users.length" v-for="user in info.users" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 显示欢迎词 -->
    <h1 v-if="info.isFirst">欢迎访问！</h1>
    <!-- 显示加载信息 -->
    <h1 v-show="info.isLoading">加载中...</h1>
    <!-- 显示错误信息 -->
    <h1 v-show="info.errorMsg">{{ info.errorMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MyList',
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errorMsg: '',
        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on('getUpdateUsers', (usersDate) => {
      this.info = { ...this.info, ...usersDate };
    });
  },
};
</script>
<style lang="css">
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
