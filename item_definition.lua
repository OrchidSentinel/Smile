-- ══════════════════════════════════════════════════════════════════════════════
--  SMILE – ox_inventory Item-Definition
--
--  Diese Datei wird NICHT von FiveM geladen. Sie dient als Referenz-Kopie
--  des Items, das in ox_inventory/data/items/testing.lua eingetragen ist,
--  damit die Definition dauerhaft im Repository erhalten bleibt.
--
--  Eintragen in: ox_inventory/data/items/testing.lua
--  Client-Export: Smile.openSmileTerminal  (→ client.lua)
-- ══════════════════════════════════════════════════════════════════════════════

['smile_terminal'] = {
    label       = 'SMILE Terminal',
    weight      = 300,
    stack       = false,
    close       = true,
    consume     = 0,
    description = 'Ein korrumpiertes Archiv-Terminal. Was auch immer es enthält, es will gefunden werden.',
    client = {
        export = 'Smile.openSmileTerminal',
    },
},
