import { LocalizedContactContentPage } from "@/components/public/LocalizedPublicPages";
import { buildMarketingMetadata } from "@/lib/marketingSeo";

export const metadata = buildMarketingMetadata("de", "contact");

export default function DeContactPage() {
  return <LocalizedContactContentPage locale="de" />;
}
