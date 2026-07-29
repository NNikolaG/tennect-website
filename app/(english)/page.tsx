import { TennectHome } from "../components/TennectHome";
import { buildPageMetadata } from "../seo";

export const generateMetadata = () => buildPageMetadata("en");

export default function Home() {
  return <TennectHome locale="en" />;
}
