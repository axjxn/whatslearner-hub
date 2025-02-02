import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedCourses } from "@/components/FeaturedCourses";
import { Statistics } from "@/components/Statistics";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCourses />
        <Statistics />
        <Testimonials />
      </main>
    </div>
  );
};

export default Index;