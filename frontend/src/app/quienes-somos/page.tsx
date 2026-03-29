import type { Metadata } from "next"

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
  return (
    <main className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Quiénes Somos</h1>

      <p className="mb-4">
        En <strong>Cervantes Bienes Raíces</strong> somos una agencia
        inmobiliaria profesional especializada en bienes raíces de lujo en
        Ciudad de México. Trabajamos con propiedades exclusivas y de alto valor
        en Polanco, Lomas de Chapultepec, Condesa, Roma y Santa Fe.
      </p>

      <p className="mb-4">
        Nuestro equipo ofrece asesoría personalizada para compradores
        nacionales, expatriados y extranjeros interesados en adquirir
        propiedades premium en México, ya sea para vivir, invertir o
        diversificar patrimonio.
      </p>

      <p className="mb-4">
        Contamos con amplia experiencia en valuación inmobiliaria, análisis de
        mercado, negociación estratégica y acompañamiento legal, garantizando
        procesos de compra-venta transparentes, eficientes y seguros.
      </p>

      <p className="mb-4">
        En cada operación ofrecemos acompañamiento integral: desde la búsqueda
        de la propiedad ideal hasta la negociación, revisión de documentos,
        trámites legales y entrega final.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Nuestra Filosofía</h2>
      <p className="mb-4">
        En Cervantes Bienes Raíces creemos que cada propiedad representa mucho
        más que un activo inmobiliario: es un espacio de vida, un patrimonio
        personal y un proyecto a largo plazo.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Confianza: relaciones duraderas basadas en transparencia, ética y confidencialidad.</li>
        <li>Precisión: recomendaciones respaldadas por análisis reales del mercado premium.</li>
        <li>Excelencia: búsqueda constante de la mejor oportunidad en ubicación, valor y calidad de vida.</li>
      </ul>
    </main>
  );
}
