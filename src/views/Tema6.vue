<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Criterios de selección
    p.mb-5 Los criterios que se deben tener en cuenta el momento de tomar muestras de aguas son la accesibilidad al punto de muestreo, representatividad, seguridad en el punto de muestreo y, además, se debe preparar el muestreo mediante la preparación de los envases, coordinar el transporte, preparación y calibración de los equipos muestreo, preparación de los equipos de seguridad, entre otros, los cuales se describen a continuación:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            .borde-circulo
              figure
                img(src='@/assets/curso/img35.svg', alt='Texto que describa la imagen')
          
        h2.text-center Accesibilidad al punto de muestreo 
        p El punto de muestreo debe estar en un lugar fácilmente accesible con vías de acceso peatonal y vehicular de manera que permitan transportar los materiales y equipos de muestreo.

      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            .borde-circulo2
              figure
                img(src='@/assets/curso/img36.svg', alt='Texto que describa la imagen')
          
        h2.text-center Representatividad en la muestra
        p El punto de entrada debe ser lo más representativo posible de las características generales de la fuente de agua. Esto significa que el agua debe estar completamente mezclada en el punto de entrada y tiene implicaciones específicas para la turbulencia, la velocidad y la física.

</template>

<script>
export default {
  name: 'Tema6',
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
.borde-circulo , .borde-circulo2
  transition: all .3s ease-in-out
  border-radius: 50%

.tarjeta--container
  .tarjeta:hover
    .borde-circulo
      border: 8px solid $color-acento-contenido
      transform: scale(1.1)
    .borde-circulo2
      border: 8px solid $color-secundario
      transform: scale(1.1)
</style>
