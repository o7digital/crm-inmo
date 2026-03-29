import HomePremium from "@/components/homes/home-premium";
import Wrapper from "@/layouts/Wrapper";
import { buildMarketingMetadata } from "@/lib/marketingSeo";

export const metadata = buildMarketingMetadata("it", "home");

export default function ItHomePage() {
  return (
    <Wrapper>
      <HomePremium locale="it" />
    </Wrapper>
  );
}
