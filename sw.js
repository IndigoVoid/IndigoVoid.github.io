/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/01/09/test/0001.jpg","40e2ae06d16cc47371a87c749b878957"],["/2020/01/09/test/index.html","e88bf95df1ca5d879762824cabc58102"],["/2020/03/17/写作习惯1/index.html","96c6c32703007f69063fd536bd6259ca"],["/2020/03/31/mathematica1/index.html","c0bd24ad362e177f2cd3ed0cc4d012e7"],["/2020/03/31/mathematica1/p1.png","6ff4d596d1031db18a6172b30ccfca89"],["/2020/03/31/mathematica1/p2.jpg","3e6eba3b11a6d693fd073c4f1f43a517"],["/2020/03/31/mathematica1/p3.jpg","586a1b9ff222a3a2fa88fdeee23bb0b8"],["/2020/03/31/mathematica1/p4.png","c8cb8dbf0b7c66006718b5cee2705039"],["/2020/03/31/mathematica1/p5.jpg","7771ed2f59e617258f40ba2b275d4bf2"],["/2020/09/23/积分/index.html","d5040ec089cffa9e6fb71518af0beaeb"],["/2020/12/03/qmIntegrate/index.html","e20b68c3bfcfba15735f4b747ee8f7ce"],["/2024/11/06/LAMisunderstanding/index.html","18ee950b17b676c5d2fd6b2dc78ef439"],["/about/index.html","6fc0889f4589663c151afe6c792c79f0"],["/archives/2020/01/index.html","00d4a57d7c32d62d3f79abb5901843b3"],["/archives/2020/03/index.html","f5416a057e1781f8c9115718eb5bf8c3"],["/archives/2020/09/index.html","e318b8d8222787275c9f51602e787b7d"],["/archives/2020/12/index.html","045ac97ba134a67b0a75de561705bc31"],["/archives/2020/index.html","83cf96ccae4b98caba8f6f679025006e"],["/archives/2024/11/index.html","88262237969cefb792a64a14504b1d75"],["/archives/2024/index.html","e59d0371a01315485ab093d2dfd518e1"],["/archives/index.html","419b63ee0f22c5d77a362f602b3752ff"],["/box/index.html","5c8ee54e101b4198bcb16ad0a160c890"],["/box/style.css","e5b500b94d2fd6440c891505d57abacb"],["/categories/index.html","aef1f57d9f2b28fc773cca78ac2347bf"],["/categories/忏悔录/index.html","42ff0507d245a6b644f201c91f89b330"],["/categories/琐记/index.html","03af3f32d853f3b512bf7ac5dd4296bd"],["/categories/量子力学/index.html","43fcad918bb280efd80203d2dd2aad2a"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","6dd5f99df495fb7db5ee90ff3cbff443"],["/dairy/css/bootstrap.min.css","b00faad199b5b881d17b2cd7fac04a56"],["/dairy/css/hero-slider-style.css","9363725a4690c568c0394f30d643e4fe"],["/dairy/css/magnific-popup.css","30b593b71d7672658f89bfea0ab360c9"],["/dairy/css/templatemo-style.css","73c5861f89e5acfbf22fdcf903a5f803"],["/dairy/font-awesome-4.6.3/css/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["/dairy/font-awesome-4.6.3/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/dairy/font-awesome-4.6.3/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["/dairy/font-awesome-4.6.3/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/dairy/font-awesome-4.6.3/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/dairy/font-awesome-4.6.3/fonts/fontawesome-webfont.woff2","e6cf7c6ec7c2d6f670ae9d762604cb0b"],["/dairy/img/bg-01.jpg","a2d8fae38284f9cce798e84db4d32dab"],["/dairy/img/bg-02.jpg","2c0aadb21c5afe6f2b4b0e3388a81220"],["/dairy/img/bg-03.jpg","e65b4263181d3bd5e1caf0c452f8d3e5"],["/dairy/index.html","47a006f0d61424298bcf8e2e0088225f"],["/dairy/js/bootstrap.min.js","0ca771b2c6d554021dcc1c01cdc77ef6"],["/dairy/js/hero-slider-main.js","b31ba6ecccdba3e8d6ca303b23429bc3"],["/dairy/js/jquery-1.11.3.min.js","f03e5a3bf534f4a738bc350631fd05bd"],["/dairy/js/jquery.magnific-popup.min.js","ba6cf724c8bb1cf5b084e79ff230626e"],["/dairy/js/tether.min.js","3e50b6f75ff4128f2478b1d44f80fdfb"],["/gallery/css/animate.css","e78c4ece198b758d2fb2e18ff0283249"],["/gallery/css/linecons.css","719ece30d1db3112f1f94d2bf7db6914"],["/gallery/css/owl.carousel.css","b51416af9e8adbe3d16f5f2526aba221"],["/gallery/css/responsive.css","405b978e64ac6d43b0a0526ca2c33cf1"],["/gallery/fonts/linecons.eot","37cb8c1ad6745ac852e821e5ab78d40f"],["/gallery/fonts/linecons.svg","7be74dee2b6a712f7668218fda71947b"],["/gallery/fonts/linecons.ttf","05cadd863565f64ce538d3da26536a21"],["/gallery/fonts/linecons.woff","f7e1d7f91c602afedad1e575e5696e30"],["/gallery/img/portfolio.jpg","e5aa75e46dff8ad012fa8bfde99c26dc"],["/gallery/img/portfolio_1.jpg","9db8eac379908e6a9b8e226413c567ab"],["/gallery/img/portfolio_1_big.jpg","9db8eac379908e6a9b8e226413c567ab"],["/gallery/img/portfolio_2.jpg","c7e0901e56633292c196c10d6c964b7e"],["/gallery/img/portfolio_2_big.jpg","c7e0901e56633292c196c10d6c964b7e"],["/gallery/img/portfolio_4.jpg","fb0be3944d4396bc74a6516c88770a29"],["/gallery/img/portfolio_4_big.jpg","fb0be3944d4396bc74a6516c88770a29"],["/gallery/img/slide-bg-1.jpg","1c226de3ad3c244b2e6ee3bc0f8b5136"],["/gallery/inc/strip/css/strip-skins/strip/close.png","50e9e120d5da155c46ebd68694fc3c50"],["/gallery/inc/strip/css/strip-skins/strip/close.svg","fca48ba2bf87627c2e30f2cf4ec38d51"],["/gallery/inc/strip/css/strip-skins/strip/error.png","dca08c1e6e406cff326bbeea67c37eae"],["/gallery/inc/strip/css/strip-skins/strip/error.svg","c70bb2ba454ac290dc31b3225421b7d1"],["/gallery/inc/strip/css/strip-skins/strip/next-faded.png","20d2421d08fe2b9cc3a59174eb5508be"],["/gallery/inc/strip/css/strip-skins/strip/next-small-faded.png","2cc7ded19c15ea56c5e05b00d32f4a85"],["/gallery/inc/strip/css/strip-skins/strip/next-small.png","9b57302a11cf69e2f52ce3226fc7bdfa"],["/gallery/inc/strip/css/strip-skins/strip/next-small.svg","6a8f3d7fa5d247834f3f5e6451cb20ec"],["/gallery/inc/strip/css/strip-skins/strip/next.png","c9bf89f5e6b4a38a4153c8b8074aee89"],["/gallery/inc/strip/css/strip-skins/strip/next.svg","b334167a950bbd4760d9c37335d864bf"],["/gallery/inc/strip/css/strip-skins/strip/previous-faded.png","6c18fff44fbea3d1a3234f7372dc1716"],["/gallery/inc/strip/css/strip-skins/strip/previous-small-faded.png","c558e130ef5fc066b17887bda43e71af"],["/gallery/inc/strip/css/strip-skins/strip/previous-small.png","cf2cfec9c6b591cff9d382e5e69b3979"],["/gallery/inc/strip/css/strip-skins/strip/previous-small.svg","1d186b815957dc0b0903493d46f31026"],["/gallery/inc/strip/css/strip-skins/strip/previous.png","e36e01289e9905eeff3004c04c671c91"],["/gallery/inc/strip/css/strip-skins/strip/previous.svg","941bb4371f53c401655e328adc214a75"],["/gallery/inc/strip/css/strip.css","2904a1e3d3bef570c8d25702984a072a"],["/gallery/inc/strip/js/strip.pkgd.min.js","d1d4b6ef66ffdfb69851690c76130e9f"],["/gallery/index.html","e874a7a0c63cb06b39fadaa44dc5185e"],["/gallery/js/isotope.pkgd.min.js","f53a96076ebcc1e5f00bf16079a40418"],["/gallery/js/jquery.counterup.min.js","ef36cca760bf1cd76cfcd0e4dc10cef1"],["/gallery/js/jquery.easing.1.3.min.js","55a5ad3c9dc153988571c9f428f5e872"],["/gallery/js/jquery.min.js","d4a20d75db01a33e2d65e303ce5c34f3"],["/gallery/js/jquery.scrolly.js","428d550cf95449b4d53960c7ddf68ee6"],["/gallery/js/jquery.sticky.js","1207f10dca0217442912cb14dfcac518"],["/gallery/js/jquery.tweet.min.js","7faa1322de5fe5ae90323ef5b2f60604"],["/gallery/js/main.js","c231131fc8683a835d380090cf637b07"],["/gallery/js/owl.carousel.min.js","ffaa3c82ad2c6e216e68aca44746e1be"],["/gallery/js/wow.min.js","5fa2e4b6acb5db11843b66b812040de3"],["/gallery/style.css","23d5b09a9f2a0345abbdbe19dabd492b"],["/idea/index.html","b6a6842530ca14afd12571aa80abadf6"],["/idea/style.css","12452a1dd89547efd357b78d463a2c84"],["/images/Demizu.Posuka.full.2350288.jpg","c1f8c975245bd8cf36a4ba82bf66e600"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","9bf704f82fe588caf9d1198ef06aa49d"],["/images/background1.jpg","25c4c52d404ff5cf77a45c27de230e97"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","a7ac690e64b87b6b1b68425a37b0f503"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","850b3ed1dec8a5b76173c517dd5b5a62"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/share/index.html","f4a8dbe29c2996214249033e0e4e0326"],["/share/style.css","e836809ee66a923a3ed7fed169d96490"],["/sw-register.js","af4fe59f87152c4a79673a8682aaa13d"],["/tags/index.html","bedfbe95d8d8733545e6ec0e5f369500"],["/tags/mathematica/index.html","0a54efd8e3c1585ac8174453cd976fc0"],["/tags/坑/index.html","82ff98e11e2b0b40aa4e167c12ce51f2"],["/tags/小细节/index.html","0d32bdc5d163c25d00e318e70bd5b1e7"],["/tags/微积分/index.html","a2dbf79d3e80f36d9d0aeafc4ea5fb74"],["/tags/忏悔录/index.html","6076855d2efd51d3dc023184212b9b6b"],["/tags/琐记/index.html","9f7484041151ca204fb4a0c3cea4bbc6"],["/tags/积分/index.html","612644b4a073074ab7469128427c89b5"],["/tags/线性代数/index.html","dacdfce575cb62a42be97e51a7b33522"],["/tags/量子力学/index.html","5cefad9ceaf5c539e0c302b6a3d86a93"],["/uploads/avatar.jpg","9bf704f82fe588caf9d1198ef06aa49d"]];
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
