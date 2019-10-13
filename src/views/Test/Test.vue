<template>
  <div>
      <FileUpload/>    
      <CustomLoading/>
  </div>
</template>

<script>
import FileUpload  from '@/components/FileUpload/FileUpload';
import CustomLoading from '@/components/CustomLoading/CustomLoading';
export default {
    name:'Test',
    components:{
        FileUpload,
        CustomLoading
    }
}
</script>

<style lang="scss" scoped>

</style>