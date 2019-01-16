<template>
  <el-container class="backHeader">
<Icoins></Icoins>
    <el-main>
      <div class="center">
        <form novalidate class="md-layout" @submit.prevent="validateUser">
          <el-card class="md-layout-item md-size-50 md-small-size-100 center">
            <div>
              <h2 class="fontTitulosW">{{$t('Register')}}</h2>
            </div>
            <el-card-content>
              <div class="md-layout-item md-small-size-100">
                <el-field :class="getValidationClass('planId')">
                  <label for="planId">Plan</label>
                  <el-select slot="prepend" placeholder="Seleccione el plan" name="planId" id="planId" v-model="form.planId" md-dense :disabled="sending">
                    <el-option v-for="pack in packs " v-bind:value="pack.nombre" :key="pack.id">
                      {{pack.nombre}}
                    </el-option>
                  </el-select>
                  <span class="md-error"
                        v-if="!$v.form.planId.required">Campo requerido</span>
                </el-field>
              </div>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <el-field :class="getValidationClass('nombre')">
                    <label for="nombre">First Name</label>
                    <el-input name="nombre" id="nombre" autocomplete="given-name"
                              v-model="form.nombre" :disabled="sending"/>
                    <span class="md-error"
                          v-if="!$v.form.nombre.required">The first name is required</span>
                    <span class="md-error"
                          v-else-if="!$v.form.nombre.minlength">Invalid first name</span>
                  </el-field>
                </div>
              </div>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <el-field :class="getValidationClass('apellido')">
                    <label for="apellido">Last Name</label>
                    <el-input name="apellido" id="apellido" autocomplete="given-name"
                              v-model="form.apellido" :disabled="sending"/>
                    <span class="md-error"
                          v-if="!$v.form.apellido.required">The first name is required</span>
                    <span class="md-error"
                          v-else-if="!$v.form.apellido.minlength">Invalid first name</span>
                  </el-field>
                </div>

              </div>

              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <el-field :class="getValidationClass('password')">
                    <label for="password">Password</label>
                    <el-input type="password" name="password" id="password" autocomplete="given-name"
                              v-model="form.password" :disabled="sending"/>
                    <span class="md-error"
                          v-if="!$v.form.password.required">The first name is required</span>
                    <span class="md-error" v-else-if="!$v.form.password.minlength">Invalid first name</span>

                  </el-field>
                </div>

                <div class="md-layout-item md-small-size-100">
                  <el-field :class="getValidationClass('paisId')">
                    <label for="paisId">Pais</label>
                    <el-select name="paisId" id="paisId" v-model="form.paisId" md-dense :disabled="sending">
                      <el-option></el-option>
                      <el-option v-for="country in countries" v-bind:value="country.id" :key="countries.id">
                        {{country.nombre}}
                      </el-option>
                    </el-select>
                    <span class="md-error">The gender is required</span>
                  </el-field>
                </div>

              </div>

              <el-field :class="getValidationClass('email')">
                <label for="email">Email</label>
                <el-input type="email" name="email" id="email" autocomplete="email" v-model="form.email"
                          :disabled="sending"/>
                <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
              </el-field>
            </el-card-content>

            <el-progress-bar md-mode="indeterminate" v-if="sending"/>

            <el-card-actions>
              <md-button type="submit" class="md-primary" :disabled="sending">Create user</md-button>

            </el-card-actions>

          </el-card>

          <el-snackbar :md-active.sync="userSaved">{{ lastUser }}</el-snackbar>
        </form>
      </div>
    </el-main>
    <el-footer>
    <Footer></Footer>
    </el-footer>
    <!--<router-view></router-view>-->
  </el-container>
</template>


<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
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

  vs-input--input {
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
    width: 100%;
  }

  /* BackGround */

  .backHeader {
    background-image: url('../assets/Imgs/Fondo.jpg');
    background-repeat: no-repeat;
    background-attachment: inherit;
    background-position: center center;
    background-size: cover;
    padding: 10%;
  }

  /*Textos*/

  .fontTitulosW {
    font-size: 3.4em;
    color: #FFF;
    text-align: center;
    font-weight: bold;
    padding: 5%;
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
  import {validationMixin} from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'
  import Api from '../services/Api'
  import Icoins from '../components/components/Icoins'
  import Footer from '../components/components/Footer'

export default {
    name: 'Register',
    components: {Footer, Icoins},
    mixins: [validationMixin],
    data: () => ({
      form: {
        nombre: null,
        password: null,
        paisId: null,
        email: null,
        apellido: null,
        planId: null,
        patrocinadorId: null
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
          email,
          minLength: minLength(6),
          maxLength: maxLength(40)
        },
        paisId: {
          required
        },
        patrocinadorId: {}
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
        console.log('datos', this.form)
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
