// script.js – das Verhalten der Seite

const seitenlayout = document.querySelector(".seitenlayout");
const seitenleisteSchalter = document.getElementById("seitenleiste-schalter");

if (!(seitenlayout instanceof HTMLElement) || !(seitenleisteSchalter instanceof HTMLButtonElement)) {
  throw new Error("Die Seitenleiste oder ihr Schalter wurde nicht gefunden.");
}

function setzeSeitenleiste(istGeoeffnet) {
  seitenlayout.classList.toggle("kompakt", !istGeoeffnet);
  seitenleisteSchalter.setAttribute("aria-expanded", String(istGeoeffnet));
  seitenleisteSchalter.setAttribute(
    "aria-label",
    istGeoeffnet ? "Menü einklappen" : "Menü ausklappen"
  );
}

const mobilerBildschirm = window.matchMedia("(max-width: 600px)");
setzeSeitenleiste(!mobilerBildschirm.matches);

seitenleisteSchalter.addEventListener("click", function () {
  const istGeoeffnet = seitenleisteSchalter.getAttribute("aria-expanded") === "true";
  setzeSeitenleiste(!istGeoeffnet);
});

mobilerBildschirm.addEventListener("change", function (ereignis) {
  setzeSeitenleiste(!ereignis.matches);
});

function starteSerienVerwaltung() {
  const serienFormular = document.getElementById("serien-formular");
  const serienName = document.getElementById("serien-name");
  const formularTitel = document.getElementById("formular-titel");
  const formularFehler = document.getElementById("formular-fehler");
  const speichernKnopf = document.getElementById("speichern-knopf");
  const abbrechenKnopf = document.getElementById("abbrechen-knopf");
  const neueSerieKnopf = document.getElementById("neue-serie-knopf");
  const jsonArchivExportierenKnopf = document.getElementById("json-archiv-exportieren-knopf");
  const jsonImportierenKnopf = document.getElementById("json-importieren-knopf");
  const jsonDateiInput = document.getElementById("json-datei-input");
  const jsonStatus = document.getElementById("json-status");
  const serienFehler = document.getElementById("serien-fehler");
  const serienLeer = document.getElementById("serien-leer");
  const serienListe = document.getElementById("serien-liste");
  const serienStatus = document.getElementById("serien-status");
  const serienBereich = document.getElementById("serien-bereich");
  const navigationSerienKnopf = document.getElementById("navigation-serien-knopf");
  const navigationLernenKnopf = document.getElementById("navigation-lernen-knopf");
  const lernenBereich = document.getElementById("lernen-bereich");
  const lernenAuswahl = document.getElementById("lernen-auswahl");
  const lernenSerie = document.getElementById("lernen-serie");
  const lernenModus = document.getElementById("lernen-modus");
  const lernenKartenInfo = document.getElementById("lernen-karten-info");
  const lernenFehler = document.getElementById("lernen-fehler");
  const lernenStartenKnopf = document.getElementById("lernen-starten-knopf");
  const lernenStudium = document.getElementById("lernen-studium");
  const studiumSerieTitel = document.getElementById("studium-serie-titel");
  const studiumModusAnzeige = document.getElementById("studium-modus-anzeige");
  const studiumFortschritt = document.getElementById("studium-fortschritt");
  const studiumKarte = document.getElementById("studium-karte");
  const studiumFrage = document.getElementById("studium-frage");
  const studiumAntwortBereich = document.getElementById("studium-antwort-bereich");
  const studiumAntwort = document.getElementById("studium-antwort");
  const studiumDefinition = document.getElementById("studium-definition");
  const studiumBild = document.getElementById("studium-bild");
  const studiumEingabeFormular = document.getElementById("studium-eingabe-formular");
  const studiumEingabe = document.getElementById("studium-eingabe");
  const studiumEingabePruefenKnopf = document.getElementById("studium-eingabe-pruefen-knopf");
  const studiumEigeneAntwort = document.getElementById("studium-eigene-antwort");
  const antwortZeigenKnopf = document.getElementById("antwort-zeigen-knopf");
  const studiumBewertung = document.getElementById("studium-bewertung");
  const karteNichtGewusstKnopf = document.getElementById("karte-nicht-gewusst-knopf");
  const karteGewusstKnopf = document.getElementById("karte-gewusst-knopf");
  const lernenBeendenKnopf = document.getElementById("lernen-beenden-knopf");
  const studiumErgebnis = document.getElementById("studium-ergebnis");
  const studiumErgebnisText = document.getElementById("studium-ergebnis-text");
  const schwierigeWiederholenKnopf = document.getElementById("schwierige-wiederholen-knopf");
  const studiumZurueckKnopf = document.getElementById("studium-zurueck-knopf");
  const kartenBereich = document.getElementById("karten-bereich");
  const kartenTitel = document.getElementById("karten-titel");
  const kartenBeschreibung = document.getElementById("karten-beschreibung");
  const kartenFormular = document.getElementById("karten-formular");
  const kartenFormularTitel = document.getElementById("karten-formular-titel");
  const kartenFrage = document.getElementById("karten-frage");
  const kartenAntwort = document.getElementById("karten-antwort");
  const kartenDefinition = document.getElementById("karten-definition");
  const kartenBild = document.getElementById("karten-bild");
  const kartenBildVorschau = document.getElementById("bild-vorschau");
  const kartenBildVorschauImg = document.getElementById("bild-vorschau-img");
  const kartenBildEntfernenKnopf = document.getElementById("bild-entfernen-knopf");
  const karteSpeichernKnopf = document.getElementById("karte-speichern-knopf");
  const kartenAbbrechenKnopf = document.getElementById("karten-abbrechen-knopf");
  const kartenFehler = document.getElementById("karten-fehler");
  const kartenLeer = document.getElementById("karten-leer");
  const kartenListe = document.getElementById("karten-liste");
  const kartenStatus = document.getElementById("karten-status");
  const zurueckZuSerienKnopf = document.getElementById("zurueck-zu-serien-knopf");
  const loeschDialog = document.getElementById("loesch-dialog");
  const loeschBeschreibung = document.getElementById("loesch-beschreibung");
  const loeschFehler = document.getElementById("loesch-fehler");
  const loeschAbbrechenKnopf = document.getElementById("loesch-abbrechen-knopf");
  const loeschBestaetigenKnopf = document.getElementById("loesch-bestaetigen-knopf");

  if (
    !(serienFormular instanceof HTMLFormElement) ||
    !(serienName instanceof HTMLInputElement) ||
    !(formularTitel instanceof HTMLElement) ||
    !(formularFehler instanceof HTMLParagraphElement) ||
    !(speichernKnopf instanceof HTMLButtonElement) ||
    !(abbrechenKnopf instanceof HTMLButtonElement) ||
    !(neueSerieKnopf instanceof HTMLButtonElement) ||
    !(jsonArchivExportierenKnopf instanceof HTMLButtonElement) ||
    !(jsonImportierenKnopf instanceof HTMLButtonElement) ||
    !(jsonDateiInput instanceof HTMLInputElement) ||
    !(jsonStatus instanceof HTMLParagraphElement) ||
    !(serienFehler instanceof HTMLParagraphElement) ||
    !(serienLeer instanceof HTMLParagraphElement) ||
    !(serienListe instanceof HTMLUListElement) ||
    !(serienStatus instanceof HTMLParagraphElement) ||
    !(serienBereich instanceof HTMLElement) ||
    !(navigationSerienKnopf instanceof HTMLButtonElement) ||
    !(navigationLernenKnopf instanceof HTMLButtonElement) ||
    !(lernenBereich instanceof HTMLElement) ||
    !(lernenAuswahl instanceof HTMLDivElement) ||
    !(lernenSerie instanceof HTMLSelectElement) ||
    !(lernenModus instanceof HTMLSelectElement) ||
    !(lernenKartenInfo instanceof HTMLParagraphElement) ||
    !(lernenFehler instanceof HTMLParagraphElement) ||
    !(lernenStartenKnopf instanceof HTMLButtonElement) ||
    !(lernenStudium instanceof HTMLDivElement) ||
    !(studiumSerieTitel instanceof HTMLHeadingElement) ||
    !(studiumModusAnzeige instanceof HTMLParagraphElement) ||
    !(studiumFortschritt instanceof HTMLParagraphElement) ||
    !(studiumKarte instanceof HTMLElement) ||
    !(studiumFrage instanceof HTMLHeadingElement) ||
    !(studiumAntwortBereich instanceof HTMLDivElement) ||
    !(studiumAntwort instanceof HTMLParagraphElement) ||
    !(studiumDefinition instanceof HTMLParagraphElement) ||
    !(studiumBild instanceof HTMLImageElement) ||
    !(studiumEingabeFormular instanceof HTMLFormElement) ||
    !(studiumEingabe instanceof HTMLTextAreaElement) ||
    !(studiumEingabePruefenKnopf instanceof HTMLButtonElement) ||
    !(studiumEigeneAntwort instanceof HTMLParagraphElement) ||
    !(antwortZeigenKnopf instanceof HTMLButtonElement) ||
    !(studiumBewertung instanceof HTMLDivElement) ||
    !(karteNichtGewusstKnopf instanceof HTMLButtonElement) ||
    !(karteGewusstKnopf instanceof HTMLButtonElement) ||
    !(lernenBeendenKnopf instanceof HTMLButtonElement) ||
    !(studiumErgebnis instanceof HTMLDivElement) ||
    !(studiumErgebnisText instanceof HTMLParagraphElement) ||
    !(schwierigeWiederholenKnopf instanceof HTMLButtonElement) ||
    !(studiumZurueckKnopf instanceof HTMLButtonElement) ||
    !(kartenBereich instanceof HTMLElement) ||
    !(kartenTitel instanceof HTMLHeadingElement) ||
    !(kartenBeschreibung instanceof HTMLParagraphElement) ||
    !(kartenFormular instanceof HTMLFormElement) ||
    !(kartenFormularTitel instanceof HTMLHeadingElement) ||
    !(kartenFrage instanceof HTMLInputElement) ||
    !(kartenAntwort instanceof HTMLTextAreaElement) ||
    !(kartenDefinition instanceof HTMLTextAreaElement) ||
    !(kartenBild instanceof HTMLInputElement) ||
    !(kartenBildVorschau instanceof HTMLDivElement) ||
    !(kartenBildVorschauImg instanceof HTMLImageElement) ||
    !(kartenBildEntfernenKnopf instanceof HTMLButtonElement) ||
    !(karteSpeichernKnopf instanceof HTMLButtonElement) ||
    !(kartenAbbrechenKnopf instanceof HTMLButtonElement) ||
    !(kartenFehler instanceof HTMLParagraphElement) ||
    !(kartenLeer instanceof HTMLParagraphElement) ||
    !(kartenListe instanceof HTMLUListElement) ||
    !(kartenStatus instanceof HTMLParagraphElement) ||
    !(zurueckZuSerienKnopf instanceof HTMLButtonElement) ||
    !(loeschDialog instanceof HTMLDialogElement) ||
    !(loeschBeschreibung instanceof HTMLParagraphElement) ||
    !(loeschFehler instanceof HTMLParagraphElement) ||
    !(loeschAbbrechenKnopf instanceof HTMLButtonElement) ||
    !(loeschBestaetigenKnopf instanceof HTMLButtonElement)
  ) {
    throw new Error("Elemente für die Serienverwaltung fehlen.");
  }

  const speicherSchluessel = "lernfunke-serien";
  let serien = [];
  let bearbeiteteSerieId = null;
  let bearbeiteteKarteId = null;
  let geoeffneteSerieId = null;
  let zuLoeschendeSerieId = null;
  let bildDaten = "";
  let speicherVerfuegbar = true;
  let lernserieId = null;
  let lernkartenImDurchgang = [];
  let schwierigeKarten = [];
  let aktuelleLernkarteIndex = 0;
  let anzahlGewusst = 0;
  let lernmodus = "flashcard";

  function zeigeFehler(element, nachricht) {
    element.textContent = nachricht;
    element.hidden = false;
  }

  function ladeSerien() {
    try {
      const gespeicherteDaten = localStorage.getItem(speicherSchluessel);

      if (gespeicherteDaten === null) {
        return true;
      }

      const geladeneSerien = JSON.parse(gespeicherteDaten);
      const datenSindGueltig =
        Array.isArray(geladeneSerien) &&
        geladeneSerien.every(
          (serie) =>
            serie &&
            typeof serie.id === "string" &&
            typeof serie.name === "string" &&
            Array.isArray(serie.karten)
        );

      if (!datenSindGueltig) {
        throw new Error("Die gespeicherten Serien haben ein ungültiges Format.");
      }

      serien = geladeneSerien;
      return true;
    } catch (fehler) {
      console.error("Serien konnten nicht geladen werden:", fehler);
      speicherVerfuegbar = false;
      zeigeFehler(serienFehler, "Serien konnten nicht geladen werden. Bitte prüfe den Browserspeicher.");
      serienLeer.hidden = true;
      serienListe.hidden = true;
      neueSerieKnopf.disabled = true;
      jsonArchivExportierenKnopf.disabled = true;
      speichernKnopf.disabled = true;
      kartenFormular.querySelectorAll("input, textarea, button").forEach(function (element) {
        element.disabled = true;
      });
      return false;
    }
  }

  function speichereSerien(neueSerien) {
    try {
      localStorage.setItem(speicherSchluessel, JSON.stringify(neueSerien));
      return true;
    } catch (fehler) {
      console.error("Serien konnten nicht gespeichert werden:", fehler);
      return false;
    }
  }

  function erstelleJSONDatei(daten, dateiname) {
    const blob = new Blob([JSON.stringify(daten, null, 2)], {
      type: "application/json"
    });
    const dateiAdresse = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = dateiAdresse;
    link.download = dateiname;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(function () {
      URL.revokeObjectURL(dateiAdresse);
    }, 1000);
  }

  function sichereDateinamenSerie(name) {
    return name
      .trim()
      .replace(/[<>:"/\\|?*\u0000-\u001f]/g, "_")
      .replace(/\s+/g, "-")
      .slice(0, 60);
  }

  function istGueltigeLernkarte(karte) {
    if (karte === null || typeof karte !== "object" || Array.isArray(karte)) {
      return false;
    }

    const bildIstGueltig =
      karte.bild === "" ||
      karte.bild === undefined ||
      (typeof karte.bild === "string" &&
        /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/]*={0,2}$/.test(karte.bild));

    return (
      typeof karte.id === "string" &&
      karte.id.trim().length > 0 &&
      typeof karte.frage === "string" &&
      karte.frage.trim().length > 0 &&
      karte.frage.length <= 200 &&
      typeof karte.antwort === "string" &&
      karte.antwort.trim().length > 0 &&
      karte.antwort.length <= 500 &&
      (karte.definition === undefined ||
        (typeof karte.definition === "string" && karte.definition.length <= 500)) &&
      (karte.gewusst === undefined || typeof karte.gewusst === "boolean") &&
      bildIstGueltig
    );
  }

  function istGueltigeSerie(serie) {
    return (
      serie !== null &&
      typeof serie === "object" &&
      !Array.isArray(serie) &&
      typeof serie.id === "string" &&
      serie.id.trim().length > 0 &&
      typeof serie.name === "string" &&
      serie.name.trim().length > 0 &&
      serie.name.length <= 80 &&
      Array.isArray(serie.karten) &&
      serie.karten.every(istGueltigeLernkarte) &&
      new Set(serie.karten.map((karte) => karte.id)).size === serie.karten.length
    );
  }

  function sindGueltigeSerien(serienZumImportieren) {
    return (
      Array.isArray(serienZumImportieren) &&
      serienZumImportieren.every(istGueltigeSerie) &&
      new Set(serienZumImportieren.map((serie) => serie.id)).size ===
        serienZumImportieren.length
    );
  }

  function bereinigeSerie(serie) {
    return {
      id: serie.id,
      name: serie.name,
      karten: serie.karten.map((karte) => ({
        id: karte.id,
        frage: karte.frage,
        antwort: karte.antwort,
        definition: karte.definition || "",
        bild: karte.bild || "",
        gewusst: karte.gewusst === true
      }))
    };
  }

  function beendeSerienbearbeitung() {
    serienFormular.reset();
    serienFormular.hidden = true;
    bearbeiteteSerieId = null;
    formularFehler.hidden = true;
  }

  function aktualisiereNachJSONImport(neueSerien, statusMeldung) {
    serien = neueSerien;
    speicherVerfuegbar = true;
    serienFehler.hidden = true;
    jsonStatus.textContent = statusMeldung;
    neueSerieKnopf.disabled = false;
    speichernKnopf.disabled = false;
    kartenFormular.querySelectorAll("input, textarea, button").forEach((element) => {
      element.disabled = false;
    });
    beendeSerienbearbeitung();
    zeigeSerien();
    aktualisiereLernSerien();
  }

  function importiereArchiv(archivSerien) {
    if (!window.confirm("Das Archiv ersetzt alle gespeicherten Serien. Möchtest du fortfahren?")) {
      jsonStatus.textContent = "Import abgebrochen.";
      return;
    }

    const neueSerien = archivSerien.map(bereinigeSerie);
    if (!speichereSerien(neueSerien)) {
      zeigeFehler(
        serienFehler,
        "Das Archiv konnte nicht gespeichert werden. Bitte prüfe den verfügbaren Browserspeicher."
      );
      return;
    }

    aktualisiereNachJSONImport(
      neueSerien,
      `${neueSerien.length} ${neueSerien.length === 1 ? "Serie wurde" : "Serien wurden"} importiert.`
    );
  }

  function importiereEinzelneSerie(serie) {
    const vorhandeneSerie = serien.find((eintrag) => eintrag.id === serie.id);

    if (
      vorhandeneSerie &&
      !window.confirm(
        `Die Serie „${vorhandeneSerie.name}“ existiert bereits und wird ersetzt. Möchtest du fortfahren?`
      )
    ) {
      jsonStatus.textContent = "Import abgebrochen.";
      return;
    }

    const bereinigteSerie = bereinigeSerie(serie);
    const neueSerien = vorhandeneSerie
      ? serien.map((eintrag) =>
          eintrag.id === bereinigteSerie.id ? bereinigteSerie : eintrag
        )
      : serien.concat(bereinigteSerie);

    if (!speichereSerien(neueSerien)) {
      zeigeFehler(
        serienFehler,
        "Die Serie konnte nicht gespeichert werden. Bitte prüfe den verfügbaren Browserspeicher."
      );
      return;
    }

    aktualisiereNachJSONImport(neueSerien, `Serie „${bereinigteSerie.name}“ importiert.`);
  }

  function verarbeiteJSONDaten(daten) {
    if (!daten || typeof daten !== "object" || Array.isArray(daten)) {
      zeigeFehler(serienFehler, "Die Datei enthält kein gültiges Lernfunke-JSON-Backup.");
      return;
    }

    if (
      daten.format === "lernfunke-archiv" &&
      daten.version === 1 &&
      sindGueltigeSerien(daten.serien)
    ) {
      importiereArchiv(daten.serien);
      return;
    }

    if (
      daten.format === "lernfunke-serie" &&
      daten.version === 1 &&
      istGueltigeSerie(daten.serie)
    ) {
      importiereEinzelneSerie(daten.serie);
      return;
    }

    zeigeFehler(
      serienFehler,
      "Die Datei ist kein gültiges oder unterstütztes Lernfunke-JSON-Backup."
    );
  }

  function zeigeSerien() {
    serienListe.replaceChildren();
    serienListe.hidden = serien.length === 0;
    serienLeer.hidden = serien.length > 0;

    serien.forEach((serie) => {
      const zeile = document.createElement("li");
      zeile.className = "serien-zeile";

      const serienInfo = document.createElement("div");
      serienInfo.className = "serien-info";

      const name = document.createElement("h3");
      name.textContent = serie.name;
      serienInfo.appendChild(name);

      const fortschritt = document.createElement("div");
      fortschritt.className = "serien-fortschritt";

      const kartenAnzahl = serie.karten.length;
      const gewussteKarten = serie.karten.filter((karte) => karte && karte.gewusst === true).length;
      const prozent = kartenAnzahl === 0 ? 0 : Math.round((gewussteKarten / kartenAnzahl) * 100);
      const fortschrittText = document.createElement("span");
      fortschrittText.textContent =
        kartenAnzahl === 0
          ? "0 Karten"
          : `${gewussteKarten} von ${kartenAnzahl} Karten gewusst`;

      const balken = document.createElement("div");
      balken.className = "fortschritt-balken";
      balken.setAttribute("role", "progressbar");
      balken.setAttribute("aria-label", `Fortschritt: ${serie.name}`);
      balken.setAttribute("aria-valuemin", "0");
      balken.setAttribute("aria-valuemax", "100");
      balken.setAttribute("aria-valuenow", String(prozent));
      balken.setAttribute(
        "aria-valuetext",
        kartenAnzahl === 0 ? "Noch keine Karten" : `${gewussteKarten} von ${kartenAnzahl} Karten`
      );

      const fuellung = document.createElement("span");
      fuellung.className = "fortschritt-fuellung";
      fuellung.style.width = `${prozent}%`;
      balken.appendChild(fuellung);
      fortschritt.append(fortschrittText, balken);
      serienInfo.appendChild(fortschritt);
      zeile.appendChild(serienInfo);

      const aktionen = document.createElement("div");
      aktionen.className = "serien-aktionen";

      const kartenOeffnenKnopf = document.createElement("button");
      kartenOeffnenKnopf.type = "button";
      kartenOeffnenKnopf.textContent = "Karten öffnen";
      kartenOeffnenKnopf.addEventListener("click", function () {
        zeigeSerie(serie);
      });

      const bearbeitenKnopf = document.createElement("button");
      bearbeitenKnopf.type = "button";
      bearbeitenKnopf.textContent = "Bearbeiten";
      bearbeitenKnopf.addEventListener("click", function () {
        zeigeFormular(serie);
      });

      const jsonExportierenKnopf = document.createElement("button");
      jsonExportierenKnopf.type = "button";
      jsonExportierenKnopf.textContent = "JSON herunterladen";
      jsonExportierenKnopf.setAttribute(
        "aria-label",
        `Serie ${serie.name} als JSON herunterladen`
      );
      jsonExportierenKnopf.disabled = !speicherVerfuegbar;
      jsonExportierenKnopf.addEventListener("click", function () {
        serienFehler.hidden = true;
        jsonStatus.textContent = "";

        try {
          erstelleJSONDatei(
            {
              format: "lernfunke-serie",
              version: 1,
              exportiertAm: new Date().toISOString(),
              serie: serie
            },
            `lernfunke-serie-${sichereDateinamenSerie(serie.name)}.json`
          );
          jsonStatus.textContent = `Serie „${serie.name}“ wurde heruntergeladen.`;
        } catch (fehler) {
          console.error("Serie konnte nicht exportiert werden:", fehler);
          zeigeFehler(serienFehler, "Die Serie konnte nicht als JSON exportiert werden.");
        }
      });

      const loeschenKnopf = document.createElement("button");
      loeschenKnopf.type = "button";
      loeschenKnopf.textContent = "Löschen";
      loeschenKnopf.setAttribute("aria-label", `Serie ${serie.name} löschen`);
      loeschenKnopf.addEventListener("click", function () {
        zeigeLoeschDialog(serie);
      });

      aktionen.append(
        kartenOeffnenKnopf,
        bearbeitenKnopf,
        jsonExportierenKnopf,
        loeschenKnopf
      );
      zeile.appendChild(aktionen);
      serienListe.appendChild(zeile);
    });
  }

  function setzeAktiveNavigation(aktiverKnopf) {
    document.querySelectorAll(".seiten-eintrag").forEach((knopf) => {
      knopf.classList.remove("aktiv");
    });
    aktiverKnopf.classList.add("aktiv");
  }

  function aktualisiereLernHinweis() {
    const serie = serien.find((eintrag) => eintrag.id === lernenSerie.value);
    lernenFehler.hidden = true;

    if (!serie) {
      lernenStartenKnopf.disabled = true;
      lernenKartenInfo.textContent =
        serien.length === 0
          ? "Lege zuerst eine Serie mit Lernkarten an."
          : "Bitte wähle eine Serie aus.";
      return;
    }

    const kartenAnzahl = serie.karten.length;
    lernenKartenInfo.textContent =
      kartenAnzahl === 0
        ? "Diese Serie enthält noch keine Karten."
        : `${kartenAnzahl} ${kartenAnzahl === 1 ? "Lernkarte ist" : "Lernkarten sind"} bereit.`;
    lernenStartenKnopf.disabled = kartenAnzahl === 0;
  }

  function aktualisiereLernSerien() {
    const bisherigeAuswahl = lernenSerie.value;
    const ersteOption = document.createElement("option");
    ersteOption.value = "";
    ersteOption.textContent = "Bitte wähle eine Serie.";
    lernenSerie.replaceChildren(ersteOption);

    serien.forEach((serie) => {
      const option = document.createElement("option");
      option.value = serie.id;
      option.textContent = serie.name;
      lernenSerie.appendChild(option);
    });

    lernenSerie.value = serien.some((serie) => serie.id === bisherigeAuswahl)
      ? bisherigeAuswahl
      : "";
    aktualisiereLernHinweis();
  }

  function mischeKarten(karten) {
    const gemischteKarten = karten.slice();

    for (let index = gemischteKarten.length - 1; index > 0; index -= 1) {
      const zufallsIndex = Math.floor(Math.random() * (index + 1));
      [gemischteKarten[index], gemischteKarten[zufallsIndex]] = [
        gemischteKarten[zufallsIndex],
        gemischteKarten[index]
      ];
    }

    return gemischteKarten;
  }

  function starteLerndurchgang(serie, karten, modus) {
    lernserieId = serie.id;
    lernmodus = modus;
    lernkartenImDurchgang = mischeKarten(karten);
    schwierigeKarten = [];
    aktuelleLernkarteIndex = 0;
    anzahlGewusst = 0;
    lernenFehler.hidden = true;
    lernenAuswahl.hidden = true;
    lernenStudium.hidden = false;
    studiumKarte.hidden = false;
    studiumErgebnis.hidden = true;
    studiumSerieTitel.textContent = serie.name;
    const modusNamen = {
      flashcard: "Karteikartenmodus",
      schreiben: "Antwort schreiben",
      umgekehrt: "Umgekehrte Karte"
    };
    studiumModusAnzeige.textContent = modusNamen[lernmodus];
    zeigeAktuelleLernkarte();
  }

  function zeigeAktuelleLernkarte() {
    if (aktuelleLernkarteIndex >= lernkartenImDurchgang.length) {
      studiumKarte.hidden = true;
      studiumErgebnis.hidden = false;
      const schwierigeKartenText =
        schwierigeKarten.length === 1
          ? "1 Karte zum Wiederholen."
          : `${schwierigeKarten.length} Karten zum Wiederholen.`;
      studiumErgebnisText.textContent =
        `${anzahlGewusst} von ${lernkartenImDurchgang.length} Karten gewusst. ` +
        schwierigeKartenText;
      schwierigeWiederholenKnopf.hidden = schwierigeKarten.length === 0;
      return;
    }

    const karte = lernkartenImDurchgang[aktuelleLernkarteIndex];
    const istUmgekehrt = lernmodus === "umgekehrt";
    const istSchreibmodus = lernmodus === "schreiben";
    studiumFortschritt.textContent =
      `Karte ${aktuelleLernkarteIndex + 1} von ${lernkartenImDurchgang.length}`;
    studiumFrage.textContent = istUmgekehrt ? karte.antwort : karte.frage;
    studiumAntwort.textContent = istUmgekehrt ? karte.frage : karte.antwort;
    studiumDefinition.textContent = karte.definition || "";
    studiumDefinition.hidden = !karte.definition;
    studiumEingabeFormular.reset();
    studiumEingabe.setCustomValidity("");
    studiumEingabeFormular.hidden = !istSchreibmodus;
    studiumEigeneAntwort.textContent = "";
    studiumEigeneAntwort.hidden = true;
    studiumAntwortBereich.hidden = true;
    antwortZeigenKnopf.hidden = istSchreibmodus;
    studiumBewertung.hidden = true;

    if (karte.bild) {
      studiumBild.src = karte.bild;
      studiumBild.alt = `Foto zu ${karte.frage}`;
      studiumBild.hidden = false;
    } else {
      studiumBild.removeAttribute("src");
      studiumBild.alt = "";
      studiumBild.hidden = true;
    }
  }

  function bewerteLernkarte(gewusst) {
    const serie = serien.find((eintrag) => eintrag.id === lernserieId);
    const karte = lernkartenImDurchgang[aktuelleLernkarteIndex];

    if (!serie || !karte || !serie.karten.some((eintrag) => eintrag.id === karte.id)) {
      zeigeFehler(lernenFehler, "Die Lernkarte wurde nicht gefunden. Bitte starte den Durchgang erneut.");
      return;
    }

    const neueSerien = serien.map((eintrag) =>
      eintrag.id === serie.id
        ? {
            ...eintrag,
            karten: eintrag.karten.map((serienKarte) =>
              serienKarte.id === karte.id
                ? { ...serienKarte, gewusst: gewusst }
                : serienKarte
            )
          }
        : eintrag
    );

    if (!speichereSerien(neueSerien)) {
      zeigeFehler(lernenFehler, "Der Lernfortschritt konnte nicht gespeichert werden. Bitte prüfe den Browserspeicher.");
      return;
    }

    serien = neueSerien;
    lernenFehler.hidden = true;

    if (gewusst) {
      anzahlGewusst += 1;
    } else {
      schwierigeKarten.push(karte);
    }

    aktuelleLernkarteIndex += 1;
    zeigeAktuelleLernkarte();
  }

  function beendeLerndurchgang() {
    lernenStudium.hidden = true;
    lernenAuswahl.hidden = false;
    lernenFehler.hidden = true;
  }

  function zeigeSerienAnsicht() {
    serienBereich.hidden = false;
    kartenBereich.hidden = true;
    lernenBereich.hidden = true;
    geoeffneteSerieId = null;
    setzeAktiveNavigation(navigationSerienKnopf);
    zeigeSerien();
  }

  function zeigeLernenAnsicht() {
    serienBereich.hidden = true;
    kartenBereich.hidden = true;
    lernenBereich.hidden = false;
    lernenAuswahl.hidden = false;
    lernenStudium.hidden = true;
    setzeAktiveNavigation(navigationLernenKnopf);
    aktualisiereLernSerien();
  }

  function zeigeSerie(serie) {
    geoeffneteSerieId = serie.id;
    serienBereich.hidden = true;
    lernenBereich.hidden = true;
    kartenBereich.hidden = false;
    setzeAktiveNavigation(navigationSerienKnopf);
    kartenTitel.textContent = serie.name;
    kartenFehler.hidden = true;
    kartenStatus.textContent = "";
    bereiteKartenFormularVor(null);
    zeigeKarten(serie);
  }

  function bereiteKartenFormularVor(karte) {
    kartenFormular.reset();
    kartenFrage.setCustomValidity("");
    kartenAntwort.setCustomValidity("");
    kartenFehler.hidden = true;
    bearbeiteteKarteId = karte ? karte.id : null;

    if (karte) {
      kartenFormularTitel.textContent = "Lernkarte bearbeiten";
      karteSpeichernKnopf.textContent = "Änderungen speichern";
      kartenAbbrechenKnopf.hidden = false;
      kartenFrage.value = karte.frage;
      kartenAntwort.value = karte.antwort;
      kartenDefinition.value = karte.definition || "";
      bildDaten = karte.bild || "";
    } else {
      kartenFormularTitel.textContent = "Neue Lernkarte";
      karteSpeichernKnopf.textContent = "Karte hinzufügen";
      kartenAbbrechenKnopf.hidden = true;
      bildDaten = "";
    }

    if (bildDaten) {
      kartenBildVorschauImg.src = bildDaten;
      kartenBildVorschau.hidden = false;
    } else {
      kartenBildVorschauImg.removeAttribute("src");
      kartenBildVorschau.hidden = true;
    }
  }

  function zeigeKarten(serie) {
    kartenTitel.textContent = serie.name;
    kartenBeschreibung.textContent = `${serie.karten.length} Karten in dieser Serie.`;
    kartenListe.replaceChildren();
    kartenListe.hidden = serie.karten.length === 0;
    kartenLeer.hidden = serie.karten.length > 0;

    serie.karten.forEach((karte) => {
      const zeile = document.createElement("li");
      zeile.className = "karte-zeile";

      const textBereich = document.createElement("div");
      const frage = document.createElement("h3");
      frage.textContent = karte.frage;

      const antwort = document.createElement("p");
      antwort.className = "karte-antwort";
      antwort.textContent = karte.antwort;
      textBereich.append(frage, antwort);

      if (karte.definition) {
        const definition = document.createElement("p");
        definition.className = "karte-definition";
        definition.textContent = karte.definition;
        textBereich.appendChild(definition);
      }

      const aktionen = document.createElement("div");
      aktionen.className = "karten-aktionen";
      const bearbeitenKnopf = document.createElement("button");
      bearbeitenKnopf.className = "sekundaer-knopf";
      bearbeitenKnopf.type = "button";
      bearbeitenKnopf.textContent = "Bearbeiten";
      bearbeitenKnopf.addEventListener("click", function () {
        bereiteKartenFormularVor(karte);
        kartenFrage.focus();
      });

      const loeschenKnopf = document.createElement("button");
      loeschenKnopf.className = "loesch-knopf";
      loeschenKnopf.type = "button";
      loeschenKnopf.textContent = "Löschen";
      loeschenKnopf.setAttribute("aria-label", `Lernkarte ${karte.frage} löschen`);
      loeschenKnopf.addEventListener("click", function () {
        const bestaetigt = window.confirm(
          `Möchtest du die Lernkarte „${karte.frage}“ wirklich löschen?`
        );

        if (!bestaetigt) {
          return;
        }

        const serie = serien.find((eintrag) => eintrag.id === geoeffneteSerieId);
        if (!serie || !serie.karten.some((eintrag) => eintrag.id === karte.id)) {
          zeigeFehler(kartenFehler, "Diese Lernkarte wurde nicht gefunden.");
          return;
        }

        const neueKarten = serie.karten.filter((eintrag) => eintrag.id !== karte.id);
        const neueSerien = serien.map((eintrag) =>
          eintrag.id === serie.id ? { ...eintrag, karten: neueKarten } : eintrag
        );

        if (!speichereSerien(neueSerien)) {
          zeigeFehler(kartenFehler, "Lernkarte konnte nicht gelöscht werden. Bitte prüfe den Browserspeicher.");
          return;
        }

        serien = neueSerien;
        const aktualisierteSerie = serien.find((eintrag) => eintrag.id === serie.id);
        if (bearbeiteteKarteId === karte.id) {
          bereiteKartenFormularVor(null);
        }
        zeigeKarten(aktualisierteSerie);
        zeigeSerien();
        kartenStatus.textContent = `Lernkarte „${karte.frage}“ gelöscht.`;
      });

      aktionen.append(bearbeitenKnopf, loeschenKnopf);
      textBereich.appendChild(aktionen);

      zeile.appendChild(textBereich);

      if (karte.bild) {
        const bild = document.createElement("img");
        bild.className = "karte-bild";
        bild.src = karte.bild;
        bild.alt = `Foto zu ${karte.frage}`;
        zeile.appendChild(bild);
      }

      kartenListe.appendChild(zeile);
    });
  }

  function komprimiereBild(datei) {
    return new Promise(function (loesen, ablehnen) {
      const bild = new Image();
      const bildAdresse = URL.createObjectURL(datei);

      bild.onload = function () {
        URL.revokeObjectURL(bildAdresse);
        const groessteSeite = Math.max(bild.width, bild.height);
        const faktor = Math.min(1, 640 / groessteSeite);
        const breite = Math.max(1, Math.round(bild.width * faktor));
        const hoehe = Math.max(1, Math.round(bild.height * faktor));
        const leinwand = document.createElement("canvas");
        leinwand.width = breite;
        leinwand.height = hoehe;

        const zeichenflaeche = leinwand.getContext("2d");
        if (!zeichenflaeche) {
          ablehnen(new Error("Die Bildbearbeitung ist nicht verfügbar."));
          return;
        }

        zeichenflaeche.fillStyle = "#ffffff";
        zeichenflaeche.fillRect(0, 0, breite, hoehe);
        zeichenflaeche.drawImage(bild, 0, 0, breite, hoehe);

        leinwand.toBlob(function (dateiKomprimiert) {
          if (!dateiKomprimiert) {
            ablehnen(new Error("Das Foto konnte nicht verkleinert werden."));
            return;
          }

          const leser = new FileReader();
          leser.onload = function () {
            if (typeof leser.result !== "string") {
              ablehnen(new Error("Das verkleinerte Foto konnte nicht gelesen werden."));
              return;
            }

            loesen(leser.result);
          };
          leser.onerror = function () {
            ablehnen(leser.error || new Error("Das Foto konnte nicht gelesen werden."));
          };
          leser.readAsDataURL(dateiKomprimiert);
        }, "image/jpeg", 0.75);
      };

      bild.onerror = function () {
        URL.revokeObjectURL(bildAdresse);
        ablehnen(new Error("Die ausgewählte Datei ist kein lesbares Bild."));
      };
      bild.src = bildAdresse;
    });
  }

  function erstelleId() {
    return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
  }

  function zeigeFormular(serie) {
    serienFehler.hidden = true;
    formularFehler.hidden = true;
    serienFormular.hidden = false;

    if (serie) {
      bearbeiteteSerieId = serie.id;
      formularTitel.textContent = "Serie bearbeiten";
      speichernKnopf.textContent = "Änderungen speichern";
      serienName.value = serie.name;
    } else {
      bearbeiteteSerieId = null;
      formularTitel.textContent = "Neue Serie";
      speichernKnopf.textContent = "Speichern";
      serienFormular.reset();
    }

    serienName.focus();
  }

  function zeigeLoeschDialog(serie) {
    zuLoeschendeSerieId = serie.id;
    loeschBeschreibung.textContent = `Möchtest du die Serie „${serie.name}“ wirklich löschen?`;
    loeschFehler.hidden = true;
    loeschDialog.showModal();
  }

  serienName.addEventListener("input", function () {
    serienName.setCustomValidity("");
  });

  kartenFrage.addEventListener("input", function () {
    kartenFrage.setCustomValidity("");
  });

  kartenAntwort.addEventListener("input", function () {
    kartenAntwort.setCustomValidity("");
  });

  kartenBild.addEventListener("change", async function () {
    kartenFehler.hidden = true;

    const datei = kartenBild.files && kartenBild.files[0];
    if (!datei) {
      return;
    }

    const erlaubteFormate = ["image/jpeg", "image/png", "image/webp"];
    if (!erlaubteFormate.includes(datei.type)) {
      zeigeFehler(kartenFehler, "Bitte wähle ein JPG-, PNG- oder WEBP-Foto.");
      kartenBild.value = "";
      return;
    }

    if (datei.size > 5 * 1024 * 1024) {
      zeigeFehler(kartenFehler, "Das Foto darf höchstens 5 MB gross sein.");
      kartenBild.value = "";
      return;
    }

    karteSpeichernKnopf.disabled = true;
    kartenBildEntfernenKnopf.disabled = true;
    kartenBild.disabled = true;
    kartenAbbrechenKnopf.disabled = true;
    zurueckZuSerienKnopf.disabled = true;
    kartenListe.querySelectorAll("button").forEach((knopf) => {
      knopf.disabled = true;
    });

    try {
      bildDaten = await komprimiereBild(datei);
      kartenBildVorschauImg.src = bildDaten;
      kartenBildVorschau.hidden = false;
    } catch (fehler) {
      console.error("Foto konnte nicht verarbeitet werden:", fehler);
      zeigeFehler(kartenFehler, "Das Foto konnte nicht verarbeitet werden. Bitte wähle ein anderes Bild.");
      kartenBild.value = "";
    } finally {
      karteSpeichernKnopf.disabled = !speicherVerfuegbar;
      kartenBildEntfernenKnopf.disabled = false;
      kartenBild.disabled = false;
      kartenAbbrechenKnopf.disabled = false;
      zurueckZuSerienKnopf.disabled = false;
      kartenListe.querySelectorAll("button").forEach((knopf) => {
        knopf.disabled = false;
      });
    }
  });

  kartenBildEntfernenKnopf.addEventListener("click", function () {
    kartenBild.value = "";
    bildDaten = "";
    kartenBildVorschau.hidden = true;
    kartenBildVorschauImg.removeAttribute("src");
    kartenFehler.hidden = true;
  });

  kartenAbbrechenKnopf.addEventListener("click", function () {
    bereiteKartenFormularVor(null);
  });

  kartenFormular.addEventListener("submit", async function (ereignis) {
    ereignis.preventDefault();
    const frage = kartenFrage.value.trim();
    const antwort = kartenAntwort.value.trim();

    if (frage.length === 0) {
      kartenFrage.setCustomValidity("Bitte gib einen Begriff oder eine Frage ein.");
      kartenFrage.reportValidity();
      return;
    }

    if (antwort.length === 0) {
      kartenAntwort.setCustomValidity("Bitte gib die Übersetzung oder Antwort ein.");
      kartenAntwort.reportValidity();
      return;
    }

    const serie = serien.find((eintrag) => eintrag.id === geoeffneteSerieId);
    if (!serie) {
      zeigeFehler(kartenFehler, "Die Serie wurde nicht gefunden. Kehre zu «Meine Serien» zurück.");
      return;
    }

    let neueKarten;
    let statusMeldung;

    if (bearbeiteteKarteId === null) {
      neueKarten = serie.karten.concat({
        id: erstelleId(),
        frage: frage,
        antwort: antwort,
        definition: kartenDefinition.value.trim(),
        bild: bildDaten,
        gewusst: false
      });
      statusMeldung = "Lernkarte hinzugefügt.";
    } else {
      const vorhandeneKarte = serie.karten.find((karte) => karte.id === bearbeiteteKarteId);

      if (!vorhandeneKarte) {
        zeigeFehler(kartenFehler, "Diese Lernkarte wurde nicht gefunden.");
        return;
      }

      const geaenderteKarte = {
        ...vorhandeneKarte,
        frage: frage,
        antwort: antwort,
        definition: kartenDefinition.value.trim(),
        bild: bildDaten
      };

      neueKarten = serie.karten.map((karte) =>
        karte.id === bearbeiteteKarteId ? geaenderteKarte : karte
      );
      statusMeldung = "Lernkarte geändert.";
    }

    const neueSerien = serien.map((eintrag) =>
      eintrag.id === serie.id ? { ...eintrag, karten: neueKarten } : eintrag
    );

    if (!speichereSerien(neueSerien)) {
      zeigeFehler(kartenFehler, "Karte konnte nicht gespeichert werden. Im Browserspeicher ist vielleicht kein Platz mehr.");
      return;
    }

    serien = neueSerien;
    const aktualisierteSerie = serien.find((eintrag) => eintrag.id === serie.id);
    zeigeKarten(aktualisierteSerie);
    zeigeSerien();
    bereiteKartenFormularVor(null);
    kartenStatus.textContent = statusMeldung;
  });

  jsonArchivExportierenKnopf.addEventListener("click", function () {
    serienFehler.hidden = true;
    jsonStatus.textContent = "";

    try {
      erstelleJSONDatei(
        {
          format: "lernfunke-archiv",
          version: 1,
          exportiertAm: new Date().toISOString(),
          serien: serien
        },
        "lernfunke-archiv.json"
      );
      jsonStatus.textContent = "Das Archiv wurde heruntergeladen.";
    } catch (fehler) {
      console.error("Archiv konnte nicht exportiert werden:", fehler);
      zeigeFehler(serienFehler, "Das Archiv konnte nicht als JSON exportiert werden.");
    }
  });

  jsonImportierenKnopf.addEventListener("click", function () {
    jsonDateiInput.click();
  });

  jsonDateiInput.addEventListener("change", async function () {
    const datei = jsonDateiInput.files && jsonDateiInput.files[0];
    jsonDateiInput.value = "";

    if (!datei) {
      return;
    }

    serienFehler.hidden = true;
    jsonStatus.textContent = "";
    jsonImportierenKnopf.disabled = true;

    try {
      let dateiInhalt;
      try {
        dateiInhalt = await datei.text();
      } catch (fehler) {
        console.error("JSON-Datei konnte nicht gelesen werden:", fehler);
        zeigeFehler(serienFehler, "Die ausgewählte JSON-Datei konnte nicht gelesen werden.");
        return;
      }

      let daten;
      try {
        daten = JSON.parse(dateiInhalt);
      } catch (fehler) {
        console.error("JSON-Datei ist ungültig:", fehler);
        zeigeFehler(serienFehler, "Die Datei enthält kein gültiges JSON.");
        return;
      }

      verarbeiteJSONDaten(daten);
    } finally {
      jsonImportierenKnopf.disabled = false;
    }
  });

  navigationSerienKnopf.addEventListener("click", zeigeSerienAnsicht);
  navigationLernenKnopf.addEventListener("click", zeigeLernenAnsicht);
  lernenSerie.addEventListener("change", aktualisiereLernHinweis);

  lernenStartenKnopf.addEventListener("click", function () {
    const serie = serien.find((eintrag) => eintrag.id === lernenSerie.value);

    if (!serie || serie.karten.length === 0) {
      aktualisiereLernHinweis();
      return;
    }

    starteLerndurchgang(serie, serie.karten, lernenModus.value);
  });

  antwortZeigenKnopf.addEventListener("click", function () {
    studiumAntwortBereich.hidden = false;
    antwortZeigenKnopf.hidden = true;
    studiumBewertung.hidden = false;
  });

  studiumEingabe.addEventListener("input", function () {
    studiumEingabe.setCustomValidity("");
  });

  studiumEingabeFormular.addEventListener("submit", function (ereignis) {
    ereignis.preventDefault();
    const eigeneAntwort = studiumEingabe.value.trim();

    if (eigeneAntwort.length === 0) {
      studiumEingabe.setCustomValidity("Bitte gib zuerst deine Antwort ein.");
      studiumEingabe.reportValidity();
      return;
    }

    studiumEingabe.setCustomValidity("");
    studiumEigeneAntwort.textContent = `Deine Antwort: ${eigeneAntwort}`;
    studiumEigeneAntwort.hidden = false;
    studiumEingabeFormular.hidden = true;
    studiumAntwortBereich.hidden = false;
    studiumBewertung.hidden = false;
    karteNichtGewusstKnopf.focus();
  });

  karteGewusstKnopf.addEventListener("click", function () {
    bewerteLernkarte(true);
  });

  karteNichtGewusstKnopf.addEventListener("click", function () {
    bewerteLernkarte(false);
  });

  schwierigeWiederholenKnopf.addEventListener("click", function () {
    const serie = serien.find((eintrag) => eintrag.id === lernserieId);

    if (!serie || schwierigeKarten.length === 0) {
      beendeLerndurchgang();
      return;
    }

    starteLerndurchgang(serie, schwierigeKarten, lernmodus);
  });

  lernenBeendenKnopf.addEventListener("click", beendeLerndurchgang);
  studiumZurueckKnopf.addEventListener("click", beendeLerndurchgang);

  zurueckZuSerienKnopf.addEventListener("click", function () {
    zeigeSerienAnsicht();
  });

  neueSerieKnopf.addEventListener("click", function () {
    zeigeFormular(null);
  });

  abbrechenKnopf.addEventListener("click", function () {
    serienFormular.reset();
    serienFormular.hidden = true;
    bearbeiteteSerieId = null;
    formularFehler.hidden = true;
    neueSerieKnopf.focus();
  });

  serienFormular.addEventListener("submit", function (ereignis) {
    ereignis.preventDefault();
    const name = serienName.value.trim();

    if (name.length === 0) {
      serienName.setCustomValidity("Bitte gib einen Namen für die Serie ein.");
      serienName.reportValidity();
      return;
    }

    serienName.setCustomValidity("");
    serienFehler.hidden = true;

    let neueSerien;
    let statusMeldung;

    if (bearbeiteteSerieId === null) {
      neueSerien = serien.concat({
        id: erstelleId(),
        name: name,
        karten: []
      });
      statusMeldung = `Serie ${name} hinzugefügt.`;
    } else {
      neueSerien = serien.map((serie) =>
        serie.id === bearbeiteteSerieId ? { ...serie, name: name } : serie
      );
      statusMeldung = `Serie ${name} geändert.`;
    }

    if (!speichereSerien(neueSerien)) {
      zeigeFehler(serienFehler, "Serie konnte nicht gespeichert werden. Bitte prüfe den Browserspeicher.");
      return;
    }

    serien = neueSerien;
    zeigeSerien();
    serienFormular.reset();
    serienFormular.hidden = true;
    bearbeiteteSerieId = null;
    serienStatus.textContent = statusMeldung;
  });

  loeschAbbrechenKnopf.addEventListener("click", function () {
    loeschDialog.close();
  });

  loeschDialog.addEventListener("close", function () {
    zuLoeschendeSerieId = null;
  });

  loeschBestaetigenKnopf.addEventListener("click", function () {
    const serie = serien.find((eintrag) => eintrag.id === zuLoeschendeSerieId);

    if (!serie) {
      zeigeFehler(loeschFehler, "Diese Serie wurde nicht gefunden.");
      return;
    }

    const zweiteBestaetigung = window.confirm(
      `Soll die Serie „${serie.name}“ endgültig gelöscht werden?`
    );

    if (!zweiteBestaetigung) {
      return;
    }

    const neueSerien = serien.filter((eintrag) => eintrag.id !== serie.id);

    if (!speichereSerien(neueSerien)) {
      zeigeFehler(loeschFehler, "Serie konnte nicht gelöscht werden. Bitte prüfe den Browserspeicher.");
      return;
    }

    serien = neueSerien;
    zeigeSerien();
    serienStatus.textContent = `Serie ${serie.name} gelöscht.`;
    loeschDialog.close();
  });

  if (ladeSerien()) {
    zeigeSerien();
  }
}

starteSerienVerwaltung();
