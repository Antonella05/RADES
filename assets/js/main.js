/* =========================================================
   RADES — en-tête, pied de page et interactions communes
   L'en-tête et le pied de page sont générés ici pour n'avoir
   qu'un seul endroit à modifier (menu, liens…).
   ========================================================= */
(function () {
  "use strict";
  var C = window.RADES_CONFIG || {};
  var page = document.body.getAttribute("data-page") || "";

  /* ---------- Icônes ---------- */
  var ICONS = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.4C.9 8 3.2 4 7 4c2.1 0 3.6 1.1 5 2.9C13.4 5.1 14.9 4 17 4c3.8 0 6.1 4 4.6 7.6C19.5 16.4 12 21 12 21z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8.5c0-.3.2-.5.5-.5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M4 9h4v12H4zM6 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm5 6h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.4 2.6 4.4 6V21h-4v-5.6c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21h-4z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM21 7.9c-.1-1.6-.4-3-1.6-4.2S16.8 2.1 15.1 2C13.4 2 10.6 2 8.9 2c-1.6.1-3 .4-4.2 1.6S3.1 6.3 3 7.9C3 9.6 3 14.4 3 16.1c.1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.7.1 6.5.1 8.2 0 1.6-.1 3-.4 4.2-1.6s1.5-2.6 1.6-4.2c.1-1.7.1-6.5 0-8.2zm-2.1 10a3.3 3.3 0 0 1-1.9 1.9c-1.3.5-4.4.4-5 .4s-3.7.1-5-.4a3.3 3.3 0 0 1-1.9-1.9c-.5-1.3-.4-4.4-.4-5s-.1-3.7.4-5A3.3 3.3 0 0 1 7 4c1.3-.5 4.4-.4 5-.4s3.7-.1 5 .4a3.3 3.3 0 0 1 1.9 1.9c.5 1.3.4 4.4.4 5s.1 3.7-.4 5z"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5z"/><path d="m8.5 12 2.5 2.5 4.5-5"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m-5-5 5 5 5-5M4 21h16"/></svg>',

    /* Pictogrammes des 5 pôles — dessinés à la main, trait de 2 px */
    sante: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 34h7l7 4h10c1.7 0 2.6-2 1.4-3.2L27 32"/><path d="M11 30h7l9 2 9-6c1.6-1 3.6.6 2.8 2.4L36 34l-10 8H11"/><rect x="25" y="5" width="16" height="16" rx="3"/><path d="M33 9v8m-4-4h8"/></svg>',
    edu: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 14c-5-4-12-4-18-3v26c6-1 13-1 18 3 5-4 12-4 18-3V11c-6-1-13-1-18 3z"/><path d="M24 14v26"/><path d="M11 18c3-.4 6 0 8 1.2M11 24c3-.4 6 0 8 1.2M29 18c3-1 6-1.2 8-.8"/><path d="m36 22 6-14 2 1-5 14-3 1z" fill="currentColor" fill-opacity=".15"/></svg>',
    appui: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="13" y="5" width="30" height="20" rx="2"/><path d="M19 12h12m-12 6h18"/><circle cx="9" cy="24" r="4"/><path d="M2 42c0-6 3-10 7-10s5 1.5 6 3l5-5"/><circle cx="26" cy="33" r="3.2"/><path d="M20 45c0-4.5 2.7-7 6-7s6 2.5 6 7"/><circle cx="39" cy="33" r="3.2"/><path d="M33 45c0-4.5 2.7-7 6-7s6 2.5 6 7"/></svg>',
    env: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 26C8 14 18 6 34 6c0 16-8 26-20 26-2 0-4-.5-6-1.5z"/><path d="M8 30 26 14"/><path d="M30 44 40 24m-6 2 9 4"/><path d="m28 42 4 2-2 0z"/><path d="M33 27c-2 4-4 9-8 13l9 4c2-5 5-8 9-12z" fill="currentColor" fill-opacity=".15"/></svg>',
    cit: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4v40m-7 0h14"/><path d="M22 9h17l4 4-4 4H22z"/><path d="M22 21H8l-4 4 4 4h14"/><path d="M27 13h8M11 25h6"/></svg>',
    kit_ecole: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16a12 12 0 0 1 24 0v26H12z"/><path d="M12 26h24v8H12zM20 16h8"/><path d="M8 26v12a4 4 0 0 0 4 4M40 26v12a4 4 0 0 1-4 4"/></svg>',
    kit_sante: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="14" width="38" height="28" rx="3"/><path d="M17 14V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5"/><path d="M24 21v14m-7-7h14"/></svg>',
    kit_quartier: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 16h22l-3 28H13z"/><path d="M8 16h26M17 16v-4h8v4M16 23l1.5 14M26 23l-1.5 14"/><path d="M38 4v26m-4 0h8l2 10h-12z"/></svg>',
    kit_libre: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="19"/><path d="M24 34s-9-5.5-9-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-9 11-9 11z"/></svg>'
  };
  window.RADES_ICONS = ICONS;

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function tel(s) { return "tel:" + String(s).replace(/[^\d+]/g, ""); }
  function wa(msg) { return "https://wa.me/" + C.whatsapp + (msg ? "?text=" + encodeURIComponent(msg) : ""); }
  window.RADES_wa = wa;

  var socials =
    '<a href="' + esc(C.reseaux.facebook) + '" target="_blank" rel="noopener" aria-label="Facebook">' + ICONS.facebook + '</a>' +
    '<a href="' + esc(C.reseaux.linkedin) + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + ICONS.linkedin + '</a>' +
    '<a href="' + esc(C.reseaux.instagram) + '" target="_blank" rel="noopener" aria-label="Instagram">' + ICONS.instagram + '</a>';

  var POLES = [
    { id: "sante", l: "A", t: "Santé & Solidarité", d: "Indigents, équipements hospitaliers", href: "pole-sante.html", c: "var(--pole-sante)" },
    { id: "education", l: "B", t: "Éducation Pour Tous", d: "Scolarisation, parrainage, kits", href: "pole-education.html", c: "var(--pole-edu)" },
    { id: "appui", l: "C", t: "Appui Institutionnel & Formations", d: "Soignants, enseignants, animateurs", href: "pole-appui-formations.html", c: "var(--pole-appui)" },
    { id: "environnement", l: "D", t: "Environnement & Cadre de Vie", d: "Assainissement, déchets, sensibilisation", href: "pole-environnement.html", c: "var(--pole-env)" },
    { id: "citoyennete", l: "E", t: "Citoyenneté Urbaine", d: "Adressage de nos villes", href: "pole-citoyennete.html", c: "var(--pole-cit)" }
  ];
  window.RADES_POLES = POLES;
  var isPole = POLES.some(function (p) { return p.id === page; });

  function navItem(id, href, label) {
    return '<li><a href="' + href + '"' + (page === id ? ' aria-current="page"' : "") + ">" + label + "</a></li>";
  }

  /* ---------- En-tête ---------- */
  var header = document.querySelector("[data-include='header']");
  if (header) {
    header.outerHTML =
      '<a class="skip-link" href="#contenu">Aller au contenu</a>' +
      '<div class="topbar"><div class="wrap">' +
        '<div class="topbar__contact">' +
          '<a href="' + wa() + '" target="_blank" rel="noopener">' + ICONS.whatsapp + '<span class="tbr">' + esc(C.telephone) + "</span></a>" +
          '<a class="hide-sm" href="mailto:' + esc(C.email) + '">' + ICONS.mail + '<span class="tbr">' + esc(C.email) + "</span></a>" +
        "</div>" +
        '<div class="socials">' + socials + "</div>" +
      "</div></div>" +
      '<header class="site-header"><div class="wrap">' +
        '<a class="logo" href="index.html" aria-label="RADES — accueil"><img src="assets/img/logo-rades.svg" alt="RADES" width="150" height="46"></a>' +
        '<nav class="nav" id="nav" aria-label="Menu principal"><ul>' +
          navItem("accueil", "index.html", "Accueil") +
          navItem("qui", "qui-sommes-nous.html", "Qui sommes-nous") +
          '<li class="has-sub' + (isPole ? " is-active" : "") + '"><button class="nav__toggle" aria-expanded="false" aria-controls="sub-actions">Nos actions</button>' +
            '<ul class="sub" id="sub-actions">' +
              POLES.map(function (p) {
                return '<li><a href="' + p.href + '"' + (page === p.id ? ' aria-current="page"' : "") + '><span class="dot" style="background:' + p.c + '"></span><span>' + p.l + ". " + p.t + "<small>" + p.d + "</small></span></a></li>";
              }).join("") +
            "</ul></li>" +
          navItem("actualites", "actualites.html", "Actualités") +
          navItem("rapports", "formations-rapports.html", "Formations & rapports") +
          navItem("engager", "s-engager.html", "S'engager") +
          navItem("contact", "contact.html", "Contact") +
        "</ul></nav>" +
        '<a class="btn btn--don btn--sm header-don" href="don.html">' + ICONS.heart + "Faire un don</a>" +
        '<button class="burger" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="nav"><span></span></button>' +
      "</div></header>" +
      '<a class="don-fab" href="don.html">' + ICONS.heart + "Faire un don</a>";
  }

  /* ---------- Pied de page ---------- */
  var footer = document.querySelector("[data-include='footer']");
  if (footer) {
    footer.outerHTML =
      '<footer class="site-footer"><div class="weave weave--thin"></div><div class="wrap">' +
        '<div class="footer__grid">' +
          '<div class="footer__about"><img src="assets/img/logo-rades-clair.svg" alt="RADES" width="160" height="50">' +
            "<p>RADES agit au Bénin pour la santé, l'éducation, l'environnement et la citoyenneté, en plaçant l'humain au cœur du développement.</p>" +
            '<div class="socials">' + socials + "</div></div>" +
          '<div><span class="footer__title">Menu rapide</span><ul>' +
            '<li><a href="qui-sommes-nous.html">Qui sommes-nous</a></li>' +
            '<li><a href="pole-sante.html">Nos actions</a></li>' +
            '<li><a href="actualites.html">Actualités</a></li>' +
            '<li><a href="formations-rapports.html">Formations & rapports</a></li>' +
            '<li><a href="s-engager.html">S\'engager</a></li>' +
            '<li><a href="don.html">Faire un don</a></li>' +
          "</ul></div>" +
          '<div class="footer__contact"><span class="footer__title">Contact</span><ul>' +
            "<li>" + ICONS.pin + '<span><span class="tbr">' + esc(C.adresse.ligne1) + "</span><br>" + esc(C.adresse.ville) + "</span></li>" +
            "<li>" + ICONS.phone + '<a class="tbr" href="' + tel(C.telephone) + '">' + esc(C.telephone) + "</a></li>" +
            "<li>" + ICONS.whatsapp + '<a href="' + wa() + '" target="_blank" rel="noopener">Écrire sur WhatsApp</a></li>' +
            "<li>" + ICONS.mail + '<a class="tbr" href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a></li>" +
          "</ul></div>" +
          '<div><span class="footer__title">Newsletter</span><p>Restez informé de nos actions.</p>' +
            '<form class="inline-form" data-form="newsletter"><label class="visually-hidden" for="nl-foot">Adresse e-mail</label>' +
            '<input id="nl-foot" type="email" name="email" placeholder="Votre e-mail" required><button type="submit">OK</button></form>' +
            '<p class="form-msg" aria-live="polite"></p></div>' +
        "</div>" +
        '<div class="footer__bottom"><span>© ' + new Date().getFullYear() + " RADES — Tous droits réservés</span>" +
          '<nav aria-label="Liens légaux"><a href="mentions-legales.html">Mentions légales</a><a href="confidentialite.html">Politique de confidentialité</a></nav></div>' +
      "</div></footer>" +
      '<div class="draft-note" role="note">Mode brouillon : les éléments surlignés sont à remplacer. <button type="button" data-draft-off>Masquer</button></div>';
  }

  /* ---------- Injection des icônes et coordonnées ---------- */
  document.querySelectorAll("[data-icon]").forEach(function (el) { el.innerHTML = ICONS[el.getAttribute("data-icon")] || ""; });
  var binds = {
    telephone: C.telephone, email: C.email, adresse: C.adresse.ligne1, ville: C.adresse.ville,
    "mtn": C.paiement.mtn.numero, "moov": C.paiement.moov.numero, "wave": C.paiement.wave.numero,
    "banque": C.paiement.banque.banque, "iban": C.paiement.banque.iban, "swift": C.paiement.banque.swift, "titulaire": C.paiement.banque.titulaire
  };
  document.querySelectorAll("[data-cfg]").forEach(function (el) {
    var k = el.getAttribute("data-cfg"); if (binds[k] != null) el.textContent = binds[k];
  });
  document.querySelectorAll("[data-href]").forEach(function (el) {
    var k = el.getAttribute("data-href");
    var map = { telephone: tel(C.telephone), email: "mailto:" + C.email, whatsapp: wa(el.getAttribute("data-wa-msg") || ""), paypal: C.paiement.paypal, wave: C.paiement.wave.lien || wa("Bonjour RADES, je souhaite faire un don via Wave."), facebook: C.reseaux.facebook, linkedin: C.reseaux.linkedin, instagram: C.reseaux.instagram };
    if (map[k]) el.setAttribute("href", map[k]);
  });
  var mapFrame = document.querySelector("iframe[data-map]");
  if (mapFrame) mapFrame.src = C.adresse.carte;

  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-draft-off]")) document.documentElement.removeAttribute("data-draft");
  });

  /* ---------- Lien d'évitement : place le focus sur le contenu ---------- */
  var skip = document.querySelector(".skip-link"), main = document.getElementById("contenu");
  if (skip && main) skip.addEventListener("click", function (e) {
    e.preventDefault();
    main.setAttribute("tabindex", "-1");
    main.focus();
    main.scrollIntoView();
  });

  /* ---------- Menu mobile + sous-menu ---------- */
  var burger = document.querySelector(".burger");
  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    if (open) document.getElementById("nav").style.top = document.querySelector(".site-header").getBoundingClientRect().bottom + "px";
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  }
  if (burger) burger.addEventListener("click", function () {
    setMenu(!document.body.classList.contains("menu-open"));
  });
  document.querySelectorAll(".nav__toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var li = btn.parentElement, open = li.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
  });
  document.addEventListener("click", function (e) {
    document.querySelectorAll(".has-sub.open").forEach(function (li) {
      if (!li.contains(e.target) && window.innerWidth > 1180) { li.classList.remove("open"); li.querySelector("button").setAttribute("aria-expanded", "false"); }
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    var lb = document.querySelector(".lightbox");
    if (lb && !lb.hidden) { lb.closeBox(); return; }
    document.querySelectorAll(".has-sub.open").forEach(function (li) {
      li.classList.remove("open");
      var b = li.querySelector("button"); b.setAttribute("aria-expanded", "false");
      if (li.contains(document.activeElement)) b.focus();
    });
    if (burger && document.body.classList.contains("menu-open")) { setMenu(false); burger.focus(); }
  });

  /* ---------- Sous-navigation des pôles ---------- */
  var poleNav = document.querySelector("[data-include='pole-nav']");
  if (poleNav) {
    poleNav.outerHTML = '<nav class="pole-nav" aria-label="Les pôles"><div class="wrap"><ul>' +
      POLES.map(function (p) {
        return '<li><a href="' + p.href + '" style="--c:' + p.c + '"' + (page === p.id ? ' aria-current="page"' : "") + "><b>" + p.l + ".</b> " + p.t + "</a></li>";
      }).join("") + "</ul></div></nav>";
  }

  /* ---------- Compteurs animés ---------- */
  var counters = document.querySelectorAll("[data-count]");
  function runCounter(el) {
    var target = parseFloat(el.getAttribute("data-count")), start = null, dur = 1400;
    var fmt = new Intl.NumberFormat("fr-FR");
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1), v = Math.round(target * (1 - Math.pow(1 - p, 3)));
      el.textContent = fmt.format(v);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- Apparition au défilement ---------- */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        if (en.target.hasAttribute("data-count")) runCounter(en.target);
        io.unobserve(en.target);
      });
    }, { threshold: .15 });
    document.querySelectorAll(".reveal, [data-count]").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Avant / après ---------- */
  document.querySelectorAll(".ba input[type=range]").forEach(function (r) {
    var box = r.closest(".ba");
    function upd() { box.style.setProperty("--pos", r.value + "%"); }
    r.addEventListener("input", upd); upd();
  });

  /* ---------- Galerie : visionneuse ---------- */
  var gal = document.querySelectorAll(".gallery a[href]");
  if (gal.length) {
    var lb = document.createElement("div"), opener = null;
    lb.className = "lightbox"; lb.hidden = true;
    lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true"); lb.setAttribute("aria-label", "Photo agrandie");
    lb.innerHTML = '<img alt=""><button type="button" aria-label="Fermer">✕</button>';
    document.body.appendChild(lb);
    var lbClose = lb.querySelector("button");
    // Fermeture : le focus revient sur la vignette qui a ouvert la visionneuse
    lb.closeBox = function () { lb.hidden = true; if (opener) opener.focus(); };
    lb.addEventListener("click", function (e) { if (e.target !== lb.querySelector("img")) lb.closeBox(); });
    // Le seul élément actif est le bouton Fermer : Tab reste dessus
    lb.addEventListener("keydown", function (e) { if (e.key === "Tab") { e.preventDefault(); lbClose.focus(); } });
    gal.forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var img = a.querySelector("img");
        opener = a;
        lb.querySelector("img").src = a.href;
        lb.querySelector("img").alt = img ? img.alt : "";
        lb.hidden = false;
        lbClose.focus();
      });
    });
  }

  /* ---------- Filtres (actualités, formations) ---------- */
  document.querySelectorAll("[data-filter-group]").forEach(function (bar) {
    var target = document.querySelector(bar.getAttribute("data-filter-group"));
    bar.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip"); if (!chip) return;
      bar.querySelectorAll(".chip").forEach(function (c) { c.setAttribute("aria-pressed", c === chip); });
      var f = chip.getAttribute("data-filter");
      target.querySelectorAll("[data-cat]").forEach(function (it) {
        it.hidden = !(f === "all" || it.getAttribute("data-cat").split(" ").indexOf(f) > -1);
      });
    });
  });

  /* ---------- Onglets génériques ---------- */
  document.querySelectorAll("[role=tablist]").forEach(function (list) {
    var tabs = list.querySelectorAll("[role=tab]");
    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute("aria-selected", on); t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      });
      if (focus) tab.focus();
      list.dispatchEvent(new CustomEvent("tabchange", { detail: tab }));
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { select(t); });
      t.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); select(tabs[(i + 1) % tabs.length], true); }
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); select(tabs[(i - 1 + tabs.length) % tabs.length], true); }
      });
    });
    var hash = location.hash.slice(1);
    var initial = hash && list.querySelector('[role=tab][data-hash="' + hash + '"]');
    if (initial) select(initial);
  });

  /* ---------- Formulaires ---------- */
  // Si une adresse Formspree est configurée, envoi direct ; sinon, ouverture
  // de WhatsApp avec le message pré-rempli.
  function formToText(form) {
    var title = form.getAttribute("data-title") || "Message depuis le site";
    var lines = [title, ""];
    var fd = new FormData(form), seen = {};
    fd.forEach(function (v, k) {
      if (k.charAt(0) === "_" || !String(v).trim()) return;
      var el = form.querySelector('[name="' + k + '"]');
      var lab = el && el.closest(".field") ? el.closest(".field").querySelector("label").textContent.replace(/\(.*\)/, "").trim() : k;
      if (seen[k]) { lines[seen[k]] += ", " + v; return; }
      seen[k] = lines.length; lines.push(lab + " : " + v);
    });
    return lines.join("\n");
  }
  document.querySelectorAll("form[data-form]").forEach(function (form) {
    // Piège anti-spam (Formspree ignore les envois où « _gotcha » est rempli)
    var trap = document.createElement("input");
    trap.type = "text"; trap.name = "_gotcha"; trap.tabIndex = -1; trap.autocomplete = "off";
    trap.className = "visually-hidden"; trap.setAttribute("aria-hidden", "true");
    form.appendChild(trap);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (trap.value) return;
      var status = form.querySelector(".form-status") || (form.nextElementSibling && form.nextElementSibling.classList.contains("form-msg") ? form.nextElementSibling : null);
      function say(msg, ok) { if (status) { status.textContent = msg; status.className = (status.classList.contains("form-msg") ? "form-msg " : "form-status ") + (ok ? "ok" : "err"); } }
      if (C.formspree) {
        var fd = new FormData(form); fd.append("_subject", form.getAttribute("data-title") || "Site RADES");
        fetch(C.formspree, { method: "POST", body: fd, headers: { Accept: "application/json" } })
          .then(function (r) { if (!r.ok) throw 0; form.reset(); say("Merci ! Votre message a bien été envoyé.", true); })
          .catch(function () { say("L'envoi a échoué. Écrivez-nous sur WhatsApp ou par e-mail.", false); });
      } else if (form.getAttribute("data-form") === "newsletter") {
        window.location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent("Inscription newsletter") + "&body=" + encodeURIComponent("Merci de m'inscrire à la newsletter : " + form.email.value);
        say("Merci ! Votre messagerie va s'ouvrir pour confirmer l'inscription.", true);
      } else {
        window.open(wa(formToText(form)), "_blank", "noopener");
        say("WhatsApp s'ouvre avec votre message pré-rempli : il ne reste qu'à l'envoyer.", true);
      }
    });
  });
})();
