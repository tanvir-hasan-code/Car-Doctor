import Image from "next/image";
import Banner from "./components/BnnerSection/Banner";

export const metadata = {
  title: "Home",
  description: "This is Car Doctor Web",
};

export default function Home() {
  return (
    <>
    <Banner/>
    <h1> Hello World</h1>
    </>
  );
}
