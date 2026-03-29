import { MarketingServicesPage } from "@/components/marketing/MarketingPages";
import { buildMarketingMetadata } from "@/lib/marketingSeo";

export const metadata = buildMarketingMetadata("de", "services");

export default function DeServicesPage() {
  return <MarketingServicesPage locale="de" />;
}
