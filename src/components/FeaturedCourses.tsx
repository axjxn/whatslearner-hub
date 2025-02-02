import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Star, Users } from "lucide-react";

export const FeaturedCourses = () => {
  const courses = [
    {
      title: "Digital Marketing Mastery",
      students: 1234,
      rating: 4.8,
      duration: "8 weeks",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Web Development Bootcamp",
      students: 2156,
      rating: 4.9,
      duration: "12 weeks",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      title: "Data Science Fundamentals",
      students: 1789,
      rating: 4.7,
      duration: "10 weeks",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h2>
        <p className="text-lg text-gray-600">Start your learning journey with our most popular courses</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <Card key={index} className="hover-scale glass-card overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{course.students} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-600">{course.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{course.duration}</span>
                </div>
              </div>
              <Button className="w-full bg-whatsapp-primary hover:bg-whatsapp-dark">
                <BookOpen className="mr-2 h-4 w-4" /> Enroll Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};