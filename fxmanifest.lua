fx_version 'cerulean'
game 'gta5'

author 'OrchidSentinel'
description 'SMILE — corrupted archive terminal (NUI ARG)'
version '1.0.0'

-- NUI entry point. These are the exact same files served by GitHub Pages
-- (https://orchidsentinel.github.io/Smile/), so the website and the in-game
-- terminal stay in sync from one source.
ui_page 'index.html'

files {
    'index.html',
    'smile.html',
    'archive1.html',
    'archive2.html',
    'archive3.html',
    'archive4.html',
    'archive5.html',
    'archive6.html',
    'style.css',
    'script.js',
    'nui.js',
}

client_script 'client.lua'
server_script 'server.lua'
