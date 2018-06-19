<template>
    <div class="meetingList">
        <vheader>
            <span slot="title" class="title">例行会议</span>
        </vheader>
        <div class="cardBox">
          <div class="card">
            <router-link tag="div" to="/addMeeting/3" class="content">
              Java大牛 带你从0到上线开发企业级电商项目
            </router-link>
            <div class="bottom">
              <a href="javascript:void(0)">详情</a>
              <span>管理员：admin </span>
            </div>
          </div>

           <div class="card">
              <router-link tag="div" to="/addMeeting/1" class="content">
               Java大牛 带你从0到上线开发企业级电商项目
              </router-link>
            <div class="bottom">
              <a href="javascript:void(0)">详情</a>
              <span>管理员：admin </span>
            </div>
          </div>
          <div class="card">
              <router-link tag="div" to="/addMeeting/2" class="content">
               Java大牛 带你从0到上线开发企业级电商项目
              </router-link>
            <div class="bottom">
              <a href="javascript:void(0)">详情</a>
              <span>管理员：admin </span>
            </div>
          </div>
        </div>
        <div class="paging">
          <el-pagination
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
    </div>
</template>
<script>
import vheader from 'components/vheader'
export default {
  data () {
    return {}
  },
  components: {
    vheader
  }
}
</script>
<style lang='less' coped>
.meetingList{
    .cardBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .card {
      &:hover{
        box-shadow: 0 0 8px 2px #DFD4C9;
      }
      position: relative;
      width: 220px;
      height: 138px;
      background: #fff;
      box-shadow: 2px 2px 2px 0 #e8dbce;
      border-radius: 4px;
      margin: 16px 20px 0 0;
      .content {
        cursor: pointer;
        color: #212121;
        font-size: 14px;
        display: flex;
        align-items: center;
        padding: 0 18px;
        width: 100%;
        height: 108px;
        box-sizing: border-box;
        line-height: 22px;
      }
      .bottom {
        display: flex;
        height: 30px;
        justify-content: space-between;
        align-items: center;
        padding: 0 9px;
        border-top: 1px solid #f5f2ef;
        box-sizing: border-box;
        a {
          color: #129bed;
        }
        span {
          color: #868686;
        }
      }
    }
  }
  .paging{
    position: fixed;
    left: 0;
    width: 100%;
    text-align: center;
    bottom: 56px;
  }
}

</style>
