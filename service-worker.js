/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "76243296b8fcaf52b1c43237d7906769"
  },
  {
    "url": "assets/css/0.styles.5c048139.css",
    "revision": "8f0a6d0b2a823f55cc0cd14e74055274"
  },
  {
    "url": "assets/img/DELETE_MESSAGE.3cd36e4e.png",
    "revision": "3cd36e4ea80da57489bb29deb9c15858"
  },
  {
    "url": "assets/img/GET_MESSAGE.01cc35b1.png",
    "revision": "01cc35b1ca1d3be381ae86559bf1d9a3"
  },
  {
    "url": "assets/img/GET_MESSAGES.0b43afa5.png",
    "revision": "0b43afa5015ec5f8a7ee5dbf9287cfdd"
  },
  {
    "url": "assets/img/MESSAGE_POST.6c5c1194.png",
    "revision": "6c5c1194a1255199a5403725c66a0b9f"
  },
  {
    "url": "assets/img/MESSAGE_PUT.86269c16.png",
    "revision": "86269c160152332791e296c8d63d75e0"
  },
  {
    "url": "assets/img/METADATA_DELETE.d1e0d9eb.png",
    "revision": "d1e0d9eb80e89a745fb2c7713b97e521"
  },
  {
    "url": "assets/img/METADATA_GET_ALL.fab54602.png",
    "revision": "fab54602640e0c8a2be0d9b2b5a88763"
  },
  {
    "url": "assets/img/METADATA_GET.5936c178.png",
    "revision": "5936c17856afe3dd77e47dfb5391ee4f"
  },
  {
    "url": "assets/img/METADATA_POST.34bf2d34.png",
    "revision": "34bf2d3456ffbfcc49ed28f0c6de6894"
  },
  {
    "url": "assets/img/METADATA_PUT.2967e09f.png",
    "revision": "2967e09f5b2a49298706a00a84cf596e"
  },
  {
    "url": "assets/img/relscheme.7700da82.png",
    "revision": "7700da821a451402aa5042125f74ee59"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.ae1f2975.js",
    "revision": "85410456b913cfe596471cb7f30e4b57"
  },
  {
    "url": "assets/js/10.5b8839b5.js",
    "revision": "dcfd81721bf600ca7d15e5f927ea11b6"
  },
  {
    "url": "assets/js/13.accbd901.js",
    "revision": "aa435bc82e1fda6dc8de851fcc7f085a"
  },
  {
    "url": "assets/js/14.7a95bc07.js",
    "revision": "f324b5010e58194221c529ebaf5a1fff"
  },
  {
    "url": "assets/js/15.d35d304e.js",
    "revision": "bff1f3b15811fafbdfc9dc128f412714"
  },
  {
    "url": "assets/js/16.9d7b3baf.js",
    "revision": "a39a70cef5276e71e587d0108f3a8112"
  },
  {
    "url": "assets/js/17.5d365b20.js",
    "revision": "7958d2148f2cf8cbbd077ef67704db5c"
  },
  {
    "url": "assets/js/18.d8df7246.js",
    "revision": "acffae255142913a2f1a77ecd15e3df1"
  },
  {
    "url": "assets/js/19.769a03dc.js",
    "revision": "73c3d42cdc52253e51446553b4a54f8c"
  },
  {
    "url": "assets/js/2.0702bab4.js",
    "revision": "e43b3ca4e2e8574af309a6b47576d4df"
  },
  {
    "url": "assets/js/20.8d027a20.js",
    "revision": "f8782a63e1e6fb17c7ba2f3823be36ed"
  },
  {
    "url": "assets/js/21.299a5308.js",
    "revision": "6d57d7dcbb52fa667491ba32fb46ff6c"
  },
  {
    "url": "assets/js/22.7db4830c.js",
    "revision": "b1873ed8ef926f660f30bd6e0fda3da7"
  },
  {
    "url": "assets/js/23.a250f0ce.js",
    "revision": "98854c040b8594fe8c343cac3e884a1e"
  },
  {
    "url": "assets/js/24.794b4a7e.js",
    "revision": "31f60da9a845c073222664dfd3c12c5a"
  },
  {
    "url": "assets/js/25.74e72ed0.js",
    "revision": "d3bdc9f038a40604ec424bc1bbc7e7d5"
  },
  {
    "url": "assets/js/26.fcc2116e.js",
    "revision": "a43901f312834d8ad8d84947ead0a7e4"
  },
  {
    "url": "assets/js/27.d6d20bba.js",
    "revision": "4724d0c90cd3c858e2e736fbc1627f10"
  },
  {
    "url": "assets/js/28.be19de45.js",
    "revision": "a86be966dbb6e9e24190b81146eb8db2"
  },
  {
    "url": "assets/js/29.a0fe85fa.js",
    "revision": "63d939c384776ed7e8b82e9b566f77bb"
  },
  {
    "url": "assets/js/3.08b20e58.js",
    "revision": "0457e8a49d18b05dd3d0622b09341d59"
  },
  {
    "url": "assets/js/30.4b3ae9d6.js",
    "revision": "9145ab8adb8c18a4f23f81be75e4a7d1"
  },
  {
    "url": "assets/js/31.98b924c8.js",
    "revision": "06f326ff870a95c82c0b961749451689"
  },
  {
    "url": "assets/js/32.86dfe754.js",
    "revision": "ccce74581baf82ee1efdd8562cfd1b36"
  },
  {
    "url": "assets/js/33.2b053cf6.js",
    "revision": "e6bdd16d5c39e2f02e4353bc78c19273"
  },
  {
    "url": "assets/js/34.57048dfc.js",
    "revision": "e6c85009b3dbdad6789c2f3669ca9deb"
  },
  {
    "url": "assets/js/35.f5f3d8e4.js",
    "revision": "1cda6b9fd2a9112bf2f4eb18fa2f04c7"
  },
  {
    "url": "assets/js/36.d9a8d3a2.js",
    "revision": "57f20576ba625a53fb1bc68af72d23ef"
  },
  {
    "url": "assets/js/37.2f1fb64c.js",
    "revision": "7cefb09904148b8dc6caaa307e48dd25"
  },
  {
    "url": "assets/js/38.2830de49.js",
    "revision": "72428ca190fce54675c179b1d26e8716"
  },
  {
    "url": "assets/js/39.11ea1311.js",
    "revision": "9ff142aeed14557ac063240168e7dded"
  },
  {
    "url": "assets/js/4.70c33df6.js",
    "revision": "94603f8b748138997a671298c5651f86"
  },
  {
    "url": "assets/js/41.f8eb18c3.js",
    "revision": "9c5146a9be29a7d120e4bd85bcfed24a"
  },
  {
    "url": "assets/js/5.b3d4a9d6.js",
    "revision": "3e5f619c6057243aa2144e7a295a87f7"
  },
  {
    "url": "assets/js/6.cece7d09.js",
    "revision": "f7b6ad15732026e34079e983e28d0c17"
  },
  {
    "url": "assets/js/7.c3657311.js",
    "revision": "48edff3ea162d0940965ff3c227fc416"
  },
  {
    "url": "assets/js/8.8cf00e24.js",
    "revision": "b91cfc6565d5670edf49298fa72d5455"
  },
  {
    "url": "assets/js/9.f38ba34b.js",
    "revision": "97078f207c55480cdddb9c16418d5a50"
  },
  {
    "url": "assets/js/app.d0504700.js",
    "revision": "1722182001eb5e26f288ae44571a38cd"
  },
  {
    "url": "assets/js/vendors~docsearch.2184b1dd.js",
    "revision": "01042a29b434baef327ddd17f11933e9"
  },
  {
    "url": "conclusion/index.html",
    "revision": "3bcf05176f7a4e3aefb4bfd5d349c693"
  },
  {
    "url": "design/index.html",
    "revision": "d4ba951625485f4bb0eff5128ccc636d"
  },
  {
    "url": "index.html",
    "revision": "d685b0707cba55c4c310ee073e91b50a"
  },
  {
    "url": "intro/index.html",
    "revision": "07e489daf33ab139df558dea6255baaf"
  },
  {
    "url": "license.html",
    "revision": "b4a49ef4f06f7838e0ed1337b4ebf028"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "25acc34caaaaa447b41539fa079225cf"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "dea1ef70614637fd11937e8068ff7479"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "7365668c7608a7cad6f2d16582cbccef"
  },
  {
    "url": "software/index.html",
    "revision": "20756b2e7f095187a78a056e93a2add4"
  },
  {
    "url": "test/index.html",
    "revision": "0675622fe1704882dae560d69da195c3"
  },
  {
    "url": "use cases/index.html",
    "revision": "c41d53d929f6688ff98ba64a1ab787c1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
