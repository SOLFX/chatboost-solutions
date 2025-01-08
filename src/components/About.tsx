import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const About = () => {
  return (
    <div className="py-20 bg-blue-50" id="about">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Over Ons</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <Avatar className="w-32 h-32 mx-auto mb-4">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" alt="Furkan Eren" />
              <AvatarFallback>FE</AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-semibold mb-2">Furkan Eren</h3>
            <p className="text-gray-600">Medeoprichter & AI Specialist</p>
          </div>
          <div className="text-center">
            <Avatar className="w-32 h-32 mx-auto mb-4">
              <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" alt="Anass Abbouch" />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-semibold mb-2">Anass Abbouch</h3>
            <p className="text-gray-600">Medeoprichter & AI Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
};