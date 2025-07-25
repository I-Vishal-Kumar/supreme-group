import ContactForm from "@/_components/ContactUsSection";
import Footer from "@/_components/FooterSection";
import Header from "@/_components/Header";
import HeroSection from "@/_components/HeroSection";

export default function Home() {
  return (
    <div className="font-sans min-h-screen max-w-[100dvw]">
      <Header />
      <HeroSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
