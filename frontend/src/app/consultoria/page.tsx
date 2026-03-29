import type { Metadata } from "next"

const BASE_URL = "https://www.cervantesbienesraices.com"

export const metadata: Metadata = {
  title: "Consultoría Inmobiliaria Estratégica | Cervantes Bienes Raíces",
  description:
    "Consultoría para inversionistas y desarrolladores: análisis de mercado, evaluación de terrenos y estructuración de proyectos inmobiliarios en México.",
  alternates: {
    canonical: `${BASE_URL}/consultoria`,
    languages: {
      "es-MX": `${BASE_URL}/consultoria`,
      "en-US": `${BASE_URL}/en`,
    },
  },
  openGraph: {
    title: "Consultoría Inmobiliaria Estratégica",
    description:
      "Estrategias inmobiliarias a la medida: estudios de viabilidad, evaluación de proyectos y optimización de portafolios.",
    url: `${BASE_URL}/consultoria`,
    images: [{ url: "/images/assets/ogg.png" }],
    locale: "es_MX",
  },
}

export default function Consultoria() {
  return (
    <main className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Estrategia de inversión y patrimonio</h1>

      <p className="mb-6">
        En <strong>Cervantes Bienes Raíces</strong> diseñamos estrategias
        inmobiliarias para clientes que buscan crecimiento de capital,
        rendimiento proyectado y diversificación inteligente en el mercado
        premium de CDMX.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Áreas de consultoría</h2>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>Análisis de mercado inmobiliario</strong>:
          estudios comparativos, tendencias de absorción y lectura de valor por zona.
        </li>
        <li>
          <strong>Valuación y criterios de entrada</strong>:
          estimación de valor real del inmueble para tomar decisiones informadas.
        </li>
        <li>
          <strong>Evaluación de oportunidades</strong>:
          revisión de riesgos, retorno potencial y ajuste con objetivos patrimoniales.
        </li>
        <li>
          <strong>Estructuración patrimonial</strong>:
          compra, venta o conservación de activos con una lógica de largo plazo.
        </li>
      </ul>

      <p className="mt-6">
        Nuestro compromiso es ofrecer claridad, criterio profesional y
        acompañamiento real para que cada decisión inmobiliaria proteja y haga
        crecer el patrimonio del cliente.
      </p>
    </main>
  );
}
