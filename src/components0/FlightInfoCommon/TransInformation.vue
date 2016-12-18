<template>
  	<!-- 中转信息部分 -->
  	<div>
	  <div class="transit-info" v-show="transitExpanded">{{ flight.departInfo.city }}中转<span class="glyphicon glyphicon-time"></span>{{ transitTime }}</div>
	</div>
</template>
<script>
  export default {
    props: ['flight', 'transitExpanded']
  }
</script>
