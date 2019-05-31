<template>
  <el-container>
    <el-header >
      <img src="../assets/images/logo.png" />
      <span>理赔服务共享平台后台管理系统</span></el-header>
    <el-main>
<img class="el-col-lg-18" src="../assets/images/login_bg.png"/>


      <div class="main_box   el-col-lg-4">
        <el-card style="margin-top: 70px">
          <el-header><h2>用户登录</h2></el-header>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
            <el-form-item prop="name">
              <el-input placeholder="工号" v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <el-input placeholder="密码" v-model="ruleForm.pass"></el-input>
            </el-form-item>

            <el-form-item prop="code">
              <el-input  style="width: 55%" placeholder="验证码"   v-model="ruleForm.code"></el-input>

              <el-link   v-on:click="refreshCode()"><s_identify  style="width:70%"  :identifyCode="identifyCode"></s_identify></el-link>
            </el-form-item>


            <el-form-item>
              <el-button-group style="width: 100%">
                <el-button
                  :disabled="IsLoginIn" style="width: 100%;display: inline-block" class="el-button--primary"
                          @click="submitForm('ruleForm')">{{login_btn}}
                </el-button>

                <el-link>单点登录</el-link>
              </el-button-group>

            </el-form-item>
          </el-form>
        </el-card>

      </div>
    </el-main>

    <el-footer style="font-size: 13px;color: grey;margin: 10px">中国人民财产保险股份有限公司 版权所有 京ICP备10011380号-2</el-footer>
  </el-container>
</template>

<script>
  import code from './validCode/validCode';
  import axios from 'axios';

  export default {
    name: "Login",
    components: {
      s_identify: code

    }, mounted() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    data() {
      return {
        timeAccout:0,
        act:false,
        faildTimes:0,
        login_btn:"登录",
        IsLoginIn:false,
        identifyCodes: "1234567890",
        identifyCode: "",
        ruleForm: {
          name: '',
          pass: "",
          code: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入工号名称', trigger: 'blur'},
            {min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ], pass: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          code: [
            {required: true, message: '请输入验证码', trigger: 'blur'}
          ]

        }
      };
    },
    created(){
      this.init()
    },
    mounted(){
      window.sessionStorage.setItem("time","0")
    },
    methods: {


      async submitLogin() {

        const { name, pass } = this.ruleForm;
        const {
          status,
          statusText,
          data: { data }
        } = await api.post("http://localhost:8088/api/login", { name, pass }, 'query', false);
        if(status!==200){
          this.$message.error(statusText)
          return;
        }
        this.$message.success(statusText)

        // this.$router.push('/');
      },
      init(){
        //用session方式保存倒计时剩余时间,弊端:用户可通过更改客户端session值,解决办法将时间上传服务端
        let tmpa=window.sessionStorage.getItem("time")
        if (tmpa!==null && tmpa!=0)
        {

          this.timeAccout=tmpa
          this.$notify.error({title: "提示", message: "您的错误次数已达上限!"+(60-tmpa)+"秒后重试", position: 'top-left'})
          this.IsLoginIn = true
          let time=60-tmpa
          this.login_btn="已禁用("+(time--)+")s"
            //延时器倒计时
          let timer= setInterval(()=>{
            this.login_btn="已禁用("+(time--)+")s"
            window.sessionStorage.setItem("time",this.timeAccout++)
          },1000)

          setTimeout(() => {
            this.IsLoginIn = false
            this.faildTimes = 0
            this.login_btn="登录"

            clearInterval(timer)
            window.sessionStorage.setItem("time","0")
            window.sessionStorage.clear()
          }, 1000*(60-tmpa))

        }



      },

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {

          if (valid &&this.ruleForm.code==this.identifyCode) {

            let params = new URLSearchParams();
            params.append('name', this.ruleForm.name+'');
            params.append('password', this.ruleForm.pass+'');

            this.$ajax({
              method: 'post',
              url: '/api/login',
              data:params
//          data: {id: '3', name: 'abc'}
            }).then((response)=> {
           if(response.data==true){
     window.sessionStorage.setItem("token","dasdae12323232")
             this.$router.push("/home")
           }else {
             this.$message.error("工号密码不存在")
             this.$router.push({ path:'/'  });
           }




            }).catch(function (error) {
              console.log(error);
            })







          } else {
            this.$message.error("Error")
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
            this.faildTimes++;
            if (this.faildTimes>=3) {
              this.$notify.error({title: "提示", message: "您的错误次数已达上限!1分钟后重试", position: 'top-left'})
              this.IsLoginIn = true



              let time=60

              let timer= setInterval(()=>{
                this.login_btn="已禁用("+(time--)+")s"
                window.sessionStorage.setItem("time",this.timeAccout++)
              },1000)

              setTimeout((a) => {
                this.IsLoginIn = false
                this.faildTimes = 0
                this.login_btn="登录"

               clearInterval(timer)
              }, 1000*60)



            }

            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
      , randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },
      refreshCode() {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
      },
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
        }
        console.log(this.identifyCode);
      }

    }
  }
</script>

<style scoped>
  .main_box {

    height: 500px;
  }
  header{
    text-align: left;
    padding-left: 5%;

  }
main{
  background: #2c3e50;
  overflow: hidden;

}
  .bg{

  }


  .el-card__body {
    /*padding: 2px 20px 2px 20px;*/
  }
  .el-form-item {
    margin-bottom: 18px;
  }

</style>

