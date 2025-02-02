import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Digital Marketing Specialist",
      content: "The courses here transformed my career. The practical approach and expert instructors made learning enjoyable and effective.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    },
    {
      name: "Michael Chen",
      role: "Web Developer",
      content: "I went from beginner to professional in just months. The community support and course quality are unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      name: "Emma Davis",
      role: "Data Analyst",
      content: "The data science course helped me switch careers. The hands-on projects and mentorship were invaluable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
        <p className="text-lg text-gray-600">Join thousands of satisfied learners worldwide</p>
      </div>

      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700">{testimonial.content}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};