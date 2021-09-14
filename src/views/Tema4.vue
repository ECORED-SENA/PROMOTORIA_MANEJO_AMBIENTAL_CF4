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
    .cajon-fondo.color-acento-contenido.p-5.d-flex
      .bloque-texto-b__texto.p-4.d-flex
        .cajon-b.color-secundario.abajo-derecha.p-3.mb-5
          p.h1.fw-normal.mb-0 La identificación espacial en el mapa mediante el uso de coordenadas, permite ubicar un punto en el mapa de acuerdo con su ubicación geográfica y extensión específica que permite que sea situado sobre la superficie de la Tierra.

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
.cajon-fondo
  position: relative
  &:after
    content: ''
    position: absolute
    bottom: 0
    right: 0
    width: 23px
    height: 23px
    background-color: $color-secundario
    transform: translateY(-50px) translateX(-50px)
  min-height: 300px
  background-image: url('../assets/curso/img34.svg')
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  align-items: center
  .bloque-texto-b__texto
    justify-content: flex-end
    @media (min-width: $bp-min-lg)
      .cajon-b
        width: 80%


    @media (max-width: $bp-max-sm)
      display: none
</style>
