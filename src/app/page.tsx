import Herosection from "@/components/Herosection";
import FeaturedSection from "@/components/FeaturedSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      {/* <div className="text-2xl text-center">Music Courses</div> */}
      <Herosection />
      <FeaturedSection />
    </main>
    
  );
}
