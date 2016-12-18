<template>
	<div>
		<h1>我是核对支付</h1>
		<div>
			\(^o^)/~
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
