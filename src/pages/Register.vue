<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Users</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('nombres')">
                <label for="nombres">First Name</label>
                <md-input name="nombres" id="nombres" autocomplete="given-name"
                          v-model="form.nombres" :disabled="sending"/>
                <span class="md-error"
                      v-if="!$v.form.nombres.required">The first name is required</span>
                <span class="md-error"
                      v-else-if="!$v.form.nombres.minlength">Invalid first name</span>
              </md-field>
            </div>

          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('password')">
                <label for="password">Password</label>
                <md-input type="password" name="password" id="password" autocomplete="given-name"
                          v-model="form.password" :disabled="sending"/>
                <span class="md-error"
                      v-if="!$v.form.password.required">The first name is required</span>
                <span class="md-error" v-else-if="!$v.form.password.minlength">Invalid first name</span>

              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('idpais')">
                <label for="idpais">Pais</label>
                <md-select name="idpais" id="idpais" v-model="form.idpais" md-dense :disabled="sending">
                  <md-option></md-option>
                  <md-option value="1">Colombia</md-option>
                  <md-option value="2">Puto</md-option>
                </md-select>
                <span class="md-error">The gender is required</span>
              </md-field>
            </div>
          </div>

          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email"
                      :disabled="sending"/>
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending"/>

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Create user</md-button>

        </md-card-actions>

      </md-card>

      <md-snackbar :md-active.sync="userSaved">{{ lastUser }}</md-snackbar>
    </form>
    <router-view></router-view>
  </div>
</template>

<script>
  import {validationMixin} from 'vuelidate'
  import {
    required,
    email,
    minLength
  } from 'vuelidate/lib/validators'
  import Api from '../services/Api'

  export default {
    name: 'Register',
    mixins: [validationMixin],
    data: () => ({
      form: {
        nombres: null,
        password: null,
        idpais: null,
        email: null
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        nombres: {
          required,
          minLength: minLength(3)
        },

        password: {
          required

        },
        email: {
          required,
          email
        },
        idpais: {
          required
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },

      saveUser () {
        Api.post('/auth/register',
          this.form
        ).then(data => {
          window.setTimeout(() => {
            this.lastUser = `The user ${this.form.nombres}  was saved with success!`
            this.userSaved = true
            this.sending = false
          }, 1500)
          this.$router.replace(this.$route.query.redirect || '/')
          console.log('registro ', data)
        }).catch(error => {
          window.setTimeout(() => {
            this.lastUser = 'Usuario registrado'

            this.userSaved = true
            this.sending = false
          }, 1500)
          console.log(error)
        })
        console.log(this.form)
        this.sending = true

        // Instead of this timeout, here you can call your API
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>
