import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: "code-c-conference",
      title: "The CODE-C Developer Conference and Tech Expo 2024",
      category: "Technology & Conferences",
      description: "As Cambodia's premier tech gathering, CODE-C brought together over 3,000 developers, innovators, and digital leaders to accelerate the nation's digital journey.\n\n**Organizer's Challenge**\nFaced with limited manpower, the team struggled to manage high-volume check-ins efficiently without compromising the attendee experience.\n\n**BookMe+ Solution**\nBookMe+ deployed a Self Check-in system powered by dynamic QR codes—allowing attendees to check in independently and eliminating bottlenecks at entry points.\n\n**Impact**\n• Streamlined check-in process\n• Reduced staffing requirements\n• Enhanced operational efficiency\n• Elevated attendee experience",
      image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/code_c_image.jpg",
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      id: "preah-vihear-temple-run",
      title: "Preah Vihear Temple Run 2024",
      category: "Sports & Events",
      description: "Set in Cambodia's remote highlands, the event welcomed 1,000 runners from 13 countries—marking a 200% growth in participation over the previous year.\n\n**Challenge**\nLimited internet connectivity posed a major check-in challenge for organizers.\n\n**Solution**\nBookMe+ delivered an Offline Check-in & Sync feature, ensuring smooth operations without needing a live connection.\n\n**Impact**\n• Fast, dependable check-in\n• Hassle-free event execution in remote conditions\n• Widely celebrated as an authentic 'temple run' experience",
      image: "https://raw.githubusercontent.com/MenghourLao/glass-folio-bloom/main/public/images/runwithsai_case_study.jpg",
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  // YouTube videos from BookMe Cambodia channel
  const youtubeVideos = [
    {
      id: "video1",
      title: "BookMe+ Ticketing Solution and CheckIn Management for Pich Solika Twilight Concert",
      videoId: "V4vVBy3ax7Y",
      thumbnail: `https://img.youtube.com/vi/V4vVBy3ax7Y/maxresdefault.jpg`,
      description: "First Pich Solika Solo Concert. BookMe+ is proud to be part of her concert contributing to the huge success of her first ever concert as a solo artist. We hope to empower more artists and organizer in making their event memorable and most engaging by leveraging our powerful ticketing Solution and check-in management."
    },
    {
      id: "video2", 
      title: "BookMe+ Concert Ticketing and CheckIn Management Project for the Q Solo Concert 2024",
      videoId: "nWfrw7N4aKk",
      thumbnail: `https://img.youtube.com/vi/nWfrw7N4aKk/maxresdefault.jpg`,
      description: "Throwback to our first ever concert ticketing and check-in management project. In this project, we partnered with Rasmey Hang Meas in providing ticket distribution to fandom of Aok Sokunkanha and managing the QR Ticket check-in experience of the concert go-ers smoothly. This marks us one of the historical concert in the country because of its fan engagement and high value ticket price. BookMe+ team is very proud of this partnership."
    },
    {
      id: "video3",
      title: "BookMePlus Introduction Video - Explore More, Experience Life",
      videoId: "_NWXdIb8H1M",
      thumbnail: `https://img.youtube.com/vi/_NWXdIb8H1M/maxresdefault.jpg`,
      description: "A recap of BookMe+ success and activities throughout 2024 in empowering Cambodia's event organizers from marathon to concert event."
    }
  ];

  // Function to render description with bold text
  const renderDescription = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <span key={index} className="font-bold block">
            {line.slice(2, -2)}
            <br />
          </span>
        );
      }
      return (
        <span key={index}>
          {line}
          {index < text.split('\n').length - 1 && <br />}
        </span>
      );
    });
  };

  const openYouTubeVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="container mx-auto py-32 md:py-36 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center md:text-5xl lg:text-6xl uppercase">CASE STUDIES</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          Discover how businesses across different industries have transformed their booking processes with BookMe+.
        </p>
        
        {/* Featured Case Studies - 2 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {caseStudies.map(study => (
            <Card key={study.id} className="group overflow-hidden border-2 border-white/10 shadow-lg bg-card hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              {/* Image Section */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              
              {/* Content Section */}
              <CardContent className="p-6">
                <div className="mb-3">
                  <span className="inline-block text-xs font-semibold text-primary mb-3 px-3 py-1 rounded-full bg-primary/10">
                    {study.category}
                  </span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                  {study.title}
                </h2>
                
                <div className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">
                  {renderDescription(study.description)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* YouTube Videos Section */}
        <div className="mb-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Video Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtubeVideos.map(video => (
              <Card key={video.id} className="group overflow-hidden border-2 border-white/10 shadow-lg bg-card hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer" onClick={() => openYouTubeVideo(video.videoId)}>
                <div className="relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-red-600 rounded-full p-4">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* YouTube Promotional Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="group overflow-hidden bg-primary/5 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row items-center">
                {/* YouTube Banner Section */}
                <div className="w-full md:w-1/3 relative overflow-hidden">
                  <img 
                    src="https://github.com/MenghourLao/glass-folio-bloom/blob/main/public/512px-YouTube_full-color_icon_(2017).svg.png" 
                    alt="YouTube" 
                    className="w-3/4 h-32 md:h-32 object-contain mx-auto my-8 transition-transform duration-300 group-hover:scale-105" 
                  />
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-6 left-6 w-4 h-4 bg-white/30 rounded-full"></div>
                </div>
                
                {/* Content Section */}
                <div className="w-full md:w-2/3 p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    Explore More on YouTube
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    Subscribe to our channel for case study breakdowns, tutorials, and more.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <a href="https://www.youtube.com/@BookMeCambodia" target="_blank" rel="noopener noreferrer">
                      Subscribe Now
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto bg-primary/5 p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to become our next success story?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join the growing list of businesses that have revolutionized their scheduling with BookMe+.
          </p>
          <Button size="lg" className="rounded-full mx-auto bg-primary hover:bg-primary/90 text-white transition-colors">
            <a href="https://api-production.bookme.plus/organizer/sign_in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Contact Us Today <ArrowRight size={16} />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
