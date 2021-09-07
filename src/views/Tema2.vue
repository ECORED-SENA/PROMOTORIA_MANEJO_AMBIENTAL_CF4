<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Protocolo de muestreo
    p.mb-5 Es un documento que se utiliza de guía para que tanto las autoridades ambientales como las demás entidades encargadas, tengan conocimiento de dónde, por qué, para qué, cuándo y qué persona llevará a cabo este monitoreo. Esto permite deducir que, un plan de muestreo adecuadamente diseñado define la probabilidad de detección de microorganismos en un lote, y debe tenerse presente que ningún plan de muestreo puede asegurar la ausencia de un determinado organismo. Lo anterior lleva a que los planes de muestreo deberán ser administrativa y económicamente factibles.
        br
        br
        |Los muestreos de calidad de agua tienen objetivos específicos:
    .row.mb-5.align-items-center
      .col-lg-2.ocultar-md: img(src='@/assets/curso/img3.svg')(data-aos="fade-left")
      .col-lg-10
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Caracterizar la calidad del agua.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Identificar los cambios o tendencias en el tiempo.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Identificar los problemas de calidad del agua específicos existentes o emergentes.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Reunir información para el diseño de programas específicos de prevención o remediación de la contaminación.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Responder a situaciones de emergencia, tales como derrames e inundaciones.
    p.mb-3 En los protocolos para el monitoreo del agua existen diferentes tipos de redes, dentro de las cuales se encuentran estaciones de medición que pueden colaborar entre sí, dentro de las cuales se encuentran:
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.hover.hover-green.h-100
            img(src='@/assets/curso/img4.svg' alt='AvatarTop' style='width:338px').m-auto
            .p-5.text-center
              h2 Redes nacionales
              p Tienen como principal objetivo la recolección de datos representativos en favor de las tendencias de largo plazo junto con las variaciones en las características cualitativas y cuantitativas en todo el país, para con estos datos generar planes y políticas de gestión integral del recurso hídrico en toda la extensión del territorio nacional.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.hover.hover-green.h-100
            img(src='@/assets/curso/img5.svg' alt='AvatarTop' style='width:338px').m-auto
            .p-5.text-center
              h2 Redes regionales
              p Están regidas por las autoridades ambientales, dado que tienen cobertura en sus áreas de jurisdicción en donde se cuantifica y administra el recurso hídrico, se gestiona su uso eficiente y se monitorea su calidad. Estas redes logran obtener datos detallados y precisos que se utilizan como complemento en los datos de la red nacional.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.hover.hover-green.h-100
            img(src='@/assets/curso/img6.svg' alt='AvatarTop' style='width:338px').m-auto
            .p-5.text-center
              h2 Redes locales
              p Se encuentran ubicadas en las zonas de influencia de proyectos en específico y que obedecen a estudios en zonas particulares las cuales presentan necesidades de monitoreo muy puntuales, es por esto por lo que las redes locales son manejadas mayormente por empresas que manejan proyectos hidroeléctricos, de extracciones mineras o de hidrocarburos, sistemas de abastecimiento y consultoras.
</template>

<script>
export default {
  name: 'Tema2',
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
