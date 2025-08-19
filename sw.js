/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/01/09/test/0001.jpg","40e2ae06d16cc47371a87c749b878957"],["/2020/01/09/test/index.html","b956476ff291da42f73e3297cba750c6"],["/2020/03/31/mathematica1/index.html","0c342b9f4031f81f3aa44172bcb45105"],["/2020/03/31/mathematica1/p1.png","6ff4d596d1031db18a6172b30ccfca89"],["/2020/03/31/mathematica1/p2.jpg","3e6eba3b11a6d693fd073c4f1f43a517"],["/2020/03/31/mathematica1/p3.jpg","586a1b9ff222a3a2fa88fdeee23bb0b8"],["/2020/03/31/mathematica1/p4.png","c8cb8dbf0b7c66006718b5cee2705039"],["/2020/03/31/mathematica1/p5.jpg","7771ed2f59e617258f40ba2b275d4bf2"],["/2020/10/13/Robust_quantum_metrological_schemes_based_on_protection_of_quantum_Fisher_information/index.html","a581a1f09561c827e23ffa5925e100fb"],["/2024/11/07/实对称矩阵与椭圆/index.html","bd2c48590a606e3ff298800ede9c58ff"],["/2024/11/07/实对称矩阵与椭圆/main.svg","a03f9a3bebf4922134f21e382e3916f8"],["/2024/11/07/实对称矩阵与椭圆/线性变换.svg","4f17ccb1312c182ecd2ae8938c796b42"],["/2025/05/19/supplementary-notes-on-the-masters-thesis/index.html","53b1b0d56eec778ea40a6f7fdacd8b33"],["/2025/08/12/压缩态中的平移参数/index.html","795021c34b19dcb2d9826dba68f30748"],["/2025/08/12/压缩态中的平移参数/squeezed_state.png","c371cf7783bb3a588e84f227ec745498"],["/2025/08/12/压缩态中的平移参数/squeezed_state.svg","9942649bc614d9bb04f67d15af99bfb0"],["/2025/08/12/压缩态中的平移参数/压缩相干态.png","03faac5eaf1aad4f381d3a6b53013627"],["/2025/08/12/压缩态中的平移参数/压缩相干态.svg","22d87f341663a6fb2a215e50fcbf5ac1"],["/2025/08/12/压缩态中的平移参数/压缩真空态.png","417879de1a994a8d6c2791303142957c"],["/2025/08/12/压缩态中的平移参数/压缩真空态.svg","18bdca50f836b61803c813d64e3fbdbc"],["/about/index.html","0b5f343821208ed4850099b30a31e235"],["/archives/2020/01/index.html","039df067f53b9f6b27638b9e3424a885"],["/archives/2020/03/index.html","dbedafc0748ab72951ef8bbdbb1514f4"],["/archives/2020/10/index.html","d371e16eee4e0493527403cc912a1676"],["/archives/2020/index.html","41f1cc4729db8954475ee34eab2658bf"],["/archives/2024/11/index.html","7586d6e6520bffece8c2379c5694f515"],["/archives/2024/index.html","bebf28e1cf544652f87894c0700f155f"],["/archives/2025/05/index.html","f72b8a08201a24c10e01fb547beb8d62"],["/archives/2025/08/index.html","2589d52e143f1f14b5820a0d37c7fb69"],["/archives/2025/index.html","14a95f8be1ec224c25131cb7aca9e5a6"],["/archives/index.html","c6a3c37aae722bfb74c2f1d6f799e588"],["/box/index.html","2199edf822fdd2850aecf327a690c6cb"],["/categories/index.html","084b2a8e2c99e8ef11b3b2939b1ce456"],["/categories/琐记/index.html","8d5a95b7c0646ec682285ce8a0682d8c"],["/categories/线性代数/index.html","b1df2fe8459535aa92c08da028615b7b"],["/categories/论文补充/index.html","8da099eb2a4ac22ed8f8db9ef2d1356c"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","e5809df9ef3b3d2d73e61364eac5c920"],["/css/noscript.css","2be0f545683395bf734bfdd37fb5f3e2"],["/images/1F47B.svg","8e7a91031a8c72f0584580651ca64dbe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/avatar.jpg","f397690e17baa8fffa48415270fe7eeb"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo-algolia-nebula-blue-full.svg","32d3e013eab081a46228a9711401a69a"],["/images/logo.svg","9278d16cf8d2e7473b4e646cbbc28075"],["/images/zhihu.svg","7d8391926ecc51ee401d8350cab47956"],["/images/zhihu1.svg","bbf32f5b4b943120437e35756e98c7a0"],["/index.html","abcd237c261b56100176341f6ab2c51a"],["/js/bookmark.js","9bc1c13085300d86541c0d9532235e6a"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/motion.js","67aa9fc45e782fc1e92b160ab55e4174"],["/js/next-boot.js","acc1f14b59cf9426159f16838af2c1a3"],["/js/pjax.js","b8cf673cb986e175da6188379ca8d918"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/sidebar.js","d8853b489d4477a041bf8855772b48fc"],["/js/third-party/addtoany.js","e5bf63f47c0191250fe6e6d0a2425c04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","b24820abff8cf93d384de49f65ebd3ff"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/analytics/matomo.js","41e11502744876fd591016942813ea25"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","4f34047198ffa9f61d66b14efe7902f4"],["/js/third-party/comments/disqusjs.js","97c689e310229572e4b76df3b6460d79"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","e4b430abc20e42ff96e68a1a51601403"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/search/algolia-search.js","89ae1e86a09c50252d87c6ddd9043c65"],["/js/third-party/search/local-search.js","00364b680de714e73845d018e60e08e1"],["/js/third-party/statistics/firestore.js","cb92e73324e84cfea0bbc0fa80e48b70"],["/js/third-party/statistics/lean-analytics.js","d276bd1cdb9c7479523172b5c336bb2a"],["/js/third-party/tags/mermaid.js","fef0c8e52137fb3474c586a71fda173f"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/third-party/tags/wavedrom.js","0bddd6d5f1641c97cadb4d52e6ab8d28"],["/js/utils.js","f065c53bfb814d195c42a8b3e0b1e0a8"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/sw-register.js","8ca437caeebff3c8f0e38ec2033b1b36"],["/tags/index.html","ff59c4cc098d96242b39f342307b4a9e"],["/tags/mathematica/index.html","a87aef72bc4a54768b28c5bae3fc2929"],["/tags/琐记/index.html","5211498d23dfff49954f40e4ea7a9e7b"],["/tags/线性代数/index.html","347248ae26310b25b76407938f1e6892"],["/tags/量子信息/index.html","4e01e4baf66b0df350c86a389f8b6a69"],["/tags/量子光学/index.html","63560fcdadda448f353d0494d0719a36"],["/timeline/index.html","02207f37614f8bb13b444bf571984e20"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
