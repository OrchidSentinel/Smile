-- SMILE — server side
-- No server logic is required for the standalone ARG terminal. This file is a
-- placeholder so the resource has a clear extension point (e.g. logging which
-- player reached the final archive, or gating access behind an item).

AddEventHandler('onResourceStart', function(res)
    if res == GetCurrentResourceName() then
        print('^5[SMILE]^7 Terminal-Resource gestartet. Im Spiel: /smile (oder F7).')
    end
end)
