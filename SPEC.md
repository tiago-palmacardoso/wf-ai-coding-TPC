# Lernkarten-App

## Idee
Eine App, mit der ich Lernserien zu verschiedenen Sprachen und Themen anlegen und darin Lernkarten für Prüfungen erstellen und abfragen kann.

## Für wen
Für mich und meine Mitstudierenden, beim Lernen zu Hause oder unterwegs.

## User Stories
- Als Nutzer:in möchte ich Lernserien mit einem Namen anlegen, bearbeiten und löschen, damit ich meine Karten nach Sprache und Thema ordnen kann.
- Als Nutzer:in möchte ich Serien erst nach einer doppelten Bestätigung löschen, damit ich sie nicht versehentlich entferne.
- Als Nutzer:in möchte ich den Lernfortschritt jeder Serie sehen, damit ich weiss, wie viele Karten ich schon gewusst habe.
- Als Nutzer:in möchte ich eine Serie öffnen und Lernkarten mit Begriff, Übersetzung, optionaler Definition und optionalem Foto erfassen, damit ich meinen Stoff sammeln kann.
- Als Nutzer:in möchte ich einzelne Lernkarten bearbeiten, damit ich ihre Inhalte korrigieren oder ergänzen kann.
- Als Nutzer:in möchte ich einzelne Lernkarten nach einer Bestätigung löschen können, damit ich nicht mehr benötigte Karten entfernen kann.
- Als Nutzer:in möchte ich im Bereich «Lernen» eine Serie auswählen und starten können, damit ich den passenden Lernstoff vorbereiten kann.
- Als Nutzer:in möchte ich zwischen Karteikarten, eigener Antwort und umgekehrten Karten wählen, damit ich auf verschiedene Arten üben kann.
- Als Nutzer:in möchte ich die Karten in zufälliger Reihenfolge durchgehen, damit ich nicht nur die Reihenfolge auswendig lerne.
- Als Nutzer:in möchte ich eine Karte als «gewusst» oder «noch nicht gewusst» markieren, damit ich sehe, was ich wiederholen muss.
- Als Nutzer:in möchte ich am Ende die schwierigen Karten erneut üben, damit ich sie direkt noch einmal abrufen kann.
- Als Nutzer:in möchte ich den Fortschritt einer Serie sehen (z. B. 7 von 10 gewusst), damit ich meinen Lernstand einschätzen kann.
- Als Nutzer:in möchte ich meine Karten behalten, wenn ich die Seite neu lade, damit ich nicht alles neu eingeben muss.
- Als Nutzer:in möchte ich alle Serien oder eine einzelne Serie als JSON-Datei exportieren und später importieren können, damit ich meine Karten sichern und wiederherstellen kann.

## Datenmodell
// Objekt: Lernserie · Zweck: Lernkarten nach Sprache und Thema ordnen
{
  id: "serie-...",
  name: "Deutsch – Tiere",
  karten: []
}

// Objekt: Lernkarte · Zweck: Begriff und Antwort lernen
{
  id: "karte-...",
  frage: "Was ist die Hauptstadt der Schweiz?",
  antwort: "Bern",
  definition: "",
  bild: "",
  gewusst: false
}

## Datenkarte
| Frage | Meine App |
| --- | --- |
| Welche Daten gibt es? | Lernserien mit id, name und karten; Lernkarten mit frage, antwort, optionaler definition und bild sowie gewusst |
| Welche Eingaben braucht es? | Serienname; Begriff/Frage und Übersetzung/Antwort; optional Definition und Foto; Lernmodus; Klick auf «Gewusst» / «Noch nicht gewusst» |
| Welche Entscheidungen werden getroffen? | Wurde die Karte als gewusst bewertet? Gibt es noch Karten? |
| Was wird wiederholt? | Karten einer Serie in Zufallsreihenfolge; am Ende erneut die schwierigen Karten |
| Was ist der Zustand? | Liste der Serien und Karten, aktuelle Karte, Anzahl gewusst |
| Welche Ausgabe entsteht? | Serienliste mit Fortschritt pro Serie, Frage und Antwort |

## Offene Fragen
1. Wo werden die Karten gespeichert, wenn die Seite neu geladen wird?
   Antwort: Serien, Karten und verkleinerte Fotos werden im Browser-Speicher (localStorage) als JSON gespeichert. Keine Datenbank, kein Server.

2. Wie wechselt man zwischen den Karten?
   Antwort: Bei Karteikarten erscheint die Antwort erst nach Klick auf «Antwort anzeigen». Im Schreibmodus wird zuerst eine eigene Antwort eingegeben. Danach wird die Karte als gewusst oder schwierig bewertet. Am Ende können die schwierigen Karten erneut geübt werden.

3. Sollen Serien und Karten bearbeitet oder gelöscht werden können?
   Antwort: Serien können hinzugefügt und bearbeitet werden. Vor dem Löschen gibt es zwei Bestätigungen. Karten können hinzugefügt, bearbeitet und nach einer Bestätigung gelöscht werden.

4. Wie beginnt man einen Lerndurchgang?
   Antwort: Im Bereich «Lernen» werden zuerst eine Serie und dann ein Lernmodus ausgewählt. Zur Wahl stehen Karteikarten, Antwort schreiben und umgekehrte Karten. Die Karten erscheinen in zufälliger Reihenfolge; schwierige Karten können am Ende erneut geübt werden.

5. Was passiert, wenn keine Karten vorhanden sind?
   Antwort: Hinweis «Noch keine Karten – erste Karte erfassen» + Button «Neue Karte». Keine leere Seite.

6. Wie wird «gewusst» gezählt?
   Antwort: Pro Serie: Anzahl «gewusst» / Gesamtzahl, angezeigt als «7 von 10 gewusst». Eine leere Serie zeigt «0 Karten» und einen leeren Fortschrittsbalken.

7. Wie werden JSON-Backups importiert?
   Antwort: Ein Archiv-Backup ersetzt nach Bestätigung alle Serien. Ein einzelnes Serien-Backup wird anhand der Serien-ID hinzugefügt oder ersetzt. Ungültige Dateien werden abgelehnt; das automatische Speichern im Browser bleibt die Hauptspeicherung.

## Nicht im Umfang
- Keine Benutzerkonten oder Anmeldung.
- Keine Cloud-Synchronisation.
- Keine Audiodateien.
- Keine zusätzlichen Kategorien oder Unterordner innerhalb einer Serie.
- Keine Spiele in v0.
- Keine Auswertung über mehrere Lern-Sessions.