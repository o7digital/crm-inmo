import { LocalizedServicesContentPage } from "@/components/public/LocalizedPublicPages";
import { buildMarketingMetadata } from "@/lib/marketingSeo";

export const metadata = buildMarketingMetadata("en", "services");

export default function EnServicesPage() {
  return <LocalizedServicesContentPage locale="en" />;
}
