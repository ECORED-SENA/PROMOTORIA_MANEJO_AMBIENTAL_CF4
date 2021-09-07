<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Identificación espacial
    p.mb-5 La identificación espacial permite establecer la localización en el espacio de un objeto dentro de un sistema de coordenadas determinado. En Colombia se usa de manera oficial el sistema de coordenadas y proyecciones planimétricas Magna-Sirgas. Esta identificación, se da por medio del uso del GPS que registra datos de coordenadas planas si se registra en la proyección de Magna Sirgas en la zona específica. 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    p.mb-5 Para georreferenciar imágenes se usan programas que permiten mover y ajustar varias imágenes, una sobre otra previamente georreferenciada. A continuación, se podrá visualizar un recurso que amplía esta información. 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    .bloque-texto-b.color-acento-contenido.p-5
      .bloque-texto-b__texto.justify-content-center.d-flex
        p.mb-0.m-auto La identificación espacial en el mapa mediante el uso de coordenadas, permite ubicar un punto en el mapa de acuerdo con su ubicación geográfica y extensión específica que permite que sea situado sobre la superficie de la Tierra.

</template>

<script>
export default {
  name: 'Tema4',
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

<style lang="sass" scoped>
.bloque-texto-b
  background-image: url('../assets/curso/img34.png')
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  .bloque-texto-b__texto
    margin-left: 160px
    width: 70%
    @media (max-width: $bp-max-md)
      margin-left: 70px
    @media (max-width: $bp-max-sm)
      margin-left: 50px
.bloque-texto-b:before
    content: ''
    display: block
    position: absolute
    top: 74%
    bottom: 0
    left: 70%
    right: 0
    @media (max-width: $bp-max-sm)
      display: none
</style>
