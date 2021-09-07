<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Equipos satelitales
    p.mb-5 Se emplean para realizar una identificación precisa de la ubicación del sitio de muestreo del agua. Conocer esta ubicación es importante porque permite que se tengan en cuenta diferentes variables del área de estudio, como es el análisis de la zona en donde se encuentra ubicada la fuente de agua, permitiendo visualizar si existen fenómenos que afecten la calidad del agua ya sea por escorrentía, pendientes, variables climáticas, actividades antrópicas, entre otras. 
    .row.mb-5.justify-content-end
      .col-lg-5: img(src='@/assets/curso/img47.jpg')(data-aos="fade-left")
      .col-lg-6
        .cajon-b.color-primario.abajo-derecha.p-3.mb-5
            h2.h1.mb-0.fw-normal Los equipos satelitales son los instrumentos que se conectan directamente a un satélite, permitiendo posicionar cualquier objeto sobre la Tierra con una precisión de hasta centímetros.
    p.mb-5  En los equipos satelitales se encuentran los sistemas Global Positioning System (GPS) que hacen referencia a un sistema electrónico de información implementado por el ejército de los Estados Unidos desde 1972, que rápidamente y gracias a su utilidad y versatilidad para la ubicación precisa de un punto geográfico, se instaló en el ámbito civil, llegando a ser una de las herramientas más importantes con las que cuenta el ser humano. Los principales tipos de GPS son:
    SlyderE(indicadores="")
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Navegadores convencionales
          p El localizador es el tipo más común de receptor <b>GPS</b>, con una variedad de bajo costo. Puede encontrar coordenadas en varios formatos y conversión de baja precisión de <b>WGS8</b> (sistema de referencia geodésica <b>GPS</b>) a datos locales. También permite la navegación asistida con señales de giro, direcciones y llegadas de voz en rutas definidas por el usuario a través de puntos de referencia.
        .col-md-8
          figure
            img(src='@/assets/curso/img48.jpg', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Receptores de Código C/A Avanzados
          p Estos receptores permiten el uso de diferentes metodologías en forma de suscripciones a servicios satelitales como OmniStar® y LandStar®, a partir de los cuales logran una precisión de por pedido de 1 m en tiempo real. Estos le permiten trabajar con geodatabases generadas por el usuario (siempre que se utilice tecnología de diferenciación), así como también permiten precisiones compatibles con la mayoría de las escalas utilizadas en GIS, adecuadas para aplicaciones GIS.
        .col-md-8
          figure
            img(src='@/assets/curso/img49.jpg', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Receptores geodésicos con medición de fase sobre L1
          p Son receptores que almacenan información que el posprocesamiento permite obtener precisión centimétrica en distancias de hasta 25 km o 30 km y precisión submétrica en distancias de hasta 50 km.
            br
            br
            |Aunque es una tecnología obsoleta en la actualidad, puede calcular vectores mediante evaluación estadística y es adecuada para la optimización de redes.
        .col-md-8
          figure
            img(src='@/assets/curso/img50.jpg', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Receptores geodésicos de doble frecuencia
          p Con este tipo de dispositivo, el posprocesamiento del puede alcanzar una precisión subcentimétrica de hasta 10 km y una precisión submétrica de hasta 500 km. Además de la tecnología de posprocesamiento, también se utilizan receptores de doble frecuencia con corrección en tiempo real.
        .col-md-8
          figure
            img(src='@/assets/curso/img51.jpg', alt='Texto que describa la imagen')


</template>

<script>
export default {
  name: 'Tema8',
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
