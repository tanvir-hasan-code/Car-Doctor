import Image from "next/image";
import Banner from "./components/BnnerSection/Banner";
import AboutUs from "./components/AboutUsSection/AboutUs";

export const metadata = {
  title: "Home",
  description: "This is Car Doctor Web",
};

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs/>
    <h1> Hello World</h1>
    </>
  );
}
