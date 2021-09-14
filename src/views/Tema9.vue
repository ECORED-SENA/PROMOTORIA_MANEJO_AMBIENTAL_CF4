<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Materiales y elementos para el muestreo
    p.mb-5 Para un adecuado muestreo de agua es necesario utilizar los materiales que se describirán a continuación, cabe resaltar que estos son utilizados en la mayoría de los casos para la toma de muestras de aguas residuales.
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA
        .row
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img52.svg' alt='AvatarTop').mb-3
                h4.text-center Geoposicionador.
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img53.svg' alt='AvatarTop').mb-3
                h4.text-center Altímetro.
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img54.svg' alt='AvatarTop').mb-3
                h5.text-center Equipos portátiles para mediciones de temperatura, pH y conductividad eléctrica.
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img55.svg' alt='AvatarTop').mb-3
                h4.text-center Muestreador (botella Van Dorn, Kemmerer o balde).
        .row
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img56.svg' alt='AvatarTop').mb-3
                h4.text-center Baldes plásticos de 10 L de capacidad.
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img57.svg' alt='AvatarTop').mb-3
                h4.text-center Tubo plástico para homogeneización de la muestra compuesta.
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img58.svg' alt='AvatarTop').mb-3
                h5.text-center Probeta plástica graduada de 1.000 mL.
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img59.svg' alt='AvatarTop').mb-3
                h4.text-center Cronómetro.
        .row
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img60.svg' alt='AvatarTop').mb-3
                h4.text-center Neveras de icopor o poliuretano con suficientes bolsas de hielo para mantener una temperatura cercana a 4°C.
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img61.svg' alt='AvatarTop').mb-3
                h4.text-center Frasco lavador.
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img62.svg' alt='AvatarTop').mb-3
                h5.text-center Toalla de papel absorbente.
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img63.svg' alt='AvatarTop').mb-3
                h4.text-center Cinta pegante y de enmascarar.
        .row
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img64.svg' alt='AvatarTop').mb-3
                h4.text-center Bolsa para basura.
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img65.svg' alt='AvatarTop').mb-3
                h4.text-center Esfero y marcador de tinta indeleble.
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img66.svg' alt='AvatarTop').mb-3
                h5.text-center Tabla portapapeles.
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img67.svg' alt='AvatarTop').mb-3
                h4.text-center Guantes.
        .row
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img68.svg' alt='AvatarTop').mb-3
                h4.text-center Agua destilada.
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img69.svg' alt='AvatarTop').mb-3
                h4.text-center Recipientes plásticos y de vidrio.Varía según requerimientos de análisis.
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img70.svg' alt='AvatarTop').mb-3
                h5.text-center Papel indicador universal, para verificación de pH de preservación.
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img71.svg' alt='AvatarTop').mb-3
                h4.text-center Overol o ropa de trabajo cómoda y que le brinde protección adecuada.
        .row.justify-content-center
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img72.svg' alt='AvatarTop').mb-3
                h4.text-center Máscara respiradora con filtros para ácidos y vapores orgánicos.
          .col-lg-3
            .tarjetas-imagen.p-5
              .img__contenido
                img(src='@/assets/curso/img73.svg' alt='AvatarTop').mb-3
                h4.text-center Botas de caucho.
    p.mb-5 Los pasos que se describen a continuación pertenecen al procedimiento que se debe tener en cuenta al momento de tomar una muestra de agua residual.
    .row.mb-5.justify-content-center.bg-img.py-5

      .col-lg-6
        .tarjeta.blanco-alfa.p-5
          PasosA.color-acento-contenido.mb-5(tipo="n")
            div
              p Organice las botellas rotuladas, los reactivos, formatos e insumos que va a necesitar para el muestreo.
            div
              p Cuando llegue al punto de muestreo, analice primero las condiciones del lugar.
            div
              p Saque todo el material correspondiente al sitio.
            div
              p Realice el registro fotográfico pertinente.
            div
              p Tome las medidas de georreferenciación.
            div
              p Calibre el pHmetro y conductímetro siguiendo los procedimientos que se describen en el manual de cada elemento.
            div
              p Mida el caudal del efluente preferiblemente por el método volumétrico manual, empleando el cronómetro y un balde.
            div
              p Tome la muestra respectiva.
            div
              p Realice la rotulación de la muestra con los datos específicos.
            div
              p Conserve la muestra en un ambiente seguro.
            div
              p Transporte al laboratorio para su análisis.
</template>

<script>
export default {
  name: 'Tema9',
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
.tarjetas-imagen
  background-color: $color-acento-contenido
  height: 100%
  img
    width: 125px
    margin: 0 auto
.bg-img
  background-image: url('../assets/curso/img74.svg')
  background-repeat: no-repeat
  background-position: center
  background-size: cover
.blanco-alfa
  background-color: rgba(255, 255, 255, 0.7)
</style>
