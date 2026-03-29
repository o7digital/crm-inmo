import type { Metadata } from "next";
import { LocalizedContactContentPage } from "@/components/public/LocalizedPublicPages";

const BASE_URL = "https://www.cervantesbienesraices.com";

export const metadata: Metadata = {
  title: "Contacto | Cervantes Bienes Raíces",
  description:
    "Contáctanos para comprar, vender o rentar propiedades en México. Respuesta rápida y asesoría personalizada.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
    languages: {
      "es-MX": `${BASE_URL}/contact`,
      "en-US": `${BASE_URL}/en`,
      "fr-FR": `${BASE_URL}/fr`,
      "it-IT": `${BASE_URL}/it`,
      "de-DE": `${BASE_URL}/de/contact`,
    },
  },
  openGraph: {
    title: "Contacto | Cervantes Bienes Raíces",
    description:
      "Asesoría inmobiliaria personalizada en México. Escríbenos para agendar una llamada.",
    url: `${BASE_URL}/contact`,
    images: [{ url: "/images/assets/ogg.png" }],
    locale: "es_MX",
  },
};

const index = () => {
  return <LocalizedContactContentPage locale="es" />;
};

export default index;
