<template>
  <img :src="'../../img/' + flightCompanyCode + '.png'" class="flight-image">{{ flightCompanyName }} {{ flightCode }}
</template>

<script>
import {flightCompanies} from '../../js/flightInfoConsts'

export default {
  props: ['flightCode'],
  computed: {
    flightCompanyCode: function() {
      return this.flightCode.substr(0, 2).toLowerCase()
    },
    flightCompanyName: function() {
      return flightCompanies[this.flightCompanyCode]
    }
  }
}
</script>
