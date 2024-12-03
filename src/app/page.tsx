import Image from "next/image";
import Navbar from "./components/Navbar"; 
import HeroSecton from "./components/HeroSection";
import WorkManagement from "./components/WorkManagement";
import YourWork from "./components/YourWork";
import OurSponsers from "./components/OurSponsers";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSecton/>
      <WorkManagement/>
      <YourWork/>
      <OurSponsers/>
      <Footer/>
    </div>
    );
}
