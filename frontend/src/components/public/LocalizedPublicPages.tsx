import type { ReactNode } from "react";
import Link from "next/link";
import Wrapper from "@/layouts/Wrapper";
import HeaderFive from "@/layouts/headers/HeaderFive";
import FooterThree from "@/layouts/footers/FooterThree";
import ServicesContent from "@/components/services/ServicesContent";
import LocalizedContactForm from "./LocalizedContactForm";
import { servicesDe, servicesEn, servicesEs, servicesFr, servicesIt } from "@/data/services";
import { getMarketingContent, type MarketingLocale } from "@/lib/marketingContent";
import styles from "./LocalizedPublicPages.module.css";

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
    blog: "/blog",
    listing: "/listing_06",
  },
  en: {
    about: "/en/about",
    services: "/en/services",
    contact: "/en/contact",
    blog: "/en/blog",
    listing: "/en/listing_06",
  },
  fr: {
    about: "/fr/about",
    services: "/fr/services",
    contact: "/fr/contact",
    blog: "/fr/blog",
    listing: "/fr/listing_06",
  },
  it: {
    about: "/it/about",
    services: "/it/services",
    contact: "/it/contact",
    blog: "/it/blog",
    listing: "/it/listing_06",
  },
  de: {
    about: "/de/about",
    services: "/de/services",
    contact: "/de/contact",
    blog: "/de/blog",
    listing: "/de/listing_06",
  },
} as const;

const aboutCtas = {
  es: { primary: "Conocer a Cervantes", secondary: "Solicitar una asesoría" },
  en: { primary: "Meet Cervantes", secondary: "Request advisory" },
  fr: { primary: "Découvrir Cervantes", secondary: "Demander un conseil" },
  it: { primary: "Conosci Cervantes", secondary: "Richiedi consulenza" },
  de: { primary: "Cervantes kennenlernen", secondary: "Beratung anfragen" },
} as const;

const blogUi = {
  es: { back: "Volver al blog", read: "Leer artículo", minutes: "min lectura" },
  en: { back: "Back to blog", read: "Read article", minutes: "min read" },
  fr: { back: "Retour au blog", read: "Lire l'article", minutes: "min de lecture" },
  it: { back: "Torna al blog", read: "Leggi l'articolo", minutes: "min di lettura" },
  de: { back: "Zurück zum Blog", read: "Artikel lesen", minutes: "Min. Lesezeit" },
} as const;

function PageShell({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <HeaderFive />
        {children}
        <FooterThree />
      </div>
    </Wrapper>
  );
}

export function LocalizedAboutContentPage({ locale }: { locale: MarketingLocale }) {
  const marketing = getMarketingContent(locale);
  const routes = routeByLocale[locale];
  const ctas = aboutCtas[locale];

  return (
    <PageShell>
      <main className={styles.pageSection}>
        <div className="container">
          <div className={styles.pageIntro}>
            <span className={styles.smallKicker}>{marketing.nav.about}</span>
            <h1>{marketing.about.title}</h1>
            <p className="fs-22 lh-lg text-dark mt-20">{marketing.about.intro}</p>
          </div>

          <div className="row g-4">
            <div className="col-xl-7">
              <article className={styles.card}>
                {marketing.about.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="fs-22 lh-lg text-dark mb-25">
                    {paragraph}
                  </p>
                ))}
              </article>
            </div>

            <div className="col-xl-5">
              <article className={`${styles.card} mb-4`}>
                <span className={styles.smallKicker}>{marketing.about.missionTitle}</span>
                <h3 className="mb-20">{marketing.about.missionTitle}</h3>
                <p className="fs-22 lh-lg text-dark m-0">{marketing.about.mission}</p>
              </article>

              <article className={styles.card}>
                <span className={styles.smallKicker}>{marketing.about.philosophyTitle}</span>
                <h3 className="mb-20">{marketing.about.philosophyTitle}</h3>
                <p className="fs-20 text-dark mb-25">{marketing.about.philosophyIntro}</p>
                <ul className={styles.list}>
                  {marketing.about.philosophyItems.map((item) => (
                    <li key={item.title} className="fs-20 lh-lg text-dark">
                      <strong>{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ul>

                <div className={styles.ctaRow}>
                  <Link href={routes.about} className={styles.buttonSecondary}>
                    {ctas.primary}
                  </Link>
                  <Link href={routes.contact} className={styles.buttonPrimary}>
                    {ctas.secondary}
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
    </PageShell>
  );
}

export function LocalizedServicesContentPage({ locale }: { locale: MarketingLocale }) {
  const marketing = getMarketingContent(locale);
  const services = servicesByLocale[locale];
  const routes = routeByLocale[locale];

  return (
    <PageShell>
      <ServicesContent
        id="services"
        title={marketing.nav.services}
        subtitle={marketing.services.intro}
        services={services}
      />

      <section className={styles.pageSectionAlt}>
        <div className="container">
          <div className={styles.pageIntro}>
            <span className={styles.smallKicker}>{marketing.services.differentiatorsTitle}</span>
            <h2>{marketing.services.title}</h2>
            <p className="fs-22 lh-lg text-dark mt-20">{marketing.services.intro}</p>
          </div>

          <div className="row g-4">
            {marketing.services.differentiators.map((item) => (
              <div key={item.title} className="col-lg-4 col-md-6">
                <article className={styles.card}>
                  <h3 className="mb-20">{item.title}</h3>
                  <p className="fs-20 text-dark m-0">{item.description}</p>
                </article>
              </div>
            ))}
          </div>

          <div className={styles.ctaRow}>
            <Link href={routes.contact} className={styles.buttonPrimary}>
              {marketing.ctas.contact}
            </Link>
            <Link href={routes.listing} className={styles.buttonSecondary}>
              {marketing.ctas.services}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function LocalizedContactContentPage({ locale }: { locale: MarketingLocale }) {
  const marketing = getMarketingContent(locale);
  const routes = routeByLocale[locale];

  return (
    <PageShell>
      <main className={styles.pageSection}>
        <div className="container">
          <div className={styles.pageIntro}>
            <span className={styles.smallKicker}>{marketing.nav.contact}</span>
            <h1>{marketing.contact.title}</h1>
            <p className="fs-22 lh-lg text-dark mt-20">{marketing.contact.intro}</p>
          </div>

          <div className="row g-4">
            <div className="col-xl-5">
              <article className={`${styles.card} mb-4`}>
                <span className={styles.smallKicker}>{marketing.contact.coverageTitle}</span>
                <h3 className="mb-20">{marketing.contact.coverageTitle}</h3>
                <p className="fs-20 text-dark mb-25">{marketing.contact.coverageIntro}</p>
                <ul className={styles.list}>
                  {marketing.contact.highlights.map((item) => (
                    <li key={item} className="fs-20 lh-lg text-dark">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <div className="row g-4">
                {marketing.contact.channels.map((channel) => (
                  <div key={channel.value} className="col-12">
                    <a href={channel.href} className={styles.channelLink}>
                      <article className={styles.card}>
                        <span className={styles.smallKicker}>{channel.title}</span>
                        <h3 className="mb-15">{channel.value}</h3>
                        <p className="fs-18 text-dark m-0">{channel.description}</p>
                      </article>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-xl-7">
              <article className={styles.card}>
                <span className={styles.smallKicker}>{marketing.contact.form.title}</span>
                <h3 className="mb-20">{marketing.contact.form.title}</h3>
                <p className="fs-18 text-dark mb-30">{marketing.contact.form.description}</p>
                <LocalizedContactForm
                  locale={locale}
                  pagePath={routes.contact}
                  form={marketing.contact.form}
                />
              </article>
            </div>
          </div>
        </div>
      </main>
    </PageShell>
  );
}

export function LocalizedBlogContentPage({ locale }: { locale: MarketingLocale }) {
  const marketing = getMarketingContent(locale);
  const routes = routeByLocale[locale];
  const ui = blogUi[locale];

  return (
    <PageShell>
      <main className={styles.pageSection}>
        <div className="container">
          <div className={styles.pageIntro}>
            <span className={styles.smallKicker}>{marketing.nav.blog}</span>
            <h1>{marketing.blog.title}</h1>
            <p className="fs-22 lh-lg text-dark mt-20">{marketing.blog.intro}</p>
          </div>

          <div className={styles.blogGrid}>
            {marketing.blog.posts.map((post) => (
              <article key={post.slug} className={styles.blogCard}>
                <div
                  className={styles.blogMedia}
                  style={{ backgroundImage: `url(${post.coverImage})` }}
                />
                <div className={styles.blogBody}>
                  <div className={styles.meta}>
                    <span>{post.date}</span>
                    <span>{post.readTimeMinutes} {ui.minutes}</span>
                  </div>
                  <h3 className="mb-15">{post.title}</h3>
                  <p className="fs-18 text-dark mb-25">{post.excerpt}</p>
                  <Link
                    href={`${routes.blog}/${post.slug}`}
                    className={styles.buttonPrimary}
                  >
                    {ui.read}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </PageShell>
  );
}

export function LocalizedBlogPostContentPage({
  locale,
  slug,
}: {
  locale: MarketingLocale;
  slug: string;
}) {
  const marketing = getMarketingContent(locale);
  const ui = blogUi[locale];
  const routes = routeByLocale[locale];
  const post = marketing.blog.posts.find((item) => item.slug === slug);

  if (!post) {
    return null;
  }

  return (
    <PageShell>
      <main className={styles.pageSection}>
        <div className="container">
          <div className={styles.postWrap}>
            <span className={styles.smallKicker}>{marketing.nav.blog}</span>
            <h1>{post.title}</h1>

            <div className={styles.meta}>
              <span>{post.date}</span>
              <span>{post.readTimeMinutes} {ui.minutes}</span>
              <span>{post.author}</span>
            </div>

            <p className={styles.postLead}>{post.excerpt}</p>

            <div
              className={styles.postCover}
              style={{ backgroundImage: `url(${post.coverImage})` }}
            />

            <div className={`${styles.postContent} fs-22 lh-lg text-dark`}>
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className={styles.ctaRow}>
              <Link href={routes.blog} className={styles.buttonSecondary}>
                {ui.back}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
