<template>

  <section class="src-components-fomulario">
    <div class="jumbotron">
      <h3>Formulario</h3>

      <vue-form :state="formState" @submit.prevent="enviar()">

        <validate tag="div">
                  <label for="nombre">Nombre</label>
                  <input 
                    type="text"
                    id="nombre"
                    name="nombre" 
                    class="form-control"
                    autocomplete="off"
                    v-model.trim="formData.nombre" 
                    required 
                    :minlength="nombreMinLength"
                    :maxlength="nombreMaxLength"
                  />

                  <field-messages name="nombre" show="$dirty">                  
                    <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                    <div slot="minlength" class="alert alert-danger mt-1">
                      Este campo requiere como mínimo {{nombreMinLength}} caracteres.
                    </div>
                  </field-messages>
          </validate>

        <validate tag="div">
                  <label for="edad">edad</label>
                  <input 
                    type="number"
                    id="edad"
                    name="edad" 
                    class="form-control"
                    autocomplete="off"
                    v-model.trim="formData.edad" 
                    required 
                    :min="edadMin"
                    :max="edadMax"
                  />

                  <field-messages name="edad" show="$dirty">                  
                    <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                    <div slot="min" class="alert alert-danger mt-1">
                      La edad mínima es de {{edadMin}} años.
                    </div>
                      <div slot="max" class="alert alert-danger mt-1">
                      La edad máxima es de {{edadMax}} años.
                    </div>
                  </field-messages>
          </validate>

        <validate tag="div">
                  <label for="mail">mail</label>
                  <input 
                    type="email"
                    id="mail"
                    name="mail" 
                    class="form-control"
                    autocomplete="off"
                    v-model.trim="formData.mail" 
                    required 

                  />

                  <field-messages name="mail" show="$dirty">                  
                    <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                    <div slot="email" class="alert alert-danger mt-1">Formato de mail inválido</div>
                  </field-messages>
          </validate>

          <button class="btn btn-success my-4" :disabled="formState.$invalid">Enviar</button>

      </vue-form>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-fomulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState:{},
        formData: this.getInicialData(),
        nombreMinLength:'3',
        nombreMaxLength:'15',
        edadMin:'18',
        edadMax:'120',
        url:'https://62b4fb56530b26da4cc7633e.mockapi.io/usuarios',


      }
    },
    methods: {
      getInicialData() {
        return {
          nombre: '',          
          edad: '',
          mail: ''
        }
      },


       async enviar() {
        let usuarioNew = {
          nombre: this.formData.nombre,
          edad: this.formData.edad,
          mail: this.formData.mail,
         
        }

        try {
          let { data: usuario } = await this.axios.post(this.url, usuarioNew, {'content-type' : 'application/json'})
          console.log('AXIOS POST usuario', usuario)


        this.formData = this.getInicialData() 
        this.formState._reset() 
        }
        catch(error) {
          console.error('Error en postUsuario()', error.message)
        }
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-fomulario {

  }
</style>
