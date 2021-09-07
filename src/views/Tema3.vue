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
    .row.mb-5
      .col-lg-3
        .tarjeta.color-primario.tarjetas-zoom.h-100
          .contenedo-imagen-hover
            img(src='@/assets/curso/img23.jpg', alt='Texto que describa la imagen')
          .p-4.m-4
            h4 Simples
            p Son tomadas en un tiempo y lugar determinado para su análisis individual.
      .col-lg-3
        .tarjeta.color-primario.tarjetas-zoom.h-100
          .contenedo-imagen-hover
            img(src='@/assets/curso/img24.jpg', alt='Texto que describa la imagen')
          .p-4.m-4
            h4 Compuestas
            p Son obtenidas por mezclas y homogeneización de muestras simples que fueron recogidas en el mismo punto, pero en tiempos diferentes.
      .col-lg-3
        .tarjeta.color-primario.tarjetas-zoom.h-100
          .contenedo-imagen-hover
            img(src='@/assets/curso/img25.jpg', alt='Texto que describa la imagen')
          .p-4.m-4
            h4 Muestras integradas 
            p Se obtienen de la mezcla y homogeneización de muestras simples que fueron obtenidos en diferentes puntos pero simultáneamente.
      .col-lg-3
        .tarjeta.color-primario.tarjetas-zoom.h-100
          .contenedo-imagen-hover
            img(src='@/assets/curso/img26.jpg', alt='Texto que describa la imagen')
          .p-4.m-4
            p Las muestras de agua que serán utilizadas para exámenes microbiológicos deben ser muestras simples, de modo que la muestra sea la obtenida en el punto de muestreo. 
    p.mb-5 Existen diferentes técnicas de muestreo y estas se dividen en las que son tomadas directamente en la botella o el recipiente que se va a enviar al laboratorio, y aquellas que se recolectan mediante el uso de equipos. A continuación, se conocerán las técnicas utilizadas según los puntos de muestreo. 
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Grifos")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/img27.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Grifos
            p Se deben retirar los filtros y demás accesorios, posteriormente se limpia el grifo con agua o con alcohol, con el grifo cerrado este se flamea, antes de tomar la muestra se deja fluir el agua al menos 5 minutos, se destapa el frasco sin tocar la boca ni el interior del tapón y se procede a llenarlo y cerrándose a continuación.
      .py-3.py-md-4(titulo="Pozos y depósitos")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/img28.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Pozos y depósitos
            p Se introduce en el agua el frasco de muestreo sostenido con una cuerda y se toma la muestra tras haber agitado la superficie.
      .py-3.py-md-4(titulo="Lagos y ríos")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/img29.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Lagos y ríos
            p Se deben tener en cuenta factores como la profundidad, el caudal, la distancia a la orilla, entre otros. La muestra se debe tomar lo más lejos posible de la orilla, sin remover el fondo y se deben evitar las zonas de estancamiento.
      .py-3.py-md-4(titulo="Piscinas")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/img30.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Piscinas
            p La muestra se realiza en puntos en los que se sospeche una más lenta renovación o cualquier otra posible causa de deterioro.








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
.tarjetas-zoom
  overflow: hidden
  .contenedo-imagen-hover
    overflow: hidden
    img
      transition: transform .5s ease-in-out
  &:hover
    .contenedo-imagen-hover
      img
        transform: scale(1.2)
</style>
