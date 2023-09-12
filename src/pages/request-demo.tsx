// export const meta: V2_MetaFunction = () => [{ title: "ClinchIt.io" }];

import RequestDemoIndex from "./components/RequestDemoIndex";
import FooterDemo from "./components/footer-demo";
import HeaderDemo from "./components/header-demo";
import './components/requestDemo.css';


export default function RequestDemo() {
  return (
    <main className="h-full bgLightGreen"> 
      <HeaderDemo />
      <RequestDemoIndex data={[]} actionData={[]}/>
      <FooterDemo />
    </main>
  );
}
