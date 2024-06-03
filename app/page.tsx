import Navbar from "./Navbar";
import Landing from "./Landing";
import Features from "./Features";
import Advantages from "./Advantages";
import Customize from "./Customize";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import GetStarted from "./GetStarted";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Features />
      <Advantages />
      <Customize />
      <Testimonial />
      <Faq />
      <GetStarted />
      <Footer />
    </>
  );
}
