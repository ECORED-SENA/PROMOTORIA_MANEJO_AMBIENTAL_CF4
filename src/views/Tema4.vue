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
        iframe(width="560" height="315" src="https://www.youtube.com/embed/xNwyFS4010c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Equipos satelitales
    p.mb-5 Para georreferenciar imágenes se usan programas que permiten mover y ajustar varias imágenes, una sobre otra previamente georreferenciada. A continuación, se podrá visualizar un recurso que amplía esta información. 
    .row.mb-5.justify-content-center
      .col-lg-5
        .titulo-sexto.color-acento-contenido
          h5 Localización
        p.mb-3 Para realizar la localización de imágenes o mapas se realiza mediante la identificación de una serie de puntos cuyas coordenadas son conocidas y aparecen en una imagen, permitiendo así georreferenciarlas. Un mapa que está georreferenciado determina directamente la localización real de cualquier punto en el mapa; además, permite medir distancias y áreas reales en mapas sobre el plano que es georreferenciado.
          br
          br
          | Para georreferenciar mapas se utilizan los Datums de estos mapas que tengan coordenadas geográficas medidas y elementos que están ya ubicados previamente en otras imágenes medidas para ajustarlos.
      .col-lg-5
        .contenedor-imagen-hover(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .contenedor-imagen-hover__img1: img(src='@/assets/curso/hover2.jpg')
          .contenedor-imagen-hover__img2: img(src='@/assets/curso/hover1.jpg')
    .cajon-fondo.color-acento-contenido.p-5.d-flex
      .bloque-texto-b__texto.p-4.d-flex
        .cajon-b.color-secundario.abajo-derecha.p-3.mb-5
          p.h1.fw-normal.mb-0 La identificación espacial en el mapa mediante el uso de coordenadas, permite ubicar un punto en el mapa de acuerdo con su ubicación geográfica y extensión específica que permite que sea situado sobre la superficie de la Tierra.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicador: true, // variables de vue
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
        width: 70%


    @media (max-width: $bp-max-sm)
      display: none
.cajon-b.color-secundario:before
  background-color: #7AE582
  opacity: 1
.contenedor-imagen-hover
  position: relative
  &:hover
    .contenedor-imagen-hover__img1
      opacity: 1
  &__img1
    top: 0
    left: 0
    width: 100%
    position: absolute
    opacity: 0
    transition: opacity 0.5s ease-in-out
</style>
