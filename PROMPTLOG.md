# Prompt-Log

> **Ihr KI-Journal.** Halten Sie hier **jeden** KI-Einsatz fest – kurz, aber ehrlich.
> Das Prompt-Log ist Teil der Bewertung. Am wichtigsten ist die letzte Zeile:
> **Was habe ich selbst geprüft, geändert oder verworfen?**
>
> **Modus:** Browser-Chat · Ask · Inline-Chat · Agent · Cloud-Agent
>
> Diese Datei schreiben Sie selbst – nicht die KI.

## Vorlage (kopieren für jeden neuen Eintrag)

```
### #N · Tag X
Ziel:      Was wollte ich erreichen?
Modus:     Welcher KI-Modus / welches Werkzeug?
Prompt:    (kurz, oder die wichtigste Zeile)
Ergebnis:  Was kam heraus – brauchbar?
Korrektur: Was habe ich geprüft, geändert, verworfen?
```

---

## Einträge

### #1 · Tag 1
Ziel:      Projektidee schärfen und vor dem Programmieren kritische Fragen klären
Modus:     Ask (Copilot Chat)
Prompt:    «Hier ist meine Projektidee aus SPEC.md: … Stelle mir 5 kritische Fragen, die ich vor dem Programmieren klären sollte. Schlage noch keine Lösung vor.»
Ergebnis:  5 Fragen erhalten: Speicherung, Navigation zwischen Karten, Bearbeiten/Löschen, leere Kartenliste, Zählung «gewusst».
Korrektur: Erster Prompt war ohne Kontext und lieferte nur allgemeine Fragen. Danach SPEC.md ausgefüllt und den Prompt mit dem vollständigen SPEC-Text wiederholt. Die 5 Fragen beantwortet und in SPEC.md unter «Offene Fragen» eingetragen. Kategorien als Frage verworfen, weil nicht im Umfang von v0.

### #2 · Zusammenfassung der bisherigen Entwicklung
Ziel:      Lernfunke schrittweise zu einer Lernkarten-App ausbauen.
Modus:     Copilot Chat / Agent in VS Code
Prompt:    Serien und Karten verwalten, verschiedene Lernmodi ergänzen und Backups ermöglichen.
Ergebnis:  Die App wurde mit HTML, CSS und Vanilla JavaScript umgesetzt. Serien und Karten können erstellt, bearbeitet und gelöscht werden. Karten unterstützen optionale Definitionen und Fotos. Daten und Lernfortschritt werden im localStorage gespeichert. Es gibt drei Lernmodi: Karteikarten, Antworten schreiben und umgekehrte Karten. Die Karten erscheinen zufällig; Fotos werden vor der Antwort gezeigt und schwierige Karten können wiederholt werden. Die Oberfläche bleibt auf Deutsch; ein Wechsel zwischen Deutsch und Italienisch wurde vorerst zurückgestellt. JSON-Backups lassen sich für das gesamte Archiv oder einzelne Serien exportieren und importieren. Importe werden geprüft; das Ersetzen des Archivs oder einer bestehenden Serie muss bestätigt werden. SPEC.md wurde ergänzt.
Korrektur:  Die KI hat Syntax- und Browserprüfungen durchgeführt, auch für Lernmodi, Backups, ungültige Dateien und mobile Darstellung. Eigene Prüfung oder Änderungen: [hier selbst ergänzen].