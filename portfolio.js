const github = 'https://github.com/RoXaAF/';
const projects = {
  teach: {
    title: 'ROQEN Teach',
    description: 'A browser-playable 3D city where students practice AI reasoning, evaluate forecasts, and restore districts by demonstrating mastery.',
    detail: 'Placed 4th at the Shanghai Impact Hackathon in November 2026.',
    stack: ['Next.js', 'React Three Fiber', 'FastAPI', 'Zustand'],
    repo: 'ROQEN-TEACH', privateRepo: true,
    highlights: [
      ['Missions', 'Two playable missions pair guided practice with an independent check. Students collect evidence, test prompts, and calculate forecast error.'],
      ['Grading', 'Deterministic TypeScript and Python graders share scoring fixtures. Next.js can grade when the optional FastAPI service is unavailable.'],
      ['Lesson Studio', 'Teachers turn lesson materials into games, review generated content, and confirm grades before export or sync.']
    ],
    flow: ['3D city and missions', 'Next.js server', 'FastAPI or TypeScript grading', 'Mastery and city repair'],
    gallery: [
      ['teach-start.jpg', 'NEXUS-01 title screen', 'Captured from the local ROQEN Teach build'],
      ['teach-gameplay.png', 'NEXUS-01 gameplay screenshot', 'World map and Intro to AI lesson'],
      ['teach-gameplay.mp4', 'ROQEN Teach gameplay video', 'Gameplay recording', 'teach-gameplay.png']
    ]
  },
  rag: {
    title: 'Bright Studio GraphRAG',
    description: 'A local assistant for searching PDFs, text, and images that answers using a knowledge graph and cites the source chunks.',
    stack: ['Python', 'Ollama', 'Gemma', 'NetworkX', 'SQLite FTS5', 'Gradio'],
    repo: 'agency-rag_v2--Graph-retrieval-pdf-images-support-',
    highlights: [
      ['Ingestion', 'Gemma captions embedded images and extracts subject–relation–object triples. Chunk and image hashes cache results across builds.'],
      ['Retrieval', 'Exact, alias, and fuzzy matching link questions to nodes. Multi-hop traversal ranks evidence. SQLite full-text search handles queries with no linked entity.'],
      ['Evaluation', 'The repository baseline scored 10 of 13 on its question set and cited sources on 12 of 13.']
    ],
    flow: ['Documents and images', 'Chunks and triples', 'Graph or FTS5 retrieval', 'Cited answer'],
    gallery: [
      ['graphrag.png', 'Bright Studio GraphRAG application'],
      ['graphrag-chart.png', 'GraphRAG evaluation chart', 'Repository benchmark figure']
    ]
  },
  paper: {
    title: 'ROQEN Paperless',
    description: 'An invoice and document workflow for Moroccan accounting firms and their clients, from intake through human approval and accounting export.',
    stack: ['Rust', 'Axum', 'Tokio', 'Next.js', 'PostgreSQL', 'Electron'],
    repo: 'roqen-paperless-', privateRepo: true,
    highlights: [
      ['Intake', 'Clients send PDFs and scans through a multi-client workspace. Poppler and Tesseract extract text, with French, Arabic, and English OCR. Structured extraction can use an AI model or an offline engine.'],
      ['Review', 'The application checks totals, VAT, dates, ICE identifiers, and duplicates. Accountants compare and correct fields beside the source PDF.'],
      ['Approval and export', 'A human approves or rejects documents. The audit journal records changes, and approved entries are available for accounting export.']
    ],
    flow: ['Upload', 'Extract', 'Validate', 'Review', 'Approve', 'Export'],
    gallery: [
      ['paperless-dashboard.jpg', 'Accounting dashboard'],
      ['paperless-inbox.jpg', 'Processed documents inbox'],
      ['paperless-upload.jpg', 'Client document upload'],
      ['paperless-review.jpg', 'Document review beside the original PDF'],
      ['paperless-checks.jpg', 'Automatic validation checks'],
      ['paperless-bulk.jpg', 'Bulk actions in the inbox'],
      ['paperless-request.jpg', 'Request missing documents'],
      ['paperless-suppliers.jpg', 'Supplier directory'],
      ['paperless-exports.jpg', 'Accounting exports']
    ]
  },
  review: {
    title: 'LangGraph Code Review',
    description: 'A review pipeline that runs four specialist reviewers in parallel, merges findings, and validates proposed fixes before presenting a diff.',
    stack: ['Python', 'LangGraph', 'OpenAI-compatible models'],
    repo: '-LangGraph-Code-Review-Auto-Fix-Pipeline',
    highlights: [
      ['Parallel review', 'Security, performance, style, and bug reviewers assess the same file independently. The repository supports Python, JavaScript/TypeScript, Rust, and SQL.'],
      ['Merged report', 'The pipeline normalizes, deduplicates, and ranks findings. The report shows when multiple reviewers corroborate the same issue.'],
      ['Validation', 'Suggested edits are syntax-checked where supported. The tool returns findings, a diff, and the fixed file. It also provides an offline demonstration mode.']
    ],
    flow: ['Source intake', 'Four reviewers', 'Merge and rank', 'Propose fix', 'Validate and show diff'],
    gallery: [['review-demo.png', 'Code review demo'], ['review-report.png', 'Ranked code review report']]
  },
  proxy: {
    title: 'Ollama API Key Proxy',
    description: 'A Python standard-library gateway that gives each client its own API key for a shared local Ollama service.',
    stack: ['Python', 'Ollama', 'OpenAI-compatible API', 'SHA-256'],
    repo: 'Ollama-API-Key-Proxy',
    highlights: [
      ['Key lifecycle', 'The dashboard issues named keys, exposes secrets at creation, and stores SHA-256 hashes. Administrators can revoke keys and monitor usage.'],
      ['Forwarding', 'Clients authenticate with a bearer or X-API-Key header. The gateway forwards OpenAI-compatible chat requests and streams responses from Ollama.'],
      ['Model discovery', 'The dashboard lists models reported by Ollama and presents connection settings for client tools.']
    ],
    flow: ['API client', 'Authenticate and track use', 'Local Ollama', 'Stream response'],
    gallery: [['ollama-dashboard.png', 'API key management dashboard'], ['ollama-provider.png', 'Model provider configuration']]
  },
  sports: {
    title: 'n8n Sports Automation',
    description: 'A scheduled workflow that combines football fixture and odds feeds, builds an analysis payload, and sends filtered alerts to Discord and Telegram.',
    stack: ['n8n', 'The Odds API', 'football-data.org', 'OpenRouter', 'Discord', 'Telegram'],
    repo: 'N8n-Betting-Workflow',
    highlights: [
      ['Source feeds', 'A manual trigger or six-hour schedule fetches odds and fixture data in parallel. The fixture feed supplies kickoff times.'],
      ['Normalization', 'The workflow standardizes team names, aligns records across feeds, and keeps the highest available prices before sending the payload to the agents.'],
      ['Delivery', 'Parallel branches parse each agent response, filter by the configured criteria, and format alerts for Discord or Telegram.']
    ],
    flow: ['Manual or scheduled run', 'Odds and fixture feeds', 'Merge and normalize', 'Agent analysis', 'Discord and Telegram'],
    gallery: []
  }
};

const activeWindows = new Map();
const narrow = matchMedia('(max-width: 767px)');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const lightbox = document.querySelector('.lightbox');
let nextLayer = 10;

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function projectContent(project, body) {
  const summary = element('div', '', 'project-summary');
  summary.append(element('p', project.description));
  if (project.detail) summary.append(element('p', project.detail));
  const stack = element('ul', '', 'stack');
  for (const technology of project.stack) stack.append(element('li', technology));
  const source = element('a', project.privateRepo ? 'Repository on GitHub (private) ↗' : 'View repository ↗', 'primary');
  source.href = github + project.repo;
  summary.append(stack, source);

  const overview = element('section', '', 'project-section');
  overview.append(element('h3', 'How it works'));
  const highlights = element('dl', '', 'project-highlights');
  for (const [label, value] of project.highlights) {
    const item = element('div');
    item.append(element('dt', label), element('dd', value));
    highlights.append(item);
  }
  overview.append(highlights);

  const workflow = element('section', '', 'project-section');
  workflow.append(element('h3', 'Workflow'));
  const flow = element('ol', '', 'project-flow');
  for (const step of project.flow) flow.append(element('li', step));
  workflow.append(flow, element('p', 'Diagram adapted from the repository documentation.', 'project-source-note'));
  body.append(summary, overview, workflow);

  if (project.gallery.length) {
    const gallery = element('section', '', 'project-section');
    const grid = element('div', '', 'project-gallery');
    for (const [fileName, caption, credit, poster] of project.gallery) {
      const videoEntry = fileName.endsWith('.mp4');
      const figure = element('figure', '', videoEntry ? 'gallery-video' : '');
      const label = element('figcaption', caption);
      label.append(element('small', credit || 'Repository screenshot'));
      if (videoEntry) {
        const video = element('video');
        video.src = 'assets/' + fileName;
        video.poster = 'assets/' + poster;
        video.controls = true;
        video.playsInline = true;
        video.preload = 'none';
        video.setAttribute('aria-label', caption);
        figure.append(video, label);
        grid.append(figure);
        continue;
      }
      const preview = element('button', '', 'screenshot');
      preview.type = 'button';
      preview.setAttribute('aria-label', 'Enlarge ' + caption);
      const image = element('img');
      image.src = 'assets/' + fileName;
      image.alt = caption;
      image.loading = 'lazy';
      preview.append(image);
      preview.addEventListener('click', () => {
        const enlarged = lightbox.querySelector('img');
        enlarged.src = image.src;
        enlarged.alt = caption;
        lightbox.setAttribute('aria-label', caption);
        lightbox.showModal();
      });
      figure.append(preview, label);
      grid.append(figure);
    }
    gallery.append(element('h3', 'Gallery'), grid);
    body.append(gallery);
  }
}

function keepOnScreen(panel, left, top) {
  const right = Math.max(10, innerWidth - panel.offsetWidth - 10);
  const bottom = Math.max(10, innerHeight - panel.offsetHeight - 10);
  panel.style.left = Math.max(10, Math.min(right, left)) + 'px';
  panel.style.top = Math.max(10, Math.min(bottom, top)) + 'px';
}

function enableDrag(panel, bar) {
  let drag = null;
  bar.addEventListener('pointerdown', event => {
    if (narrow.matches || panel.classList.contains('maximized') || event.button !== 0 || event.target.closest('button')) return;
    drag = {id: event.pointerId, x: event.clientX - panel.offsetLeft, y: event.clientY - panel.offsetTop};
    bar.setPointerCapture(event.pointerId);
  });
  bar.addEventListener('pointermove', event => {
    if (drag?.id === event.pointerId) keepOnScreen(panel, event.clientX - drag.x, event.clientY - drag.y);
  });
  bar.addEventListener('lostpointercapture', () => { drag = null; });
}

function topWindow() {
  return [...activeWindows.values()].filter(panel => !panel.hidden).sort((a, b) => Number(b.style.zIndex) - Number(a.style.zIndex))[0];
}

function runAgentDemo(demo) {
  const workers = [...demo.querySelectorAll('[data-duration]')];
  const summary = demo.querySelector('.agent-summary');
  let timer;

  function start() {
    clearInterval(timer);
    const startTime = performance.now();
    function update() {
      const elapsed = performance.now() - startTime;
      let active = 0;
      for (const worker of workers) {
        const progress = Math.min(100, elapsed / Number(worker.dataset.duration) * 100);
        const state = worker.querySelector('.agent-state');
        worker.querySelector('progress').value = progress;
        const status = progress < 100 ? 'Running' : 'Complete';
        if (state.textContent !== status) state.textContent = status;
        if (progress < 100) active++;
      }
      const message = active ? active + (active === 1 ? ' agent running' : ' agents running') : 'All agents complete';
      if (summary.textContent !== message) summary.textContent = message;
      if (!active) clearInterval(timer);
    }
    update();
    timer = setInterval(update, 140);
  }

  demo.querySelector('.replay-agents').addEventListener('click', start);
  start();
  return () => clearInterval(timer);
}

function openWindow(key, trigger) {
  const existing = activeWindows.get(key);
  if (existing) {
    existing.hidden = false;
    existing.style.zIndex = ++nextLayer;
    existing.focus();
    return;
  }
  const panel = document.querySelector('#window-template').content.firstElementChild.cloneNode(true);
  const body = panel.querySelector('.window-body');
  const note = document.getElementById('panel-' + key);
  const title = element('h2', key === 'resume' ? 'Résumé' : note?.dataset.windowTitle ?? projects[key].title);
  title.id = 'window-title-' + key;
  panel.setAttribute('aria-labelledby', title.id);
  panel.querySelector('.window-caption').textContent = title.textContent;
  body.append(title);
  if (key === 'resume') body.append(document.querySelector('.resume-content').cloneNode(true));
  else if (note) body.append(note.content.cloneNode(true));
  else {
    panel.classList.add('project-window');
    projectContent(projects[key], body);
  }
  if (body.querySelector('.ai-demo')) panel.classList.add('ai-window');
  const agentDemo = body.querySelector('.agent-demo');
  const stopDemo = agentDemo ? runAgentDemo(agentDemo) : null;
  panel.style.zIndex = ++nextLayer;
  panel.addEventListener('pointerdown', () => { panel.style.zIndex = ++nextLayer; });
  panel.addEventListener('focusin', () => { panel.style.zIndex = ++nextLayer; });
  const close = () => {
    stopDemo?.();
    panel.remove();
    activeWindows.delete(key);
    const next = topWindow();
    if (next) next.focus();
    else trigger?.focus({preventScroll: true});
  };
  panel.querySelector('.window-close').addEventListener('click', close);
  panel.querySelector('.window-minimize').addEventListener('click', () => {
    panel.querySelector('video')?.pause();
    panel.hidden = true;
    (topWindow() || trigger)?.focus({ preventScroll: true });
  });
  const maximize = panel.querySelector('.window-maximize');
  maximize.addEventListener('click', () => {
    const isMaximized = panel.classList.toggle('maximized');
    maximize.setAttribute('aria-pressed', String(isMaximized));
    maximize.setAttribute('aria-label', isMaximized ? 'Restore window size' : 'Maximize window');
    if (!isMaximized && !narrow.matches) keepOnScreen(panel, panel.offsetLeft, panel.offsetTop);
  });
  panel.addEventListener('portfolio-close', close);
  enableDrag(panel, panel.querySelector('.window-bar'));
  document.body.append(panel);
  if (!narrow.matches && activeWindows.size) {
    const shift = (activeWindows.size % 4) * 22;
    keepOnScreen(panel, panel.offsetLeft + shift, panel.offsetTop + shift);
  }
  activeWindows.set(key, panel);
  panel.focus({preventScroll: true});
}

document.querySelectorAll('.tile').forEach((tile, index) => tile.style.setProperty('--i', index));
document.addEventListener('click', event => {
  const trigger = event.target.closest('[data-panel]');
  if (!trigger) return;
  event.preventDefault();
  openWindow(trigger.dataset.panel, trigger);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !lightbox.open && !document.querySelector('.drawer').open && topWindow()) {
    event.preventDefault();
    topWindow().dispatchEvent(new Event('portfolio-close'));
  }
});

addEventListener('resize', () => {
  for (const panel of activeWindows.values()) {
    if (narrow.matches) {
      panel.style.removeProperty('left');
      panel.style.removeProperty('top');
    } else keepOnScreen(panel, panel.offsetLeft, panel.offsetTop);
  }
});

lightbox.querySelector('button').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) lightbox.close();
});

const drawer = document.querySelector('.drawer');
document.querySelectorAll('[data-dock-dialog]').forEach(button => {
  button.addEventListener('click', () => {
    const content = document.querySelector('#dock-' + button.dataset.dockDialog);
    drawer.querySelector('h2').textContent = button.getAttribute('aria-label');
    drawer.querySelector('.drawer-body').replaceChildren(content.content.cloneNode(true));
    drawer.showModal();
  });
});
drawer.querySelector('.close').addEventListener('click', () => drawer.close());
drawer.addEventListener('click', event => {
  if (event.target === drawer) drawer.close();
});

const dock = document.querySelector('.dock');
const icons = [...dock.querySelectorAll('.dock-icon')];
const magnification = icons.map(() => 0);
let pointerX = null;
let smoothX = 0;
let dockFrame = 0;

function magnifyDock() {
  if (reduced.matches) pointerX = null;
  if (pointerX !== null) smoothX += (pointerX - smoothX) * .22;
  const centers = icons.map(icon => {
    const bounds = icon.parentElement.getBoundingClientRect();
    return bounds.left + bounds.width / 2;
  });
  icons.forEach((icon, index) => {
    const distance = Math.abs(smoothX - centers[index]);
    const proximity = pointerX === null ? 0 : Math.max(0, 1 - distance / 140);
    const target = proximity * proximity * (3 - 2 * proximity);
    magnification[index] += (target - magnification[index]) * .28;
    if (magnification[index] < .001) magnification[index] = 0;
    const size = 56 + 40 * magnification[index];
    icon.style.setProperty('--dock-icon-size', size.toFixed(2) + 'px');
  });
  dockFrame = pointerX !== null || magnification.some(Boolean)
    ? requestAnimationFrame(magnifyDock)
    : 0;
}

dock.addEventListener('pointermove', event => {
  if (event.pointerType !== 'mouse' || reduced.matches || narrow.matches) return;
  if (pointerX === null) smoothX = event.clientX;
  pointerX = event.clientX;
  if (!dockFrame) dockFrame = requestAnimationFrame(magnifyDock);
});
dock.addEventListener('pointerleave', () => { pointerX = null; });
narrow.addEventListener('change', () => { pointerX = null; });

function playOpening() {
  if (reduced.matches || location.hash) return;
  if (narrow.matches) {
    document.documentElement.classList.add('opening');
    return;
  }
  const tiles = [...document.querySelectorAll('.tile')];
  const marks = tiles.map(tile => tile.querySelector('.mark'));
  const center = { x: innerWidth / 2, y: innerHeight * .45 };
  const mark = marks[0].getBoundingClientRect();
  for (const tile of tiles) {
    const rect = tile.getBoundingClientRect();
    tile.style.setProperty('--fly-x', center.x - rect.left - rect.width / 2 + 'px');
    tile.style.setProperty('--fly-y', center.y - rect.top - rect.height / 2 + 'px');
    tile.style.setProperty('--fly-scale', '.35');
    tile.style.setProperty('--fly-blur', '8px');
  }

  const preview = element('div', '', 'motion-preview');
  preview.setAttribute('aria-hidden', 'true');
  const showMark = index => {
    const image = marks[index].querySelector('img, svg');
    preview.replaceChildren(image ? image.cloneNode(true) : element('span', marks[index].textContent));
  };
  showMark(0);
  document.body.append(preview);
  document.body.classList.add('motion-ready');

  const deltaX = mark.left + mark.width / 2 - center.x;
  const deltaY = mark.top + mark.height / 2 - center.y;
  const centerTransform = 'translate(-50%, -50%)';
  const motion = getComputedStyle(document.documentElement);
  const flight = preview.animate([
    { offset: 0, opacity: 0, filter: 'blur(8px)', transform: centerTransform + ' translateY(320px) scale(.85)', easing: motion.getPropertyValue('--ease') },
    { offset: .55 / 2.55, opacity: 1, filter: 'blur(0px)', transform: centerTransform },
    { offset: 2 / 2.55, opacity: 1, filter: 'blur(0px)', transform: centerTransform, easing: motion.getPropertyValue('--flight-ease') },
    { offset: 2.4 / 2.55, opacity: 1, filter: 'blur(0px)', transform: centerTransform + ' translate(' + deltaX + 'px,' + deltaY + 'px) scale(.313)' },
    { offset: 1, opacity: 0, filter: 'blur(0px)', transform: centerTransform + ' translate(' + deltaX + 'px,' + deltaY + 'px) scale(.313)' }
  ], { duration: 2550, fill: 'both' });

  // CSS entrances and the preview flight share one start, even if this script loads late.
  document.documentElement.classList.add('opening');
  const startTime = document.timeline.currentTime;
  for (const animation of document.getAnimations()) {
    animation.startTime = startTime;
  }

  let slide = 0;
  let nextSlide = setTimeout(function advance() {
    showMark(++slide % marks.length);
    if (slide < marks.length) nextSlide = setTimeout(advance, 130);
  }, 530);
  const finishFlight = () => {
    removeEventListener('resize', settleOpening);
    reduced.removeEventListener('change', settleOpening);
    clearTimeout(nextSlide);
    preview.remove();
    tiles.forEach(tile => {
      for (const prop of ['--fly-x', '--fly-y', '--fly-scale', '--fly-blur']) tile.style.removeProperty(prop);
    });
    document.body.classList.remove('motion-ready');
  };
  const settleOpening = () => {
    document.documentElement.classList.remove('opening');
    flight.cancel();
    finishFlight();
  };
  addEventListener('resize', settleOpening, { once: true });
  reduced.addEventListener('change', settleOpening, { once: true });
  flight.onfinish = finishFlight;
}

dock.addEventListener('animationend', event => {
  if (event.target === dock && ['dock-in', 'dock-mobile'].includes(event.animationName)) {
    document.documentElement.classList.remove('opening');
  }
});
playOpening();

if (location.hash === '#resume') openWindow('resume', document.querySelector('[data-panel="resume"]'));


const clock = document.querySelector('.menu-clock');
const clockFormat = new Intl.DateTimeFormat(undefined, {
  weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
});
function updateClock() {
  const now = new Date();
  clock.dateTime = now.toISOString();
  clock.textContent = clockFormat.format(now);
}
updateClock();
setInterval(updateClock, 15000);

const batteryStatus = document.querySelector('.menu-battery');
if (typeof navigator.getBattery === 'function') {
  navigator.getBattery().then(battery => {
    function showLevel() {
      const level = Math.round(battery.level * 100) + '%';
      batteryStatus.style.setProperty('--battery-level', level);
      batteryStatus.querySelector('.battery-percent').textContent = level;
      batteryStatus.setAttribute('aria-label', 'Battery, ' + level);
      batteryStatus.title = 'Device battery';
    }
    showLevel();
    battery.addEventListener('levelchange', showLevel);
  }, () => {
    // Keep the decorative indicator when the browser withholds device status.
  });
}

const theme = document.querySelector('.theme');
theme.addEventListener('click', () => {
  const deep = document.documentElement.dataset.theme !== 'deep';
  document.documentElement.dataset.theme = deep ? 'deep' : 'standard';
  theme.setAttribute('aria-pressed', String(deep));
});

const projectList = document.querySelector('.projects');
const dragStatus = document.querySelector('#drag-status');
let tileDrag = null;
let draggedTile = null;
let tileLayer = 0;

function moveTile(tile, x, y) {
  const availableX = Math.max(1, projectList.clientWidth - tile.offsetWidth);
  const availableY = Math.max(1, projectList.clientHeight - tile.offsetHeight);
  tile.style.setProperty('--x', Math.max(0, Math.min(1, x / availableX)));
  tile.style.setProperty('--y', Math.max(0, Math.min(1, y / availableY)));
}
function finishTileDrag(tile) {
  tile.classList.remove('dragging');
  tileDrag = null;
}
function reportMove(tile) {
  dragStatus.textContent = tile.querySelector('strong').textContent + ' moved';
}

const arrows = {
  ArrowUp: [0, -24], ArrowDown: [0, 24],
  ArrowLeft: [-24, 0], ArrowRight: [24, 0]
};
for (const tile of projectList.children) {
  tile.setAttribute('aria-keyshortcuts', Object.keys(arrows).map(key => 'Alt+' + key).join(' '));
  tile.addEventListener('pointerdown', event => {
    if (tileDrag || !event.isPrimary || event.button !== 0) return;
    draggedTile = null;
    tileDrag = {
      tile, pointer: event.pointerId, startX: event.clientX, startY: event.clientY,
      left: tile.offsetLeft, top: tile.offsetTop, active: false
    };
    tile.setPointerCapture(event.pointerId);
  });
  tile.addEventListener('pointermove', event => {
    if (tileDrag?.tile !== tile || tileDrag.pointer !== event.pointerId) return;
    const x = event.clientX - tileDrag.startX;
    const y = event.clientY - tileDrag.startY;
    if (!tileDrag.active) {
      if (Math.hypot(x, y) < 7) return;
      tileDrag.active = true;
      tile.classList.add('dragging');
      tile.style.zIndex = ++tileLayer;
    }
    moveTile(tile, tileDrag.left + x, tileDrag.top + y);
  });
  tile.addEventListener('pointerup', event => {
    if (tileDrag?.tile !== tile || tileDrag.pointer !== event.pointerId) return;
    if (tileDrag.active) {
      draggedTile = tile;
      reportMove(tile);
    } else if (event.pointerType === 'touch') {
      openWindow(tile.dataset.panel, tile);
    }
    finishTileDrag(tile);
  });
  tile.addEventListener('lostpointercapture', () => {
    if (tileDrag?.tile === tile) finishTileDrag(tile);
  });
  tile.addEventListener('click', event => {
    if (event.pointerType !== 'touch' && (draggedTile !== tile || event.detail === 0)) return;
    draggedTile = null;
    event.stopImmediatePropagation();
    event.preventDefault();
  }, { capture: true });
  tile.addEventListener('keydown', event => {
    const step = arrows[event.key];
    if (!event.altKey || !step) return;
    event.preventDefault();
    tile.style.zIndex = ++tileLayer;
    moveTile(tile, tile.offsetLeft + step[0], tile.offsetTop + step[1]);
    reportMove(tile);
  });
}
