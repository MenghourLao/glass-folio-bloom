
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({
  children
}: LayoutProps) {
  return <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-grow py-0 flex flex-col w-full scroll-smooth">
        {children}
      </main>
      <Footer />
    </div>;
}
