<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 10
      h1 Equipos de muestreo
    p.mb-5 Para el muestreo de aguas se manejan una gran cantidad de equipos, pero estos se dividen según el lugar en donde se está tomando esta muestra, bien sea en aguas superficiales o en aguas subterráneas, etc. A continuación, se conocerán algunos de estos equipos según su lugar de uso.
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-primario-claro.p-4(titulo="Bomba peristáltica")
        .row
          .col-xl-6
            h4 Bomba peristáltica
            p Son diseñadas especialmente para utilizarse en el campo, disponen de certificación y son impermeables. Son aparatos de muestreo de líquidos y gases muy fiables que se pueden utilizar en todas las posiciones y han sido desarrollados para un uso profesional a largo plazo en circunstancias desfavorables.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/82.jpg', alt='Texto que describa la imagen')
      .tarjeta.color-primario-claro.p-4(titulo="Bomba de bolas motorizada")
        .row
          .col-xl-6
            h4 Bomba de bolas motorizada
            p Permiten bombear agua subterránea que deba ser analizada en el marco de un análisis medioambiental. Las bombas de bolas están formadas por un tubo con una válvula de retención con válvula esférica en el extremo inferior.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/83.jpg', alt='Texto que describa la imagen')
      .tarjeta.color-primario-claro.p-4(titulo="Conjunto de bomba sumergible")
        .row
          .col-xl-6
            h4 Conjunto de bomba sumergible
            p Permite bombear un punto de medición rápidamente. Si se configura a baja capacidad de bombeo, la bomba también se puede utilizar para tomar muestras.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/84.jpg', alt='Texto que describa la imagen')
      .tarjeta.color-primario-claro.p-4(titulo="Muestreador de agua Van Dorn")
        .row
          .col-xl-6
            h4 Muestreador de agua Van Dorn
            p Sirve para tomar muestras de aguas abiertas, adicional es adecuado para tomar muestras en aguas costeras y para efectuar análisis de metales pesados. 
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/85.jpg', alt='Texto que describa la imagen')
      .tarjeta.color-primario-claro.p-4(titulo="Muestreador de agua Kemmerer")
        .row
          .col-xl-6
            h4 Muestreador de agua Kemmerer
            p Se utiliza para tomar muestras generales en lagos, canales, balsas y en el mar. Está compuesto exclusivamente por componentes de plástico, por lo que hay una protección de la muestra entre en contacto con metal.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/86.jpg', alt='Texto que describa la imagen')
      .tarjeta.color-primario-claro.p-4(titulo="Muestreador continuo portátil automático")
        .row
          .col-xl-6
            h4 Muestreador continuo portátil automático
            p Se puede utilizar para tomar muestras de forma continua o a intervalos configurados de antemano en arroyos, ríos, lagos y otras aguas abiertas. Además, es posible recoger muestras de manera secuencial o de forma compuesta, dependiendo del tiempo, la velocidad de la corriente o las circunstancias meteorológicas.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/87.jpg', alt='Texto que describa la imagen')
      .tarjeta.color-primario-claro.p-4(titulo="Disco de Secchi")
        .row
          .col-xl-6
            h4 Disco de Secchi
            p Sistema sencillo y poco preciso que permite medir la turbidez del agua. El disco se hace descender en el agua atado a un hilo. En cuanto ya no es visible, se lee la profundidad que indica la marca del hilo.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/88.jpg', alt='Texto que describa la imagen')
      .tarjeta.color-primario-claro.p-4(titulo="Recipiente de detección de cieno")
        .row
          .col-xl-6
            h4 Recipiente de detección de cieno
            p Permite determinar la profundidad de una capa de residuos o sedimentos. Dispone de señal acústica y funciona siguiendo un principio óptico.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/89.jpg', alt='Texto que describa la imagen')
      .tarjeta.color-primario-claro.p-4(titulo="Dragas Van Veen")
        .row
          .col-xl-6
            h4 Dragas Van Veen
            p Se utilizan para tomar muestras movidas del fondo de lagos, ríos, etc. Las mandíbulas se abren en la superficie y se fijan mediante un gancho, con ello, la draga se sumerge en el agua. En cuanto las mandíbulas tocan el fondo, el gancho abre las bocas. Mientras se recoge la cuerda, las mandíbulas se cierran por sí solas debido al efecto palanca.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/90.jpg', alt='Texto que describa la imagen')
      .tarjeta.color-primario-claro.p-4(titulo="Pluviómetro ")
        .row
          .col-xl-6
            h4 Pluviómetro 
            p Sirve para medir la cantidad de agua precipitada en un lugar determinado, ya que recoge el agua atmosférica en sus diversos estados; el total, medido por la altura en milímetros se denomina precipitación. Para los estados sólidos, las mediciones se llevan a cabo una vez alcanzado el estado líquido.

          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/91.jpg', alt='Texto que describa la imagen')
      .tarjeta.color-primario-claro.p-4(titulo="Pluviógrafo")
        .row
          .col-xl-6
            h4 Pluviógrafo
            p Permiten bombear agua subterránea que deba ser analizada en el marco de un análisis medioambiental. Las bombas de bolas están formadas por un tubo con una válvula de retención con válvula esférica en el extremo inferior.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/92.jpg', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema10',
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
.color-primario-claro
  background-color: #DEF3F0
.tabs-a
  .tabs-a__tab
    line-height: 0 !important
    padding: 0 !important
</style>
