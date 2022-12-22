'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b938b801a0bfbd5ca4825715039e7574",
".git/config": "72b1454c22650a16ecb7e31ef780d4a4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "10a8c42cd61729839d1111615f48097f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3bf5910e696e40ebea10f19b472c4799",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f3941e7fb94962ede7129b369036f716",
".git/logs/refs/heads/main": "f3941e7fb94962ede7129b369036f716",
".git/logs/refs/remotes/origin/HEAD": "099ac9951e1946fb059391bc8e10b1e6",
".git/logs/refs/remotes/origin/main": "eb1a2026e81748745a29509ab0c20c85",
".git/objects/10/484ddf020318a588bc641d43bda15e3641881a": "9a0627d9d17a4da774cf042c9757cf93",
".git/objects/16/78554b3003fda52866471298942a77dedb4351": "d3356c873039812ae41813229085dc92",
".git/objects/1a/f14eca8b4b04b52c260ce16d118da199d55a13": "415f8e32d30d7c427eba0a1614869ea0",
".git/objects/23/ab64c359af6b3d11325817995301a1baf3a41e": "3722468f8283e4bd3f20d8305058fa62",
".git/objects/26/72d821b51eb432abc105307c2fbaf67589d121": "9147fef2d025f0e064aee42dc0622d54",
".git/objects/34/1bc7a8d1a533252c71399404f2466b7472546b": "20b0a9a3a45c3139e773e8b30b6643ad",
".git/objects/3d/70c089dca256ccf01f6260d0c34c38d76c74dc": "5184e523a121c2541c6f2f708a58d338",
".git/objects/4a/afd7bbf0594c7bb2c20c61d5a72a6351d66775": "c497f8abd5ea534f0d6bb3a4a43cbd91",
".git/objects/52/50c398767e8597699134f2d0f6851d36ee5d63": "ae7ddcb414cc28e3a35f8b8caa13dd1d",
".git/objects/58/5959008a6b61905a661cdef607bd0562578071": "606fc104aa053d973bbe20172c69c431",
".git/objects/67/61eb7940d1f75f73a7645f2b0d88f9e41a2dba": "9e11dcef9c096aadbfaececd78d490db",
".git/objects/96/2d0df7baaab55859a728ffdffe94d13e42f031": "8da4a41caf601793683eced15b43e1b8",
".git/objects/a2/af29264cb687ee1b05ad3875b2a1cafe8ede04": "1008170f9a0606808751d6331966de20",
".git/objects/a3/6d7f16f86846fee9152ed64b7c9cbc29d96bad": "315c475500868b24b5d5960cb9da4e8e",
".git/objects/b7/415b9a18362596e9118502835c8f93e3a69018": "9082396a1b60be04e094278f3b924f16",
".git/objects/ba/bf33e570747faf0e08e125a8748681c121d26b": "e83022ae2492a7d5f2349d81d28fd6c0",
".git/objects/c4/d42ef8bb3e1142e370ff0e87a811341dba59b4": "8161aa5d8858285fb27f527a2a18cc90",
".git/objects/d1/0fd56be902387a67d8b90a56100bb3a5d2e113": "d746d6b77c8a19753c939f091a25672e",
".git/objects/e9/f4f8ee4ac8b1d4f3407eaf7760ea946ddcbf34": "bee8023c97e27db20c1f2fc1bf5a65e2",
".git/objects/f2/ad1775c1624a208cf6c8b8069ad673aa966787": "6a145efce8b1ce092ade4e02aa104b0c",
".git/objects/pack/pack-d2c56985a06eb6dbf5254a27d59eb8495e83b0a2.idx": "a8a52e1dde38741d3b4879d0332aa2ed",
".git/objects/pack/pack-d2c56985a06eb6dbf5254a27d59eb8495e83b0a2.pack": "693d05d9cf54dc3839f35e57ca48269c",
".git/packed-refs": "6236193984f8a377f0837a3963839ee1",
".git/refs/heads/main": "8e564d31de322242c366dbd53403a2d2",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "8e564d31de322242c366dbd53403a2d2",
"assets/AssetManifest.json": "fed7bfc8bc6694f1e92e7f00aec186c9",
"assets/assets/fonts/NanumSquareNeo-aLt.ttf": "f0cc7ffd0d26ccaaa7db8844001a65ad",
"assets/assets/fonts/NanumSquareNeo-bRg.ttf": "f84e6e09495f535e8d7dbd649a6fff3a",
"assets/assets/fonts/NanumSquareNeo-cBd.ttf": "2fae8f78c180bb5900b83b7b1edae9a5",
"assets/assets/fonts/NanumSquareNeo-dEb.ttf": "4f1c8d2afbeb99741486250e24139822",
"assets/assets/fonts/NanumSquareNeo-eHv.ttf": "5343dd4c7ae09bbf51e2019e5999406c",
"assets/FontManifest.json": "d60b76397a6fc11b103caa684a988cca",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "98b750d8c5371aabb59306c1eda41406",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2f01bb090981ed0d34ac478d3a23f16f",
"/": "2f01bb090981ed0d34ac478d3a23f16f",
"main.dart.js": "1ab4dd0e791dceb520e20be9ad9601c3",
"manifest.json": "76d686f9c4b6312640f5b7092e965d98",
"README.md": "7e1c8ad6c737e9bcc9c084b253f8fe4a",
"version.json": "860efdb38745025f531177d5b63023e2"
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
