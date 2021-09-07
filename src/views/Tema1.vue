<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Monitoreo de agua
    p.mb-5 Es un proceso que 
      b ha sido diseñado para observar, medir, muestrear y analizar variables físicas, químicas y biológicas 
      | que permiten realizar un seguimiento del progreso de un hecho en particular. Precisamente, en el marco del ciclo hidrológico se constituye una herramienta técnica para soportar los instrumentos para la planificación, ordenación y manejo de las cuencas hidrográficas y acuíferos. 
      b En Colombia se han implementado redes para recolectar información sobre los recursos hídricos, convirtiéndose en la principal herramienta utilizada para una adecuada gestión del agua.
    .row.mb-5.justify-content-center
      .col-lg-5
        .cajon-b.color-primario.abajo-derecha.p-3.mb-5
          h2.h1.mb-0.fw-lighter Se ha establecido desde la Política Nacional para la Gestión Integral del Recurso Hídrico (Pngirh), hacer seguimiento al estado del recurso bajo los nuevos lineamientos, enfoques y prioridades en el cual, el monitoreo se puede realizar por métodos directos de observación, ya sea en puntos estratégicos, estaciones y redes físicas definidas en un programa de monitoreo.
      .col-lg-5
        img(src='@/assets/curso/img1.jpg')(data-aos="fade-right")
        img(src='@/assets/curso/img2.jpg')(data-aos="fade-left")
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
