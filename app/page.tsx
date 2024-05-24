import { FaHome } from "react-icons/fa";
import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/FloatingNav";
import Grid from "../components/ui/Grid";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col 
    mx-auto text-white px-5 justify-center items-center sm:px-10 overflow-hidden">
      <div className="mx-w-7xl w-full">
        <FloatingNav navItems={[
          {name: "Home", link: "/", icon:<FaHome/>}
        ]}/>
       <Hero/>
       <Grid/>
      </div>
    </main>
  );
}
