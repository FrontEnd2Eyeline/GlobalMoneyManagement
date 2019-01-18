<template>
  <el-container class="backHeaderRed">
    <Icoins></Icoins>
    <el-main>
      <div class="center">
        <form novalidate class="md-layout" @submit.prevent="validateUser">
          <el-card class="md-layout-item md-size-50 md-small-size-100 center">
            <div>
              <h2 class="fontTitulosW">{{$t('Register')}}</h2>
            </div>
            <el-row :gutter="10">
              <el-col :md="12" :lg="12">
                <div class="grid-content bg-purple-light wid100 marButtonsTexts">
                  <div for="planId" class="md-layout-item md-small-size-100">
                    <el-field :class="getValidationClass('planId')">
                      <el-select class="wid100"
                                 slot="prepend"
                                 :placeholder="$t('SelectPlan')" name="planId"
                                 id="planId"
                                 v-model="form.planId"
                                 :disabled="sending">
                        <el-option v-for="pack in plans "
                                   :value="pack.id"
                                   :key="pack.nombre"
                                  :label="pack.nombre">
                        </el-option>
                      </el-select>
                    </el-field>
                    <div>
                      <span class="md-error" v-if="!$v.form.planId.required">{{$t('RequiredCampo')}}</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :md="12" :lg="12">
                <div class="grid-content bg-purple-light ">
                  <div for="paisId" class="md-layout-item md-small-size-100 marButtonsTexts">
                    <el-field :class="getValidationClass('paisId')">
                      <el-select class="wid100"
                                 :placeholder="$t('SelectCountry')"
                                 name="paisId"
                                 id="paisId"
                                 v-model="form.paisId"
                                 filterable
                                 :disabled="sending">
                        <el-option v-for="country in countries"
                                   :key="country.nombre"
                                   :value="country.id"
                                   :label="country.nombre">
                        </el-option>
                      </el-select>
                    </el-field>
                    <div>
                     <span class="md-error"
                           v-if="!$v.form.paisId.required">El país es requerido</span>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-card-content>
              <div class="md-layout md-gutter">
                <div for="nombre" class="md-layout-item md-small-size-100 marButtonsTexts">
                  <el-field :class="getValidationClass('nombre')">
                    <el-input placeholder="Nombres" name="nombre" id="nombre" autocomplete="given-name"
                              v-model="form.nombre" :disabled="sending"/>
                    <span class="md-error"
                          v-if="!$v.form.nombre.required">El nombre es requerido</span>
                    <span class="md-error"
                          v-else-if="!$v.form.nombre.minLength">El nombre debe tener mínimo 3 caracteres</span>
                    <span class="md-error"
                          v-else-if="!$v.form.nombre.maxLength">El nombre debe tener máximo 45 caracteres</span>
                  </el-field>
                </div>
              </div>
              <div class="md-layout md-gutter">
                <div for="apellido" class="md-layout-item md-small-size-100 marButtonsTexts">
                  <el-field :class="getValidationClass('apellido')">
                    <el-input placeholder="Apellidos" name="apellido" id="apellido" autocomplete="given-name"
                              v-model="form.apellido" :disabled="sending"/>
                    <span class="md-error"
                          v-if="!$v.form.apellido.required">El apellido es requerido</span>
                    <span class="md-error"
                          v-else-if="!$v.form.apellido.minLength">El apellido debe tener mínimo 4 caracteres</span>
                    <span class="md-error"
                          v-else-if="!$v.form.apellido.maxLength">El apellido debe tener máximo 45 caracteres</span>
                  </el-field>
                </div>
              </div>

              <div class="md-layout md-gutter">
                <div for="email" class="md-layout-item md-small-size-100 marButtonsTexts">
                  <el-field :class="getValidationClass('email')">
                    <el-input type="email" name="email" id="email" autocomplete="email" v-model="form.email"
                              :disabled="sending"/>
                  </el-field>
                  <div>
                    <span class="md-error" v-if="!$v.form.email.required">El correo electrónico es obligatorio</span>
                    <span class="md-error" v-else-if="!$v.form.email.email">Correo electrónico invalido</span>
                    <span class="md-error" v-else-if="!$v.form.email.minLength">Correo electrónico debe tener mínimo 6 caracteres</span>
                    <span class="md-error" v-else-if="!$v.form.email.maxLength">Correo electrónico debe tener máximo 40 caracteres</span>
                  </div>
                </div>
              </div>
              <div class="md-layout md-gutter">
                <div for="password" class="md-layout-item md-small-size-100 ">
                  <field :class="getValidationClass('password')">
                    <el-input placeholder="Contraseña" type="password" name="password" id="password"
                              autocomplete="given-name"
                              v-model="form.password"
                              :disabled="sending"/>
                    <span class="md-error"
                          v-if="!$v.form.password.required">Contraseña es requerida</span>
                    <span class="md-error" v-else-if="!$v.form.password.minLength">La contraseña debe tener mínimo 6 caracteres</span>
                  </field>
                </div>
              </div>
            </el-card-content>
            <!--<el-progress-bar md-mode="indeterminate" v-if="sending"/>-->
            <md-card-actions>
              <el-row :gutter="10">
                <el-col  :md="12" :lg="12">
                  <div @click="doLogin">
                    <md-button class="fontCrearAccount">
                      ¿Ya tienes cuenta?
                    </md-button>
                  </div>
                </el-col>
                <el-col :md="12" :lg="12">
                  <div>
                    <md-button type="submit" class="fontCrearAccount" :disabled="sending">Crear mi cuenta</md-button>
                  </div>
                </el-col>
              </el-row>
              <div>
                <h4 class="white">
                  Haciendo clic en el botón de <b>Crear mi cuenta</b> estás aceptando los <u>términos y condiciones</u>
                </h4>
              </div>

            </md-card-actions>
          </el-card>
          <!--<el-snackbar :md-active.sync="userSaved">{{ lastUser }}</el-snackbar>-->
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

  .el-footer {
    padding: 0px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }

  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  span {
    color: #ffe400;
  }

  .white {
    color: white;
  }

  /*Inputs*/

  .wid100 {
    width: 100%;
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

  .marButtonsTexts {
    margin-bottom: 1.2em;
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

  .el-card {
    border: 0px solid #ebeef5;
    background-color: transparent;
    color: #303133;
    -webkit-transition: .3s;
    transition: .3s;
    -webkit-box-shadow: 0 0px 0px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, .1);
  }

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
    padding: 0%;
  }

  .backHeaderRed {
    background-image: url('../assets/Imgs/backRed.jpg');
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

  .fontCrearAccount {
    font-size: 1.2em !important;
    color: #ffffff;
    line-height: 50px;
    color: white !important;
    text-align: center;
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
      plans: []
    }),
    validations: {
      form: {
        nombre: {
          required,
          minLength: minLength(4),
          maxLength: maxLength(45)
        },
        apellido: {
          required,
          minLength: minLength(4),
          maxLength: maxLength(45)
        },
        planId: {
          required
        },
        password: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(100)

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
      this.getPlan()
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
        console.log(this.countries)
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
      doLogin () {
        this.$router.push({name: 'login'})
      },
      getCountries () {
        Api.get('/general/paises').then((data) => {
          this.countries = data.data
          console.log(this.countries)
        })
      },
      getPlan () {
        Api.get('/general/planes').then(data => {
          this.plans = data.data
          console.log(this.plans)
        }).catch(error => {
          console.log(error)
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
