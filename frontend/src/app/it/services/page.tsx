import { MarketingServicesPage } from "@/components/marketing/MarketingPages";
import { buildMarketingMetadata } from "@/lib/marketingSeo";

export const metadata = buildMarketingMetadata("it", "services");

export default function ItServicesPage() {
  return <MarketingServicesPage locale="it" />;
}
