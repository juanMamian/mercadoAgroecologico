<template>
  <div>
    <h1 id="titulo">
      Oferta de productos del mercado agroecológico
    </h1>
    <div id="listaProductos">
      <div class="itemProducto" v-for="producto of losProductos" :key="producto.id"
        @dblclick="copiarToClipboard(producto.id)">
        <div class="iconoProducto">
          <img :src="'/iconosProductos/' + producto.id + '.webp'" alt="">
        </div>
        <div class="zonaInfo">
          <div class="nombre">
            {{ producto.nombre }}
          </div>
          <div class="precio">
            ${{ formatoDinero(producto.precio) }} cada {{ producto.unidad_venta }}
          </div>
          <div class="nombreMarca">
            De: {{ producto.marca.nombre }}
          </div>
          <div class="botonContactoWs">
            <a :href="'https://wa.me/57' + producto.marca.telefono" target="_blank">
              <img src="@/assets/iconos/whatsapp.svg" alt="Whatsapp">
              Escribir
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

function copiarToClipboard(texto: string) {
  navigator.clipboard.writeText(texto);
}
function formatoDinero(numero: number, moneda = 'COP', locales = 'es-ES') {
  const formato = new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: moneda,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  return formato.format(numero);
}

const docProductos = gql`
query{
  getProductos{
    id
    nombre
    unidad_venta
    precio
    marca{
      id
      nombre
      administrador
      telefono
    }
  }
}
`;
const queryProductos = useQuery(docProductos, undefined);
const losProductos = computed(() => {
  return queryProductos.result.value?.getProductos || []
})

</script>

<style>
@import url(@/assets/estilos/estilosGenerales.css);
</style>
<style scoped>
#titulo {
  text-align: center;
  margin-bottom: 40px;
}

#listaProductos {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px min(50px, 2vw);
}

.itemProducto {
  display: flex;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 4px gray;
  width: min(300px, 90vw);
  font-family: Poppins, Arial;
  font-size: 0.8rem;
}

.iconoProducto {
  overflow: hidden;
  border-radius: 5px;
}

.iconoProducto img {
  height: 100%;
  width: 100%;
  object-fit: cover;

}

.itemProducto .nombre {
  font-weight: bold;
}

.itemProducto .zonaInfo {
  display: flex;
  gap: 10px;
  flex-direction: column;
  flex-wrap: wrap;
}

.zonaInfo .precio {}

.botonContactoWs {
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: var(--colorAccion);
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 15px;
  width: fit-content;
}

.botonContactoWs img {
  height: 1rem;
}

.botonContactoWs a {
  text-decoration: none;
  color: black;
}
</style>
