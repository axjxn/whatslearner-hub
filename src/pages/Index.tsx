import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedCourses } from "@/components/FeaturedCourses";
import { Statistics } from "@/components/Statistics";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-whatsapp-light to-white">
      <Navbar />
      <Hero />
      <FeaturedCourses />
      <Statistics />
      <Testimonials />
    </div>
  );
};

export default Index;