import { usePathname } from "next/navigation";

const SUPPORTED = ["es", "en", "fr", "it", "de"] as const;
type SupportedLang = (typeof SUPPORTED)[number];

const routeMap: Record<string, Record<SupportedLang, string>> = {
  home: {
    es: "/",
    en: "/en",
    fr: "/fr",
    it: "/it",
    de: "/de",
  },
  about: {
    es: "/quienes-somos",
    en: "/en/about",
    fr: "/fr/about",
    it: "/it/about",
    de: "/de/about",
  },
  services: {
    es: "/servicios",
    en: "/en/services",
    fr: "/fr/services",
    it: "/it/services",
    de: "/de/services",
  },
  contact: {
    es: "/contact",
    en: "/en/contact",
    fr: "/fr/contact",
    it: "/it/contact",
    de: "/de/contact",
  },
  blog: {
    es: "/blog",
    en: "/en/blog",
    fr: "/fr/blog",
    it: "/it/blog",
    de: "/de/blog",
  },
  listing: {
    es: "/listing_06",
    en: "/en/listing_06",
    fr: "/fr/listing_06",
    it: "/it/listing_06",
    de: "/de/listing_06",
  },
  privacy: {
    es: "/aviso-privacidad",
    en: "/en/privacy-policy",
    fr: "/fr/politique-confidentialite",
    it: "/it/politica-privacy",
    de: "/de/datenschutz",
  },
};

const pathAliases: Record<string, keyof typeof routeMap> = Object.entries(routeMap).reduce(
  (acc, [key, languages]) => {
    Object.values(languages).forEach((path) => {
      acc[path] = key as keyof typeof routeMap;
    });
    return acc;
  },
  {} as Record<string, keyof typeof routeMap>,
);

pathAliases["/contacto"] = "contact";

const useLanguage = () => {
  const pathname = usePathname() || "/";
  const match = pathname.match(/^\/(en|fr|it|de)(\/|$)/);
  const lang = (match?.[1] as SupportedLang) || "es";

  const stripPrefix = (path: string) =>
    path.replace(/^\/(en|fr|it|de)(?=\/|$)/, "") || "/";

  const buildPath = (targetLang: SupportedLang) => {
    const exactMatch = pathAliases[pathname];
    if (exactMatch) {
      return routeMap[exactMatch][targetLang];
    }

    if (/^\/(en|fr|it|de)\/property\/[^/]+$/.test(pathname)) {
      const propertyId = pathname.split("/").pop();
      return propertyId ? `/${targetLang === "es" ? "property" : `${targetLang}/property`}/${propertyId}` : pathname;
    }

    if (/^\/property\/[^/]+$/.test(pathname)) {
      const propertyId = pathname.split("/").pop();
      return propertyId ? `/${targetLang === "es" ? "property" : `${targetLang}/property`}/${propertyId}` : pathname;
    }

    const basePath = stripPrefix(pathname);
    if (targetLang === "es") return basePath;
    return basePath === "/" ? `/${targetLang}` : `/${targetLang}${basePath}`;
  };

  return {
    lang,
    currentLang: lang,
    isEnglish: lang === "en",
    buildPath,
    languages: SUPPORTED,
  };
};

export default useLanguage;
