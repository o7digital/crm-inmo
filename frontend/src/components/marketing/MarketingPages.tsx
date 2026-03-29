import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  formatMarketingDate,
  getMarketingContent,
  getMarketingPath,
  getPostBySlug,
  type MarketingLocale,
} from '@/lib/marketingContent';
import { MarketingContactForm } from './MarketingContactForm';
import { MarketingShell } from './MarketingShell';

export function MarketingHomePage({ locale }: { locale: MarketingLocale }) {
  const marketing = getMarketingContent(locale);
  const heroUi = {
    es: {
      secondaryCta: 'Quiero vender mi propiedad',
      badge: 'Alta selección • compradores calificados',
      searchPlaceholder: 'Buscar por zona, tipo de propiedad o estilo de vida...',
      searchButton: 'Buscar',
    },
    en: {
      secondaryCta: 'I want to sell my property',
      badge: 'Curated selection • qualified buyers',
      searchPlaceholder: 'Search by area, property type or lifestyle...',
      searchButton: 'Search',
    },
    fr: {
      secondaryCta: 'Je veux vendre mon bien',
      badge: 'Sélection premium • acheteurs qualifiés',
      searchPlaceholder: 'Rechercher par zone, type de bien ou style de vie...',
      searchButton: 'Rechercher',
    },
    it: {
      secondaryCta: 'Voglio vendere il mio immobile',
      badge: 'Selezione premium • acquirenti qualificati',
      searchPlaceholder: 'Cerca per zona, tipo di immobile o stile di vita...',
      searchButton: 'Cerca',
    },
    de: {
      secondaryCta: 'Ich möchte meine Immobilie verkaufen',
      badge: 'Premium-Auswahl • qualifizierte Käufer',
      searchPlaceholder: 'Nach Lage, Immobilientyp oder Lebensstil suchen...',
      searchButton: 'Suchen',
    },
  }[locale];

  return (
    <MarketingShell locale={locale} page="home">
      <section className="border-b border-stone-200/80">
        <div className="marketing-container relative overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white/80 shadow-[0_24px_70px_rgba(57,41,23,0.12)]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/marketing/hero-bg.jpg')" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(249,245,239,0.97) 0%, rgba(249,245,239,0.95) 34%, rgba(249,245,239,0.76) 56%, rgba(249,245,239,0.2) 100%)',
            }}
            aria-hidden="true"
          />

          <div className="relative px-6 py-14 lg:px-10 lg:py-16">
            <div className="max-w-[680px] space-y-7">
            <div className="flex flex-wrap gap-3">
              {marketing.hero.tags.map((tag) => (
                <span key={tag} className="marketing-pill">
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-6">
              <p className="marketing-kicker">{marketing.hero.eyebrow}</p>
              <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.92] tracking-[-0.05em] text-stone-950 sm:text-6xl lg:text-[5.2rem]">
                {marketing.hero.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-600 lg:text-[1.15rem]">{marketing.hero.description}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link href={getMarketingPath(locale, 'services')} className="marketing-button-primary">
                {marketing.ctas.contact}
              </Link>
              <Link href={getMarketingPath(locale, 'contact')} className="marketing-button-secondary bg-white/88">
                {heroUi.secondaryCta}
              </Link>
              <span className="rounded-full border border-stone-200 bg-white/78 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                {heroUi.badge}
              </span>
            </div>

            <form className="max-w-[620px]">
              <div className="flex flex-col gap-3 rounded-[1.7rem] border border-stone-200/90 bg-white/86 p-3 shadow-[0_10px_30px_rgba(57,41,23,0.08)] sm:flex-row sm:items-center">
                <input
                  type="text"
                  placeholder={heroUi.searchPlaceholder}
                  className="h-14 flex-1 rounded-[1.25rem] border border-stone-200 bg-white px-5 text-base text-stone-700 outline-none"
                />
                <button type="button" className="marketing-button-primary h-14 min-w-[170px]">
                  {heroUi.searchButton}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="marketing-container grid gap-3 pt-5 sm:grid-cols-2 lg:grid-cols-4">
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
