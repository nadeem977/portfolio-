import { FaHome } from "react-icons/fa";
import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/FloatingNav";
import Grid from "../components/ui/Grid";
import RecenProject from "@/components/ui/RecenProject";
import { navItems } from "@/data";
import Clients from "@/components/ui/Clients";
import Experince from "@/components/ui/Experince";
import Aproach from "@/components/ui/Aproach";
import Footer from "@/components/ui/Footer";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col 
    mx-auto text-white px-5 justify-center items-center sm:px-10 overflow-clip">
      <div className="mx-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
       <Hero/>
       <Grid/>
       <RecenProject/>
       <Clients/>
       <Experince/>
       <Aproach/>
       <Footer/>
      </div>
    </main>
  );
}
