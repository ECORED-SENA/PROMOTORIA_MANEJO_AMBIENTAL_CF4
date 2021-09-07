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
          - const droplets = 20
            .rain
              - for (let r = 0; r < droplets; r++)
                svg.rain__drop(preserveAspectRatio="xMinYMin", viewBox='0 0 5 50', style=`--x: ${Math.floor(Math.random() * 100)}; --y: ${Math.floor(Math.random() * 100)}; --o: ${Math.random()}; --a: ${Math.random() + 0.5}; --d: ${(Math.random() * 2) - 1}; --s: ${Math.random()}`)
                  path(stroke='none', d="M 2.5,0 C 2.6949458,3.5392017 3.344765,20.524571 4.4494577,30.9559 5.7551357,42.666753 4.5915685,50 2.5,50 0.40843152,50 -0.75513565,42.666753 0.55054234,30.9559 1.655235,20.524571 2.3050542,3.5392017 2.5,0 Z")
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

body
  background-color: #6c78a9
  display: flex
  align-items: center
  justify-content: center

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
