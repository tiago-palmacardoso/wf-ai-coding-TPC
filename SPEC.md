# Lernkarten-App

## Idee
Eine App, mit der ich Lernkarten für Prüfungen erstellen und abfragen kann.

## Für wen
Für mich und meine Mitstudierenden, beim Lernen zu Hause oder unterwegs.

## User Stories
- Als Nutzer:in möchte ich Lernkarten mit Frage und Antwort erfassen, damit ich meinen Stoff sammeln kann.
- Als Nutzer:in möchte ich die Karten in zufälliger Reihenfolge durchgehen, damit ich nicht nur die Reihenfolge auswendig lerne.
- Als Nutzer:in möchte ich eine Karte als «gewusst» oder «noch nicht gewusst» markieren, damit ich sehe, was ich wiederholen muss.
- Als Nutzer:in möchte ich den aktuellen Fortschritt sehen (z. B. 7 von 10 gewusst), damit ich meinen Lernstand einschätzen kann.
- Als Nutzer:in möchte ich meine Karten behalten, wenn ich die Seite neu lade, damit ich nicht alles neu eingeben muss.

## Datenmodell
// Objekt: Lernkarte · Zweck: Lernen mit Frage und Antwort
{
  frage: "Was ist die Hauptstadt der Schweiz?",
  antwort: "Bern",
  gewusst: false
}

## Datenkarte
| Frage | Meine App |
| --- | --- |
| Welche Daten gibt es? | Lernkarten mit frage, antwort, gewusst |
| Welche Eingaben braucht es? | Frage und Antwort beim Erfassen; Klick auf «gewusst» / «nicht gewusst» |
| Welche Entscheidungen werden getroffen? | Ist die Antwort richtig? Wurde «gewusst» geklickt? Gibt es noch Karten? |
| Was wird wiederholt? | Durchgehen aller Karten; Zufallsreihenfolge |
| Was ist der Zustand? | Liste der Karten, aktuelle Karte, Anzahl gewusst |
| Welche Ausgabe entsteht? | Frage, Antwort, Fortschritt «7 von 10 gewusst» |

## Offene Fragen
1. Wo werden die Karten gespeichert, wenn die Seite neu geladen wird?
   Antwort: Im Browser-Speicher (localStorage) als JSON. Keine Datenbank, kein Server.

2. Wie wechselt man zwischen den Karten?
   Antwort: Ein «Weiter»-Button zeigt die nächste Karte. Die Antwort erscheint erst nach Klick auf «Antwort zeigen». Am Ende: «Durchgang beendet» + «Neu starten».

3. Sollen Karten bearbeitet oder gelöscht werden können?
   Antwort: Löschen ja, mit Bestätigung. Bearbeiten kommt später, nicht in v0.

4. Was passiert, wenn keine Karten vorhanden sind?
   Antwort: Hinweis «Noch keine Karten – erste Karte erfassen» + Button «Neue Karte». Keine leere Seite.

5. Wie wird «gewusst» gezählt?
   Antwort: Anzahl «gewusst» / Gesamtzahl, angezeigt als «7 von 10 gewusst». Eine Karte zählt einmal pro Durchgang.

## Nicht im Umfang
- Keine Benutzerkonten oder Anmeldung.
- Keine Cloud-Synchronisation.
- Keine Bilder oder Audiodateien.
- Keine Kategorien in v0.
- Keine Auswertung über mehrere Lern-Sessions.