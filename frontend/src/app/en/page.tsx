import HomePremium from "@/components/homes/home-premium";
import Wrapper from "@/layouts/Wrapper";
import { buildMarketingMetadata } from "@/lib/marketingSeo";

export const metadata = buildMarketingMetadata("en", "home");

export default function EnHomePage() {
  return (
    <Wrapper>
      <HomePremium locale="en" />
    </Wrapper>
  );
}
