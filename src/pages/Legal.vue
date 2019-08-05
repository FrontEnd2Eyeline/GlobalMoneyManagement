<template>
  <el-container class="backHeader">
    <Menu></Menu>
    <br>
    <div class="center martitle">
      <h2 class="fontTitulosW">
        Legales
      </h2>
    </div>
    <Icoins class="visibilidad titulo"></Icoins>
    <el-main>
      <el-row>
        <el-col :spam="24">
          &nbsp;
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="4" :sm="4" :md="3" :lg="2">
          &nbsp;
        </el-col>
        <el-col :xs="17" :sm="17" :md="18" :lg="20">
          <div>
            <h2 class="fontTitLegal">
              Al crear una cuenta en Global Money Management, puedes invertir bajo los siguientes términos y
              condiciones:
            </h2>
            <br><br>
            <h2 class="fontTitLegal2">
              Acuerdo entre el Usuario y el Proveedor de Servicios
            </h2>
            <p class="fontLegal2">
              El presente texto contiene todas las condiciones esenciales del Acuerdo entre Global Money
              Management Ltd. o por sus siglas en ingles GMM y el Usuario.
            </p>
            <p class="fontLegal2">
              Este texto representa entonces una oferta pública, entiéndase que dicha oferta ha sido aceptada
              si El Usuario sigue las instrucciones que se indican a continuación:
            </p>
            <br>
            <ul class="fontLegal2" style="margin-left: 7%" >
              <li>
                Familiarizarse con las condiciones del presente Acuerdo y todos sus complementos.
              </li>
              <li>
                Proporcionar información real, incluyendo la requerida en la autenticación de inicio de
                sesión, correo electrónico y contraseña; seguir las políticas básicas de KYC (Conoce a tu
                Cliente, por sus siglas en inglés); y brindar información de pago verídica.
              </li>
              <li>
                Activar a través de un clic la casilla de “Acepto las condiciones del Acuerdo” contenida en el
                formulario de registro.
              </li>
              <li>
                Dar clic en el botón Continuar luego de completar el formulario de registro.
              </li>
              <li>
                Después de que El Usuario haga clic en el botón Continuar y aparezca el mensaje informando
                sobre el registro exitoso, el proceso de registro se considerará terminado y las condiciones
                del presente acuerdo serán de carácter obligatorio para la persona registrada.
              </li>
            </ul>
            <br>
            <p class="fontLegal2">
              ¡Atención! Si no estás de acuerdo con las condiciones del presente Acuerdo,
              no te registres en el sitio web https://gmmclub.com y no utilices sus servicios.
            </p>
            <br>
            <p class="fontLegal2 font-weight-bold">
              Nota:
            </p>
            <p class="fontLegal2">
              GMM, Global Money Management, surge debido a la necesidad de ofrecer en los mercados
              de riesgo emergentes un rostro que proporcione confianza y un servicio transparente para
              poder realizar una gestión de riesgo correcta, brindando un marco seguro para consultar o
              adquirir un servicio tercerizado de rentas. Como Prestador de Servicios, GMM no se compromete a
              comunicarse en otro idioma oficial que no sea el castellano.
            </p>
            <p class="fontLegal2">
              Puede que te contactemos o nos comuniquemos contigo en otro idioma con el fin de brindar un mejor servicio;
              no obstante, el idioma oficial para todas las comunicaciones a través de cualquier medio formal o
              informal es el castellano.
            </p>
            <br>
            <h2 class="fontTitLegal2">
              Acuerdo con el usuario:
            </h2>
            <p class="fontLegal2">
              El Proveedor de Servicios, GMM, y el Usuario o Cliente que utiliza el sitio web https://gmmclub.com
              han concluido el presente Acuerdo con las siguientes condiciones.
            </p>
            <br><br>
            <el-collapse v-model="activeNames" accordion class="el-collapse-item_header">
              <el-collapse-item title="1. TÉRMINOS Y DEFINICIONES" name="1" style="line-height: 1.5em">
                <div>
                  <p class="fontLegal">
                    A continuación se presentan los términos pertenecientes al Acuerdo, los cuales tienen el significado que se indica a continuación, a menos que se estipule lo contrario:
                  </p>
                  <p class="fontLegal font-weight-bold">
                    Datos de usuario:
                  </p>
                  <p class="fontLegal">
                    Datos de usuario necesarios para acceder y utilizar el sistema: nombre de usuario, contraseña, correo electrónico y otros datos indicados durante el proceso de registro, así como después de él.
                  </p>
                  <p class="fontLegal font-weight-bold">
                    Herraminetas operativas:
                  </p>
                  <p class="fontLegal">
                    Cripto-monedas y paquetes ofertados en la plataforma web.
                  </p>
                  <p class="fontLegal font-weight-bold">
                    Cripto-moneda:
                  </p>
                  <p class="fontLegal">
                    Moneda digital que no tiene emisor central y que se distribuye directamente entre los propietarios de la misma.
                  </p>
                  <p class="fontLegal font-weight-bold">
                    Tipo de cambio:
                    </b>
                  <p class="fontLegal">
                    Relación entre el precio de Oferta de los servicios de GMM y la aceptación de la oferta por aporte del usuario o cliente.
                  </p>
                  <p class="fontLegal font-weight-bold">
                    Gabinete personal:
                  </p>
                  <p class="fontLegal">
                    Conjunto de páginas protegidas creadas como resultado del registro del Usuario en el Sistema, con el que el Usuario puede realizar
                    órdenes para la ejecución adicional de Ofertas, así como instruir las comisiones de Proveedor de Servicio estipuladas por el presente Acuerdo.
                  </p>
                  <p class="fontLegal">
                    El Gabinete Personal refleja información sobre pedidos colocados y cancelados, ofertas cerradas, fondos disponibles y / o Cripto-monedas y otra información estipulada por las funciones del Sitio.
                  </p>
                  <p class="fontLegal font-weight-bold">
                    Política de privacidad:
                  </p>
                  <p class="fontLegal">
                    GMM recolecta, salvaguarda, todos los datos personales y operativos del cliente y/o usuario que considere pertinentes para la seguridad
                    de las partes que celebran el acuerdo, también se compromete a tratar su información personal de forma legal, diligente y cuidadosa.
                  </p>
                  <p class="fontLegal font-weight-bold">
                    Política de lucha contra el blanqueo de capitales:
                  </p>
                  <p class="fontLegal">
                    La empresa cumple con el Programa de prevención del blanqueo de dinero derivado de la actividad delictiva y la financiación del terrorismo,
                    que constituye una parte esencial del acuerdo y sin perjuicio de previo aviso la empresa se reserva el derecho a terminar este acuerdo,
                    siendo propiedad de la empresa, toda información intercambiada o proporcionada entre el Usuario y La empresa y el congelamiento tanto de activos
                    como de fondos hasta esclarecer con las autoridades que gobiernan y regulan a la empresa la disputa con el usuario o cliente.
                  </p>
                  <p class="fontLegal font-weight-bold">
                    Infracción de propiedad intelectual:
                  </p>
                  <p class="fontLegal">
                    Conjunto de informaciones, textos, elementos gráficos y de diseño, imágenes, foto, vídeo y otros frutos de la actividad intelectual,
                    así como conjunto de programas informáticos contenidos en el sistema operativo y materiales promocionales externos al sitio https://geosite.gmmclub.com
                    son exclusiva propiedad de la empresa.
                  </p>
                  <p class="fontLegal font-weight-bold">
                    Sistema:
                  </p>
                  <p class="fontLegal">
                    Conjunto de software y medios técnicos utilizados por el Proveedor de Servicios en modo automático para procesar las operaciones
                    realizadas por el Usuario en su Gabinete Personal.
                  </p>
                  <p class="fontLegal font-weight-bold">
                    Acuerdo:
                  </p>
                  <p class="fontLegal">
                    El presente Contrato de Usuario.
                  </p>
                  <p class="fontLegal font-weight-bold">
                    Partes:
                  </p>
                  <p class="fontLegal">
                    El Proveedor de Servicios (GMM) y el Usuario.
                  </p>
                  <p class="fontLegal font-weight-bold">
                    Cuenta:
                  </p>
                  <p class="fontLegal">
                    Parte funcional del Sistema que controla las Herramientas del Usuario y las operaciones realizadas con ellos.
                  </p>
                  <p class="fontLegal font-weight-bold">
                    Tarifas y/o costes operativos:
                  </p>
                  <p class="fontLegal">
                    Información sobre las tarifas del proveedor de servicios y los precios de los servicios adicionales prestados por el proveedor de servicios constantemente disponibles en el sitio web de la empresa.
                  </p>
                  <p class="fontLegal font-weight-bold">
                    Balance:
                  </p>
                  <p class="fontLegal">
                    Este se refiere a el saldo en criptomonedas que usted tiene dentro de la plataforma.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="2. OBJETO DEL ACUERDO" name="2">
                <div>
                  <p class="fontLegal">
                    El Proveedor de Servicios otorga al Usuario acceso al Sitio y la posibilidad de utilizar el Sistema, así como presta otros servicios siguiendo el orden
                    y en las condiciones estipuladas por el Acuerdo.
                  </p>
                  <p class="fontLegal">
                    El Usuario se compromete a utilizar el Sitio y el Sistema de acuerdo con las condiciones del Acuerdo, así como a pagar los servicios del
                    proveedor de Servicios en los casos contemplados por los representantes de la empresa y otros acuerdos celebrados entre las partes.
                    Las partes esenciales del presente Acuerdo son Política de Privacidad, Política Anti-Lavado de Dinero, Tarifas y la Oferta.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="3. PROCESO DE REGISTRO" name="3">
                <div>
                  <p class="fontLegal">
                    El Proveedor de Servicios otorga al Usuario acceso a la información sobre el Sistema y las opciones de los paquetes ofrecidos con sus debidos requisitos.
                  </p>
                  <p class="fontLegal">
                    Para acceder al Sistema, el Usuario debe completar el proceso de registro.
                  </p>
                  <p class="fontLegal">
                    Es El Usuario quien establece la contraseña durante el proceso de registro. El Usuario puede cambiar su contraseña en cualquier
                    momento después de completar el proceso de registro. El Usuario se compromete a salvaguardar la contraseña y los datos de la cuenta de
                    usuario de terceras personas y es el que determina la mejor manera de guardar estos datos y tomar medidas para evitar que se desacredite.
                  </p>
                  <p class="fontLegal">
                    En caso de pérdida o desacreditación de la contraseña y/o de los Datos de la Cuenta de Usuario, así como en los casos en que terceras personas
                    obtengan acceso ilegal al Gabinete Personal del Usuario, el Usuario deberá informar al Proveedor de Servicio contactando al equipo de soporte técnico de GMM.
                  </p>
                  <p class="fontLegal">
                    Hasta que el Proveedor de Servicios reciba el mensaje correspondiente, todas las acciones realizadas desde el Gabinete Personal del Usuario
                    serán consideradas como realizadas por el Usuario adecuado.
                  </p>
                  <p class="fontLegal">
                    El mismo Usuario no puede utilizar dos o más Gabinetes Personales y tales acciones serán consideradas como la violación del Acuerdo.
                    Cuando el Usuario obtiene acceso al Chat, se prohíbe:
                  </p>
                  <ol class="fontLegal" style="margin-left: 7%">
                    <li>
                      Insultar y amenazar a otros usuarios, así como a nuestro personal, es una violación directa de esta cláusula, y puede resultar en una prohibición permanente del usuario.
                    </li>
                    <li>
                      Utilizar cualquier forma de lenguaje obsceno.
                    </li>
                    <li>
                      Hacer declaraciones que lleven a disensiones internacionales, contengan propaganda de violencia u ofendan sentimientos religiosos de otros Usuarios.
                    </li>
                    <li>
                      Enviar cualquier tipo de enlaces externos.
                    </li>
                    <li>
                      Mensajes de texto en mayúsculas.
                    </li>
                    <li>
                      Repetir repetidamente la misma información o repetir constantemente la misma frase
                    </li>
                    <li>
                      Apelar a comprar o vender cualquier producto de la empresa o la asesoría a representantes u otros usuarios.
                    </li>
                    <li>
                      Anunciar productos o servicios de otras empresas.
                    </li>
                    <li>
                      Inundaciones, spam y discutir temas que no conciernen a la criptografía o al intercambio.
                    </li>
                    <li>
                      Proporcionar información falsa o engañosa sobre la operativa.
                    </li>
                    <li>
                      El uso de la consola dentro del sistema va en contra de los términos y condiciones que aceptaste. El uso indebido de esta repercutirá en
                      procesos legales y la suspensión completa de tu cuenta.
                    </li>
                  </ol>
                </div>
              </el-collapse-item><!--ACCESO AL SISTEMA, PROCESO DE REGISTRO Y USO DEL CHAT-->
              <el-collapse-item title="4. CUENTA DE GMM" name="4">
                <div>
                  <p class="fontLegal">
                    Después del registro en el Sistema, el Usuario obtiene acceso a su Cuenta en el Gabinete Personal.
                    El Usuario puede acceder a los distintos paquetes ofertados utilizando su Cuenta y el Gabinete Personal.
                  </p>
                  <p class="fontLegal">
                    El Proveedor de Servicios indica en el Gabinete Personal la información necesaria para la reposición de la cuenta
                    y para el retiro fondos. Para redimir utilidades en crypto-monedas, se establecerá un pedido previo a la mesa operativa.
                    Este pedido puede tardar hasta 72 horas en ser aprobado sin reserva de cotización.
                  </p>
                  <p class="fontLegal">
                    Para reponer su Cuenta, el usuario tiene que transferir fondos de la cuenta de operaciones, el monto del depósito vuelve al origen del depósito y utilidades vuelven a
                    la dirección de billetera virtual registrada en el Gabinete personal, la cual debe estar a nombre del cliente.
                  </p>
                  <p class="fontLegal">
                    Es el Usuario quien paga las comisiones y por los servicios relacionados con la transferencia, así como asume los riesgos de indicar los detalles de dirección
                    de billetera electrónica incorrectos o correctos.
                  </p>
                  <p class="fontLegal">
                    El proveedor de servicios se compromete a recibir los elementos de Crypto-monedas de los usuarios, mantenerlos, mantener un registro de ellos, realizar transacciones y
                    proporcionar a los usuarios toda la información sobre sus paquetes adquiridos.
                  </p>
                  <p class="fontLegal">
                    El Proveedor de Servicios mantiene un registro de los fondos transferidos a la cuenta y no mantiene, utiliza o toma provecho del dinero Fiat de los Usuarios.
                  </p>
                  <p class="fontLegal">
                    Para transferir Crypto-monedas entre usuarios o clientes, deberá elevar una solicitud a nuestra plataforma por vía de nuestro chat,
                    nos reservamos el derecho a decidir bajo qué condición y como se procede con estas transferencias en el momento que queramos.
                  </p>
                  <p class="fontLegal">
                    El Proveedor de Servicios no es responsable de las acciones de estos intercambios, diferencias bruscas de precio, cotización y volatilidad de mercado subyacente.
                  </p>
                  <p class="fontLegal">
                    Todas las operaciones de la Cuenta se realizan a petición del Usuario.
                  </p>
                  <p class="fontLegal">
                    El Proveedor de Servicios no acepta órdenes sobre la realización de ninguna operación con la Cuenta de Usuario de terceros, salvo que se estipule lo
                    contrario en el acuerdo u otros acuerdos entre las Partes. El Proveedor de Servicios no puede bloquear operaciones en la Cuenta sin el pedido emitido
                    por el Usuario, así como puede anular Herramientas sólo en los casos estipulados por el Acuerdo.
                  </p>
                  <p class="fontLegal">
                    Los intereses no se aplican al importe de reposo de operaciones en la Cuenta de usuario y el Proveedor de servicios no está comprometido a
                    pagar los intereses mencionados anteriormente.
                  </p>
                  <p class="fontLegal">
                    Para retirar utilidades de la Cuenta, el usuario debe llenar el formulario correspondiente en su Gabinete Personal. El Usuario recibirá un mensaje a
                    la dirección de correo electrónico indicada durante el proceso de registro pidiendo confirmar o negar la operación de retirada.
                  </p>
                  <p class="fontLegal">
                    En caso de que el Usuario niegue o no confirme el retiro, las Herramientas permanecerán en la Cuenta.
                  </p>
                  <p class="fontLegal">
                    El sistema establece algunas restricciones para las retiradas de fondos:
                  </p>
                  <p class="fontLegal">
                    El Usuario no puede retirar fondos durante 3 (tres) días después de cambiar los Datos de Cuenta de Usuario (al cambiar o restaurar contraseña, y también al cambiar el método de autorización).
                  </p>
                  <p class="fontLegal">
                    Cualquier acción fraudulenta conlleva a la inmediata congelación de activos y la disputa se resolverá como se detalla en este acuerdo.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="5. PREVENCIÓN DEL USO ILEGAL" name="5">
                <div>
                  <p class="fontLegal">
                    Se prohíbe al Usuario la realización de operaciones omitiendo el procedimiento formal de adquisición de paquetes mediante el uso de mensajes
                    personales y otras posibilidades del Sitio y / o del Sistema:
                  </p>
                  <p class="fontLegal">
                    Se prohíbe al Usuario utilizar el Sitio y / o el Sistema de cualquier otra forma que no sea la estipulada en el Acuerdo; en particular,
                    el Usuario no está autorizado a anunciar productos en el Sitio en caso de que las Partes no hayan suscrito un acuerdo específico adicional.
                  </p>
                  <p class="fontLegal">
                    Se prohíbe al Usuario utilizar el Sitio y / o el Sistema con fines ilegales, como el lavado de dinero derivado de actividades delictivas,
                    el financiamiento del terrorismo y la participación en actividades extremistas.
                  </p>
                  <p class="fontLegal">
                    El Usuario está obligado a pasar por el proceso de identificación establecido por el Sistema o por terceros
                    (agregado-res, crédito u otros órganos) durante el proceso de negociación, así como cumplir los requisitos estipulados por la legislación que regula a la empresa.
                  </p>
                </div>
              </el-collapse-item><!--PREVENCIÓN DEL USO ILEGAL DE SITIOS Y SISTEMAS-->
              <el-collapse-item title="6. ADVERTENCIA DE RIESGO" name="6">
                <div>
                  <p class="fontLegal">
                    El Usuario garantiza que entiende los principios generales del trabajo con Crypto-monedas, es consciente de las características del mercado de
                    Crypto-monedas y los factores que afectan su valor.
                  </p>
                  <p class="fontLegal">
                    El Usuario garantiza que tiene la posibilidad de realizar transacciones con Crypto-monedas, que es totalmente capaz bajo la
                    ley o jurisdicción donde reside, siendo responsabilidad del mismo las acciones, inversiones que tome operando dentro de la empresa.
                  </p>
                  <p class="fontLegal">
                    El Usuario entiende que el proveedor de servicios refleja en el Sitio la tasa de Cambio sobre la base de la cual se realizan las
                    ofertas y que es determinada por la empresa y los proveedores de liquidez.
                  </p>
                  <p class="fontLegal">
                    El proveedor de servicios no influye de ninguna manera en el tipo de cambio establecido por el mercado,
                    no da recomendaciones sobre la determinación del tipo de cambio y no prevé las tasas.
                  </p>
                  <p class="fontLegal">
                    Es el Usuario quien asume todos los riesgos económicos relacionados con la elección de este o aquel tipo de cambio.
                  </p>
                  <p class="fontLegal">
                    El Proveedor de Servicios no garantiza que el contrato se cerrará definitivamente y que las condiciones de este contrato serán de beneficio del Usuario.
                  </p>
                  <p class="fontLegal">
                    El usuario entiende que el proveedor de servicio no tiene relación alguna con la conducción de la transacción y / o las transacciones
                    relacionadas con crypto-monedas Correspondientemente, el Proveedor de Servicios no asume la responsabilidad de garantizar términos y / o posibilidades
                    de llevar a cabo esta o aquella operación y / o transacción relacionada con crypto-monedas, que son necesarias para la realización de Deal.
                  </p>
                  <p class="fontLegal">
                    El Usuario entiende que todas las operaciones concrypto-monedas tienen carácter irreversible y que las adquiridas durante los activos
                    de Deal solo pueden ser devueltas en base a un acuerdo específico adicional con otro usuario o la propia empresa.
                  </p>
                  <p class="fontLegal">
                    La cancelación de la cuenta antes del tiempo establecido entre las partes puede resultar en multas o cobros.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="7. PROPIEDAD INTELECTUAL" name="7">
                <div>
                  <p class="fontLegal">
                    El sitio y el Sistema contienen frutos del trabajo intelectual que pertenecen al proveedor de Servicios,
                    afiliados y otras partes relacionadas, patrocinadores, socios, representantes, todas las partes que actúan en nombre del
                    Proveedor de Servicios y otros terceros.
                  </p>
                  <p class="fontLegal">
                    Al utilizar el sitio y el sistema, el usuario reconoce y acepta que todo el contenido del sitio y la estructura del
                    contenido del Sitio están protegidos por derechos de autor, marcas registradas y otros derechos relativos a los frutos
                    de la actividad intelectual y que los derechos mencionados son auténticos y están protegidos en todas las formas,
                    en todas las jurisdicciones y con respecto a todas las tecnologías existentes y creadas posteriores.
                  </p>
                  <p class="fontLegal">
                    Ningún derecho ni ningún contenido del sitio ni del sistema están comprometidos con el usuario como resultado
                    del uso del sitio y del Sistema o en la celebración del acuerdo.
                  </p>
                  <p class="fontLegal">
                    Para evitar cualquier malentendido, se prohíbe al usuario:
                  </p>
                  <ul class="fontLegal" style="margin-left: 7%">
                    <li>
                      Copiar y / o difundir cualquier elemento de propiedad intelectual publicado en el sitio y / o en el
                      Sistema, excepto cuando esta función esté claramente contemplada por el Sitio y / o el Sistema;
                    </li>
                    <li>
                      Copiar o utilizar de cualquier otra forma la parte del programa del Sitio y / o del Sistema, así como su diseño;
                    </li>
                    <li>
                      Difundir en el Sitio y / o en el Sistema datos personales de terceros sin su permiso;
                    </li>
                    <li>
                      Cambiar de cualquier manera la parte del programa del sitio y / o del sistema, tomar cualquier
                      acción dirigida a cambiar la funcionalidad y operatividad del sitio y / o del sistema;
                    </li>
                    <li>
                      Usar insultos o cualquier palabra que viole derechos y libertades de terceras personas como un login (apodo, alias) durante el registro.
                    </li>
                  </ul>
                </div>
              </el-collapse-item><!--PROPIEDAD INTELECTUAL Y RESTRICCIONES EN EL USO DEL SITIO Y DEL SISTEMAS-->
              <el-collapse-item title="8. RESPONSABILIDAD DE LAS PARTES" name="8">
                <div>
                  <p class="fontLegal">
                    En caso de que el usuario viole las condiciones del presente acuerdo, las normas de moralidad o en caso de que conspire con otro usuario
                    para violar las condiciones del Contrato, el proveedor de servicio tendrá el derecho de bloquear o eliminar el
                    Gabinete Personal del usuario, prohíbe o restringe su acceso a ciertas o todas las funciones del Sistema usando su Gabinete Personal.
                  </p>
                  <p class="fontLegal">
                    En caso de que el usuario infrinja los términos fijados para el reembolso de las operaciones/créditos
                    proporcionadas por el Proveedor de Servicio de acuerdo con el contrato de préstamo descrito en el párrafo 7
                    del presente Acuerdo, el proveedor de servicios bloqueará el Gabinete Personal del usuario hasta que él /
                    ella devuelva las herramientas mencionadas.
                  </p>
                  <p class="fontLegal">
                    El Proveedor de Servicios tiene el derecho de exigir al usuario que pague una pérdida equivalente al 1% (un por ciento) del monto
                    total de las operaciones realizada de acuerdo con el contrato de préstamo por cada día de atraso.
                  </p>
                  <p class="fontLegal">
                    El proveedor de servicios se reserva el derecho a retener utilidades hasta que la cuenta del usuario
                    cubra con los costes referentes a los operativo (depositar/retirar)
                  </p>
                  <p class="fontLegal">
                    Si el Proveedor de Servicios detecta que el Usuario ha violado el párrafo 8 del presente Contrato,
                    el Proveedor de Servicios tendrá derecho a eliminar el Gabinete Personal del usuario y exigir indemnización por pérdidas.
                  </p>
                  <p class="fontLegal">
                    El Proveedor de servicios no es responsable de la operatividad del Sitio y / o del Sistema y no garantiza su funcionamiento continuo.
                  </p>
                  <p class="fontLegal">
                    El Proveedor de Servicios no garantiza la seguridad de la información publicada en el Sitio y / o en el Sistema,
                    así como no garantiza la posibilidad de acceso continuo a la información sobre compras/ventas cerradas, la posibilidad de
                    colocación de la Orden y de realizar ofertas.
                  </p>
                  <p class="fontLegal">
                    El Usuario utiliza el Sitio y el Sistema en su forma original bajo su propio riesgo.
                  </p>
                  <p class="fontLegal">
                    El Proveedor de Servicios no garantiza el logro de ningún resultado por parte del usuario debido al uso del Sitio y / o del Sistema.
                  </p>
                  <p class="fontLegal">
                    El proveedor de servicios no garantiza que el sitio y el sistema cumplan los requisitos del Usuario y no
                    garantizan un acceso continuo, rápido, seguro y sin errores al Sitio y / o al Sistema.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="9. CONDICIONES ESPECIALES" name="9">
                <div>
                  <p class="fontLegal">
                    El sitio y el sistema pueden contener enlaces externos a otros sitios de la red de internet (sitios de terceros).
                  </p>
                  <p class="fontLegal">
                    Los sitios de los terceros mencionados y su contenido no son controlados por criterios de conformidad con
                    determinados requisitos (autenticidad, integridad, legalidad, etc.).
                  </p>
                  <p class="fontLegal">
                    El proveedor de servicios no será responsable por la información y los materiales publicados en
                    los sitios de terceros, a los que el usuario pueda acceder a través del sitio y / o el sistema, así como no
                    asume ninguna responsabilidad por las opiniones expresadas o declaraciones, la accesibilidad y las posibles
                    consecuencias del uso de sitios de terceros.
                  </p>
                  <p class="fontLegal">
                    El Proveedor de Servicios tiene el derecho de transferir derechos y deudas bajo todas las obligaciones derivadas del acuerdo.
                  </p>
                  <p class="fontLegal">
                    Al aceptar el presente acuerdo, el usuario da su consentimiento para transferir derechos y deudas a terceros.
                  </p>
                  <p class="fontLegal">
                    En caso de transferencia de derechos y / o deudas, el proveedor de servicios informará al usuario de la misma dejando el
                    mensaje correspondiente en el Sitio y / o en el Sistema.
                  </p>
                  <p class="fontLegal">
                    Dada la especificidad de las transacciones, el Servicio no implementa una política de reintegro.
                  </p>
                  <p class="fontLegal">
                    Al realizar una transacción tanto en crypto-monedas como en opciones, el usuario acepta y asume todo el riesgo de la transacción.
                  </p>
                  <p class="fontLegal">
                    La empresa no se responsabiliza por ningún reclamo por la cancelación de la transacción.
                  </p>
                  <p class="fontLegal">
                    El servicio no acepta ni procesa solicitudes de nadie para la devolución y / o cancelación de una operación.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="10. SOLUCIÓN DE DISPUTAS" name="10">
                <div>
                  <p class="fontLegal">
                    Las partes tendrán que resolver todas las controversias, diferencias y pretensiones que puedan surgir
                    de la ejecución, terminación o cancelación del acuerdo mediante negociaciones.
                  </p>
                  <p class="fontLegal">
                    La parte que tiene reclamos debe enviar una notificación a la otra Parte describiendo las reclamaciones surgidas y / o diferencias.
                  </p>
                  <p class="fontLegal">
                    Si la parte solicitante no obtiene respuesta en un plazo de 30 (treinta) días desde que se haya remitido el mensaje correspondiente
                    o en caso de que las partes no puedan llegar a un consenso, la controversia estará sujeta a resolución en un tribunal donde el
                    Proveedor de servicios reside y por donde es regulado.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="11. ENMIENDAS AL ACUERDO" name="11">
                <div>
                  <p class="fontLegal">
                    La empresa tiene el derecho de modificar unilateralmente los términos del acuerdo, la política de privacidad,
                    la Política contra el lavado de dinero, las tarifas y la oferta de determinados activos.
                  </p>
                  <p class="fontLegal">
                    Los cambios surten efecto 3 (tres) días después de la publicación de la nueva versión de los documentos correspondientes.
                  </p>
                  <p class="fontLegal">
                    En cada visita sucesiva al Sitio y antes de iniciar el uso del Gabinete Personal, el Usuario se compromete a
                    familiarizarse con la nueva versión del acuerdo, política de privacidad, política anti-lavado de dinero, tarifas
                    y la oferta general.
                  </p>
                  <p class="fontLegal">
                    Si el usuario continúa utilizando el sitio y el sistema, significa que está de acuerdo con nuevas
                    versiones de los documentos correspondientes.
                  </p>
                  <p class="fontLegal">
                    Si el usuario no acepta nuevos términos del Contrato, política de privacidad, política anti-lavado de dinero,
                    tarifas o la oferta general, deberá dejar de utilizar el sitio.
                  </p>
                  <p class="fontLegal">
                    La parte que tiene reclamos debe enviar una notificación a la otra Parte describiendo las reclamaciones surgidas y / o diferencias.
                  </p>
                  <p class="fontLegal">
                    Si la parte solicitante no obtiene respuesta en un plazo de 30 (treinta) días desde que se haya remitido el mensaje
                    correspondiente o en caso de que las partes no puedan llegar a un consenso, la controversia estará sujeta a resolución
                    en un tribunal donde el Proveedor de servicios reside y por donde es regulado.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="12. DISPOSICIONES FINALES" name="12">
                <div>
                  <p class="fontLegal">
                    El proveedor de servicios y todas las relaciones jurídicas que lo conciernen están reguladas por la legislación correspondiente.
                  </p>
                  <p class="fontLegal">
                    Todas las disputas surgidas se resuelven de acuerdo con la legislación de la empresa.
                  </p>
                  <p class="fontLegal">
                    Si alguna cláusula del acuerdo se considera nula e inaplicable por decisión judicial, no afectará la validez
                    de otras cláusulas del acuerdo, las cuales seguirán siendo válidas y ejecutables.
                  </p>
                  <p class="fontLegal">
                    En el caso de la operativa con crypto-monedas, la detección de cualquier origen fraudulento conllevara a la
                    congelación del gabinete de operaciones del usuario.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="13. TUS BILLETERAS" name="13">
                <div>
                  <p class="fontLegal">
                    Usted es responsable de registrar de forma cuidadosa y minuciosa la dirección de su billetera virtual,
                    recuerde que solo usted puede modificar esta dirección pues nuestro sistema no lo puede hacer por usted.
                  </p>
                  <p class="fontLegal">
                    Tenga en cuenta que esto es de suma relevancia, pues si usted ingresa una dirección que no es la de su
                    billetera virtual podría perder las criptomonedas que solicitó retirar del sistema.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="14. MODELO DE NEGOCIO" name="14">
                <div>
                  <p class="fontLegal font-weight-bold">FUNCIONAMIENTO:</p>
                  <p class="fontLegal">
                    Abres tu cuenta con un depósito de 0.1 BTC + 5% de Trámites de Operación, ingresas a tu perfil copias el enlace y
                    lo envías a tu referido. Una vez esa persona haga la inscripción y compra del paquete, al instante tienes el
                    depósito de comisión en tu cuenta de GMM.
                  </p>
                  <p class="fontLegal">
                    Nuestro modelo de negocio no se basa en redes binarias, pirámides o estructuras similares.
                    Invitamos a nuestros usuarios a denunciar cuentas de personas que estén utilizando este tipo de estructuras
                    con nuestra plataforma. Nos reservamos el derecho de bloquear y anular las cuentas de aquellos que hagan
                    uso inadecuado de la plataforma o divulguen información falsa relacionada con las inversiones, tales como
                    comisiones, porcentajes de rendimiento, tiempos de entrega en retornos, entre otros.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="15. TRANSFERENCIA DE FONDOS" name="15">
                <div>
                  <p class="fontLegal">
                    Es el proceso por medio del cual usted transfiere sus fondos o puntos dentro de nuestra plataforma a otros usuarios de la misma.
                    Recuerde que transferencia de fondos es diferente de retiro de fondos.
                  </p>
                </div>
              </el-collapse-item>
            </el-collapse>
            <br><br>
            <h2 class="fontTitLegal2">
              Términos y condiciones para retirar fondos e inversiones de GMM:
            </h2>
            <p class="fontLegal2">
              Una vez comience con el proceso de retiro de fondos o inversión usted está aceptando
              de forma inequívoca los presentes términos y condiciones.
            </p>
            <p class="fontLegal2">
              Nos reservamos el derecho de imponer límites sobre el retiro de sus inversiones o de sus fondos.
            </p>
            <p class="fontLegal2">
              Si usted tiene criptomonedas en nuestra plataforma y estas no están en ningún paquete
              de los ofrecidos por la misma, el retiro mínimo es de 0.01 BTC, una vez usted solicita
              el retiro total o parcial de sus fondos, GMM tiene 7 días hábiles para realizar la
              transferencia a la billetera virtual que usted registró en la plataforma, si usted no
              cuenta con una billetera virtual es usted quien tiene la obligación de registrar una
              para completar el proceso de retiro; le advertimos que retirar fondos bajo los términos
              antes descrito le costará el 5% de la cantidad que va a ser retirada, si por lo contrario,
              usted desea que este retiro sea inmediato y no está de acuerdo con esperar los 5 días hábiles
              mencionados, la transferencia tendrá un costo de un 17% de la cantidad solicitada.
            </p>
            <p class="fontLegal2">
              Si da una instrucción para retirar sus fondos y rentas de GMM, tenga en cuenta lo siguiente:
            </p>
            <br>
            <ul class="fontLegal2" style="margin-left: 7%">
              <li>
                Nos tomaremos como mínimo 7 días hábiles  para completar este proceso.
              </li>
              <li>
                Usted debe cumplir con todos los requisitos exigidos por nuestra plataforma.
              </li>
              <li>
                Los requisitos se le notificarán a través del procedimiento de retiro.
              </li>
              <li>
                El término beneficio en nuestra plataforma no se refiere a beneficios financieros.
              </li>
            </ul>
            <br>
            <p class="fontLegal2">
              Tenga en cuenta que su procesador de pagos  podría demorar algunos días en actualizar el saldo de su cuenta,
              dependiendo de su política y procedimientos.
            </p>
            <h2 class="fontTitLegal2">
              Paquetes Cancelados:
            </h2>
            <p class="fontLegal2">
              Una vez el usuario entra en alguno de los paquetes ofertados por la plataforma debe permanecer en el
              mismo, so pena de ser penalizado con la disminución de su inversión en los siguientes porcentajes y de
              la siguiente manera:
            </p>
            <br>
            <ul class="fontLegal2" style="margin-left: 7%">
              <li>
                <p class="font-weight-bold">
                  Primer mes:
                </p>
                <p >
                  Le costará el 15% de la cantidad total de criptomonedas ingresadas a el o los paquetes en cuestión.
                </p>
              </li>
              <li>
                <p class="font-weight-bold">
                  Segundo mes:
                </p>
                <p>
                  Le costará el 30% del total de  las criptomonedas ingresadas a el o los paquetes en cuestión.
                </p>
              </li>
              <li>
                <p class="font-weight-bold">
                  Tercer mes:
                </p>
                <p>
                  Le costará 40% del total de  las criptomonedas ingresadas a el o los paquetes en cuestión.
                </p>
              </li>
              <li>
                <p class="font-weight-bold">
                  Cuarto mes:
                </p>
                <p>
                  Le costará 50% del total de  las criptomonedas ingresadas a el o los paquetes en cuestión.
                </p>
              </li>
              <li>
                <p class="font-weight-bold">
                  Quinto mes:
                </p>
                <p>
                  Le costará 60% del total de las criptomonedas ingresadas a el o los paquetes en cuestión.
                </p>
              </li>
            </ul>
            <br>
            <p class="fontLegal2">
              Día hábil es cualquier día que no sea Lunes, sábado, domingo o día festivo
              cuando los bancos en la jurisdicción pertinente estén abiertos para los negocios.
            </p>
            <p class="fontLegal2">
              Un procesador de pagos es básicamente un medio, sistema o herramienta a través del cual podemos
              realizar compras a través de Internet y recibir pagos Online. A través de algunos de ellos podemos
              disponer de Tarjetas Mastercard o Visa prepagadas virtuales y/o físicas que nos permitirán
              retirar dinero por cajeros automáticos, realizar pagos a través de puntos de venta e incluso,
              comprar Online. El comercio electrónico (y en general cualquier forma de emprender Online)
              se verá beneficiado de nuestro conocimiento y uso de dichas herramientas.
            </p>
            <p class="fontLegal2 font-weight-bold">
              Nota:
            </p>
            <p class="fontLegal2">
              Le recordamos a el usuario que las rentas que hayan de generarse de acuerdo con el paquete o los
              paquetes cancelados no serán causadas, es decir, el usuario pierde las rentas de los meses que resten
              para que se cumpla el término del paquete.
            </p>
            <p class="fontLegal2 font-weight-bold">
              Ejemplo:
            </p>
            <p class="fontLegal2">
              Si me retiro antes de que termine el primes mes no recibo ni la renta de ese mes ni las de los once
              siguientes meses, asumiendo que el paquete tenía un término total de 12 meses.
            </p>
          </div>
        </el-col>
        <el-col :xs="3" :sm="3" :md="3" :lg="2">
          &nbsp;
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          &nbsp;
        </el-col>
      </el-row>
    </el-main>
    <Footer2></Footer2>
    <el-footer class="el-footer">
      <Footer>
      </Footer>
    </el-footer>
  </el-container>
</template>

<script>
    import Menu from "../components/components/Menu"
    import Footer from "../components/components/Footer"
    import Icoins from "../components/components/Icoins"
    export default {
      name: "legal",
      components: {Icoins, Menu, Footer}
    }
</script>

<style scoped>
  .el-footer {
    padding: 0px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  .backHeader {
    background-image: url('../assets/Imgs/backRed.jpg');
    background-repeat: no-repeat;
    background-attachment: inherit;
    background-position: center center;
    background-size: cover;
    padding: 0%;
    overflow-x: hidden;
  }
  .martitle {
    margin-top: 10em;
  }
  .center {
    text-align: center;
    margin: auto;
    display: block;
  }
  .fontTitulosW {
    font-size: 3.4em;
    color: #FFF;
    text-align: center;
    font-weight: bold;
    line-height: 50px;
    padding: 5%;
  }

  .font-weight-bold{
    font-weight: bold !important;
  }

  @media only screen and (max-width: 576px){

    .fontTitLegal{
      font-size: 1.3rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
      margin-left: 0.7em;
      line-height: 1.5em;
    }

    .fontTitLegal2{
      font-size: 1.5rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
      margin-left: 0.7em;
      line-height: 1.5em;
    }

    .fontLegal{
      font-size: 1.0rem;
      color: #000;
      text-align: left;
      font-weight: 300;
      margin: 0 2em;
      line-height: 1.5em;
      padding: 2%;
    }

    .fontLegal2{
      font-size: 1.0rem;
      color: #FFF;
      text-align: left;
      font-weight: 300;
      padding: 2%;
      margin-left: 0.65em;
      line-height: 1.5em;
    }

  }

  @media only screen and (min-width: 577px) and (max-width: 992px){

    .fontTitLegal2{
      font-size: 1.9rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
      margin-left: 0.5em;
      line-height: 1.5em;
    }

    .fontTitLegal{
      font-size: 1.5rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
      margin-left: 0.5em;
      line-height: 1.5em;
    }

    .fontLegal{
      font-size: 1.2rem;
      color: #000;
      text-align: justify;
      font-weight: 300;
      margin: 0 2em;
    }

    .fontLegal2{
      font-size: 1.2rem;
      color: #FFF;
      text-align: justify;
      font-weight: 300;
      margin-left: 0.9em;
      line-height: 1.5em;
    }

  }

  @media only screen and (min-width: 993px){

    .fontLegal{
      font-size: 1.2rem;
      color: #000;
      text-align: justify;
      font-weight: 300;
      margin: 0 2em;
      line-height: 1.5em;
    }

    .fontTitLegal{
      font-size: 1.8rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
      margin-left: 0.5em;
      line-height: 1.5em;
    }

    .fontTitLegal2{
      font-size: 2.2rem;
      color: #FFF;
      text-align: left;
      font-weight: bold;
      margin-left: 0.5em;
      line-height: 1.5em;
    }

    .fontLegal2{
      font-size: 1.2rem;
      color: #FFF;
      text-align: justify;
      font-weight: 300;
      margin-left: 1em;
      line-height: 1.5em;
    }

  }

  /*Accordion*/

  .el-collapse-item_header{
    background-color: #FFF;
    color: #FFF;
    padding-left: 3%;
    font-size: 13px;
    font-weight: bold;
  }

  /*Portada*/

  @media only screen and (max-width: 320px){

    .visibilidad{
      visibility: hidden;
    }

    .titulo{
      margin-top: -43em;
    }
  }
  @media only screen and (min-width: 321px) and (max-width: 639px){
    .visibilidad{
      visibility: hidden;
    }
    .titulo{
      margin-top: -54em;
    }
  }
  @media only screen and (min-width: 640px) and (max-width: 767px){
    .visibilidad{
      visibility: hidden;
    }
    .titulo{
      margin-top: -65em;
    }
  }
  @media only screen and (min-width: 768px){
    visibilidad{
      visibility: visible;
    }
    .titulo{
      margin-top: 0;
    }
  }
</style>
