import About from "@/features/home/About";
import CallToAction from "@/features/home/CallToAction";
import Clients from "@/features/home/Clients";
import Hero from "@/features/home/Hero";
import Services from "@/features/home/Services";
import WhyChooseUs from "@/features/home/WhyChooseUs";

export default function Home() {
  return (
    <section>
        <Hero/>
        <About />
        <Services/>
        <WhyChooseUs />
        <CallToAction />
        <Clients />
    </section>
  );
}
