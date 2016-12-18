<template>
  <!-- 箭头部分 -->
  <div>
      <span v-bind:class="[glyphicon,active?upClass: downClass]" class="arrow glyphicon"  v-on:click="toggleActive"></span>
  </div>
</template>
<style>
  .arrow{
    margin: 15px 0;
    color: skyblue;
    cursor: pointer;
  }
</style>
<script>
  export default {
    data() {
      return {
        'leg': '',
        active: false,
        upClass: 'glyphicon-chevron-up',
        downClass: 'glyphicon-chevron-down'
      }
    },
    methods: {
      toggleActive: function() {
        this.active = !this.active
        this.$dispatch('child-leg', this.active)
      }
    }
  }
</script>
