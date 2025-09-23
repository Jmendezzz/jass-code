import AboutCTA from "@/features/about /AboutCTA";
import AboutHero from "@/features/about /AboutHero";
import MissionVision from "@/features/about /MissionVission";
import OurTeam from "@/features/about /OurTeam";
import OurValues from "@/features/about /OurValues";
import WhoWeAre from "@/features/about /WhoWeAre";


export default function AboutPage() {

    return (
        <section>
            <AboutHero />
            <WhoWeAre />
            <MissionVision />
            <OurValues />
            <OurTeam/>
            <AboutCTA />
        </section>
    );
}
