<template>
  <div>
      <FileUpload/>    
      <CustomLoading2/>
  </div>
</template>

<script>
import FileUpload  from '@/components/FileUpload/FileUpload';
import CustomLoading2 from '@/components/CustomLoading2/CustomLoading2';
export default {
    name:'Test',
    components:{
        FileUpload,
        CustomLoading2
    }
}
</script>

<style lang="scss" scoped>

</style>