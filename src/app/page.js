// import Image from "next/image";
import { HeroBannerIndex, HeroSecondSection, HeroBannerShop, ProductList } from "../../components";

export default function Home() {
  
  return (
    <main >
      <HeroBannerIndex />
      <HeroSecondSection />
      <HeroBannerShop />
      <ProductList />
    </main>
  );
}
