<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Plan de muestreo
    p.mb-5 Para poder realizar un correcto monitoreo del agua es necesario tener una buena planificación del plan de muestreo, por lo tanto, se debe obtener información preliminar del área de influencia, para esto se necesita de tres etapas las cuales serán descritas a continuación.
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Recolección de datos" :icono="require('@/assets/curso/img7.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            p El personal debe tener una idea clara del objetivo y el papel que cada uno juega en el monitoreo, para así lograr un trabajo efectivo. De igual manera, debe encontrarse familiarizado con el manejo de los equipos, por lo que es necesario realizar capacitaciones y formación continua. Es necesario la previsión con el laboratorio para definir los tiempos de entrega de muestras para que una vez realizado el trabajo de campo se puedan diligenciar los formatos y hacer la entrega de las muestras al laboratorio.
            img(src='@/assets/curso/img10.svg', alt='Texto que describa la imagen')
          .col-md-4
            figure
              img(src='@/assets/curso/img11.jpg', alt='Texto que describa la imagen')(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Administración de los datos" :icono="require('@/assets/curso/img8.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            p Para poder utilizar de manera efectiva los datos se debe realizar un tratamiento, control, validación, difusión y una posterior publicación de los datos. Dentro de este procesamiento está el paso de datos manuales a archivos digitales.
            img(src='@/assets/curso/img12.svg', alt='Texto que describa la imagen')

          .col-md-4
            figure
              img(src='@/assets/curso/img13.jpg', alt='Texto que describa la imagen')(data-aos="zoom-in")

      .py-4.py-md-5(titulo="Uso de la información" :icono="require('@/assets/curso/img9.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            p Una vez terminada la recopilación de datos hidrológicos, bien sea provenientes de mediciones de precipitación, de mediciones de caudal o de muestreos de calidad de agua, se obtendrá una serie de datos que son de utilidad para la toma de decisiones.
              br
              br
              |Estas decisiones se podrán adoptar a partir de la medición de los datos recolectados, los cuales van a derivar en estadísticas que serán utilizadas en proyectos a elaborar.
              br
              br
              |Por tanto, finalmente la publicación de la información ya sea en sistemas de información hidrológica, boletines, estudios, informes, investigaciones, entre otros, es la manera de transmitir la información para la toma de decisiones.
          .col-md-4
            figure
              img(src='@/assets/curso/img14.jpg', alt='Texto que describa la imagen')(data-aos="zoom-in")
    p.mb-5 Para iniciar el monitoreo de agua por medio de la toma de muestras, se deben tener en cuenta ciertos parámetros o consideraciones previas, las cuales se centran en: 
    #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='6' aria-label='Slide 7')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='7' aria-label='Slide 8')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='8' aria-label='Slide 1')
      .carousel-inner
        .carousel-item.active
          figure
            img(src='@/assets/curso/img15.jpg', alt='Texto que describa la imagen')
            figcaption Establecer el programa de muestreo.
        .carousel-item
          figure
            img(src='@/assets/curso/img16.jpg', alt='Texto que describa la imagen')
            figcaption Identificar el lugar de la toma de muestra.
        .carousel-item
          figure
            img(src='@/assets/curso/img17.jpg', alt='Texto que describa la imagen')
            figcaption Características de la corriente de agua.
        .carousel-item
          figure
            img(src='@/assets/curso/img18.jpg', alt='Texto que describa la imagen')
            figcaption Variación de las características de la corriente en el tiempo.
        .carousel-item
          figure
            img(src='@/assets/curso/img19.jpg', alt='Texto que describa la imagen')
            figcaption Naturaleza. 
        .carousel-item
          figure
            img(src='@/assets/curso/img20.jpg', alt='Texto que describa la imagen')
            figcaption Variaciones de temperatura.
        .carousel-item
          figure
            img(src='@/assets/curso/img21.jpg', alt='Texto que describa la imagen')
            figcaption Líquidos peligrosos.
        .carousel-item
          figure
            img(src='@/assets/curso/img22.jpg', alt='Texto que describa la imagen')
            figcaption Efecto de las condiciones meteorológicas.
      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next

</template>

<script>
export default {
  name: 'Tema3',
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
button:hover
  background-color: $color-acento-contenido
</style>
