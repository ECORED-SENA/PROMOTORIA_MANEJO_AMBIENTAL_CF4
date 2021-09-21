export default {
  global: {
    componenteFormativo: 'Monitoreo de calidad de agua',
    descripcionCurso:
      'En este componente se abordan temáticas que permiten realizar una planeación y posterior toma de muestras de agua para el monitoreo de su calidad, así como la descripción de diversas técnicas y equipos que se utilizan para el muestreo de agua.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Monitoreo de agua',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Protocolo de muestreo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plan de muestreo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Identificación espacial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Coordenadas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Criterios de selección',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Equipos e instrumentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Fichas técnicas',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Manuales técnicos',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Equipos satelitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Materiales y elementos para el muestreo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Equipos de muestreo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Eijkelkamp Agrisearch. (2021). Catálogo de equipos para gestión de las aguas.',
      link:
        'https://www.eijkelkamp.com/files/media/downloads/p055scatlogodeequiposparagestindelasaguas.pdf',
    },
    {
      referencia: 'Ideam, Invemar. (2017). Protocolo monitoreo de agua.',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/023773/PROTOCOLO_MONITOREO_AGUA_IDEAM.pdf ',
    },
    {
      referencia:
        'Noticias de Seguridad Informática. (2015). Seguridad de equipos satelitales de navegación y comunicación. ',
      link:
        'https://noticiasseguridad.com/importantes/seguridad-de-equipos-satelitales-de-navegacion-y-comunicacion/ ',
    },
    {
      referencia:
        'Ortiz. J., (2007). Manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorio.',
      link:
        'https://www.academia.edu/24503971/Manual_intrucciones_toma_preservaci%C3%B3n_y_transporte_de_muestras_agua ',
    },
  ],
  glosario: [
    {
      termino: 'Coordenadas',
      significado:
        'los sistemas de coordenadas son uno o más números que se utilizan para ubicar la posición de un punto u objeto geométrico, se les puede representar mediante letras como X y Y.',
    },
    {
      termino: 'Equipos de muestreo',
      significado:
        'para el muestreo de aguas se manejan una gran cantidad de equipos, pero estos se dividen según el lugar en donde se está tomando esta muestra, bien sea en aguas superficiales o en aguas subterráneas, etc.',
    },
    {
      termino: 'Equipos satelitales',
      significado:
        'son instrumentos que se conectan directamente a un satélite, permitiendo posicionar cualquier objeto sobre la tierra con una precisión de hasta centímetros.',
    },
    {
      termino: 'GPS',
      significado:
        'sistema satelital que localiza puntos en cualquier momento y lugar de la tierra con una precisión de hasta milímetros, dependiendo del equipo utilizado. ',
    },
    {
      termino: 'Identificación espacial',
      significado:
        'la identificación espacial es establecer la localización en el espacio de un objeto dentro de un sistema de coordenadas determinado.',
    },
    {
      termino: 'Redes regionales',
      significado:
        'son aquellas que están regidas por las autoridades ambientales, dado que tienen cobertura en sus áreas de jurisdicción en donde se cuantifica y administra el recurso hídrico, se gestiona su uso eficiente y se monitorea su calidad.      ',
    },
    {
      termino: 'Tipos de coordenadas',
      significado:
        'los sistemas de coordenadas horizontales pueden ser de tres tipos, geográficas, proyectadas y locales, mientras que los sistemas de coordenadas verticales localizan la altura o la profundidad de los datos.',
    },
  ],
  complementario: [
    {
      texto:
        'Noticias de seguridad informática. (s.f.). Seguridad de equipos satelitales de navegación y comunicación.',
      tipo: 'Sitio Web',
      link:
        'https://noticiasseguridad.com/importantes/seguridad-de-equipos-satelitales-de-navegacion-y-comunicacion/',
    },
    {
      texto:
        'Eijelkamp Agrisearch Equipment. (s.f.). Catálogo de equipos para gestión de las aguas. ',
      tipo: 'PDF',
      descarga: 'downloads/p055scatlogodeequiposparagestindelasaguas.pdf',
    },
    {
      texto:
        'Grupo Salud Ambiental. (2007). Manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorio.',
      tipo: 'PDF',
      descarga: 'downloads/2011Manualtomademuestrasagua.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ana María Buitrago Toro',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Víctor Julián Ardila',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah Gamboa ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
