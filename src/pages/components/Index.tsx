import MarketingHomeHero from "./MarketingHomeHero";
import FooterDemo from "./footer-demo";
import HeaderDemo from "./header-demo";

export default function Index() {
    return (
      <div className="flex min-h-full flex-col justify-center">
      
          <main className="h-full bg-gray-200">
            <HeaderDemo data={[]}/>
            <MarketingHomeHero />
            <FooterDemo />
          </main>
   
      </div>
    );
  }