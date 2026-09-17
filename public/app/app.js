/* Clearshore Assist — app shell. Everything here runs on the device; nothing is sent anywhere. */
(function () {
  "use strict";

  /* ============================ icons ============================ */
  var ICONS = {
    "session-notes": '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 3h9l4 4v14H6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 3v5h5M9 13h6M9 17h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    intake: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    risk: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3l8 3v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 8v4M12 15h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    "client-tools": '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 20s-7-4.3-7-9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7 3.5C19 15.7 12 20 12 20z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    referral: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 3L11 14M22 3l-7 19-4-8-8-4 19-7z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    progress: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 20h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="5" y="12" width="3" height="6" stroke="currentColor" stroke-width="1.6"/><rect x="10.5" y="8" width="3" height="10" stroke="currentColor" stroke-width="1.6"/><rect x="16" y="4" width="3" height="14" stroke="currentColor" stroke-width="1.6"/></svg>',
    formulation: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    "client-email": '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M3 7l9 6 9-6" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>'
  };
  var MIC = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" stroke-width="1.7"/><path d="M6 11a6 6 0 0 0 12 0M12 17v3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>';
  var CHEV = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var STAR = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.6l2.5 5.1 5.6.8-4 4 .9 5.6-5-2.7-5 2.7.9-5.6-4-4 5.6-.8z"/></svg>';
  var DOC = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 3h9l4 4v14H6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 3v5h5" stroke="currentColor" stroke-width="1.6"/></svg>';
  var BOOK = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 7.5h8M8 11h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
  var TAB_ICONS = {
    home: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    tools: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3.5" y="3.5" width="7" height="7" rx="1.6" stroke="currentColor" stroke-width="1.7"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.6" stroke="currentColor" stroke-width="1.7"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.6" stroke="currentColor" stroke-width="1.7"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.6" stroke="currentColor" stroke-width="1.7"/></svg>',
    drafts: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 3h9l4 4v14H6z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M14 3v5h5M9 13h6M9 17h4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    resources: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="3.5" stroke="currentColor" stroke-width="1.7"/><path d="M6 6l3.5 3.5M18 6l-3.5 3.5M6 18l3.5-3.5M18 18l-3.5-3.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    more: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.7"/><path d="M12 11v5M12 8h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
  };
  var CAT_ICONS = {
    crisis: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="3.5" stroke="currentColor" stroke-width="1.7"/></svg>',
    grief: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3c2 2.4 2 5.6 0 8-2-2.4-2-5.6 0-8zM4.5 10.5c3 .6 5.2 2.8 5.8 5.8-3-.6-5.2-2.8-5.8-5.8zM19.5 10.5c-.6 3-2.8 5.2-5.8 5.8.6-3 2.8-5.2 5.8-5.8zM12 16v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    wellbeing: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 20s-7-4.3-7-9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7 3.5C19 15.7 12 20 12 20z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    funding: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="2.5" stroke="currentColor" stroke-width="1.7"/></svg>'
  };

  /* ============================ content ============================ */
  var RESOURCES = [
    { title: "If you need support right now", icon: "crisis", items: [
      { name: "Lifeline", phone: "13 11 14", tel: "131114", desc: "Free, 24/7 crisis support and suicide prevention counselling.", href: "https://www.lifeline.org.au" },
      { name: "Emergency services", phone: "000", tel: "000", desc: "Call for any immediate danger to life.", href: "https://www.triplezero.gov.au" },
      { name: "Suicide Call Back Service", phone: "1300 659 467", tel: "1300659467", desc: "Free telephone and online counselling for anyone affected by suicide.", href: "https://www.suicidecallbackservice.org.au" },
      { name: "13YARN", phone: "13 92 76", tel: "139276", desc: "Crisis support line for Aboriginal and Torres Strait Islander peoples.", href: "https://www.13yarn.org.au" },
      { name: "1800RESPECT", phone: "1800 737 732", tel: "1800737732", desc: "National domestic, family and sexual violence counselling line.", href: "https://www.1800respect.org.au" }
    ]},
    { title: "Grief & loss support", icon: "grief", items: [
      { name: "GriefLine", phone: "1300 845 745", tel: "1300845745", desc: "Free telephone and online grief support for anyone experiencing loss.", href: "https://griefline.org.au" },
      { name: "Red Nose Grief and Loss", phone: "1300 308 307", tel: "1300308307", desc: "Support for pregnancy loss, stillbirth and the death of a child.", href: "https://rednosegriefandloss.org.au" },
      { name: "SANDS Australia", phone: "1300 072 637", tel: "1300072637", desc: "Support for families affected by miscarriage, stillbirth and newborn death.", href: "https://www.sands.org.au" },
      { name: "Australian Centre for Grief and Bereavement", desc: "Education, information and support resources on grief and bereavement.", href: "https://www.grief.org.au" }
    ]},
    { title: "Mental health & wellbeing", icon: "wellbeing", items: [
      { name: "Beyond Blue", phone: "1300 22 4636", tel: "1300224636", desc: "Support and information for anxiety, depression and general mental wellbeing.", href: "https://www.beyondblue.org.au" },
      { name: "Black Dog Institute", desc: "Research-backed information and resources on mental health conditions.", href: "https://www.blackdoginstitute.org.au" },
      { name: "PANDA", phone: "1300 726 306", tel: "1300726306", desc: "Perinatal Anxiety & Depression Australia — support for expecting and new parents.", href: "https://www.panda.org.au" },
      { name: "QLife", phone: "1800 184 527", tel: "1800184527", desc: "Anonymous, free peer support and referral for LGBTIQ+ people.", href: "https://qlife.org.au" }
    ]},
    { title: "Funding & practical support", icon: "funding", items: [
      { name: "NDIS", desc: "Information on eligibility and accessing the National Disability Insurance Scheme.", href: "https://www.ndis.gov.au" },
      { name: "Services Australia", desc: "Medicare and other Australian Government payments and support services.", href: "https://www.servicesaustralia.gov.au" }
    ]}
  ];

  var SITE_LINKS = [
    { href: "/about", name: "About Shelley", sub: "The story behind the practice" },
    { href: "/services", name: "Services", sub: "Grief, trauma, teachers, telehealth" },
    { href: "/telehealth", name: "Telehealth", sub: "Counselling Australia-wide" },
    { href: "/resources", name: "Useful links", sub: "The full resources page" },
    { href: "/faq", name: "FAQ", sub: "Common questions, answered plainly" },
    { href: "/blog", name: "Blog", sub: "Writing on grief, loss and steadiness" },
    { href: "/contact", name: "Contact", sub: "Get in touch or join the waitlist" }
  ];

  var GUIDES = [
    { id: "what-belongs", title: "What belongs in a session note", mins: 3, blurb: "Enough to be useful to the next reader, and no more.",
      body: [
        { p: "A clinical note is a working document, not a transcript. Write it for three readers: you in six weeks, a colleague covering your caseload, and — because they can ask for it — the client." },
        { h: "Usually include" },
        { ul: ["Date, length and type of session (in person, telehealth, phone).", "What the client brought, in their words where it matters.", "What you observed — presentation, affect, engagement.", "What you did, and the reasoning behind it.", "Any risk discussed, what you asked, and what you agreed.", "The plan: next session, referrals, between-session work."] },
        { h: "Usually leave out" },
        { ul: ["Third parties named unnecessarily.", "Speculation about people not in the room.", "Your private opinions about the client.", "Detail that adds nothing clinically but would hurt to read."] },
        { p: "If a sentence would not change anyone's decisions, it is probably not earning its place." }
      ] },
    { id: "frameworks", title: "SOAP, DAP and BIRP at a glance", mins: 3, blurb: "Three common note frameworks, and when each one fits.",
      body: [
        { h: "SOAP" },
        { p: "Subjective, Objective, Assessment, Plan. Borrowed from medicine, strong when you need a clean split between what the client reported and what you observed. Common where you share records with GPs." },
        { h: "DAP" },
        { p: "Data, Assessment, Plan. SOAP with the first two sections merged. Faster to write and usually the better fit for talking therapies, where the line between subjective and objective is blurry anyway." },
        { h: "BIRP" },
        { p: "Behaviour, Intervention, Response, Plan. Keeps your intervention and the client's response to it visible, which makes it easy to show what you did and whether it helped. Useful for funded or reviewed work." },
        { p: "Pick one and stay with it. Consistency across a file is worth more than choosing the theoretically perfect framework." }
      ] },
    { id: "risk-language", title: "Writing about risk", mins: 4, blurb: "Plain, specific, and defensible — without over-claiming.",
      body: [
        { p: "Notes about risk get read closely, sometimes years later, sometimes by people who were not there. Specific beats cautious." },
        { h: "Quote rather than summarise" },
        { p: "\"Said she had been thinking about not being here any more\" carries more than \"expressed suicidal ideation\". Where the exact words matter, use them and mark them as quotes." },
        { h: "Record the question as well as the answer" },
        { p: "Note that you asked directly, what you asked, and what the client said. A note that records only your conclusion leaves out the work." },
        { h: "Separate what you found from what you decided" },
        { ul: ["What was said or observed.", "How you understood it.", "What you and the client agreed.", "What you will do, and by when."] },
        { p: "Assist's safety check reads for language patterns only. It does not assess risk, and a quiet result is never a clearance." }
      ] },
    { id: "de-identify", title: "De-identifying before you type", mins: 2, blurb: "A short habit that keeps everything else simple.",
      body: [
        { p: "Assist runs in your browser and sends nothing anywhere. De-identifying is still worth doing, because habits built on the easy days hold on the hard ones." },
        { h: "Strip these" },
        { ul: ["Names — the client's, family members', other practitioners'.", "Dates of birth, ages where they are unusual enough to identify.", "Addresses, suburbs in small towns, workplaces and schools.", "Case, file and Medicare numbers.", "Events distinctive enough to be recognisable locally."] },
        { h: "Keep these" },
        { ul: ["Relationships — \"partner\", \"eldest child\", \"line manager\".", "Timeframes — \"three weeks ago\", \"since the funeral\".", "Clinically relevant context — what happened, and what it meant."] },
        { p: "Put the identifying detail back when you paste the draft into your own records." }
      ] }
  ];

  var TIPS = [
    "A note written the same day is kinder to your future self than a perfect one written next week.",
    "De-identify as you type, not afterwards. It is one less thing to remember at the end of a long day.",
    "A draft is a first thought, not a verdict. Change the words until they sound like you.",
    "Risk language flagged by a tool is a prompt to look again — never a substitute for your own read of the room.",
    "Short notes that get written beat thorough notes that do not.",
    "Supervision is not a sign that something has gone wrong. It is how the work stays safe.",
    "You cannot pour from an empty cup. Book your own support before the diary fills.",
    "Name the strengths as carefully as the struggles — clients read their notes differently than we imagine."
  ];

  var KEY_LABELS = { note_type: "Type", clinical_framework: "Format", summary: "Summary", data: "Notes", assessment: "Assessment", plan: "Plan", risk_flags: "Safety", clinician_actions: "Your next steps", presenting_issues: "Presenting issues", history_and_context: "History & context", strengths_and_supports: "Strengths & supports", risk_indicators: "Possible risk language", follow_up_questions: "Questions to ask", clinician_review_required: "Clinician review required", limitations: "Good to know", overall_flag: "Overall", risk_domains: "What it noticed", protective_factors: "Protective factors", immediate_clinician_actions: "Do this now", title: "Title", message: "Message", prompts: "Prompts", small_next_step: "A small next step", safety_note: "Safety note" };
  var FLAG_CLASS = { none_detected: "none", needs_clinician_review: "needs", urgent_clinician_review: "urgent" };
  var FLAG_TEXT = { none_detected: "No risk language detected", needs_clinician_review: "Needs clinician review", urgent_clinician_review: "Urgent clinician review" };

  var QUICK = ["session-notes", "risk", "intake", "client-email"];
  var TABS = [
    { id: "home", label: "Home" },
    { id: "tools", label: "Tools" },
    { id: "drafts", label: "Drafts" },
    { id: "resources", label: "Support" },
    { id: "more", label: "About" }
  ];
  var VIEWS = ["home", "tools", "tool", "drafts", "draft", "resources", "guides", "guide", "settings", "more"];
  var TAB_OF = { tool: "tools", draft: "drafts", guides: "more", guide: "more", settings: "more" };

  /* ============================ helpers ============================ */
  var el = function (t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; };
  var byId = function (id) { return document.getElementById(id); };
  var pretty = function (v) { return String(v).replace(/_/g, " ").replace(/^\w/, function (c) { return c.toUpperCase(); }); };
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  var TOOLS = window.CLEARSHORE_SKILLS.getSpecs();
  var toolById = function (id) { return TOOLS.filter(function (t) { return t.id === id; })[0]; };

  var KEYS = { recent: "clearshore.assist.recent", favs: "clearshore.assist.favourites", drafts: "clearshore.assist.drafts", prefs: "clearshore.assist.prefs", form: "clearshore.assist.form.", seen: "clearshore.assist.seen" };
  function read(key, fallback) {
    try { var raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; }
  }
  function drop(key) { try { localStorage.removeItem(key); } catch (e) {} }

  var prefs = read(KEYS.prefs, {});
  if (typeof prefs.theme !== "string") prefs.theme = "auto";
  if (typeof prefs.scale !== "number") prefs.scale = 1;
  if (typeof prefs.keepDrafts !== "boolean") prefs.keepDrafts = true;
  if (typeof prefs.signoff !== "string") prefs.signoff = "";
  function savePrefs() { write(KEYS.prefs, prefs); }

  function applyPrefs() {
    var root = document.documentElement;
    root.setAttribute("data-theme", prefs.theme);
    var dark = prefs.theme === "dark" || (prefs.theme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    root.classList.toggle("is-dark", dark);
    root.style.fontSize = (16 * prefs.scale) + "px";
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#09242b" : "#14505d");
  }
  applyPrefs();
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    if (mq.addEventListener) mq.addEventListener("change", applyPrefs);
  }

  var toastTimer = null;
  function toast(msg) {
    var old = byId("toast"); if (old) old.remove();
    var t = el("div", "toast", msg); t.id = "toast"; t.setAttribute("role", "status");
    document.body.appendChild(t);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { if (t.parentNode) t.remove(); }, 2600);
  }

  function when(ts) {
    var d = new Date(ts), now = new Date();
    var sameDay = d.toDateString() === now.toDateString();
    var yest = new Date(now.getTime() - 86400000).toDateString() === d.toDateString();
    var time = d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    if (sameDay) return "Today, " + time;
    if (yest) return "Yesterday, " + time;
    return d.toLocaleDateString([], { day: "numeric", month: "short" }) + ", " + time;
  }

  /* ============================ routing ============================ */
  function show(view) {
    VIEWS.forEach(function (v) { byId("view-" + v).hidden = v !== view; });
    var tab = TAB_OF[view] || view;
    Array.prototype.forEach.call(document.querySelectorAll(".tab"), function (t) {
      if (t.dataset.tab === tab) t.setAttribute("aria-current", "page"); else t.removeAttribute("aria-current");
    });
    window.scrollTo(0, 0);
    requestAnimationFrame(function () { window.scrollTo(0, 0); });
  }

  function route() {
    var parts = (location.hash || "#home").replace(/^#\/?/, "").split("/");
    var head = parts[0], tail = parts[1];
    if (head === "tools" && tail) {
      var tool = toolById(tail);
      if (tool) { openTool(tool); return show("tool"); }
    }
    if (head === "drafts" && tail) {
      if (openDraft(tail)) return show("draft");
      return show("drafts");
    }
    if (head === "guides" && tail) {
      if (openGuide(tail)) return show("guide");
      return show("guides");
    }
    if (head === "drafts") drawDrafts();
    show(VIEWS.indexOf(head) !== -1 && ["tool", "draft", "guide"].indexOf(head) === -1 ? head : "home");
  }
  function navigate(hash) { if (location.hash === "#" + hash) route(); else location.hash = hash; }
  window.addEventListener("hashchange", route);

  document.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest("[data-go]") : null;
    if (!t) return;
    e.preventDefault();
    navigate(t.dataset.go);
  });

  /* ============================ tabs ============================ */
  var tabsHost = byId("tabs");
  TABS.forEach(function (t) {
    var b = el("button", "tab"); b.type = "button"; b.dataset.tab = t.id; b.dataset.go = t.id;
    var ic = el("span"); ic.innerHTML = TAB_ICONS[t.id];
    b.appendChild(el("span", "dot")); b.appendChild(ic); b.appendChild(el("span", null, t.label));
    if (t.id === "drafts") { var badge = el("span", "badge"); badge.id = "draftbadge"; badge.hidden = true; b.appendChild(badge); }
    tabsHost.appendChild(b);
  });

  /* ============================ shared rows ============================ */
  function toolRow(t) {
    var a = el("a", "row"); a.href = "#tools/" + t.id;
    var ic = el("div", "ic"); ic.innerHTML = ICONS[t.id] || "";
    var tx = el("div", "tx"); tx.appendChild(el("div", "name", t.name)); tx.appendChild(el("div", "blurb", t.blurb));
    var ch = el("div", "chev"); ch.innerHTML = CHEV;
    a.appendChild(ic); a.appendChild(tx); a.appendChild(ch);
    return a;
  }
  function draftRow(d) {
    var a = el("a", "row"); a.href = "#drafts/" + d.id;
    var ic = el("div", "ic"); ic.innerHTML = ICONS[d.tool] || DOC;
    var tx = el("div", "tx");
    tx.appendChild(el("div", "name", d.toolName));
    tx.appendChild(el("div", "blurb", d.snippet || "Draft"));
    a.appendChild(ic); a.appendChild(tx); a.appendChild(el("div", "when", when(d.at)));
    return a;
  }
  function guideRow(g) {
    var a = el("a", "row"); a.href = "#guides/" + g.id;
    var ic = el("div", "ic"); ic.innerHTML = BOOK;
    var tx = el("div", "tx"); tx.appendChild(el("div", "name", g.title)); tx.appendChild(el("div", "blurb", g.blurb));
    var ch = el("div", "chev"); ch.innerHTML = CHEV;
    a.appendChild(ic); a.appendChild(tx); a.appendChild(ch);
    return a;
  }
  function linkList(host, items) {
    host.innerHTML = "";
    items.forEach(function (l) {
      var a = el("a", "link"); a.href = l.href;
      var s = el("span", null, l.name);
      if (l.sub) s.appendChild(el("span", "sub", l.sub));
      var ch = el("span", "chev"); ch.innerHTML = CHEV;
      a.appendChild(s); a.appendChild(ch); host.appendChild(a);
    });
  }

  /* ============================ favourites & recents ============================ */
  function favourites() { return read(KEYS.favs, []); }
  function isFav(id) { return favourites().indexOf(id) !== -1; }
  function toggleFav(id) {
    var list = favourites(), at = list.indexOf(id);
    if (at === -1) list.push(id); else list.splice(at, 1);
    write(KEYS.favs, list);
    drawHome();
    drawPicker();
    return at === -1;
  }
  function noteRecent(id) {
    var list = read(KEYS.recent, []).filter(function (x) { return x !== id; });
    list.unshift(id);
    write(KEYS.recent, list.slice(0, 3));
  }

  /* ============================ drafts ============================ */
  var DRAFT_CAP = 200;
  function drafts() { return read(KEYS.drafts, []); }
  function draftText(d) { return typeof d.text === "string" ? d.text : toPlainText(d.output); }
  function saveDraft(tool, output) {
    if (!prefs.keepDrafts) return null;
    var first = "";
    Object.keys(output).some(function (k) {
      var v = output[k];
      if (typeof v === "string" && v.length > 3) { first = v; return true; }
      return false;
    });
    var d = {
      id: String(Date.now()) + Math.random().toString(36).slice(2, 6),
      tool: tool.id, toolName: tool.name, at: Date.now(),
      snippet: first.slice(0, 90),
      output: output
    };
    var list = drafts(); list.unshift(d);
    if (!write(KEYS.drafts, list.slice(0, DRAFT_CAP))) {
      toast("This browser is out of storage — draft not kept");
      return null;
    }
    drawDraftBadge();
    return d;
  }
  function updateDraft(id, patch) {
    var list = drafts();
    for (var i = 0; i < list.length; i++) {
      if (list[i].id !== id) continue;
      Object.keys(patch).forEach(function (k) { list[i][k] = patch[k]; });
      return write(KEYS.drafts, list);
    }
    return false;
  }
  function deleteDraft(id) {
    write(KEYS.drafts, drafts().filter(function (d) { return d.id !== id; }));
    drawDraftBadge();
  }
  function drawDraftBadge() {
    var n = drafts().length, badge = byId("draftbadge");
    if (!badge) return;
    badge.hidden = n === 0;
    badge.textContent = n > 99 ? "99+" : String(n);
  }

  var draftFilter = { q: "", tool: "all" };

  function drawDraftChips(list) {
    var host = byId("draftchips"); host.innerHTML = "";
    var seen = [];
    list.forEach(function (d) {
      if (seen.filter(function (s) { return s.id === d.tool; }).length) return;
      var tool = toolById(d.tool);
      seen.push({ id: d.tool, name: tool ? tool.name : d.toolName });
    });
    if (seen.length < 2) return;
    [{ id: "all", name: "All" }].concat(seen).forEach(function (c) {
      var b = el("button", "chip-btn", c.name);
      b.type = "button";
      b.setAttribute("aria-pressed", String(draftFilter.tool === c.id));
      b.addEventListener("click", function () { draftFilter.tool = c.id; drawDrafts(); });
      host.appendChild(b);
    });
  }

  function drawDrafts() {
    var host = byId("draftlist"); host.innerHTML = "";
    var all = drafts();
    byId("draftempty").hidden = all.length > 0;
    byId("draftactions").hidden = all.length === 0;
    byId("drafttools").hidden = all.length < 3;
    if (all.length < 3) { draftFilter = { q: "", tool: "all" }; byId("draftsearch").value = ""; }
    drawDraftChips(all);

    var list = all.filter(function (d) {
      if (draftFilter.tool !== "all" && d.tool !== draftFilter.tool) return false;
      if (!draftFilter.q) return true;
      return (d.toolName + " " + draftText(d)).toLowerCase().indexOf(draftFilter.q) !== -1;
    });
    byId("draftnomatch").hidden = !(all.length && !list.length);

    var lastGroup = null;
    list.forEach(function (d) {
      var group = when(d.at).split(",")[0];
      if (group !== lastGroup) { host.appendChild(el("h2", "sec", group)); lastGroup = group; }
      host.appendChild(draftRow(d));
    });
  }

  byId("draftsearch").addEventListener("input", function (e) {
    draftFilter.q = e.target.value.trim().toLowerCase();
    drawDrafts();
  });

  function openDraft(id) {
    var d = drafts().filter(function (x) { return x.id === id; })[0];
    if (!d) return false;
    byId("draftname").textContent = d.toolName;
    byId("draftwhen").textContent = when(d.at) + (d.edited ? " · edited" : "");
    var host = byId("draftbody"); host.innerHTML = "";
    host.appendChild(outputActions(function () { return draftText(d); }, d.toolName, d.id, function () { editDraft(d); }));

    var panel = el("div", "panel");
    if (typeof d.text === "string") panel.appendChild(el("p", "plain", d.text));
    else Object.keys(d.output).forEach(function (k) { panel.appendChild(renderBlock(k, d.output[k])); });
    host.appendChild(panel);
    return true;
  }

  function editDraft(d) {
    var host = byId("draftbody"); host.innerHTML = "";
    var box = el("div", "panel editor");

    var name = el("input"); name.type = "text"; name.value = d.toolName;
    name.setAttribute("aria-label", "Draft name");
    box.appendChild(name);

    var area = el("textarea"); area.value = draftText(d);
    area.setAttribute("aria-label", "Draft text");
    box.appendChild(area);

    var actions = el("div", "actions");
    var save = el("button", "btn btn-primary", "Save changes"); save.type = "button";
    var cancel = el("button", "btn btn-ghost", "Cancel"); cancel.type = "button";
    actions.appendChild(save); actions.appendChild(cancel);
    box.appendChild(actions);
    host.appendChild(box);
    area.focus();

    save.addEventListener("click", function () {
      var text = area.value;
      var ok = updateDraft(d.id, {
        text: text,
        toolName: name.value.trim() || d.toolName,
        snippet: text.replace(/\s+/g, " ").trim().slice(0, 90),
        edited: true
      });
      if (!ok) return toast("Couldn't save — this browser is out of storage");
      toast("Draft saved");
      drawDrafts(); drawHome();
      openDraft(d.id);
    });
    cancel.addEventListener("click", function () { openDraft(d.id); });
  }

  byId("cleardrafts").addEventListener("click", wipeDrafts);
  byId("wipedrafts").addEventListener("click", wipeDrafts);
  function wipeDrafts() {
    if (!drafts().length) return toast("No drafts to delete");
    if (!window.confirm("Delete every saved draft? This cannot be undone.")) return;
    drop(KEYS.drafts); drawDrafts(); drawHome(); drawDraftBadge();
    toast("All drafts deleted");
  }
  byId("backup").addEventListener("click", function () {
    var list = drafts();
    if (!list.length) return toast("There are no drafts to back up");
    var payload = { app: "clearshore-assist", version: 1, exportedAt: new Date().toISOString(), drafts: list };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    var a = el("a");
    a.href = URL.createObjectURL(blob);
    a.download = "clearshore-assist-backup-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
    toast("Backup saved to your downloads");
  });

  byId("restore").addEventListener("click", function () { byId("restorefile").click(); });
  byId("restorefile").addEventListener("change", function () {
    var file = this.files && this.files[0];
    this.value = "";
    if (!file) return;
    var reader = new FileReader();
    reader.onerror = function () { toast("Couldn't read that file"); };
    reader.onload = function () {
      var parsed;
      try { parsed = JSON.parse(String(reader.result)); } catch (e) { return toast("That file isn't a valid backup"); }
      var incoming = parsed && Array.isArray(parsed.drafts) ? parsed.drafts : null;
      if (!incoming) return toast("No drafts found in that file");

      var list = drafts(), have = {}, added = 0;
      list.forEach(function (d) { have[d.id] = true; });
      incoming.forEach(function (d) {
        if (!d || typeof d.id !== "string" || have[d.id]) return;
        have[d.id] = true;
        added++;
        list.push({
          id: d.id,
          tool: String(d.tool || ""),
          toolName: String(d.toolName || "Draft"),
          at: typeof d.at === "number" ? d.at : Date.now(),
          snippet: String(d.snippet || "").slice(0, 90),
          output: d.output && typeof d.output === "object" ? d.output : {},
          text: typeof d.text === "string" ? d.text : undefined,
          edited: !!d.edited
        });
      });
      list.sort(function (a, b) { return b.at - a.at; });
      if (!write(KEYS.drafts, list.slice(0, DRAFT_CAP))) return toast("Couldn't restore — this browser is out of storage");
      drawDrafts(); drawHome(); drawDraftBadge();
      toast(added ? "Restored " + added + " draft" + (added === 1 ? "" : "s") : "Those drafts are already here");
    };
    reader.readAsText(file);
  });

  byId("wipeall").addEventListener("click", function () {
    if (!window.confirm("Reset Assist? This clears drafts, favourites and settings on this device.")) return;
    Object.keys(KEYS).forEach(function (k) { if (k !== "form") drop(KEYS[k]); });
    TOOLS.forEach(function (t) { drop(KEYS.form + t.id); });
    toast("Everything cleared");
    setTimeout(function () { location.href = "/app/index.html"; location.reload(); }, 700);
  });

  /* ============================ output actions ============================ */
  function outputActions(getText, title, draftId, onEdit) {
    var row = el("div", "tools-row");

    var copy = el("button", "mini", "Copy"); copy.type = "button";
    copy.addEventListener("click", function () {
      var text = getText();
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallbackCopy);
      else fallbackCopy();
      function fallbackCopy() {
        var ta = el("textarea"); ta.value = text; document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); } catch (e) {}
        ta.remove(); done();
      }
      function done() { toast("Copied to the clipboard"); }
    });
    row.appendChild(copy);

    if (onEdit) {
      var edit = el("button", "mini", "Edit"); edit.type = "button";
      edit.addEventListener("click", onEdit);
      row.appendChild(edit);
    }

    var dl = el("button", "mini", "Download"); dl.type = "button";
    dl.addEventListener("click", function () {
      var blob = new Blob([getText()], { type: "text/plain;charset=utf-8" });
      var a = el("a");
      a.href = URL.createObjectURL(blob);
      a.download = title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + new Date().toISOString().slice(0, 10) + ".txt";
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      toast("Saved to your downloads");
    });
    row.appendChild(dl);

    if (navigator.share) {
      var sh = el("button", "mini", "Share"); sh.type = "button";
      sh.addEventListener("click", function () {
        navigator.share({ title: title, text: getText() }).catch(function () {});
      });
      row.appendChild(sh);
    }

    if (draftId) {
      var del = el("button", "mini danger", "Delete"); del.type = "button";
      del.addEventListener("click", function () {
        if (!window.confirm("Delete this draft?")) return;
        deleteDraft(draftId); drawHome(); navigate("drafts"); toast("Draft deleted");
      });
      row.appendChild(del);
    }
    return row;
  }

  function toPlainText(out) {
    var lines = [];
    Object.keys(out).forEach(function (k) {
      lines.push((KEY_LABELS[k] || pretty(k)).toUpperCase());
      lines.push(valueToText(out[k]));
      lines.push("");
    });
    var text = lines.join("\n").trim() + "\n";
    if (prefs.signoff.trim()) text += "\n" + prefs.signoff.trim() + "\n";
    return text;
  }
  function valueToText(v) {
    if (typeof v === "boolean") return v ? "Yes" : "No";
    if (Array.isArray(v)) return v.map(function (i) { return typeof i === "object" ? objText(i) : "- " + i; }).join("\n");
    if (v && typeof v === "object") return objText(v);
    return String(v);
  }
  function objText(o) {
    return Object.keys(o).map(function (k) {
      var val = o[k];
      return "  " + pretty(k) + ": " + (Array.isArray(val) ? val.join("; ") : val);
    }).join("\n");
  }

  function renderBlock(key, value) {
    var block = el("div", "block");
    block.appendChild(el("div", "k", KEY_LABELS[key] || pretty(key)));
    if (key === "overall_flag") block.appendChild(el("span", "flag " + (FLAG_CLASS[value] || "needs"), FLAG_TEXT[value] || pretty(value)));
    else block.appendChild(renderValue(value));
    return block;
  }
  function renderValue(v) {
    if (typeof v === "boolean") return el("p", "para", v ? "Yes" : "No");
    if (Array.isArray(v)) {
      if (v.length && typeof v[0] === "object") {
        var frag = document.createDocumentFragment();
        v.forEach(function (o) { frag.appendChild(renderObject(o)); });
        return frag;
      }
      var ul = el("ul", "list");
      v.forEach(function (i) { ul.appendChild(el("li", null, String(i))); });
      return ul;
    }
    if (v && typeof v === "object") return renderObject(v);
    return el("p", "para", String(v));
  }
  function renderObject(o) {
    var box = el("div", "subitem");
    if (o.label || o.domain) box.appendChild(el("strong", null, o.label || pretty(o.domain)));
    if (o.tier) box.appendChild(el("span", "pill tier-" + o.tier, pretty(o.tier)));
    var ev = o.evidence;
    if (ev) {
      if (Array.isArray(ev)) ev.forEach(function (x) { box.appendChild(el("p", "para quote", String(x))); });
      else box.appendChild(el("p", "para quote", String(ev)));
    }
    ["factor", "cue", "note"].forEach(function (k) {
      if (o[k] && o[k] !== "none_identified" && o[k] !== "none_detected") box.appendChild(el("p", "para", pretty(o[k])));
    });
    return box;
  }

  /* ============================ home ============================ */
  var trustCounted = false;
  function drawHome() {
    var h = new Date().getHours();
    byId("greet").textContent = h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";

    var kept = drafts().length;
    var trust = byId("trust"); trust.innerHTML = "";
    [[TOOLS.length, "tools"], [kept, kept === 1 ? "draft kept" : "drafts kept"], [0, "uploads"]].forEach(function (pair) {
      var d = el("div");
      var n = el("div", "n", String(pair[0]));
      if (!trustCounted) countUp(n, pair[0]);
      d.appendChild(n);
      d.appendChild(el("div", "l", pair[1]));
      trust.appendChild(d);
    });
    trustCounted = true;

    // Each tool appears once across favourites, recents and the starter list.
    var used = {};
    function take(list) {
      return list.filter(function (t) {
        if (!t || used[t.id]) return false;
        used[t.id] = true;
        return true;
      });
    }
    var favs = take(favourites().map(toolById));
    byId("favwrap").hidden = favs.length === 0;
    var favHost = byId("favs"); favHost.innerHTML = "";
    favs.forEach(function (t) { favHost.appendChild(toolRow(t)); });

    var recent = take(read(KEYS.recent, []).map(toolById));
    byId("recentwrap").hidden = recent.length === 0;
    var recentHost = byId("recent"); recentHost.innerHTML = "";
    recent.forEach(function (t) { recentHost.appendChild(toolRow(t)); });

    var starters = take(QUICK.map(toolById).concat(TOOLS)).slice(0, 4);
    byId("quickhead").textContent = favs.length || recent.length ? "More tools" : "Start a draft";
    byId("quickwrap").hidden = starters.length === 0;
    var quickHost = byId("quick"); quickHost.innerHTML = "";
    starters.forEach(function (t) { quickHost.appendChild(toolRow(t)); });

    var recentDrafts = drafts().slice(0, 3);
    byId("draftpeekwrap").hidden = recentDrafts.length === 0;
    var peek = byId("draftpeek"); peek.innerHTML = "";
    recentDrafts.forEach(function (d) { peek.appendChild(draftRow(d)); });

    var gp = byId("guidepeek"); gp.innerHTML = "";
    GUIDES.slice(0, 2).forEach(function (g) { gp.appendChild(guideRow(g)); });

    var day = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    byId("tiptext").textContent = TIPS[day % TIPS.length];
  }
  linkList(byId("practice"), SITE_LINKS.slice(0, 4));
  linkList(byId("sitelinks"), SITE_LINKS);

  // Ambient shore loop — only fetched if the file exists and the viewer wants motion and data.
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var saveData = !!(navigator.connection && navigator.connection.saveData);
  var heroLoop = byId("heroloop");
  if (!reduceMotion && !saveData) {
    heroLoop.addEventListener("loadeddata", function () {
      heroLoop.classList.add("on");
      heroLoop.play().catch(function () {});
    });
    heroLoop.preload = "auto";
    heroLoop.load();
  }

  function countUp(node, target) {
    if (reduceMotion || target < 2) { node.textContent = String(target); return; }
    var start = performance.now(), dur = 700;
    (function step(now) {
      var p = Math.min(1, (now - start) / dur);
      node.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    })(start);
    // rAF pauses in a background tab; make sure the real number lands regardless.
    setTimeout(function () { node.textContent = String(target); }, dur + 400);
  }

  var welcome = byId("welcome");
  welcome.addEventListener("loadedmetadata", function () {
    welcome.hidden = false;
    byId("vidph").hidden = true;
    byId("vidcap").textContent = "A short welcome from Shelley Bentley, Clearshore Counselling.";
  });

  /* ============================ tools ============================ */
  var picker = byId("picker");
  function drawPicker() {
    picker.innerHTML = "";
    TOOLS.forEach(function (t) {
      var b = el("button", "pick"); b.type = "button"; b.dataset.go = "tools/" + t.id;
      b.dataset.hay = (t.name + " " + t.blurb + " " + t.id).toLowerCase();
      var ic = el("div", "ic"); ic.innerHTML = ICONS[t.id] || ""; b.appendChild(ic);
      b.appendChild(el("div", "name", t.name));
      b.appendChild(el("div", "blurb", t.blurb));
      if (isFav(t.id)) { var s = el("span", "star"); s.innerHTML = STAR; b.appendChild(s); }
      picker.appendChild(b);
    });
  }
  drawPicker();

  byId("toolsearch").addEventListener("input", function (e) {
    var q = e.target.value.trim().toLowerCase(), shown = 0;
    Array.prototype.forEach.call(picker.children, function (b) {
      var hit = !q || b.dataset.hay.indexOf(q) !== -1;
      b.hidden = !hit; if (hit) shown++;
    });
    byId("noresults").hidden = shown > 0;
  });

  /* ============================ tool form ============================ */
  var current = null;
  byId("voicehint").textContent = SR ? "· tap the mic to speak" : "· use your keyboard's mic key to dictate";

  byId("favbtn").addEventListener("click", function () {
    if (!current) return;
    var on = toggleFav(current.id);
    this.setAttribute("aria-pressed", String(on));
    toast(on ? "Added to favourites" : "Removed from favourites");
  });

  function formKey(id) { return KEYS.form + id; }
  function saveForm() {
    if (!current) return;
    var values = {};
    current.fields.forEach(function (f) {
      var input = byId("f_" + f.name);
      if (input && input.value) values[f.name] = input.value;
    });
    if (Object.keys(values).length) write(formKey(current.id), values); else drop(formKey(current.id));
  }

  function openTool(tool) {
    noteRecent(tool.id);
    current = tool;
    byId("toolname").textContent = tool.name;
    byId("toolblurb").textContent = tool.blurb;
    byId("favbtn").setAttribute("aria-pressed", String(isFav(tool.id)));

    var saved = read(formKey(tool.id), {});
    var fields = byId("fields"); fields.innerHTML = "";
    tool.fields.forEach(function (f) {
      var wrap = el("div", "field");
      var label = el("label"); label.htmlFor = "f_" + f.name;
      label.appendChild(document.createTextNode(f.label + " "));
      label.appendChild(f.required ? el("span", "req", "*") : el("span", "opt", "(optional)"));
      wrap.appendChild(label);

      var row = el("div", "inrow");
      var input;
      if (f.widget === "select") {
        input = el("select");
        var blank = el("option", null, f.required ? "Choose…" : "— none —"); blank.value = "";
        input.appendChild(blank);
        f.options.forEach(function (o) { var op = el("option", null, pretty(o)); op.value = o; input.appendChild(op); });
      } else if (f.widget === "textarea") {
        input = el("textarea");
      } else {
        input = el("input"); input.type = "text";
      }
      input.id = "f_" + f.name; input.name = f.name;
      if (f.placeholder) input.placeholder = f.placeholder;
      if (saved[f.name]) input.value = saved[f.name];
      row.appendChild(input);

      var statusEl = null;
      if (SR && f.widget !== "select") { statusEl = el("div", "micstatus"); row.appendChild(makeMic(input, statusEl)); }
      wrap.appendChild(row);
      if (statusEl) wrap.appendChild(statusEl);

      if (f.widget === "textarea") {
        var count = el("div", "count");
        var setCount = function () {
          var words = input.value.trim() ? input.value.trim().split(/\s+/).length : 0;
          count.textContent = words === 1 ? "1 word" : words + " words";
        };
        setCount();
        input.addEventListener("input", setCount);
        wrap.appendChild(count);
      }
      fields.appendChild(wrap);
    });
    byId("result").hidden = true;
    if (Object.keys(saved).length) toast("Restored what you had typed");
  }

  byId("fields").addEventListener("input", saveForm);

  byId("clear").addEventListener("click", function () {
    byId("form").reset();
    if (current) drop(formKey(current.id));
    byId("result").hidden = true;
    Array.prototype.forEach.call(document.querySelectorAll("#fields .count"), function (c) { c.textContent = "0 words"; });
    toast("Cleared");
  });

  byId("form").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!current) return;
    var input = {};
    current.fields.forEach(function (f) { input[f.name] = (byId("f_" + f.name).value || "").trim(); });
    var data = window.CLEARSHORE_SKILLS.runTool(current.id, input);
    if (!data.ok || reduceMotion) return renderResult(data);

    // A beat of shimmer so the draft reads as composed rather than pasted.
    var box = byId("result");
    box.innerHTML = ""; box.hidden = false;
    var skel = el("div", "skel");
    [92, 72, 84, 60, 78].forEach(function (w) {
      var bar = el("span"); bar.style.width = w + "%"; skel.appendChild(bar);
    });
    box.appendChild(skel);
    box.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(function () { renderResult(data); }, 420);
  });

  function renderResult(data) {
    var box = byId("result"); box.innerHTML = ""; box.hidden = false;
    if (!data.ok) {
      var e = el("div", "errors");
      e.appendChild(el("strong", null, "Please check the form:"));
      var ul = el("ul", "list");
      (data.errors || ["Something went wrong."]).forEach(function (m) { ul.appendChild(el("li", null, pretty(m))); });
      e.appendChild(ul); box.appendChild(e);
      box.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    var saved = saveDraft(current, data.output);
    var head = el("div", "result-head");
    head.appendChild(el("h2", null, "Your draft"));
    head.appendChild(el("span", "meta", saved ? "Saved" : "Not kept"));
    box.appendChild(head);
    box.appendChild(el("div", "review-note", "Draft only — review, correct, and approve before use."));
    box.appendChild(outputActions(function () { return toPlainText(data.output); }, current.name, null, null));

    var panel = el("div", "panel");
    Object.keys(data.output).forEach(function (k) { panel.appendChild(renderBlock(k, data.output[k])); });
    box.appendChild(panel);

    if (data.output.overall_flag && data.output.overall_flag !== "none_detected") {
      var line = el("div", "riskline");
      line.appendChild(document.createTextNode("Need a support line? "));
      var a = el("a"); a.href = "#resources"; a.textContent = "Open support lines"; a.setAttribute("data-go", "resources");
      line.appendChild(a);
      box.appendChild(line);
    }
    drawHome();
    box.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ============================ voice ============================ */
  function micError(code) {
    switch (code) {
      case "not-allowed":
      case "service-not-allowed":
        return "Microphone is blocked for this site. Allow mic access in your browser (tap the padlock in the address bar → Microphone → Allow), then tap the mic again.";
      case "audio-capture": return "No microphone was found on this device.";
      case "no-speech": return "Didn't hear anything — tap the mic and speak.";
      case "network": return "Voice needs an internet connection (the browser processes speech online).";
      case "aborted": return "";
      default: return "Voice error" + (code ? " (" + code + ")" : "") + ". Try Chrome, or use your keyboard's mic key.";
    }
  }
  var BLOCKED_MSG = "Your browser is blocking the microphone for this site. Turn it on in your browser's site settings (the small icon just left of the web address, or the browser menu → Site settings → Microphone → Allow), then tap the mic again.";
  function makeMic(input, statusEl) {
    var btn = el("button", "mic"); btn.type = "button"; btn.innerHTML = MIC; btn.setAttribute("aria-label", "Speak");
    var rec = null;
    function set(msg, err) { statusEl.textContent = msg || ""; statusEl.className = "micstatus" + (err ? " err" : ""); }
    function startRec() {
      try { rec = new SR(); } catch (e) { set("Voice isn't available in this browser. Try Chrome, or use your keyboard's mic key.", true); return; }
      rec.lang = "en-AU"; rec.interimResults = true; rec.continuous = false; rec.maxAlternatives = 1;
      var base = input.value ? input.value + " " : "";
      var got = false, listening = "Listening… tap the mic again to stop.";
      rec.onstart = function () { btn.classList.add("on"); set(listening); };
      rec.onresult = function (e) {
        got = true;
        var t = "";
        for (var i = 0; i < e.results.length; i++) t += e.results[i][0].transcript;
        input.value = base + t;
        input.dispatchEvent(new Event("input", { bubbles: true }));
      };
      rec.onerror = function (e) {
        var m = micError(e && e.error);
        if (e && (e.error === "not-allowed" || e.error === "service-not-allowed")) m = BLOCKED_MSG;
        set(m, true);
      };
      rec.onend = function () {
        btn.classList.remove("on"); rec = null;
        if (!got && statusEl.textContent === listening) set("Didn't catch anything. The most reliable way on a phone is your keyboard's 🎤 mic key — tap into the box and use that to dictate.");
      };
      try { rec.start(); } catch (err) { btn.classList.remove("on"); rec = null; set("Couldn't start voice: " + ((err && err.message) || err), true); }
    }
    btn.addEventListener("click", function () {
      if (rec) { try { rec.stop(); } catch (e) {} return; }
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        set("Tap “Allow” when your browser asks to use the microphone…");
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
          stream.getTracks().forEach(function (t) { t.stop(); });
          setTimeout(startRec, 250);
        }).catch(function () { set(BLOCKED_MSG, true); });
      } else { startRec(); }
    });
    return btn;
  }

  /* ============================ resources ============================ */
  var resHost = byId("reslist");
  function drawResources(q) {
    resHost.innerHTML = "";
    var shown = 0;
    RESOURCES.forEach(function (cat) {
      var items = cat.items.filter(function (i) {
        return !q || (i.name + " " + i.desc + " " + (i.phone || "")).toLowerCase().indexOf(q) !== -1;
      });
      if (!items.length) return;
      shown += items.length;
      var wrap = el("div", "cat");
      var head = el("div", "cat-head");
      var ic = el("span", "ic"); ic.innerHTML = CAT_ICONS[cat.icon] || "";
      head.appendChild(ic); head.appendChild(el("h2", null, cat.title));
      wrap.appendChild(head);
      items.forEach(function (item) {
        var card = el("div", "res");
        card.appendChild(el("div", "name", item.name));
        card.appendChild(el("div", "desc", item.desc));
        var acts = el("div", "acts");
        if (item.phone && item.tel) {
          var tel = el("a", "tel", "Call " + item.phone);
          tel.href = "tel:" + item.tel;
          acts.appendChild(tel);
        }
        var site = el("a", "site");
        site.href = item.href; site.target = "_blank"; site.rel = "noopener noreferrer";
        site.appendChild(document.createTextNode("Website"));
        site.appendChild(el("span", null, "↗"));
        acts.appendChild(site);
        card.appendChild(acts);
        wrap.appendChild(card);
      });
      resHost.appendChild(wrap);
    });
    byId("resempty").hidden = shown > 0;
  }
  drawResources("");
  byId("ressearch").addEventListener("input", function (e) { drawResources(e.target.value.trim().toLowerCase()); });

  /* ============================ guides ============================ */
  var guideHost = byId("guidelist");
  GUIDES.forEach(function (g) { guideHost.appendChild(guideRow(g)); });

  function openGuide(id) {
    var g = GUIDES.filter(function (x) { return x.id === id; })[0];
    if (!g) return false;
    byId("guidetitle").textContent = g.title;
    byId("guidemeta").textContent = g.mins + " min read";
    var host = byId("guidebody"); host.innerHTML = "";
    g.body.forEach(function (b) {
      if (b.h) host.appendChild(el("h3", null, b.h));
      if (b.p) host.appendChild(el("p", null, b.p));
      if (b.ul) {
        var ul = el("ul");
        b.ul.forEach(function (i) { ul.appendChild(el("li", null, i)); });
        host.appendChild(ul);
      }
    });
    return true;
  }

  /* ============================ settings ============================ */
  function drawSeg(hostId, value) {
    Array.prototype.forEach.call(byId(hostId).children, function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.v === String(value)));
    });
  }
  byId("segtheme").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-v]"); if (!b) return;
    prefs.theme = b.dataset.v; savePrefs(); applyPrefs(); drawSeg("segtheme", prefs.theme);
  });
  byId("segscale").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-v]"); if (!b) return;
    prefs.scale = parseFloat(b.dataset.v); savePrefs(); applyPrefs(); drawSeg("segscale", prefs.scale);
  });
  byId("savetoggle").addEventListener("click", function () {
    prefs.keepDrafts = !prefs.keepDrafts; savePrefs();
    this.setAttribute("aria-checked", String(prefs.keepDrafts));
    toast(prefs.keepDrafts ? "Drafts will be kept on this device" : "Drafts will not be kept");
  });
  byId("signoff").addEventListener("input", function () { prefs.signoff = this.value; savePrefs(); });

  drawSeg("segtheme", prefs.theme);
  drawSeg("segscale", prefs.scale);
  byId("savetoggle").setAttribute("aria-checked", String(prefs.keepDrafts));
  byId("signoff").value = prefs.signoff;
  byId("version").textContent = "Clearshore Assist · " + TOOLS.length + " tools · everything on this device";

  /* ============================ install, offline, first run ============================ */
  var deferredInstall = null;
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferredInstall = e;
    byId("installwrap").hidden = false;
  });
  byId("installbtn").addEventListener("click", function () {
    if (!deferredInstall) return;
    deferredInstall.prompt();
    deferredInstall.userChoice.then(function () {
      deferredInstall = null;
      byId("installwrap").hidden = true;
    });
  });
  window.addEventListener("appinstalled", function () {
    byId("installwrap").hidden = true;
    toast("Assist is installed");
  });

  var isiOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  var standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
  byId("installhint").textContent = standalone
    ? "You're running Assist as an installed app — it works without a connection once it has loaded."
    : isiOS
      ? "Tap the Share button, then “Add to Home Screen.” Assist then opens full-screen, and works offline."
      : "Open your browser menu and choose “Install app” or “Add to Home Screen.” Assist then opens full-screen, and works offline.";

  function drawOnline() { byId("offlinebar").hidden = navigator.onLine !== false; }
  window.addEventListener("online", drawOnline);
  window.addEventListener("offline", drawOnline);
  drawOnline();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () { navigator.serviceWorker.register("/app/sw.js").catch(function () {}); });
  }

  function firstRun() {
    if (read(KEYS.seen, false)) return;
    var scrim = el("div", "scrim");
    var sheet = el("div", "sheet");
    sheet.appendChild(el("h2", null, "Welcome to Assist"));
    sheet.appendChild(el("p", null, "Eight drafting tools for counsellors. Three things worth knowing before you start."));
    var ul = el("ul");
    [
      ["🔒", "Nothing leaves your device", "Assist runs in your browser. No account, no uploads, no server."],
      ["✍️", "De-identify as you type", "No names, dates of birth or addresses — put them back in your own records."],
      ["👤", "You approve every draft", "It is a starting point, not a clinical decision. Your judgement is the last word."]
    ].forEach(function (row) {
      var li = el("li");
      var ic = el("span", "ic", row[0]);
      var tx = el("span");
      tx.appendChild(el("b", null, row[1]));
      tx.appendChild(el("span", "d", row[2]));
      li.appendChild(ic); li.appendChild(tx); ul.appendChild(li);
    });
    sheet.appendChild(ul);
    var ok = el("button", "btn btn-primary", "Get started");
    ok.type = "button";
    ok.style.width = "100%";
    ok.addEventListener("click", function () { write(KEYS.seen, true); scrim.remove(); });
    sheet.appendChild(ok);
    scrim.appendChild(sheet);
    document.body.appendChild(scrim);
  }

  /* ============================ go ============================ */
  drawHome();
  drawDrafts();
  drawDraftBadge();
  route();
  firstRun();
})();
