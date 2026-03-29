# Migration Cervantes vers `crm-inmo`

Cette note résume ce qui a ete integre dans le nouveau site `crm-inmo`, les choix techniques, et les points a respecter pour eviter de recasser la vitrine publique.

## Portee

- Repo cible du nouveau site: `o7digital/crm-inmo`
- Branche cible du nouveau site: `main`
- Ancien site source de contenu: `https://www.cervantesbienesraices.com/`
- Repo a ne pas toucher pour la prod client: `o7digital/cervantesbienesraices`
- Regle de securite: ne jamais pousser sur `main` de `cervantesbienesraices`

## Ce qui a ete fait

### Vitrine publique Cervantes dans `crm-inmo`

- Le nouveau frontend public a garde le header et le footer du nouveau design.
- Le contenu Cervantes a ete reintegre dans les pages publiques du nouveau site.
- Les routes publiques principales sont maintenant servies par le frontend `crm-inmo`.
- Les contenus multilingues `es`, `en`, `fr`, `it`, `de` restent dans le nouveau site, sans renvoyer vers l ancien.

### Pages publiques prises en charge

- Home: `/`, `/en`, `/fr`, `/it`, `/de`
- Quienes somos / About: `/quienes-somos`, `/en/about`, `/fr/about`, `/it/about`, `/de/about`
- Servicios / Services: `/servicios`, `/en/services`, `/fr/services`, `/it/services`, `/de/services`
- Contact: `/contact`, `/contacto`, `/en/contact`, `/fr/contact`, `/it/contact`, `/de/contact`
- Blog: `/blog` et variantes localisees
- Listing principal: `/listing_06` et variantes localisees
- Compatibilite CTA: `/property` redirige vers `/listing_06`

### Formulaires

- Le formulaire de contact du nouveau site est branche au backend `crm-inmo`.
- Les sections `Avaluos` et `Credito Hipotecario` ont ete reintegrees dans le nouveau design.
- Les formulaires ne doivent plus reutiliser les anciens branchements EmailJS du site legacy.

## Fichiers importants

### Pages publiques localisees

- `frontend/src/components/public/LocalizedPublicPages.tsx`
- `frontend/src/components/public/LocalizedPublicPages.module.css`
- `frontend/src/components/public/LocalizedContactForm.tsx`
- `frontend/src/components/public/LocalizedServiceLeadSections.tsx`

### Home premium

- `frontend/src/components/homes/home-premium/index.tsx`
- `frontend/src/components/homes/home-premium/PremiumHome.module.scss`

### Contenu centralise

- `frontend/src/lib/marketingContent.ts`
- `frontend/src/data/services.ts`

### Navigation et langues

- `frontend/src/hooks/useLanguage.ts`
- `frontend/src/data/home-data/MenuData.ts`
- `frontend/src/data/home-data/MenuDataEn.ts`
- `frontend/src/data/home-data/MenuDataFr.ts`
- `frontend/src/data/home-data/MenuDataIt.ts`
- `frontend/src/data/home-data/MenuDataDe.ts`

### Shell visuel

- `frontend/src/layouts/headers/HeaderFive.tsx`
- `frontend/src/layouts/footers/FooterThree.tsx`
- `frontend/src/layouts/footers/FooterThreeEn.tsx`
- `frontend/src/layouts/footers/FooterThreeFr.tsx`
- `frontend/src/layouts/footers/FooterThreeIt.tsx`
- `frontend/src/layouts/footers/FooterThreeDe.tsx`

### Source backend du contact public

- `api/src/public/public.controller.ts`
- `api/src/public/public.service.ts`
- `api/prisma/schema.prisma`

## Regles a respecter

### 1. Ne pas melanger les deux repos

- `cervantesbienesraices` sert de source de contenu et de reference visuelle.
- `crm-inmo` est le nouveau site a deployer et a faire evoluer.
- Toute correction publique doit etre faite dans `crm-inmo`, pas dans le repo legacy du client.

### 2. Garder le nouveau shell

- Header: nouveau design
- Footer: nouveau design
- Contenu: repris depuis Cervantes quand demande

Il ne faut pas recoller des pages completes du legacy si cela remplace le shell du nouveau site.

### 3. Les langues doivent rester sur le nouveau site

- Le switch de langue ne doit jamais envoyer vers l ancien site.
- Les slugs ne sont pas les memes selon la langue, donc il faut passer par la logique de mapping dans `useLanguage.ts`.
- Ne pas remettre de liens directs hardcodes vers `https://www.cervantesbienesraices.com/` pour la navigation interne.

### 4. Les pages `/contact` sont sensibles

- Le layout de la page contact depend de Bootstrap.
- La rangée principale doit rester en `align-items-start` dans `LocalizedPublicPages.tsx`.
- Sans cela, Bootstrap etire les colonnes a la meme hauteur et les cartes `Correo directo / Instagram / Facebook` passent visuellement sous le footer.

### 5. Attention aux anciennes pages localisees

- Les anciennes variantes `/en`, `/fr`, `/it`, `/de` du template peuvent reprendre la main si une route legacy reste presente.
- Avant tout changement multilingue, verifier que la route cible est bien servie par `LocalizedPublicPages` ou par la home premium, pas par un ancien composant `home-eight-*`.

## Checklist avant push

1. Verifier que le changement est fait dans `crm-inmo-main`
2. Verifier la branche: `main`
3. Verifier que rien n est pousse sur `cervantesbienesraices/main`
4. Lancer dans `frontend`:
   - `npm run build`
5. Tester au minimum:
   - `/`
   - `/quienes-somos`
   - `/servicios`
   - `/contact`
   - `/en`, `/fr`, `/it`, `/de`
   - switch de langue depuis home, about, services, contact
6. Verifier que les CTA `Propiedades` et `Contact` ne cassent pas

## Checklist speciale Vercel

- Le projet Vercel build `frontend` via `vercel.json`
- `frontend/.npmrc` contient `legacy-peer-deps=true` pour tolerer certains packages legacy du template
- Les warnings Sass/Bootstrap existent encore, mais ils ne doivent pas bloquer le build
- Si Vercel casse sur une page publique, verifier d abord:
  - la route exacte
  - le composant reel servi par cette route
  - le rendu en screenshot, pas seulement le HTML

## Commandes utiles

### Build frontend

```bash
cd /Users/oliviersteineur/crm-inmo-main/frontend
npm run build
```

### Dev frontend

```bash
cd /Users/oliviersteineur/crm-inmo-main/frontend
npm run dev
```

### Verifier la branche et l etat git

```bash
cd /Users/oliviersteineur/crm-inmo-main
git branch --show-current
git status --short
```

## Source de verite fonctionnelle

Quand il y a un doute:

- Design shell cible: nouveau site `crm-inmo`
- Contenu metier: `cervantesbienesraices.com`
- Regle de priorite: conserver le nouveau shell, reintegrer le contenu Cervantes a l interieur

## A ne pas faire

- Ne pas pousser sur `main` de `cervantesbienesraices`
- Ne pas relier les langues au vieux site
- Ne pas remettre des composants legacy complets si cela casse header/footer du nouveau design
- Ne pas changer les routes publiques sans verifier le mapping multilingue
- Ne pas corriger a l aveugle sans verifier la route compilee et le rendu reel
