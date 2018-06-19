<!-- 加会 -->
<template>
  <div class="wrap">
      <div class="content">
         <span class="tips-span">如果您已安装过“唐桥云会议”客户端，请点击“立即启动会议”</span>
         <a href="javascript:void(0)" class="button">立即启动会议</a>
         <i class="tips-i">如有弹出会话框，请选择运行</i>
         <p>如果您第一次使用，<a href="javascript:;" class="download">请下载并运行会议客户端</a></p>
      </div>
  </div>
</template>
<script type='text/ecmascript-6'>
export default {
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {}
}
</script>
<style lang='less' scoped>
.wrap{
    width: 100%;
    height: 100%;;
    background:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .content{
        width: 450px;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .tips-span{
            font-size: 16px;
            color: #373F44;
            text-align: center;
        }
        .button{
            display: inline-block;
            width: 182px;
            height: 42px;
            line-height: 42px;
            font-size: 14px;
            text-align: center;
            color: #ffffff;
            background: #AB1D29;
            border-radius: 8px;
            margin:20px 0 6px 0;
        }
        .tips-i{
            font-size: 13px;
            color: #16364E;
            text-align: center;
            margin-bottom: 60px;
            display: inline-block;
        }
        p{ font-size: 15px;}
        .download{
            color: #129BED;
        }
    }
}
</style>
