/* mculab 的 Service Worker，打包时生成（src/pwa/service-worker.ts） */
const CACHE = 'mculab-7f41d58-1792748112714'
const RUNTIME = 'mculab-runtime'
const PRECACHE = ["/index.html","/manifest.webmanifest","/favicon.svg","/assets/index-kneQDQfY.js","/assets/AnimationDialog-rux7XtLB.js","/assets/Canvas-BkcmbQxR.js","/assets/EnvironmentPanel-D-AF9uJs.js","/assets/FeedbackDialog-B_gAVbyS.js","/assets/FlashDialog-DwqOkZkQ.js","/assets/GlyphDialog-Ds4iDRS0.js","/assets/LogicPanel-DZfAn7Nr.js","/assets/Modal-oqZiSrr7.js","/assets/Monaco-05RAy7yu.js","/assets/RegistersPanel-BA67p1i7.js","/assets/ReportDialog-DceqtRrK.js","/assets/RichText-DHMDu0Lg.js","/assets/ToolDialogs-Da119_sW.js","/assets/ToolDialogs-TtftDXIq.js","/assets/VariablesPanel-BshjPecg.js","/assets/avr-variables-Bx6IPHMd.js","/assets/avr-view-Ajm1FvCj.js","/assets/bom-BsT_Wdtk.js","/assets/bom-DZQ2Bj27.js","/assets/build-Bm97g0Mz.js","/assets/calc-D7P1kz1U.js","/assets/checks-B1cFytsM.js","/assets/cpp-C7h46wYY.js","/assets/disasm-M1PsGA8W.js","/assets/drivers-Dn-GEBgI.js","/assets/examples-DlA6YNnb.js","/assets/explain-BbZt717U.js","/assets/export-image-CN288rST.js","/assets/feedback-CHUZKM6K.js","/assets/firmware-DLBwjnWQ.js","/assets/handle-CtAjof6e.js","/assets/headers-DZTnK8Af.js","/assets/i18n-DkINFNXl.js","/assets/jsx-runtime-Cx0HxCDb.js","/assets/keil-project-Cg_peRbH.js","/assets/layout-Doi9LJDZ.js","/assets/lcd1602-font-a00-D2wjjHmX.js","/assets/logic-capture-DdqRXPlP.js","/assets/part-meta-DZCC22S8.js","/assets/preload-helper-BLdHbfdN.js","/assets/route-CGH2JdeT.js","/assets/seg-clock-B9OuRIyv.js","/assets/serial-format-eLN0zGRE.js","/assets/sim-control-heHu1on9.js","/assets/snippets-Dk51v2D4.js","/assets/store-BfXgc25t.js","/assets/template-D5wLESjO.js","/assets/templates-D9Ua3Quv.js","/assets/theme-BfeGhk26.js","/assets/types-DexORVjg.js","/assets/views-cwGBMCZH.js","/assets/views-jkeJw19H.js","/assets/web-serial-uH_OhQ4k.js","/assets/zip-Dai4XsuY.js","/assets/Monaco-DiAA8yrh.css","/assets/codicon-DF1abBS2.ttf","/assets/compile-worker-DOfNEA8j.js","/assets/editor.worker-C8DPLl6p.js","/assets/index-DjYcdI_n.css","/assets/sim-worker-ClZrg9ww.js"]
/** 这一版的编译器文件：原路径（以前的页面请求的）→ 带版本号的路径 */
const LEGACY = {"/sdcc/cc1.mjs":"/assets/sdcc-cc1.6cf8a13ce61e.mjs","/sdcc/cc1.wasm":"/assets/sdcc-cc1.0e6d422bb47e.wasm","/sdcc/sdas8051.mjs":"/assets/sdcc-sdas8051.2431ee567279.mjs","/sdcc/sdas8051.wasm":"/assets/sdcc-sdas8051.e0c476abc40d.wasm","/sdcc/sdcc.mjs":"/assets/sdcc-sdcc.260283f8401d.mjs","/sdcc/sdcc.wasm":"/assets/sdcc-sdcc.70e8d5011cc2.wasm","/sdcc/sdld.mjs":"/assets/sdcc-sdld.d35b228bc280.mjs","/sdcc/sdld.wasm":"/assets/sdcc-sdld.a15c15e7b98e.wasm","/sdcc/share.tar":"/assets/sdcc-share.9ab9ae809da8.tar","/avr/avr-as.mjs":"/assets/avr-avr-as.4c258b21d081.mjs","/avr/avr-as.wasm":"/assets/avr-avr-as.bb7324179001.wasm","/avr/avr-ld.mjs":"/assets/avr-avr-ld.6ed78d0327c3.mjs","/avr/avr-ld.wasm":"/assets/avr-avr-ld.49852416aa50.wasm","/avr/avr-objcopy.mjs":"/assets/avr-avr-objcopy.1790b9a3c716.mjs","/avr/avr-objcopy.wasm":"/assets/avr-avr-objcopy.b5ea03518cbc.wasm","/avr/cc1plus.mjs":"/assets/avr-cc1plus.1fe6904aaa76.mjs","/avr/cc1plus.wasm":"/assets/avr-cc1plus.df55a39c41d4.wasm","/avr/share.tar":"/assets/avr-share.444d681386e1.tar"}
const CURRENT = new Set(Object.values(LEGACY))
const HASHED = new RegExp("^/assets/(sdcc|avr)-[^/.]+\\.([0-9a-f]{12})\\.(?:mjs|wasm|tar)$")
const HASH_LENGTH = 12
const MATCH = { ignoreVary: true }

/** 带版本号的编译器文件：哪一套（sdcc、avr）、版本号；不是返回空 */
function compilerOf(pathname) {
  const m = HASHED.exec(pathname)
  return m ? { family: m[1], hash: m[2] } : null
}

/** /sdcc、/avr 下的原文件是哪一套 */
function legacyFamily(pathname) {
  for (const f of ['sdcc', 'avr']) if (pathname.startsWith('/' + f + '/')) return f
  return ''
}

/** 内容的版本号：SHA-256 的前几位 */
async function digest(body) {
  const bytes = new Uint8Array(await crypto.subtle.digest('SHA-256', body))
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('').slice(0, HASH_LENGTH)
}

/** 把读出来的内容重新包成回应：已经解压了，去掉 gzip 的说明和压缩后的长度 */
function copy(body, response) {
  const headers = new Headers(response.headers)
  headers.delete('content-encoding')
  headers.delete('content-length')
  return new Response(body, { status: response.status, statusText: response.statusText, headers })
}

/** 存进缓存；失败（空间不够）就算了，不影响页面拿到文件 */
async function store(key, response) {
  try {
    await (await caches.open(RUNTIME)).put(key, response)
  } catch {}
}

/**
 * 上网取一个带版本号的编译器文件，核对内容，对得上就存起来。对不上先绕过浏览器的 HTTP 缓存再取一次
 * （代理塞的拦截页可能被浏览器缓存了），还不对返回 503
 */
async function fetchCompiler(key, hash) {
  for (const cache of ['default', 'reload']) {
    const response = await fetch(key, { cache })
    if (!response.ok) return response
    const body = await response.arrayBuffer()
    if ((await digest(body)) !== hash) continue
    await store(key, copy(body, response))
    return copy(body, response)
  }
  return new Response('编译器文件和版本号对不上（可能被网络代理拦了），检查一下网络再试', { status: 503 })
}

/** 页面要带版本号的编译器文件：先看缓存 */
async function compilerFile(url, hash) {
  // 重试时页面会在网址后面加 ?retry=（浏览器记着上次没下载成功的模块），不算进缓存的名字
  const key = url.origin + url.pathname
  const hit = await caches.match(key, MATCH)
  return hit || fetchCompiler(key, hash)
}

/**
 * 整理编译器的缓存：以前没带版本号存的、内容和这一版一样的换成带版本号的名字；
 * 一套编译器这一版的文件都齐了，删掉那套里这一版用不到的（别的版本的、不带版本号的）。
 * 不齐时都留着：记着这套用过，下次接着下载。返回缓存里有哪几套（用过的编译器）
 */
async function tidy() {
  const cache = await caches.open(RUNTIME)
  const used = new Set()
  const entries = []
  for (const request of await cache.keys()) {
    const url = new URL(request.url)
    const c = compilerOf(url.pathname)
    const family = c ? c.family : legacyFamily(url.pathname)
    if (!family) continue
    used.add(family)
    entries.push({ request, url, family })
    const now = c ? '' : LEGACY[url.pathname]
    try {
      if (now && !(await cache.match(url.origin + now))) {
        const response = await cache.match(request)
        const body = response && (await response.arrayBuffer())
        if (body && (await digest(body)) === compilerOf(now).hash) await cache.put(url.origin + now, copy(body, response))
      }
    } catch {}
  }
  for (const family of used) {
    const missing = [...CURRENT].filter((p) => compilerOf(p).family === family)
    const have = await Promise.all(missing.map((p) => cache.match(self.location.origin + p)))
    if (have.some((h) => !h)) continue
    for (const e of entries) if (e.family === family && (!CURRENT.has(e.url.pathname) || e.url.search)) await cache.delete(e.request)
  }
  return used
}

/** 把用过的编译器这一版的文件下载齐（families：页面刚用过的；缓存里有的那几套也算） */
async function prefetch(families) {
  const used = await tidy()
  for (const f of families || []) used.add(f)
  const cache = await caches.open(RUNTIME)
  for (const path of CURRENT) {
    const c = compilerOf(path)
    if (!used.has(c.family)) continue
    const key = self.location.origin + path
    if (await cache.match(key)) continue
    try {
      await fetchCompiler(key, c.hash)
    } catch {
      // 断网了：下次再说
      break
    }
  }
  await tidy()
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      // cache: 'reload' 绕过浏览器的 HTTP 缓存：GitHub Pages 的页面缓存 10 分钟，不绕过可能存进上一版的 index.html
      .then((cache) => Promise.all(PRECACHE.map((url) => cache.add(new Request(url, { cache: 'reload' })).catch(() => {}))))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('mculab-') && k !== CACHE && k !== RUNTIME).map((k) => caches.delete(k))))
      .then(() => tidy())
      .catch(() => {})
      .then(() => self.clients.claim()),
  )
})

// 页面说"这几套编译器用过"（打开页面时、编译成功后）：在后台下载齐，下次断网也能编译。
// 放在 message 的 waitUntil 里：Service Worker 下载完之前不会被浏览器停掉，也不挡着页面的请求
self.addEventListener('message', (event) => {
  const data = event.data || {}
  if (data.type === 'prefetch') event.waitUntil(prefetch(data.families).catch(() => {}))
})

async function cacheFirst(request, cacheName) {
  const hit = await caches.match(request, MATCH)
  if (hit) return hit
  const response = await fetch(request)
  if (response.ok) (await caches.open(cacheName)).put(request, response.clone()).catch(() => {})
  return response
}

async function networkFirst(request, cacheName, key) {
  try {
    const response = await fetch(request)
    if (response.ok) (await caches.open(cacheName)).put(key || request, response.clone()).catch(() => {})
    return response
  } catch (err) {
    const hit = await caches.match(key || request, MATCH)
    if (hit) return hit
    throw err
  }
}

self.addEventListener('fetch', (event) => {
  const request = event.request
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return
  const compiler = compilerOf(url.pathname)
  if (request.mode === 'navigate') event.respondWith(networkFirst(request, CACHE, '/index.html'))
  else if (compiler) event.respondWith(compilerFile(url, compiler.hash))
  else if (url.pathname.startsWith('/assets/')) event.respondWith(cacheFirst(request, CACHE))
  else if (legacyFamily(url.pathname)) event.respondWith(networkFirst(request, RUNTIME))
  else event.respondWith(networkFirst(request, CACHE))
})
