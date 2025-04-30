import { Calendar, Users, Settings } from "lucide-react";
export default function FeatureSection() {
  const features = [{
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Smart Scheduling",
    description: "Automatically find the perfect time slots that work for both you and your clients."
  }, {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Client Management",
    description: "Keep track of all client interactions and history in one centralized dashboard."
  }, {
    icon: <Settings className="h-8 w-8 text-primary" />,
    title: "Customization",
    description: "Tailor the booking experience to match your brand with our flexible customization options."
  }];
  return <section className="container mx-auto md:py-24 rounded-sm px-0 py-0 bg-transparent">
      <div className="text-center mb-16 mx-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Organizers love BookMe+</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our platform offers everything you need to manage appointments effortlessly and create a seamless booking experience for your clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => <div key={index} className="glass-card p-6 md:p-8 flex flex-col items-center text-center px-[32px] mx-0 my-0 rounded-3xl">
            <div className="mb-4 p-3 rounded-full bg-primary/10">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>)}
      </div>
    </section>;
}