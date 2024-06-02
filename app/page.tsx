import Image from "next/image";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Features from "./Features";
import Advantages from "./Advantages";
import Customize from "./Customize";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Features />
      <Advantages />
      <Customize />
    </>
  );
}
