'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getMarketingPath, type MarketingLocale } from '@/lib/marketingContent';

const copy = {
  es: {
    title: 'Uso de Cookies',
    body:
      'Utilizamos cookies para mejorar su experiencia en nuestro sitio web, analizar el trafico y personalizar el contenido. Al continuar navegando, acepta nuestro uso de cookies segun nuestra',
    policy: 'Politica de Cookies.',
    reject: 'Rechazar',
    customize: 'Personalizar',
    accept: 'Aceptar Todo',
  },
  en: {
    title: 'Cookie Usage',
    body:
      'We use cookies to improve your experience on our website, analyze traffic and personalize content. By continuing to browse, you accept our use of cookies according to our',
    policy: 'Cookie Policy.',
    reject: 'Reject',
    customize: 'Customize',
    accept: 'Accept All',
  },
  fr: {
    title: 'Utilisation des Cookies',
    body:
      'Nous utilisons des cookies pour ameliorer votre experience sur notre site, analyser le trafic et personnaliser le contenu. En continuant a naviguer, vous acceptez notre utilisation des cookies selon notre',
    policy: 'Politique de Cookies.',
    reject: 'Refuser',
    customize: 'Personnaliser',
    accept: 'Tout accepter',
  },
  it: {
    title: 'Uso dei Cookie',
    body:
      'Utilizziamo i cookie per migliorare la tua esperienza sul sito, analizzare il traffico e personalizzare i contenuti. Continuando la navigazione, accetti il nostro utilizzo dei cookie secondo la nostra',
    policy: 'Politica dei Cookie.',
    reject: 'Rifiuta',
    customize: 'Personalizza',
    accept: 'Accetta tutto',
  },
  de: {
    title: 'Cookie-Nutzung',
    body:
      'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern, den Verkehr zu analysieren und Inhalte zu personalisieren. Wenn Sie weiter surfen, akzeptieren Sie unsere Verwendung von Cookies gemaess unserer',
    policy: 'Cookie-Richtlinie.',
    reject: 'Ablehnen',
    customize: 'Anpassen',
    accept: 'Alle akzeptieren',
  },
} satisfies Record<
  MarketingLocale,
  { title: string; body: string; policy: string; reject: string; customize: string; accept: string }
>;

export function MarketingCookieBanner({ locale }: { locale: MarketingLocale }) {
  const [visible, setVisible] = useState(false);
  const content = copy[locale];

  useEffect(() => {
    if (!window.localStorage.getItem('cervantes-cookie-consent')) {
      setVisible(true);
    }
  }, []);

  const close = () => {
    window.localStorage.setItem('cervantes-cookie-consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="border-t border-stone-800/30 bg-[#202126] px-5 py-4 text-white lg:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="text-lg text-[#f4c739]">*</span>
            <p className="text-lg font-semibold">{content.title}</p>
          </div>
          <p className="mt-2 text-sm leading-6 text-stone-300">
            {content.body}{' '}
            <Link href={getMarketingPath(locale, 'contact')} className="text-[#e8c34f] underline underline-offset-4">
              {content.policy}
            </Link>
          </p>
        </div>

        <div className="flex flex-wrap gap-2 lg:justify-end">
          <button
            type="button"
            onClick={close}
            className="rounded-md border border-stone-600 px-3 py-2 text-xs font-semibold text-stone-200 transition hover:border-stone-400"
          >
            {content.reject}
          </button>
          <button
            type="button"
            onClick={close}
            className="rounded-md border border-[#aa8a1f] bg-[#2b2d33] px-3 py-2 text-xs font-semibold text-[#f2cc4d] transition hover:bg-[#343740]"
          >
            {content.customize}
          </button>
          <button
            type="button"
            onClick={close}
            className="rounded-md bg-[#f6c41c] px-3 py-2 text-xs font-bold text-stone-950 transition hover:bg-[#ffd54d]"
          >
            {content.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
