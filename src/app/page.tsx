import Herosection from "@/components/Herosection";
import FeaturedSection from "@/components/FeaturedSection";
import Image from "next/image";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      {/* <div className="text-2xl text-center">Music Courses</div> */}
      <Herosection />
      <FeaturedSection />
      <WhyChooseUsSection />
      <TestimonialCards />
      <UpcomingWebinar />
    </main>
    
  );
}
