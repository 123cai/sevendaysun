"use strict";var precacheConfig=[["/index.html","b6ae889f30b6889c1cfe9d7a12e12d15"],["/static/css/main.15b4f90c.css","b4608910495c349bcb31a13bd209a40a"],["/static/js/main.acde7140.js","a66f014d5464d70d4edc2301f15b4414"],["/static/media/a1.89072293.jpg","89072293036391a6b35c6c931fdedd8a"],["/static/media/a2.544d5665.jpg","544d5665cf9a9b6227b5724495f8deb2"],["/static/media/a3.3134df59.jpg","3134df599544e1342ed9a24ad8bdddd5"],["/static/media/a4.ef7d30a1.jpg","ef7d30a11f89af4d708db3808c4583dc"],["/static/media/headimg19.dfe73f21.jpg","dfe73f21cfdc7df4d458653f1acd775a"],["/static/media/jingtiaoxixuan.999a7f6c.jpg","999a7f6c771139da9451a5c0819ecc87"],["/static/media/jinrshangxin.6e7e492d.jpg","6e7e492d73e38ca21e10927118ab0bb7"],["/static/media/lingquyouhuijuan.3dc532de.jpg","3dc532de27d5a13d4e5600499885cbee"],["/static/media/logohome.9bf69ff0.jpg","9bf69ff0db03e536db459675d4628d36"],["/static/media/my-banner.7bc293cf.png","7bc293cfa804485a22ec591aab2f025a"],["/static/media/my-head.90e34268.jpg","90e342685e56fbccd37b38d298bda300"],["/static/media/my.e3f61f9b.jpg","e3f61f9bcb1ba8c880bbf80a71afb33f"],["/static/media/nocontent.8088c1bb.png","8088c1bbac8db5f8e9a2f80b9bc13875"],["/static/media/slideimg1.27d54396.jpg","27d54396bbb3bfa1c506ef24ae52868f"],["/static/media/slideimg3.5498b05a.jpg","5498b05a58747a35679c2ac983dba463"],["/static/media/taoke1.b434a470.jpg","b434a470f6f9ab673091909e2f70385e"],["/static/media/taoke2.dfacd04a.jpg","dfacd04ab68ee0b85757ddd7090bee9b"],["/static/media/taoke3.5c2b658d.jpg","5c2b658d8fc45a8d544c7deddd1405a2"],["/static/media/taoke4.0e902d84.jpg","0e902d84085abcbb04445a4125b9f97a"],["/static/media/touminglogo.2b5b1a2b.png","2b5b1a2bf71634ce45dfc4a3bc1e3800"],["/static/media/头条.c684d3cf.png","c684d3cfff6b72fd2a6d641f366b354b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});