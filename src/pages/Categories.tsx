import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Navbar } from '@/components/Navbar';

// Define the type for a category
interface Category {
  id: number;
  name: string;
  courseCount: number;
  description?: string;
  imageUrl?: string;
}

// Mock data - replace with actual API call when backend is integrated
const categories: Category[] = [
  { id: 1, name: 'Web Development', courseCount: 12, description: 'Learn modern web development technologies' },
  { id: 2, name: 'Data Science', courseCount: 8, description: 'Master data analysis and machine learning' },
  { id: 3, name: 'Mobile Development', courseCount: 6, description: 'Build iOS and Android applications' },
  { id: 4, name: 'UI/UX Design', courseCount: 5, description: 'Create beautiful user interfaces' },
  { id: 5, name: 'Business', courseCount: 10, description: 'Develop business and entrepreneurship skills' },
  { id: 6, name: 'Marketing', courseCount: 7, description: 'Learn digital marketing strategies' },
  { id: 7, name: 'Photography', courseCount: 4, description: 'Master photography and editing' },
  { id: 8, name: 'Music', courseCount: 3, description: 'Learn music production and theory' }
];

const Categories = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const { data: categoriesData, isLoading } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return categories;
    }
  });

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    toast({
      title: "Category Selected",
      description: `You've selected ${categoryName}. Explore our courses!`,
      duration: 3000,
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 pt-24">
          <div className="animate-pulse space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Course Categories</h1>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoriesData?.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.name)}
              className={`
                p-6 rounded-lg shadow-sm transition-all duration-300
                ${selectedCategory === category.name
                  ? 'bg-whatsapp-primary text-white'
                  : 'bg-white hover:shadow-md hover:scale-105 cursor-pointer'
                }
              `}
            >
              <h3 className={`text-xl font-semibold mb-2 
                ${selectedCategory === category.name ? 'text-white' : 'text-gray-900'}`}>
                {category.name}
              </h3>
              <p className={`mb-4 text-sm
                ${selectedCategory === category.name ? 'text-white/90' : 'text-gray-600'}`}>
                {category.description}
              </p>
              <div className={`text-sm font-medium
                ${selectedCategory === category.name ? 'text-white/90' : 'text-whatsapp-dark'}`}>
                {category.courseCount} {category.courseCount === 1 ? 'Course' : 'Courses'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;