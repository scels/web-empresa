export const locales = ["es", "ca", "en"] as const;

export type Locale = (typeof locales)[number];
export type LocalizedText = Record<Locale, string>;

export const defaultLocale: Locale = "es";

export function isLocale(value: string | undefined): value is Locale {
  return locales.some((locale) => locale === value);
}

export const dictionaries = {
  es: {
    site: {
      brand: "Xavier Cels",
      title: "Xavier Cels | Cerámica",
      description: "Obra cerámica de Xavier Cels.",
    },
    navigation: {
      label: "Navegación principal",
      home: "Inicio",
      pieces: "Piezas",
      allPieces: "Todas las piezas",
      categories: "Categorías",
      workshop: "El taller",
      contact: "Contacto",
      language: "Idioma",
      footer: "Navegación del pie de página",
    },
    home: {
      heroAlt:
        "Centro de mesa de gres de bordes curvados con una vela blanca, sobre una mesa baja de un salón luminoso",
      heroImage: "/images/xavier-home-hero.webp",
      kicker: "Gres hecho a mano",
      title: "Cerámica que nace de la tierra",
      intro:
        "Piezas de gres de alta temperatura, modeladas una a una y esmaltadas con fórmulas propias. Vajilla para usar cada día y piezas para mirar despacio.",
      explore: "Explorar las piezas",
      heroIndex: "01 / Xavier Cels",
      workshopEyebrow: "Proceso y taller",
      workshopTitle: "Del taller a tu mesa",
      workshopLink: "Conoce el proceso",
      categoriesTitle: "Un mismo barro, distintas formas de vivirlo.",
      categoriesIntro: "Vajilla para el día a día, piezas decorativas y encargos: gres trabajado a mano y esmaltes de formulación propia.",
      selection: "Una pequeña selección",
      selectionTitle: "Objetos para quedarse.",
      allPieces: "Ver todas las piezas",
      storyEyebrow: "La historia",
      storyTitle: "Hecho despacio, cerca de la naturaleza",
      storyBody:
        "Trabajo en un entorno rural, rodeado de bosque y de tierra. De ahí salen los colores de mis piezas: tonos oscuros, mates y terrosos, esmaltes que recuerdan a la ceniza y grietas que no se esconden. Cada pieza pasa por mis manos de principio a fin, y por eso no hay dos iguales.",
      storyLink: "Asómate al proceso",
      storyAlt: "Cuenco de gres recién modelado en el torno",
      storyImage: "/images/pieza_modelado_en_torno.jpeg",
    },
    shop: {
      eyebrow: "Obra cerámica de Xavier Cels",
      title: "Piezas para vivirlas.",
      intro: "Una selección de piezas cerámicas creadas por Xavier Cels.",
      itemCount: "piezas",
      note: "Piezas creadas por Xavier Cels",
      collectionAlt: "Colección de cerámica artesanal",
      categoryIntro: "Piezas de esta categoría, hechas una a una en el taller.",
      empty: "No hay piezas en esta categoría por ahora.",
      emptyCatalog: "Aún no hay piezas publicadas.",
    },
    product: {
      back: "Volver a las piezas",
      handmade:
        "Cada pieza se trabaja a mano, por eso las pequeñas variaciones de forma y esmalte forman parte de su carácter.",
      inquire: "Consultar esta pieza",
      availability: "Escríbeme para consultar disponibilidad y próximos encargos.",
      status: {
        available: "Disponible",
        sold: "Vendida",
        madeToOrder: "Bajo encargo",
      },
      price: "Precio orientativo",
      dimensions: "Medidas",
      material: "Material",
      technique: "Técnica",
      open: "Descubrir",
      view: "Ver",
    },
    workshop: {
      eyebrow: "El proceso de Xavier Cels",
      title: "Taller Libélula",
      intro:
        "Taller Libélula es el espacio de trabajo compartido donde Xavier Cels desarrolla su obra cerámica. Aquí nacen la vajilla de uso diario, las piezas decorativas y los encargos a medida.",
      imageAlt: "Interior de Taller Libélula: torno, horno, mesas de trabajo y estanterías",
      image: "/images/taller_entrada.jpeg",
      location: "",
      spaceTitle: "Un lugar para trabajar con la materia.",
      spaceBody: "Bajo las vigas de madera, las mesas de trabajo conviven con el torno, las herramientas de modelado y las estanterías. El horno y los recipientes de esmalte forman parte de este espacio de producción, donde cada pieza pasa por distintas etapas antes de estar terminada.",
      piecesTitle: "El trabajo del taller, en cada pieza.",
      piecesBody: "Boles, platos y otras formas reúnen lo que se prueba aquí: proporciones, texturas y combinaciones de esmaltes. El espacio compartido permite trabajar las piezas y observar cómo cambian con el secado y el fuego.",
      piecesAlt: "Boles de gres con diferentes formas y esmaltes en Taller Libélula",
      piecesDetailAlt: "Platos y boles de gres con esmaltes de distintos colores",
      processEyebrow: "El proceso",
      processTitle: "Barro, tiempo y fuego",
      paragraphOne:
        "Trabajo con gres cocido a más de 1.200 °C. A esa temperatura el barro vitrifica y la pieza se vuelve densa y resistente, preparada para el uso diario.",
      paragraphTwo:
        "Los esmaltes los formulo yo mismo. Superpongo capas para que reaccionen entre ellas en el horno y den texturas mates, craquelados y efectos de ceniza. Parte del resultado lo decide el fuego: por eso cada pieza es única.",
      discover: "Descubrir las piezas",
      stepsLabel: "Cómo nace una pieza",
      steps: [
        { title: "Modelado", body: "Cada pieza se modela a mano, una a una." },
        {
          title: "Secado",
          body: "Se seca lentamente a la sombra, durante días, para evitar tensiones y grietas no deseadas.",
        },
        {
          title: "Primera cocción",
          body: "Una primera cocción endurece la pieza y la prepara para recibir el esmalte.",
        },
        {
          title: "Esmaltado",
          body: "Aplico esmaltes de formulación propia, a menudo en varias capas superpuestas.",
        },
        {
          title: "Alta temperatura",
          body: "La cocción final, por encima de 1.200 °C, vitrifica el gres y revela el color definitivo.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Contacto",
      intro:
        "¿Quieres una pieza, un encargo a medida o simplemente saber más? Escríbeme y te responderé lo antes posible.",
      panelEyebrow: "Encargos",
      panelTitle: "Vajilla a medida",
      panelBody:
        "Hago vajillas completas para bodas, restaurantes y casas que quieren una mesa con carácter. Cuéntame qué tienes en mente: cuántas piezas, qué colores y para cuándo las necesitas, y preparamos juntos una propuesta.",
      link: "Escríbeme por Instagram",
      linkUrl: "https://www.instagram.com/xavicels_ceramics/",
      channelsLabel: "Formas de contactar",
      instagramNote: "Conoce las últimas piezas y escríbeme por mensaje directo.",
      whatsappNote: "Cuéntame qué pieza o encargo tienes en mente.",
      phoneLabel: "Teléfono",
      phoneNote: "Si prefieres hablar, puedes llamarme directamente.",
      imageAlt: "Proceso de elaboración de boles de gres en el taller",
      image: "/images/collage_proceso_bol.jpeg",
    },
    footer: {
      tagline: "Hecho a mano, pieza a pieza.",
      descriptor: "Cerámica artesanal",
    },
  },
  ca: {
    site: {
      brand: "Xavier Cels",
      title: "Xavier Cels | Ceràmica",
      description: "Obra ceràmica de Xavier Cels.",
    },
    navigation: {
      label: "Navegació principal",
      home: "Inici",
      pieces: "Peces",
      allPieces: "Totes les peces",
      categories: "Categories",
      workshop: "El taller",
      contact: "Contacte",
      language: "Idioma",
      footer: "Navegació del peu de pàgina",
    },
    home: {
      heroAlt:
        "Centre de taula de gres de vores corbades amb una espelma blanca, sobre una taula baixa d'una sala lluminosa",
      heroImage: "/images/xavier-home-hero.webp",
      kicker: "Gres fet a mà",
      title: "Ceràmica que neix de la terra",
      intro:
        "Peces de gres d'alta temperatura, modelades una a una i esmaltades amb fórmules pròpies. Vaixella per fer servir cada dia i peces per mirar-les a poc a poc.",
      explore: "Explora les peces",
      heroIndex: "01 / Xavier Cels",
      workshopEyebrow: "Procés i taller",
      workshopTitle: "Del taller a la teva taula",
      workshopLink: "Coneix el procés",
      categoriesTitle: "Un mateix fang, diferents maneres de viure'l.",
      categoriesIntro: "Vaixella per al dia a dia, peces decoratives i encàrrecs: gres treballat a mà i esmalts de formulació pròpia.",
      selection: "Una petita selecció",
      selectionTitle: "Objectes per quedar-s'hi.",
      allPieces: "Veure totes les peces",
      storyEyebrow: "La història",
      storyTitle: "Fet a poc a poc, a prop de la natura",
      storyBody:
        "Treballo en un entorn rural, envoltat de bosc i de terra. D'aquí surten els colors de les meves peces: tons foscos, mats i terrosos, esmalts que recorden la cendra i esquerdes que no s'amaguen. Cada peça passa per les meves mans de principi a fi, i per això no n'hi ha dues d'iguals.",
      storyLink: "Descobreix el procés",
      storyAlt: "Bol de gres acabat de modelar al torn",
      storyImage: "/images/pieza_modelado_en_torno.jpeg",
    },
    shop: {
      eyebrow: "Obra ceràmica de Xavier Cels",
      title: "Peces per viure-les.",
      intro: "Una selecció de peces ceràmiques creades per Xavier Cels.",
      itemCount: "peces",
      note: "Peces creades per Xavier Cels",
      collectionAlt: "Col·lecció de ceràmica artesanal",
      categoryIntro: "Peces d'aquesta categoria, fetes una a una al taller.",
      empty: "Ara mateix no hi ha peces en aquesta categoria.",
      emptyCatalog: "Encara no hi ha peces publicades.",
    },
    product: {
      back: "Torna a les peces",
      handmade:
        "Cada peça es treballa a mà; per això les petites variacions de forma i esmalt formen part del seu caràcter.",
      inquire: "Consulta aquesta peça",
      availability: "Escriu-me per consultar-ne la disponibilitat i els propers encàrrecs.",
      status: {
        available: "Disponible",
        sold: "Venuda",
        madeToOrder: "Per encàrrec",
      },
      price: "Preu orientatiu",
      dimensions: "Mides",
      material: "Material",
      technique: "Tècnica",
      open: "Descobreix",
      view: "Veure",
    },
    workshop: {
      eyebrow: "El procés de Xavier Cels",
      title: "Taller Libélula",
      intro:
        "Taller Libélula és l'espai de treball compartit on Xavier Cels desenvolupa la seva obra ceràmica. Aquí neixen la vaixella d'ús diari, les peces decoratives i els encàrrecs a mida.",
      imageAlt: "Interior de Taller Libélula: torn, forn, taules de treball i prestatgeries",
      image: "/images/taller_entrada.jpeg",
      location: "",
      spaceTitle: "Un lloc per treballar amb la matèria.",
      spaceBody: "Sota les bigues de fusta, les taules de treball conviuen amb el torn, les eines de modelatge i les prestatgeries. El forn i els recipients d'esmalt formen part d'aquest espai de producció, on cada peça passa per diferents etapes abans d'estar acabada.",
      piecesTitle: "El treball del taller, en cada peça.",
      piecesBody: "Bols, plats i altres formes reuneixen allò que es prova aquí: proporcions, textures i combinacions d'esmalts. L'espai compartit permet treballar les peces i observar com canvien amb l'assecat i el foc.",
      piecesAlt: "Bols de gres amb diferents formes i esmalts a Taller Libélula",
      piecesDetailAlt: "Plats i bols de gres amb esmalts de diferents colors",
      processEyebrow: "El procés",
      processTitle: "Fang, temps i foc",
      paragraphOne:
        "Treballo amb gres cuit a més de 1.200 °C. A aquesta temperatura el fang vitrifica i la peça es torna densa i resistent, preparada per a l'ús diari.",
      paragraphTwo:
        "Els esmalts els formulo jo mateix. Superposo capes perquè reaccionin entre elles al forn i donin textures mats, craquelats i efectes de cendra. Una part del resultat la decideix el foc: per això cada peça és única.",
      discover: "Descobreix les peces",
      stepsLabel: "Com neix una peça",
      steps: [
        { title: "Modelat", body: "Cada peça es modela a mà, una a una." },
        {
          title: "Assecat",
          body: "S'asseca lentament a l'ombra, durant dies, per evitar tensions i esquerdes no desitjades.",
        },
        {
          title: "Primera cocció",
          body: "Una primera cocció endureix la peça i la prepara per rebre l'esmalt.",
        },
        {
          title: "Esmaltat",
          body: "Aplico esmalts de formulació pròpia, sovint en diverses capes superposades.",
        },
        {
          title: "Alta temperatura",
          body: "La cocció final, per sobre de 1.200 °C, vitrifica el gres i revela el color definitiu.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacte",
      title: "Contacte",
      intro:
        "Vols una peça, un encàrrec a mida o simplement saber-ne més? Escriu-me i et respondré tan aviat com pugui.",
      panelEyebrow: "Encàrrecs",
      panelTitle: "Vaixella a mida",
      panelBody:
        "Faig vaixelles completes per a casaments, restaurants i cases que volen una taula amb caràcter. Explica'm què tens al cap: quantes peces, quins colors i per a quan les necessites, i preparem junts una proposta.",
      link: "Escriu-me per Instagram",
      linkUrl: "https://www.instagram.com/xavicels_ceramics/",
      channelsLabel: "Maneres de contactar",
      instagramNote: "Coneix les últimes peces i escriu-me per missatge directe.",
      whatsappNote: "Explica'm quina peça o encàrrec tens en ment.",
      phoneLabel: "Telèfon",
      phoneNote: "Si prefereixes parlar, pots trucar-me directament.",
      imageAlt: "Procés d'elaboració de bols de gres al taller",
      image: "/images/collage_proceso_bol.jpeg",
    },
    footer: {
      tagline: "Fet a mà, peça a peça.",
      descriptor: "Ceràmica artesanal",
    },
  },
  en: {
    site: {
      brand: "Xavier Cels",
      title: "Xavier Cels | Ceramics",
      description: "Ceramic work by Xavier Cels.",
    },
    navigation: {
      label: "Main navigation",
      home: "Home",
      pieces: "Pieces",
      allPieces: "All pieces",
      categories: "Categories",
      workshop: "The studio",
      contact: "Contact",
      language: "Language",
      footer: "Footer navigation",
    },
    home: {
      heroAlt:
        "Stoneware centrepiece with curved edges holding a white candle, on a coffee table in a bright living room",
      heroImage: "/images/xavier-home-hero.webp",
      kicker: "Handmade stoneware",
      title: "Ceramics born from the earth",
      intro:
        "High-fired stoneware, shaped one piece at a time and finished with glazes of my own. Tableware for every day, and pieces to look at slowly.",
      explore: "Explore the pieces",
      heroIndex: "01 / Xavier Cels",
      workshopEyebrow: "Process and studio",
      workshopTitle: "From the studio to your table",
      workshopLink: "Discover the process",
      categoriesTitle: "One clay, different ways to live with it.",
      categoriesIntro: "Everyday tableware, decorative pieces and commissions: hand-worked stoneware and glazes of my own formulation.",
      selection: "A small selection",
      selectionTitle: "Objects to keep.",
      allPieces: "View all pieces",
      storyEyebrow: "The story",
      storyTitle: "Made slowly, close to nature",
      storyBody:
        "I work in the countryside, surrounded by woods and earth. That is where the colours of my pieces come from: dark, matte, earthy tones, glazes that recall ash, and cracks left in plain sight. Every piece passes through my hands from start to finish, so no two are alike.",
      storyLink: "Take a look at the process",
      storyAlt: "Stoneware bowl freshly shaped on the wheel",
      storyImage: "/images/pieza_modelado_en_torno.jpeg",
    },
    shop: {
      eyebrow: "Ceramic work by Xavier Cels",
      title: "Pieces to live with.",
      intro: "A selection of ceramic pieces created by Xavier Cels.",
      itemCount: "pieces",
      note: "Pieces created by Xavier Cels",
      collectionAlt: "Collection of handmade ceramics",
      categoryIntro: "Pieces in this category, made one at a time in the studio.",
      empty: "There are no pieces in this category right now.",
      emptyCatalog: "There are no published pieces yet.",
    },
    product: {
      back: "Back to all pieces",
      handmade:
        "Each piece is made by hand, so small variations in shape and glaze are part of its character.",
      inquire: "Ask about this piece",
      availability: "Get in touch to ask about availability and future commissions.",
      status: {
        available: "Available",
        sold: "Sold",
        madeToOrder: "Made to order",
      },
      price: "Indicative price",
      dimensions: "Dimensions",
      material: "Material",
      technique: "Technique",
      open: "Discover",
      view: "View",
    },
    workshop: {
      eyebrow: "Xavier Cels' process",
      title: "Taller Libélula",
      intro:
        "Taller Libélula is the shared workspace where Xavier Cels develops his ceramic work. Everyday tableware, decorative pieces and custom commissions take shape here.",
      imageAlt: "Inside Taller Libélula: wheel, kiln, worktables and shelves",
      image: "/images/taller_entrada.jpeg",
      location: "",
      spaceTitle: "A place to work with the material.",
      spaceBody: "Under the wooden beams, worktables sit alongside the wheel, shaping tools and shelves. The kiln and glaze containers are part of this working studio, where every piece goes through several stages before it is finished.",
      piecesTitle: "The work of the studio, in every piece.",
      piecesBody: "Bowls, plates and other forms bring together what is explored here: proportions, textures and combinations of glazes. The shared workspace allows pieces to be worked on and their changes through drying and firing to be observed.",
      piecesAlt: "Stoneware bowls with different shapes and glazes at Taller Libélula",
      piecesDetailAlt: "Stoneware plates and bowls with glazes in different colours",
      processEyebrow: "The process",
      processTitle: "Clay, time and fire",
      paragraphOne:
        "I work with stoneware fired above 1,200 °C. At that temperature the clay vitrifies and each piece becomes dense and durable, ready for everyday use.",
      paragraphTwo:
        "I formulate my own glazes, layering them so they react in the kiln to create matte textures, crackle and ash-like effects. Part of the result is decided by the fire, which is why each piece is unique.",
      discover: "Discover the pieces",
      stepsLabel: "How a piece is made",
      steps: [
        { title: "Shaping", body: "Each piece is shaped by hand, one at a time." },
        {
          title: "Drying",
          body: "It dries slowly in the shade over several days to avoid stress and unwanted cracks.",
        },
        {
          title: "Bisque firing",
          body: "A first firing hardens the piece and prepares it for glazing.",
        },
        {
          title: "Glazing",
          body: "I apply glazes of my own formulation, often in several overlapping layers.",
        },
        {
          title: "High firing",
          body: "The final firing, above 1,200 °C, vitrifies the stoneware and reveals the final colour.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact",
      intro:
        "Interested in a piece, a custom commission, or just want to know more? Get in touch and I'll reply as soon as I can.",
      panelEyebrow: "Commissions",
      panelTitle: "Custom tableware",
      panelBody:
        "I make full tableware sets for weddings, restaurants and homes that want a table with character. Tell me what you have in mind — how many pieces, which colours and when you need them — and we'll put together a proposal.",
      link: "Message me on Instagram",
      linkUrl: "https://www.instagram.com/xavicels_ceramics/",
      channelsLabel: "Ways to get in touch",
      instagramNote: "Discover the latest pieces and send me a direct message.",
      whatsappNote: "Tell me about the piece or commission you have in mind.",
      phoneLabel: "Phone",
      phoneNote: "If you prefer to talk, you can call me directly.",
      imageAlt: "Stoneware bowl-making process in the studio",
      image: "/images/collage_proceso_bol.jpeg",
    },
    footer: {
      tagline: "Handmade, one piece at a time.",
      descriptor: "Artisan ceramics",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function localizedPath(locale: Locale, path = "") {
  return `/${locale}${path ? `/${path.replace(/^\/+/, "")}` : ""}`;
}