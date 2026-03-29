import { MarketingHomePage } from "@/components/marketing/MarketingPages";
import { buildMarketingMetadata } from "@/lib/marketingSeo";

export const metadata = buildMarketingMetadata("it", "home");

export default function ItHomePage() {
  return <MarketingHomePage locale="it" />;
}
