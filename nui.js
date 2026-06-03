/*
 * SMILE — NUI glue.
 *
 * Dual purpose by design:
 *   - In FiveM (NUI / CEF): toggles the terminal overlay and closes on ESC.
 *   - On GitHub Pages (plain browser): detects no FiveM runtime and returns
 *     immediately, so the site behaves exactly like a normal website.
 *
 * The same files therefore serve both https://orchidsentinel.github.io/Smile/
 * and the in-game resource without any forking of the HTML.
 */
(function () {
  'use strict';

  // FiveM NUI exposes invokeNative / GetParentResourceName. A normal browser
  // (GitHub Pages) has neither -> bail out and leave the page fully visible.
  var isFiveM =
    typeof window.invokeNative !== 'undefined' ||
    typeof window.GetParentResourceName === 'function';

  if (!isFiveM) {
    return; // GitHub Pages path: no-op.
  }

  var resourceName =
    typeof window.GetParentResourceName === 'function'
      ? window.GetParentResourceName()
      : 'Smile';

  var root = document.documentElement;

  function show() {
    root.style.display = '';
    try { sessionStorage.setItem('smileOpen', '1'); } catch (e) {}
  }

  function hide() {
    root.style.display = 'none';
    try { sessionStorage.removeItem('smileOpen'); } catch (e) {}
  }

  // Keep the overlay visible across in-NUI navigation (index -> archive1 ...).
  // Each archive page is a fresh load; sessionStorage remembers we're "open".
  var wasOpen = false;
  try { wasOpen = sessionStorage.getItem('smileOpen') === '1'; } catch (e) {}
  if (!wasOpen) {
    root.style.display = 'none';
  }

  function requestClose() {
    hide();
    fetch('https://' + resourceName + '/close', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: '{}',
    }).catch(function () { /* ignore — Lua side already handles focus */ });
  }

  // Lua -> NUI messages (SendNUIMessage from client.lua).
  window.addEventListener('message', function (ev) {
    var data = ev.data || {};
    if (data.action === 'open') {
      show();
    } else if (data.action === 'close') {
      hide();
    }
  });

  // ESC closes the terminal in-game.
  window.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' || ev.keyCode === 27) {
      requestClose();
    }
  });
})();
