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
      brand: "Libélula Cerámica",
      title: "Libélula Cerámica | Piezas hechas a mano",
      description:
        "Cerámica artesanal hecha a mano, pieza a pieza, en el taller Libélula.",
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
      currentSite: "Web actual",
    },
    home: {
      heroAlt: "Cerámica artesanal creada en el taller",
      kicker: "Cerámica hecha despacio · Desde el taller",
      title: "La belleza de lo que no se repite.",
      intro:
        "Piezas de barro hechas a mano para acompañar los pequeños rituales de cada día.",
      explore: "Explorar las piezas",
      heroIndex: "01 / Hecho en el taller",
      workshopEyebrow: "El taller Libélula",
      workshopTitle: "La huella de las manos también es parte del diseño.",
      workshopLink: "Conoce el taller",
      selection: "Una pequeña selección",
      selectionTitle: "Objetos para quedarse.",
      allPieces: "Ver todas las piezas",
      storyEyebrow: "De la tierra a tus manos",
      storyTitle: "El tiempo también se queda en la pieza.",
      storyBody:
        "Barro, agua, fuego y muchas decisiones pequeñas. Así nace cada objeto: sin prisa, cerca de la materia y lejos de la perfección en serie.",
      storyLink: "Asómate al proceso",
      storyAlt: "Detalle de una pieza artesanal de cerámica",
    },
    shop: {
      eyebrow: "Objetos con tiempo dentro",
      title: "Piezas para vivirlas.",
      intro:
        "Cerámica hecha a mano, en series pequeñas y con espacio para que cada pieza encuentre su propia forma.",
      itemCount: "piezas",
      note: "Modeladas y esmaltadas en el taller",
      collectionAlt: "Colección de cerámica artesanal",
      categoryIntro: "Piezas de esta categoría, hechas una a una en el taller.",
      empty: "No hay piezas en esta categoría por ahora.",
    },
    product: {
      back: "Volver a las piezas",
      handmade:
        "Cada pieza se trabaja a mano, por eso las pequeñas variaciones de forma y esmalte forman parte de su carácter.",
      inquire: "Consultar esta pieza",
      availability: "Escríbeme para consultar disponibilidad y próximos encargos.",
      open: "Descubrir",
      view: "Ver",
    },
    workshop: {
      eyebrow: "El taller Libélula",
      title: "Hecho con las manos. Y con tiempo.",
      intro:
        "Un espacio pequeño para trabajar con barro y dejar que el material también tome parte en el resultado.",
      imageAlt: "Cerámica artesanal en distintas etapas de elaboración",
      processEyebrow: "Una forma de hacer",
      processTitle: "El barro nunca sale exactamente igual dos veces.",
      paragraphOne:
        "Cada objeto comienza con una idea y va encontrando su forma entre las manos, el torno y el fuego. Las marcas sutiles, los cambios de tono y las pequeñas diferencias no son defectos: cuentan cómo se hizo.",
      paragraphTwo:
        "Libélula es una invitación a rodearse de objetos cotidianos con carácter propio, pensados para usarse y para durar.",
      discover: "Descubrir las piezas",
      stepsLabel: "El proceso cerámico",
      steps: [
        { title: "La materia", body: "Elegir el barro y preparar cada pieza." },
        { title: "Las manos", body: "Modelar, dejar secar y encontrar la forma." },
        { title: "El fuego", body: "Esmaltar y esperar la transformación." },
      ],
    },
    contact: {
      eyebrow: "Hablemos",
      title: "¿Buscas una pieza especial?",
      intro:
        "Si quieres preguntar por una pieza, un encargo o simplemente saludar, estaré encantada de leerte.",
      panelEyebrow: "Mientras preparo esta tienda",
      panelTitle: "Encuéntrame en la web actual.",
      panelBody:
        "Por ahora, las consultas siguen en el espacio donde nació Libélula.",
      link: "Visitar El Taller Libélula",
    },
    footer: {
      tagline: "Hecho a mano, pieza a pieza.",
      descriptor: "Cerámica artesanal",
    },
  },
  ca: {
    site: {
      brand: "Libélula Ceràmica",
      title: "Libélula Ceràmica | Peces fetes a mà",
      description:
        "Ceràmica artesanal feta a mà, peça a peça, al taller Libélula.",
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
      currentSite: "Web actual",
    },
    home: {
      heroAlt: "Ceràmica artesanal creada al taller",
      kicker: "Ceràmica feta a poc a poc · Des del taller",
      title: "La bellesa d'allò que no es repeteix.",
      intro:
        "Peces de fang fetes a mà per acompanyar els petits rituals de cada dia.",
      explore: "Explora les peces",
      heroIndex: "01 / Fet al taller",
      workshopEyebrow: "El taller Libélula",
      workshopTitle: "La petjada de les mans també forma part del disseny.",
      workshopLink: "Coneix el taller",
      selection: "Una petita selecció",
      selectionTitle: "Objectes per quedar-s'hi.",
      allPieces: "Veure totes les peces",
      storyEyebrow: "De la terra a les teves mans",
      storyTitle: "El temps també es queda a la peça.",
      storyBody:
        "Fang, aigua, foc i moltes decisions petites. Així neix cada objecte: sense pressa, a prop de la matèria i lluny de la perfecció en sèrie.",
      storyLink: "Descobreix el procés",
      storyAlt: "Detall d'una peça artesanal de ceràmica",
    },
    shop: {
      eyebrow: "Objectes amb temps a dins",
      title: "Peces per viure-les.",
      intro:
        "Ceràmica feta a mà, en sèries petites i amb espai perquè cada peça trobi la seva forma.",
      itemCount: "peces",
      note: "Modelades i esmaltades al taller",
      collectionAlt: "Col·lecció de ceràmica artesanal",
      categoryIntro: "Peces d'aquesta categoria, fetes una a una al taller.",
      empty: "Ara mateix no hi ha peces en aquesta categoria.",
    },
    product: {
      back: "Torna a les peces",
      handmade:
        "Cada peça es treballa a mà; per això les petites variacions de forma i esmalt formen part del seu caràcter.",
      inquire: "Consulta aquesta peça",
      availability: "Escriu-me per consultar-ne la disponibilitat i els propers encàrrecs.",
      open: "Descobreix",
      view: "Veure",
    },
    workshop: {
      eyebrow: "El taller Libélula",
      title: "Fet amb les mans. I amb temps.",
      intro:
        "Un espai petit per treballar el fang i deixar que el material també participi en el resultat.",
      imageAlt: "Ceràmica artesanal en diferents etapes d'elaboració",
      processEyebrow: "Una manera de fer",
      processTitle: "El fang no surt mai exactament igual dues vegades.",
      paragraphOne:
        "Cada objecte comença amb una idea i va trobant la seva forma entre les mans, el torn i el foc. Les marques subtils, els canvis de to i les petites diferències no són defectes: expliquen com s'ha fet.",
      paragraphTwo:
        "Libélula és una invitació a envoltar-se d'objectes quotidians amb caràcter propi, pensats per fer-se servir i per durar.",
      discover: "Descobreix les peces",
      stepsLabel: "El procés ceràmic",
      steps: [
        { title: "La matèria", body: "Triar el fang i preparar cada peça." },
        { title: "Les mans", body: "Modelar, deixar assecar i trobar la forma." },
        { title: "El foc", body: "Esmaltar i esperar la transformació." },
      ],
    },
    contact: {
      eyebrow: "Parlem-ne",
      title: "Busques una peça especial?",
      intro:
        "Si vols preguntar per una peça, un encàrrec o simplement saludar, estaré encantada de llegir-te.",
      panelEyebrow: "Mentre preparo aquesta botiga",
      panelTitle: "Em trobaràs a la web actual.",
      panelBody:
        "De moment, les consultes continuen a l'espai on va néixer Libélula.",
      link: "Visita El Taller Libélula",
    },
    footer: {
      tagline: "Fet a mà, peça a peça.",
      descriptor: "Ceràmica artesanal",
    },
  },
  en: {
    site: {
      brand: "Libélula Ceramics",
      title: "Libélula Ceramics | Handmade pieces",
      description:
        "Handmade artisan ceramics, shaped piece by piece at the Libélula studio.",
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
      currentSite: "Current website",
    },
    home: {
      heroAlt: "Handmade ceramics created in the studio",
      kicker: "Ceramics made slowly · From the studio",
      title: "The beauty of what cannot be repeated.",
      intro:
        "Handmade clay pieces for the small rituals that make up each day.",
      explore: "Explore the pieces",
      heroIndex: "01 / Made in the studio",
      workshopEyebrow: "The Libélula studio",
      workshopTitle: "The mark of a hand is part of the design.",
      workshopLink: "Meet the studio",
      selection: "A small selection",
      selectionTitle: "Objects to keep.",
      allPieces: "View all pieces",
      storyEyebrow: "From earth to your hands",
      storyTitle: "Time stays in each piece, too.",
      storyBody:
        "Clay, water, fire, and a hundred small decisions. That is how each object comes to life: unhurried, close to the material, and far from mass-produced perfection.",
      storyLink: "Take a look at the process",
      storyAlt: "Detail of a handmade ceramic piece",
    },
    shop: {
      eyebrow: "Objects shaped by time",
      title: "Pieces to live with.",
      intro:
        "Handmade ceramics in small batches, with room for every piece to find its own shape.",
      itemCount: "pieces",
      note: "Shaped and glazed in the studio",
      collectionAlt: "Collection of handmade ceramics",
      categoryIntro: "Pieces in this category, made one at a time in the studio.",
      empty: "There are no pieces in this category right now.",
    },
    product: {
      back: "Back to all pieces",
      handmade:
        "Each piece is made by hand, so small variations in shape and glaze are part of its character.",
      inquire: "Ask about this piece",
      availability: "Get in touch to ask about availability and future commissions.",
      open: "Discover",
      view: "View",
    },
    workshop: {
      eyebrow: "The Libélula studio",
      title: "Made by hand. And given time.",
      intro:
        "A small space to work with clay and let the material play a part in the result.",
      imageAlt: "Handmade ceramics at different stages of making",
      processEyebrow: "A way of making",
      processTitle: "Clay never comes out exactly the same twice.",
      paragraphOne:
        "Each object starts with an idea and finds its shape among hands, the wheel, and the fire. Subtle marks, shifts in tone, and small differences are not flaws: they tell the story of how it was made.",
      paragraphTwo:
        "Libélula is an invitation to live with everyday objects that have their own character, made to be used and to last.",
      discover: "Discover the pieces",
      stepsLabel: "The ceramic process",
      steps: [
        { title: "The material", body: "Choose the clay and prepare each piece." },
        { title: "The hands", body: "Shape, dry, and find the form." },
        { title: "The fire", body: "Glaze and wait for the transformation." },
      ],
    },
    contact: {
      eyebrow: "Say hello",
      title: "Looking for a special piece?",
      intro:
        "If you would like to ask about a piece, a commission, or simply say hello, I would love to hear from you.",
      panelEyebrow: "While this shop takes shape",
      panelTitle: "Find me on the current website.",
      panelBody:
        "For now, enquiries are still handled through the place where Libélula began.",
      link: "Visit El Taller Libélula",
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