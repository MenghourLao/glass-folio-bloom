
import { Calendar, BarChart2, Settings, Smartphone } from "lucide-react";

export default function FeatureSection() {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Sell and manage",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    }, 
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Organizer app",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-primary" />,
      title: "Data Analysis",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Integration & Customization",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="container mx-auto md:py-24 py-16 px-4 bg-inherit rounded-none">
      <div className="text-center mb-16 mx-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Organizers love BookMe+</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our platform offers everything you need to manage appointments effortlessly and create a seamless booking experience for your clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="glass-card overflow-hidden rounded-3xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <div className="mb-4 p-3 inline-flex rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
