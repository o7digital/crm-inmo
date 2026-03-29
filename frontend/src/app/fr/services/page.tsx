import { LocalizedServicesContentPage } from "@/components/public/LocalizedPublicPages";
import { buildMarketingMetadata } from "@/lib/marketingSeo";

export const metadata = buildMarketingMetadata("fr", "services");

export default function FrServicesPage() {
  return <LocalizedServicesContentPage locale="fr" />;
}
