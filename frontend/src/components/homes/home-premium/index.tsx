import Link from "next/link";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThree from "@/layouts/footers/FooterThree";
import styles from "./PremiumHome.module.scss";
import OrganizationSchema from "@/components/common/OrganizationSchema";
import { servicesDe, servicesEn, servicesEs, servicesFr, servicesIt } from "@/data/services";
import { getMarketingContent, type MarketingLocale } from "@/lib/marketingContent";
import LocalizedServiceLeadSections from "@/components/public/LocalizedServiceLeadSections";

type FeaturedProperty = {
  id: string;
  status: string;
  title: string;
  location: string;
  priceLabel: string;
  beds?: number;
  baths?: number;
  areaM2?: number;
  imageUrl: string;
};

const servicesByLocale = {
  es: servicesEs,
  en: servicesEn,
  fr: servicesFr,
  it: servicesIt,
  de: servicesDe,
};

const routeByLocale = {
  es: {
    about: "/quienes-somos",
    services: "/servicios",
    contact: "/contact",
    listing: "/listing_06",
    privacy: "/aviso-privacidad",
  },
  en: {
    about: "/en/about",
    services: "/en/services",
    contact: "/en/contact",
    listing: "/en/listing_06",
    privacy: "/en/privacy-policy",
  },
  fr: {
    about: "/fr/about",
    services: "/fr/services",
    contact: "/fr/contact",
    listing: "/fr/listing_06",
    privacy: "/fr/politique-confidentialite",
  },
  it: {
    about: "/it/about",
    services: "/it/services",
    contact: "/it/contact",
    listing: "/it/listing_06",
    privacy: "/it/politica-privacy",
  },
  de: {
    about: "/de/about",
    services: "/de/services",
    contact: "/de/contact",
    listing: "/de/listing_06",
    privacy: "/de/datenschutz",
  },
} as const;

const featuredProperties: Record<MarketingLocale, FeaturedProperty[]> = {
  es: [
    {
      id: "polanco-penthouse",
      status: "Venta",
      title: "Penthouse con terrazas privadas",
      location: "Polanco • CDMX",
      priceLabel: "Desde $38.9 M MXN",
      beds: 3,
      baths: 3,
      areaM2: 320,
      imageUrl:
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=2000&q=60",
    },
    {
      id: "condesa-artdeco",
      status: "Renta",
      title: "Departamento Art Déco renovado",
      location: "Condesa • CDMX",
      priceLabel: "Desde $78,000 MXN / mes",
      beds: 2,
      baths: 2,
      areaM2: 165,
      imageUrl:
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=2000&q=60",
    },
    {
      id: "roma-norte-invest",
      status: "Inversión",
      title: "Propiedad con potencial patrimonial",
      location: "Roma Norte • CDMX",
      priceLabel: "Estrategia a medida",
      beds: 4,
      baths: 4,
      areaM2: 410,
      imageUrl:
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2000&q=60",
    },
  ],
  en: [
    {
      id: "polanco-penthouse",
      status: "Sale",
      title: "Penthouse with private terraces",
      location: "Polanco • Mexico City",
      priceLabel: "From MXN 38.9M",
      beds: 3,
      baths: 3,
      areaM2: 320,
      imageUrl:
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=2000&q=60",
    },
    {
      id: "condesa-artdeco",
      status: "Rental",
      title: "Renovated Art Deco apartment",
      location: "Condesa • Mexico City",
      priceLabel: "From MXN 78,000 / month",
      beds: 2,
      baths: 2,
      areaM2: 165,
      imageUrl:
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=2000&q=60",
    },
    {
      id: "roma-norte-invest",
      status: "Investment",
      title: "Asset with long-term upside",
      location: "Roma Norte • Mexico City",
      priceLabel: "Tailored strategy",
      beds: 4,
      baths: 4,
      areaM2: 410,
      imageUrl:
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2000&q=60",
    },
  ],
  fr: [
    {
      id: "polanco-penthouse",
      status: "Vente",
      title: "Penthouse avec terrasses privées",
      location: "Polanco • Mexico",
      priceLabel: "À partir de 38,9 M MXN",
      beds: 3,
      baths: 3,
      areaM2: 320,
      imageUrl:
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=2000&q=60",
    },
    {
      id: "condesa-artdeco",
      status: "Location",
      title: "Appartement Art Déco rénové",
      location: "Condesa • Mexico",
      priceLabel: "À partir de 78 000 MXN / mois",
      beds: 2,
      baths: 2,
      areaM2: 165,
      imageUrl:
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=2000&q=60",
    },
    {
      id: "roma-norte-invest",
      status: "Investissement",
      title: "Actif à potentiel patrimonial",
      location: "Roma Norte • Mexico",
      priceLabel: "Stratégie sur mesure",
      beds: 4,
      baths: 4,
      areaM2: 410,
      imageUrl:
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2000&q=60",
    },
  ],
  it: [
    {
      id: "polanco-penthouse",
      status: "Vendita",
      title: "Penthouse con terrazze private",
      location: "Polanco • Città del Messico",
      priceLabel: "Da 38,9 M MXN",
      beds: 3,
      baths: 3,
      areaM2: 320,
      imageUrl:
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=2000&q=60",
    },
    {
      id: "condesa-artdeco",
      status: "Affitto",
      title: "Appartamento Art Déco rinnovato",
      location: "Condesa • Città del Messico",
      priceLabel: "Da 78.000 MXN / mese",
      beds: 2,
      baths: 2,
      areaM2: 165,
      imageUrl:
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=2000&q=60",
    },
    {
      id: "roma-norte-invest",
      status: "Investimento",
      title: "Immobile con potenziale patrimoniale",
      location: "Roma Norte • Città del Messico",
      priceLabel: "Strategia su misura",
      beds: 4,
      baths: 4,
      areaM2: 410,
      imageUrl:
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2000&q=60",
    },
  ],
  de: [
    {
      id: "polanco-penthouse",
      status: "Kauf",
      title: "Penthouse mit privaten Terrassen",
      location: "Polanco • Mexiko-Stadt",
      priceLabel: "Ab 38,9 Mio. MXN",
      beds: 3,
      baths: 3,
      areaM2: 320,
      imageUrl:
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=2000&q=60",
    },
    {
      id: "condesa-artdeco",
      status: "Miete",
      title: "Renovierte Art-Déco-Wohnung",
      location: "Condesa • Mexiko-Stadt",
      priceLabel: "Ab 78.000 MXN / Monat",
      beds: 2,
      baths: 2,
      areaM2: 165,
      imageUrl:
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=2000&q=60",
    },
    {
      id: "roma-norte-invest",
      status: "Investment",
      title: "Immobilie mit Vermögenspotenzial",
      location: "Roma Norte • Mexiko-Stadt",
      priceLabel: "Individuelle Strategie",
      beds: 4,
      baths: 4,
      areaM2: 410,
      imageUrl:
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2000&q=60",
    },
  ],
};

const homeUi = {
  es: {
    heroTitle: "Casas en Compra, Venta y Departamentos en Renta en México",
    heroDescription:
      "Acompañamos a compradores, propietarios e inversionistas con valuación profesional, asesoría legal y una estrategia comercial de alto nivel para propiedades selectas en Ciudad de México.",
    explore: "Explorar Propiedades",
    sell: "Quiero Vender mi Propiedad",
    selectionPrimary: "Alta selección",
    selectionSecondary: "compradores calificados",
    searchPlaceholder: "Buscar por zona, tipo de propiedad o estilo de vida...",
    search: "Buscar",
    aboutLead:
      "Representamos a compradores, propietarios e inversionistas con una mezcla precisa de mercado, criterio comercial y acompañamiento legal en las zonas premium de CDMX.",
    aboutPrimary: "Conocer a Cervantes",
    aboutSecondary: "Solicitar una asesoría",
    servicesTitle: "Asesoría integral, estándar premium",
    servicesLead:
      "Soluciones premium para comprar, vender e invertir en las zonas más exclusivas de Ciudad de México.",
    propertiesTitle: "Propiedades destacadas",
    propertiesLead:
      "Fichas con imagen protagonista, etiquetas refinadas y detalle esencial. Sin ruido de marketplace.",
    details: "Ver detalles",
    schedule: "Agendar visita",
    areaUnit: "m²",
    beds: "rec.",
    baths: "baños",
    sellerTitle:
      "Venda su propiedad con estrategia, discreción y compradores calificados",
    sellerLead:
      "Un proceso claro para maximizar valor y minimizar fricción, con reportes de seguimiento y acompañamiento legal.",
    sellerBenefitsTitle: "Beneficios clave",
    sellerPrivacyTitle: "Discreción y control",
    sellerPrivacyBody:
      "Priorizamos confidencialidad, agenda cuidada y una comunicación clara. Ideal para propiedades de alto valor y clientes selectivos.",
    valuation: "Solicitar una valuación",
    privateAdvice: "Agende una asesoría privada",
    privacy: "Política de privacidad",
    authorityTitle: "Confianza respaldada por proceso",
    authorityLead:
      "Nuestro enfoque se basa en la discreción, la ética profesional y una filosofía de servicio centrada 100% en el cliente.",
    testimonialsTitle: "Testimoniales de Clientes",
    testimonialsLead:
      "La satisfacción de nuestros clientes habla por sí sola. Conoce sus experiencias.",
    nextStep: "Siguiente paso",
    finalTitle: "Agende una asesoría privada",
    finalLead:
      "Comparta su objetivo: compra, venta o inversión. Reciba un plan claro: valuación, estrategia y ruta legal-documental.",
    finalPrimary: "Agende una asesoría privada",
    finalSecondary: "Solicite una valuación",
    trustSignals: [
      { value: "+20", label: "Años de experiencia en asesoría inmobiliaria" },
      { value: "5", label: "Zonas clave: Polanco, Lomas, Condesa, Roma y Santa Fe" },
      { value: "Legal", label: "Revisión documental, contratos y cierre seguro" },
      { value: "Premium", label: "Enfoque boutique para compra, venta e inversión" },
    ],
    ownerBenefits: [
      "Valuación profesional y análisis de mercado.",
      "Posicionamiento premium y difusión selectiva.",
      "Filtro de compradores nacionales y extranjeros.",
      "Acompañamiento legal y documental de principio a fin.",
      "Seguimiento comercial con reportes claros.",
    ],
    testimonials: [
      "Gracias a Cervantes bienes raíces pude vender mi casa que llevaba 2 años y no se vendía.",
      "Cuando contacté a Cervantes bienes raíces me enseñaron varios departamentos hasta que encontré el que más me gustaba.",
      "Javier Cervantes me acompañó en el proceso de venta de mi casa de principio a fin, me presentó y coordinó todo el tema con la notaría.",
      "Julio Cervantes me consiguió el depa donde vivo justo con las especificaciones que pedí, sin tantas vueltas y sin enseñarme de más.",
    ],
    testimonialAuthor: "Cliente",
  },
  en: {
    heroTitle: "Homes for Sale and Apartments for Rent in Mexico",
    heroDescription:
      "We guide buyers, owners and investors with professional valuation, legal coordination and a commercial strategy tailored to premium property in Mexico City.",
    explore: "Explore Properties",
    sell: "I Want to Sell My Property",
    selectionPrimary: "Curated selection",
    selectionSecondary: "qualified buyers",
    searchPlaceholder: "Search by neighborhood, property type or lifestyle...",
    search: "Search",
    aboutLead:
      "We represent buyers, sellers and investors with a practical mix of market intelligence, commercial judgment and legal coordination.",
    aboutPrimary: "Meet Cervantes",
    aboutSecondary: "Request advisory",
    servicesTitle: "Full-service advisory, premium standard",
    servicesLead:
      "Premium solutions to buy, sell and invest in the most exclusive neighborhoods of Mexico City.",
    propertiesTitle: "Featured properties",
    propertiesLead:
      "Hero images, refined tags and only the essential decision-making details. No marketplace noise.",
    details: "View details",
    schedule: "Schedule visit",
    areaUnit: "sqm",
    beds: "beds",
    baths: "baths",
    sellerTitle:
      "Sell your property with strategy, discretion and qualified buyers",
    sellerLead:
      "A clear process to maximize value and reduce friction, with reporting and legal follow-through.",
    sellerBenefitsTitle: "Key benefits",
    sellerPrivacyTitle: "Discretion and control",
    sellerPrivacyBody:
      "We prioritize confidentiality, careful scheduling and clear communication. Ideal for high-value properties and selective clients.",
    valuation: "Request valuation",
    privateAdvice: "Book a private advisory call",
    privacy: "Privacy policy",
    authorityTitle: "Trust supported by process",
    authorityLead:
      "Our work is grounded in discretion, professional ethics and a service model built entirely around the client.",
    testimonialsTitle: "Client testimonials",
    testimonialsLead:
      "The best proof is the experience our clients describe after closing.",
    nextStep: "Next step",
    finalTitle: "Book a private advisory call",
    finalLead:
      "Share your goal: acquisition, sale or investment. We will answer with valuation, strategy and a legal-document route.",
    finalPrimary: "Book private advisory",
    finalSecondary: "Request valuation",
    trustSignals: [
      { value: "20+", label: "Years in premium real-estate advisory" },
      { value: "5", label: "Core neighborhoods: Polanco, Lomas, Condesa, Roma and Santa Fe" },
      { value: "Legal", label: "Document review, contracts and secure closing" },
      { value: "Prime", label: "Boutique advisory for acquisition, sale and investment" },
    ],
    ownerBenefits: [
      "Professional valuation and market analysis.",
      "Prime positioning and selective outreach.",
      "Filtering of local and international buyers.",
      "Legal and document support from start to finish.",
      "Commercial follow-up with clear reporting.",
    ],
    testimonials: [
      "Cervantes helped us sell a home that had already spent two years on the market.",
      "They showed us several apartments until we found the one that actually fit what we wanted.",
      "Javier Cervantes supported the sale of my house from start to finish, including notary coordination.",
      "Julio Cervantes found the apartment I live in now exactly within the brief I gave him.",
    ],
    testimonialAuthor: "Client",
  },
  fr: {
    heroTitle: "Maisons à vendre et appartements à louer au Mexique",
    heroDescription:
      "Nous accompagnons acheteurs, propriétaires et investisseurs avec valorisation, coordination juridique et stratégie commerciale pour l'immobilier premium de Mexico.",
    explore: "Voir les propriétés",
    sell: "Je veux vendre mon bien",
    selectionPrimary: "Sélection premium",
    selectionSecondary: "acheteurs qualifiés",
    searchPlaceholder: "Rechercher par quartier, type de bien ou style de vie...",
    search: "Rechercher",
    aboutLead:
      "Nous accompagnons acheteurs, vendeurs et investisseurs avec lecture du marché, jugement commercial et exécution juridique.",
    aboutPrimary: "Découvrir Cervantes",
    aboutSecondary: "Demander un conseil",
    servicesTitle: "Conseil complet, standard premium",
    servicesLead:
      "Des solutions premium pour acheter, vendre et investir dans les quartiers les plus exclusifs de Mexico.",
    propertiesTitle: "Biens sélectionnés",
    propertiesLead:
      "Images fortes, étiquettes nettes et informations essentielles pour décider sans bruit inutile.",
    details: "Voir le bien",
    schedule: "Planifier une visite",
    areaUnit: "m²",
    beds: "ch.",
    baths: "sdb",
    sellerTitle:
      "Vendez votre bien avec stratégie, discrétion et acheteurs qualifiés",
    sellerLead:
      "Un processus clair pour maximiser la valeur et réduire la friction, avec suivi et coordination juridique.",
    sellerBenefitsTitle: "Bénéfices clés",
    sellerPrivacyTitle: "Discrétion et contrôle",
    sellerPrivacyBody:
      "Nous privilégions confidentialité, agenda soigné et communication claire. Idéal pour les biens de grande valeur.",
    valuation: "Demander une valorisation",
    privateAdvice: "Planifier un échange privé",
    privacy: "Politique de confidentialité",
    authorityTitle: "Une confiance soutenue par le processus",
    authorityLead:
      "Notre approche repose sur la discrétion, l'éthique professionnelle et un service centré sur le client.",
    testimonialsTitle: "Témoignages clients",
    testimonialsLead:
      "Les résultats se lisent dans l'expérience vécue par nos clients.",
    nextStep: "Prochaine étape",
    finalTitle: "Planifiez un échange privé",
    finalLead:
      "Partagez votre objectif: achat, vente ou investissement. Nous revenons avec valorisation, stratégie et route juridique.",
    finalPrimary: "Planifier un échange privé",
    finalSecondary: "Demander une valorisation",
    trustSignals: [
      { value: "20+", label: "Ans d'expérience en conseil immobilier premium" },
      { value: "5", label: "Zones clés: Polanco, Lomas, Condesa, Roma et Santa Fe" },
      { value: "Juridique", label: "Revue documentaire, contrats et closing sécurisé" },
      { value: "Premium", label: "Approche boutique pour achat, vente et investissement" },
    ],
    ownerBenefits: [
      "Valorisation professionnelle et lecture de marché.",
      "Positionnement premium et diffusion sélective.",
      "Filtrage des acheteurs locaux et internationaux.",
      "Accompagnement juridique et documentaire complet.",
      "Suivi commercial avec reporting clair.",
    ],
    testimonials: [
      "Grâce à Cervantes, nous avons vendu une maison qui stagnait depuis deux ans.",
      "Ils nous ont montré plusieurs appartements jusqu'à trouver celui qui correspondait vraiment.",
      "Javier Cervantes m'a accompagné du début à la fin, y compris avec la coordination notariale.",
      "Julio Cervantes a trouvé l'appartement dans lequel je vis aujourd'hui, exactement selon mon cahier des charges.",
    ],
    testimonialAuthor: "Client",
  },
  it: {
    heroTitle: "Case in vendita e appartamenti in affitto in Messico",
    heroDescription:
      "Affianchiamo acquirenti, proprietari e investitori con valutazione professionale, supporto legale e strategia commerciale per l'immobiliare premium di CDMX.",
    explore: "Esplora proprietà",
    sell: "Voglio vendere il mio immobile",
    selectionPrimary: "Selezione premium",
    selectionSecondary: "acquirenti qualificati",
    searchPlaceholder: "Cerca per zona, tipo di immobile o stile di vita...",
    search: "Cerca",
    aboutLead:
      "Seguiamo acquirenti, venditori e investitori con una combinazione concreta di mercato, giudizio commerciale e supporto legale.",
    aboutPrimary: "Conosci Cervantes",
    aboutSecondary: "Richiedi consulenza",
    servicesTitle: "Consulenza completa, standard premium",
    servicesLead:
      "Soluzioni premium per comprare, vendere e investire nelle zone più esclusive di Città del Messico.",
    propertiesTitle: "Proprietà in evidenza",
    propertiesLead:
      "Immagini forti, etichette pulite e dettagli essenziali. Senza il rumore da marketplace.",
    details: "Vedi dettagli",
    schedule: "Prenota visita",
    areaUnit: "mq",
    beds: "cam.",
    baths: "bagni",
    sellerTitle:
      "Vendi il tuo immobile con strategia, discrezione e acquirenti qualificati",
    sellerLead:
      "Un processo chiaro per massimizzare valore e ridurre attrito, con report e supporto legale.",
    sellerBenefitsTitle: "Vantaggi chiave",
    sellerPrivacyTitle: "Discrezione e controllo",
    sellerPrivacyBody:
      "Diamo priorità a riservatezza, agenda curata e comunicazione chiara. Ideale per immobili di alto valore.",
    valuation: "Richiedi valutazione",
    privateAdvice: "Prenota consulenza privata",
    privacy: "Informativa privacy",
    authorityTitle: "Fiducia sostenuta dal processo",
    authorityLead:
      "Il nostro approccio si basa su discrezione, etica professionale e servizio costruito attorno al cliente.",
    testimonialsTitle: "Testimonianze clienti",
    testimonialsLead:
      "La prova migliore resta l'esperienza raccontata dai nostri clienti.",
    nextStep: "Prossimo passo",
    finalTitle: "Prenota una consulenza privata",
    finalLead:
      "Condividi il tuo obiettivo: acquisto, vendita o investimento. Ti rispondiamo con valutazione, strategia e percorso legale.",
    finalPrimary: "Prenota consulenza privata",
    finalSecondary: "Richiedi valutazione",
    trustSignals: [
      { value: "20+", label: "Anni di esperienza nella consulenza immobiliare premium" },
      { value: "5", label: "Zone chiave: Polanco, Lomas, Condesa, Roma e Santa Fe" },
      { value: "Legale", label: "Revisione documenti, contratti e closing sicuro" },
      { value: "Premium", label: "Approccio boutique per acquisto, vendita e investimento" },
    ],
    ownerBenefits: [
      "Valutazione professionale e analisi di mercato.",
      "Posizionamento premium e diffusione selettiva.",
      "Filtro di acquirenti locali e internazionali.",
      "Supporto legale e documentale dall'inizio alla fine.",
      "Follow-up commerciale con report chiari.",
    ],
    testimonials: [
      "Con Cervantes siamo riusciti a vendere una casa che era rimasta sul mercato per due anni.",
      "Ci hanno mostrato vari appartamenti fino a trovare quello davvero giusto per noi.",
      "Javier Cervantes mi ha seguito dall'inizio alla fine, compreso il coordinamento con il notaio.",
      "Julio Cervantes ha trovato l'appartamento in cui vivo oggi esattamente con le specifiche richieste.",
    ],
    testimonialAuthor: "Cliente",
  },
  de: {
    heroTitle: "Häuser zum Kauf und Apartments zur Miete in Mexiko",
    heroDescription:
      "Wir begleiten Käufer, Eigentümer und Investoren mit professioneller Bewertung, rechtlicher Koordination und klarer Vermarktungsstrategie im Premiumsegment von Mexiko-Stadt.",
    explore: "Immobilien ansehen",
    sell: "Ich möchte meine Immobilie verkaufen",
    selectionPrimary: "Premium-Auswahl",
    selectionSecondary: "qualifizierte Käufer",
    searchPlaceholder: "Nach Lage, Immobilientyp oder Lebensstil suchen...",
    search: "Suchen",
    aboutLead:
      "Wir begleiten Käufer, Verkäufer und Investoren mit Marktkenntnis, kommerziellem Urteilsvermögen und rechtlicher Steuerung.",
    aboutPrimary: "Cervantes kennenlernen",
    aboutSecondary: "Beratung anfragen",
    servicesTitle: "Ganzheitliche Beratung, Premium-Standard",
    servicesLead:
      "Premium-Lösungen für Kauf, Verkauf und Investment in den exklusivsten Vierteln von Mexiko-Stadt.",
    propertiesTitle: "Ausgewählte Immobilien",
    propertiesLead:
      "Starke Bilder, klare Kennzeichnung und nur die Details, die für Entscheidungen wirklich relevant sind.",
    details: "Details ansehen",
    schedule: "Besichtigung planen",
    areaUnit: "m²",
    beds: "Zi.",
    baths: "Bäder",
    sellerTitle:
      "Verkaufen Sie Ihre Immobilie mit Strategie, Diskretion und qualifizierten Käufern",
    sellerLead:
      "Ein klarer Prozess, um Wert zu maximieren und Reibung zu reduzieren, mit Reporting und rechtlicher Begleitung.",
    sellerBenefitsTitle: "Wichtige Vorteile",
    sellerPrivacyTitle: "Diskretion und Kontrolle",
    sellerPrivacyBody:
      "Wir priorisieren Vertraulichkeit, saubere Terminführung und klare Kommunikation. Ideal für hochwertige Immobilien.",
    valuation: "Bewertung anfragen",
    privateAdvice: "Private Beratung buchen",
    privacy: "Datenschutz",
    authorityTitle: "Vertrauen, das auf Prozessen basiert",
    authorityLead:
      "Unser Ansatz beruht auf Diskretion, beruflicher Ethik und einem Service, der vollständig um den Kunden herum gebaut ist.",
    testimonialsTitle: "Kundenstimmen",
    testimonialsLead:
      "Die beste Referenz bleibt die Erfahrung unserer Kunden nach dem Abschluss.",
    nextStep: "Nächster Schritt",
    finalTitle: "Private Beratung buchen",
    finalLead:
      "Teilen Sie Ihr Ziel: Kauf, Verkauf oder Investment. Sie erhalten Bewertung, Strategie und einen rechtlich klaren Ablauf.",
    finalPrimary: "Private Beratung buchen",
    finalSecondary: "Bewertung anfragen",
    trustSignals: [
      { value: "20+", label: "Jahre Erfahrung in Premium-Immobilienberatung" },
      { value: "5", label: "Kernlagen: Polanco, Lomas, Condesa, Roma und Santa Fe" },
      { value: "Legal", label: "Dokumentenprüfung, Verträge und sicherer Abschluss" },
      { value: "Prime", label: "Boutique-Ansatz für Kauf, Verkauf und Investment" },
    ],
    ownerBenefits: [
      "Professionelle Bewertung und Marktanalyse.",
      "Premium-Positionierung und selektive Vermarktung.",
      "Filterung lokaler und internationaler Käufer.",
      "Rechtliche und dokumentarische Begleitung von Anfang bis Ende.",
      "Kommerzielles Follow-up mit klarem Reporting.",
    ],
    testimonials: [
      "Mit Cervantes konnten wir ein Haus verkaufen, das zwei Jahre lang keinen Käufer gefunden hatte.",
      "Uns wurden mehrere Wohnungen gezeigt, bis wir die wirklich passende gefunden hatten.",
      "Javier Cervantes hat mich beim Hausverkauf von Anfang bis Ende begleitet, inklusive Notarkoordinierung.",
      "Julio Cervantes hat genau die Wohnung gefunden, in der ich heute lebe, ohne unnötige Schleifen.",
    ],
    testimonialAuthor: "Kunde",
  },
} as const;

type HomePremiumProps = {
  locale?: MarketingLocale;
};

const HomePremium = ({ locale = "es" }: HomePremiumProps) => {
  const marketing = getMarketingContent(locale);
  const routes = routeByLocale[locale];
  const ui = homeUi[locale];
  const services = servicesByLocale[locale];
  const properties = featuredProperties[locale];
  const homePath = locale === "es" ? "/" : `/${locale}`;

  return (
    <div className={styles.wrap}>
      <OrganizationSchema />
      <HeaderFive style="dark" />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true" />
          <div className={styles.heroOverlay} aria-hidden="true" />

          <div className={`${styles.container} ${styles.heroInner}`}>
            <span className={styles.kicker}>Cervantes Bienes Raíces • CDMX</span>
            <h1 className={styles.heroTitle}>{ui.heroTitle}</h1>
            <p className={styles.heroSub}>{ui.heroDescription}</p>

            <div className={styles.heroActions}>
              <Link className={`${styles.btn} ${styles.btnPrimary}`} href={routes.listing}>
                {ui.explore}
              </Link>
              <Link className={styles.btn} href={routes.contact}>
                {ui.sell}
              </Link>
              <span className={styles.pill}>
                <strong>{ui.selectionPrimary}</strong> • {ui.selectionSecondary}
              </span>
            </div>

            <div className={styles.searchShell}>
              <span className={styles.srOnly}>Property search</span>
              <div className={styles.searchRow}>
                <input
                  className={styles.input}
                  placeholder={ui.searchPlaceholder}
                  aria-label={ui.searchPlaceholder}
                />
                <Link className={`${styles.btn} ${styles.btnPrimary}`} href={routes.listing}>
                  {ui.search}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.kicker}>{marketing.nav.about}</span>
            <h2 className={styles.h2}>{marketing.about.title}</h2>
            <p className={styles.lead}>{ui.aboutLead}</p>

            <div className={styles.grid2}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>{marketing.nav.about}</h3>
                {marketing.about.paragraphs.slice(0, 2).map((paragraph) => (
                  <p key={paragraph} className={styles.cardText}>
                    {paragraph}
                  </p>
                ))}
                <div className={styles.ctaRow}>
                  <Link className={`${styles.btn} ${styles.btnPrimary}`} href={routes.about}>
                    {ui.aboutPrimary}
                  </Link>
                  <Link className={styles.btn} href={routes.contact}>
                    {ui.aboutSecondary}
                  </Link>
                </div>
              </article>

              <article className={styles.card}>
                <h3 className={styles.cardTitle}>{marketing.about.philosophyTitle}</h3>
                <p className={styles.cardText}>{marketing.about.philosophyIntro}</p>
                <ul className={styles.checkList}>
                  {marketing.about.philosophyItems.map((item) => (
                    <li key={item.title} className={styles.checkItem}>
                      <span className={styles.checkDot} aria-hidden="true" />
                      <strong>{item.title}.</strong> {item.description}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.kicker}>{marketing.nav.services}</span>
            <h2 className={styles.h2}>{ui.servicesTitle}</h2>
            <p className={styles.lead}>{ui.servicesLead}</p>

            <div className={styles.services}>
              {services.map((service) => (
                <div key={service.title} className={styles.serviceCard}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceText}>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LocalizedServiceLeadSections
          locale={locale}
          contactHref={routes.contact}
          pagePath={homePath}
        />

        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.kicker}>{ui.selectionPrimary}</span>
            <h2 className={styles.h2}>{ui.propertiesTitle}</h2>
            <p className={styles.lead}>{ui.propertiesLead}</p>

            <div className={styles.propertyGrid}>
              {properties.map((property) => (
                <article key={property.id} className={styles.propertyCard}>
                  <div
                    className={styles.propertyMedia}
                    style={{ backgroundImage: `url(${property.imageUrl})` }}
                    role="img"
                    aria-label={`${property.title} - ${property.location}`}
                  >
                    <span className={styles.badge}>{property.status}</span>
                  </div>
                  <div className={styles.propertyBody}>
                    <h3 className={styles.propertyTitle}>{property.title}</h3>
                    <div className={styles.propertyMeta}>
                      <span>{property.location}</span>
                      <span>•</span>
                      <span>{property.priceLabel}</span>
                      {typeof property.areaM2 === "number" ? (
                        <>
                          <span>•</span>
                          <span>
                            {property.areaM2} {ui.areaUnit}
                          </span>
                        </>
                      ) : null}
                      {typeof property.beds === "number" ? (
                        <>
                          <span>•</span>
                          <span>
                            {property.beds} {ui.beds}
                          </span>
                        </>
                      ) : null}
                      {typeof property.baths === "number" ? (
                        <>
                          <span>•</span>
                          <span>
                            {property.baths} {ui.baths}
                          </span>
                        </>
                      ) : null}
                    </div>
                    <div className={styles.ctaRow}>
                      <Link className={`${styles.btn} ${styles.btnPrimary}`} href={routes.listing}>
                        {ui.details}
                      </Link>
                      <Link className={styles.btn} href={routes.contact}>
                        {ui.schedule}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.seller}`}>
          <div className={styles.container}>
            <span className={styles.kicker}>{marketing.nav.contact}</span>
            <h2 className={styles.h2}>{ui.sellerTitle}</h2>
            <p className={styles.lead}>{ui.sellerLead}</p>

            <div className={styles.grid2}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{ui.sellerBenefitsTitle}</h3>
                <ul className={styles.checkList}>
                  {ui.ownerBenefits.map((item) => (
                    <li key={item} className={styles.checkItem}>
                      <span className={styles.checkDot} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={styles.ctaRow}>
                  <Link className={`${styles.btn} ${styles.btnPrimary}`} href={routes.contact}>
                    {ui.valuation}
                  </Link>
                  <Link className={styles.btn} href={routes.contact}>
                    {ui.privateAdvice}
                  </Link>
                </div>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{ui.sellerPrivacyTitle}</h3>
                <p className={styles.cardText}>{ui.sellerPrivacyBody}</p>
                <div className={styles.ctaRow}>
                  <Link className={styles.btn} href={routes.privacy}>
                    {ui.privacy}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.kicker}>{marketing.tagLine}</span>
            <h2 className={styles.h2}>{ui.authorityTitle}</h2>
            <p className={styles.lead}>{ui.authorityLead}</p>

            <div className={styles.trustRow}>
              {ui.trustSignals.map((item) => (
                <div key={item.value + item.label} className={styles.stat}>
                  <div className={styles.statValue}>{item.value}</div>
                  <div className={styles.statLabel}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.kicker}>{marketing.nav.contact}</span>
            <h2 className={styles.h2}>{ui.testimonialsTitle}</h2>
            <p className={styles.lead}>{ui.testimonialsLead}</p>

            <div className={styles.testimonials}>
              {ui.testimonials.map((item) => (
                <figure key={item} className={styles.quote}>
                  <blockquote className={styles.quoteText}>“{item}”</blockquote>
                  <figcaption className={styles.quoteMeta}>
                    {ui.testimonialAuthor}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={styles.container}>
            <div className={styles.finalPanel}>
              <div>
                <span className={styles.kicker}>{ui.nextStep}</span>
                <h2 className={styles.h2}>{ui.finalTitle}</h2>
                <p className={styles.lead}>{ui.finalLead}</p>
              </div>
              <div className={styles.ctaRow}>
                <Link className={`${styles.btn} ${styles.btnPrimary}`} href={routes.contact}>
                  {ui.finalPrimary}
                </Link>
                <Link className={styles.btn} href={routes.contact}>
                  {ui.finalSecondary}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterThree />
    </div>
  );
};

export default HomePremium;
