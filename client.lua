-- SMILE — client side
-- Opens the ARG terminal as an NUI overlay. The HTML/CSS/JS are identical to
-- the GitHub Pages site; nui.js handles show/hide + ESC inside the game.

local isOpen = false

local function openTerminal()
    if isOpen then return end
    isOpen = true
    SetNuiFocus(true, true)
    SendNUIMessage({ action = 'open' })
    -- Ped hält sichtbar ein Tablet (bablo-animations: "tablet2").
    exports['bablo-animations']:playAnimation(PlayerPedId(), 'tablet2')
end

local function closeTerminal()
    if not isOpen then return end
    isOpen = false
    SetNuiFocus(false, false)
    SendNUIMessage({ action = 'close' })
    -- Tablet-Animation wieder beenden.
    exports['bablo-animations']:cancelAnimation()
end

-- /smile — open the terminal
RegisterCommand('smile', function()
    openTerminal()
end, false)

-- /smileclose — fallback close from console/keybind
RegisterCommand('smileclose', function()
    closeTerminal()
end, false)

-- Suggested keybind: open with F7 (players can rebind in pause menu).
RegisterKeyMapping('smile', 'SMILE Terminal öffnen', 'keyboard', 'F7')

-- NUI -> Lua: the page asks to close (ESC pressed in nui.js).
RegisterNUICallback('close', function(_, cb)
    closeTerminal()
    cb({ ok = true })
end)

-- Beim Start: NUI verstecken und sessionStorage zurücksetzen (CEF kann es über Restarts behalten).
AddEventHandler('onResourceStart', function(res)
    if res == GetCurrentResourceName() then
        isOpen = false
        SetNuiFocus(false, false)
        SendNUIMessage({ action = 'close' })
    end
end)

-- Safety: always release focus if the resource stops while open.
AddEventHandler('onResourceStop', function(res)
    if res == GetCurrentResourceName() then
        SetNuiFocus(false, false)
    end
end)

-- Export: wird von ox_inventory aufgerufen wenn das Item 'smile_terminal' benutzt wird.
-- Kann auch von anderen Resources direkt genutzt werden.
exports('openSmileTerminal', openTerminal)
exports('closeSmileTerminal', closeTerminal)
