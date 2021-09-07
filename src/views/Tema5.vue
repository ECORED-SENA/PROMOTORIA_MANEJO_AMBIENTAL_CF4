<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Coordenadas
    p.mb-5 Los sistemas de coordenadas <b>son uno o más números que se utilizan para ubicar la posición de un punto u objeto geométrico</b>, se les puede representar mediante letras como <b>X</b> y <b>Y</b>. El sistema de coordenadas cartesianas es el más empleado, aunque existen varios tipos de sistemas de coordenadas, de los cuales se describirán las coordenadas geográficas y planas. Así mismo, existen coordenadas horizontales las cuales pueden ser de tres tipos: geográficas, proyectadas y locales, mientras que los sistemas de coordenadas verticales localizan la altura o la profundidad de los datos.
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon-x.p-5
          img(src='@/assets/curso/img31.svg' alt='AvatarTop')
          h2.fw-normal.d-flex.m-auto El sistema de coordenadas verticales es elíptico o basado en la gravedad. Un sistema de coordenadas verticales basado en la gravedad que se utiliza para calcular el nivel medio del mar.
          span.cajon-adorno
    br
    .row.mb-5.justify-content-center.mt-5
      .col-md-5.col-xl-5.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          img(src='@/assets/curso/img32.jpg' alt='AvatarTop').mb-4
          h4 Coordenadas geográficas
          p Este tipo de coordenadas indican la localización sobre la superficie de la tierra en latitud y longitud y medida en grados, minutos y segundos de la siguiente manera:
          ul.lista-ul--color
            li 
              i.fas.fa-check
              | DD — Decimal Degree (grados polares):
              br
              |ej. 49.500-123.500.

            li 
              i.fas.fa-check
              | DM — Degree: Minute (grados:minutos): 
              br
              |ej. 49:30.0-123:30.0.
            li 
              i.fas.fa-check
              | DMS — Degree: Minute:Second (grados: minutos:segundos):
              br
              |ej. 49:30:00-123:30:00.
              

      .col-md-5.col-xl-5.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          img(src='@/assets/curso/img32.jpg' alt='AvatarTop').mb-4
          h4 Coordenadas planas
          p Este tipo de coordenadas usan generalmente kilómetros y metros y resultan de proyectar sobre un plano, donde los puntos corresponden a los puntos X o norte y la coordenada Y o Este. Son medidas sobre dos ejes perpendiculares trazados a partir de un origen definido. 
            br
            br
            |Existe una necesidad de poder transformar y crear una representación visual de la información cartográfica, la cual nos permite definir las ubicaciones relativas de los objetos en un área determinada, por ejemplo, un lago en la superficie de la Tierra.
    


</template>

<script>
export default {
  name: 'Tema5',
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
.cajon-x
  position: relative
  background-color: #FFF8C6
  &::after

    opacity: 1
    display: block
    content: ''
    width: 400px
    height: 81px
    position: absolute
    bottom: 0
    right: 0
    background-color: #FDE947
    transform: translateY(50%)
    z-index: 1
    @media (max-width: $bp-max-md)
      display: none
  img
    position: absolute
    width: 118px
    top: 0
    left: 0
    transform: translateX(-50%) translateY(- 10%)
    @media (max-width: $bp-max-md)
      display: none
  h2
    z-index: 2
    width: 70%
.curso-main-container
  overflow: visible
.lista-ul--color li > i:first-of-type
  color: #3CA8F4
</style>
