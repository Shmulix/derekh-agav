# Post : idp-stations

> Fichier : `app/posts/idp-stations/page.tsx`. Métadonnées : `lib/posts.ts`.
> Dernière mise à jour : 2026-11-17 (liste officielle gov.il relevée le 2026-11-17 : 74 stations dans 64 villes, dont 48 Optika Halperin et 13 Optical Center ; prix 11.30 ₪ / Eilat 9.50 ₪ ; durée « כמה דקות » ; fermetures ponctuelles datées non reprises).

- **Titre** : איפה מנפיקים רישיון נהיגה בינלאומי בישראל?
- **Slug** : `/posts/idp-stations`
- **Tag** : מסמכים (gold) · **Temps de lecture** : כלי חיפוש (outil de recherche) · **Publié** : 2026-04-27
- **Image hero** : `/public/idp-counter.avif`
- **Statut** : ✅ Publié
- **Composant** : `IDPLocations` (recherche des stations par ville : adresse, téléphone, horaires)

**Sujet** : 74 stations autorisées dans 64 villes, avec recherche par ville. Adresse, téléphone et horaires pour chaque station. Basé sur la liste officielle du ministère des Transports (https://www.gov.il/he/Departments/DynamicCollectors/photo_driving_license_stock), relevée le 2026-11-17. Date affichée dans l'outil : constante `IDP_DATA_DATE` de `lib/data/idp-locations.ts`.

**À noter** : c'est un post-outil (interactif), pas un article narratif. La donnée des stations doit être tenue à jour si le ministère change la liste.
