import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-whatsapp-light to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Learn Anything, <span className="text-whatsapp-dark">Anywhere</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Join our community of learners and start your journey towards mastery with expert-led courses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button
              size="lg"
              className="bg-whatsapp-primary hover:bg-whatsapp-dark text-white px-8 py-6 text-lg"
            >
              Explore Courses <ArrowRight className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-whatsapp-dark text-whatsapp-dark hover:bg-whatsapp-light px-8 py-6 text-lg"
            >
              Become an Instructor
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-whatsapp-secondary rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-whatsapp-primary rounded-full opacity-20 blur-3xl" />
    </div>
  );
};