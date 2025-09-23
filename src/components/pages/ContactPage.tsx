import Section from "@/components/molecules/Section";
import HeroContact from "@/features/contact/HeroContact";
import ContactForm from "@/features/contact/ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactPage() {

    return (
        <section>
            {/* Hero */}
            <HeroContact />
            <Section bgColor="bg-background">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <ContactForm />
                    <ContactInfo />
                   
                </div>
            </Section>
        </section>
    );
}
