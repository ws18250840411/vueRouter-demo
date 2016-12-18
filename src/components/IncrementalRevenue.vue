<template>
	<div>
		<h1>这里是增值业务模块哦</h1>
		<div>
			<ul class="nav nav-tabs">
				<li>
					<a v-link="{ path: '/incremental/news'}">News新闻业务</a>
				</li>
				<li>
					<a v-link="{ path: '/incremental/message'}">Messages信息业务</a>
				</li>
			</ul>
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	// 当乘客信息不正确时，自动跳转到乘客信息页面
	export default {
		props:['flightInfoStatus'],
		route: {
			activate({redirect,next}){
				this.flightInfoStatus?next():redirect('/')
			}
		}
	}
</script>
