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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6fb8ab9762560c66223997af09ff3bd6"
  },
  {
    "url": "assets/css/1.styles.d1c48624.css",
    "revision": "b3ba3f86ca058664e87bc33f6d318308"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.61f26985.js",
    "revision": "8b142371eb7b70631b1ca1056f454d54"
  },
  {
    "url": "assets/js/app.9ca0ef26.js",
    "revision": "087195314d9d3c1cdac93bf09279805a"
  },
  {
    "url": "index.html",
    "revision": "5bcfb92bbbf26ab1c05270dd2da8baf5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
