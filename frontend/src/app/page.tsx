import '@/styles/index.scss';
import '@/styles/fancybox-custom.css';
import type { Metadata } from 'next';
import CookieConsent from '@/components/common/CookieConsent';
import PrivacyFloatingButton from '@/components/common/PrivacyFloatingButton';
import HomeEight from '@/components/homes/home-eight';
import Wrapper from '@/layouts/Wrapper';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cervantesbienesraices.com'),
  title: 'Cervantes Bienes Raices - Venta y Renta de Casas y Departamentos en Mexico | +20 anos de experiencia',
  description:
    'Encuentra tu hogar ideal en Mexico. Cervantes Bienes Raices ofrece casas en venta, departamentos en renta y asesoria hipotecaria profesional.',
  alternates: {
    canonical: 'https://www.cervantesbienesraices.com',
    languages: {
      'es-MX': 'https://www.cervantesbienesraices.com',
      'en-US': 'https://www.cervantesbienesraices.com/en',
      'fr-FR': 'https://www.cervantesbienesraices.com/fr',
      'it-IT': 'https://www.cervantesbienesraices.com/it',
      'de-DE': 'https://www.cervantesbienesraices.com/de',
    },
  },
};

export default function HomePage() {
  return (
    <>
      <Wrapper>
        <HomeEight />
      </Wrapper>
      <CookieConsent />
      <PrivacyFloatingButton />
    </>
  );
}
