export default function TestimonialSection() {
  const testimonials = [{
    quote: "BookMe+ has transformed how I manage my client appointments. The interface is intuitive and my clients love how easy it is to book sessions.",
    author: "Sarah Johnson",
    position: "Independent Consultant",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
  }, {
    quote: "Since implementing BookMe+, we've seen a 40% reduction in scheduling conflicts and no-shows. It's been a game-changer for our team.",
    author: "Michael Chen",
    position: "Wellness Center Director",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces"
  }, {
    quote: "The customization options let me perfectly align the booking experience with my brand. My clients consistently comment on how professional it feels.",
    author: "Elena Rodriguez",
    position: "Creative Studio Owner",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces"
  }];
  return <section className="backdrop-blur-sm py-16 md:py-24 rounded-sm bg-inherit">
      <div className="container mx-auto px-4 rounded-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what professionals using BookMe+ have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="glass-card p-6 md:p-8 rounded-3xl">
              <div className="flex flex-col h-full">
                <blockquote className="text-lg italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}