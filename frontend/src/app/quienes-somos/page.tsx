import type { Metadata } from "next"
import { LocalizedAboutContentPage } from "@/components/public/LocalizedPublicPages";

const BASE_URL = "https://www.cervantesbienesraices.com"

export const metadata: Metadata = {
  title: "Quiénes Somos | Cervantes Bienes Raíces",
  description:
    "Conoce al equipo de Cervantes Bienes Raíces. Más de 20 años de experiencia en asesoría inmobiliaria en México con enfoque en transparencia y confianza.",
  alternates: {
    canonical: `${BASE_URL}/quienes-somos`,
    languages: {
      "es-MX": `${BASE_URL}/quienes-somos`,
      "en-US": `${BASE_URL}/en`,
    },
  },
  openGraph: {
    title: "Quiénes Somos | Cervantes Bienes Raíces",
    description:
      "Somos especialistas en bienes raíces con más de 20 años de experiencia en México. Transparencia, confianza y resultados.",
    url: `${BASE_URL}/quienes-somos`,
    images: [{ url: "/images/assets/ogg.png" }],
    locale: "es_MX",
  },
}

export default function QuienesSomos() {
  return <LocalizedAboutContentPage locale="es" />;
}
