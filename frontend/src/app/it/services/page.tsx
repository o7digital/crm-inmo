import { LocalizedServicesContentPage } from "@/components/public/LocalizedPublicPages";
import { buildMarketingMetadata } from "@/lib/marketingSeo";

export const metadata = buildMarketingMetadata("it", "services");

export default function ItServicesPage() {
  return <LocalizedServicesContentPage locale="it" />;
}
