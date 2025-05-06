
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
  // Check if we're on a case study detail page
  const isCaseStudyDetail = location.pathname.includes('/case-studies/') && location.pathname !== '/case-studies';
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${isCaseStudyDetail ? 'pt-20' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
