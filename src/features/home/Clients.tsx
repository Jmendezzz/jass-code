import { useTranslation } from "react-i18next";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import Section from "@/components/molecules/Section";

const clients = [
  { name: "MediTrack", logo: "/customers/meditrack.png" },
  { name: "EduFlex", logo: "/customers/eduflex.png" },
  { name: "Consulta360", logo: "/customers/consulta360.png" },
  { name: "U360 Education", logo: "/customers/u360.png" },
  { name: "CrediYa", logo: "/customers/crediya.png" },
];

export default function Clients() {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      const cleanup = autoplay();
      return cleanup;
    }
  }, [emblaApi, autoplay]);

  return (
    <Section >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">{t("clients.title", "Nuestros Clientes")}</h2>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-12">
          {clients.map((client) => (
            <div key={client.name} className="flex-[0_0_50%] md:flex-[0_0_20%] flex justify-center items-center">
              <img
                src={client.logo}
                alt={client.name}
                className="h-25 md:h-50 object-contain grayscale hover:grayscale-0 transition duration-300 select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
