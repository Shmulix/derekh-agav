# Guide complet (`/guide`) - état du contenu

> À mettre à jour à chaque ajout/modif d'une section du guide.
> Dernière mise à jour : 2026-06-27. Fichier : `app/guide/page.tsx`.

19 sections (dans l'ordre, avec leur `id` d'ancre) :

| # | id | Titre | Contenu |
|---|---|---|---|
| 1 | `intro` | Intro | Accroche, posture experte 10+ ans |
| 2 | `documents` | מסמכים נדרשים | Permis israélien, international, passeport, carte de crédit (composant `DocTiles`) |
| 3 | `deposit` | פיקדון | Mécanique du dépôt de garantie |
| 4 | `category` | קטגוריית הרכב | Codes ACRISS, tableau des catégories (`AcrissTable`) |
| 5 | `insurance` | ביטוח | CDW/TP/LDW, SCDW/Super TP, couverture complémentaire (`InsuranceTabs`) |
| 6 | `young-driver` | גיל הנהג | Jeune conducteur, conducteur senior |
| 7 | `pickup` | איסוף והחזרה | Y compris after-hours, frais one-way |
| 8 | `tolls` | כבישי אגרה | Péages : paiement direct, transpondeur/auto-pass, vignette, ZTL Italie, frais admin |
| 9 | `crossborder` | חציית גבול עם רכב שכור | Passage de frontière, tip : déclarer la destination à la réservation |
| 10 | `winter` | ציוד חורף | Équipement hiver par pays (tableau) |
| 11 | `extras` | כיסאות וציוד משלים | Sièges (Infant/Baby/Child/Booster), GPS, galerie de toit, etc. |
| 12 | `fuel` | דלק | Tous les types de politique carburant |
| 13 | `mileage` | קילומטרז׳ | Illimité vs limité |
| 14 | `fines` | קנסות ודוחות | Amendes et PV |
| 15 | `cancellation` | דמי ביטול ואי הגעה | Frais d'annulation et no-show |
| 16 | `emergency` | תאונה ותקלה מכנית | Panne (assistance) + accident (3 étapes : police, compagnie, documentation) |
| 17 | `summary` | השורה התחתונה | La ligne de fond |
| 18 | `faq` | שאלות נפוצות | Questions fréquentes |
| 19 | `lexicon` | מילון מונחים | Glossaire (`LexiconSection`) |

---

## Version PDF ebook

Le guide existe aussi en **PDF ebook** : `public/guide-ebook.pdf` (servi sur `/guide-ebook.pdf`).
Source : `ebook/guide-ebook.html` (HTML autonome, charte navy/gold, Heebo, RTL, 18 chapitres).
Proposé en téléchargement sur `/guide` (tuile dans la gouttière + 2 bannières inline via `components/guide/EbookCTA.tsx`).

⚠️ Le PDF n'est PAS auto-synchronisé : si le contenu du guide change de façon substantielle, mettre à jour `ebook/guide-ebook.html` puis régénérer :
```bash
node ~/.claude/skills/html-to-pdf/scripts/html-to-pdf.js "ebook/guide-ebook.html" "public/guide-ebook.pdf" --rtl --format=A4 --margin=12mm --wait=2500 --header='<span></span>' --footer='...page number...'
```

## Règle à maintenir : logique d'exclusion d'assurance (`InsuranceTabs`)

- **Catégorie orange** (icône `AlertCircle`) : « לא מכוסה בדרך הביטוח הבסיסי ». NON couvert par l'assurance de base, mais couvrable via une assurance complémentaire.
- **Catégorie rouge** (icône `XCircle`) : « לא מכוסה בשום מקרה, עם שום ביטוח או כיסוי ». JAMAIS couvert, quelle que soit l'assurance.

Ne pas confondre les deux : l'orange est rattrapable, le rouge jamais.
