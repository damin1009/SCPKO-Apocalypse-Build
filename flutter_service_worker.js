'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5852bd71ce41e24f39f91b6a19e17986",
".git/config": "72b1454c22650a16ecb7e31ef780d4a4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "837f0f8cac6ed05f27bbe9fe4e57a8fc",
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
".git/index": "e9707faa0806e7a307c51e26e67eedfa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "00c1b807f9656f25a553e8a9ce1a7e91",
".git/logs/refs/heads/main": "00c1b807f9656f25a553e8a9ce1a7e91",
".git/logs/refs/remotes/origin/HEAD": "4d2d88d8671c516833098f670b7b0ae5",
".git/logs/refs/remotes/origin/main": "c64bf152e1bc1906c0b39717859c5e6b",
".git/objects/01/ed0399048037b8e71737e248c1d5eee91bc0a3": "574b0e22e807cc9ee1bb33e92be52e91",
".git/objects/03/42a90ac158b3aab8a8d296a0c8b8a43bff1e9b": "b491e88cb6ba0dd3c16bd102e8d70414",
".git/objects/03/876d1354a259f07e4556d7799744b164057586": "bbe3b83fa14f2a6303b755dacedd8bae",
".git/objects/08/1e5da4db04297d13b2ffce442d74cd9bc22bd3": "e376aaf7bde690393ce5283406738362",
".git/objects/0c/08f98bbf37d64821e8630a1d8cf73c288c9696": "e9164aafd14acc8ad32c191e0bd2a33d",
".git/objects/10/484ddf020318a588bc641d43bda15e3641881a": "9a0627d9d17a4da774cf042c9757cf93",
".git/objects/13/72d7e974ea128d0f2e6f58d883c929e23d7a06": "00d5b7eb9a2d6abce4c2e5304be3a846",
".git/objects/16/78554b3003fda52866471298942a77dedb4351": "d3356c873039812ae41813229085dc92",
".git/objects/1a/f14eca8b4b04b52c260ce16d118da199d55a13": "415f8e32d30d7c427eba0a1614869ea0",
".git/objects/1f/b210359d234eb13d6ad6f47a568b6c56dc9bc7": "a903a65f5d1727fdf61c24e0475075b8",
".git/objects/21/e9c29381b702a38975366f62da3a73f1700273": "b0a3d952d743dbd5a7ad32071a8c99b7",
".git/objects/22/ba9d4e8fbd8f0749ce713d7b640008f9afbd23": "28efe648a2a2c0b0334294b15192622b",
".git/objects/23/a5ad7e473b07df157d4ef5578efa880815973a": "f954f3cb743c4abbd338e822b6b4a00a",
".git/objects/23/ab64c359af6b3d11325817995301a1baf3a41e": "3722468f8283e4bd3f20d8305058fa62",
".git/objects/23/b684ea4e8d74e0ffed9d548f82611315f8725d": "4067ec03b7848c5b58d0179d1a824f56",
".git/objects/24/5b271ffeee99a4087d18f58abf7e58d401cbe1": "637a7b1e2b8da6e01a05180b722e99e6",
".git/objects/25/4524078ed7371f00de7af2df3167ad72b8da76": "21325854ecd74f90044b9b32059ebf1b",
".git/objects/26/3188b3424d8888871e07402b4ae366c15a978f": "99aaf5195bb5a1784f9bd0d3844b9cb2",
".git/objects/26/72d821b51eb432abc105307c2fbaf67589d121": "9147fef2d025f0e064aee42dc0622d54",
".git/objects/27/2f0d5aabcde5377213aad872729d4d9a763399": "01912834d3b4d5292ab46c88c191fdd8",
".git/objects/2e/3166a676fe462417fd725836421e2f5fd7657a": "9e35f62d9cc6bbe8eb60d164c4aaf841",
".git/objects/34/1bc7a8d1a533252c71399404f2466b7472546b": "20b0a9a3a45c3139e773e8b30b6643ad",
".git/objects/37/b8646d708a8b7db0e2d048b8e45ae53332813b": "80d012d97802be3d467bbef80219bbb8",
".git/objects/39/d016c69b0dfdca53e587c151b4df1cafd24815": "094ca07b24bd13ba998a0e88f661b4e9",
".git/objects/3b/134598e6b62486539448a9b5a135a3db6c4c2f": "863cf56cef34334e788d2bc85a5f730b",
".git/objects/3d/70c089dca256ccf01f6260d0c34c38d76c74dc": "5184e523a121c2541c6f2f708a58d338",
".git/objects/3e/0c49c54124d5e6f9ecfd2e313cb5fd2a6453b2": "044cc2d07edccbf90e31d4adcdab3b98",
".git/objects/3f/f8d20d18113add2a3e01c7d3a898dcb70f5514": "543374e15c9c28af221164bf5d382cdc",
".git/objects/40/ed91eb503ca14736526f04e4720a86e466900c": "35570920195ba3709bc2653025acf537",
".git/objects/49/3f2ebc6780aa90c32f8bc23288b4f6b13ed475": "a1d3a30d1b7eb69ef72a0d08b7c46421",
".git/objects/4a/afd7bbf0594c7bb2c20c61d5a72a6351d66775": "c497f8abd5ea534f0d6bb3a4a43cbd91",
".git/objects/4b/63ee3f0b7846e8dd5d1f24ff827eac9f67dcac": "fbe1ab95d8b9b32e11c5612423bba980",
".git/objects/4c/ceb5f9ee43b1ec76eb9786264aafb546ede3c1": "90ca2e64d0a57d8fba0149cccec80c83",
".git/objects/4d/ef10294e555af3e581548ada54881454bd2a96": "4314a364ceb3ef3da12694232d889b91",
".git/objects/50/44ce671cbe551ac34737b46b363fcff2c2c739": "74f766728735fb5fc5641a8a16c80439",
".git/objects/51/e8fdd8c0ede4352ccc9d1b297b8b6ab2571cce": "234f311b72e3d090cc8e847fe449527f",
".git/objects/52/50c398767e8597699134f2d0f6851d36ee5d63": "ae7ddcb414cc28e3a35f8b8caa13dd1d",
".git/objects/54/09cde0eb04a94b6a84db1dd31298472e77ba94": "65b06b16fdbcf26ca218fe132ebf9f69",
".git/objects/55/5f2d623bb3bfd3700e0448ed326209d3ad94e0": "3df09b9f78a49c28f9c1a435b1f965f9",
".git/objects/55/bd34b74a3e149a4f72acf4fa0923eddd566303": "7036e1ead9b84efedc18c51814e18071",
".git/objects/58/5959008a6b61905a661cdef607bd0562578071": "606fc104aa053d973bbe20172c69c431",
".git/objects/63/d8dc12eb3eab945baf44f2a2014bb1a35d7181": "f8b0a94adbe2a4394d9521fd4047627c",
".git/objects/67/61eb7940d1f75f73a7645f2b0d88f9e41a2dba": "9e11dcef9c096aadbfaececd78d490db",
".git/objects/69/7f6b7be7f38cd8c16afbcc5fe1c0bc055fd45b": "e19f9beabaf1148c64ade748211afad6",
".git/objects/73/ec8f37fb008da5748aa5b766642353e4e26258": "0eee689f6ed664f6e2abf6ab809c4a72",
".git/objects/73/f3d88f83b0b69c9a73903daccace893dfbb972": "00c8b8e3029277c445c848490c00d0e8",
".git/objects/74/1aa8d01cbbb8831f056f6670c14859cac16bf4": "51f7c1a05c5635e275b19585f0ae2cde",
".git/objects/75/3ad5411ffd4d0093833a1551127a0d56298589": "727c13a831b8fc8856d20fc2586649ff",
".git/objects/79/05ec9dee695a37d38458f5cb66725bec9ad176": "d944d2923d1b6f1ca5362551e8bb6fbf",
".git/objects/7e/b918725681ecba5db6e2ee7a5f1f7d5e662e39": "991c3816d5bf830145618a466ea4c896",
".git/objects/81/39713b0d4e553d97e060065920474b45f91483": "afc5e03cacba2f503f8feb5925228941",
".git/objects/96/2d0df7baaab55859a728ffdffe94d13e42f031": "8da4a41caf601793683eced15b43e1b8",
".git/objects/97/05fc06182c2bf9598adcdc0f1b511365e588ee": "4d212f0b126ebac1492c7e7a70c09da9",
".git/objects/97/7c9ce651a2fa0eac56b32c17fc482c9f98b295": "7f595516adfe644f05d3a53d9426838b",
".git/objects/98/f80649f4f469a73b8750d2be45c4ecdfb7ed0e": "e3d222b454c8a34cb09cc2bcf2fdba29",
".git/objects/9d/be5dbe315c6cd3a5899c952ab97377efbf27bf": "a566d5132a57ed93f2883e02172249bf",
".git/objects/9d/d4ad130e67f6f3e1e63eb34061644f4fdbf34d": "4b863df3cd31d19e0b9a8fd8bb5f38d7",
".git/objects/9f/c68f5dd6238da5af6798b7b02ded7f85e2eced": "aa3a6545ff828d9daa120ef18a224e47",
".git/objects/a2/af29264cb687ee1b05ad3875b2a1cafe8ede04": "1008170f9a0606808751d6331966de20",
".git/objects/a3/6d7f16f86846fee9152ed64b7c9cbc29d96bad": "315c475500868b24b5d5960cb9da4e8e",
".git/objects/a3/9a84e1ef5917741e09daaa4cb92b1154da9e46": "0770bb0f676adff6f83ba289904f305b",
".git/objects/a4/93c996ed604455ff0a3fe9de391170139b6620": "65ba22e3783bb52a92c126b0928a7c5d",
".git/objects/a7/48f1eec613833aa7a849055192ca27086b5d99": "2b7824c48b2566b92d6cf6dd0345c323",
".git/objects/aa/c470ef649ce4f41102808dab18d5714ac2fc84": "63bb91aeb7c8a46b96c898e208da94bf",
".git/objects/ac/4ad1d611f1af5d9ca636cbde1340bbeeed29a1": "904a9916497eb74c7571914949cbfccd",
".git/objects/af/30c322e188a1d23567a14bdd16f72025677a7f": "3ca71039e09672cbde6ccc6c1af73e04",
".git/objects/b0/bcec367e79bafc191307d865bd5e4ab6f2f144": "721521938e2d9b3c3dca7e5a062b4e71",
".git/objects/b1/8344f55667672f3a981b1ee0143a7144f77f5a": "03e609d8a960914767bf12ade7907550",
".git/objects/b2/4eb5c81e6c8cf1f01d90d578f8c0dda03e1901": "bd305a6668f038f79070ac214bb3f1b7",
".git/objects/b7/415b9a18362596e9118502835c8f93e3a69018": "9082396a1b60be04e094278f3b924f16",
".git/objects/b8/09791dedf167a2789dc5c8b018f333921f953d": "58e9731bfbeccbd9ba92ba4b56da0e4c",
".git/objects/ba/bf33e570747faf0e08e125a8748681c121d26b": "e83022ae2492a7d5f2349d81d28fd6c0",
".git/objects/bb/386910be67ebcc78548c8335e02fca76f9040d": "54b6f26d00a2abde8725dcd5d3f5af09",
".git/objects/bb/71afbbee14810295755c90f0b9e9f824ef84f0": "d468c74b907c0501426cc7540be6d661",
".git/objects/bc/74d9ed940834171cfcc1d9bd2abf9af4ad2df2": "edab7a69b91bec3547c9533a942faaa3",
".git/objects/bd/0d1a0efddfd03f290c5d713049b19a49163e38": "47cf289905ece202f735168d2e4b3a63",
".git/objects/be/a7df08106e43834f9ef25102f11cc53eef3766": "283180ec8ddc12d453611a2ba33530d1",
".git/objects/be/f608743f27bd1cd00f6d4c94a081ffd39ae2e8": "0ba6cf01656b583550f44cca8961cbad",
".git/objects/c3/488aaaf219a70c58e1c5fef872f9ba86ff4811": "a0aec6419a00eb7ce25f884846dece21",
".git/objects/c4/d42ef8bb3e1142e370ff0e87a811341dba59b4": "8161aa5d8858285fb27f527a2a18cc90",
".git/objects/c5/d0f59581811659f412afde49d9a3cab2e99990": "04563e3fce58e76c00ceabca30719eca",
".git/objects/d1/0fd56be902387a67d8b90a56100bb3a5d2e113": "d746d6b77c8a19753c939f091a25672e",
".git/objects/d2/dde18f52c4d92847eb2a72742a554f74b68dc8": "89284122c6655a8ee0822b536cb8ee7a",
".git/objects/d3/17330419d570772dfc99a509fd3df2c51b54ee": "c169d87b310cfec5dd9802ba266e7c41",
".git/objects/d3/90076d689bfa8c91f3170c010cb9324e465408": "c80ad2729395907840dceab6fba4f348",
".git/objects/d4/a4075dfff772d3cdaaec3c0328035af2449439": "e50dc08d0a5e03d9647be1d27e3ba0cf",
".git/objects/d5/1d646f3abfc39c1d1429f732cfd645e3d3df6f": "1e4ed57984ad4d35aa8c84ac3660ff1e",
".git/objects/d8/56943145a38b03ff59b8c030d8e5b1597bb021": "179f0ca5012decdb66590e74d07a4b73",
".git/objects/d8/9733c4797ea81ace930d7f8a11b7730567540a": "0d85c89e0c4da16792edd70529a7b21e",
".git/objects/d9/18b8f22f19a13195ac9fc62ab95fcef68efd93": "0a4857ca5234a03eaced263d046423b9",
".git/objects/d9/3ad703a4b2740850b2567493e81a081eeb03a0": "0a0ada2bd0573bbaa503f3c0a282dec9",
".git/objects/dc/8c6fc7bebe401ee53a67567bdf0f7ded3743c9": "b530e60fbf287f225356be88fa89bb11",
".git/objects/dc/f4a892996f7bac3f5bd135d3452144ea84dd20": "273a15b5e5ca7d85846e353aeaf22875",
".git/objects/df/4fd2b5e178fbd325d05da88c12b0dc14f82395": "a5833b77a215d3ab821dd0f6263cf924",
".git/objects/e0/372d4f6234b4cb2a5d9796305b4ef39b082a08": "c24b3725f0609b42acaae137c9eab30c",
".git/objects/e8/0743b58670081373e833db0079426743956739": "8f92f03099c94e235e927690ec729473",
".git/objects/e9/f4f8ee4ac8b1d4f3407eaf7760ea946ddcbf34": "bee8023c97e27db20c1f2fc1bf5a65e2",
".git/objects/ec/cb11dd06c00b123d7e1d5ed1eea7257564628d": "58aa8450df4c5d45c5687b2fd2b44d13",
".git/objects/ef/4ff00c03a301961c7befa83a25f6aed51067be": "d27611aa918d45a93145679490d13579",
".git/objects/f2/48518bbd1b885cf3504e4a8a74eba1dd476de1": "07038fa9067079610886f8cf58d0d191",
".git/objects/f2/ad1775c1624a208cf6c8b8069ad673aa966787": "6a145efce8b1ce092ade4e02aa104b0c",
".git/objects/f3/cdc72ab0bb03e2430856195b639a3e6217c1d0": "6593db55c2c9ca57f2b4bcb8abbd3bb5",
".git/objects/fb/e7dbc4cedb8617ee9d0f0bcc919c4562f62332": "051f3a3fd864b761d2283245d52f866a",
".git/objects/fe/ba62c05ae0d76f3537c4152c8e7562bb867d31": "cc4a10c9222431c7c6042e6f5e51bdbc",
".git/objects/pack/pack-d2c56985a06eb6dbf5254a27d59eb8495e83b0a2.idx": "a8a52e1dde38741d3b4879d0332aa2ed",
".git/objects/pack/pack-d2c56985a06eb6dbf5254a27d59eb8495e83b0a2.pack": "693d05d9cf54dc3839f35e57ca48269c",
".git/packed-refs": "6236193984f8a377f0837a3963839ee1",
".git/refs/heads/main": "b3386bfe21fde9c8b301e3d9f7a15290",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b3386bfe21fde9c8b301e3d9f7a15290",
"assets/AssetManifest.json": "650fd3ca8f62a9c15a5c445409b4b07b",
"assets/assets/data/events.txt": "cdcd128d9db4b2753c6b506ba8ef3b7a",
"assets/assets/fonts/NanumSquareNeo-aLt.ttf": "f0cc7ffd0d26ccaaa7db8844001a65ad",
"assets/assets/fonts/NanumSquareNeo-bRg.ttf": "f84e6e09495f535e8d7dbd649a6fff3a",
"assets/assets/fonts/NanumSquareNeo-cBd.ttf": "2fae8f78c180bb5900b83b7b1edae9a5",
"assets/assets/fonts/NanumSquareNeo-dEb.ttf": "4f1c8d2afbeb99741486250e24139822",
"assets/assets/fonts/NanumSquareNeo-eHv.ttf": "5343dd4c7ae09bbf51e2019e5999406c",
"assets/assets/images/SCP_Foundation_(emblem).svg": "ac82881e10718a8a56801d6eca543b2a",
"assets/FontManifest.json": "d60b76397a6fc11b103caa684a988cca",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "aa1989ed6978bf117cb302b736fbada8",
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
"index.html": "e126cce5738746d944620943f517c828",
"/": "e126cce5738746d944620943f517c828",
"main.dart.js": "1966296c3fdbd3ba3f5b378198a19a31",
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
