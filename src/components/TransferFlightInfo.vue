<template>
  <div class="text-center flight-info">
    <supplier :flight="flights[0]" v-if="flights[0].supplier"></supplier>
    <flight-header :flight="flights[0]" :arrive-city="flights[1].arriveInfo.city"></flight-header>
    <flight-code-info :class="{'m-b-0': !transitExpanded}" :flight="flights[0]"></flight-code-info>
    <flight-code-info :class="{'m-t-0': !transitExpanded}" :flight="flights[1]"
                      v-if="!transitExpanded"></flight-code-info>
    <flight-detail :flight="flights[0]"
                   :leg="1"
                   :transit-expanded="transitExpanded"
                   :transit-time="transitTime"
                   :transit-flight="flights[1]"></flight-detail>
    <trans-info :flight="flights[0]" :transit-expanded="transitExpanded"></trans-info>
    <flight-code-info :flight="flights[1]" v-if="transitExpanded"></flight-code-info>
    <flight-detail :flight="flights[1]"
                   :leg="2"
                   :first-depart-date-time="new Date(flights[0].departInfo.time)"
                   v-show="transitExpanded"></flight-detail>
    <flight-arrow></flight-arrow>
  </div>
</template>

<script>
  import Supplier from './FlightInfoCommon/Supplier.vue'
  import FlightHeader from './FlightInfoCommon/FlightHeader.vue'
  import FlightCodeInfo from './FlightInfoCommon/FlightCodeInfo.vue'
  import FlightDetail from './FlightInfoCommon/FlightDetail.vue'
  import FlightArrow from './FlightInfoCommon/FlightArrow.vue'
  import TransInfo from './FlightInfoCommon/TransInformation.vue'

  import {flightInfoCoerce, flightInfoValidator, getDuration} from '../js/flightInfoFns'

  export default {
    data () {
      return {
        transitExpanded: false
      }
    },
    props: {
      flights: {
        required: true,
        type: Array,
        validator: flightInfoValidator,
        coerce: flightInfoCoerce
      }
    },
    computed: {
      // 第二航段起飞时间
      departDateTime: function () {
        return new Date(this.flights[1].departInfo.time)
      },
      // 首航段到达时间
      arriveDateTime: function() {
        return new Date(this.flights[0].arriveInfo.time)
      },
      // 中转时长
      transitTime: function () {
        return getDuration(this.arriveDateTime, this.departDateTime)
      }
    },
    // 通过$dispatch来传递子组件的数据
    events: {
      'child-leg': function(msg) {
        this.transitExpanded = msg
      }
    },
    components: {
      Supplier,
      FlightHeader,
      FlightCodeInfo,
      FlightDetail,
      FlightArrow,
      TransInfo
    }
  }
</script>
