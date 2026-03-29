"use client"
import Image from "next/image"
import Link from "next/link"

import footerLogo from "@/assets/images/logo/logo_06.svg"
import footerShape_1 from "@/assets/images/shape/shape_52.svg"
import useLanguage from "@/hooks/useLanguage"

const FooterThree = () => {
   const { lang } = useLanguage();
   const homeHref = lang === "en"
      ? "/en"
      : lang === "fr"
      ? "/fr"
      : lang === "it"
      ? "/it"
      : lang === "de"
      ? "/de"
      : "/";

   const copy = lang === "en"
      ? {
         title: "Newsletter",
         description: "Subscribe to receive important updates.",
         placeholder: "Enter your email",
         action: "Send",
         note: "We only send relevant and valuable emails.",
         copyright: "Copyright ©2025 CERVANTES REAL ESTATE. All rights reserved.",
      }
      : lang === "fr"
      ? {
         title: "Newsletter",
         description: "Abonnez-vous pour recevoir les mises à jour importantes.",
         placeholder: "Entrez votre email",
         action: "Envoyer",
         note: "Nous envoyons uniquement des emails pertinents et utiles.",
         copyright: "Copyright ©2025 CERVANTES IMMOBILIER. Tous droits réservés.",
      }
      : lang === "it"
      ? {
         title: "Newsletter",
         description: "Iscriviti per ricevere aggiornamenti importanti.",
         placeholder: "Inserisci la tua email",
         action: "Invia",
         note: "Inviamo solo email rilevanti e utili.",
         copyright: "Copyright ©2025 CERVANTES IMMOBILIARE. Tutti i diritti riservati.",
      }
      : lang === "de"
      ? {
         title: "Newsletter",
         description: "Abonnieren Sie, um wichtige Updates zu erhalten.",
         placeholder: "E-Mail eingeben",
         action: "Senden",
         note: "Wir versenden nur relevante und wertvolle Informationen.",
         copyright: "Copyright ©2025 CERVANTES REAL ESTATE. Alle Rechte vorbehalten.",
      }
      : {
         title: "Boletín",
         description: "Suscríbete y recibe noticias importantes regularmente",
         placeholder: "Ingresa tu correo electrónico",
         action: "Enviar",
         note: "Solo enviamos correos interesantes y relevantes.",
         copyright: "Copyright ©2025 CERVANTES BIENES RAÍCES. Todos los derechos reservados.",
      };

   return (
      <div className="footer-three">
         <div className="container container-large">
            <div className="bg-wrapper position-relative z-1">
               <div className="row">
                  <div className="col-xl-3 mb-40 lg-mb-60">
                     <div className="footer-intro pe-xxl-5 pe-xl-3">
                        <div className="logo mb-15">
                           <Link href={homeHref}>
                              <Image src={footerLogo} alt="Cervantes Bienes Raíces" />
                           </Link>
                        </div>
                        <p className="mb-45 lg-mb-30">
                           Cerrada de Bezares 133, Col. Lomas de Bezares, <br />
                           CP 11910, Miguel Hidalgo, CDMX.
                        </p>
                        <ul className="style-none d-flex align-items-center social-icon">
                           <li><a href="https://www.facebook.com/cervantesbienesraices" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                           <li><a href="https://www.instagram.com/cervantesbienesraices" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                           <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                        <Image src={footerShape_1} alt="" className="lazy-img ms-auto d-none d-xl-block" />
                     </div>
                  </div>

                  <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                     <div className="footer-nav">
                        <h5 className="footer-title">{copy.title}</h5>
                        <p className="mb-20">{copy.description}</p>
                        <form className="newsletter-form position-relative" onSubmit={(event) => event.preventDefault()}>
                           <input type="email" placeholder={copy.placeholder} />
                           <button type="submit" className="btn-four fw-500 text-uppercase">{copy.action}</button>
                        </form>
                        <div className="fs-14 mt-10">{copy.note}</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="bottom-footer">
            <div className="container text-center">
               <p className="seo-footer">
                  bienes raíces de lujo CDMX · inmobiliaria premium Ciudad de México · departamentos en Polanco · casas en Lomas de Chapultepec · propiedades exclusivas CDMX · inversión inmobiliaria México · asesoría inmobiliaria profesional · compra de propiedades en CDMX · casas premium Ciudad de México · vivienda para expatriados México · propiedades en Roma · inmuebles en Condesa · zonas seguras CDMX · mercado inmobiliario premium · valuación inmobiliaria CDMX · consultores inmobiliarios México · patrimonio inmobiliario · propiedades de alto nivel · compra y venta de inmuebles premium · agencia inmobiliaria de confianza
               </p>
               <p className="m-0">{copy.copyright}</p>
            </div>
         </div>
      </div>
   )
}

export default FooterThree
