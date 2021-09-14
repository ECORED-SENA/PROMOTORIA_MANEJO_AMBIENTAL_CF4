<template lang="pug">
.banner-principal
  .container.tarjeta(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    .row.banner-principal__row
      .col-lg-7.col-xxl-5.ps-4.ps-sm-5.py-4.py-sm-5.banner-principal__info
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .banner-principal__descripcion
          p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Ver más
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
        .contenedor-imagenes
          .imagen_flotante_1: img(src='@/assets/curso/float1.svg' style='width: 50px')
          .imagen_flotante_2: img(src='@/assets/curso/float1.svg' style='width: 35px')
          .imagen_flotante_3: img(src='@/assets/curso/float1.svg' style='width: 20px')
        img(:src="globalData.imagenBannerPrincipal")
</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text

  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    margin-bottom: 20px

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 3rem!important

  &__img
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important
.contenedor-imagenes
  position: relative
.imagen_flotante
  &_1
    animation: opacity 5s ease-in-out infinite , rain 5s ease-in-out infinite
    position: absolute
    top: 5px
    left: 0px
  &_2
    animation: opacity 3s ease-out infinite , rain 3s linear infinite
    position: absolute
    top: 0px
    left: 400px
    transform: scale(-0.8)
  &_3
    animation: opacity 2s ease-out infinite , rain 2s linear infinite
    top: 170px
    left: 230px
    position: absolute
  &_4
    animation: opacity 4s ease-out infinite , rain 4s linear infinite
    position: absolute
    top: 100px
    left: 360px
  &_5
    animation: opacity 6s ease-out infinite , rain 6s linear infinite
    position: absolute
    top: 229px
    left: 500px
  &_6
    animation: opacity 2s ease-out infinite , rain 2s linear infinite
    position: absolute
    bottom: px
    rigth: 0px
@keyframes rain
	0%
		transform: translateY(0px)

	50%
		transform: translateY(80px)

	100%
		transform: translateY(80px)
@keyframes opacity
	0%
    opacity: 1
	100%
    opacity: 0

.rain__drop
  animation-delay: calc(var(--d) * 3s)
  animation-duration: calc(var(--a) * 3s)
  animation-iteration-count: infinite
  animation-name: drop
  animation-timing-function: linear
  height: 60px
  left: calc(var(--x) * 1%)
  position: absolute
  top: calc((var(--y) + 0) * -1px)

  path
    fill: #a1c6cc
    opacity: var(--o)
    transform: scaleY(calc(var(--s) * 1.5))

@keyframes drop
  90%
    opacity: 1
  100%
    opacity: 0
    transform: translateY(40vh)
</style>
