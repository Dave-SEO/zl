<!-- 个人中心 -->
<template>
  <div class="user-wrap">
      <vheader>
          <span slot="title" class="title">个人中心</span>
      </vheader>
      <ul class="user">
          <li class="people">
              <i>用户名：</i>zhou
          </li>
          <li class="showUser">
              <i>显示名：</i>admin
          </li>
          <li class="ModifyPwd">
              <i>密码：</i>
              <a href="javascript:void(0)" @click="ModifyPwd = false" v-show="ModifyPwd">修改密码</a>
              <div class="form" v-show="!ModifyPwd">
                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px"  class="demo-ruleForm" size='small'>
                   <el-form-item  prop="initPwd" >
                        <el-input placeholder="输入原密码" type="password" v-model.number="ruleForm2.initPwd"></el-input>
                    </el-form-item>
                    <el-form-item prop="pass">
                        <el-input placeholder="输入密码" type="password" v-model="ruleForm2.pass" onpaste="return false"
                            oncontextmenu="return false" oncopy="return false"  oncut="return false" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item  prop="checkPass">
                        <el-input placeholder="再次输入" type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">确定</el-button>
                        <el-button @click="cancel('ruleForm2')">取消</el-button>
                    </el-form-item>
                </el-form>
              </div>

          </li>
      </ul>
  </div>
</template>
<script type='text/ecmascript-6'>
import vheader from 'components/vheader'
export default {
  data () {
    var initPwd = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (/\s/.test(value)) {
        // var reg=/^\S+$/;
        callback(new Error('不允许输入空格'))
      } else if (!/^.{1,20}$/.test(value)) {
        callback(new Error('请输入1-20位的密码'))
      } else {
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次密码输入不一致!'))
      } else {
        callback()
      }
    }
    return {
      ModifyPwd: true,
      ruleForm2: {
        initPwd: '',
        pass: '',
        checkPass: ''
      },
      rules2: {
        pass: [
          {required: true,
            validator: validatePass,
            trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        initPwd: [
          { validator: initPwd, trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    vheader
  },
  computed: {

  },
  mounted () {},
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          this.$message({
            message: '密码修改成功，请重新登录',
            type: 'success',
            center: true
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    cancel (formName) {
      this.ModifyPwd = true
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang='less' scoped>
.user-wrap /deep/.el-form-item__content{
    margin-left:77px !important;
}
.user-wrap /deep/ .el-button--primary {
    color: #fff;
    background-color: #AB1D29;
    border-color: #AB1D29;
    box-sizing: border-box;
}
.user-wrap /deep/.el-button{
    width: 64px;
}
ul,li{
    list-style: none;
}
.user-wrap{
    .user{
        li{
            font-size: 14px;
            height: 54px;
            line-height: 54px;
            border-bottom: 1px solid #DDDDDD;
            color: #7F7F7F;
            i{
                display: inline-block;
                min-width: 74px;
                color: #212121;
            }
            &:last-child{
                 border:none;
                 a{
                     color: #129BED;
                 }
            }
        }

    }
    .ModifyPwd{
        .form{
            width: 237px;
            margin-top: -36px;
            font-size: 0;
        }
    }
}
</style>
