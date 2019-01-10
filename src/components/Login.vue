<template>


  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Please sign in</h2>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <label for="inputEmail" class="sr-only">Email address</label>
      <vs-input :success="success" success-text="The mail is valid" v-model.trim="$v.email.$model" type="email"
                id="inputEmail" class="form-control" placeholder="Email address"
                autofocus></vs-input>
      <vs-alert active="true" color="danger" class="error" v-if="!$v.email.required">Field is required</vs-alert>
      <vs-alert active="true" color="danger" class="error" v-if="!$v.email.minLength">Name must have at least
        {{$v.email.$params.minLength.min}} letters.
      </vs-alert>
      <label for="inputPassword" class="sr-only">Password</label>
      <vs-input :class="status($v.email)" v-model="password" type="password" id="inputPassword"
                class="form-control" placeholder="Password"
      ></vs-input>

      <br>
      <vs-button class="btn btn-lg btn-primary btn-block" vs-type="submit">Sign in</vs-button>

    </form>
    <vs-button class="btn btn-lg btn-primary btn-block" @click="goTo" value="false">Register</vs-button>
  </div>
</template>

<script>
  import AuthUser from '../services/AuthUser'
  import {required, minLength} from 'vuelidate/lib/validators'

  export default {

    name: 'Login',
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
        this.$router.push({name: 'home'})
      },
      loginFail () {
        this.error = 'Login failed!'
      },
      goTo () {
        this.$router.push({name: 'register'})
      }
    }
  }
</script>

<style lang="css" scoped>
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
</style>
