"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { API_BASE_URL } from "@/lib/apiBase";
import type { MarketingLocale } from "@/lib/marketingContent";
import titleShape from "@/assets/images/shape/title_shape_06.svg";
import featureThumb from "@/assets/images/assets/screen_12.png";

type Props = {
  locale: MarketingLocale;
  contactHref: string;
  pagePath: string;
};

type LeadFormState = {
  name: string;
  email: string;
  phone: string;
};

type AppraisalFormState = LeadFormState & {
  reason: string;
};

const appraisalInitialState: AppraisalFormState = {
  name: "",
  email: "",
  phone: "",
  reason: "",
};

const mortgageInitialState: LeadFormState = {
  name: "",
  email: "",
  phone: "",
};

const content = {
  es: {
    appraisal: {
      eyebrow: "AVALÚOS",
      titleBefore: "Avalúos",
      titleHighlight: "realizados",
      titleAfter: "de su propiedad.",
      description:
        "Evalúa tu propiedad y accede al mercado inmobiliario con seguridad y visión.",
      priceLabel: "Su Avalúo desde:",
      namePlaceholder: "Tu nombre completo...",
      emailPlaceholder: "Tu correo electrónico...",
      phonePlaceholder: "Tu teléfono...",
      reasonPlaceholder: "Motivo del avalúo",
      reasons: [
        "Compra/Venta",
        "Crédito hipotecario",
        "Regularización",
        "Seguro",
        "Otro",
      ],
      submit: "Solicitar avalúo",
      sending: "Enviando...",
      validation: "Por favor, completa todos los campos",
      success: "Solicitud de avalúo enviada. Te contactaremos pronto.",
      error: "Error al enviar la solicitud. Intenta de nuevo.",
      helpPrefix: "*Para información precisa por favor ",
      helpLink: "contáctanos.",
      objective: "Avalúo",
      messagePrefix: "Solicitud de avalúo desde la sección premium.",
      reasonMessageLabel: "Motivo",
    },
    mortgage: {
      eyebrow: "CRÉDITO HIPOTECARIO",
      titleBefore: "Solicitar un",
      titleHighlight: "Crédito",
      titleAfter: "Hipotecario",
      description:
        "Te guiaremos durante todo el proceso. Déjanos tus datos y nos contactaremos contigo.",
      namePlaceholder: "Tu nombre completo...",
      emailPlaceholder: "Tu correo electrónico...",
      phonePlaceholder: "Tu número de teléfono...",
      submit: "Solicitar Consultoría",
      sending: "Enviando...",
      validation: "Por favor, completa todos los campos",
      success: "Solicitud enviada con éxito. Nos contactaremos pronto.",
      error: "Error al enviar la solicitud. Por favor, intenta de nuevo.",
      responseTime: "*Respuesta dentro de 24 horas",
      imageTitle: "Financiamiento",
      imageSubtitle: "Para tu próximo hogar",
      imageDescription: "Tasas competitivas y asesoría personalizada",
      objective: "Crédito hipotecario",
      message: "Solicitud de crédito hipotecario desde la sección premium.",
    },
  },
  en: {
    appraisal: {
      eyebrow: "APPRAISALS",
      titleBefore: "Appraisals",
      titleHighlight: "completed",
      titleAfter: "for your property.",
      description:
        "Get an accurate appraisal and access the real estate market with confidence.",
      priceLabel: "Your appraisal from:",
      namePlaceholder: "Your full name...",
      emailPlaceholder: "Your email address...",
      phonePlaceholder: "Your phone...",
      reasonPlaceholder: "Reason for appraisal",
      reasons: ["Purchase/Sale", "Mortgage loan", "Regularization", "Insurance", "Other"],
      submit: "Request appraisal",
      sending: "Sending...",
      validation: "Please fill in all fields",
      success: "Appraisal request sent. We will contact you soon.",
      error: "Failed to send the request. Please try again.",
      helpPrefix: "*For precise information please ",
      helpLink: "contact us.",
      objective: "Appraisal",
      messagePrefix: "Appraisal request from the premium section.",
      reasonMessageLabel: "Reason",
    },
    mortgage: {
      eyebrow: "MORTGAGE LOAN",
      titleBefore: "Need a",
      titleHighlight: "Mortgage",
      titleAfter: "Loan?",
      description:
        "We will guide you through the entire process. Leave your details and we will contact you.",
      namePlaceholder: "Your full name...",
      emailPlaceholder: "Your email address...",
      phonePlaceholder: "Your phone number...",
      submit: "Request consultation",
      sending: "Sending...",
      validation: "Please fill in all fields",
      success: "Request sent successfully. We will contact you soon.",
      error: "Failed to send the request. Please try again.",
      responseTime: "*Response within 24 hours",
      imageTitle: "Financing",
      imageSubtitle: "For your next home",
      imageDescription: "Competitive rates and personalized advice",
      objective: "Mortgage loan",
      message: "Mortgage consultation request from the premium section.",
    },
  },
  fr: {
    appraisal: {
      eyebrow: "ÉVALUATIONS",
      titleBefore: "Évaluations",
      titleHighlight: "réalisées",
      titleAfter: "pour votre propriété.",
      description:
        "Obtenez une évaluation précise et accédez au marché immobilier en toute confiance.",
      priceLabel: "Votre évaluation à partir de :",
      namePlaceholder: "Votre nom complet...",
      emailPlaceholder: "Votre adresse e-mail...",
      phonePlaceholder: "Votre téléphone...",
      reasonPlaceholder: "Motif de l'évaluation",
      reasons: ["Achat/Vente", "Prêt hypothécaire", "Régularisation", "Assurance", "Autre"],
      submit: "Demander une évaluation",
      sending: "Envoi en cours...",
      validation: "Veuillez remplir tous les champs",
      success: "Demande d'évaluation envoyée. Nous vous contacterons bientôt.",
      error: "Échec de l'envoi. Veuillez réessayer.",
      helpPrefix: "*Pour des informations précises, veuillez ",
      helpLink: "nous contacter.",
      objective: "Évaluation",
      messagePrefix: "Demande d'évaluation depuis la section premium.",
      reasonMessageLabel: "Motif",
    },
    mortgage: {
      eyebrow: "PRÊT HYPOTHÉCAIRE",
      titleBefore: "Demander un",
      titleHighlight: "Crédit",
      titleAfter: "Hypothécaire",
      description:
        "Nous vous guiderons tout au long du processus. Laissez vos coordonnées et nous vous contacterons.",
      namePlaceholder: "Votre nom complet...",
      emailPlaceholder: "Votre adresse e-mail...",
      phonePlaceholder: "Votre numéro de téléphone...",
      submit: "Demander une consultation",
      sending: "Envoi en cours...",
      validation: "Veuillez remplir tous les champs",
      success: "Demande envoyée avec succès. Nous vous contacterons bientôt.",
      error: "Échec de l'envoi. Veuillez réessayer.",
      responseTime: "*Réponse dans les 24 heures",
      imageTitle: "Financement",
      imageSubtitle: "Pour votre prochain logement",
      imageDescription: "Taux compétitifs et conseils personnalisés",
      objective: "Prêt hypothécaire",
      message: "Demande de prêt hypothécaire depuis la section premium.",
    },
  },
  it: {
    appraisal: {
      eyebrow: "VALUTAZIONI",
      titleBefore: "Valutazioni",
      titleHighlight: "completate",
      titleAfter: "per la tua proprietà.",
      description:
        "Ottieni una valutazione accurata e accedi al mercato immobiliare con fiducia.",
      priceLabel: "La tua valutazione da:",
      namePlaceholder: "Il tuo nome completo...",
      emailPlaceholder: "Il tuo indirizzo email...",
      phonePlaceholder: "Il tuo telefono...",
      reasonPlaceholder: "Motivo della valutazione",
      reasons: ["Acquisto/Vendita", "Mutuo ipotecario", "Regolarizzazione", "Assicurazione", "Altro"],
      submit: "Richiedi valutazione",
      sending: "Invio in corso...",
      validation: "Si prega di compilare tutti i campi",
      success: "Richiesta di valutazione inviata. Ti contatteremo presto.",
      error: "Impossibile inviare la richiesta. Riprova.",
      helpPrefix: "*Per informazioni precise, si prega di ",
      helpLink: "contattarci.",
      objective: "Valutazione",
      messagePrefix: "Richiesta di valutazione dalla sezione premium.",
      reasonMessageLabel: "Motivo",
    },
    mortgage: {
      eyebrow: "MUTUO IPOTECARIO",
      titleBefore: "Richiedere un",
      titleHighlight: "Mutuo",
      titleAfter: "Ipotecario",
      description:
        "Ti guideremo durante tutto il processo. Lascia i tuoi dati e ti contatteremo.",
      namePlaceholder: "Il tuo nome completo...",
      emailPlaceholder: "Il tuo indirizzo email...",
      phonePlaceholder: "Il tuo numero di telefono...",
      submit: "Richiedi consulenza",
      sending: "Invio in corso...",
      validation: "Si prega di compilare tutti i campi",
      success: "Richiesta inviata con successo. Ti contatteremo presto.",
      error: "Impossibile inviare la richiesta. Riprova.",
      responseTime: "*Risposta entro 24 ore",
      imageTitle: "Finanziamento",
      imageSubtitle: "Per la tua prossima casa",
      imageDescription: "Tassi competitivi e consulenza personalizzata",
      objective: "Mutuo ipotecario",
      message: "Richiesta di mutuo ipotecario dalla sezione premium.",
    },
  },
  de: {
    appraisal: {
      eyebrow: "WERTERMITTLUNG",
      titleBefore: "Gutachten",
      titleHighlight: "fertig",
      titleAfter: "für Ihre Immobilie.",
      description:
        "Erhalten Sie eine präzise Bewertung und treten Sie selbstbewusst am Markt auf.",
      priceLabel: "Ihr Gutachten ab:",
      namePlaceholder: "Ihr vollständiger Name...",
      emailPlaceholder: "Ihre E-Mail-Adresse...",
      phonePlaceholder: "Ihr Telefon...",
      reasonPlaceholder: "Grund für die Bewertung",
      reasons: ["Kauf/Verkauf", "Hypothekendarlehen", "Regularisierung", "Versicherung", "Andere"],
      submit: "Bewertung anfragen",
      sending: "Senden...",
      validation: "Bitte füllen Sie alle Felder aus",
      success: "Bewertungsanfrage gesendet. Wir melden uns in Kürze.",
      error: "Anfrage fehlgeschlagen. Bitte erneut versuchen.",
      helpPrefix: "*Für genaue Informationen bitte ",
      helpLink: "kontaktieren Sie uns.",
      objective: "Bewertung",
      messagePrefix: "Bewertungsanfrage aus dem Premium-Bereich.",
      reasonMessageLabel: "Grund",
    },
    mortgage: {
      eyebrow: "HYPOTHEK",
      titleBefore: "Brauchen Sie einen",
      titleHighlight: "Kredit",
      titleAfter: "?",
      description:
        "Wir begleiten Sie durch den gesamten Prozess. Hinterlassen Sie Ihre Daten und wir kontaktieren Sie.",
      namePlaceholder: "Ihr vollständiger Name...",
      emailPlaceholder: "Ihre E-Mail...",
      phonePlaceholder: "Ihre Telefonnummer...",
      submit: "Beratung anfragen",
      sending: "Senden...",
      validation: "Bitte füllen Sie alle Felder aus",
      success: "Anfrage erfolgreich gesendet. Wir melden uns in Kürze.",
      error: "Anfrage fehlgeschlagen. Bitte erneut versuchen.",
      responseTime: "*Antwort innerhalb von 24 Stunden",
      imageTitle: "Finanzierung",
      imageSubtitle: "für Ihr nächstes Zuhause",
      imageDescription: "Attraktive Konditionen und persönliche Beratung",
      objective: "Hypothek",
      message: "Hypothekenanfrage aus dem Premium-Bereich.",
    },
  },
} as const;

async function postLead(payload: {
  name: string;
  email: string;
  phone: string;
  objective: string;
  message: string;
  language: MarketingLocale;
  pagePath: string;
  source: string;
}) {
  const response = await fetch(`${API_BASE_URL}/public/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }
}

export default function LocalizedServiceLeadSections({
  locale,
  contactHref,
  pagePath,
}: Props) {
  const copy = content[locale];
  const [appraisal, setAppraisal] = useState(appraisalInitialState);
  const [mortgage, setMortgage] = useState(mortgageInitialState);
  const [appraisalLoading, setAppraisalLoading] = useState(false);
  const [mortgageLoading, setMortgageLoading] = useState(false);

  const submitAppraisal = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!appraisal.name || !appraisal.email || !appraisal.phone || !appraisal.reason) {
      toast.error(copy.appraisal.validation);
      return;
    }

    setAppraisalLoading(true);
    try {
      await postLead({
        name: appraisal.name,
        email: appraisal.email,
        phone: appraisal.phone,
        objective: copy.appraisal.objective,
        message: `${copy.appraisal.messagePrefix} ${copy.appraisal.reasonMessageLabel}: ${appraisal.reason}.`,
        language: locale,
        pagePath,
        source: "premium-appraisal-form",
      });
      setAppraisal(appraisalInitialState);
      toast.success(copy.appraisal.success);
    } catch {
      toast.error(copy.appraisal.error);
    } finally {
      setAppraisalLoading(false);
    }
  };

  const submitMortgage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!mortgage.name || !mortgage.email || !mortgage.phone) {
      toast.error(copy.mortgage.validation);
      return;
    }

    setMortgageLoading(true);
    try {
      await postLead({
        name: mortgage.name,
        email: mortgage.email,
        phone: mortgage.phone,
        objective: copy.mortgage.objective,
        message: copy.mortgage.message,
        language: locale,
        pagePath,
        source: "premium-mortgage-form",
      });
      setMortgage(mortgageInitialState);
      toast.success(copy.mortgage.success);
    } catch {
      toast.error(copy.mortgage.error);
    } finally {
      setMortgageLoading(false);
    }
  };

  return (
    <>
      <div className="block-feature-four mt-170 xl-mt-130 md-mt-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex order-lg-last">
              <div className="ps-xxl-5 ms-xl-4 pt-100 xl-pt-80 pb-45 w-100 h-100 wow fadeInRight">
                <div className="title-one mb-60 lg-mb-40">
                  <div className="upper-title">{copy.appraisal.eyebrow}</div>
                  <h3>
                    {copy.appraisal.titleBefore}{" "}
                    <span>
                      {copy.appraisal.titleHighlight}
                      <Image src={titleShape} alt="" className="lazy-img" />
                    </span>{" "}
                    {copy.appraisal.titleAfter}
                  </h3>
                  <p className="fs-24 color-dark">{copy.appraisal.description}</p>
                </div>

                <form onSubmit={submitAppraisal} className="me-xl-4">
                  <input
                    type="text"
                    name="name"
                    value={appraisal.name}
                    onChange={(event) =>
                      setAppraisal((current) => ({ ...current, name: event.target.value }))
                    }
                    placeholder={copy.appraisal.namePlaceholder}
                    className="mb-3"
                    required
                    disabled={appraisalLoading}
                  />
                  <input
                    type="email"
                    name="email"
                    value={appraisal.email}
                    onChange={(event) =>
                      setAppraisal((current) => ({ ...current, email: event.target.value }))
                    }
                    placeholder={copy.appraisal.emailPlaceholder}
                    className="mb-3"
                    required
                    disabled={appraisalLoading}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={appraisal.phone}
                    onChange={(event) =>
                      setAppraisal((current) => ({ ...current, phone: event.target.value }))
                    }
                    placeholder={copy.appraisal.phonePlaceholder}
                    className="mb-3"
                    required
                    disabled={appraisalLoading}
                  />
                  <select
                    name="reason"
                    value={appraisal.reason}
                    onChange={(event) =>
                      setAppraisal((current) => ({ ...current, reason: event.target.value }))
                    }
                    className="mb-3"
                    required
                    disabled={appraisalLoading}
                  >
                    <option value="">{copy.appraisal.reasonPlaceholder}</option>
                    {copy.appraisal.reasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                  <button type="submit" disabled={appraisalLoading}>
                    {appraisalLoading ? copy.appraisal.sending : copy.appraisal.submit}
                  </button>
                </form>

                <div className="fs-16 mt-10 opacity-75">
                  {copy.appraisal.helpPrefix}
                  <Link
                    href={contactHref}
                    className="fst-italic color-dark text-decoration-underline"
                  >
                    {copy.appraisal.helpLink}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex">
              <div className="img-gallery position-relative z-1 w-100 h-100 me-lg-5 wow fadeInLeft">
                <div
                  className="img-bg"
                  style={{ backgroundImage: "url(/assets/images/media/img_11.jpg)" }}
                />
                <div className="card-one">
                  <div className="text text-center z-1">
                    <h6>{copy.appraisal.priceLabel}</h6>
                    <h3>$2900.00</h3>
                  </div>
                  <Image
                    src={featureThumb}
                    alt={copy.appraisal.objective}
                    className="lazy-img w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block-feature-four mt-80 xl-mt-60 md-mt-40">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-flex">
              <div className="pe-xxl-5 me-xl-4 pt-100 xl-pt-80 pb-45 w-100 h-100 wow fadeInLeft">
                <div className="title-one mb-60 lg-mb-40">
                  <div className="upper-title">{copy.mortgage.eyebrow}</div>
                  <h3>
                    {copy.mortgage.titleBefore}{" "}
                    <span>
                      {copy.mortgage.titleHighlight}
                      <Image src={titleShape} alt="" className="lazy-img" />
                    </span>{" "}
                    {copy.mortgage.titleAfter}
                  </h3>
                  <p className="fs-24 color-dark">{copy.mortgage.description}</p>
                </div>

                <form onSubmit={submitMortgage} className="me-xl-4">
                  <input
                    type="text"
                    name="name"
                    value={mortgage.name}
                    onChange={(event) =>
                      setMortgage((current) => ({ ...current, name: event.target.value }))
                    }
                    placeholder={copy.mortgage.namePlaceholder}
                    className="mb-3"
                    disabled={mortgageLoading}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={mortgage.email}
                    onChange={(event) =>
                      setMortgage((current) => ({ ...current, email: event.target.value }))
                    }
                    placeholder={copy.mortgage.emailPlaceholder}
                    className="mb-3"
                    disabled={mortgageLoading}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={mortgage.phone}
                    onChange={(event) =>
                      setMortgage((current) => ({ ...current, phone: event.target.value }))
                    }
                    placeholder={copy.mortgage.phonePlaceholder}
                    className="mb-3"
                    disabled={mortgageLoading}
                    required
                  />
                  <button type="submit" disabled={mortgageLoading}>
                    {mortgageLoading ? copy.mortgage.sending : copy.mortgage.submit}
                  </button>
                </form>

                <div className="fs-16 mt-20 opacity-75">{copy.mortgage.responseTime}</div>
              </div>
            </div>

            <div className="col-lg-6 d-flex">
              <div className="w-100 h-100 ms-lg-5 wow fadeInRight d-flex flex-column align-items-center justify-content-start pt-100 xl-pt-80">
                <div style={{ maxWidth: "800px", width: "100%" }}>
                  <Image
                    src="/assets/images/media/morgage_house.png"
                    alt={copy.mortgage.objective}
                    width={800}
                    height={800}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>

                <div className="text-center mt-4">
                  <h3 className="mb-3">{copy.mortgage.imageTitle}</h3>
                  <h4 className="color-dark mb-2">{copy.mortgage.imageSubtitle}</h4>
                  <p className="fs-18 opacity-75">{copy.mortgage.imageDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
