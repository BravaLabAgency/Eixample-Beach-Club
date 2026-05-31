import type { Language } from "@/lib/constants";

type NavItem = {
  label: string;
  href: string;
};

type ReservationItem = {
  id: string;
  name: string;
  label: string;
  price: string;
  capacity: string;
  mood: string;
  image: string;
  alt: string;
  inclusions: string[];
};

type EventItem = {
  name: string;
  date: string;
  time: string;
  artist: string;
  image: string;
  alt: string;
  tag: string;
};

type GalleryItem = {
  title: string;
  image: string;
  alt: string;
};

type SocialLink = {
  label: string;
  href: string;
};

export type BeachClubCopy = {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  common: {
    brand: string;
    menu: string;
    close: string;
    language: string;
    reserve: string;
    events: string;
    book: string;
    discover: string;
    marquee: string;
    cocktails: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    video: string;
    poster: string;
    filmLabel: string;
    location: string;
    ritual: string;
  };
  experience: {
    label: string;
    title: string;
    microcopy: string;
    fragments: Array<{
      word: string;
      line: string;
      image: string;
      alt: string;
    }>;
  };
  reservations: {
    label: string;
    title: string;
    intro: string;
    items: ReservationItem[];
  };
  booking: {
    title: string;
    date: string;
    time: string;
    guests: string;
    occasion: string;
    occasions: string[];
    request: string;
    success: string;
  };
  events: {
    label: string;
    title: string;
    cta: string;
    items: EventItem[];
  };
  gastronomy: {
    label: string;
    title: string;
    line: string;
    explore: string;
    overlayTitle: string;
    overlayIntro: string;
    image: string;
    alt: string;
    menu: Array<{
      type: string;
      name: string;
      price: string;
    }>;
    cocktails: string[];
  };
  gallery: {
    label: string;
    title: string;
    items: GalleryItem[];
  };
  location: {
    label: string;
    title: string;
    address: string;
    schedule: string;
    contact: string;
    mapTitle: string;
    mapEmbedSrc: string;
    mapLink: string;
    finalCta: string;
  };
  footer: {
    line: string;
    social: SocialLink[];
  };
};

const heroVideo = "/beach-club/hero-video.mp4";

const mapAddress = "Carrer d'Aragó 284, L'Eixample, Barcelona";
const mapEmbedSrc =
  "https://maps.google.com/maps?q=Carrer%20d%27Arag%C3%B3%20284%2C%20L%27Eixample%2C%20Barcelona&t=&z=16&ie=UTF8&iwloc=&output=embed";
const mapLink =
  "https://www.google.com/maps/search/?api=1&query=Carrer%20d%27Arag%C3%B3%20284%2C%20L%27Eixample%2C%20Barcelona";

const es: BeachClubCopy = {
  metadata: {
    title: "Eixample Beach Club | Destino mediterráneo de estilo de vida",
    description:
      "Beach club mediterráneo ficticio con reservas premium, gastronomía, sesiones al atardecer, DJs y una experiencia digital inmersiva.",
    keywords: [
      "beach club premium",
      "beach club mediterráneo",
      "sunbeds",
      "cabañas VIP",
      "sesiones al atardecer",
      "hospitalidad de lujo"
    ]
  },
  common: {
    brand: "Eixample Beach Club",
    menu: "Menú",
    close: "Cerrar",
    language: "Idioma",
    reserve: "Reservar",
    events: "Eventos",
    book: "Elegir escena",
    discover: "Descubrir",
    marquee: "Mar · Música · Cocina · Atardecer · Energía · ",
    cocktails: "Cócteles"
  },
  nav: [
    { label: "Inicio", href: "home" },
    { label: "Experiencia", href: "experience" },
    { label: "Reservas", href: "reservations" },
    { label: "Eventos", href: "events" },
    { label: "Gastronomía", href: "gastronomy" },
    { label: "Contacto", href: "contact" }
  ],
  hero: {
    eyebrow: "Mediterráneo privado · Temporada 2026",
    title: "Día frente al mar. Noche con pulso propio.",
    subtitle: "Tumbonas, cocina de costa, coctelería y DJs invitados en una cala hecha para quedarse.",
    video: heroVideo,
    poster: "/beach-club/hero-beach-club.png",
    filmLabel: "Vídeo del atardecer",
    location: "Eixample · Barcelona",
    ritual: "Ritual del atardecer · 18:42"
  },
  experience: {
    label: "La sensación",
    title: "Mar. Música. Fuego. Sal. Energía.",
    microcopy:
      "Un club imaginado como una campaña de moda: piel salada, lino, brasas suaves, copas frías y una pista que aparece cuando cae la luz.",
    fragments: [
      {
        word: "Mar",
        line: "Primera línea, espuma cerca, servicio invisible.",
        image: "/beach-club/hero-beach-club.png",
        alt: "Tumbonas de lujo frente al Mediterráneo al atardecer"
      },
      {
        word: "Música",
        line: "Downtempo al atardecer, invitados cuando la noche sube.",
        image: "/beach-club/sunset-session.png",
        alt: "DJ actuando en un beach club durante el atardecer"
      },
      {
        word: "Cocina",
        line: "Producto fresco, platos precisos, mesa sin prisa.",
        image: "/beach-club/gastronomy.png",
        alt: "Marisco mediterráneo y cócteles junto al mar"
      },
      {
        word: "Noche",
        line: "Velas, piel dorada, copas largas y acceso limitado.",
        image: "/beach-club/private-events.png",
        alt: "Cena mediterránea privada al atardecer"
      }
    ]
  },
  reservations: {
    label: "Reservas",
    title: "Elige tu escena antes de que cambie la luz.",
    intro: "Cuatro formas de vivir el club. Todas con servicio dedicado, ritmo de atardecer y llegada sin fricción.",
    items: [
      {
        id: "sunbeds",
        name: "Tumbonas",
        label: "Primera línea",
        price: "Desde 65 EUR",
        capacity: "1-2 personas",
        mood: "Sol, toalla fría, agua mineral y mar a pocos pasos.",
        image: "/beach-club/hero-beach-club.png",
        alt: "Tumbonas premium en una playa mediterránea",
        inclusions: ["Toalla premium", "Agua de bienvenida", "Servicio en hamaca"]
      },
      {
        id: "vip-beds",
        name: "Camas VIP",
        label: "Hora dorada privada",
        price: "Desde 180 EUR",
        capacity: "2-3 personas",
        mood: "Cama elevada, sombra de lino y prioridad en coctelería.",
        image: "/beach-club/hero-beach-club.png",
        alt: "Camas VIP con champán cerca de la orilla",
        inclusions: ["Cóctel de bienvenida", "Fruta de temporada", "Anfitrión prioritario"]
      },
      {
        id: "cabanas",
        name: "Cabañas",
        label: "Salón costero privado",
        price: "Desde 420 EUR",
        capacity: "4-6 personas",
        mood: "Sombra arquitectónica, sofá lounge, minibar seleccionado y anfitrión.",
        image: "/beach-club/private-events.png",
        alt: "Zona de comedor en cabaña privada frente al mar",
        inclusions: ["Anfitrión privado", "Minibar premium", "Mesa prioritaria"]
      },
      {
        id: "tables",
        name: "Mesas del restaurante",
        label: "Sobremesa hasta la noche",
        price: "Ticket medio 95 EUR",
        capacity: "2-10 personas",
        mood: "Mesa junto al agua, producto local y cócteles de sobremesa.",
        image: "/beach-club/gastronomy.png",
        alt: "Mesa mediterránea de marisco con cócteles y vistas al mar",
        inclusions: ["Mesa con vistas al mar", "Menú de temporada", "Maridaje opcional"]
      }
    ]
  },
  booking: {
    title: "Reserva privada",
    date: "Fecha",
    time: "Hora",
    guests: "Personas",
    occasion: "Ambiente",
    occasions: ["Atardecer", "Almuerzo", "Noche DJ", "Privado"],
    request: "Solicitar disponibilidad",
    success: "Solicitud preparada. El equipo confirmaría disponibilidad, depósito y acceso."
  },
  events: {
    label: "Agenda",
    title: "Noches con nombre propio.",
    cta: "Agenda privada",
    items: [
      {
        name: "Frecuencias del atardecer",
        date: "19 Jun",
        time: "18:30 - 22:30",
        artist: "Nora Azul",
        image: "/beach-club/sunset-session.png",
        alt: "Sesión de DJ al atardecer con invitados elegantes junto al mar",
        tag: "DJ invitada"
      },
      {
        name: "La mesa larga",
        date: "28 Jun",
        time: "13:00 - 17:00",
        artist: "Ritual de marisco",
        image: "/beach-club/gastronomy.png",
        alt: "Almuerzo mediterráneo con marisco y cócteles",
        tag: "Gastronomía"
      },
      {
        name: "Baño de luna",
        date: "11 Jul",
        time: "21:00 - 02:00",
        artist: "House junto al agua",
        image: "/beach-club/sunset-session.png",
        alt: "Escena nocturna con cabina de DJ y luz de atardecer",
        tag: "Noche"
      },
      {
        name: "Palma tras la puesta",
        date: "23 Jul",
        time: "20:00 - 01:00",
        artist: "Saxo en directo + vinilo",
        image: "/beach-club/private-events.png",
        alt: "Cena privada con velas y vistas al mar",
        tag: "Directo"
      }
    ]
  },
  gastronomy: {
    label: "Gastronomía",
    title: "Cocina de costa. Copas con temperatura de verano.",
    line: "Crudos, brasas, arroces, cítricos, hierbas y cócteles pensados para el sol bajo.",
    explore: "Explorar carta",
    overlayTitle: "La carta completa",
    overlayIntro: "Una secuencia mediterránea pensada para pasar del almuerzo al atardecer sin perder temperatura.",
    image: "/beach-club/gastronomy.png",
    alt: "Platos de marisco mediterráneo y cócteles naranjas junto a la costa",
    menu: [
      { type: "Crudo", name: "Lubina, lima, aceite verde", price: "24" },
      { type: "Brasa", name: "Gamba roja, salvia, brasa suave", price: "32" },
      { type: "Arroz", name: "Arroz meloso de mar", price: "34" },
      { type: "Dulce", name: "Higo, yogur helado, miel salina", price: "14" }
    ],
    cocktails: ["Spritz de naranja amarga", "Negroni salino", "Martini de hoja de higuera", "Highball mediterráneo"]
  },
  gallery: {
    label: "Galería",
    title: "Instantes que no piden explicación.",
    items: [
      {
        title: "Tumbonas en primera línea",
        image: "/beach-club/hero-beach-club.png",
        alt: "Tumbonas del beach club junto al Mediterráneo"
      },
      {
        title: "DJ en la hora azul",
        image: "/beach-club/sunset-session.png",
        alt: "Cabina de DJ iluminada al atardecer"
      },
      {
        title: "Marisco y cítricos",
        image: "/beach-club/gastronomy.png",
        alt: "Platos de marisco y cócteles"
      },
      {
        title: "Mesa privada",
        image: "/beach-club/private-events.png",
        alt: "Mesa de cena privada al atardecer"
      },
      {
        title: "Servicio dorado",
        image: "/beach-club/hero-beach-club.png",
        alt: "Servicio premium de tumbonas"
      },
      {
        title: "Copas de noche",
        image: "/beach-club/private-events.png",
        alt: "Velas y copas de vino junto a la costa"
      },
      {
        title: "Hora del cóctel",
        image: "/beach-club/gastronomy.png",
        alt: "Cócteles naranjas sobre una mesa mediterránea"
      },
      {
        title: "Sonido sobre el agua",
        image: "/beach-club/sunset-session.png",
        alt: "Invitados disfrutando de una sesión musical al atardecer"
      }
    ]
  },
  location: {
    label: "Ubicación",
    title: "Una dirección urbana en Eixample con alma mediterránea.",
    address: mapAddress,
    schedule: "Todos los días · 10:00 - 02:00",
    contact: "+34 600 000 000 · bravalabagency@gmail.com",
    mapTitle: "Mapa de Eixample Beach Club en Eixample",
    mapEmbedSrc,
    mapLink,
    finalCta: "Reservar antes del atardecer"
  },
  footer: {
    line: "Un beach club mediterráneo ficticio convertido en una experiencia digital de lujo.",
    social: [
      { label: "Instagram", href: "https://www.instagram.com" },
      { label: "TikTok", href: "https://www.tiktok.com" }
    ]
  }
};

const ca: BeachClubCopy = {
  ...es,
  metadata: {
    ...es.metadata,
    title: "Eixample Beach Club | Destinació mediterrània d'estil de vida",
    description:
      "Beach club mediterrani fictici amb reserves premium, gastronomia, sessions al capvespre, DJs i una experiència digital immersiva."
  },
  common: {
    ...es.common,
    close: "Tancar",
    language: "Idioma",
    reserve: "Reservar",
    events: "Esdeveniments",
    book: "Triar escena",
    discover: "Descobrir",
    marquee: "Mar · Música · Cuina · Capvespre · Energia · ",
    cocktails: "Còctels"
  },
  nav: [
    { label: "Inici", href: "home" },
    { label: "Experiència", href: "experience" },
    { label: "Reserves", href: "reservations" },
    { label: "Esdeveniments", href: "events" },
    { label: "Gastronomia", href: "gastronomy" },
    { label: "Contacte", href: "contact" }
  ],
  hero: {
    ...es.hero,
    eyebrow: "Mediterrani privat · Temporada 2026",
    title: "Dia davant del mar. Nit amb pols propi.",
    subtitle: "Hamaques, cuina de costa, cocteleria i DJs convidats en una cala feta per quedar-s'hi.",
    filmLabel: "Film del capvespre",
    ritual: "Ritual de capvespre · 18:42"
  },
  experience: {
    ...es.experience,
    label: "La sensació",
    title: "Mar. Música. Foc. Sal. Energia.",
    microcopy:
      "Un club imaginat com una campanya de moda: pell salada, lli, brases suaus, copes fredes i una pista que apareix quan cau la llum.",
    fragments: [
      {
        word: "Mar",
        line: "Primera línia, escuma a prop i servei discret.",
        image: "/beach-club/hero-beach-club.png",
        alt: "Hamaques de luxe davant del Mediterrani al capvespre"
      },
      {
        word: "Música",
        line: "Downtempo al capvespre i convidats quan la nit puja.",
        image: "/beach-club/sunset-session.png",
        alt: "DJ actuant en un beach club durant el capvespre"
      },
      {
        word: "Cuina",
        line: "Producte fresc, plats precisos i taula sense pressa.",
        image: "/beach-club/gastronomy.png",
        alt: "Marisc mediterrani i còctels al costat del mar"
      },
      {
        word: "Nit",
        line: "Espelmes, pell daurada, copes llargues i accés limitat.",
        image: "/beach-club/private-events.png",
        alt: "Sopar mediterrani privat al capvespre"
      }
    ]
  },
  reservations: {
    ...es.reservations,
    label: "Reserves",
    title: "Tria la teva escena abans que canviï la llum.",
    intro: "Quatre maneres de viure el club. Totes amb servei dedicat, ritme de capvespre i arribada sense fricció.",
    items: [
      {
        id: "sunbeds",
        name: "Hamaques",
        label: "Primera línia",
        price: "Des de 65 EUR",
        capacity: "1-2 persones",
        mood: "Sol, tovallola freda, aigua mineral i mar a pocs passos.",
        image: "/beach-club/hero-beach-club.png",
        alt: "Hamaques premium en una platja mediterrània",
        inclusions: ["Tovallola premium", "Aigua de benvinguda", "Servei a l'hamaca"]
      },
      {
        id: "vip-beds",
        name: "Llits VIP",
        label: "Hora daurada privada",
        price: "Des de 180 EUR",
        capacity: "2-3 persones",
        mood: "Llit elevat, ombra de lli i prioritat en cocteleria.",
        image: "/beach-club/hero-beach-club.png",
        alt: "Llits VIP amb cava a prop de la riba",
        inclusions: ["Còctel de benvinguda", "Fruita de temporada", "Amfitrió prioritari"]
      },
      {
        id: "cabanas",
        name: "Cabanyes",
        label: "Saló costaner privat",
        price: "Des de 420 EUR",
        capacity: "4-6 persones",
        mood: "Ombra arquitectònica, sofà lounge, minibar seleccionat i amfitrió.",
        image: "/beach-club/private-events.png",
        alt: "Zona de menjador en una cabanya privada davant del mar",
        inclusions: ["Amfitrió privat", "Minibar premium", "Taula prioritària"]
      },
      {
        id: "tables",
        name: "Taules del restaurant",
        label: "Dinar llarg fins a la nit",
        price: "Tiquet mitjà 95 EUR",
        capacity: "2-10 persones",
        mood: "Taula arran d'aigua, producte local i còctels de sobretaula.",
        image: "/beach-club/gastronomy.png",
        alt: "Taula mediterrània de marisc amb còctels i vistes al mar",
        inclusions: ["Taula amb vistes al mar", "Menú de temporada", "Maridatge opcional"]
      }
    ]
  },
  booking: {
    ...es.booking,
    title: "Reserva privada",
    date: "Data",
    time: "Hora",
    guests: "Persones",
    occasion: "Ambient",
    occasions: ["Capvespre", "Dinar", "Nit DJ", "Privat"],
    request: "Sol·licitar disponibilitat",
    success: "Sol·licitud preparada. L'equip confirmaria disponibilitat, dipòsit i accés."
  },
  events: {
    ...es.events,
    label: "Agenda",
    title: "Nits amb nom propi.",
    cta: "Agenda privada",
    items: [
      {
        name: "Freqüències del capvespre",
        date: "19 juny",
        time: "18:30 - 22:30",
        artist: "Nora Azul",
        image: "/beach-club/sunset-session.png",
        alt: "Sessió de DJ al capvespre amb convidats elegants al costat del mar",
        tag: "DJ convidada"
      },
      {
        name: "La taula llarga",
        date: "28 juny",
        time: "13:00 - 17:00",
        artist: "Ritual de marisc",
        image: "/beach-club/gastronomy.png",
        alt: "Dinar mediterrani amb marisc i còctels",
        tag: "Gastronomia"
      },
      {
        name: "Bany de lluna",
        date: "11 jul.",
        time: "21:00 - 02:00",
        artist: "House arran d'aigua",
        image: "/beach-club/sunset-session.png",
        alt: "Escena nocturna amb cabina de DJ i llum de capvespre",
        tag: "Nit"
      },
      {
        name: "Palma després del capvespre",
        date: "23 jul.",
        time: "20:00 - 01:00",
        artist: "Saxo en directe + vinil",
        image: "/beach-club/private-events.png",
        alt: "Sopar privat amb espelmes i vistes al mar",
        tag: "En directe"
      }
    ]
  },
  gastronomy: {
    ...es.gastronomy,
    label: "Gastronomia",
    title: "Cuina de costa. Copes amb temperatura d'estiu.",
    line: "Crus, brases, arrossos, cítrics, herbes i còctels pensats per al sol baix.",
    explore: "Explorar carta",
    overlayTitle: "La carta completa",
    overlayIntro: "Una seqüència mediterrània pensada per passar del dinar al capvespre sense perdre temperatura.",
    alt: "Plats de marisc mediterrani i còctels taronja al costat de la costa",
    menu: [
      { type: "Cru", name: "Llobarro, llima, oli verd", price: "24" },
      { type: "Brasa", name: "Gamba vermella, sàlvia, brasa suau", price: "32" },
      { type: "Arròs", name: "Arròs melós de mar", price: "34" },
      { type: "Dolç", name: "Figa, iogurt gelat, mel salina", price: "14" }
    ],
    cocktails: ["Spritz de taronja amarga", "Negroni salí", "Martini de fulla de figuera", "Highball mediterrani"]
  },
  gallery: {
    ...es.gallery,
    label: "Galeria",
    title: "Instants que no demanen explicació.",
    items: [
      {
        title: "Hamaques en primera línia",
        image: "/beach-club/hero-beach-club.png",
        alt: "Hamaques del beach club al costat del Mediterrani"
      },
      {
        title: "DJ a l'hora blava",
        image: "/beach-club/sunset-session.png",
        alt: "Cabina de DJ il·luminada al capvespre"
      },
      {
        title: "Marisc i cítrics",
        image: "/beach-club/gastronomy.png",
        alt: "Plats de marisc i còctels"
      },
      {
        title: "Taula privada",
        image: "/beach-club/private-events.png",
        alt: "Taula de sopar privada al capvespre"
      },
      {
        title: "Servei daurat",
        image: "/beach-club/hero-beach-club.png",
        alt: "Servei premium d'hamaques"
      },
      {
        title: "Copes de nit",
        image: "/beach-club/private-events.png",
        alt: "Espelmes i copes de vi al costat de la costa"
      },
      {
        title: "Hora del còctel",
        image: "/beach-club/gastronomy.png",
        alt: "Còctels taronja sobre una taula mediterrània"
      },
      {
        title: "So sobre l'aigua",
        image: "/beach-club/sunset-session.png",
        alt: "Convidats gaudint d'una sessió musical al capvespre"
      }
    ]
  },
  location: {
    ...es.location,
    label: "Ubicació",
    title: "Una adreça urbana a l'Eixample amb ànima mediterrània.",
    mapTitle: "Mapa d'Eixample Beach Club a l'Eixample",
    schedule: "Cada dia · 10:00 - 02:00",
    finalCta: "Reservar abans del capvespre"
  },
  footer: {
    ...es.footer,
    line: "Un beach club mediterrani fictici convertit en una experiència digital de luxe."
  }
};

const en: BeachClubCopy = {
  ...es,
  metadata: {
    ...es.metadata,
    title: "Eixample Beach Club | Mediterranean lifestyle destination",
    description:
      "A fictional premium Mediterranean beach club with reservations, gastronomy, sunset sessions, DJs and an immersive lifestyle website."
  },
  common: {
    ...es.common,
    close: "Close",
    language: "Language",
    reserve: "Reserve",
    events: "Events",
    book: "Choose scene",
    discover: "Discover",
    marquee: "Sea · Music · Food · Sunset · Energy · ",
    cocktails: "Cocktails"
  },
  nav: [
    { label: "Home", href: "home" },
    { label: "Experience", href: "experience" },
    { label: "Reservations", href: "reservations" },
    { label: "Events", href: "events" },
    { label: "Gastronomy", href: "gastronomy" },
    { label: "Contact", href: "contact" }
  ],
  hero: {
    ...es.hero,
    eyebrow: "Private Mediterranean · Season 2026",
    title: "Daylight by the sea. Nightfall with a pulse.",
    subtitle: "Sunbeds, coastal cuisine, cold cocktails and guest DJs in a cove designed to make you stay.",
    filmLabel: "Sunset film",
    location: "Eixample · Barcelona",
    ritual: "Sunset ritual · 18:42"
  },
  experience: {
    ...es.experience,
    label: "The feeling",
    title: "Sea. Music. Fire. Salt. Energy.",
    microcopy:
      "A club imagined like a fashion campaign: salty skin, linen, soft fire, cold glasses and a dance floor that appears when the light drops.",
    fragments: [
      {
        word: "Sea",
        line: "Front row water, foam nearby, service that almost disappears.",
        image: "/beach-club/hero-beach-club.png",
        alt: "Luxury sunbeds facing the Mediterranean at sunset"
      },
      {
        word: "Music",
        line: "Downtempo at sunset, guest sets when the night rises.",
        image: "/beach-club/sunset-session.png",
        alt: "DJ performing at a beach club during sunset"
      },
      {
        word: "Food",
        line: "Fresh produce, precise plates, a table with no rush.",
        image: "/beach-club/gastronomy.png",
        alt: "Mediterranean seafood and cocktails by the sea"
      },
      {
        word: "Night",
        line: "Candles, bronze skin, long drinks and limited access.",
        image: "/beach-club/private-events.png",
        alt: "Private Mediterranean dinner at sunset"
      }
    ]
  },
  reservations: {
    ...es.reservations,
    label: "Reservations",
    title: "Choose your scene before the light changes.",
    intro: "Four ways to live the club. Dedicated service, sunset rhythm and an arrival that feels effortless.",
    items: [
      {
        id: "sunbeds",
        name: "Sunbeds",
        label: "Front row ease",
        price: "From 65 EUR",
        capacity: "1-2 guests",
        mood: "Sun, chilled towel, mineral water and the sea a few steps away.",
        image: "/beach-club/hero-beach-club.png",
        alt: "Premium sunbeds arranged on a Mediterranean beach",
        inclusions: ["Premium towel", "Welcome water", "Sunbed service"]
      },
      {
        id: "vip-beds",
        name: "VIP beds",
        label: "Private golden hour",
        price: "From 180 EUR",
        capacity: "2-3 guests",
        mood: "Raised bed, linen shade and cocktail priority.",
        image: "/beach-club/hero-beach-club.png",
        alt: "VIP beach beds with champagne near the shoreline",
        inclusions: ["Welcome cocktail", "Seasonal fruit", "Priority host"]
      },
      {
        id: "cabanas",
        name: "Cabanas",
        label: "Private coastal lounge",
        price: "From 420 EUR",
        capacity: "4-6 guests",
        mood: "Architectural shade, lounge sofa, curated minibar and host.",
        image: "/beach-club/private-events.png",
        alt: "Private cabana dining area facing the sea",
        inclusions: ["Private host", "Premium minibar", "Priority table"]
      },
      {
        id: "tables",
        name: "Restaurant tables",
        label: "Long lunch into night",
        price: "Average spend 95 EUR",
        capacity: "2-10 guests",
        mood: "Waterfront table, local produce and long cocktails after lunch.",
        image: "/beach-club/gastronomy.png",
        alt: "Mediterranean seafood table with cocktails and sea views",
        inclusions: ["Sea-view table", "Seasonal menu", "Optional wine pairing"]
      }
    ]
  },
  booking: {
    ...es.booking,
    title: "Private reservation",
    date: "Date",
    time: "Time",
    guests: "Guests",
    occasion: "Mood",
    occasions: ["Sunset", "Lunch", "DJ night", "Private"],
    request: "Request availability",
    success: "Request prepared. The team would confirm availability, deposit and access."
  },
  events: {
    ...es.events,
    label: "Events",
    title: "Nights with their own name.",
    cta: "Private calendar",
    items: [
      {
        name: "Sunset frequencies",
        date: "19 Jun",
        time: "18:30 - 22:30",
        artist: "Nora Azul",
        image: "/beach-club/sunset-session.png",
        alt: "Sunset DJ session with elegant guests by the sea",
        tag: "Guest DJ"
      },
      {
        name: "The long table",
        date: "28 Jun",
        time: "13:00 - 17:00",
        artist: "Seafood ritual",
        image: "/beach-club/gastronomy.png",
        alt: "Mediterranean lunch with seafood and cocktails",
        tag: "Gastronomy"
      },
      {
        name: "Moon swim night",
        date: "11 Jul",
        time: "21:00 - 02:00",
        artist: "House by the water",
        image: "/beach-club/sunset-session.png",
        alt: "Nightlife scene with DJ booth and sunset glow",
        tag: "Nightlife"
      },
      {
        name: "Palma after dark",
        date: "23 Jul",
        time: "20:00 - 01:00",
        artist: "Live sax + vinyl",
        image: "/beach-club/private-events.png",
        alt: "Private dinner setting with candles and sea view",
        tag: "Live"
      }
    ]
  },
  gastronomy: {
    ...es.gastronomy,
    label: "Gastronomy",
    title: "Coastal cuisine. Glasses at summer temperature.",
    line: "Raw plates, fire, rice, citrus, herbs and cocktails built for low sun.",
    explore: "Explore menu",
    overlayTitle: "The full offering",
    overlayIntro: "A Mediterranean sequence designed to move from lunch to sunset without losing temperature.",
    alt: "Mediterranean seafood plates and orange cocktails by the coast",
    menu: [
      { type: "Raw", name: "Sea bass, lime, green oil", price: "24" },
      { type: "Fire", name: "Red prawn, sage, soft flame", price: "32" },
      { type: "Rice", name: "Creamy rice from the sea", price: "34" },
      { type: "Sweet", name: "Fig, frozen yogurt, salted honey", price: "14" }
    ],
    cocktails: ["Bitter orange spritz", "Salt negroni", "Fig leaf martini", "Mediterranean highball"]
  },
  gallery: {
    ...es.gallery,
    label: "Gallery",
    title: "Moments that need no explanation.",
    items: [
      {
        title: "Front row sea beds",
        image: "/beach-club/hero-beach-club.png",
        alt: "Beach club sunbeds beside the Mediterranean"
      },
      {
        title: "DJ at blue hour",
        image: "/beach-club/sunset-session.png",
        alt: "DJ booth glowing at sunset"
      },
      {
        title: "Seafood and citrus",
        image: "/beach-club/gastronomy.png",
        alt: "Seafood dishes and cocktails"
      },
      {
        title: "Private table",
        image: "/beach-club/private-events.png",
        alt: "Private dinner table at sunset"
      },
      {
        title: "Golden service",
        image: "/beach-club/hero-beach-club.png",
        alt: "Premium sunbed service"
      },
      {
        title: "Late glasses",
        image: "/beach-club/private-events.png",
        alt: "Candles and wine glasses by the coast"
      },
      {
        title: "Cocktail hour",
        image: "/beach-club/gastronomy.png",
        alt: "Orange cocktails on a Mediterranean table"
      },
      {
        title: "Sound on water",
        image: "/beach-club/sunset-session.png",
        alt: "Guests enjoying a sunset music session"
      }
    ]
  },
  location: {
    ...es.location,
    label: "Location",
    title: "An Eixample address with a Mediterranean pulse.",
    address: mapAddress,
    schedule: "Every day · 10:00 - 02:00",
    mapTitle: "Map of Eixample Beach Club in Eixample",
    finalCta: "Reserve before sunset"
  },
  footer: {
    ...es.footer,
    line: "A fictional Mediterranean beach club shaped as a luxury digital experience."
  }
};

const fr: BeachClubCopy = {
  ...es,
  metadata: {
    ...es.metadata,
    title: "Eixample Beach Club | Destination méditerranéenne lifestyle",
    description:
      "Beach club méditerranéen fictif avec réservations premium, gastronomie, sessions au coucher du soleil, DJs et expérience digitale immersive."
  },
  common: {
    ...es.common,
    close: "Fermer",
    language: "Langue",
    reserve: "Réserver",
    events: "Événements",
    book: "Choisir la scène",
    discover: "Découvrir",
    marquee: "Mer · Musique · Cuisine · Coucher du soleil · Énergie · ",
    cocktails: "Cocktails"
  },
  nav: [
    { label: "Accueil", href: "home" },
    { label: "Expérience", href: "experience" },
    { label: "Réservations", href: "reservations" },
    { label: "Événements", href: "events" },
    { label: "Gastronomie", href: "gastronomy" },
    { label: "Contact", href: "contact" }
  ],
  hero: {
    ...es.hero,
    eyebrow: "Méditerranée privée · Saison 2026",
    title: "Le jour face à la mer. La nuit avec son propre rythme.",
    subtitle: "Transats, cuisine côtière, cocktails frais et DJs invités dans une crique faite pour rester.",
    filmLabel: "Film du coucher du soleil",
    location: "Eixample · Barcelone",
    ritual: "Rituel du coucher du soleil · 18:42"
  },
  experience: {
    ...es.experience,
    label: "La sensation",
    title: "Mer. Musique. Feu. Sel. Énergie.",
    microcopy:
      "Un club imaginé comme une campagne de mode: peau salée, lin, braises douces, verres froids et une piste qui apparaît quand la lumière baisse.",
    fragments: [
      {
        word: "Mer",
        line: "Première ligne, écume proche, service presque invisible.",
        image: "/beach-club/hero-beach-club.png",
        alt: "Transats de luxe face à la Méditerranée au coucher du soleil"
      },
      {
        word: "Musique",
        line: "Downtempo au coucher du soleil, invités quand la nuit monte.",
        image: "/beach-club/sunset-session.png",
        alt: "DJ en pleine session dans un beach club au coucher du soleil"
      },
      {
        word: "Cuisine",
        line: "Produits frais, assiettes précises, table sans urgence.",
        image: "/beach-club/gastronomy.png",
        alt: "Fruits de mer méditerranéens et cocktails au bord de la mer"
      },
      {
        word: "Nuit",
        line: "Bougies, peau dorée, longs cocktails et accès limité.",
        image: "/beach-club/private-events.png",
        alt: "Dîner méditerranéen privé au coucher du soleil"
      }
    ]
  },
  reservations: {
    ...es.reservations,
    label: "Réservations",
    title: "Choisissez votre scène avant que la lumière change.",
    intro: "Quatre façons de vivre le club. Service dédié, rythme de coucher du soleil et arrivée fluide.",
    items: [
      {
        id: "sunbeds",
        name: "Transats",
        label: "Première ligne",
        price: "À partir de 65 EUR",
        capacity: "1-2 personnes",
        mood: "Soleil, serviette fraîche, eau minérale et mer à quelques pas.",
        image: "/beach-club/hero-beach-club.png",
        alt: "Transats premium sur une plage méditerranéenne",
        inclusions: ["Serviette premium", "Eau d'accueil", "Service au transat"]
      },
      {
        id: "vip-beds",
        name: "Lits VIP",
        label: "Heure dorée privée",
        price: "À partir de 180 EUR",
        capacity: "2-3 personnes",
        mood: "Lit surélevé, ombre en lin et priorité cocktails.",
        image: "/beach-club/hero-beach-club.png",
        alt: "Lits VIP avec champagne près du rivage",
        inclusions: ["Cocktail d'accueil", "Fruits de saison", "Hôte prioritaire"]
      },
      {
        id: "cabanas",
        name: "Cabanes",
        label: "Salon côtier privé",
        price: "À partir de 420 EUR",
        capacity: "4-6 personnes",
        mood: "Ombre architecturale, canapé lounge, minibar sélectionné et hôte.",
        image: "/beach-club/private-events.png",
        alt: "Espace repas dans une cabane privée face à la mer",
        inclusions: ["Hôte privé", "Minibar premium", "Table prioritaire"]
      },
      {
        id: "tables",
        name: "Tables du restaurant",
        label: "Long déjeuner jusqu'à la nuit",
        price: "Ticket moyen 95 EUR",
        capacity: "2-10 personnes",
        mood: "Table au bord de l'eau, produits locaux et cocktails d'après-déjeuner.",
        image: "/beach-club/gastronomy.png",
        alt: "Table méditerranéenne de fruits de mer avec cocktails et vue sur la mer",
        inclusions: ["Table vue mer", "Menu saisonnier", "Accord vins optionnel"]
      }
    ]
  },
  booking: {
    ...es.booking,
    title: "Réservation privée",
    date: "Date",
    time: "Heure",
    guests: "Personnes",
    occasion: "Ambiance",
    occasions: ["Coucher du soleil", "Déjeuner", "Nuit DJ", "Privé"],
    request: "Demander disponibilité",
    success: "Demande préparée. L'équipe confirmerait disponibilité, dépôt et accès."
  },
  events: {
    ...es.events,
    label: "Événements",
    title: "Des nuits avec leur propre nom.",
    cta: "Agenda privé",
    items: [
      {
        name: "Fréquences du coucher du soleil",
        date: "19 juin",
        time: "18:30 - 22:30",
        artist: "Nora Azul",
        image: "/beach-club/sunset-session.png",
        alt: "Session DJ au coucher du soleil avec des invités élégants au bord de la mer",
        tag: "DJ invitée"
      },
      {
        name: "La longue table",
        date: "28 juin",
        time: "13:00 - 17:00",
        artist: "Rituel de fruits de mer",
        image: "/beach-club/gastronomy.png",
        alt: "Déjeuner méditerranéen avec fruits de mer et cocktails",
        tag: "Gastronomie"
      },
      {
        name: "Bain de lune",
        date: "11 juil.",
        time: "21:00 - 02:00",
        artist: "House au bord de l'eau",
        image: "/beach-club/sunset-session.png",
        alt: "Scène nocturne avec cabine DJ et lumière de coucher du soleil",
        tag: "Nuit"
      },
      {
        name: "Palma après le coucher du soleil",
        date: "23 juil.",
        time: "20:00 - 01:00",
        artist: "Saxophone en direct + vinyle",
        image: "/beach-club/private-events.png",
        alt: "Dîner privé avec bougies et vue sur la mer",
        tag: "En direct"
      }
    ]
  },
  gastronomy: {
    ...es.gastronomy,
    label: "Gastronomie",
    title: "Cuisine de côte. Verres à température d'été.",
    line: "Crus, braises, riz, agrumes, herbes et cocktails pensés pour le soleil bas.",
    explore: "Explorer la carte",
    overlayTitle: "La carte complète",
    overlayIntro: "Une séquence méditerranéenne pensée pour passer du déjeuner au coucher du soleil sans perdre la température.",
    alt: "Assiettes de fruits de mer méditerranéens et cocktails orange sur la côte",
    menu: [
      { type: "Cru", name: "Bar, citron vert, huile verte", price: "24" },
      { type: "Feu", name: "Crevette rouge, sauge, flamme douce", price: "32" },
      { type: "Riz", name: "Riz crémeux de la mer", price: "34" },
      { type: "Doux", name: "Figue, yaourt glacé, miel salin", price: "14" }
    ],
    cocktails: ["Spritz à l'orange amère", "Negroni salin", "Martini à la feuille de figuier", "Highball méditerranéen"]
  },
  gallery: {
    ...es.gallery,
    label: "Galerie",
    title: "Des instants qui n'ont pas besoin d'explication.",
    items: [
      {
        title: "Transats en première ligne",
        image: "/beach-club/hero-beach-club.png",
        alt: "Transats du beach club au bord de la Méditerranée"
      },
      {
        title: "DJ à l'heure bleue",
        image: "/beach-club/sunset-session.png",
        alt: "Cabine DJ illuminée au coucher du soleil"
      },
      {
        title: "Fruits de mer et agrumes",
        image: "/beach-club/gastronomy.png",
        alt: "Assiettes de fruits de mer et cocktails"
      },
      {
        title: "Table privée",
        image: "/beach-club/private-events.png",
        alt: "Table de dîner privée au coucher du soleil"
      },
      {
        title: "Service doré",
        image: "/beach-club/hero-beach-club.png",
        alt: "Service premium de transats"
      },
      {
        title: "Verres tardifs",
        image: "/beach-club/private-events.png",
        alt: "Bougies et verres de vin sur la côte"
      },
      {
        title: "Heure du cocktail",
        image: "/beach-club/gastronomy.png",
        alt: "Cocktails orange sur une table méditerranéenne"
      },
      {
        title: "Son sur l'eau",
        image: "/beach-club/sunset-session.png",
        alt: "Invités profitant d'une session musicale au coucher du soleil"
      }
    ]
  },
  location: {
    ...es.location,
    label: "Localisation",
    title: "Une adresse à l'Eixample avec une âme méditerranéenne.",
    address: "Carrer d'Aragó 284, L'Eixample, Barcelone",
    schedule: "Tous les jours · 10:00 - 02:00",
    mapTitle: "Carte d'Eixample Beach Club à l'Eixample",
    finalCta: "Réserver avant le coucher du soleil"
  },
  footer: {
    ...es.footer,
    line: "Un beach club méditerranéen fictif transformé en expérience digitale de luxe."
  }
};

export const beachClubCopy: Record<Language, BeachClubCopy> = {
  es,
  ca,
  en,
  fr
};
