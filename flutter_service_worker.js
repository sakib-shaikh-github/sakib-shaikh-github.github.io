'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bd3f98caf0bef7f5b8769647868b9539",
".git/config": "52e482c1ce59d581fa2558f29e7e0226",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "869615f3ebf9c791acaae58841851df3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "168a10c616db15008edd6ff51ae89731",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a38655a096ce4d7a75ff534e8d82fc9e",
".git/logs/refs/heads/main": "21dbb739defc2d6ccf382b93bf84afae",
".git/logs/refs/remotes/origin/main": "ee1a3297e5a47787228fab35cf21c699",
".git/objects/00/5f3ed6a4afb3d7a113464ef4a5ebdc3a213793": "403f148fa1168562aa818d72686372b6",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/03/1222d0b0153a15204036c1f758829dccf54515": "d1d3f0dc752c57507626da61426f18f3",
".git/objects/08/571d47d7d4b359111ca4eac9be00350741ca4a": "60172ef59a4e563cbfe57b9a786e5fed",
".git/objects/0b/aacae476f716dc1c5fe037e4b78189fba60711": "6215c9715a3a8050ac075146a39712ae",
".git/objects/0d/838dad10c0cb5d73101c9beee550c49c6d6152": "3adad36314910f85ea919dd0c726b543",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/0f/49e1400dc44670504ec7657ee063a981589f94": "31f2683b97ad79593389399e56e6fb46",
".git/objects/10/654770cfbb42da28a1827cfa36f19bb58d7d45": "6e42729dd2e3d8a3a31a75e5bdf9ebba",
".git/objects/15/1ba7cca06198b0ab84c837842d4695ea29896a": "335008ed1c48f1e37110e55749a8b948",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/f20363b20c6959427a6f9f6d3b03af52aa28c9": "5b0af7a4ff3757e529b2d635798a76fe",
".git/objects/25/39b7c7ef83f0b0345bc8d9df8e3ce103e6de5e": "1b5f727bb42417f8e29680e342085019",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/3c/7404b455dbdac9760ad7b7bd4f83b7b3b4854f": "037f12230e4197a8c12899ed5be115eb",
".git/objects/3d/c1c77e901a4350cb7e1ed585fbf5807d651a29": "12551a725afbf1b8dfb187ea8ad86d6d",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/45/65a2a7c8b8c7d3dbed540a3e14d8cefe5eba72": "81f7a02cbd7ee155bb93baba4bc7e59b",
".git/objects/46/b2a51d438ad1135f526ff4a8f72f9f01d34526": "67c62ae80349d8e5268bfa80ff4962fd",
".git/objects/4c/8f45972ebbcf30e51b6cdfb9c28c7176d98bc4": "57593a4aab89302ac689240d682b63f0",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/51/f38a71072fb136d9aae2fffefc007aaf6c208f": "7acfa29fdf0c7ff23e01111e464c86b5",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/55/ea999e22a1ab790e5323b3f4fe8bd4f93586f5": "90d42965ac021e3c6f94a4ee27a98874",
".git/objects/56/77da39bf41c7ddce8f1c30fad56385dd08e900": "6049c512ca6acf4a60318e22a648d659",
".git/objects/59/c0e42d869ed0c506d3e9fa3ad87cfe7bfc8d14": "0eddc163de37c4dc81ce7971e42fad0f",
".git/objects/59/f4fa8c9461a879642a7509e08cf27b15905ddb": "7696a6049f0b685b5c13528de05a6921",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6d/f511cea4c51040f66710502edf48eeff9f7912": "3b044e1e45ffbbbfe21bb383f4476b15",
".git/objects/6e/faf6d6ca11be84f1d24f622c7e882d9abd9497": "a209440ca9e812791d130593e38f75e1",
".git/objects/6f/e3c1db97ba31da42744aeaa08b9d6f5063dfee": "4a0775a6a105664df6fdbe4c64e05767",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/77/eb13e5d919096ad393956e7f6d932bbe37ad49": "97e1f496653b6ec0a4ff3dcb77950c18",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/06e715382985dc3202327bf04de254e6069bbe": "f17ab10e0a02afdeeaba1680a59a7556",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/5caa5f2a7fca69a4ea067a99254a0e9bc9a2e6": "9c2cc00dd7db9ed4c7929c4170acc469",
".git/objects/8c/f4e24ba436efa556abe629a1f66e592210aa07": "7ea5fc22b94ead7eb9a258a9770bc4d6",
".git/objects/91/41a2c14f850dd9a4e6b3724c6d9a3c44035ee2": "a04c446ae4ef9acf993c0a2ff6b30eee",
".git/objects/92/6b0befe16b571d18dc3e1dafbd609e61be2307": "d4e92479f2597dc3cbb048824089e66f",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9c/25709060949d12bd46f859e814fa21ea711403": "e2fdfcc76456b4a7f7930671adb49430",
".git/objects/9d/8b49c06340cb9abf8a04bb9af416f5df935f4e": "3e48550b88c9588c4c5ffb51a24a5b49",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b6/eabc47627497d02fbdad5a9549f6c8576cf4e8": "6b3c5029227bf5912d60f00818dc57e6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/0be174bfd4887012458257096ce0829329fd51": "ea31b89f18aa026dc2498a6ac80ca4b4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/1afb0242f707f08018bdcf47322a217e3a268e": "f5e42cb22c666ab18abe05e92c323a2c",
".git/objects/c4/e7505eb8364b606106be0c9348afd021da3b16": "a821708b31403d64f370b324e2f4da70",
".git/objects/c6/34a12abcecf9eb13ad5b9d06a5ebcbace129d0": "4f9723c052559f3d46d905dacd346176",
".git/objects/c8/9e0caa86482ca5659aa6a4fca1e4dbc1b9d82c": "234c08e832e7b1a27f770cd5829b80dd",
".git/objects/ca/285a439242bc6bfdb23b01e08f66fa78c62e25": "67bfb89e56b028a31f96018f7ab61f25",
".git/objects/d2/827c6e99618e3d804b8e2629942f17190d00dc": "4faf44146781839e8f095c5968bbfd2b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/4cec7a6d77ac55deae9bbc1b0ca243f0f727f6": "abbd9ae71471eb07b5791b2e520fdbc0",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/794112ff3945f150c62fa51c1904ff7bfec0c8": "f8adc32e2fd8556c040e8a5938abe073",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/569c86cc76c37f35683ce6c44ba07270a37d9f": "03e23f13d469860a949d374186935aa2",
".git/objects/f7/0c21ed8c7e43fccd696bca638bb3106a165774": "2d43e7eff37035e3fde406b94a6a2dba",
".git/objects/f7/eaf61e2d736d490bb4e8b6aa593e217fadb956": "7f0fdcb7eebfad2a793b4e49c88ed3d9",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/39d69534d1fdbc1013172e8e9021fb72a3e833": "c7a810f9adb75050f7137dcade0c0552",
".git/objects/fe/8be086f61fc484628a23d67a1d9da718f07ac4": "5012dd0246ce40596b66814dd150f99d",
".git/ORIG_HEAD": "ce5803908b1f189ef8151a90448c6b8b",
".git/refs/heads/main": "5d01adb43751a223b05e9628c5b98e83",
".git/refs/remotes/origin/main": "5d01adb43751a223b05e9628c5b98e83",
"assets/AssetManifest.bin": "15c88cf212ff535047cd59286ad915ca",
"assets/AssetManifest.json": "3af42e860ce05ffa9e66b44270c773bb",
"assets/assets/needu/image_1.png": "f34fa8624d18ed8762b9e596aac0e303",
"assets/assets/needu/logo.jpg": "3f971c1c196a513e528e631d767a7247",
"assets/assets/offerzhub_image/image_1.png": "33e356308f519bb2e1290e601c991bae",
"assets/assets/offerzhub_image/text_image.png": "09d4facfdd54fc822c8530ec6904355d",
"assets/assets/subtleai_image/logo.jpg": "82b4ef22bf6b5d70558d84f1a50d5bd9",
"assets/assets/subtleai_image/text_image.png": "82433534e28d878de70df341f2be7159",
"assets/assets/zenmode/logo.jpg": "eb0178e781ac761286b52ac026779d43",
"assets/assets/zenmode/text_image.png": "74a1da3c2baa7c51881f8d42cab696e4",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "eaf6651f71f11ea43d5fc8527e5d7ede",
"assets/NOTICES": "f499f8a39ad88c14dc58399cd660b281",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e665c7ee057032ef10b6094336e633d2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"CNAME": "6ea57843ce0f9c4947d49b83635475fa",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "86a1e1463e7ed0fc2135d250d5a7a2ed",
"/": "86a1e1463e7ed0fc2135d250d5a7a2ed",
"main.dart.js": "246a9eb72e8f7e19621ada9f635f5a11",
"manifest.json": "a78c994351faa00a65faca243c3e9554",
"version.json": "6649d3a53593992c240e0876a67c45eb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
