importScripts('/dapper-todo/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/dapper-todo/_nuxt/05b74cb98227c10088a6.js",
    "revision": "d88a138e3455bb173285cd97374579f7"
  },
  {
    "url": "/dapper-todo/_nuxt/1af6cace8a28dafee0e8.js",
    "revision": "13227ee0d8044dd11869ada4781a05ab"
  },
  {
    "url": "/dapper-todo/_nuxt/2952cb5361dfee3151f2.js",
    "revision": "d15707c234c6f5b2287a063554db891d"
  },
  {
    "url": "/dapper-todo/_nuxt/9251b40562ed0a5335f9.js",
    "revision": "b2b908b07f102907ce8285b8bddde1fb"
  }
], {
  "cacheId": "list",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/dapper-todo/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/dapper-todo/.*'), workbox.strategies.networkFirst({}), 'GET')
