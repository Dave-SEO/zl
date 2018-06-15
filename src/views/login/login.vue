<!-- 登录 -->
<template>
  <el-row class="login bg">
      <el-col :span="24" class="login-box">
        <div>
           <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  class="login-ruleForm" >
             <div class="logo">
               <img src="../../assets/images/logo.png" alt="">
             </div>
             <div class="inputs-wrap">
                <i class="icon icon-user"></i>
                <el-form-item label="" prop="user" class="inpus">
                  <el-input type="input" v-model="ruleForm2.user" placeholder="用户名" auto-complete="off"></el-input>
                </el-form-item>
             </div>
             <div class="inputs-wrap">
               <i class="icon icon-pwd"></i>
               <el-form-item label="" prop="pass"  class="inpus">
                  <el-input type="password" v-model="ruleForm2.pass" placeholder="密码"  onpaste="return false"
                    oncontextmenu="return false" oncopy="return false"  oncut="return false"  auto-complete="off"></el-input>
               </el-form-item>
             </div>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')" >登录</el-button>
            </el-form-item>
            <div class="input-wrap checkbox">
              <el-checkbox v-model="autoLogin">自动登录</el-checkbox>
              <a href="javascript:void(0);" class="download">下载客户端</a>
            </div>
        </el-form>
        </div>
      </el-col>
  </el-row>
</template>
<script type='text/ecmascript-6'>
export default {
  data () {
    var validatePwd = (rule, value, callback) => {
      if (/\s/.test(value)) {
        // var reg=/^\S+$/;
        callback(new Error('不允许输入空格'))
      } else if (!/^.{1,20}$/.test(value)) {
        callback(new Error('请输入1-20位的密码'))
      } else {
        callback()
      }
    }
    return {
      autoLogin: false,
      ruleForm2: {
        user: '',
        pass: ''
      },
      rules2: {
        user: [
          {required: true,
            pattern: /^[0-9A-Za-z]{5,20}$/g,
            message: '请输入字母或数字，长度为5-20位',
            trigger: 'blur'}
        ],
        pass: [
          {required: true, validator: validatePwd}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
          this.$router.push('/home')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  components: {},
  computed: {},
  mounted () {}
}
</script>
<style lang='less' scoped>
.login /deep/.el-input__inner {
  padding-left: 30px;
  padding-right: 0;
  color: #8B9AA2;
  background: #F7FAFE;
}
.login /deep/ .el-button{
    width: 232px;
  }
.login /deep/ .el-checkbox__label{
  font-size: 12px;
}
.login /deep/ .el-checkbox{
  color: #8B9AA2;
}
.login {
  height: 100%;
  &.bg {
    background-image: url(../../assets/images/login_bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .login-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .logo{
      margin-bottom: 30px;
    }
    .login-ruleForm {
      width: 352px;
      height: 340px;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .checkbox{
        width: 232px;
        display: flex;
        justify-content:space-between;
        align-items: center;
        .download{
          font-size: 14px;
          color: #129BED;
          letter-spacing: 0;
        }
       }
      .inputs-wrap{
         position: relative;
        .inpus {
          width: 232px;
          height: 38px;
          line-height: 38px;
          display: inline-block
        }
         i {
          position: absolute;
          display: block;
          width: 14px;
          height: 14px;
          top: 14px;
          bottom: 0;
          left: 10px;
          z-index: 1;
          &.icon-user{
            background: url(../../assets/images/icon-user.png) no-repeat;
            background-size: 100% 100%;
          }
          &.icon-pwd{
            background: url(../../assets/images/icon-pwd.png) no-repeat;
            background-size: 100% 100%;
          }
        }
      }
    }
  }
}
</style>
