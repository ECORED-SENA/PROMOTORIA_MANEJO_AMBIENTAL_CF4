<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Equipos e instrumentos
    .row.mb-5
      .col-lg-7
        .cajon-b.color-primario.abajo-derecha.p-3.mb-5
          h2.h2.mb-0.fw-normal En el muestreo de aguas se deben tener en cuenta los tipos de equipos, su uso, mantenimiento, almacenamiento, transporte, entre otros. Para iniciar con el recorrido de recolección de las muestras es necesario preparar las botellas de muestreo y el análisis que se va a llevar a cabo en el sitio de muestreo, las herramientas a emplear y elementos necesarios para desarrollar el trabajo.
            br
            br
            |Los equipos de muestreo son un kit de instrumentos que pueden utilizarse ya sea para realizar un análisis químico, biológico o bacteriológico; así como otros que permiten realizar la medición del nivel de agua, caudales máximos, mínimos, etc.
      .col-lg-5: img(src='@/assets/curso/img37.jpg')(data-aos="fade-left")
    p.mb-5 Los elementos que se deben alistar previamente al inicio del recorrido para muestreo de aguas son:
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
    h2.text-center Equipos e instrumentos
    LineaTiempoC.color-secundario.mb-5(:datos="datosLineaTiempoC")
    #t_7_1.titulo-segundo
      h2 7.1 Fichas técnicas 
    p.mb-5 Permiten conocer las características de las herramientas, y estas se pueden clasificar por tipo, marca y especificaciones, incluso, en ella se pueden especificar la forma en la cual se realizan los mantenimientos correspondientes. En el material complementario será posible conocer algunas de estas fichas que posibilitan la toma de diferentes muestras. 
    #t_7_2.titulo-segundo
      h2 7.2 Manuales técnicos 
    p.mb-5 Permiten proporcionar las pautas de configuración y la lógica con la que se ha desarrollado una aplicación, la cual se sabe que es propia de cada programador; por lo que se considera necesario ser documentada. La documentación deberá tener en cuenta las siguientes características:
    .row.mb-5.align-items-center
      .col-lg-3.ocultar-md: img(src='@/assets/curso/img75.svg')(data-aos="fade-left")
      .col-lg-9
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Propiedades físicas, químicas y biológicas aceptables del agua para uso humano.

          li 
            .lista-ol--cuadro__vineta
              span 2
            | Determinación de los parámetros de calidad del agua para prevenir peligros potenciales.

          li 
            .lista-ol--cuadro__vineta
              span 3
            | Controla la calidad, cantidad y continuidad del agua suministrada y consumida por los usuarios.

          li 
            .lista-ol--cuadro__vineta
              span 4
            | Efectividad de las estrategias de seguimiento y gestión del control de calidad de los recursos.

          li 
            .lista-ol--cuadro__vineta
              span 5
            | Riesgo potencial para la salud humana si los procesos no se gestionan correctamente. 
    p.mb-5 Además, se debe considerar que tenga:
    .row.justify-content-center.mb-3(data-aos="zoom-in-up")
      .col-lg-5
        .tarjeta-avatar-b.mb-3.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/76.svg' alt='AvatarTop')
          .tarjeta.color-primario-claro.align-items-center.d-flex
            .p-4
              h3 Ubicación
              p Dónde, cuándo, dónde y cómo tomar la muestra.
      .col-lg-5
        .tarjeta-avatar-b.mb-3.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/77.svg' alt='AvatarTop')
          .tarjeta.color-primario-claro.align-items-center.d-flex
            .p-4
              h3 Equipo de muestreo
              p.mb-0 Condiciones experimentales, mantenimiento y calibración del según el análisis realizado.
    .row.justify-content-center.mb-3(data-aos="zoom-in-up")
      .col-lg-5
        .tarjeta-avatar-b.mb-3.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/78.svg' alt='AvatarTop')
          .tarjeta.color-primario-claro.align-items-center.d-flex
            .p-4
              h3 Procedimiento
              p.mb-0 Método de muestreo, frecuencia de muestreo, número de muestras. 
      .col-lg-5
        .tarjeta-avatar-b.mb-3.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/79.svg' alt='AvatarTop')
          .tarjeta.color-primario-claro.align-items-center.d-flex
            .p-4
              h3 Recipiente de muestreo
              p.mb-0 Tipo, capacidad, identificación y almacenamiento.
    .row.justify-content-center.mb-5(data-aos="zoom-in-up")
      .col-lg-5
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/80.svg' alt='AvatarTop')
          .tarjeta.color-primario-claro.align-items-center.d-flex
            .p-4
              h3 Almacenamiento de muestras
              p.mb-0 Procesamiento de análisis previo.
      .col-lg-5
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/81.svg' alt='AvatarTop')
          .tarjeta.color-primario-claro.align-items-center.d-flex
            .p-4
              h3 Requisitos identificación
              p.mb-0 Etiquetado y muestra.
    .row.justify-content-center.mb-5(data-aos="zoom-in-up")
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          p Los materiales métodos empleados en la toma de muestras de agua van acorde con el tipo de muestra a tomar, el lugar y los parámetros requeridos para realizar la medición, es importante tener en cuenta la ficha técnica de cada uno de estos al momento de utilizarlos.
</template>

<script>
import LineaTiempoC from '../components/LineaTiempoC'
export default {
  name: 'Tema7',
  components: {
    LineaTiempoC,
  },
  data: () => ({
    datosLineaTiempoC: [
      {
        icono: require('@/assets/curso/img38.svg'),
        texto:
          'Cronómetro para medir los tiempos de drenaje de los puntos de muestreo. ',
      },
      {
        icono: require('@/assets/curso/img39.svg'),
        texto:
          'Recipientes aforados (baldes de 10 o 20 litros con graduaciones de 1 litro). ',
      },
      {
        icono: require('@/assets/curso/img40.svg'),
        texto:
          'Termómetros para la toma de temperatura del agua y del ambiente. ',
      },
      {
        icono: require('@/assets/curso/img41.svg'),
        texto:
          'Vasos de vidrio para la inspección visual de la muestra y para allí mismo degustar y olfatear la muestra de agua, con el fin de analizar sus características de sabor y olor. ',
      },
      {
        icono: require('@/assets/curso/img42.svg'),
        texto:
          'Equipo de campo para la determinación de pH, cloro, color aparente, turbiedad y conductividad específica (eléctrica).',
      },
      {
        icono: require('@/assets/curso/img43.svg'),
        texto:
          'Reactivos químicos para las determinaciones colorimétricas de pH, cloro y medios de preservación de muestras. ',
      },
      {
        icono: require('@/assets/curso/img44.svg'),
        texto: 'Manual de operación y calibración.',
      },
      {
        icono: require('@/assets/curso/img45.svg'),
        texto:
          'Los analizadores amperimétricos de campo como el pHmetro, el turbidímetro y el conductímetro, aun cuando son aparatos sencillos deberán calibrarse diariamente al inicio del primer muestreo. ',
      },
      {
        icono: require('@/assets/curso/img46.svg'),
        texto:
          'Dotación apropiada para trabajar a la intemperie y en vías públicas como: <b>uniforme de trabajo, casco, botas, guantes y cintas o conos reflectivos</b> para aislar los puntos de muestreo, en especial cuando se operen hidrantes. ',
      },
    ],
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
.linea-tiempo-a__icon
  img
    width: 120px !important
.tarjeta-avatar-b .tarjeta
  background-color: #C3E6E0 !important
</style>
