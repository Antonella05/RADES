/* =========================================================
   RADES — COORDONNÉES ET RÉGLAGES DU SITE
   ---------------------------------------------------------
   C'est le SEUL fichier à modifier pour mettre à jour le
   téléphone, l'e-mail, les réseaux sociaux, l'adresse et les
   numéros de paiement : ils s'affichent automatiquement sur
   toutes les pages (en-tête, pied de page, contact, dons).
   ========================================================= */
window.RADES_CONFIG = {
  nom: "RADES",
  nomComplet: "[Nom complet de l'association]",          // À REMPLACER

  // Téléphone affiché + numéro WhatsApp (format international sans + ni espaces)
  telephone: "+229 01 00 00 00 00",                       // À REMPLACER
  whatsapp: "2290100000000",                              // À REMPLACER
  email: "contact@rades-ong.org",                         // À REMPLACER

  adresse: {
    ligne1: "[Quartier, rue, n° de maison]",              // À REMPLACER
    ville: "Cotonou, Bénin",
    // Lien de la carte Google Maps (Partager > Intégrer une carte > copier l'URL du src)
    carte: "https://www.google.com/maps?q=Cotonou%2C%20B%C3%A9nin&output=embed"
  },

  reseaux: {
    facebook: "https://www.facebook.com/",                // À REMPLACER
    linkedin: "https://www.linkedin.com/",                // À REMPLACER
    instagram: "https://www.instagram.com/"               // À REMPLACER
  },

  // Moyens de paiement (page « Faire un don »)
  paiement: {
    mtn:   { numero: "+229 01 00 00 00 01", titulaire: "RADES" },   // À REMPLACER
    moov:  { numero: "+229 01 00 00 00 02", titulaire: "RADES" },   // À REMPLACER
    wave:  { numero: "+229 01 00 00 00 03", lien: "" },             // À REMPLACER (lien Wave facultatif)
    banque: {
      banque: "[Nom de la banque]",                                  // À REMPLACER
      titulaire: "RADES",
      iban: "BJ00 0000 0000 0000 0000 0000 0000",                    // À REMPLACER
      swift: "XXXXBJBJ"                                              // À REMPLACER
    },
    paypal: "https://www.paypal.com/donate/?hosted_button_id=XXXX"   // À REMPLACER
  },

  // Formulaires : créer un formulaire gratuit sur https://formspree.io
  // et coller ici l'URL fournie (ex. "https://formspree.io/f/abcdwxyz").
  // Tant que c'est vide, les formulaires proposent l'envoi via WhatsApp / e-mail.
  formspree: ""
};
