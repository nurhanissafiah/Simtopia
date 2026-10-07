const STORAGE_KEY = "simtopiaProgressV1";

const characters = [
  { id: "judy", name: "Judy", fullName: "Judy Hopps", emoji: "🐰", role: "Wira pantas & berani", trait: "Berani menghadapi cabaran", colors: ["#bfe4fb", "#e7f8ff"] },
  { id: "nick", name: "Nick", fullName: "Nick Wilde", emoji: "🦊", role: "Bijak & licik", trait: "Pandai mencari jalan keluar", colors: ["#f7c58b", "#fff1d7"] },
  { id: "flash", name: "Flash", fullName: "Flash Slothmore", emoji: "🦥", role: "Tenang & teliti", trait: "Teliti sebelum membuat pilihan", colors: ["#d7d9dc", "#f5f5f5"] },
  { id: "finnick", name: "Finnick", fullName: "Finnick", emoji: "🦊", role: "Kecil tetapi hebat", trait: "Berani dan tidak mudah mengalah", colors: ["#d8b18b", "#f6e5d3"] },
];

const worldData = [
  {
    id: 1,
    title: "Rimba Petunjuk",
    subtitle: "Cari simpulan bahasa berdasarkan gambar.",
    level: "Rendah",
    icon: "🌿",
    mascot: "🦊",
    badge: "🌿",
    badgeName: "Lencana Penjejak",
    badgeText: "Berjaya mengenal pasti simpulan bahasa melalui petunjuk visual.",
  },
  {
    id: 2,
    title: "Lembah Jejak",
    subtitle: "Lengkapkan ayat berdasarkan konteks.",
    level: "Sederhana Mudah",
    icon: "🦊",
    mascot: "🐰",
    badge: "🧭",
    badgeName: "Lencana Pemburu Jejak",
    badgeText: "Berjaya menggunakan konteks ayat untuk menentukan simpulan bahasa.",
  },
  {
    id: 3,
    title: "Kota Simpulan",
    subtitle: "Baca perenggan dan bongkar petunjuk.",
    level: "Sederhana",
    icon: "🏙️",
    mascot: "🦝",
    badge: "🔎",
    badgeName: "Lencana Detektif Simpulan",
    badgeText: "Berjaya mentafsir maklumat dalam teks untuk menemukan simpulan bahasa.",
  },
  {
    id: 4,
    title: "Metrokata",
    subtitle: "Baca, tutur dialog dan bina cerita.",
    level: "Tinggi",
    icon: "🌆",
    mascot: "🦉",
    badge: "🎤",
    badgeName: "Lencana Wira Kata",
    badgeText: "Berjaya membaca, menuturkan dialog dan bercerita menggunakan simpulan bahasa.",
  },
];

const idioms = [
  { word: "kaki bangku", meaning: "Tidak pandai bermain bola.", emoji: "⚽", scene: "Bermain bola" },
  { word: "mulut tempayan", meaning: "Orang yang tidak dapat menyimpan rahsia.", emoji: "🤫", scene: "Rahsia terbocor" },
  { word: "anak emas", meaning: "Orang yang sangat disayangi atau diberi keistimewaan.", emoji: "⭐", scene: "Murid kesayangan" },
  { word: "otak udang", meaning: "Orang yang dianggap kurang bijak atau sukar memahami sesuatu.", emoji: "🧠", scene: "Soalan mudah" },
  { word: "buah tangan", meaning: "Hadiah yang dibawa ketika berkunjung ke sesuatu tempat.", emoji: "🎁", scene: "Hadiah untuk nenek" },
];

const world1 = [
  { ...idioms[0], picture: ["🦊", "⚽"], prompt: "Haiwan ini cuba bermain bola tetapi tendangannya sering tersasar. Apakah simpulan bahasa yang sesuai?" },
  { ...idioms[1], picture: ["🐰", "🤫"], prompt: "Haiwan ini berjanji menyimpan rahsia tetapi menceritakannya kepada orang lain. Apakah simpulan bahasa yang sesuai?" },
  { ...idioms[2], picture: ["🦉", "⭐"], prompt: "Guru sangat menyayangi murid ini dan sering memilihnya untuk membantu kelas. Apakah simpulan bahasa yang sesuai?" },
  { ...idioms[3], picture: ["🦝", "🧠"], prompt: "Haiwan ini masih tidak memahami soalan mudah walaupun sudah diterangkan beberapa kali. Apakah simpulan bahasa yang sesuai?" },
  { ...idioms[4], picture: ["🦊", "🎁"], prompt: "Haiwan ini membawa kek dan kuih ketika berkunjung ke rumah nenek. Apakah simpulan bahasa yang sesuai?" },
];

const world2 = [
  { sentence: "Amir tidak pandai bermain bola kerana dia {blank}.", answer: "kaki bangku" },
  { sentence: "Siti tidak dapat menyimpan rahsia kerana dia seperti {blank}.", answer: "mulut tempayan" },
  { sentence: "Aiman membawa sebekas kuih sebagai {blank} untuk datuk dan neneknya.", answer: "buah tangan" },
  { sentence: "Cikgu sangat menyayangi Ahmad kerana dia merupakan {blank} dalam kelas.", answer: "anak emas" },
  { sentence: "Jangan panggil Ali {blank} kerana dia seorang murid yang bijak.", answer: "otak udang" },
];

const world3 = [
  {
    title: "Misi 1 — Padang Bandar",
    paragraph: "Pada petang Sabtu, Amir bermain bola bersama-sama rakannya di padang. Amir cuba menendang bola ke arah gol, tetapi tendangannya sering tersasar. Dia juga tidak tahu cara mengawal bola dengan baik. Rakan-rakannya membantu Amir berlatih bermain bola.",
    clue: "Amir mengalami kesukaran bermain bola.",
    answer: "kaki bangku",
  },
  {
    title: "Misi 2 — Rahsia Kejutan",
    paragraph: "Siti mengetahui rahsia tentang hadiah hari jadi yang akan diberikan kepada Aina. Walaupun sudah berjanji untuk merahsiakannya, Siti menceritakan perkara itu kepada beberapa orang rakannya. Akhirnya, semua murid mengetahui tentang kejutan tersebut.",
    clue: "Siti membocorkan perkara yang sepatutnya dirahsiakan.",
    answer: "mulut tempayan",
  },
  {
    title: "Misi 3 — Wira Kelas",
    paragraph: "Ahmad sentiasa membantu gurunya mengemas bahan pembelajaran selepas kelas. Dia juga rajin menyiapkan tugasan dan menghormati semua gurunya. Oleh sebab sikapnya yang baik, guru-guru sangat menyayanginya.",
    clue: "Ahmad sangat disayangi oleh guru.",
    answer: "anak emas",
  },
  {
    title: "Misi 4 — Makmal Minda",
    paragraph: "Hakim sering membuat kesilapan ketika menjawab soalan yang mudah. Walaupun cikgu sudah menerangkan cara menjawab soalan tersebut beberapa kali, dia masih tidak memahami langkah-langkahnya.",
    clue: "Hakim sukar memahami perkara yang mudah.",
    answer: "otak udang",
  },
  {
    title: "Misi 5 — Rumah Nenek",
    paragraph: "Pada hujung minggu, Aina dan keluarganya berkunjung ke rumah nenek. Sebelum bertolak, ibu membeli sebiji kek dan beberapa kotak kuih untuk diberikan kepada nenek. Aina berasa gembira kerana dapat membawa sesuatu sebagai tanda kasih sayang kepada nenek.",
    clue: "Aina membawa makanan sebagai hadiah ketika berkunjung.",
    answer: "buah tangan",
  },
];

const dialogues = [
  {
    title: "Misi 1 — Kedai Kuih",
    characterEmojis: ["🐰", "🦊"],
    characterNames: ["Aisyah", "Nina"],
    lines: [
      ["Aisyah", "Wah, banyaknya kuih yang kamu bawa!"],
      ["Nina", "Saya beli kuih ini sebagai <span class='sim-word'>buah tangan</span> untuk nenek."],
      ["Aisyah", "Nenek tentu gembira apabila melihatnya."],
      ["Nina", "Betul, Aisyah. Ini memang kuih kegemaran nenek."],
    ],
    idiom: "buah tangan",
  },
  {
    title: "Misi 2 — Padang Sukan",
    characterEmojis: ["🦊", "🦝"],
    characterNames: ["Amir", "Danish"],
    lines: [
      ["Amir", "Jom, kita main bola di padang!"],
      ["Danish", "Boleh, tetapi saya tidak pandai bermain bola."],
      ["Amir", "Cuba tendang bola ke arah saya."],
      ["Amir", "Nampaknya, kamu memang <span class='sim-word'>kaki bangku</span>."],
    ],
    idiom: "kaki bangku",
  },
  {
    title: "Misi 3 — Rahsia Hari Jadi",
    characterEmojis: ["🐯", "🐰"],
    characterNames: ["Aina", "Mira"],
    lines: [
      ["Aina", "Jangan beritahu sesiapa bahawa esok ada sambutan hari jadi Siti."],
      ["Mira", "Baiklah, saya akan simpan rahsia itu."],
      ["Aina", "Jangan jadi <span class='sim-word'>mulut tempayan</span>."],
    ],
    idiom: "mulut tempayan",
  },
];

let state = loadState();
let currentWorld = null;
let currentQuestion = 0;
let worldAnswers = [];
let currentRecording = null;
let currentStream = null;
let currentAudioURL = null;

const $ = (selector) => document.querySelector(selector);

function defaultState() {
  return {
    totalScore: 0,
    completed: [],
    bestScores: {},
    badges: [],
    lastWorld: 1,
    selectedCharacter: null,
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultState(), ...JSON.parse(raw) } : defaultState();
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderTopStats();
  renderWorldMap();
}

function getSelectedCharacter() {
  return characters.find(c => c.id === state.selectedCharacter) || null;
}

function renderCharacterChip() {
  const c = getSelectedCharacter();
  const avatar = $("#characterChipAvatar");
  const name = $("#characterChipName");
  if (!avatar || !name) return;
  avatar.textContent = c ? c.emoji : "👤";
  name.textContent = c ? c.name : "Belum pilih";
}

function openCharacterSelection() {
  renderCharacterOptions();
  $("#characterOverlay").classList.remove("hidden");
}

function closeCharacterSelection() {
  $("#characterOverlay").classList.add("hidden");
}

function renderCharacterOptions() {
  const grid = $("#characterGrid");
  if (!grid) return;
  const selected = getSelectedCharacter();
  grid.innerHTML = characters.map(c => `
    <button type="button" class="character-option ${selected?.id === c.id ? "selected" : ""}" data-character="${c.id}" style="--portrait-a:${c.colors[0]};--portrait-b:${c.colors[1]}">
      <span class="choose-mark">✓</span>
      <div class="character-portrait">${c.emoji}</div>
      <h3>${c.name}</h3>
      <p>${c.fullName}<br>${c.role}</p>
    </button>
  `).join("");

  let pending = selected?.id || null;
  const preview = $("#selectedCharacterPreview");
  const confirm = $("#confirmCharacterBtn");

  const updatePreview = () => {
    const c = characters.find(x => x.id === pending);
    if (!c) {
      preview.textContent = "Pilih satu watak untuk memulakan misi.";
      confirm.disabled = true;
      return;
    }
    preview.innerHTML = `<span style="font-size:22px">${c.emoji}</span> Anda memilih <strong>${c.name}</strong> — ${c.trait}.`;
    confirm.disabled = false;
  };

  grid.querySelectorAll("[data-character]").forEach(btn => {
    btn.addEventListener("click", () => {
      pending = btn.dataset.character;
      grid.querySelectorAll(".character-option").forEach(x => x.classList.remove("selected"));
      btn.classList.add("selected");
      updatePreview();
    });
  });
  updatePreview();

  confirm.onclick = () => {
    if (!pending) return;
    state.selectedCharacter = pending;
    saveState();
    closeCharacterSelection();
    startWorld(1);
  };
}

function renderTopStats() {
  $("#scoreValue").textContent = state.totalScore;
  $("#badgeValue").textContent = state.badges.length;
  $("#progressText").textContent = `${state.completed.length} / 4 dunia`;
  renderCharacterChip();
}

function isUnlocked(worldId) {
  return worldId === 1 || state.completed.includes(worldId - 1);
}

function renderWorldMap() {
  const grid = $("#worldGrid");
  const stops = worldData.map(w => {
    const unlocked = isUnlocked(w.id);
    const done = state.completed.includes(w.id);
    const best = state.bestScores[w.id] || 0;
    return { ...w, unlocked, done, best };
  });

  grid.innerHTML = `
    <div class="simtopia-map-shell">
      <div class="map-topbar">
        <div>
          <span class="map-badge">SIMTOPIA</span>
          <strong>Laluan Wira Simpulan Bahasa</strong>
        </div>
        <div class="map-distance">${state.completed.length}/4 dunia ditawan</div>
      </div>

      <div class="simtopia-map" aria-label="Peta interaktif dunia SIMTOPIA">
        <svg class="map-route" viewBox="0 0 1000 510" preserveAspectRatio="none" aria-hidden="true">
          <path class="route-shadow" d="M 125 395 C 185 330, 190 200, 315 210 S 435 390, 545 318 S 665 118, 780 150 S 850 285, 910 105" />
          <path class="route-line" d="M 125 395 C 185 330, 190 200, 315 210 S 435 390, 545 318 S 665 118, 780 150 S 850 285, 910 105" />
          <circle cx="125" cy="395" r="7" class="route-dot"/><circle cx="315" cy="210" r="7" class="route-dot"/><circle cx="545" cy="318" r="7" class="route-dot"/><circle cx="910" cy="105" r="7" class="route-dot"/>
        </svg>

        <div class="map-decor decor-tree tree-1">🌳</div>
        <div class="map-decor decor-tree tree-2">🌲</div>
        <div class="map-decor decor-tree tree-3">🌳</div>
        <div class="map-decor decor-tree tree-4">🌲</div>
        <div class="map-decor decor-river">〰️〰️〰️</div>
        <div class="map-decor decor-water">💧</div>
        <div class="map-decor decor-cloud cloud-a">☁️</div>
        <div class="map-decor decor-cloud cloud-b">☁️</div>
        <div class="map-decor decor-building building-a">🏠</div>
        <div class="map-decor decor-building building-b">🏢</div>
        <div class="map-decor decor-building building-c">🏫</div>

        ${stops.map(w => {
          const pos = {
            1: { left: '12%', top: '72%' },
            2: { left: '31%', top: '31%' },
            3: { left: '54%', top: '57%' },
            4: { left: '86%', top: '20%' }
          }[w.id];
          return `
            <div class="map-stop world-${w.id} ${w.unlocked ? 'open' : 'locked'} ${w.done ? 'done' : ''}" style="left:${pos.left};top:${pos.top}">
              <button class="map-node" data-world-start="${w.id}" ${w.unlocked ? '' : 'disabled'} type="button" aria-label="${w.title}. ${w.unlocked ? 'Buka dunia' : 'Dunia terkunci'}">
                <span class="node-ring"></span>
                <span class="node-icon">${w.icon}</span>
                ${!w.unlocked ? '<span class="node-lock">🔒</span>' : w.done ? '<span class="node-check">✓</span>' : '<span class="node-arrow">→</span>'}
              </button>
              <div class="map-label">
                <div class="map-label-top">DUNIA ${w.id} • ${w.level}</div>
                <strong>${w.title}</strong>
                <span>${w.subtitle}</span>
                <small>${w.done ? `✓ Selesai · Rekod ${w.best} mata` : w.unlocked ? 'Klik untuk masuk' : 'Lengkapkan dunia sebelumnya'}</small>
              </div>
            </div>
          `;
        }).join('')}

        <div class="map-compass" aria-hidden="true">
          <div class="compass-n">N</div><div class="compass-arrow">✦</div>
        </div>
        <div class="map-title-plate">
          <span>THE</span> SIMTOPIA
          <small>MAP OF WORD ADVENTURES</small>
        </div>
      </div>

      <div class="map-character-chip">
        <div class="avatar">${getSelectedCharacter()?.emoji || "👤"}</div>
        <div><strong>${getSelectedCharacter()?.name || "Pilih watak"}</strong><span>Wira anda</span></div>
      </div>

      <div class="map-bottom-note">
        <div class="mini-mascot">${getSelectedCharacter()?.emoji || "🦊"}</div>
        <div><strong>Misi seterusnya: ${worldData[Math.min(state.completed.length, 3)].title}</strong><span>${worldData[Math.min(state.completed.length, 3)].subtitle}</span></div>
        <div class="map-score-chip">⭐ ${state.totalScore} mata</div>
      </div>
    </div>
  `;

  grid.querySelectorAll("[data-world-start]").forEach(btn => {
    btn.addEventListener("click", () => startWorld(Number(btn.dataset.worldStart)));
  });
}

function showScreen(id) {
  ["homeScreen", "gameScreen", "howScreen"].forEach(key => {
    $("#" + key).classList.toggle("active", key === id);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startWorld(worldId) {
  if (!isUnlocked(worldId)) {
    showToast("Lengkapkan dunia sebelumnya untuk membuka dunia ini.");
    return;
  }
  currentWorld = worldId;
  currentQuestion = 0;
  worldAnswers = [];
  state.lastWorld = worldId;
  saveState();
  showScreen("gameScreen");
  renderCurrentWorld();
}

function setupWorldHeader() {
  const w = worldData[currentWorld - 1];
  $("#worldKicker").textContent = `DUNIA ${w.id} • ${w.level.toUpperCase()}`;
  $("#worldTitle").textContent = w.title;
  const c = getSelectedCharacter();
  $("#worldMission").textContent = c ? `${w.subtitle} • ${c.name} menemani misi anda.` : w.subtitle;
  const total = currentWorld === 4 ? 4 : 5;
  $("#questionCounter").textContent = `${Math.min(currentQuestion + 1, total)} / ${total}`;
  $("#questionProgress").style.width = `${Math.min(currentQuestion, total) / total * 100}%`;
}

function renderCurrentWorld() {
  setupWorldHeader();
  const stage = $("#gameStage");
  if (currentWorld === 1) renderWorld1(stage);
  if (currentWorld === 2) renderWorld2(stage);
  if (currentWorld === 3) renderWorld3(stage);
  if (currentWorld === 4) renderWorld4(stage);
}

function renderWorld1(stage) {
  const q = world1[currentQuestion];
  const letters = ["A", "B", "C", "D", "E"];
  const options = shuffle(idioms.map(x => x.word));
  stage.innerHTML = `
    <div class="task-card">
      <div class="task-intro">
        <div class="task-icon">🔎</div>
        <div>
          <div class="eyebrow">KENAL PASTI</div>
          <h3>${q.prompt}</h3>
          <p>Pilih simpulan bahasa yang paling sesuai dengan petunjuk gambar.</p>
          <button class="audio-button" type="button" data-speak="${escapeAttr(q.prompt)}">🔊 Dengar arahan</button>
        </div>
      </div>
      <div class="visual-question">
        <div class="picture-panel" aria-label="Gambaran situasi">
          <div class="picture-characters">${q.picture.map(x => `<span>${x}</span>`).join("")}</div>
          <div class="picture-caption">${q.scene}</div>
        </div>
        <div>
          <div class="options-grid">
            ${options.map((op, i) => `<button type="button" class="option-button" data-answer="${escapeAttr(op)}"><span class="option-letter">${letters[i]}</span>${op}</button>`).join("")}
          </div>
          <div class="feedback-placeholder" id="localFeedback"></div>
        </div>
      </div>
      <div class="task-footer">
        <div class="task-tip">💡 Petua: fikirkan situasi dalam gambar dahulu.</div>
        <div class="task-footer-actions"><button class="secondary-button" id="repeatPromptBtn" type="button">🔁 Ulang</button></div>
      </div>
    </div>
  `;
  bindSpeakButtons(stage);
  $("#repeatPromptBtn").addEventListener("click", () => speakText(q.prompt));
  stage.querySelectorAll("[data-answer]").forEach(btn => {
    btn.addEventListener("click", () => handleAnswer(btn.dataset.answer, q.answer || q.word, {
      correctTitle: "Petunjuk ditemui!",
      correctText: `Jawapan yang tepat ialah <b>${q.word}</b>.` + `<br><span class='muted'>Maksud: ${q.meaning}</span>`,
      extra: `<strong>${q.word}</strong><br>${q.meaning}`
    }));
  });
}

function renderWorld2(stage) {
  const q = world2[currentQuestion];
  const choices = shuffle(idioms.map(x => x.word));
  stage.innerHTML = `
    <div class="task-card">
      <div class="task-intro">
        <div class="task-icon">🧭</div>
        <div>
          <div class="eyebrow">JEJAK KONTEKS</div>
          <h3>Pilih simpulan bahasa yang sesuai.</h3>
          <p>Baca ayat dengan teliti. Gunakan konteks untuk mengisi tempat kosong.</p>
          <button class="audio-button" type="button" data-speak="Baca ayat dengan teliti. Gunakan konteks untuk mengisi tempat kosong.">🔊 Dengar arahan</button>
        </div>
      </div>
      <div class="blank-sentence">${q.sentence.replace("{blank}", '<span class="blank-word">________</span>')}</div>
      <div class="choice-row" id="wordChoices">
        ${choices.map(op => `<button type="button" class="word-chip" data-answer="${escapeAttr(op)}">${op}</button>`).join("")}
      </div>
      <div class="task-footer">
        <div class="task-tip">🎯 Mata penuh apabila jawapan tepat pada cubaan pertama.</div>
        <div class="task-footer-actions"><button class="secondary-button" id="speakSentenceBtn" type="button">🔊 Baca ayat</button></div>
      </div>
    </div>
  `;
  bindSpeakButtons(stage);
  $("#speakSentenceBtn").addEventListener("click", () => speakText(q.sentence.replace("{blank}", q.answer)));
  stage.querySelectorAll("[data-answer]").forEach(btn => {
    btn.addEventListener("click", () => handleAnswer(btn.dataset.answer, q.answer, {
      correctTitle: "Jejak ditemui!",
      correctText: `Tepat. Simpulan bahasa yang sesuai ialah <b>${q.answer}</b>.`,
      extra: `<strong>Maksud</strong><br>${getMeaning(q.answer)}`
    }));
  });
}

function renderWorld3(stage) {
  const q = world3[currentQuestion];
  const choices = shuffle(idioms.map(x => x.word));
  stage.innerHTML = `
    <div class="task-card">
      <div class="task-intro">
        <div class="task-icon">🔎</div>
        <div>
          <div class="eyebrow">DETEKTIF TEKS</div>
          <h3>${q.title}</h3>
          <p>Baca perenggan dan cari petunjuk yang membawa kepada simpulan bahasa.</p>
          <button class="audio-button" type="button" data-speak="Baca perenggan dan cari petunjuk yang membawa kepada simpulan bahasa.">🔊 Dengar arahan</button>
        </div>
      </div>
      <div class="passage-layout">
        <div class="passage-card">
          <h4>📖 Petikan</h4>
          <p>${q.paragraph}</p>
          <div class="clue-box"><strong>Petunjuk</strong>${q.clue}</div>
        </div>
        <div class="passage-card">
          <h4>🧠 Pilih simpulan bahasa</h4>
          <div class="options-grid">
            ${choices.map((op, i) => `<button type="button" class="option-button" data-answer="${escapeAttr(op)}"><span class="option-letter">${String.fromCharCode(65+i)}</span>${op}</button>`).join("")}
          </div>
        </div>
      </div>
      <div class="task-footer">
        <div class="task-tip">🕵️ Jangan terus meneka. Cari bukti dalam perenggan.</div>
        <div class="task-footer-actions"><button class="secondary-button" id="speakPassageBtn" type="button">🔊 Dengar petikan</button></div>
      </div>
    </div>
  `;
  bindSpeakButtons(stage);
  $("#speakPassageBtn").addEventListener("click", () => speakText(q.paragraph));
  stage.querySelectorAll("[data-answer]").forEach(btn => {
    btn.addEventListener("click", () => handleAnswer(btn.dataset.answer, q.answer, {
      correctTitle: "Fail kes diselesaikan!",
      correctText: `Betul. Berdasarkan petunjuk dalam teks, jawapannya ialah <b>${q.answer}</b>.`,
      extra: `<strong>Petunjuk teks</strong><br>${q.clue}<br><br><strong>Maksud</strong><br>${getMeaning(q.answer)}`
    }));
  });
}

function renderWorld4(stage) {
  if (currentQuestion < 3) {
    renderDialogue(stage, currentQuestion);
  } else {
    renderStoryChallenge(stage);
  }
}

function renderDialogue(stage, index) {
  const d = dialogues[index];
  const dialogueText = d.lines.map(line => `${line[0]}: ${stripHtml(line[1])}`).join(". ");
  stage.innerHTML = `
    <div class="task-card">
      <div class="task-intro">
        <div class="task-icon">🎤</div>
        <div>
          <div class="eyebrow">METROKATA • DIALOG</div>
          <h3>${d.title}</h3>
          <p>Baca dialog dengan sebutan dan intonasi yang jelas. Kemudian cuba menuturkannya.</p>
          <button class="audio-button" type="button" data-speak="${escapeAttr(dialogueText)}">🔊 Dengar contoh</button>
        </div>
      </div>
      <div class="dialogue-layout">
        <div class="character-card">
          <div class="character-avatars"><span>${d.characterEmojis[0]}</span><span>${d.characterEmojis[1]}</span></div>
          <div><div class="eyebrow">WATAK</div><h4>${d.characterNames.join(" & ")}</h4><p>Simpulan bahasa: <strong>${d.idiom}</strong></p></div>
        </div>
        <div class="dialogue-panel">
          ${d.lines.map(line => `<div class="dialogue-line"><div class="dialogue-avatar">${line[0] === d.characterNames[0] ? d.characterEmojis[0] : d.characterEmojis[1]}</div><div class="bubble"><strong>${line[0]}</strong><br>${line[1]}</div></div>`).join("")}
          <div class="speak-row">
            <button class="small-button" type="button" id="readFullDialogueBtn">🔊 Baca semua</button>
            <button class="small-button" type="button" id="readIdiomBtn">💬 Dengar simpulan bahasa</button>
          </div>
          <div class="record-box">
            <div class="record-status" id="recordStatus">🎙️ Anda boleh merakam bacaan dialog anda di sini.</div>
            <div class="record-actions">
              <button class="small-button" type="button" id="recordBtn">● Mula rakam</button>
              <button class="small-button" type="button" id="stopRecordBtn" disabled>■ Hentikan</button>
              <button class="small-button" type="button" id="playRecordBtn" disabled>▶ Mainkan rakaman</button>
            </div>
          </div>
        </div>
      </div>
      <div class="task-footer">
        <div class="task-tip">🎯 Cuba sebut simpulan bahasa dengan jelas dan gunakan intonasi yang sesuai.</div>
        <div class="task-footer-actions"><button class="primary-button" id="dialogueCompleteBtn" type="button">Saya sudah baca →</button></div>
      </div>
    </div>
  `;
  bindSpeakButtons(stage);
  $("#readFullDialogueBtn").addEventListener("click", () => speakText(dialogueText));
  $("#readIdiomBtn").addEventListener("click", () => speakText(`Simpulan bahasa: ${d.idiom}. Maksud: ${getMeaning(d.idiom)}`));
  setupRecorder();
  $("#dialogueCompleteBtn").addEventListener("click", () => {
    completeQuestion({ points: 25, feedbackTitle: "Dialog berjaya dituturkan!", feedbackText: `Anda telah melengkapkan misi dialog <b>${d.idiom}</b>.`, extra: `Maksud: ${getMeaning(d.idiom)}` });
  });
}

function renderStoryChallenge(stage) {
  stage.innerHTML = `
    <div class="task-card">
      <div class="task-intro">
        <div class="task-icon">📖</div>
        <div>
          <div class="eyebrow">METROKATA • BERCERITA</div>
          <h3>Misi Akhir — Cerita Wira Kata</h3>
          <p>Lihat tiga gambar bersiri dan bina cerita pendek. Gunakan sekurang-kurangnya satu simpulan bahasa yang sesuai.</p>
          <button class="audio-button" type="button" data-speak="Lihat tiga gambar bersiri dan bina cerita pendek. Gunakan sekurang-kurangnya satu simpulan bahasa yang sesuai.">🔊 Dengar arahan</button>
        </div>
      </div>
      <div class="story-builder">
        <div class="story-scenes">
          <div class="scene-card"><div class="scene-emoji">🐰🏠</div><h4>1. Berkunjung</h4><p>Nina datang ke rumah nenek bersama keluarganya.</p></div>
          <div class="scene-card"><div class="scene-emoji">🎁🍪</div><h4>2. Membawa hadiah</h4><p>Nina membawa kotak kuih untuk diberikan kepada nenek.</p></div>
          <div class="scene-card"><div class="scene-emoji">😊👵</div><h4>3. Berkongsi</h4><p>Nenek menerima hadiah dan berasa gembira.</p></div>
        </div>
        <div class="story-prompt">
          <h4>🎙️ Pilih simpulan bahasa</h4>
          <p>Untuk membantu cerita anda, pilih simpulan bahasa yang sesuai dengan situasi gambar.</p>
          <div class="story-buttons">
            ${idioms.map(x => `<button class="word-chip" type="button" data-story-id="${escapeAttr(x.word)}">${x.word}</button>`).join("")}
          </div>
          <div id="storyResult"></div>
        </div>
        <div class="record-box">
          <div class="record-status" id="recordStatus">🎙️ Setelah memilih simpulan bahasa, tekan rakam dan ceritakan kisah anda.</div>
          <div class="record-actions">
            <button class="small-button" type="button" id="recordBtn">● Mula rakam</button>
            <button class="small-button" type="button" id="stopRecordBtn" disabled>■ Hentikan</button>
            <button class="small-button" type="button" id="playRecordBtn" disabled>▶ Mainkan rakaman</button>
          </div>
        </div>
      </div>
      <div class="task-footer">
        <div class="task-tip">🏆 Misi akhir menggabungkan membaca, menuturkan dialog dan bercerita.</div>
        <div class="task-footer-actions"><button class="primary-button" id="storyCompleteBtn" type="button" disabled>Saya sudah bercerita →</button></div>
      </div>
    </div>
  `;
  bindSpeakButtons(stage);
  let chosen = null;
  stage.querySelectorAll("[data-story-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      chosen = btn.dataset.storyId;
      stage.querySelectorAll("[data-story-id]").forEach(x => x.classList.remove("active"));
      btn.classList.add("active");
      const meaning = getMeaning(chosen);
      $("#storyResult").innerHTML = `<div class="result-note"><strong>${chosen}</strong><br>${meaning}<br><br>Contoh ayat: <b>“Nina membawa ${chosen} untuk neneknya.”</b></div>`;
      $("#storyCompleteBtn").disabled = false;
    });
  });
  setupRecorder();
  $("#storyCompleteBtn").addEventListener("click", () => {
    const storyWord = chosen || "buah tangan";
    completeQuestion({ points: 45, feedbackTitle: "Wira Kata dilahirkan!", feedbackText: `Cerita anda menggunakan simpulan bahasa <b>${storyWord}</b>.`, extra: `Anda telah melengkapkan aktiviti bercerita dalam Metrokata.` });
  });
}

function handleAnswer(chosen, answer, feedback) {
  const buttons = $("#gameStage").querySelectorAll("[data-answer]");
  buttons.forEach(btn => btn.disabled = true);
  const clicked = [...buttons].find(b => b.dataset.answer === chosen);
  const correct = chosen === answer;
  if (clicked) clicked.classList.add(correct ? "selected-correct" : "selected-wrong");
  if (!correct) {
    const trueBtn = [...buttons].find(b => b.dataset.answer === answer);
    if (trueBtn) trueBtn.classList.add("selected-correct");
  }
  const points = correct ? (currentWorld === 3 ? 20 : 15) : 5;
  completeQuestion({
    points,
    feedbackTitle: correct ? feedback.correctTitle : "Hampir!",
    feedbackText: correct ? feedback.correctText : `Jawapan yang tepat ialah <b>${answer}</b>. Cuba perhatikan petunjuk dalam soalan.`,
    extra: correct ? feedback.extra : `<strong>Maksud</strong><br>${getMeaning(answer)}`,
  });
}

function completeQuestion({ points, feedbackTitle, feedbackText, extra }) {
  state.totalScore += points;
  worldAnswers.push({ points });
  saveState();
  showFeedback({
    correct: points > 5,
    title: feedbackTitle,
    text: feedbackText,
    extra,
    points,
  });
}

function showFeedback({ correct, title, text, extra, points }) {
  $("#feedbackEmoji").textContent = correct ? "🎉" : "💡";
  $("#feedbackKicker").textContent = correct ? `+${points} MATA` : `+${points} MATA`;
  $("#feedbackTitle").innerHTML = title;
  $("#feedbackText").innerHTML = text;
  $("#feedbackExtra").innerHTML = extra || "";
  $("#feedbackContinueBtn").textContent = "Teruskan";
  $("#feedbackOverlay").classList.remove("hidden");
  $("#feedbackContinueBtn").onclick = () => {
    $("#feedbackOverlay").classList.add("hidden");
    nextQuestion();
  };
}

function nextQuestion() {
  const total = currentWorld === 4 ? 4 : 5;
  currentQuestion += 1;
  if (currentQuestion >= total) {
    finishWorld();
    return;
  }
  renderCurrentWorld();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function finishWorld() {
  const worldTotal = worldAnswers.reduce((sum, x) => sum + x.points, 0);
  const previousBest = state.bestScores[currentWorld] || 0;
  state.bestScores[currentWorld] = Math.max(previousBest, worldTotal);
  if (!state.completed.includes(currentWorld)) state.completed.push(currentWorld);
  const w = worldData[currentWorld - 1];
  if (!state.badges.includes(currentWorld)) state.badges.push(currentWorld);
  saveState();
  $("#completeTitle").textContent = `${w.title} selesai!`;
  $("#completeText").textContent = `Anda memperoleh ${worldTotal} mata dalam dunia ini. Teruskan perjalanan untuk membuka dunia seterusnya.`;
  $("#rewardBadge").textContent = w.badge;
  $("#rewardName").textContent = w.badgeName;
  $("#rewardText").textContent = w.badgeText;
  $("#nextWorldBtn").style.display = currentWorld < 4 ? "inline-block" : "none";
  $("#nextWorldBtn").textContent = currentWorld < 4 ? `Dunia ${currentWorld + 1} →` : "SIMTOPIA Selesai!";
  $("#nextWorldBtn").onclick = () => {
    $("#worldCompleteOverlay").classList.add("hidden");
    if (currentWorld < 4) startWorld(currentWorld + 1);
    else showHome();
  };
  $("#completeMapBtn").onclick = () => { $("#worldCompleteOverlay").classList.add("hidden"); showHome(); };
  $("#worldCompleteOverlay").classList.remove("hidden");
}

function showHome() {
  cleanupRecording();
  renderTopStats();
  renderWorldMap();
  showScreen("homeScreen");
}

function setupRecorder() {
  cleanupRecording();
  const recordBtn = $("#recordBtn");
  const stopBtn = $("#stopRecordBtn");
  const playBtn = $("#playRecordBtn");
  const status = $("#recordStatus");
  if (!recordBtn || !stopBtn || !playBtn || !status) return;

  if (!navigator.mediaDevices || !window.MediaRecorder) {
    status.textContent = "🎙️ Rakaman suara tidak tersedia dalam pelayar ini. Anda masih boleh membaca dan mendengar dialog.";
    recordBtn.disabled = true;
    return;
  }

  recordBtn.onclick = async () => {
    try {
      currentStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      currentRecording = new MediaRecorder(currentStream);
      const chunks = [];
      currentRecording.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
      currentRecording.onstop = () => {
        if (currentAudioURL) URL.revokeObjectURL(currentAudioURL);
        const blob = new Blob(chunks, { type: currentRecording.mimeType || "audio/webm" });
        currentAudioURL = URL.createObjectURL(blob);
        playBtn.disabled = false;
        status.textContent = "✅ Rakaman siap. Tekan “Mainkan rakaman” untuk semak suara anda.";
        if (currentStream) currentStream.getTracks().forEach(t => t.stop());
      };
      currentRecording.start();
      recordBtn.disabled = true;
      stopBtn.disabled = false;
      recordBtn.classList.add("recording");
      status.textContent = "🔴 Sedang merakam... baca dialog atau ceritakan kisah anda.";
    } catch (error) {
      status.textContent = "⚠️ Akses mikrofon tidak diberikan. Sila benarkan mikrofon untuk menggunakan fungsi rakaman.";
    }
  };

  stopBtn.onclick = () => {
    if (currentRecording && currentRecording.state !== "inactive") currentRecording.stop();
    recordBtn.disabled = false;
    stopBtn.disabled = true;
    recordBtn.classList.remove("recording");
  };

  playBtn.onclick = () => {
    if (currentAudioURL) {
      const audio = new Audio(currentAudioURL);
      audio.play();
    }
  };
}

function cleanupRecording() {
  try {
    if (currentRecording && currentRecording.state !== "inactive") currentRecording.stop();
  } catch {}
  if (currentStream) currentStream.getTracks().forEach(t => t.stop());
  if (currentAudioURL) URL.revokeObjectURL(currentAudioURL);
  currentRecording = null;
  currentStream = null;
  currentAudioURL = null;
}

function bindSpeakButtons(root) {
  root.querySelectorAll("[data-speak]").forEach(btn => {
    btn.addEventListener("click", () => speakText(unescapeAttr(btn.dataset.speak)));
  });
}

function speakText(text) {
  if (!("speechSynthesis" in window)) {
    showToast("Audio teks tidak disokong oleh pelayar ini.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ms-MY";
  utterance.rate = 0.93;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function getMeaning(word) {
  return idioms.find(x => x.word === word)?.meaning || "";
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function escapeAttr(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function unescapeAttr(value) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
}
function stripHtml(value) {
  const div = document.createElement("div");
  div.innerHTML = value;
  return div.textContent || div.innerText || "";
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.__simToast);
  window.__simToast = setTimeout(() => toast.classList.remove("show"), 2600);
}

function resetProgress() {
  const sure = confirm("Padam semua mata, lencana dan kemajuan SIMTOPIA? Tindakan ini tidak boleh diundurkan.");
  if (!sure) return;
  state = defaultState();
  saveState();
  showToast("Kemajuan telah dipadam.");
  showHome();
}

$("#startGameBtn").addEventListener("click", openCharacterSelection);
$("#characterChip").addEventListener("click", openCharacterSelection);
$("#closeCharacterBtn").addEventListener("click", closeCharacterSelection);
$("#howToPlayBtn").addEventListener("click", () => showScreen("howScreen"));
$("#closeHowBtn").addEventListener("click", showHome);
$("#backHomeBtn").addEventListener("click", showHome);
$("#resetProgressBtn").addEventListener("click", resetProgress);

renderTopStats();
renderWorldMap();
