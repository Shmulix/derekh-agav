// Modele de la documentation admin : sections composees de blocs types.
// REGLE ANTI-FUITE ABSOLUE : les fichiers de lib/admin-docs/** ne doivent etre
// importes QUE par des Server Components derriere requireSession(). Jamais par
// un fichier "use client", sinon le contenu part dans les chunks JS statiques
// publics (/_next/static) que le middleware ne protege pas.

export type FileNode = {
  name: string;
  note?: string; // annotation en hebreu, affichee a droite
  children?: FileNode[];
};

export type DocBlock =
  | { type: "heading"; id: string; text: string } // h2 ancrable, alimente TOC + recherche
  | { type: "paragraph"; text: string } // **gras** et `code` inline supportes
  | { type: "callout"; variant: "info" | "tip" | "danger"; title?: string; text: string }
  | {
      type: "code";
      language: "bash" | "ts" | "tsx" | "json" | "text";
      filename?: string;
      code: string;
      caption?: string;
    }
  | { type: "table"; headers: string[]; rows: string[][]; caption?: string }
  | {
      type: "routeTable";
      routes: { path: string; file: string; status: string; note: string }[];
    }
  | { type: "colorPalette"; colors: { name: string; hex: string; usage: string }[] }
  | { type: "checklist"; id: string; items: { text: string; detail?: string }[] }
  | { type: "accordion"; items: { title: string; blocks: DocBlock[] }[] }
  | { type: "fileTree"; root: string; nodes: FileNode[] }
  | { type: "keyValue"; pairs: { key: string; value: string }[] };

export type DocSection = {
  slug: string;
  title: string; // hebreu
  subtitle: string; // resume d'une ligne (sidebar + dashboard)
  icon: string; // nom d'icone lucide, mappe cote serveur
  blocks: DocBlock[];
};

// Entree de l'index de recherche (construit cote serveur, passe en props au
// composant client de recherche : il voyage dans le payload RSC authentifie).
export type SearchEntry = {
  sectionSlug: string;
  sectionTitle: string;
  headingId: string; // "" = titre de section
  headingText: string;
  digest: string; // extrait de texte court (~150 caracteres)
};
