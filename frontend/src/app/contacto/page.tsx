import { LocalizedContactContentPage } from '@/components/public/LocalizedPublicPages';
import { buildMarketingMetadata } from '@/lib/marketingSeo';

export const metadata = buildMarketingMetadata('es', 'contact');

export default function ContactoPage() {
  return <LocalizedContactContentPage locale="es" />;
}
