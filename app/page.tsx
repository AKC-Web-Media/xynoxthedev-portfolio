import Navbar from "@/components/navbar/page";
import HomeHero from "@/components/home-hero/page";

export default function Home() {
  return (
    <>
        <div className="flex flex-col items-center w-11/12 mx-auto">
            <Navbar />
            <HomeHero />
        </div>
    </>
);
}
