import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThree from "@/layouts/footers/FooterThree";
import styles from "./PremiumHome.module.scss";
import OrganizationSchema from "@/components/common/OrganizationSchema";
import { servicesEs } from "@/data/services";

type FeaturedProperty = {
  id: string;
  status: "Venta" | "Renta" | "Inversión";
  title: string;
  location: string;
  priceLabel: string;
  beds?: number;
  baths?: number;
  areaM2?: number;
  imageUrl: string;
};

const featuredProperties: FeaturedProperty[] = [
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
];

const philosophy = [
  "Confianza. Construimos relaciones duraderas basadas en transparencia, ética y confidencialidad.",
  "Precisión. Cada recomendación está respaldada por análisis reales del mercado premium y datos comparativos actualizados.",
  "Excelencia. Buscamos siempre la mejor oportunidad para nuestros clientes, ya sea en ubicación, valor, retorno o calidad de vida.",
];

const ownerBenefits = [
  "Valuación profesional y análisis de mercado.",
  "Posicionamiento premium y difusión selectiva.",
  "Filtro de compradores nacionales y extranjeros.",
  "Acompañamiento legal y documental de principio a fin.",
  "Seguimiento comercial con reportes claros.",
];

const trustSignals = [
  { value: "+20", label: "Años de experiencia en asesoría inmobiliaria" },
  { value: "5", label: "Zonas clave: Polanco, Lomas, Condesa, Roma y Santa Fe" },
  { value: "Legal", label: "Revisión documental, contratos y cierre seguro" },
  { value: "Premium", label: "Enfoque boutique para compra, venta e inversión" },
];

const aboutParagraphs = [
  "En Cervantes Bienes Raíces somos una agencia inmobiliaria profesional especializada en bienes raíces de lujo en Ciudad de México. Trabajamos con propiedades exclusivas y de alto valor en Polanco, Lomas de Chapultepec, Condesa, Roma y Santa Fe.",
  "Nuestro equipo ofrece asesoría personalizada para compradores nacionales, expatriados y extranjeros interesados en adquirir propiedades premium en México, ya sea para vivir, invertir o diversificar patrimonio.",
  "Contamos con amplia experiencia en valuación inmobiliaria, análisis de mercado, negociación estratégica y acompañamiento legal, garantizando procesos de compra-venta transparentes, eficientes y seguros.",
  "En cada operación ofrecemos acompañamiento integral: desde la búsqueda de la propiedad ideal hasta la negociación, revisión de documentos, trámites legales y entrega final.",
];

const testimonials = [
  {
    quote:
      "Gracias a Cervantes bienes raíces pude vender mi casa que llevaba 2 años y no se vendía.",
    author: "Cliente",
  },
  {
    quote:
      "Cuando contacté a Cervantes bienes raíces me enseñaron varios departamentos hasta que encontré el que más me gustaba.",
    author: "Cliente",
  },
  {
    quote:
      "Javier Cervantes me acompañó en el proceso de venta de mi casa de principio a fin, me presentó y coordinó todo el tema con la notaría.",
    author: "Cliente",
  },
  {
    quote:
      "Julio Cervantes me consiguió el depa donde vivo justo con las especificaciones que pedí, sin tantas vueltas y sin enseñarme de más.",
    author: "Cliente",
  },
];

const HomePremium = () => {
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
            <h1 className={styles.heroTitle}>
              Casas en Compra, Venta y Departamentos en Renta en México
            </h1>
            <p className={styles.heroSub}>
              Acompañamos a compradores, propietarios e inversionistas con
              valuación profesional, asesoría legal y una estrategia comercial de
              alto nivel para propiedades selectas en Ciudad de México.
            </p>

            <div className={styles.heroActions}>
              <a className={`${styles.btn} ${styles.btnPrimary}`} href="/listing_06">
                Explorar Propiedades
              </a>
              <a className={styles.btn} href="/contact">
                Quiero Vender mi Propiedad
              </a>
              <span className={styles.pill}>
                <strong>Alta selección</strong> • compradores calificados
              </span>
            </div>

            <div className={styles.searchShell}>
              <span className={styles.srOnly}>Búsqueda de propiedades</span>
              <div className={styles.searchRow}>
                <input
                  className={styles.input}
                  placeholder="Buscar por zona, tipo de propiedad o estilo de vida…"
                  aria-label="Buscar propiedades"
                />
                <a className={`${styles.btn} ${styles.btnPrimary}`} href="/listing_06">
                  Buscar
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.kicker}>Quiénes somos</span>
            <h2 className={styles.h2}>Asesoría inmobiliaria profesional para propiedades premium</h2>
            <p className={styles.lead}>
              Representamos a compradores, propietarios e inversionistas con
              una mezcla precisa de mercado, criterio comercial y acompañamiento
              legal en las zonas premium de CDMX.
            </p>

            <div className={styles.grid2}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Quiénes Somos</h3>
                {aboutParagraphs.slice(0, 2).map((paragraph) => (
                  <p key={paragraph} className={styles.cardText}>
                    {paragraph}
                  </p>
                ))}
                <div className={styles.ctaRow}>
                  <a className={`${styles.btn} ${styles.btnPrimary}`} href="/quienes-somos">
                    Conocer a Cervantes
                  </a>
                  <a className={styles.btn} href="/contact">
                    Solicitar una asesoría
                  </a>
                </div>
              </article>

              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Nuestra filosofía</h3>
                <p className={styles.cardText}>
                  Cada propiedad representa mucho más que un activo
                  inmobiliario: es un espacio de vida, un patrimonio personal y
                  un proyecto a largo plazo.
                </p>
                <ul className={styles.checkList}>
                  {philosophy.map((item) => (
                    <li key={item} className={styles.checkItem}>
                      <span className={styles.checkDot} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.kicker}>Servicios</span>
            <h2 className={styles.h2}>Asesoría integral, estándar premium</h2>
            <p className={styles.lead}>
              Soluciones premium para comprar, vender e invertir en las zonas
              más exclusivas de Ciudad de México.
            </p>

            <div className={styles.services}>
              {servicesEs.map((service) => (
                <div key={service.title} className={styles.serviceCard}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceText}>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.kicker}>Selección</span>
            <h2 className={styles.h2}>Propiedades destacadas</h2>
            <p className={styles.lead}>
              Fichas con imagen protagonista, etiquetas refinadas y detalle
              esencial. Sin ruido de marketplace.
            </p>

            <div className={styles.propertyGrid}>
              {featuredProperties.map((property) => (
                <article key={property.id} className={styles.propertyCard}>
                  <div
                    className={styles.propertyMedia}
                    style={{ backgroundImage: `url(${property.imageUrl})` }}
                    role="img"
                    aria-label={`${property.title} en ${property.location}`}
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
                          <span>{property.areaM2} m²</span>
                        </>
                      ) : null}
                      {typeof property.beds === "number" ? (
                        <>
                          <span>•</span>
                          <span>{property.beds} rec.</span>
                        </>
                      ) : null}
                      {typeof property.baths === "number" ? (
                        <>
                          <span>•</span>
                          <span>{property.baths} baños</span>
                        </>
                      ) : null}
                    </div>
                    <div className={styles.ctaRow}>
                      <a className={`${styles.btn} ${styles.btnPrimary}`} href="/listing_06">
                        Ver detalles
                      </a>
                      <a className={styles.btn} href="/contact">
                        Agendar visita
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.seller}`}>
          <div className={styles.container}>
            <span className={styles.kicker}>Para propietarios</span>
            <h2 className={styles.h2}>
              Venda su propiedad con estrategia, discreción y compradores
              calificados
            </h2>
            <p className={styles.lead}>
              Un proceso claro para maximizar valor y minimizar fricción, con
              reportes de seguimiento y acompañamiento legal.
            </p>

            <div className={styles.grid2}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Beneficios clave</h3>
                <ul className={styles.checkList}>
                  {ownerBenefits.map((item) => (
                    <li key={item} className={styles.checkItem}>
                      <span className={styles.checkDot} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={styles.ctaRow}>
                  <a className={`${styles.btn} ${styles.btnPrimary}`} href="/contact">
                    Solicitar una valuación
                  </a>
                  <a className={styles.btn} href="/contact">
                    Agende una asesoría privada
                  </a>
                </div>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Discreción y control</h3>
                <p className={styles.cardText}>
                  Priorizamos confidencialidad, agenda cuidada y una comunicación
                  clara. Ideal para propiedades de alto valor y clientes
                  selectivos.
                </p>
                <div className={styles.ctaRow}>
                  <a className={styles.btn} href="/aviso-privacidad">
                    Política de privacidad
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.kicker}>Autoridad</span>
            <h2 className={styles.h2}>Confianza respaldada por proceso</h2>
            <p className={styles.lead}>
              Nuestro enfoque se basa en la discreción, la ética profesional y
              una filosofía de servicio centrada 100% en el cliente.
            </p>

            <div className={styles.trustRow}>
              {trustSignals.map((item) => (
                <div key={item.value} className={styles.stat}>
                  <div className={styles.statValue}>{item.value}</div>
                  <div className={styles.statLabel}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.kicker}>Testimonios</span>
            <h2 className={styles.h2}>Testimoniales de Clientes</h2>
            <p className={styles.lead}>
              La satisfacción de nuestros clientes habla por sí sola. Conoce sus
              experiencias.
            </p>

            <div className={styles.testimonials}>
              {testimonials.map((item) => (
                <figure key={item.quote} className={styles.quote}>
                  <blockquote className={styles.quoteText}>
                    “{item.quote}”
                  </blockquote>
                  <figcaption className={styles.quoteMeta}>
                    {item.author}
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
                <span className={styles.kicker}>Siguiente paso</span>
                <h2 className={styles.h2}>Agende una asesoría privada</h2>
                <p className={styles.lead}>
                  Comparta su objetivo (compra, venta o inversión). Reciba un
                  plan claro: valuación, estrategia y ruta legal‑documental.
                </p>
              </div>
              <div className={styles.ctaRow}>
                <a className={`${styles.btn} ${styles.btnPrimary}`} href="/contact">
                  Agende una asesoría privada
                </a>
                <a className={styles.btn} href="/contact">
                  Solicite una valuación
                </a>
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
