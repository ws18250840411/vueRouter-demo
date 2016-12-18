import PassengerInformation from '../components/PassengerInformation.vue'
import IncrementalRevenue from '../components/IncrementalRevenue.vue'
import CheckPayment from '../components/CheckPayment.vue'
import News from '../components/News.vue'
import Message from '../components/Message.vue'
import NewsDetail from '../components/NewsDetail.vue'

export default {
	/*默认导航到乘客信息组件*/
	'/': {
		component: PassengerInformation
	},
	/*乘客信息组件*/
	'passenger': {
		component: PassengerInformation
	},
	/*增值业务组件*/
	'incremental': {
		component: IncrementalRevenue,
		subRoutes: {
			'news': {
				component: News,
				subRoutes: {
					'detail/:id': {
						name: 'detail',
						component: NewsDetail
					}
				}
			},
			'message': {
				component: Message
			}
		}
	},
	'checkpayment':{
		component: CheckPayment
	}
}