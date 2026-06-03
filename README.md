# SMILE

Korruptes Archiv-Terminal — ein mehrseitiges ARG/Horror-Puzzle rund um die
Droge **SMILE**.

Dieses Repo ist **doppelt nutzbar aus einer einzigen Quelle**:

1. **Website** — gehostet über GitHub Pages:
   <https://orchidsentinel.github.io/Smile/>
2. **FiveM-Resource** — dasselbe Terminal als In-Game-NUI-Overlay.

Die HTML/CSS/JS-Dateien werden von beiden Zielen unverändert verwendet. Es gibt
keinen separaten Build und keine geforkten Seiten.

## Website (GitHub Pages)

Wird aus `main` (Root `/`) ausgeliefert. `.nojekyll` sorgt dafür, dass alle
Dateien statisch und ohne Jekyll-Verarbeitung serviert werden.

Einstieg: `index.html` → Passwort-Kette über `archive1.html` … `archive6.html`.
Versteckte `:)`-Links führen auf `smile.html`.

## FiveM-Resource

Resource-Name: **`Smile`** (Ordnername in `resources/`).

```cfg
# server.cfg
ensure Smile
```

In-Game:

- `/smile` oder **F7** öffnet das Terminal
- **ESC** schließt es

Wie es zusammenpasst:

| Datei            | Rolle                                                              |
| ---------------- | ----------------------------------------------------------------- |
| `fxmanifest.lua` | Resource-Manifest, `ui_page index.html`, listet alle NUI-Dateien  |
| `client.lua`     | `/smile`-Command, Keymap, NUI-Fokus, `close`-Callback, Exports    |
| `server.lua`     | Platzhalter / Erweiterungspunkt (z. B. Zugriffslogging)           |
| `nui.js`         | Glue: steuert Sichtbarkeit + ESC im Spiel, **No-op** im Browser   |

`nui.js` erkennt zur Laufzeit, ob es in der FiveM-NUI (CEF) läuft. Im normalen
Browser (GitHub Pages) bricht es sofort ab — die Seite verhält sich exakt wie
zuvor. Im Spiel bleibt das Overlay über die Archiv-Navigation hinweg sichtbar
(`sessionStorage`-Flag) und schließt sauber per ESC.

### Andere Resources können das Terminal öffnen

```lua
exports['Smile']:openSmileTerminal()
exports['Smile']:closeSmileTerminal()
```

z. B. an einem benutzbaren Laptop-/Computer-Prop.
