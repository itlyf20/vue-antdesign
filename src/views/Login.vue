<template>
  <div class="login">
	 <div class="login_form">
		 <h1>用户登录</h1>
		 <a-form class="login-form">
		     <a-form-item>
		       <a-input placeholder="用户名" v-model="form.username">
		         <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
		       </a-input>
		     </a-form-item>
		     <a-form-item>
		       <a-input type="password" v-model="form.password" placeholder="密码">
		         <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
		       </a-input>
		     </a-form-item>
		     <a-form-item>
		       <a-button type="primary" html-type="submit" @click="login()" class="login-form-button">
		         登录
		       </a-button>
		     </a-form-item>
		 </a-form>
	 </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
	  return{
		  form:{
			  username:"",
			  password:"",
		  },
	  }
  },
   methods: {
	   login(){
		   if(this.form.username==""||this.form.password==""){
			   this.$message.warning('用户名或密码不能为空！');
			   return;
		   }else if(this.form.username.length<3||this.form.username.length>6){
			   this.$message.warning('用户名长度在3-6位');
			   return;
		   }else if(this.form.password.length<5||this.form.password.length>12){
			   this.$message.warning('密码长度在5-12位');
			   return;
		   }else{
			   if(this.form.username=="admin"||this.form.password=="123456"){
				   this.$router.push("/index");
				   this.$message.success('登录成功！');
			   }else{
				  this.$message.warning('用户名和密码错误');
				  return; 
			   }
		   }
	   }
   },
}
</script>
<style scoped>
	.login{
		width: 100%;
		height: 100%;
		background-color: beige;
		background-size: 100% 100%;
		background-position: center center;
	}
	.login_form{
		background-color: #FFFFFF;
		position: absolute;
		left:50%;
		top:50%;
		width:400px;
		height:300px;
		margin:-150px 0 0 -190px;
		padding:40px;
		border-radius: 5px;
		border:1px solid #ccc;
	}
	
	.login-form-button{
		width: 100%;
	}
</style>
