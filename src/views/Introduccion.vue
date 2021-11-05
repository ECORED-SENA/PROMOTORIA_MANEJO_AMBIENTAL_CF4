<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5.align-items-center
      .col-lg-7
        .cajon-b.color-primario.abajo-derecha.p-3.mb-5
          h2.h1.mb-0.fw-normal De los <b>recursos naturales más importantes</b> es el agua, por ello, este componente permitirá conocer la importancia de monitorear su calidad. 
      .col-lg-5: img(src='@/assets/curso/img0.svg')
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nEMlXW26m2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
