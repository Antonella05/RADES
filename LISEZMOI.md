# Site RADES — guide de l'informaticien

Site statique HTML / CSS / JavaScript. Aucun serveur, base de données ni compilation : il suffit de copier le dossier chez n'importe quel hébergeur (OVH, o2switch, Netlify, cPanel…).

## Arborescence

| Fichier | Page du cahier des charges |
|---|---|
| `index.html` | I. Accueil |
| `qui-sommes-nous.html` | II. Qui sommes-nous (histoire, vision, mot du Président, équipe, documents légaux, transparence) |
| `pole-sante.html` | III-A. Pôle Santé & Solidarité |
| `pole-education.html` | III-B. Pôle Éducation Pour Tous |
| `pole-appui-formations.html` | III-C. Pôle Appui Institutionnel & Formations (tableau des formations filtrable) |
| `pole-environnement.html` | III-D. Pôle Environnement (galerie avant/après à curseur) |
| `pole-citoyennete.html` | III-E. Pôle Citoyenneté Urbaine (adressage) |
| `actualites.html` + `article.html` | IV. Actualités / blog (`article.html` = modèle à dupliquer) |
| `formations-rapports.html` | V. Formations & rapports |
| `don.html` | VI. Faire un don (kits, moyens de paiement, confirmation WhatsApp) |
| `s-engager.html` | VII. S'engager (onglets : `#benevole`, `#partenaire`, `#parrain`) |
| `contact.html` | VIII. Contact |
| `mentions-legales.html`, `confidentialite.html` | Pied de page |

```
assets/css/style.css   styles (couleurs en haut du fichier, variables :root)
assets/js/config.js    ← COORDONNÉES, RÉSEAUX, NUMÉROS DE PAIEMENT, FORMULAIRES
assets/js/main.js      en-tête, menu, pied de page, interactions communes
assets/js/don.js       logique de la page de dons
assets/img/            logo (provisoire) et photos
docs/                  PDF : statuts, récépissé, agrément, rapports annuels
```

L'en-tête et le pied de page sont générés par `main.js` : pour modifier le menu, c'est **un seul endroit**.

## Avant la mise en ligne

1. **`assets/js/config.js`** : remplacer tout ce qui est marqué `À REMPLACER` (téléphone, WhatsApp, e-mail, adresse, carte Google Maps, réseaux sociaux, numéros MoMo / Moov / Wave, IBAN, lien PayPal).
2. **Textes provisoires** : ils portent la classe `tbr` (« to be replaced »). Pour les repérer visuellement, ajouter temporairement `data-draft` à la balise `<html>` d'une page (`<html lang="fr" data-draft>`) : ils apparaissent alors surlignés en jaune. Une fois les vrais contenus saisis, retirer la classe `tbr`.
3. **Photos provisoires** : toutes les photos actuelles sont des images libres de droits Unsplash (licence gratuite), chargées depuis leurs serveurs et marquées `data-provisoire`. **Elles ne montrent pas RADES** : il faut les remplacer par de vraies photos de l'association avant la mise en ligne (en particulier l'équipe, le Président et le témoignage). Liste : rechercher `data-provisoire` dans les fichiers HTML. Les photos des bandeaux de pôle sont dans l'attribut `style="--img:url(...)"` de chaque page `pole-*.html`, celle de la page de dons dans `style.css` (`.don-hero`).
4. **Logo** : remplacer `assets/img/logo-rades.svg` (fond clair), `logo-rades-clair.svg` (fond sombre, pied de page) et `favicon.svg`. Un PNG fonctionne aussi : adapter alors le nom dans `main.js`.
5. **Remplacer une photo** : chaque emplacement est une `<figure class="ph">` contenant une `<img>`. Changer son `src` et son `alt`, et retirer `data-provisoire` :
   ```html
   <figure class="ph" data-tone="terre"><img src="assets/img/sante/lits.jpg" alt="Remise de lits au centre de santé de …"></figure>
   ```
   Dans les galeries, entourer d'un lien vers l'image pour l'agrandir au clic :
   `<a href="assets/img/sante/lits.jpg"><figure class="ph"><img src="…" alt="…"></figure></a>`
   Conseil : photos en JPG, 1600 px de large maximum, compressées (squoosh.app).
6. **PDF** : déposer dans `docs/` les fichiers `recepisse.pdf`, `statuts.pdf`, `reglement-interieur.pdf`, `agrement.pdf`, `rapport-2025.pdf`… (ou adapter les liens).
7. **Formulaires** : créer un compte gratuit sur https://formspree.io, créer un formulaire et coller son URL dans `formspree` (config.js). Sans cela, les formulaires ouvrent WhatsApp avec le message pré-rempli (fonctionne, mais moins confortable).
8. **Nom de domaine** : le site suppose l'adresse `https://www.rades-ong.org/`. Si le domaine est différent, le remplacer partout (rechercher `rades-ong.org` dans les `.html`, `robots.txt` et `sitemap.xml`). Ces adresses servent au référencement Google et à l'aperçu des liens partagés sur WhatsApp / Facebook.
9. **Image de partage** : `assets/img/og-image.png` (1200 × 630 px) s'affiche quand un lien du site est partagé. La refaire avec le logo officiel et, idéalement, une vraie photo. Idem pour `apple-touch-icon.png` (180 × 180) et `favicon-32.png`.
10. **Page 404** : `404.html` est reconnue automatiquement par Netlify, o2switch, OVH… Sur un hébergement Apache, ajouter au besoin `ErrorDocument 404 /404.html` dans `.htaccess`.

## Ajouter du contenu

- **Un article** : dupliquer `article.html` (ex. `article-2026-10-kits.html`), modifier le contenu (y compris `<title>`, `description`, les balises `og:` et `canonical` en haut du fichier), l'ajouter à `sitemap.xml`, puis copier une carte `<a class="card">` dans `actualites.html` (et éventuellement dans les « 3 dernières actions » de `index.html`). L'attribut `data-cat` sert au filtre : `sante`, `education`, `formation`, `environnement`, `citoyennete`.
- **Une formation** : copier une ligne `<tr>` du tableau dans `pole-appui-formations.html`. `data-cat` : `sante`, `edu` ou `env`.
- **Un rapport annuel** : copier un bloc `<a class="report">` dans `formations-rapports.html`.
- **Un partenaire** : remplacer un `<div class="partner">` de `index.html` par `<div class="partner"><img src="assets/img/partenaires/xxx.png" alt="Nom"></div>`.
- **Chiffres clés** (accueil) : modifier `data-count="1250"` ET le texte affiché.

## Tester en local

Double-cliquer sur `index.html` suffit. Pour la carte et les formulaires, mieux vaut un petit serveur :
`python -m http.server 5173` puis ouvrir http://localhost:5173

## Identité visuelle

Couleurs (dans `style.css`, `:root`) :

| Rôle | Couleur | Usage |
|---|---|---|
| Dominante | indigo `#1f2e6b` (foncé `#121b45`) | en-tête, pied de page, liens, surtitres, focus clavier |
| Action | terre de barre `#b4462a` | **uniquement** « Faire un don » et appels à l'action principaux |
| Accent | ocre `#d99a2b` | décoratif ou sur fond sombre ; sur fond clair, utiliser `--ocre-text` `#8c5a0c` |
| Neutres | fond `#faf8f4`, fond alterné `#f2eee6`, cartes `#ffffff`, texte `#14182e` / `#4b5068` | |

Une couleur par pôle, via les classes `c-sante`, `c-edu`, `c-appui`, `c-env`, `c-cit` (variables `--pole-*`). Toutes respectent le contraste AA (≥ 4,5:1). Pour colorer une étiquette ou un encadré : `<span class="tag c-env">` (pas de `style="--c:…"`).
La frise tissée n'apparaît qu'en haut du pied de page.

Polices Google : *Source Serif 4* (titres) et *Public Sans* (texte).
