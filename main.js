// 研究迴路島網站：資料直接寫在下方常數（不在執行時 fetch，本機直接開檔也能顯示）。
"use strict";

const ISLAND = {
 "format": "isle_builder.island/1",
 "island_type": "研究迴路島",
 "display_name": "小照同學",
 "version_no": 1,
 "saved_at": "2026-10-28 21:47:39",
 "content": {
  "title": "長照 AI 照護小幫手「小照」：有依據才回答的規範問答",
  "question": "照服員在現場查法規與機構規範時，一個以 LINE 為入口的檢索增強問答系統，能不能做到「有依據才回答、沒依據就轉督導」，而且在真實法規與攻擊題下不答錯？",
  "chapters": [
   {
    "name": "緒論",
    "goal": "照服員為什麼需要一個「只回答有依據」的查詢助手？現在的做法缺什麼？",
    "done": "訪談長照團隊，確認痛點：法規與機構規範只能問督導或翻紙本。寫出構想書，定下產品邊界：規範查詢附出處、依據不足轉督導；不做醫療診斷、不做補助試算。",
    "items": [
     "需求對照表（R1–R24）",
     "產品邊界：做與不做",
     "兩個合法出口：附出處回答／轉督導"
    ],
    "tips": [
     "先問自己：你的動機是前人研究不足、結果互相矛盾，還是延伸沒人討論過的議題？",
     "緒論照這條路走：大圖像、問題與相關研究、你的解法為何更好、評估比較、研究意涵。",
     "用 4P 檢查研究問題：對象是誰、問題是什麼、方案為何、要解釋哪個現象？",
     "別拿專案名稱當題目；標題要放關鍵字，讓讀者一看就知道這篇在解什麼問題。",
     "貢獻要點名新在哪裡：新問題、新方法、新實驗、新分析或新結果，至少講清楚一項。"
    ],
    "handoff": "研究問題與「兩個合法出口」交給文獻探討：前人怎麼處理檢索不到、怎麼證明引用可信？",
    "feedback": "實驗章顯示題目用語和條文用語的落差是主要失敗原因，回頭把研究範圍寫明：先限住宿式機構與十二份真實法規。",
    "image_ids": []
   },
   {
    "name": "文獻探討",
    "goal": "前人怎麼讓 AI 的回答可追溯、可驗證？哪些做法還沒用在長照現場？",
    "done": "讀完團隊整理的 20 篇文獻（去重後）：19 篇在出版商頁或 arXiv 查證到，1 篇只有作者自行上傳版本，不採用。依「檢索、生成、驗證、人工接手」四個特徵排成比較表；表中沒有一篇同時涵蓋中文法規語料與督導接手。",
    "items": [
     "RAG 骨架：Lewis 2020、Gao 2023 綜述",
     "有依據才回答：Self-RAG 2024、CaLM 2024",
     "引用可驗證：Liu 2023、FullCite 2026、PaperTrail 2026",
     "失敗點：Barnett 2024",
     "中文領域評測：DomainRAG 2024",
     "人在迴路：Zhang 2026、GamELY 2025、Dohopolski 2026（預印本）",
     "長照需求：Schwabe 2026、Michelet 2025"
    ],
    "tips": [
     "文獻不是摘要清單：要描述、分析、批評，最後引出前人研究和你的研究之間的邏輯。",
     "把相關研究排成特徵比較表，再問自己：哪幾個特徵的組合沒人做過，為什麼？",
     "這章也要先交代後面章節會拿來比較的評估指標；參考文獻量約抓頁數的兩倍。",
     "搜尋先鎖定近五年、關鍵字、關鍵人物、關鍵學校與實驗室，摸清這個領域的世界紀錄。",
     "別直接信 AI 整理的書目：Deep Research 曾把期刊名寫錯，每筆都要回原文核對。"
    ],
    "handoff": "比較表指出的三個要素：檢索門檻、引用支持檢查、轉督導，交給研究方法定成流程節點與評估指標。",
    "feedback": "核對書目時發現兩份同名的 GamELY 檔案其實一篇是 CaLM，長照 LLM 那篇的年份也寫錯；回頭修正書目，並把未經同儕審查的預印本另外標示。",
    "image_ids": []
   },
   {
    "name": "研究方法",
    "goal": "用什麼流程與評測設計，才能回答「有依據才回答、不答錯」這個問題？",
    "done": "採「建出系統、反覆評測」的設計導向取向：用 LangGraph 把問答流程寫死成固定節點（去識別、風險篩檢、檢索、生成、驗證、回答或轉督導），每一步都留紀錄可稽核。評測分三套題：合成 25 題、真實法規 17 題、攻擊 49 題 9 類，答錯時逐層歸因。",
    "items": [
     "固定節點的問答流程",
     "三套評測題",
     "指標：召回、答對、拒答正確、版本正確、錯答",
     "逐層歸因工具"
    ],
    "tips": [
     "先分清方法論和方法：除了列出問卷、訪談等工具，還要寫出為什麼選這個方法。",
     "質性路線：訪談到不再冒出新主題就是理論飽和；同質樣本約九到十七次訪談即可能飽和。",
     "問卷路線：先查有沒有成熟量表可改編；主題太新就先做小規模訪談，免得問不到重點。",
     "問卷路線：每題只問一件事、不帶引導語，「經常」改成「過去三個月幾次」，施測前一定要預試。",
     "只要研究牽涉到人，連線上問卷也算；研究計畫要先送研究團隊以外的專家審查。"
    ],
    "handoff": "流程節點與門檻規格交給系統實作；三套題目與指標交給實驗章。",
    "feedback": "第一輪實驗只有合成題，看不出換說法題錯在哪一層；回頭加上攻擊題庫與逐層歸因。",
    "image_ids": []
   },
   {
    "name": "系統設計與實作",
    "goal": "小照怎麼把流程實作出來？哪些設計是為了「不答錯」？",
    "done": "後端 FastAPI 加 LangGraph，資料放 PostgreSQL 與 pgvector；照服員端用 LINE Bot 與 LIFF，語音提問走 faster-whisper；督導後台處理轉來的案件。部署在 24 小時主機，真實 LINE 手機實測六步全過。",
    "items": [
     "LangGraph 問答流程",
     "LINE Bot 與 LIFF",
     "faster-whisper 語音",
     "去識別化規則",
     "督導後台與案件狀態機"
    ],
    "tips": [
     "這章是你的解法：一般研究論文中它約占三到四成篇幅；先說清它是最佳解、啟發式，還是特殊情境解。",
     "別只做紙上研究：系統沒真的建出來，就不知道它能不能動；模擬也不是偷工的藉口。",
     "逐條檢查設計背後的假設是否成立；增減限制條件常能長出新解法，但不能假設不可能的事。",
     "寫清實作設定：資料集、基準與系統參數要交代到別人能重現，能用公開資料集就用，否則說明原因。",
     "流程圖可請 AI 依實驗步驟產生 Mermaid 碼，再匯入 draw.io 修整，別直接貼生成的圖。"
    ],
    "handoff": "可部署的系統與評測腳本交給實驗章，在真實法規語料上跑三套題。",
    "feedback": "實驗發現舊切塊器遇到條文裡的「一、」就把整條截斷，真實法規召回是零；回頭修切塊器，並加上標題感知檢索。",
    "image_ids": [
     3
    ]
   },
   {
    "name": "實驗與結果",
    "goal": "在真實法規與攻擊題下，小照答對多少、錯答多少？失敗出在哪一層？",
    "done": "十二份真實法規入庫後：召回十題中九題、答對八題、拒答五題全對、版本兩題全對、錯答零。攻擊測試四十九題，修正後由三十九題提升到四十四題。bge-m3 對照沒有量到增益、重排器實測變差，兩者都關閉。",
    "items": [
     "法規題：召回 9/10、答對 8/10、錯答 0",
     "攻擊題：39 → 44/49",
     "bge-m3 對照：無增益",
     "重排器：變差、關閉"
    ],
    "tips": [
     "評估計畫越早定越好：先決定比較指標；就算宣稱首創，也要和相近的解法比一比。",
     "別只寫「圖四為實驗結果」：要說明座標軸意義、趨勢走向、線在哪裡交叉，差異有多大。",
     "表格數字對齊小數點或靠右；別用 3D 圓餅圖，圖在黑白列印下也要分得清楚。",
     "p 值小於 .05 不等於重要：要同時報告效應量，跑檢定前先檢查常態性等前提假設。",
     "結果出來先對照原研究目的：是否切合？該加做實驗，還是縮小研究範圍、修改題目？"
    ],
    "handoff": "剩下五題失敗與各自的失敗層（門檻、排序、生成），交給結論章判斷研究問題回答到什麼程度。",
    "feedback": "結論章要求把「答錯」和「安全轉督導」分開算；回頭把結果表拆成答對、錯答、拒答三欄。",
    "image_ids": [
     4
    ]
   },
   {
    "name": "結論與未來工作",
    "goal": "研究問題回答了嗎？限制在哪？下一輪要問什麼？",
    "done": "真實法規題做到錯答零；攻擊題剩五題失敗，其中兩題是挑錯出處硬答，所以「不答錯」只在法規題組成立。限制：題數少只看方向、門檻以合成資料校準、iOS 未實測。",
    "items": [
     "研究問題的回答",
     "限制：題數少",
     "限制：iOS 未實測",
     "下一輪：語意向量雙門檻"
    ],
    "tips": [
     "先總結研究結果，再逐一回頭檢查：緒論提出的每個研究問題，這裡都回答了嗎？",
     "別在結論塞進前文沒出現過的新概念或新事實，只就研究發現做扼要歸結。",
     "結論段要短、語氣正面；限制和未來工作屬於討論，另立小節寫，不要混進結論。",
     "質性訪談歸納出的命題只是初步推測，未來工作要寫明打算怎麼用量化研究驗證。",
     "把研究限制順推成未來方向，它就是下一輪研究的「延伸」型動機——走回饋橋，回到緒論。"
    ],
    "handoff": "下一輪的新問題：題目用語和條文用語落差大時，語意向量能不能在不增加錯答的前提下補回召回？這需要更多拒答題來校準門檻——經回饋橋回到緒論。",
    "feedback": "寫限制時發現拒答題只有五題，回頭要求實驗章在結果表註明「題數少，只看方向」。",
    "image_ids": []
   }
  ]
 },
 "images": {
  "3": "images/3.png",
  "4": "images/4.png"
 }
};

const C = ISLAND.content;
const SHORT = ["緒論", "文獻", "方法", "實作", "結果", "結論"];
const imgSrc = (id) => ISLAND.images[String(id)];

function h(tag, attrs, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (k === "class") e.className = v; else if (k === "text") e.textContent = v; else e.setAttribute(k, v);
  }
  for (const k of kids.flat()) if (k != null && k !== "") e.append(k);
  return e;
}

// ---------- 標題與文字版 ----------
document.title = `${ISLAND.display_name}的${ISLAND.island_type}`;
document.getElementById("title").textContent = C.title || `${ISLAND.display_name}的研究迴路島`;
document.getElementById("question").textContent = C.question ? `核心研究問題：${C.question}` : "";

function field(label, value) {
  return value ? [h("dt", { text: label }), h("dd", { text: value })] : [];
}

document.getElementById("chapters").append(...C.chapters.map((ch, i) => h("article", { class: "chapter" },
  h("h3", { text: `第 ${i + 1} 章　${ch.name}` }),
  h("dl", {}, ...field("本章要回答什麼", ch.goal), ...field("本章做了什麼", ch.done),
    ch.items.length ? [h("dt", { text: "證據項目" }), h("dd", {}, h("ul", {}, ch.items.map((t) => h("li", { text: t }))))] : [],
    ...field(i === 5 ? "→ 交給下一輪（經回饋橋回到緒論）" : "→ 交給下一章", ch.handoff),
    ...field("← 回頭修正", ch.feedback)),
  ch.image_ids.map((id) => h("img", { src: imgSrc(id), alt: ch.name, loading: "lazy" })),
  ch.tips.length ? h("div", { class: "tips" }, h("strong", { text: "島民提醒" }),
    h("ul", {}, ch.tips.map((t) => h("li", { text: t })))) : null)));

// ---------- 細節面板 ----------
const panel = document.getElementById("panel");
const panelBody = document.getElementById("panel-body");
document.getElementById("panel-close").addEventListener("click", () => { panel.hidden = true; });

function show(info) {
  panel.classList.toggle("npc", info.kind === "npc");
  panelBody.replaceChildren(...info.render());
  panel.hidden = false;
}

const chapterInfo = (ch, i) => ({ kind: "chapter", render: () => [
  h("h3", { id: "panel-title", text: `第 ${i + 1} 章　${ch.name}` }),
  ...[["本章要回答什麼", ch.goal], ["本章做了什麼", ch.done],
      [i === 5 ? "→ 交給下一輪" : "→ 交給下一章", ch.handoff], ["← 回頭修正", ch.feedback]]
    .filter(([, v]) => v).map(([k, v]) => h("div", { class: "row" }, h("span", { class: "k", text: k }), v)),
  ...ch.image_ids.map((id) => h("img", { src: imgSrc(id), alt: ch.name }))] });

// ---------- 3D ----------
const host = document.getElementById("scene");
const labelsBox = document.getElementById("labels");
let renderer = null;
try { if (window.THREE) renderer = new THREE.WebGLRenderer({ antialias: true }); } catch (e) { renderer = null; }

if (!renderer) {
  document.getElementById("nogl").hidden = false;
} else {
  const R = 8, ISLET = 2.4;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x9fd3e0);
  scene.fog = new THREE.Fog(0x9fd3e0, 45, 160);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x446677, 0.9));
  const sun = new THREE.DirectionalLight(0xffffff, 0.7);
  sun.position.set(5, 10, 7);
  scene.add(sun);
  const sea = new THREE.Mesh(new THREE.CircleGeometry(400, 64), new THREE.MeshLambertMaterial({ color: 0x4fa3c7 }));
  sea.rotation.x = -Math.PI / 2;
  scene.add(sea);
  const mat = (color, extra) => new THREE.MeshLambertMaterial({ color, ...extra });
  const pick = [];
  const labels = [];
  const add = (mesh, info) => { scene.add(mesh); if (info) { mesh.userData.info = info; pick.push(mesh); } return mesh; };
  const label = (text, pos, cls) => {
    const el = h("div", { class: "lab" + (cls ? " " + cls : ""), text });
    labelsBox.append(el);
    labels.push({ el, pos, text });
  };

  // 六座小島：第 1 章在左前方，順時針到第 6 章（右前方）
  const pos = C.chapters.map((_, i) => {
    const a = (2 * Math.PI) / 3 + (i * Math.PI) / 3;
    return new THREE.Vector3(Math.cos(a) * R, 0, Math.sin(a) * R);
  });
  C.chapters.forEach((ch, i) => {
    const p = pos[i], info = chapterInfo(ch, i);
    const base = add(new THREE.Mesh(new THREE.CylinderGeometry(ISLET * 0.92, ISLET, 0.5, 32), mat(0xe9d8a6)), info);
    base.position.copy(p);
    const top = add(new THREE.Mesh(new THREE.CylinderGeometry(ISLET * 0.8, ISLET * 0.88, 0.5, 32), mat(0x6fae5c)), info);
    top.position.set(p.x, 0.5, p.z);
    // 證據項目＝建築
    ch.items.forEach((t, k) => {
      const a = (k * 2 * Math.PI) / ch.items.length + 0.6, hh = 0.5 + (k % 3) * 0.25;
      const b = add(new THREE.Mesh(new THREE.BoxGeometry(0.42, hh, 0.42), mat(0xf2efe6)),
        { kind: "item", render: () => [h("h3", { id: "panel-title", text: t }), h("p", { text: `第 ${i + 1} 章「${ch.name}」的證據項目` })] });
      b.position.set(p.x + Math.cos(a) * 0.85, 0.75 + hh / 2, p.z + Math.sin(a) * 0.85);
    });
    // 島民＝提醒
    ch.tips.forEach((t, k) => {
      const a = Math.PI / 2 + (k - (ch.tips.length - 1) / 2) * 0.55;
      const x = p.x + Math.cos(a) * ISLET * 0.62, z = p.z + Math.sin(a) * ISLET * 0.62;
      const info = { kind: "npc", render: () => [h("h3", { id: "panel-title", text: `${ch.name}島的島民` }), h("p", { text: t })] };
      const body = add(new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, 0.5, 12), mat(0xe8a33d)), info);
      body.position.set(x, 1.0, z);
      const head = add(new THREE.Mesh(new THREE.SphereGeometry(0.15, 14, 10), mat(0xf6d7b0)), info);
      head.position.set(x, 1.37, z);
    });
    label(`${i + 1} ${ch.name}`, new THREE.Vector3(p.x, 1.25, p.z), null);
    labels[labels.length - 1].short = `${i + 1} ${SHORT[i]}`;  // 窄螢幕用兩字簡稱，後排標籤才不互壓
  });

  // 橋：相鄰木橋＋第 6 → 第 1 章的回饋橋
  const bridge = (a, b, color) => {
    const len = a.distanceTo(b) - ISLET * 1.9;
    const m = add(new THREE.Mesh(new THREE.BoxGeometry(len, 0.15, 0.6), mat(color)));
    m.position.set((a.x + b.x) / 2, 0.45, (a.z + b.z) / 2);
    m.rotation.y = -Math.atan2(b.z - a.z, b.x - a.x);
  };
  for (let i = 1; i < pos.length; i++) bridge(pos[i - 1], pos[i], 0x9a6b3f);
  bridge(pos[5], pos[0], 0x3b4a6b);
  label("回饋 ↺", new THREE.Vector3((pos[5].x + pos[0].x) / 2, 0.6, (pos[5].z + pos[0].z) / 2), "feedback");

  // 中央燈塔＝論文題目
  const beacon = { kind: "beacon", render: () => [h("h3", { id: "panel-title", text: C.title }),
    h("div", { class: "row" }, h("span", { class: "k", text: "核心研究問題" }), C.question)] };
  add(new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.4, 0.5, 20), mat(0x8d8f86)), beacon).position.y = 0.1;
  add(new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.6, 3, 16), mat(0xf2efe6)), beacon).position.y = 1.5;
  add(new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 12), mat(0xffd34d, { emissive: 0x664400 })), beacon).position.y = 3.3;
  label("燈塔", new THREE.Vector3(0, 2.2, 0), "beacon");

  // 鏡頭與互動：拖曳旋轉、滾輪／雙指縮放、點選
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 400);
  host.append(renderer.domElement);
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  let theta = 0, phi = 0.95, dist = 30, w = 0, hgt = 0;
  function resize() {
    w = host.clientWidth; hgt = host.clientHeight;
    renderer.setSize(w, hgt);
    camera.aspect = w / hgt;
    camera.updateProjectionMatrix();
    const span = R * 2 + ISLET * 2 + 4;
    // 寬、高兩個方向都要放得下整個環，取較遠的距離
    const tanV = Math.tan((22.5 * Math.PI) / 180);
    dist = Math.max(14, (span / 2) / (tanV * Math.min(w / hgt, 1.6)) * 1.12, (span / 2) / tanV * 0.95);
    labels.forEach((l) => { l.el.textContent = w < 600 && l.short ? l.short : l.text; });
  }
  function place() {
    camera.position.set(dist * Math.sin(phi) * Math.sin(theta), dist * Math.cos(phi), dist * Math.sin(phi) * Math.cos(theta));
    camera.lookAt(0, 1, 0);
  }
  window.addEventListener("resize", () => { resize(); place(); });
  resize(); place();

  const el = renderer.domElement, pointers = new Map();
  let moved = false, pinch = 0;
  el.addEventListener("pointerdown", (e) => { el.setPointerCapture(e.pointerId); pointers.set(e.pointerId, e); moved = false; });
  el.addEventListener("pointermove", (e) => {
    const prev = pointers.get(e.pointerId);
    if (!prev) return;
    pointers.set(e.pointerId, e);
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()], d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      if (pinch) dist = Math.min(60, Math.max(8, dist * (pinch / d)));
      pinch = d; moved = true; place();
      return;
    }
    const dx = e.clientX - prev.clientX, dy = e.clientY - prev.clientY;
    if (Math.abs(dx) + Math.abs(dy) > 2) moved = true;
    theta -= dx * 0.01; phi = Math.min(1.45, Math.max(0.25, phi - dy * 0.01));
    place();
  });
  const end = (e) => { pointers.delete(e.pointerId); if (pointers.size < 2) pinch = 0; };
  el.addEventListener("pointerup", end);
  el.addEventListener("pointercancel", end);
  el.addEventListener("wheel", (e) => { e.preventDefault(); dist = Math.min(60, Math.max(8, dist * (e.deltaY > 0 ? 1.1 : 0.9))); place(); },
    { passive: false });
  const ray = new THREE.Raycaster(), mouse = new THREE.Vector2();
  el.addEventListener("click", (e) => {
    if (moved) return;
    const r = el.getBoundingClientRect();
    mouse.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(mouse, camera);
    const hit = ray.intersectObjects(pick)[0];
    if (hit) show(hit.object.userData.info); else panel.hidden = true;
  });

  (function loop() {
    for (const l of labels) {
      const q = l.pos.clone().project(camera);
      l.el.style.display = q.z < 1 ? "" : "none";
      l.el.style.left = `${((q.x + 1) / 2) * w}px`;
      l.el.style.top = `${((1 - q.y) / 2) * hgt}px`;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  })();
}
