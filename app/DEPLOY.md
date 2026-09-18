# Déploiement & SEO — Storm Surfing Association

Le site est une application **Angular 18 prérendue** (SSG). À la compilation,
un vrai fichier HTML complet est généré pour chaque page (accueil, événements,
rejoindre, archives, contact). Les robots (Google, Bing, aperçus Facebook /
Instagram / WhatsApp) reçoivent donc du contenu réel, plus une coquille vide.

## 1. Construire le site

```bash
cd app
npm ci          # installe les dépendances (dont @angular/ssr, ajouté pour le prerender)
npm run build   # => génère dist/app/browser (statique prérendu) et dist/app/server (SSR optionnel)
```

Le dossier à déployer est **`dist/app/browser/`**. Il contient :
- `index.html`, `event/index.html`, `join/index.html`, `archives/index.html`,
  `contact/index.html`, `home/index.html` (pages prérendues) ;
- les bundles JS/CSS hashés, les images, `robots.txt` et `sitemap.xml`.

## 2. Déployer sur le VPS (Nginx, statique)

Copiez le contenu de `dist/app/browser/` vers la racine web, par ex. :

```bash
rsync -avz --delete dist/app/browser/ user@VOTRE_VPS:/var/www/storm-surfing/browser/
```

Config Nginx prête à l'emploi : voir **`deploy/nginx-storm-surfing.conf`**.
Adaptez `root` et les chemins des certificats, puis :

```bash
sudo ln -s /etc/nginx/sites-available/storm-surfing /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Points clés de cette config :
- `try_files $uri $uri/ /index.html;` sert la page prérendue de chaque route,
  avec repli SPA pour les routes inconnues ;
- cache immuable 1 an pour les JS/CSS hashés, 30 jours pour les images,
  `no-cache` pour le HTML (les mises à jour sont visibles immédiatement) ;
- redirection `www` → sans-www et HTTP → HTTPS (canonicalisation).

## 3. (Option) Mode SSR dynamique

Le build produit aussi un serveur Node (`dist/app/server/server.mjs`) si vous
voulez un rendu à la volée plutôt que statique. Ce n'est **pas nécessaire** ici
(le contenu est statique). Le cas échéant :

```bash
node dist/app/server/server.mjs   # écoute sur le port 4000
```
…et faites un `proxy_pass http://127.0.0.1:4000;` dans Nginx (gérez le process
avec pm2 ou un service systemd). Pour un site associatif, restez sur le statique.

## 4. Checklist SEO après mise en ligne

1. **Google Search Console** : ajoutez la propriété `storm-surfing.fr`,
   soumettez `https://storm-surfing.fr/sitemap.xml`, puis « Demander une
   indexation » sur les pages principales.
2. **Bing Webmaster Tools** : même chose (import possible depuis Search Console).
3. Vérifiez le rendu avec l'outil d'inspection d'URL de Search Console
   (« Tester l'URL en direct » → le HTML doit contenir le texte de la page).
4. **Test des données structurées** : https://search.google.com/test/rich-results
   sur `/` (Organization) et `/event` (Event).
5. **Aperçu de partage** : testez un lien sur https://developers.facebook.com/tools/debug/
   (les balises Open Graph doivent apparaître).
6. **Fiche Google Business Profile** : créez/réclamez la fiche de l'association
   (lieu Cap Fréhel) — souvent aussi rentable que le SEO du site pour du local.
7. **Performances** : passez `/` dans https://pagespeed.web.dev/ et compressez
   les grosses photos (voir ci-dessous).

## 5. À faire ensuite (recommandé)

- **Compresser les images** : plusieurs photos dépassent 500 Ko (jusqu'à 2,6 Mo
  pour `public/event1.jpg`). Convertissez-les en WebP et redimensionnez-les
  (≤ 1600 px de large) pour améliorer le temps de chargement et le SEO.
  Ex. : `cwebp -q 80 event1.jpg -o event1.webp` puis mettez à jour les `src`.
- **Enrichir le contenu** : une page « L'association » racontant l'histoire
  d'Antoine Mouille et le projet donnerait beaucoup de matière au référencement.
