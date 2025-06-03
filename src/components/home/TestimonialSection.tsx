
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function TestimonialSection() {
  const testimonials = [{
    quote: "Organizing workshops has never been easier since we started using BookMe+. The platform's intuitive design and customizable event pages have streamlined our registration process, making it hassle-free for both our team and participants.",
    author: "Bill Sokhy CHEA",
    position: "Director of TEDxPhnomPenh & Startup Grind Cambodia",
    avatar: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/refs/heads/main/public/lovable-uploads/chea-bill.jpg"
  }, {
    quote: "Partnering with BookMe+ has streamlined our marathon events, enabling efficient ticket, merch, and bundle sales. The offline check-in functionality ensures smooth bib distribution even in a remote area like Preah Vihear temple, and the instant payout feature truly supports our cash flow needs.",
    author: "SAI",
    position: "Founder of RunWithSai",
    avatar: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/refs/heads/main/public/lovable-uploads/sai.jpg"
  }, {
    quote: "Partnering with BookMe+ has streamlined the registration process for our diverse audience of students, professionals, and government officers at Cambodia's biggest tech expo. The Organizer App's self-check-in feature significantly reduces manpower needs and eliminates long queues.",
    author: "Chantra Be",
    position: "Organizer of Code-C",
    avatar: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/refs/heads/main/public/lovable-uploads/be-chantra.jpg"
  }];
  const headingRef = useScrollAnimation<HTMLDivElement>('visible');
  const testimonialsRef = useScrollAnimation<HTMLDivElement>('visible', {
    threshold: 0.1
  });
  return <section className="py-12 sm:py-16 lg:py-24 rounded-sm bg-inherit">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl">
        <div ref={headingRef} className="text-center mb-12 sm:mb-16 fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4">WHAT OUR ORGANIZERS SAY</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            Don't just take our word for it. Here's what professionals using BookMe+ have to say.
          </p>
        </div>

        <div ref={testimonialsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 stagger-children">
          {testimonials.map((testimonial, index) => <div key={index} className="glass-card p-6 sm:p-8 rounded-3xl">
              <div className="flex flex-col h-full">
                <blockquote className="text-base sm:text-lg italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-4" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">{testimonial.author}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}
