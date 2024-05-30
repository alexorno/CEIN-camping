// import Image from "next/image";
import { Navbar, HeroBanner, HeroSecondSection, HeroBannerShop, ProductList } from "../../components";

export default function Home() {
  
  return (
    <main >
      <HeroBanner />
      <HeroSecondSection />
      <HeroBannerShop />
      <ProductList />
    </main>
  );
}
