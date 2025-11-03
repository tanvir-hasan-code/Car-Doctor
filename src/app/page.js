import Image from "next/image";
import Banner from "./components/BnnerSection/Banner";
import AboutUs from "./components/AboutUsSection/AboutUs";
import OurService from "./components/ServiceSection/OurService";

export const metadata = {
  title: "Home",
  description: "This is Car Doctor Web",
};

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <OurService/>
    
    </>
  );
}
