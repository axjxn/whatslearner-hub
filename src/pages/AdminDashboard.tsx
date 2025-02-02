import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { PlusCircle, Image as ImageIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Upload image to Supabase Storage
      let imageUrl = "";
      if (image) {
        const fileExt = image.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { data: imageData, error: imageError } = await supabase.storage
          .from("course-images")
          .upload(fileName, image);

        if (imageError) throw imageError;
        imageUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/course-images/${fileName}`;
      }

      // Insert course data into Supabase
      const { error } = await supabase.from("courses").insert([
        {
          title,
          description,
          price: parseFloat(price),
          image_url: imageUrl,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Course has been added successfully.",
      });

      // Reset form
      setTitle("");
      setDescription("");
      setPrice("");
      setImage(null);
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to add course. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-whatsapp-light to-white p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Add New Course</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Course Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter course title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter course description"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter course price"
              required
              min="0"
              step="0.01"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Course Image</Label>
            <div className="flex items-center space-x-4">
              <Input
                id="image"
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById("image")?.click()}
                className="w-full"
              >
                <ImageIcon className="mr-2 h-4 w-4" />
                {image ? "Change Image" : "Upload Image"}
              </Button>
              {image && <span className="text-sm text-gray-500">{image.name}</span>}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-whatsapp-primary hover:bg-whatsapp-dark"
            disabled={isLoading}
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            {isLoading ? "Adding Course..." : "Add Course"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
