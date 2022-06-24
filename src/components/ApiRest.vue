<template>

  <section class="src-components-api-rest">
    <h1>Información de MockApi</h1>
    <!-- <button class="btn btn-success my-3 mr-3" @click="getUsuarios()" >Obtener información</button> -->
   <div v-if="usuarios.length" class="table-responsive">
        
        <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Mail</th>
          </tr>
          <tr v-for="(usuario, index) in usuarios" :key="index">
              <td>{{ usuario.nombre }}</td>
              <td>{{ usuario.edad }}</td>
              <td>{{ usuario.mail }}</td>
          </tr>
        </table>
        <h5 class="alert alert-primary">Se encontraron {{usuarios.length}} registros.</h5>
      </div>
      <h4 v-else class="alert alert-danger text-center">No se encontraron registros</h4>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-api-rest',
    props: [],
    mounted () {
      this.getUsuarios()

    },
    data () {
      return {
            url:'https://62b4fb56530b26da4cc7633e.mockapi.io/usuarios',
            usuarios: [],
      }
    },

    methods: {
         async getUsuarios() {
          console.log("ENTRO")
            try {
          let { data } = await this.axios(this.url)
          this.usuarios= data
        }
        catch(error) {
          console.error('Error Axios', error)
        }   
      },





    
    },  
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-api-rest {

  }
</style>
