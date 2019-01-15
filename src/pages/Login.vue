<template>
  <el-container class="backHeader">
    <div class="login-wrapper border border-light center">
      <form class="form-signin center" @submit.prevent="login">
        <div class="marbut">
          <h2 class="form-signin-heading fontTitulosW">{{$t('Login')}}</h2>
        </div>
        <div class="alert alert-danger center" v-if="error">
          {{ error }}
        </div>
        <!--<label for="inputEmail" class="sr-only">Email address</label>-->
        <div class="marBut10px">
          <vs-input :success="success" success-text="The mail is valid" v-model.trim="$v.email.$model" type="email"
                    id="inputEmail" class="form-control center" v-bind:placeholder="$t('Email')"
                    autofocus></vs-input>
          <vs-alert active="true" color="danger" class="error" v-if="!$v.email.required">Field is required</vs-alert>
          <vs-alert active="true" color="danger" class="error" v-if="!$v.email.minLength">Name must have at least
            {{$v.email.$params.minLength.min}} letters.
          </vs-alert>
        </div>
        <div class="marBut10px">
          <!--<label for="inputPassword" class="sr-only">Password</label>-->
          <vs-input :class="status($v.email)" v-model="password" type="password" id="inputPassword"
                    class="form-control center" v-bind:placeholder="$t('Password')">
          </vs-input>
        </div>

        <div class="marBut10px">
          <vs-button class="btn btn-lg bacgroundBtnOpacity btn-block" vs-type="submit">{{$t('Login')}}</vs-button>
        </div>

      </form>
      <!--<div>-->
        <!--<vs-button class="btn btn-lg bacgroundBtn btn-block" @click="goTo" value="false">{{$t('Register')}}</vs-button>-->
      <!--</div>-->
    </div>
  </el-container>
</template>

<style lang="css" scoped>

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

  vs-input--input {
    text-align: center;
    position: relative;
    padding: .4rem;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,.2);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 0 0 0 0 rgba(0,0,0,.15);
    box-shadow: 0 0 0 0 rgba(0,0,0,.15);
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    width: 100%;
  }

  /* BackGround */

  .backHeader {
    background-image: url('../assets/Imgs/background.jpg');
    background-repeat: no-repeat;
    background-attachment: inherit;
    background-position: center center;
    background-size: cover;
    padding: 10%;
  }

  /*Textos*/

  .fontTitulosW {
    font-size: 2.25rem;
    color: #FFF;
    text-align: center;
    font-weight: bold;
    padding: 5%;
  }

  .fontTitValorBitcoin {
    font-size: 1.2em;
    color: #FFF;
    text-align: center;
    font-family: Avenir;
    font-weight: bold;
  }

  .fontValorBitcoin {
    font-size: 0.7em;
    color: #FFF;
    text-align: right;
    font-family: Avenir;
    padding-bottom: 2%;
    margin-top: -8%;
  }

  /*Botones*/

  .bacgroundBtn{
    background: #00c3ff;
  }

  .bacgroundBtnOpacity{
    background: #0089b3;

  }
</style>

<script>
  import AuthUser from '../services/AuthUser'
  import {required, minLength} from 'vuelidate/lib/validators'
  import App from '@/App'

  export default {
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
            console.log('inicio sesion', data)
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
        App.loginControl = true

        this.$router.push({name: 'home'})
        this.$nextTick(function () {
          console.log('a ver que hacer')
        })
        console.log(this.$router.currentRoute)
      },
      loginFail () {
        this.error = 'Login failed!'
      },
      goTo () {
        this.$router.push(this.$route.query.replace || ({name: 'register'}))
        console.log(this.$router.currentRoute)
      }
    }
  }
</script>
