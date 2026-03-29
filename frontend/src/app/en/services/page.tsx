import { MarketingServicesPage } from "@/components/marketing/MarketingPages";
import { buildMarketingMetadata } from "@/lib/marketingSeo";

export const metadata = buildMarketingMetadata("en", "services");

export default function EnServicesPage() {
  return <MarketingServicesPage locale="en" />;
}
