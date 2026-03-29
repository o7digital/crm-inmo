import { MarketingServicesPage } from "@/components/marketing/MarketingPages";
import { buildMarketingMetadata } from "@/lib/marketingSeo";

export const metadata = buildMarketingMetadata("fr", "services");

export default function FrServicesPage() {
  return <MarketingServicesPage locale="fr" />;
}
