import { MarketingHomePage } from "@/components/marketing/MarketingPages";
import { buildMarketingMetadata } from "@/lib/marketingSeo";

export const metadata = buildMarketingMetadata("fr", "home");

export default function FrHomePage() {
  return <MarketingHomePage locale="fr" />;
}
