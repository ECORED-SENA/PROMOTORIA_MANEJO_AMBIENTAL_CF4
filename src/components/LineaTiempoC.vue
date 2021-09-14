<template lang="pug">
.linea-tiempo-a
  .linea-tiempo-a__row(
    v-for="(item,index) of datos"
    :ref="'linea-tiempo-item-'+index"
  )
    .linea-tiempo-a__content
      .linea-tiempo-a__text
        .linea-tiempo-a__text__container.back-linea.py-lg-3.px-lg-5.p-4
          h5.mb-2 {{item.titulo}}
          span(v-html="item.texto")

    .linea-tiempo-a__content
      .linea-tiempo-a__icon
        .linea-tiempo-a__icon__container
          .container-img-linea
            img(:src="item.icono")
</template>

<script>
export default {
  name: 'LineaTiempoC',
  props: {
    datos: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass">
.linea-tiempo-a.color-secundario
  .linea-tiempo-a__text::before
    background-color: #C3E6E0
    z-index: 999
.linea-tiempo-a::before
  width: 5px
  border-radius: 2px
  background: #FFBB00
.linea-tiempo-a.color-secundario .linea-tiempo-a__row::before
  background-color: #FFBB00
.linea-tiempo-a__row::before
  width: 30px
  height: 30px
.linea-tiempo-a__row::after
  width: 20px
  height: 20px
  background-color: #7AE582
  border: 3px solid #FFF
.linea-tiempo-a__text__container
  display: none
  -webkit-transition: all 0.5s ease-in-out 0s
  -moz-transition: all 0.5s ease-in-out 0s
  transition: all 0.5s ease-in-out 0s
.linea-tiempo-a__row:hover .linea-tiempo-a__icon__container
  background-color: #29B39D
.linea-tiempo-a__row:hover .linea-tiempo-a__icon__container::before
  background-color: #29B39D
.linea-tiempo-a__row:hover::after
  background-color: #29B39D
.linea-tiempo-a__row:hover .linea-tiempo-a__text__container
  display: initial
  -webkit-transition: all 0.5s ease-in-out 0s
  -moz-transition: all 0.5s ease-in-out 0s
  transition: all 0.5s ease-in-out 0s
.linea-tiempo-a__row:hover .linea-tiempo-a__text__container
    display: initial
    transition: all 0.5s ease-in-out 0s
    background-color: #C3E6E0
.linea-tiempo-a__icon img
  width: 112px
</style>
