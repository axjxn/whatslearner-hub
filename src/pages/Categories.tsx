import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Filter, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

// Mock data - replace with actual API call when backend is integrated
const categories = [
  { id: 1, name: 'Web Development', courseCount: 12 },
  { id: 2, name: 'Data Science', courseCount: 8 },
  { id: 3, name: 'Mobile Development', courseCount: 6 },
  { id: 4, name: 'UI/UX Design', courseCount: 5 },
  { id: 5, name: 'Machine Learning', courseCount: 7 },
  { id: 6, name: 'Cloud Computing', courseCount: 4 },
];

const Categories = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const { data: categoriesData, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      // Simulate API call
      return new Promise((resolve) => {
        setTimeout(() => resolve(categories), 1000);
      });
    },
  });

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    toast({
      title: "Category Selected",
      description: `Viewing courses in ${categoryName}`,
    });
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-24 bg-gray-200 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Course Categories</h1>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoriesData?.map((category) => (
          <Card 
            key={category.id}
            className="hover:shadow-lg transition-shadow duration-300 hover:border-whatsapp-primary cursor-pointer"
            onClick={() => handleCategoryClick(category.name)}
          >
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{category.name}</span>
                <ChevronRight className="h-5 w-5 text-whatsapp-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                {category.courseCount} {category.courseCount === 1 ? 'Course' : 'Courses'}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Categories;