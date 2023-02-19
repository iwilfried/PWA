'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "62ffcea499b2a1be363888b3b1c83682",
"assets/assets/images/backLandscape.png": "646e7eac9d332808b40f245d4747f89a",
"assets/assets/images/backPortrait.png": "1cd68e1409b7b0d7fe69362912f3f7ef",
"assets/assets/images/Graphik.png": "b034d785f0a5b6a1b23470443d49b8d5",
"assets/assets/images/icon-01.png": "f6ca4485e60cf865050ecefee5ba4aa5",
"assets/assets/images/icon-02.png": "64bc01c5015c75cb9f7e04e6eeae47d1",
"assets/assets/images/icon-03.png": "ab89192fddbcc6e8d025368e270f4b95",
"assets/assets/images/icon-04.png": "033a69e22ebf0389247b3b403e9b8d42",
"assets/assets/images/slideone.png": "bbd679eb4033b20188c0e64a7bf9ee16",
"assets/assets/images/view.png": "9a7c4c2d24035cb810445928351bf749",
"assets/assets/slides.json": "62aff345c102cfa10b7969677507e81c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "feeebee5990ae0b1d5f514c3fbf647a4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/android-icon-144x144.png": "03f6f1729468e7c3f9f2a107877b8139",
"icons/android-icon-192x192.png": "ee397926e5e53f4d99374e50c9bc92d3",
"icons/android-icon-36x36.png": "03d16d0a6121b4810351fe5a9ec634eb",
"icons/android-icon-48x48.png": "4abc29832093b07281a1f7e0fe07beaa",
"icons/android-icon-72x72.png": "35809b8898e5cf29a6337a09df9b872e",
"icons/android-icon-96x96.png": "3066cb75fd95a552cab3ec547a4ec844",
"icons/apple-icon-114x114.png": "e65c64a32a842e93d43409aeb48e575d",
"icons/apple-icon-120x120.png": "21b2a11759b826b066b0ae100bc55f3a",
"icons/apple-icon-144x144.png": "03f6f1729468e7c3f9f2a107877b8139",
"icons/apple-icon-152x152.png": "a765472b4771a8cc2b6af30c86796f03",
"icons/apple-icon-180x180.png": "2b2e11466270a21690c87b4e2e745c15",
"icons/apple-icon-57x57.png": "5befcd59bb4af2d4555066d1c898ae55",
"icons/apple-icon-60x60.png": "7e03c9b90245ee9bcfb79a3f6ae5b65f",
"icons/apple-icon-72x72.png": "35809b8898e5cf29a6337a09df9b872e",
"icons/apple-icon-76x76.png": "df2bc0882d0f5c84d6258992b7fae366",
"icons/apple-icon-precomposed.png": "5f3c0684dd03070d49dc5c8e9ad27949",
"icons/apple-icon.png": "5f3c0684dd03070d49dc5c8e9ad27949",
"icons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"icons/favicon-16x16.png": "7136ac189b2aa30feba4442f4368674b",
"icons/favicon-32x32.png": "8dff3148193f0ffbd65478e225d51b2d",
"icons/favicon-96x96.png": "3066cb75fd95a552cab3ec547a4ec844",
"icons/favicon.ico": "04e45f0b93f90147ff702f2e37a6ee05",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"icons/ms-icon-144x144.png": "03f6f1729468e7c3f9f2a107877b8139",
"icons/ms-icon-150x150.png": "b684498d952626f622e8024d15c5db19",
"icons/ms-icon-310x310.png": "30b9a5f24428e5d5b0294a780bc86aa2",
"icons/ms-icon-70x70.png": "b13e4e127abdaa48552fe12b8670823d",
"index.html": "a38570b74d7b783980af69a3b378e5c9",
"/": "a38570b74d7b783980af69a3b378e5c9",
"main.dart.js": "9f2bdccdd87dbd395e2b1f851711da2a",
"manifest.json": "62cf925f33cc27fca5a0bf1dd9dda549",
"smallview.png": "9a7c4c2d24035cb810445928351bf749",
"version.json": "008324a713df2940544079f366790ef6",
"view.png": "986301085c4f0134ff2425234b8f5f6e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
