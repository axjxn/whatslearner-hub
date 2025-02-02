import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, Globe } from "lucide-react";

export const Statistics = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-whatsapp-primary" />,
      value: "50,000+",
      label: "Active Students"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-whatsapp-primary" />,
      value: "300+",
      label: "Courses"
    },
    {
      icon: <Award className="h-8 w-8 text-whatsapp-primary" />,
      value: "1,000+",
      label: "Expert Instructors"
    },
    {
      icon: <Globe className="h-8 w-8 text-whatsapp-primary" />,
      value: "50+",
      label: "Countries"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-whatsapp-light/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card hover-scale">
              <CardContent className="flex flex-col items-center justify-center p-6">
                {stat.icon}
                <h3 className="text-3xl font-bold text-gray-900 mt-4">{stat.value}</h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};