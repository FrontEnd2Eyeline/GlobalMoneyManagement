<template>
  <el-container class="backHeader">
    <Icoins></Icoins>
    <el-main>
      <div class="login-wrapper border border-light center">
        <form class="form-signin center" @submit.prevent="login">
          <div>
            <h2 class="form-signin-heading fontTitulosW">{{$t('Login')}}</h2>
          </div>
          <div class="alert alert-danger center" v-if="error">
            {{ error }}
          </div>
          <!--<label for="inputEmail" class="sr-only">Email address</label>-->
          <div class="marBut10px">
            <el-input :success="success" success-text="The mail is valid" v-model.trim="$v.email.$model" type="email"
                      id="inputEmail" class="form-control center textWidht" v-bind:placeholder="$t('Email')"
                      autofocus></el-input>
            <el-alert active="true" color="danger" class="error" v-if="!$v.email.required">Field is required</el-alert>
            <el-alert active="true" color="danger" class="error" v-if="!$v.email.minLength">Name must have at least
              {{$v.email.$params.minLength.min}} letters.
            </el-alert>
          </div>
          <div class="marBut10px">
            <!--<label for="inputPassword" class="sr-only">Password</label>-->
            <el-input :class="status($v.email)" v-model="password" type="password" id="inputPassword"
                      class="form-control center textWidht" v-bind:placeholder="$t('Password')">
            </el-input>
          </div>

          <div class="marBut10px">
            <el-button class="btn btn-lg bacgroundBtnOpacity btn-block" @click="login">{{$t('Login')}}</el-button>
          </div>

        </form>
        <!--<div>-->
        <!--<vs-button class="btn btn-lg bacgroundBtn btn-block" @click="goTo" value="false">{{$t('Register')}}</vs-button>-->
        <!--</div>-->
      </div>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>


</template>

<style lang="scss" scoped>

  .el-footer {
    padding: 0px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }

  /*Alineación*/

  .center {
    text-align: center;
    margin: auto;
    display: block;
  }

  /*Márgenes*/

  .marbut {
    margin-bottom: 8%;
  }

  .marBut10px {
    margin-bottom: 10px;
  }

  pre {
    width: 100%;
    color: rgba(255, 255, 255, .8);
  }

  .error {
    border-color: red;
    background: #FDD;
  }

  .error:focus {
    outline-color: #F99;
  }

  /*Controls*/



  input {
    text-align: center;
    position: relative;
    padding: .4rem;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, .2);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, .15);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, .15);
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    width: 18% !important;
  }

  .el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 0px solid #dcdfe6;
    color: white;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }

  /* BackGround */

  .backHeader {
    background-image: url('../assets/Imgs/Fondo.jpg');
    background-repeat: no-repeat;
    background-attachment: inherit;
    background-position: center center;
    background-size: cover;
    padding: 0%;
  }

  /*Textos*/

  .fontTitulosW {
    font-size: 3.4em;
    color: #FFF;
    text-align: center;
    font-weight: bold;
    padding: 5%;
  }

  .textWidht{
    width: 18%;
    text-align: center !important;
  }


  /*Botones*/

  .bacgroundBtn {
    background: #00c3ff;
  }

  .bacgroundBtnOpacity {
    background: #0089b3;

  }
</style>

<script>
  import AuthUser from '../services/AuthUser'
  import {required, minLength} from 'vuelidate/lib/validators'
  import Footer from '../components/components/Footer'
  import Icoins from '../components/components/Icoins'

  export default {
    components: {Icoins, Footer},
    created () {
      this.$store.commit('SET_LAYOUT', 'login-layout')
    },
    data () {
      return {
        email: '',
        password: '',
        error: false,
        body: {},
        success: false
      }
    },
    validations: {
      email: {
        required,
        minLength: minLength(4)
      }
    },

    methods: {
      status (validation) {
        return {
          error: validation.$error,
          dirty: validation.$dirty
        }
      },
      login () {
        AuthUser.login(this.email, this.password)
          .then(data => {
            this.loginSucess(data)
          }).catch(error => {
            this.loginFail()
            console.log('error en el login.vue', error)
          })
      },
      loginSucess (req) {
        console.log(req)
        if (!req.data.serializeToken) {
          this.loginFail()
          return
        }
        this.error = false
        this.success = true
        this.$router.push({name: 'Cpanel'})
        this.$nextTick(function () {
        })
        console.log(this.$router.currentRoute)
      },
      loginFail () {
        this.error = 'Login failed!'
      }
    }
  }
</script>
