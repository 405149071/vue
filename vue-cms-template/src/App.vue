<template>
  <div class="app-container">
    <!-- header -->
    <mt-header fixed title="黑马程序员"></mt-header>

    <h1>这是 App 组件</h1>

    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
html, body {
  h1 {
    background-color: rgb(94, 16, 16);
  }
  
  .app-container{
    padding-top: 40px;
  }

}
</style>
