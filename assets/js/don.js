/* RADES — page « Faire un don » : choix du kit, moyen de paiement, confirmation WhatsApp */
(function () {
  "use strict";
  var C = window.RADES_CONFIG;
  var fmt = new Intl.NumberFormat("fr-FR");
  var kits = document.querySelectorAll(".kit");
  var free = document.getElementById("free-amount");
  var freeKit = document.getElementById("montant-libre");
  var state = { kit: null, amount: 0, method: "MTN MoMo" };

  function money(n) { return n ? fmt.format(n) + " F CFA" : "—"; }

  function render() {
    document.getElementById("s-kit").textContent = state.kit || "—";
    document.getElementById("s-amount").textContent = money(state.amount);
    document.getElementById("s-method").textContent = state.method;
    document.querySelectorAll("[data-amount-label]").forEach(function (el) { el.textContent = money(state.amount); });

    var f = document.getElementById("don-form");
    var lines = [
      "Bonjour RADES, je viens de faire un don.",
      "Choix : " + (state.kit || "à préciser"),
      "Montant : " + money(state.amount),
      "Moyen de paiement : " + state.method
    ];
    if (f.nom.value.trim()) lines.push("Nom : " + f.nom.value.trim());
    if (f.reference.value.trim()) lines.push("Référence : " + f.reference.value.trim());
    lines.push("Merci de m'envoyer le reçu et la photo de l'action financée.");
    document.getElementById("don-confirm").href = window.RADES_wa(lines.join("\n"));
  }

  function select(kit) {
    kits.forEach(function (k) {
      k.classList.toggle("is-selected", k === kit);
      // « Montant libre » est un groupe (il contient un champ), pas un bouton
      if (k !== freeKit) k.setAttribute("aria-pressed", k === kit);
    });
    state.kit = kit.getAttribute("data-kit");
    state.amount = kit === freeKit ? (parseInt(free.value, 10) || 0) : parseInt(kit.getAttribute("data-amount"), 10);
    render();
  }

  kits.forEach(function (k) {
    k.addEventListener("click", function () {
      select(k);
      if (k === freeKit && document.activeElement !== free) free.focus();
    });
  });
  free.addEventListener("focus", function () { select(freeKit); });
  free.addEventListener("input", function () { select(freeKit); });
  document.getElementById("don-form").addEventListener("input", render);

  document.querySelector(".pay-tabs").addEventListener("tabchange", function (e) {
    state.method = e.detail.getAttribute("data-method"); render();
  });

  // Boutons « Copier »
  var values = { mtn: C.paiement.mtn.numero, moov: C.paiement.moov.numero, wave: C.paiement.wave.numero, iban: C.paiement.banque.iban, swift: C.paiement.banque.swift };
  document.querySelectorAll("[data-copy]").forEach(function (b) {
    b.addEventListener("click", function () {
      var v = values[b.getAttribute("data-copy")];
      var done = function () { b.textContent = "Copié ✓"; b.classList.add("done"); setTimeout(function () { b.textContent = "Copier"; b.classList.remove("done"); }, 1800); };
      if (navigator.clipboard) navigator.clipboard.writeText(v).then(done, function () { window.prompt("Copiez :", v); });
      else window.prompt("Copiez :", v);
    });
  });

  // Présélection via l'ancre (#kit-sante…) — par défaut le Kit Écolier
  var pre = location.hash && document.querySelector(location.hash + ".kit");
  select(pre || kits[0]);
})();
