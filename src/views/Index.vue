<template>
  <a-layout id="layout-side" style="height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo"><a-icon type="twitter" /></div>
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="file" /><span>资金管理</span></span>
          <a-menu-item key="1">
            <router-link to="/money">资金查询</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"> <a-icon type="file" /><span>用户管理</span></span>
          <a-menu-item key="2">
			  <router-link to="/user">用户查询</router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
			<div class="header">
				<h1 style="color: #42B983;margin: 0 15px;">游戏后台运营管理系统</h1>
				<div style="position: absolute;right: 40px;">
				  <span style="font-size: 18px;color: #000;">
					  欢迎，<a-icon type="reddit" />{{user}}
				  </span>
				  <span style="margin-left: 30px;font-size: 18px;color: #000;">
					  <a-icon type="twitter" />
					  <a @click="logout()" style="color: #000;">安全退出</a>
				  </span>
				</div>
			</div>
	  </a-layout-header>
      <a-layout-content style="margin:8px;">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '90vh' }">
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
	  user:"admin"
    };
  },
  methods:{
	  logout(){
		var that=this;
		this.$confirm({
		  title: '确认退出登陆吗?',
		  onOk() {
			that.$router.push('/login');
		  },
		  onCancel() {
			return;
		  },
		});
	  }
  }
};
</script>

<style>
#layout-side .logo {
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  margin: 15px 16px;
  text-align: center;
  color: #42B983;
  font-size: 25px;
}
.header{
	display: flex;
}
</style>
