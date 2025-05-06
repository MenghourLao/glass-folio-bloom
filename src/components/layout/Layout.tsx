
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
  // Add top padding on all pages to account for the fixed header
  const isHomePage = location.pathname === "/";
  const needsTopPadding = !isHomePage;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${needsTopPadding ? 'pt-20' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
