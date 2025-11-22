import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import RegistrationForm from "@/components/RegistrationForm";
// import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <RegistrationForm />
      {/* <EnquiryForm /> */}
      <Footer />
    </main>
  );
}
