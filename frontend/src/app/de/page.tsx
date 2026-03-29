import HomePremium from "@/components/homes/home-premium";
import Wrapper from "@/layouts/Wrapper";
import { buildMarketingMetadata } from "@/lib/marketingSeo";

export const metadata = buildMarketingMetadata("de", "home");

export default function DeHomePage() {
  return (
    <Wrapper>
      <HomePremium locale="de" />
    </Wrapper>
  );
}
