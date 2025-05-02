
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

type PartnerLogoProps = {
  name: string;
  logo: string;
  url: string;
};

const partnerLogos: PartnerLogoProps[] = [{
  name: "TEDx",
  logo: "https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//ted_logo.png",
  url: "#tedx"
}, {
  name: "RUN SAI",
  logo: "https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//rws_logo.png",
  url: "#runsai"
}, {
  name: "CODE-C",
  logo: "https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//codec_logo.png",
  url: "#codec"
}, {
  name: "The Platform",
  logo: "https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//platform_logo.png",
  url: "#platform"
}, {
  name: "Sabay",
  logo: "https://vrcgccxrfveurwshtsvz.supabase.co/storage/v1/object/public/image//sabay_logo.png",
  url: "#sabay"
}];

export default function OrganizersSection() {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Awesome Organizers</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {partnerLogos.map((partner, index) => (
          <Link key={index} to={partner.url} className="block">
            <Card className="h-24 flex items-center justify-center border-0 bg-transparent shadow-none">
              <CardContent className="p-2 flex items-center justify-center h-full w-full">
                <img src={partner.logo} alt={partner.name} className="max-h-16 max-w-full object-contain" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
