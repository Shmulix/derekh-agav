# État du contenu - דרך אגב

> Fichier d'état VIVANT. Sommaire du contenu (guide + posts).
> À mettre à jour à chaque création ou modification substantielle d'un post ou d'une section du guide.
> Dernière mise à jour : 2026-06-27.

Détail par élément dans les fichiers de ce dossier (`guide.md`, `post-*.md`).

---

## Guide (`/guide`)

19 sections, toutes construites. Détail : [guide.md](guide.md).

---

## Posts publiés (page existe)

| Slug | Titre | Tag | Publié | Détail |
|---|---|---|---|---|
| `ztl-italy` | ZTL באיטליה | יעדים | 2026-05-21 | [post-ztl-italy.md](post-ztl-italy.md) |
| `driving-license-abroad` | רישיון נהיגה ישראלי בחו״ל | מסמכים | 2026-04-09 | [post-driving-license-abroad.md](post-driving-license-abroad.md) |
| `international-driving-permit` | רישיון נהיגה בינלאומי (IDP) | מסמכים | 2026-04-09 | [post-international-driving-permit.md](post-international-driving-permit.md) |
| `idp-stations` | איפה מנפיקים IDP בישראל | מסמכים | 2026-04-27 | [post-idp-stations.md](post-idp-stations.md) |

## Posts en brouillon (dans `lib/posts.ts`, `published:false`, AUCUNE page, affichés « בקרוב »)

| Slug | Titre | Tag | Note |
|---|---|---|---|
| `cdw-vs-scdw` | CDW או SCDW | ביטוח | Placeholder, page à créer |
| `usa-car-rental` | השכרת רכב בארה״ב | יעדים | Placeholder, page à créer |
| `7-mistakes` | 7 טעויות שכולם עושים | חיסכון | Placeholder, page à créer |

## Page de conversion

| Slug | Statut | Rôle |
|---|---|---|
| `rental-platforms` | ✅ En ligne (placeholder simulé) | Comparatif plateformes. Cible de tous les CTAs. Pas dans `posts.ts` (n'apparaît pas dans l'archive). Liens d'affiliation à brancher. |

---

## Source unique des posts

Tous les posts (publiés + brouillons) sont centralisés dans `lib/posts.ts` (métadonnées). Home et archive lisent depuis là. Pour qu'un post apparaisse en ligne : (1) entrée dans `posts.ts` avec `published:true`, (2) page `.tsx` correspondante dans `app/posts/<slug>/`.
