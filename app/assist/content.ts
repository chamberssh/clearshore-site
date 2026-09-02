// Static, trusted marketing markup for the /assist route. Injected via
// dangerouslySetInnerHTML so the inline SVGs and <style> port across verbatim.
// All selectors are scoped under `.assist-page`; fonts come from CSS variables
// (--assist-display / --assist-body) set by next/font on the wrapper.

export const assistHtml = `
<style>
  .assist-page {
    --ground: #081a1f;
    --ground-2: #0c242b;
    --ground-3: #103038;
    --hairline: #1d3d43;
    --fog: #eef1ef;
    --fog-line: #cdd8d4;
    --paper: #fbf9f4;
    --paper-2: #f3efe6;
    --paper-ink: #22383b;
    --paper-muted: #6c817e;
    --paper-line: #e7e1d5;
    --teal: #2fa39b;
    --teal-bright: #46c7be;
    --teal-deep: #17635d;
    --sand: #e6b168;
    --sand-deep: #b9832f;
    --coral: #d9694e;
    --on-dark: #eaf2f0;
    --on-dark-muted: #93aeaa;
    --on-fog: #0e2429;
    --on-fog-muted: #566b68;
    --maxw: 1180px;
    --pad: clamp(1.25rem, 4vw, 3rem);
    --f-display: var(--assist-display), "Iowan Old Style", Georgia, serif;
    --f-body: var(--assist-body), system-ui, -apple-system, "Segoe UI", sans-serif;

    color-scheme: dark;
    background: var(--ground);
    color: var(--on-dark);
    font-family: var(--f-body);
    font-size: 17px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  .assist-page * { box-sizing: border-box; }
  .assist-page h1, .assist-page h2, .assist-page h3, .assist-page h4 {
    font-family: var(--f-display); font-weight: 600; text-wrap: balance; margin: 0; line-height: 1.08;
  }
  .assist-page p { margin: 0; }
  .assist-page a { color: inherit; text-decoration: none; }
  .assist-page .wrap { max-width: var(--maxw); margin-inline: auto; padding-inline: var(--pad); }

  .assist-page .eyebrow {
    font-size: 0.78rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--teal-bright); margin: 0 0 1.1rem; display: inline-flex; align-items: center; gap: 0.6rem;
  }
  .assist-page .eyebrow::before { content: ""; width: 1.6rem; height: 2px; background: var(--teal); display: inline-block; border-radius: 2px; }
  .assist-page .eyebrow.on-fog { color: var(--teal-deep); }
  .assist-page .eyebrow.on-fog::before { background: var(--teal-deep); }

  .assist-page .a-btn {
    display: inline-flex; align-items: center; gap: 0.55rem; font-family: var(--f-body);
    font-weight: 600; font-size: 1.02rem; padding: 0.95rem 1.7rem; border-radius: 999px;
    border: 1px solid transparent; cursor: pointer; white-space: nowrap;
    transition: transform 0.18s ease, background 0.2s, border-color 0.2s, color 0.2s;
  }
  .assist-page .a-btn.sand { background: var(--sand); color: #2a1c07; }
  .assist-page .a-btn.sand:hover { background: #d9a350; transform: translateY(-2px); }
  .assist-page .a-btn.ghost { border-color: var(--hairline); color: var(--on-dark); background: transparent; }
  .assist-page .a-btn.ghost:hover { border-color: var(--teal); color: var(--teal-bright); }
  .assist-page a:focus-visible { outline: 2px solid var(--teal-bright); outline-offset: 3px; border-radius: 999px; }

  /* hero */
  .assist-page .hero { position: relative; padding-top: clamp(3rem, 7vw, 5.5rem); padding-bottom: clamp(4rem, 9vw, 8rem); overflow: hidden; }
  .assist-page #assist-wave { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; opacity: 0.9; }
  .assist-page .hero-glow { position: absolute; z-index: 0; width: 60vw; height: 60vw; max-width: 720px; max-height: 720px; right: -12vw; top: -10vw; border-radius: 50%; background: radial-gradient(circle, color-mix(in srgb, var(--teal) 24%, transparent), transparent 62%); filter: blur(10px); pointer-events: none; }
  .assist-page .hero .wrap { position: relative; z-index: 1; }
  .assist-page .hero-grid { display: grid; gap: clamp(2.5rem, 5vw, 4rem); align-items: center; }
  @media (min-width: 940px) { .assist-page .hero-grid { grid-template-columns: 1.02fr 0.98fr; } }
  .assist-page .hero h1 { font-size: clamp(2.5rem, 6vw, 4.3rem); letter-spacing: -0.02em; }
  .assist-page .hero h1 em { font-style: italic; color: var(--sand); font-weight: 500; }
  .assist-page .lede { margin-top: 1.5rem; max-width: 36ch; color: var(--on-dark-muted); font-size: clamp(1.05rem, 1.6vw, 1.2rem); }
  .assist-page .hero-cta { margin-top: 2.2rem; display: flex; flex-wrap: wrap; gap: 0.9rem; }
  .assist-page .hero-assure { margin-top: 1.6rem; display: flex; flex-wrap: wrap; gap: 0.5rem 1.4rem; font-size: 0.88rem; color: var(--on-dark-muted); }
  .assist-page .hero-assure span { display: inline-flex; align-items: center; gap: 0.45rem; }
  .assist-page .tick { color: var(--teal-bright); flex: none; }

  /* paper mockups */
  .assist-page .paper { background: linear-gradient(180deg, var(--paper), var(--paper-2)); color: var(--paper-ink); border-radius: 16px; border: 1px solid var(--paper-line); box-shadow: 0 34px 70px -34px rgba(0,0,0,0.72), 0 2px 0 rgba(255,255,255,0.4) inset; overflow: hidden; }
  .assist-page .paper-head { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; padding: 1.05rem 1.35rem; border-bottom: 1px solid var(--paper-line); background: rgba(255,255,255,0.35); }
  .assist-page .paper-head .doc { display: inline-flex; align-items: center; gap: 0.55rem; font-family: var(--f-display); font-weight: 600; font-size: 1.02rem; }
  .assist-page .paper-head .doc svg { color: var(--teal-deep); }
  .assist-page .paper-body { padding: 1.25rem 1.35rem 1.4rem; display: grid; gap: 1.05rem; }
  .assist-page .sect .k { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--teal-deep); margin-bottom: 0.35rem; }
  .assist-page .sect .v { font-size: 0.95rem; color: var(--paper-ink); line-height: 1.55; }
  .assist-page .sect .v.quote { font-family: var(--f-display); font-style: italic; font-size: 1.02rem; color: #35514f; border-left: 3px solid var(--teal); padding-left: 0.75rem; }
  .assist-page .chip { display: inline-flex; align-items: center; gap: 0.42rem; font-size: 0.76rem; font-weight: 600; padding: 0.28rem 0.7rem; border-radius: 999px; white-space: nowrap; }
  .assist-page .chip .dot { width: 7px; height: 7px; border-radius: 50%; background: currentColor; }
  .assist-page .chip-draft { background: color-mix(in srgb, var(--sand) 26%, white); color: var(--sand-deep); }
  .assist-page .chip-todo { background: color-mix(in srgb, var(--teal) 18%, white); color: var(--teal-deep); }
  .assist-page .chip-ok { background: color-mix(in srgb, #4c9a5e 20%, white); color: #2f6d3f; }
  .assist-page .chip-warn { background: color-mix(in srgb, var(--sand) 30%, white); color: var(--sand-deep); }
  .assist-page .chip-note { background: color-mix(in srgb, var(--coral) 20%, white); color: #a5442f; }
  .assist-page .paper-foot { padding: 0.9rem 1.35rem 1.1rem; border-top: 1px solid var(--paper-line); font-size: 0.82rem; color: var(--paper-muted); display: flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.3); }
  .assist-page .paper-foot svg { color: var(--sand-deep); flex: none; }

  .assist-page [data-reveal] { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.2,0.7,0.2,1); }
  .assist-page [data-reveal].in { opacity: 1; transform: none; }

  /* sections */
  .assist-page section { position: relative; }
  .assist-page .band-fog { background: var(--fog); color: var(--on-fog); }
  .assist-page .band-fog h2, .assist-page .band-fog h3 { color: var(--on-fog); }
  .assist-page .sec { padding-block: clamp(4rem, 8vw, 7rem); }
  .assist-page .sec-head { max-width: 60ch; }
  .assist-page .sec-head h2 { font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -0.015em; }
  .assist-page .sec-head p { margin-top: 1.1rem; color: var(--on-fog-muted); font-size: 1.08rem; }
  .assist-page .band-dark .sec-head p { color: var(--on-dark-muted); }
  .assist-page .divider { display: block; width: 100%; height: 70px; }

  /* at-a-glance infographic */
  .assist-page .glance { padding-block: clamp(3rem, 6vw, 4.5rem); }
  .assist-page .glance-intro { max-width: 56ch; }
  .assist-page .glance-intro h2 { font-size: clamp(1.7rem, 3.4vw, 2.5rem); letter-spacing: -0.015em; }
  .assist-page .glance-rail { margin-top: 2.8rem; position: relative; display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.4rem 1rem; }
  .assist-page .glance-rail::before { content: ""; position: absolute; left: 12%; right: 12%; top: 34px; height: 2px; background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--teal) 48%, white) 20%, color-mix(in srgb, var(--teal) 48%, white) 80%, transparent); z-index: 0; }
  .assist-page .glance-item { position: relative; z-index: 1; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 0.55rem; }
  .assist-page .glance-badge { width: 68px; height: 68px; border-radius: 20px; display: grid; place-items: center; color: #fff; background: linear-gradient(160deg, var(--teal), var(--teal-deep)); box-shadow: 0 16px 28px -14px color-mix(in srgb, var(--teal-deep) 75%, transparent); border: 5px solid var(--fog); }
  .assist-page .glance-item h3 { font-size: 1.12rem; }
  .assist-page .glance-item p { font-size: 0.86rem; color: var(--on-fog-muted); max-width: 20ch; line-height: 1.4; }
  .assist-page .glance-note { margin: 2.6rem auto 0; width: fit-content; display: flex; align-items: center; gap: 0.55rem; font-weight: 600; color: var(--teal-deep); background: color-mix(in srgb, var(--teal) 10%, white); border: 1px solid color-mix(in srgb, var(--teal) 26%, white); padding: 0.6rem 1.15rem; border-radius: 999px; font-size: 0.92rem; text-align: center; }
  @media (max-width: 720px) {
    .assist-page .glance-rail { grid-template-columns: repeat(2, 1fr); gap: 2rem 1rem; }
    .assist-page .glance-rail::before { display: none; }
  }

  /* tools */
  .assist-page .tools { margin-top: 2.8rem; display: grid; gap: 1.4rem; }
  @media (min-width: 720px) { .assist-page .tools { grid-template-columns: repeat(2, 1fr); } }
  .assist-page .tool { background: #fff; border: 1px solid var(--fog-line); border-radius: 18px; padding: 1.7rem 1.7rem 1.8rem; display: flex; flex-direction: column; gap: 0.9rem; transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s; }
  .assist-page .tool:hover { transform: translateY(-4px); box-shadow: 0 24px 50px -28px rgba(14,36,41,0.35); border-color: var(--teal); }
  .assist-page .tool-ico { width: 46px; height: 46px; border-radius: 13px; display: grid; place-items: center; background: color-mix(in srgb, var(--teal) 12%, white); color: var(--teal-deep); flex: none; }
  .assist-page .tool h3 { font-size: 1.35rem; }
  .assist-page .tool p { color: var(--on-fog-muted); font-size: 0.98rem; }
  .assist-page .promise { margin-top: auto; display: flex; align-items: center; gap: 0.55rem; font-size: 0.9rem; color: var(--teal-deep); font-weight: 600; background: color-mix(in srgb, var(--teal) 9%, white); border-radius: 11px; padding: 0.7rem 0.85rem; }
  .assist-page .promise svg { flex: none; }

  /* trust */
  .assist-page .pillars { margin-top: 2.8rem; display: grid; gap: 1.3rem; }
  @media (min-width: 720px) { .assist-page .pillars { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1020px) { .assist-page .pillars { grid-template-columns: repeat(4, 1fr); } }
  .assist-page .pillar { border-top: 2px solid var(--teal-deep); padding-top: 1.2rem; }
  .assist-page .pillar h3 { font-size: 1.2rem; margin: 0 0 0.55rem; }
  .assist-page .pillar p { color: var(--on-dark-muted); font-size: 0.92rem; }

  /* testimonials */
  .assist-page .tnote { display: inline-flex; align-items: center; gap: 0.5rem; margin-top: 0.9rem; font-size: 0.82rem; color: var(--on-fog-muted); background: color-mix(in srgb, var(--sand) 22%, white); border: 1px dashed var(--sand-deep); padding: 0.4rem 0.8rem; border-radius: 999px; }
  .assist-page .quotes { margin-top: 2.6rem; display: grid; gap: 1.4rem; }
  @media (min-width: 760px) { .assist-page .quotes { grid-template-columns: repeat(3, 1fr); } }
  .assist-page .quote-card { background: #fff; border: 1px solid var(--fog-line); border-radius: 18px; padding: 1.7rem; display: flex; flex-direction: column; gap: 1.1rem; position: relative; }
  .assist-page .quote-card .mark { font-family: var(--f-display); font-size: 3rem; line-height: 0.7; color: color-mix(in srgb, var(--teal) 45%, white); height: 1.2rem; }
  .assist-page .quote-card blockquote { margin: 0; font-family: var(--f-display); font-size: 1.12rem; line-height: 1.45; color: var(--on-fog); }
  .assist-page .quote-who { margin-top: auto; display: flex; align-items: center; gap: 0.75rem; }
  .assist-page .avatar { width: 40px; height: 40px; border-radius: 50%; background: color-mix(in srgb, var(--teal) 16%, white); color: var(--teal-deep); display: grid; place-items: center; font-family: var(--f-display); font-weight: 600; flex: none; }
  .assist-page .quote-who .name { font-weight: 600; font-size: 0.92rem; color: var(--on-fog); }
  .assist-page .quote-who .role { font-size: 0.82rem; color: var(--on-fog-muted); }
  .assist-page .sample-tag { position: absolute; top: 0.9rem; right: 0.9rem; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--sand-deep); background: color-mix(in srgb, var(--sand) 24%, white); padding: 0.2rem 0.5rem; border-radius: 6px; }

  /* steps */
  .assist-page .steps { margin-top: 2.8rem; display: grid; gap: 1.4rem; counter-reset: step; }
  @media (min-width: 820px) { .assist-page .steps { grid-template-columns: repeat(3, 1fr); } }
  .assist-page .step { position: relative; padding: 1.7rem; border: 1px solid var(--fog-line); border-radius: 16px; background: #fff; }
  .assist-page .step::before { counter-increment: step; content: counter(step); font-family: var(--f-display); font-size: 1.4rem; font-weight: 600; color: var(--teal-deep); display: inline-grid; place-items: center; width: 2.2rem; height: 2.2rem; border-radius: 50%; background: color-mix(in srgb, var(--teal) 13%, white); }
  .assist-page .step h3 { font-size: 1.24rem; margin: 0.8rem 0 0.5rem; }
  .assist-page .step p { color: var(--on-fog-muted); font-size: 0.95rem; }

  /* cta + disclaimer */
  .assist-page .cta-band { text-align: center; padding-block: clamp(4.5rem, 9vw, 7rem); position: relative; overflow: hidden; }
  .assist-page .cta-band .glow2 { position: absolute; left: 50%; top: 40%; transform: translate(-50%,-50%); width: 80vw; max-width: 760px; height: 380px; background: radial-gradient(ellipse, color-mix(in srgb, var(--teal) 22%, transparent), transparent 70%); filter: blur(8px); }
  .assist-page .cta-band .wrap { position: relative; z-index: 1; }
  .assist-page .cta-band h2 { font-size: clamp(2.2rem, 5vw, 3.6rem); letter-spacing: -0.02em; }
  .assist-page .cta-band h2 em { font-style: italic; color: var(--sand); font-weight: 500; }
  .assist-page .cta-band p { margin: 1.2rem auto 0; max-width: 46ch; color: var(--on-dark-muted); }
  .assist-page .cta-band .hero-cta { justify-content: center; }
  .assist-page .download-line { margin-top: 1.4rem; font-size: 0.9rem; color: var(--on-dark-muted); }
  .assist-page .download-line a { color: var(--sand); text-decoration: underline; text-underline-offset: 2px; font-weight: 600; }
  .assist-page .download-line a:hover { color: #f0c884; }
  .assist-page .disclaimer-band { border-top: 1px solid var(--hairline); padding-block: 1.8rem; }
  .assist-page .disclaimer-band p { max-width: 70ch; margin-inline: auto; text-align: center; font-size: 0.82rem; color: var(--on-dark-muted); line-height: 1.6; }

  @media (prefers-reduced-motion: reduce) {
    .assist-page [data-reveal] { opacity: 1 !important; transform: none !important; transition: none; }
    .assist-page .a-btn:hover, .assist-page .tool:hover { transform: none; }
  }
</style>

<section class="hero band-dark">
  <canvas id="assist-wave" aria-hidden="true"></canvas>
  <div class="hero-glow" aria-hidden="true"></div>
  <div class="wrap">
    <div class="hero-grid">
      <div>
        <p class="eyebrow" data-reveal>Made for counsellors</p>
        <h1 data-reveal>Less time on notes.<br>More time with <em>people.</em></h1>
        <p class="lede" data-reveal>
          Clearshore Assist quietly turns your session notes, intakes and client
          check-ins into warm, ready-to-review drafts &mdash; so the writing takes
          minutes, and the care stays entirely yours.
        </p>
        <div class="hero-cta" data-reveal>
          <a class="a-btn sand" href="mailto:hello@clearshorecounselling.com?subject=Clearshore%20Assist%20early%20access">Request early access</a>
          <a class="a-btn ghost" href="#tools">See how it helps</a>
        </div>
        <div class="hero-assure" data-reveal>
          <span><svg class="tick" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8.5l3.5 3.5L14 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>You read and approve everything</span>
          <span><svg class="tick" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8.5l3.5 3.5L14 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Nothing made up</span>
          <span><svg class="tick" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8.5l3.5 3.5L14 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Your data stays private</span>
        </div>
      </div>

      <div class="paper" data-reveal aria-label="Example session note">
        <div class="paper-head">
          <span class="doc">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 3h9l4 4v14H6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 3v5h5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>
            Grief session &middot; note
          </span>
          <span class="chip chip-draft"><span class="dot"></span>Draft &mdash; please review</span>
        </div>
        <div class="paper-body">
          <div class="sect">
            <div class="k">What happened</div>
            <div class="v quote">&ldquo;Client spoke about ongoing grief after a recent loss &mdash; disrupted sleep and pulling away from friends.&rdquo;</div>
          </div>
          <div class="sect">
            <div class="k">Your assessment</div>
            <div class="v"><span class="chip chip-todo">Left for you</span> &nbsp;No formulation or diagnosis added &mdash; that part is yours.</div>
          </div>
          <div class="sect">
            <div class="k">Safety</div>
            <div class="v"><span class="chip chip-ok"><span class="dot"></span>Nothing concerning noted</span></div>
          </div>
        </div>
        <div class="paper-foot">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 1.5l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.9 4.2 13.3l.7-4.3-3.1-3 4.3-.6L8 1.5z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>
          Your words are kept exactly. Gaps are marked, never guessed.
        </div>
      </div>
    </div>
  </div>
</section>

<svg class="divider" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true"><path d="M0 40 C 240 5, 480 5, 720 34 S 1200 70, 1440 30 L1440 70 L0 70 Z" fill="#eef1ef"/></svg>

<section class="band-fog glance">
  <div class="wrap">
    <div class="glance-intro" data-reveal>
      <p class="eyebrow on-fog">At a glance</p>
      <h2>Four helpers. One simple promise.</h2>
    </div>
    <div class="glance-rail">
      <div class="glance-item" data-reveal>
        <span class="glance-badge" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M6 3h9l4 4v14H6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 3v5h5M9 13h6M9 17h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></span>
        <h3>Session notes</h3>
        <p>Your summary becomes a tidy note</p>
      </div>
      <div class="glance-item" data-reveal>
        <span class="glance-badge" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></span>
        <h3>Intake summaries</h3>
        <p>First contact becomes a clear picture</p>
      </div>
      <div class="glance-item" data-reveal>
        <span class="glance-badge" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 3l8 3v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 8v4M12 15h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span>
        <h3>Safety check</h3>
        <p>Quietly spots risk language for you</p>
      </div>
      <div class="glance-item" data-reveal>
        <span class="glance-badge" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 20s-7-4.3-7-9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7 3.5C19 15.7 12 20 12 20z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg></span>
        <h3>Client check-ins</h3>
        <p>Gentle reflections between sessions</p>
      </div>
    </div>
    <p class="glance-note" data-reveal>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8.5l3.5 3.5L14 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      Every one comes back as a draft you review and approve
    </p>
  </div>
</section>

<section id="tools" class="band-fog sec" style="padding-top:0;">
  <div class="wrap">
    <div class="sec-head" data-reveal>
      <p class="eyebrow on-fog">A closer look</p>
      <h2>The paperwork, drafted. The judgement, yours.</h2>
      <p>Give each helper a few plain sentences, and it hands back a warm, tidy
        first draft &mdash; honest about what it doesn&rsquo;t know, and always
        waiting for your sign-off.</p>
    </div>
    <div class="tools">
      <article class="tool" data-reveal>
        <span class="tool-ico" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 3h9l4 4v14H6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 3v5h5M9 13h6M9 17h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></span>
        <h3>Session notes</h3>
        <p>A few lines about the session become a tidy note in your preferred
          format. Anything it can&rsquo;t know is gently left for you &mdash; it
          never invents a diagnosis or progress.</p>
        <div class="promise"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8.5l3.5 3.5L14 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Ready to review in minutes</div>
      </article>
      <article class="tool" data-reveal>
        <span class="tool-ico" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></span>
        <h3>Intake summaries</h3>
        <p>Turns first-contact notes into a clear picture &mdash; the
          person&rsquo;s concerns in their own words, their strengths, and gentle
          questions to ask next. Missing details are simply marked unknown.</p>
        <div class="promise"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8.5l3.5 3.5L14 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Nothing filled in that you didn&rsquo;t say</div>
      </article>
      <article class="tool" data-reveal>
        <span class="tool-ico" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3l8 3v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 8v4M12 15h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span>
        <h3>Safety check</h3>
        <p>Quietly reads a piece of writing and points out anything that might
          hint at risk &mdash; so it catches your eye. A caring second read, never
          a replacement for your own assessment.</p>
        <div class="promise"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8.5l3.5 3.5L14 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Points you to proper safeguarding steps</div>
      </article>
      <article class="tool" data-reveal>
        <span class="tool-ico" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 20s-7-4.3-7-9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7 3.5C19 15.7 12 20 12 20z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg></span>
        <h3>Client check-ins</h3>
        <p>Warm, optional reflections and grounding pauses for between sessions
          &mdash; soft, choice-based, and never pushy. Always yours to read and
          approve before anything reaches a client.</p>
        <div class="promise"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8.5l3.5 3.5L14 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>You approve every message</div>
      </article>
    </div>
  </div>
</section>

<section id="voices" class="band-fog sec" style="padding-top:0;">
  <div class="wrap">
    <div class="sec-head" data-reveal>
      <p class="eyebrow on-fog">In their words</p>
      <h2>Loved by counsellors who&rsquo;d rather be counselling.</h2>
      <span class="tnote" data-reveal>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 1.5l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.9 4.2 13.3l.7-4.3-3.1-3 4.3-.6L8 1.5z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>
        Placeholder quotes &mdash; we&rsquo;ll swap in real ones from you
      </span>
    </div>
    <div class="quotes">
      <figure class="quote-card" data-reveal>
        <span class="sample-tag">Sample</span>
        <span class="mark" aria-hidden="true">&ldquo;</span>
        <blockquote>My notes used to eat my evenings. Now they&rsquo;re drafted before I&rsquo;ve finished my tea &mdash; and they still sound like me.</blockquote>
        <figcaption class="quote-who"><span class="avatar" aria-hidden="true">A</span><span><span class="name">Placeholder name</span><br><span class="role">Grief counsellor, private practice</span></span></figcaption>
      </figure>
      <figure class="quote-card" data-reveal>
        <span class="sample-tag">Sample</span>
        <span class="mark" aria-hidden="true">&ldquo;</span>
        <blockquote>What won me over is what it won&rsquo;t do. It never guesses, never diagnoses &mdash; it just gives me a head start I can trust.</blockquote>
        <figcaption class="quote-who"><span class="avatar" aria-hidden="true">B</span><span><span class="name">Placeholder name</span><br><span class="role">Trauma therapist</span></span></figcaption>
      </figure>
      <figure class="quote-card" data-reveal>
        <span class="sample-tag">Sample</span>
        <span class="mark" aria-hidden="true">&ldquo;</span>
        <blockquote>The safety check has flagged a couple of things I&rsquo;d have wanted a second look at. It feels like a careful colleague.</blockquote>
        <figcaption class="quote-who"><span class="avatar" aria-hidden="true">C</span><span><span class="name">Placeholder name</span><br><span class="role">Counsellor, community service</span></span></figcaption>
      </figure>
    </div>
  </div>
</section>

<svg class="divider" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true" style="background:#eef1ef"><path d="M0 30 C 260 65, 520 65, 760 36 S 1220 5, 1440 40 L1440 70 L0 70 Z" fill="#081a1f"/></svg>

<section id="trust" class="band-dark sec">
  <div class="wrap">
    <div class="sec-head" data-reveal>
      <p class="eyebrow">Safe by design</p>
      <h2>The care stays in your hands. Always.</h2>
      <p>The point isn&rsquo;t to replace your judgement &mdash; it&rsquo;s to give
        you back the time around it, without ever putting a client at risk.</p>
    </div>
    <div class="pillars">
      <div class="pillar" data-reveal><h3>You approve everything</h3><p>Every note, flag and message is a draft. Nothing is used or sent until you&rsquo;ve read it and made it yours.</p></div>
      <div class="pillar" data-reveal><h3>It never decides</h3><p>No diagnosis, no risk score, no promises of progress. It drafts and organises &mdash; the clinical calls are all yours.</p></div>
      <div class="pillar" data-reveal><h3>Private by design</h3><p>It runs on your own device. De-identify first, and client words aren&rsquo;t sent to the cloud, stored, or used to train anything.</p></div>
      <div class="pillar" data-reveal><h3>Safety comes first</h3><p>Anything that might hint at risk is surfaced for you, and always points you to proper risk and safeguarding steps.</p></div>
    </div>
    <div class="paper" data-reveal style="margin-top:2.8rem; max-width:600px;">
      <div class="paper-head">
        <span class="doc"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l8 3v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>Safety check</span>
        <span class="chip chip-warn"><span class="dot"></span>Worth a closer look</span>
      </div>
      <div class="paper-body">
        <div class="sect"><div class="k">What caught its eye</div><div class="v quote">&ldquo;drinking to cope most evenings&rdquo;</div></div>
        <div class="sect"><div class="k">What it suggests you do</div><div class="v">Complete your usual risk assessment and safeguarding steps. This is a gentle heads-up &mdash; not a clinical judgement.</div></div>
      </div>
      <div class="paper-foot"><span class="chip chip-note"><span class="dot"></span>Urgent</span>Signs of immediate danger are raised straight away for urgent review.</div>
    </div>
  </div>
</section>

<svg class="divider" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true"><path d="M0 40 C 240 5, 480 5, 720 34 S 1200 70, 1440 30 L1440 70 L0 70 Z" fill="#eef1ef"/></svg>

<section id="how" class="band-fog sec">
  <div class="wrap">
    <div class="sec-head" data-reveal>
      <p class="eyebrow on-fog">How it works</p>
      <h2>Three easy steps &mdash; and the last one is always yours.</h2>
    </div>
    <div class="steps">
      <div class="step" data-reveal><h3>Jot a few lines</h3><p>Remove anything that could identify a client, then type a few plain sentences about the session or first contact.</p></div>
      <div class="step" data-reveal><h3>Get a gentle draft</h3><p>In moments you have a warm, tidy first version &mdash; with your words kept, and anything uncertain clearly marked.</p></div>
      <div class="step" data-reveal><h3>Read, tweak, done</h3><p>You review it, adjust anything, and sign it off. The judgement and the duty of care stay entirely with you.</p></div>
    </div>
  </div>
</section>

<svg class="divider" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true" style="background:#eef1ef"><path d="M0 30 C 260 65, 520 65, 760 36 S 1220 5, 1440 40 L1440 70 L0 70 Z" fill="#081a1f"/></svg>

<section class="band-dark cta-band">
  <div class="glow2" aria-hidden="true"></div>
  <div class="wrap">
    <p class="eyebrow" style="justify-content:center; display:flex;" data-reveal>Now in early access</p>
    <h2 data-reveal>Give your evenings <em>back.</em></h2>
    <p data-reveal>Be among the first counsellors to try Clearshore Assist. We&rsquo;ll
      show you around gently &mdash; and every draft stays yours to approve.</p>
    <div class="hero-cta" data-reveal>
      <a class="a-btn sand" href="mailto:hello@clearshorecounselling.com?subject=Clearshore%20Assist%20early%20access">Request early access</a>
      <a class="a-btn ghost" href="#tools">See how it helps</a>
    </div>
    <p class="download-line" data-reveal>
      Testing it out?
      <a href="/downloads/clearshore-assist-windows.exe" download>Download the Windows app (beta)</a>
      &mdash; an unsigned preview, Windows only for now.
    </p>
  </div>
</section>

<div class="band-dark disclaimer-band">
  <div class="wrap">
    <p>Clearshore Assist prepares drafts for a qualified counsellor to review. It&rsquo;s a helper &mdash; not a medical device, a diagnosis, or a crisis service &mdash; and never replaces your clinical judgement, consent, or local safeguarding steps.</p>
  </div>
</div>
`;
