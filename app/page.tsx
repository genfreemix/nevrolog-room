import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { HowToBook } from "@/components/HowToBook";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { ProtoLayer } from "@/components/ProtoLayer";
import { LeadForm } from "@/components/LeadForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProtoLayer />
      <About />
      <Services />
      <HowToBook />
      <Reviews />
      <FAQ />
      <Contact />
      <LeadForm />
    </main>
  );
}
