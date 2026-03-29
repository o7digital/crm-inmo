import { MarketingContactPage } from "@/components/marketing/MarketingPages";
import { buildMarketingMetadata } from "@/lib/marketingSeo";

export const metadata = buildMarketingMetadata("de", "contact");

export default function DeContactPage() {
  return <MarketingContactPage locale="de" />;
}
