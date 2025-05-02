
import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Simulate form submission success
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  return <div className="animate-fade-in">
      <section className="container mx-auto py-16 md:py-24 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Get In Touch</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          Have questions about BookMe+ or want to see how it can work for your business? Reach out to our team.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <div className="glass-card p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Location</p>
                    <address className="not-italic text-muted-foreground">
                      The Fortune Tower (C7), Olympia City, SH-19,<br />
                      Sangkat Veal Vong, Khan 7 Makara,<br />
                      Phnom Penh, Cambodia, 12309
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:hello@bookme.plus" className="text-muted-foreground hover:text-primary transition-colors">
                      hello@bookme.plus
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a href="tel:010318316" className="text-muted-foreground hover:text-primary transition-colors">
                      010 318 316
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8">
              <h2 className="text-xl font-bold mb-4">Business Hours</h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Your Email <span className="text-primary">*</span>
                  </label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject <span className="text-primary">*</span>
                </label>
                <select id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors">
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Sales Question">Sales Question</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Partnership Opportunity">Partnership Opportunity</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Your Message <span className="text-primary">*</span>
                </label>
                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"></textarea>
              </div>
              
              <Button type="submit" size="lg" className="rounded-full">
                <span className="flex items-center gap-2">
                  Send Message <ArrowRight size={16} />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>;
}
