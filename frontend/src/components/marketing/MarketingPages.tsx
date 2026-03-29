import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  formatMarketingDate,
  getMarketingContent,
  getMarketingPath,
  getPostBySlug,
  marketingLocales,
  type MarketingLocale,
} from '@/lib/marketingContent';
import { MarketingCookieBanner } from './MarketingCookieBanner';
import { MarketingContactForm } from './MarketingContactForm';
import { MarketingShell } from './MarketingShell';

export function MarketingHomePage({ locale }: { locale: MarketingLocale }) {
  const marketing = getMarketingContent(locale);
  const heroUi = {
    es: {
      homeLabel: 'Home',
      login: 'Login',
      primaryCta: 'Explorar Propiedades',
      secondaryCta: 'Quiero vender mi propiedad',
      badge: 'Alta selección • compradores calificados',
      displayTitle: 'Casas en Compra,\nVenta y\nDepartamentos en\nRenta en México',
      searchPlaceholder: 'Buscar por zona, tipo de propiedad o estilo de vida...',
      searchButton: 'Buscar',
    },
    en: {
      homeLabel: 'Home',
      login: 'Login',
      primaryCta: 'Explore Properties',
      secondaryCta: 'I want to sell my property',
      badge: 'Curated selection • qualified buyers',
      displayTitle: 'Homes for Purchase,\nSale and\nRental Apartments\nin Mexico',
      searchPlaceholder: 'Search by area, property type or lifestyle...',
      searchButton: 'Search',
    },
    fr: {
      homeLabel: 'Home',
      login: 'Login',
      primaryCta: 'Explorer les proprietes',
      secondaryCta: 'Je veux vendre mon bien',
      badge: 'Sélection premium • acheteurs qualifiés',
      displayTitle: 'Maisons a l achat,\na la vente et\nappartements en\nlocation au Mexique',
      searchPlaceholder: 'Rechercher par zone, type de bien ou style de vie...',
      searchButton: 'Rechercher',
    },
    it: {
      homeLabel: 'Home',
      login: 'Login',
      primaryCta: 'Esplora proprieta',
      secondaryCta: 'Voglio vendere il mio immobile',
      badge: 'Selezione premium • acquirenti qualificati',
      displayTitle: 'Case in acquisto,\nin vendita e\nappartamenti in\naffitto in Messico',
      searchPlaceholder: 'Cerca per zona, tipo di immobile o stile di vita...',
      searchButton: 'Cerca',
    },
    de: {
      homeLabel: 'Home',
      login: 'Login',
      primaryCta: 'Immobilien entdecken',
      secondaryCta: 'Ich möchte meine Immobilie verkaufen',
      badge: 'Premium-Auswahl • qualifizierte Käufer',
      displayTitle: 'Hauser zum Kauf,\nVerkauf und\nWohnungen zur\nMiete in Mexiko',
      searchPlaceholder: 'Nach Lage, Immobilientyp oder Lebensstil suchen...',
      searchButton: 'Suchen',
    },
  }[locale];

  return (
    <MarketingShell locale={locale} page="home" hideHeader>
      <section className="px-0 pt-3 md:px-3 md:pt-5">
        <div className="mx-auto overflow-hidden rounded-[1.75rem] border border-stone-200/90 bg-[#f7f1e8] shadow-[0_18px_50px_rgba(54,38,20,0.08)] md:w-[calc(100%_-_1.5rem)] md:max-w-[1600px]">
          <div className="relative min-h-[640px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/marketing/hero-bg.jpg')" }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(248,244,238,0.95) 0%, rgba(248,244,238,0.91) 35%, rgba(248,244,238,0.48) 62%, rgba(248,244,238,0.1) 100%)',
              }}
              aria-hidden="true"
            />

            <div className="relative flex min-h-[640px] flex-col">
              <div className="flex items-start justify-between gap-6 px-4 py-4 lg:px-8 lg:py-5">
                <Link href={getMarketingPath(locale, 'home')} className="flex items-center gap-4">
                  <div className="relative h-[82px] w-[92px] shrink-0 overflow-hidden rounded-[2px] bg-black">
                    <Image src="/marketing/logo.png" alt="Cervantes Bienes Raíces" fill className="object-contain p-1" sizes="92px" priority />
                  </div>
                  <div className="hidden min-w-0 lg:block">
                    <p className="truncate text-[11px] uppercase tracking-[0.32em] text-stone-500">Cervantes Bienes Raíces • CDMX</p>
                  </div>
                </Link>

                <div className="flex items-center gap-4 lg:gap-6">
                  <nav className="hidden items-center gap-7 text-[15px] font-medium text-stone-800 xl:flex">
                    <Link href={getMarketingPath(locale, 'home')} className="flex items-center gap-1">
                      <span>{heroUi.homeLabel}</span>
                      <span className="text-[9px] text-stone-500">v</span>
                    </Link>
                    <Link href={getMarketingPath(locale, 'about')} className="flex items-center gap-1">
                      <span>{marketing.nav.about}</span>
                      <span className="text-[9px] text-stone-500">v</span>
                    </Link>
                    <Link href={getMarketingPath(locale, 'services')} className="flex items-center gap-1">
                      <span>{marketing.nav.services}</span>
                      <span className="text-[9px] text-stone-500">v</span>
                    </Link>
                    <Link href={getMarketingPath(locale, 'blog')} className="flex items-center gap-1">
                      <span>{marketing.nav.blog}</span>
                      <span className="text-[9px] text-stone-500">v</span>
                    </Link>
                    <Link href={getMarketingPath(locale, 'contact')} className="flex items-center gap-1">
                      <span>{marketing.nav.contact}</span>
                      <span className="text-[9px] text-stone-500">v</span>
                    </Link>
                  </nav>

                  <div className="hidden items-center gap-2 text-sm font-semibold text-stone-700 lg:flex">
                    {marketingLocales.map((item) => (
                      <Link key={item} href={getMarketingPath(item, 'home')} className={item === locale ? 'text-stone-950' : 'text-stone-500'}>
                        {item.toUpperCase()}
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/login"
                    className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-stone-200/90 bg-white/88 px-4 text-sm font-semibold text-stone-800 shadow-[0_10px_25px_rgba(58,40,21,0.08)]"
                  >
                    <span>{heroUi.login}</span>
                  </Link>
                </div>
              </div>

              <div className="flex flex-1 items-start px-4 pb-0 pt-2 lg:px-8 lg:pt-3">
                <div className="max-w-[650px]">
                  <h1 className="whitespace-pre-line text-[clamp(3.2rem,7vw,5.1rem)] font-extrabold leading-[0.9] tracking-[-0.065em] text-stone-950">
                    {heroUi.displayTitle}
                  </h1>
                  <p className="mt-5 max-w-[760px] text-[15px] leading-7 text-stone-600">
                    Acompañamos a compradores, propietarios e inversionistas con valuacion profesional, asesoria legal y una
                    estrategia comercial de alto nivel para propiedades selectas en Ciudad de Mexico.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link href={getMarketingPath(locale, 'services')} className="rounded-full bg-[#ead4a6] px-6 py-3 text-[15px] font-semibold text-stone-900 shadow-[0_10px_20px_rgba(88,61,25,0.08)]">
                      {heroUi.primaryCta}
                    </Link>
                    <Link href={getMarketingPath(locale, 'contact')} className="rounded-full bg-white/88 px-6 py-3 text-[15px] font-semibold text-stone-900 shadow-[0_10px_20px_rgba(88,61,25,0.08)]">
                      {heroUi.secondaryCta}
                    </Link>
                    <span className="rounded-full bg-white/70 px-4 py-3 text-xs font-semibold text-stone-600 shadow-[0_10px_20px_rgba(88,61,25,0.05)]">
                      {heroUi.badge}
                    </span>
                  </div>

                  <form className="mt-5 max-w-[640px]">
                    <div className="flex flex-col gap-3 rounded-[1.6rem] bg-white/70 p-3 shadow-[0_12px_30px_rgba(57,41,23,0.08)] sm:flex-row sm:items-center">
                      <input
                        type="text"
                        placeholder={heroUi.searchPlaceholder}
                        className="h-14 flex-1 rounded-full border border-stone-200/80 bg-white px-5 text-base text-stone-700 outline-none"
                      />
                      <button
                        type="button"
                        className="h-14 min-w-[180px] rounded-full border border-[#d8bf8c] bg-[#ead4a6] px-5 text-base font-semibold text-stone-900"
                      >
                        {heroUi.searchButton}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <MarketingCookieBanner locale={locale} />
        </div>

        <div className="marketing-container relative z-10 grid gap-3 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {marketing.stats.map((item) => (
            <div key={item.label} className="marketing-card bg-white/82 p-5">
              <p className="text-3xl font-semibold text-stone-900">{item.value}</p>
              <p className="mt-2 text-sm text-stone-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="marketing-section">
        <div className="marketing-container">
          <div className="max-w-3xl">
            <p className="marketing-kicker">{marketing.nav.about}</p>
            <h2 className="marketing-display text-5xl text-stone-900">{marketing.about.intro}</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">{marketing.about.paragraphs[2]}</p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {marketing.about.philosophyItems.map((item) => (
              <article key={item.title} className="marketing-card p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-amber-700">{item.title}</p>
                <p className="mt-4 text-base leading-7 text-stone-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section border-y border-stone-200/80 bg-white/60">
        <div className="marketing-container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="marketing-kicker">{marketing.nav.services}</p>
              <h2 className="marketing-display text-5xl text-stone-900">{marketing.services.title}</h2>
            </div>
            <Link href={getMarketingPath(locale, 'services')} className="marketing-button-secondary w-fit">
              {marketing.ctas.services}
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {marketing.services.items.map((service) => (
              <article key={service.title} className="marketing-card p-6">
                <h3 className="text-2xl font-semibold text-stone-900">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-stone-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section border-y border-stone-200/80 bg-white/70">
        <div className="marketing-container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="marketing-kicker">{marketing.nav.blog}</p>
              <h2 className="marketing-display text-5xl text-stone-900">{marketing.blog.title}</h2>
            </div>
            <Link href={getMarketingPath(locale, 'blog')} className="marketing-button-secondary w-fit">
              {marketing.ctas.allArticles}
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {marketing.blog.posts.map((post) => (
              <article key={post.slug} className="marketing-card overflow-hidden">
                <div className="relative h-56">
                  <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
                    {formatMarketingDate(locale, post.date)} · {post.readTimeMinutes} min
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-stone-900">{post.title}</h3>
                  <p className="mt-4 text-base leading-7 text-stone-600">{post.excerpt}</p>
                  <Link href={getMarketingPath(locale, 'blogPost', post.slug)} className="marketing-link mt-6 inline-flex">
                    {marketing.ctas.readArticle}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section">
        <div className="marketing-container grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="marketing-panel p-8">
            <p className="marketing-kicker">{marketing.nav.contact}</p>
            <h2 className="marketing-display mt-3 text-5xl text-stone-900">{marketing.contact.title}</h2>
            <div className="mt-6 grid gap-3">
              {marketing.contact.highlights.map((highlight) => (
                <div key={highlight} className="marketing-card p-4">
                  <p className="text-sm font-medium text-stone-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <MarketingContactForm
            locale={locale}
            pagePath={getMarketingPath(locale, 'home')}
            form={marketing.contact.form}
          />
        </div>
      </section>
    </MarketingShell>
  );
}

export function MarketingAboutPage({ locale }: { locale: MarketingLocale }) {
  const marketing = getMarketingContent(locale);

  return (
    <MarketingShell locale={locale} page="about">
      <section className="marketing-section">
        <div className="marketing-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="marketing-kicker">{marketing.nav.about}</p>
            <h1 className="marketing-display mt-3 text-6xl text-stone-900">{marketing.about.title}</h1>
            <div className="mt-8 space-y-5 text-lg leading-8 text-stone-600">
              {marketing.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="marketing-panel p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-stone-500">{marketing.about.missionTitle}</p>
              <p className="mt-4 text-lg leading-8 text-stone-700">{marketing.about.mission}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {marketing.stats.map((item) => (
                <div key={item.label} className="marketing-card p-5">
                  <p className="text-3xl font-semibold text-stone-900">{item.value}</p>
                  <p className="mt-2 text-sm text-stone-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="marketing-section border-y border-stone-200/80 bg-white/70">
        <div className="marketing-container">
          <p className="marketing-kicker">{marketing.about.philosophyTitle}</p>
          <h2 className="marketing-display mt-3 text-5xl text-stone-900">{marketing.about.philosophyIntro}</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {marketing.about.philosophyItems.map((item) => (
              <article key={item.title} className="marketing-card p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-amber-700">{item.title}</p>
                <p className="mt-4 text-base leading-7 text-stone-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

export function MarketingServicesPage({ locale }: { locale: MarketingLocale }) {
  const marketing = getMarketingContent(locale);

  return (
    <MarketingShell locale={locale} page="services">
      <section className="marketing-section">
        <div className="marketing-container">
          <p className="marketing-kicker">{marketing.nav.services}</p>
          <h1 className="marketing-display mt-3 max-w-4xl text-6xl text-stone-900">{marketing.services.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">{marketing.services.intro}</p>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {marketing.services.items.map((service) => (
              <article key={service.title} className="marketing-card p-7">
                <h2 className="text-2xl font-semibold text-stone-900">{service.title}</h2>
                <p className="mt-4 text-base leading-7 text-stone-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section border-y border-stone-200/80 bg-white/70">
        <div className="marketing-container">
          <p className="marketing-kicker">{marketing.nav.services}</p>
          <h2 className="marketing-display mt-3 text-5xl text-stone-900">{marketing.services.differentiatorsTitle}</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {marketing.services.differentiators.map((item) => (
              <article key={item.title} className="marketing-card p-6">
                <h3 className="text-xl font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-stone-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

export function MarketingContactPage({ locale }: { locale: MarketingLocale }) {
  const marketing = getMarketingContent(locale);

  return (
    <MarketingShell locale={locale} page="contact">
      <section className="marketing-section">
        <div className="marketing-container grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="marketing-kicker">{marketing.nav.contact}</p>
            <h1 className="marketing-display mt-3 text-6xl text-stone-900">{marketing.contact.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">{marketing.contact.intro}</p>

            <div className="mt-8 grid gap-3">
              {marketing.contact.highlights.map((highlight) => (
                <div key={highlight} className="marketing-card p-4">
                  <p className="text-sm font-medium text-stone-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <MarketingContactForm
            locale={locale}
            pagePath={getMarketingPath(locale, 'contact')}
            form={marketing.contact.form}
          />
        </div>
      </section>

      <section className="marketing-section border-y border-stone-200/80 bg-white/70">
        <div className="marketing-container grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="marketing-kicker">{marketing.footer.contact}</p>
            <h2 className="marketing-display mt-3 text-5xl text-stone-900">{marketing.contact.coverageTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">{marketing.contact.coverageIntro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {marketing.areas.map((area) => (
                <span key={area} className="marketing-chip">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {marketing.contact.channels.map((channel) => (
              <a
                key={channel.title}
                href={channel.href}
                className="marketing-card p-6"
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <p className="text-sm uppercase tracking-[0.18em] text-stone-500">{channel.title}</p>
                <h3 className="mt-3 text-2xl font-semibold text-stone-900">{channel.value}</h3>
                <p className="mt-4 text-base leading-7 text-stone-600">{channel.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

export function MarketingBlogPage({ locale }: { locale: MarketingLocale }) {
  const marketing = getMarketingContent(locale);

  return (
    <MarketingShell locale={locale} page="blog">
      <section className="marketing-section">
        <div className="marketing-container">
          <p className="marketing-kicker">{marketing.nav.blog}</p>
          <h1 className="marketing-display mt-3 max-w-4xl text-6xl text-stone-900">{marketing.blog.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">{marketing.blog.intro}</p>

          <div className="mt-12 grid gap-6">
            {marketing.blog.posts.map((post) => (
              <article key={post.slug} className="marketing-card grid overflow-hidden lg:grid-cols-[320px_1fr]">
                <div className="relative min-h-64">
                  <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="320px" />
                </div>
                <div className="p-7">
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
                    {formatMarketingDate(locale, post.date)} · {post.author} · {post.readTimeMinutes} min
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-stone-900">{post.title}</h2>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-stone-600">{post.excerpt}</p>
                  <Link href={getMarketingPath(locale, 'blogPost', post.slug)} className="marketing-link mt-6 inline-flex">
                    {marketing.ctas.readArticle}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

export function MarketingBlogPostPage({ locale, slug }: { locale: MarketingLocale; slug: string }) {
  const marketing = getMarketingContent(locale);
  const post = getPostBySlug(locale, slug);

  if (!post) notFound();

  return (
    <MarketingShell locale={locale} page="blogPost" slug={slug}>
      <section className="marketing-section">
        <div className="marketing-container">
          <div className="mx-auto max-w-4xl">
            <p className="marketing-kicker">{marketing.nav.blog}</p>
            <h1 className="marketing-display mt-3 text-6xl text-stone-900">{post.title}</h1>
            <p className="mt-6 text-sm uppercase tracking-[0.18em] text-stone-500">
              {formatMarketingDate(locale, post.date)} · {post.author} · {post.readTimeMinutes} min
            </p>
            <p className="mt-6 text-lg leading-8 text-stone-600">{post.excerpt}</p>
          </div>

          <div className="relative mx-auto mt-12 h-80 max-w-5xl overflow-hidden rounded-[2rem]">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="(min-width: 1280px) 1200px, 100vw" />
          </div>

          <article className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-8 text-stone-700">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>
    </MarketingShell>
  );
}
