import { AboutLifeCulture } from "@/features/about-life/AboutLifeCulture";
import { AboutLifeGallery } from "@/features/about-life/AboutLifeGallery";
import { AboutLifeHero } from "@/features/about-life/AboutLifeHero";
import { AboutLifeValues } from "@/features/about-life/AboutLifeValues";

export default function AboutLifePage(){
    return(
        <section>
            <AboutLifeHero />
            <AboutLifeCulture />
            <AboutLifeValues />
            <AboutLifeGallery />
        </section>
    )

}