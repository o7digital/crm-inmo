import { MarketingHomePage } from "@/components/marketing/MarketingPages";
import { buildMarketingMetadata } from "@/lib/marketingSeo";

export const metadata = buildMarketingMetadata("de", "home");

export default function DeHomePage() {
  return <MarketingHomePage locale="de" />;
}
