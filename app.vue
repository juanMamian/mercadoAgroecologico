<template>
  <div>
    <div id="listaProductos">
      <div class="itemProducto" v-for="producto of losProductos" :key="producto.id">
        <div class="iconoProducto">
          <img :src="'/iconosProductos/' + producto.id + '.webp'" alt="">
        </div>
        <div class="zonaInfo">
          <div class="nombre">
            {{ producto.nombre }}
          </div>
          <div class="precio">
            {{ formatoDinero(producto.precio) }} cada {{ producto.unidad_venta }}
          </div>
          <div class="nombreMarca">
            De: {{ producto.marca.nombre }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

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
#listaProductos {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.itemProducto {
  display: flex;
  gap: 10px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 4px gray;
  width: min(300px, 90vw);
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

.itemProducto .zonaInfo {
  display: flex;
  gap: 10px;
  flex-direction: column;
  flex-wrap: wrap;
}

.zonaInfo .precio {
  font-size: 0.9rem;
}
</style>
