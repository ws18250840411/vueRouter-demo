<template>
	<div id="app">
		<div class="row">
			<div class="col-xs-offset-2 col-xs-8">
				<!--顶部标题-->
				<div class="page-header text-center">
					<h2>机票预订录入界面</h2>
				</div>
			</div>
		</div>
		<div class="row flg-content">
			<!-- 导航栏部分 -->
			<div class="col-xs-8 col-xs-offset-1">
				<div class="list-group clearfix">
					<!--使用指令v-link进行导航-->
					<a class="list-group-title" v-link="{ path: '/',  activeClass: 'active'}" exact>乘客信息</a>
					<a class="list-group-title" v-link="{ path: '/incremental',  activeClass: 'active'}">增值业务</a>
					<a class="list-group-title" v-link="{ path: '/checkpayment',  activeClass: 'active'}">核对支付</a>
					<!--底部的线条-->
					<div class="fight-lines"></div>
				</div>
			</div>
			<!-- 路由渲染部分 -->
			<div class="col-xs-6">
				<div class="panel">
					<div class="panel-body">
						<!--用于渲染匹配的组件-->
						<router-view :flight-info-status="flightInfoStatus"  keep-alive></router-view>
					</div>
				</div>
			</div>
			<!-- 机票显示部分 -->
			<div class="col-xs-6">
				<div class="col-xs-12">
					<transfer-flight-info :flights="flights"></transfer-flight-info>
				</div>
				<div class="col-xs-12">
					<h2 class="text-center flight-info pice-item">这里是价格信息</h2>
				</div>
			</div>
		</div>
		<!-- 跳转按钮 -->
		<div class="row">
			<div class="col-xs-8 col-xs-offset-1 back-go">
				<button :disabled="$route.path === '/'"  @click="backPage" type="button" class="btn btn-primary">上一步</button>
                    		<button :disabled="!flightInfoStatus||$route.path === '/checkpayment'" @click="goPage" type="button" class="btn btn-primary">下一步</button>
			</div>
		</div>
	</div>
</template>

<style>
	body {
		background-color: #f7f8f9;
	}
	.flg-content {
		background-color: #fff;
	}
	ul {
		margin-top: 10px;
	}
	.list-group-title {
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto;
		display: inline-block;
		width: 65px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		background-color: #f7f8f9;
		z-index: 9999;
	}
	.list-group a:nth-child(1) {
		left: 0px;
	}
	.list-group a:nth-child(2) {
		left: 0;
		right: 0;
	}
	.list-group a:nth-child(3) {
		right: 0;
	}
	.list-group {
		position: relative;
		height: 60px;
	}
	.fight-lines {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		width: 100%;
		height: 1px;
		background-color: #18bc9c;
	}
	.list-group .active {
		color: red;
	}
	/*价格样式部分*/
	.pice-item {
		padding: 10px;
		font-size: 24px;
	}
	.back-go {
		margin-top: 20px;
	}
</style>
<script>
	import DirectFlightInfo from './components/DirectflightInfo.vue'
	import TransferFlightInfo from './components/TransferFlightInfo.vue'
	/* eslint-disable no-new */
	export default {
		data () {
			return {
			      	flightInfoStatus: false,
			         	directFlight: {
					flightCode: 'MU9345',
						sharedFlightCode: 'FM9345',
						aircraft: '波音737-800',
						departInfo: {
						city: '上海',
						airport: '浦东国际机场',
						terminal: 'T2',
						time: '2016-10-13 22:30'
					},
					arriveInfo: {
						city: '武汉',
						airport: '天河国际机场',
						terminal: 'T2',
						time: '2016-10-14 00:35'
					},
					subclass: 'Y',
					supplier: {
						name: '上海华程西南旅行社有限公司',
						code: '08309722'
					}
				},
				flights: [
					{
						flightCode: 'CA1794',
						aircraft: '空中客车 A320',
						departInfo: {
							city: '呼和浩特',
							airport: '白塔国际机场',
							time: '2016-10-31 19:25'
						},
						arriveInfo: {
							city: '杭州',
							airport: '萧山国际机场',
							terminal: 'T1',
							time: '2016-10-31 21:50'
						},
						subclass: 'Y',
						supplier: {
							name: '上海华程西南旅行社有限公司',
							code: '08309722'
						}
					}, {
						flightCode: 'MU1731',
						aircraft: '空中客车 A321',
						departInfo: {
							city: '杭州',
							airport: '萧山国际机场',
							terminal: 'T1',
							time: '2016-11-01 07:30'
						},
						arriveInfo: {
							city: '深圳',
							airport: '宝安国际机场',
							terminal: 'T3',
							time: '2016-11-01 09:50'
						},
						subclass: 'Y',
						supplier: {
							name: '上海华程西南旅行社有限公司',
							code: '08309722'
						}
					}
				]
			}
		},
		components: {
		  	DirectFlightInfo,
			TransferFlightInfo
		},
		methods:{
			backPage:function(){
				//后退
				history.back()
			},
			goPage:function(){
				//前进
				if(this.$route.path === '/'){
					this.$router.go('/incremental')
				} else {
					this.$router.go('/checkpayment')
				}
				
			}
		},
		// 通过$dispatch来传递子组件的数据
		events: {
			'child-ste': function(msg) {
				this.flightInfoStatus=msg;
			}
		}
	}
</script>