<template>
  <div class="fileUpload">
    <input
      type="file"
      name="filename"
      :accept="accept"
      @change="handleInputChange()"
      multiple
      id="input"
      style="display: none"
    />
    <div class="box" v-for="(item,index) in files" :key="index">
      <div class="content" v-if="item.src && item.src!==''">
        <img :src="item.src" :title="item.title" :alt="item.title"/>
        <div class="ok">
            <i class="el-icon-check"></i>
        </div> 
        <div class="mask">
          <i class="el-icon-delete" @click="handleDelete(index)"></i>
        </div>
      </div>
      <div  class="filling" v-else>
        <i class="el-icon-loading rotating"></i>
      </div>   
      <CustomLoading :progressNum="item.num" v-if="item.num"/>
    </div>
    <div class="plusBtnWrap" @click="handleClickPlusBtn()">
      <div class="plusBtn">
        <i class="el-icon-plus"></i>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 实现了预览 上传暂未实现
 */
import { Input, Button, Upload } from "element-ui";
import CustomLoading from "@/components/CustomLoading/CustomLoading";
import { read } from "fs";
export default {
  name: "FileUpload",
  components: {
    Input,
    Button,
    Upload,
    CustomLoading
  },
  props: {
    accept: {
      type: String,
      default: "image/*"
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    action: {
      type: String
    },
    files: {
      default: () => {
        return [
          
        ];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClickPlusBtn() {
      let input = document.getElementById("input");
      input.click();
    },
    handleDelete(index) {
      this.files.splice(index, 1);
    },
    handleInputChange() {
      let _this = this;
      let files = document.getElementById("input").files;
      console.log(files);
      if (files) {
        [].forEach.call(files, _this.readAndPreview);
      }
    },
    readAndPreview(file) {
      console.warn(file);
      let _this = this;
      let type = file.type;
      let isImage = type.includes("image");
      if (!isImage) {
        alert("情上传图片格式的文件");
        return;
      }
      let reader = new FileReader();
      let data = {
        title: file.name,
        num: 0
      };
      reader.onloadstart = function() {
        _this.files.push(data);
      };
      reader.onload = function() {
        _this.$set(data, "src", reader.result);
        console.log(data);
      };
      let num;
      reader.onprogress = function(e) {
        num = parseInt((e.loaded / e.total) * 100, 10);
        console.log(num);
        _this.$set(data, "num", num);
        // data.num = num;
      };

      // reader.onload = () => {
      //     let div = document.createElement('div');
      //     div.className = 'box';
      //     div.style.display = 'inline-block';
      //     let img = document.createElement('img');
      //     div.style.position = 'relative';
      //     div.style.margin = '10px';
      //     img.style.height = '180px';
      //     img.style.width = '180px';
      //     img.title = file.name;
      //     // img.style.cssText = img.style.cssText+ ';border-radius:50%';

      //     let layer = document.createElement('div');
      //     layer.style.position = 'absolute';
      //     layer.style.width = '180px';
      //     layer.style.height = '180px';
      //     layer.style.left = '0';
      //     layer.style.top = '0';
      //     layer.style.opacity= '0';
      //     layer.style.backgroundColor = 'rgb(0,0,0,.4)'
      //     // layer.style.display= 'none';

      //     let close = document.createElement('i');
      //     close.className = 'el-icon-delete';
      //     close.style.fontSize = '36px';
      //     close.style.position = 'absolute';
      //     close.style.top = '50%';
      //     close.style.left = '50%';
      //     close.style.transform = 'translate(-50%,-50%)';
      //     close.style.borderRadius='50%';
      //     close.style.cursor = 'pointer';
      //     close.style.display = 'none';
      //     close.style.color = 'white';
      //     close.style.backgroundColor = 'rgb(0,0,0,.2)';
      //     let plusBtnWrap = document.querySelector('.plusBtnWrap');
      //     layer.onmouseover = (e) =>{
      //         layer.style.opacity= '1';
      //         close.style.display = 'block'
      //     }
      //     layer.onmouseout = (e) => {
      //         layer.style.opacity= '0';
      //         close.style.display = 'none'
      //     }
      //     close.onclick = (e) => {
      //         let box = e.target.parentNode.parentNode;
      //         console.log(e.target.parentNode.parentNode)
      //         box.remove();
      //     }
      //     img.src=reader.result;
      //     _this.files.push(reader.result)
      //     layer.insertAdjacentElement('afterbegin',close);
      //     div.insertAdjacentElement('afterbegin',img);
      //     div.insertAdjacentElement('beforeend',layer);
      //     plusBtnWrap.insertAdjacentElement('beforebegin',div);
      // }

      reader.readAsDataURL(file);
    }
  }
};
</script>

<style lang="less" scoped>
.fileUpload {
  padding: 10px;
  .box {
    display: inline-table;
    position: relative;
    margin: 10px;
    .filling{
        width: 180px;
        display:inline-table;
        .rotating{
          color: red;
          font-size: 28px;
          position: absolute;
          left: 40%;
          top: -180%;
          transform: translate(-50%, -50%);
              }
    }
    & div.content{
        height: 180px;
        display: inline-table;
    }
    & img {
      height: 180px;
      width: 180px;
      border-radius: 10px;
    }
    & .ok{
        position: absolute;
        border-radius:0 10px 0 0;
        right:0;
        top:0;
        width:0;
        height:0;
        border-top:18px solid green;
        border-bottom:18px solid transparent;
        border-left:18px solid transparent;
        border-right:18px solid green;
        & i{
            position: absolute;
            right: -14px;
            top:-14px;
            font-size: 18px;
            color: #fff;
        }
    }
    & div.mask {
      position: absolute;
      width: 180px;
      height: 180px;
      left: 0px;
      top: 0px;
      opacity: 0;
      border-radius:10px;
      background-color: rgba(0, 0, 0, 0.4);
      &:hover {
        opacity: 1;
        i {
          display: block;
        }
      }
      & i {
        font-size: 36px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        cursor: pointer;
        display: none;
        color: white;
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
  .plusBtnWrap {
    display: inline-block;
    position: relative;
    width: 180px;
    height: 180px;
    line-height: 180px;
    text-align: center;
    margin-left: 10px;
    border: 1px dashed #d9d9d9;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      border: 1px dashed #93c0ff;
    }
    .plusBtn {
      font-size: 28px;
      color: #93c0ff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>