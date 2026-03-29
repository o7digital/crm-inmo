import '@/styles/index.scss';
import '@/styles/fancybox-custom.css';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import CookieConsent from '@/components/common/CookieConsent';
import PrivacyFloatingButton from '@/components/common/PrivacyFloatingButton';
import HomeEightDe from '@/components/homes/home-eight-de';
import HomeEightEn from '@/components/homes/home-eight-en';
import HomeEightFr from '@/components/homes/home-eight-fr';
import HomeEightIt from '@/components/homes/home-eight-it';
import Wrapper from '@/layouts/Wrapper';

type Lang = 'en' | 'fr' | 'it' | 'de';

const metadataByLang: Record<Lang, Metadata> = {
  en: {
    title: 'Cervantes Real Estate - Homes for Sale and Apartments for Rent in Mexico',
    description:
      'Find your ideal home in Mexico. Cervantes Real Estate offers homes for sale, apartments for rent and expert mortgage advisory.',
  },
  fr: {
    title: 'Cervantes Bienes Raices - Vente et Location de Maisons et Appartements au Mexique',
    description:
      'Trouvez votre maison ideale au Mexique. Cervantes Bienes Raices propose des maisons a vendre, des appartements a louer et un conseil hypothécaire professionnel.',
  },
  it: {
    title: 'Cervantes Real Estate - Vendita e Affitto di Case e Appartamenti in Messico',
    description:
      'Trova la tua casa ideale in Messico. Cervantes Real Estate offre case in vendita, appartamenti in affitto e consulenza ipotecaria professionale.',
  },
  de: {
    title: 'Cervantes Real Estate - Verkauf und Vermietung von Hausern und Wohnungen in Mexiko',
    description:
      'Finden Sie Ihr ideales Zuhause in Mexiko. Cervantes Real Estate bietet Hauser zum Verkauf, Wohnungen zur Miete und professionelle Hypothekenberatung.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!['en', 'fr', 'it', 'de'].includes(lang)) return {};
  return metadataByLang[lang as Lang];
}

export default async function LangHomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const pages: Record<Lang, ReactNode> = {
    en: <HomeEightEn />,
    fr: <HomeEightFr />,
    it: <HomeEightIt />,
    de: <HomeEightDe />,
  };

  if (!['en', 'fr', 'it', 'de'].includes(lang)) notFound();

  return (
    <>
      <Wrapper>{pages[lang as Lang]}</Wrapper>
      <CookieConsent />
      <PrivacyFloatingButton />
    </>
  );
}
