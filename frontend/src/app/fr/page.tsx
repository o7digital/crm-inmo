import HomePremium from "@/components/homes/home-premium";
import Wrapper from "@/layouts/Wrapper";
import { buildMarketingMetadata } from "@/lib/marketingSeo";

export const metadata = buildMarketingMetadata("fr", "home");

export default function FrHomePage() {
  return (
    <Wrapper>
      <HomePremium locale="fr" />
    </Wrapper>
  );
}
