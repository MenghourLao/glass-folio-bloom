import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen px-4 mx-0 rounded-none overflow-hidden bg-cover bg-center flex items-center mt-0 pt-16"
      style={{
        backgroundImage: url('https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//hero_img.png'),
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto relative z-10 my-0">
        {/* Platform Label */}
        <div className="flex justify-center mb-8">
          <div className="border border-white/30 rounded-full px-6 py-2 inline-block">
            <p className="text-white text-sm md:text-base">Automate</p>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
            EASY TICKETS, SEAMLESS<br />
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
              EVENTS
            </span>
          </h1>
          <p className="text-lg text-white/80 mb-12 mx-auto max-w-2xl">
            Automate your ticketing effortlessly with BookMe+, giving you more time to
            create unforgettable experiences.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="rounded-full px-8 py-6 text-base">
              <a
                href="https://api-production.bookme.plus/organizer/events"
                className="flex items-center gap-2"
              >
                Create first event <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


