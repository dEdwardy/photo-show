<template>
  <div class="index">
    <h3>Show Your Photos</h3>
    <FileUpload auto/>
  </div>
</template>

<script>
import FileUpload from '@/components/FileUpload/FileUpload'
export default {
  name: "Index",
  components: {
      FileUpload
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    
  }
};
</script>

<style lang="less">
.index {
    overflow: hidden;
    color: red;
    text-align: center;
    h3{
        margin: 10px;
    }
    .upload{
        margin: 10px auto;
    }
}
</style>