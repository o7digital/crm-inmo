import { MarketingHomePage } from "@/components/marketing/MarketingPages";
import { buildMarketingMetadata } from "@/lib/marketingSeo";

export const metadata = buildMarketingMetadata("en", "home");

export default function EnHomePage() {
  return <MarketingHomePage locale="en" />;
}
