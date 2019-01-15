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
              <md-field :class="getValidationClass('nombre')">
                <label for="nombre">First Name</label>
                <md-input name="nombre" id="nombre" autocomplete="given-name"
                          v-model="form.nombre" :disabled="sending"/>
                <span class="md-error"
                      v-if="!$v.form.nombre.required">The first name is required</span>
                <span class="md-error"
                      v-else-if="!$v.form.nombre.minlength">Invalid first name</span>
              </md-field>
            </div>

          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('apellido')">
                <label for="apellido">Last Name</label>
                <md-input name="apellido" id="apellido" autocomplete="given-name"
                          v-model="form.apellido" :disabled="sending"/>
                <span class="md-error"
                      v-if="!$v.form.apellido.required">The first name is required</span>
                <span class="md-error"
                      v-else-if="!$v.form.apellido.minlength">Invalid first name</span>
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
              <md-field :class="getValidationClass('paisId')">
                <label for="paisId">Pais</label>
                <md-select name="paisId" id="paisId" v-model="form.paisId" md-dense :disabled="sending">
                  <md-option></md-option>
                  <md-option v-for="country in countries" v-bind:value="country.id" :key="countries.id">
                    {{country.nombre}}
                  </md-option>
                </md-select>
                <span class="md-error">The gender is required</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('planId')">
                <label for="planId">Plan</label>
                <md-select name="planId" id="planId" v-model="form.planId" md-dense :disabled="sending">
                  <md-option></md-option>
                  <md-option v-for="pack in packs " v-bind:value="pack.id" :key="pack.id">
                    {{pack.nombre}}
                  </md-option>
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
        nombre: null,
        password: null,
        paisId: null,
        email: null,
        apellido: null,
        planId: null
      },
      countries: [],
      userSaved: false,
      sending: false,
      lastUser: null,
      packs: []
    }),
    validations: {
      form: {
        nombre: {
          required,
          minLength: minLength(3)
        },
        apellido: {
          required
        },
        planId: {
          required
        },
        password: {
          required

        },
        email: {
          required,
          email
        },
        paisId: {
          required
        }
      }
    },
    created: function () {
      this.getCountries()
      this.getPack()
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
        console.log('id pais', this.form.paisId)
        console.log('id pakc', this.form.planId)
        Api.post('/auth/registro',
          this.form
        ).then(data => {
          window.setTimeout(() => {
            this.lastUser = `The user ${this.form.nombre}  was saved with success!`
            this.userSaved = true
            this.sending = false
          }, 1500)
          this.$router.replace(this.$route.query.redirect || '/')
          console.log('registro ', data)
        }).catch(error => {
          window.setTimeout(() => {
            this.lastUser = 'Usuario no registrado'

            this.userSaved = true
            this.sending = false
          }, 1500)
          console.log(error)
        })
        console.log(this.form)
        this.sending = true

        // Instead of this timeout, here you can call your API
      },
      getCountries () {
        Api.get('/general/paises').then((data) => {
          this.countries = data.data
          console.log(this.countries)
        })
      },
      getPack () {
        Api.get('/general/planes').then(data => {
          this.packs = data.data
          console.log(this.pack)
        })
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
