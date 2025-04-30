
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center p-6">
        <h1 className="text-6xl sm:text-8xl font-bold mb-4 text-primary">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button size="lg" className="rounded-full">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}
