<template>
  <div class="CustomLoading">
      <div class="progressNum">{{ progressNum }}%</div>
      <div v-if="progressNum===100" class="loadingContainer">
          <div class="loaded"></div>
          <div class="unloaded"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CustomLoading',
    props:{
        progressNum:{
            type:Number,
            default:0
        }
    },
    methods:{
        
    }
}
</script>

<style lang="less" scoped>
.CustomLoading{
    width: 100px;
    height: 4px;
    border-radius: 2px;
    .progressNum{
        text-align: center;
    }
    .loadingContainer{
        width: 100%;
        height: 4px;
        display: flex;
        .loaded{
            width: 0;
            background-color:rgb(76, 164, 214);
        }
        .unloaded{
            flex: 1;
            background-color:rgb(218, 26, 101);
        }
    }
}
</style>