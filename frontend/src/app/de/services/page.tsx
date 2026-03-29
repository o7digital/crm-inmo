import { LocalizedServicesContentPage } from "@/components/public/LocalizedPublicPages";
import { buildMarketingMetadata } from "@/lib/marketingSeo";

export const metadata = buildMarketingMetadata("de", "services");

export default function DeServicesPage() {
  return <LocalizedServicesContentPage locale="de" />;
}
