/* Clearshore Assist — deterministic skills, ported to the browser.
 * Mirrors the Python runtime (session notes, intake, safety check, client
 * check-in). Runs entirely on the device; nothing is sent anywhere.
 * Exposes window.CLEARSHORE_SKILLS and (for tests) module.exports.
 */
(function (root) {
  "use strict";

  // ---------------------------------------------------------------- schemas
  var SESSION_TYPES = ["individual", "couples", "grief", "teacher_wellbeing", "intake_review"];
  var SCHEMAS = {
    "session-notes": {
      properties: {
        session_summary: { type: "string" },
        client_context: { type: "string" },
        session_type: { type: "string", enum: SESSION_TYPES },
        clinical_framework: { type: "string", enum: ["DAP", "SOAP", "BIRP", "narrative"] },
        tone: { type: "string", enum: ["professional", "warm", "concise", "detailed"] },
      },
      required: ["session_summary", "client_context", "session_type", "clinical_framework"],
      additionalProperties: false,
    },
    intake: {
      properties: {
        intake_text: { type: "string" },
        client_context: { type: "string" },
        session_type: { type: "string", enum: SESSION_TYPES },
      },
      required: ["intake_text", "session_type"],
      additionalProperties: false,
    },
    risk: {
      properties: {
        source_text: { type: "string" },
        known_context: { type: "string" },
        requested_sensitivity: { type: "string", enum: ["standard", "high"] },
      },
      required: ["source_text"],
      additionalProperties: false,
    },
    "client-tools": {
      properties: {
        client_goal: { type: "string" },
        client_context: { type: "string" },
        format: { type: "string", enum: ["daily_check_in", "weekly_reflection", "post_session_reflection", "grounding_exercise"] },
        tone: { type: "string", enum: ["warm", "plain", "concise"] },
      },
      required: ["client_goal", "format"],
      additionalProperties: false,
    },
  };

  function ValidationError(errors) { this.validation = true; this.errors = errors; }

  function validateInput(instance, schema) {
    var errors = [];
    var props = schema.properties || {};
    var required = schema.required || [];
    required.forEach(function (f) { if (!(f in instance)) errors.push("missing required field: " + f); });
    if (schema.additionalProperties === false) {
      Object.keys(instance).forEach(function (f) { if (!(f in props)) errors.push("unexpected field: " + f); });
    }
    Object.keys(props).forEach(function (f) {
      if (!(f in instance)) return;
      var def = props[f], val = instance[f];
      if (def.type === "string" && typeof val !== "string") errors.push("field " + f + " must be a string");
      if (def.enum && def.enum.indexOf(val) === -1) errors.push("field " + f + " has an invalid value");
    });
    if (errors.length) throw new ValidationError(errors);
  }

  function clean(v) { return typeof v === "string" ? v.trim() : ""; }
  function sentences(text) {
    return text.split(/(?<=[.!?])\s+/).map(function (s) { return s.trim(); }).filter(Boolean);
  }
  function sentenceFor(text, phrase) {
    var ss = sentences(text);
    for (var i = 0; i < ss.length; i++) if (ss[i].toLowerCase().indexOf(phrase) !== -1) return ss[i];
    return phrase;
  }

  var RISK_INSTRUCTION =
    "MANDATORY: the clinician must complete a formal risk assessment now and follow local safeguarding procedures before this note is finalised.";

  // ------------------------------------------------------------ session notes
  var SN_FRAMEWORKS = ["DAP", "SOAP", "BIRP", "narrative"];
  var CLINICIAN_TODO = "[Clinician to complete]";
  var NOT_GENERATED = "[Clinician to complete - this deterministic tool does not generate clinical interpretation]";
  var UNKNOWN_SN = "Not provided (unknown).";
  var SN_RISK_TERMS = ["suicid", "kill myself", "kill themselves", "take my life", "end my life", "end their life",
    "want to die", "wants to die", "wish i was dead", "wish i were dead", "better off dead", "no reason to live",
    "nothing to live for", "can't go on", "cannot go on", "self-harm", "self harm", "harm myself", "hurt myself",
    "cutting myself", "overdose", "hopeless", "harm to others", "hurt someone"];
  var SN_DATA = {
    DAP: ["Observations", "Client mood / affect", "Behaviour and presentation"],
    SOAP: ["Subjective (client self-report)", "Objective (observed presentation)"],
    BIRP: ["Behavior (what the client said or did in session)"],
    narrative: ["Session overview and main themes"],
  };
  var SN_ASSESS = {
    DAP: ["Clinical formulation", "Risk indicators", "Progress or barriers"],
    SOAP: ["Assessment / clinical interpretation", "Risk indicators", "Progress or barriers"],
    BIRP: ["Intervention (techniques used)", "Response (client response to intervention)"],
    narrative: ["Clinical impressions", "Interventions and responses"],
  };
  var SN_PLAN = {
    DAP: ["Interventions used", "Homework or follow-up tasks", "Next session focus"],
    SOAP: ["Recommendations and follow-up tasks", "Next session focus", "Referrals"],
    BIRP: ["Follow-up actions and homework", "Referrals or risk monitoring tasks"],
    narrative: ["Next steps and goals", "Referrals or recommended supports"],
  };
  function snRisk(text) {
    var low = text.toLowerCase(), found = [];
    SN_RISK_TERMS.forEach(function (t) { if (low.indexOf(t) !== -1 && found.indexOf(t) === -1) found.push(t); });
    return found;
  }
  function generateNote(data) {
    validateInput(data, SCHEMAS["session-notes"]);
    var fw = data.clinical_framework;
    var summary = clean(data.session_summary), context = clean(data.client_context);
    var stype = data.session_type, tone = clean(data.tone || "");
    var risk = snRisk(summary + "\n" + context);
    var tonePart = tone ? ", tone: " + tone : "";
    var lines;
    lines = ["[" + fw + " - Data]"];
    SN_DATA[fw].forEach(function (h) { lines.push("- " + h + ": " + CLINICIAN_TODO); });
    lines.push("", "Clinician-provided session summary (verbatim, not interpreted):", summary || UNKNOWN_SN);
    var dataBlock = lines.join("\n");
    lines = ["[" + fw + " - Assessment]"];
    SN_ASSESS[fw].forEach(function (h) { lines.push("- " + h + ": " + NOT_GENERATED); });
    lines.push("", "This tool has not inferred any diagnosis, medication detail, client improvement, or treatment outcome.",
      "", "Background / context provided (verbatim, not interpreted):", context || UNKNOWN_SN);
    if (risk.length) lines.push("", "Possible risk language was detected in the input - see Risk Flags. This tool does not rate, quantify, or rule out risk.");
    var assessBlock = lines.join("\n");
    lines = ["[" + fw + " - Plan]"];
    SN_PLAN[fw].forEach(function (h) { lines.push("- " + h + ": " + CLINICIAN_TODO); });
    lines.push("", "No interventions, referrals, or follow-up tasks have been invented by this tool.");
    if (risk.length) lines.push("", RISK_INSTRUCTION);
    var planBlock = lines.join("\n");
    var riskFlags = risk.length
      ? "Potential risk language detected (evidence terms: " + risk.map(function (t) { return '"' + t + '"'; }).join(", ") +
        "). This is a keyword flag, not a clinical judgement. " + RISK_INSTRUCTION
      : "No risk language was detected in the provided text. This is NOT a finding that the client is safe or free of risk; the clinician must assess risk directly.";
    var actions = ["Review, correct, and complete this scaffolded note before any clinical use.",
      "Verify every fact against your own record of the session.",
      "Do not rely on this tool for diagnosis, risk rating, or treatment decisions."];
    if (risk.length) actions.unshift(RISK_INSTRUCTION);
    return {
      note_type: "Session Note", clinical_framework: fw,
      summary: "Deterministic " + fw + " session-note scaffold for a " + stype.replace(/_/g, " ") + " session" + tonePart +
        ". This is a template-based organiser of clinician-provided input, not an AI-generated clinical formulation. Clinician summary (verbatim): " + (summary || UNKNOWN_SN),
      data: dataBlock, assessment: assessBlock, plan: planBlock, risk_flags: riskFlags,
      clinician_actions: actions.map(function (a, i) { return (i + 1) + ". " + a; }).join(" "),
    };
  }

  // ------------------------------------------------------------------- intake
  var IN_RISK = ["suicid", "kill myself", "end my life", "take my life", "want to die", "wish i wasn't here",
    "don't want to be here", "self-harm", "self harm", "harm myself", "hurt myself", "hopeless", "can't go on",
    "can't keep myself safe", "unsafe", "abuse", "afraid of my partner", "hearing voices", "disappear"];
  var IN_SUPPORT = ["supportive", "support", "partner", "family", "friends", "colleague", "counselling",
    "counsellor", "therapist", "exercise", "faith", "hobby", "work", "coping", "routine"];
  var IN_LIMITS = [
    "This is a deterministic prototype that segments and organises the provided text; it does not interpret, diagnose, or triage.",
    "It does not assign a diagnosis, risk level, safeguarding conclusion, or treatment plan.",
    "Missing information is marked as unknown rather than inferred.",
    "Risk language is only surfaced for the clinician; use the Safety check and formal risk and safeguarding procedures for any risk decision.",
    "Clinician review is required before any clinical use. This does not replace informed consent or clinical judgement."];
  function processIntake(data) {
    validateInput(data, SCHEMAS.intake);
    var text = clean(data.intake_text), context = clean(data.client_context || ""), stype = data.session_type;
    var combined = text + "\n" + context, low = combined.toLowerCase();
    var presenting = text ? sentences(text).map(function (s) { return "Reported (verbatim): " + s; })
      : ["unknown: no intake text was provided."];
    var history = context
      ? "Session type: " + stype.replace(/_/g, " ") + ". Background/context provided (verbatim, not interpreted): " + context
      : "Session type: " + stype.replace(/_/g, " ") + ". Background/history: unknown (no client_context provided).";
    var strengths = [], seenS = {};
    IN_SUPPORT.forEach(function (c) { if (low.indexOf(c) !== -1 && !seenS[c]) { seenS[c] = 1; strengths.push("Possible support/strength cue '" + c + "': " + sentenceFor(combined, c)); } });
    if (!strengths.length) strengths = ["unknown: no strengths or supports were explicitly identified in the provided text (this does not mean none exist)."];
    var indicators = [], seenR = {};
    IN_RISK.forEach(function (c) { if (low.indexOf(c) !== -1 && !seenR[c]) { seenR[c] = 1; indicators.push({ cue: c, evidence: sentenceFor(combined, c) }); } });
    if (!indicators.length) indicators = [{ cue: "none_detected", evidence: "No explicit risk language was detected in the intake text. This is not confirmation of safety; screen for risk directly and use the Safety check." }];
    var questions = ["Confirm the client's main goals for counselling in their own words.",
      "Clarify the timeline and any recent changes or triggers.",
      "Ask directly about current safety, thoughts of suicide or self-harm, intent, plan, and access to means.",
      "Ask what support the client currently has and what has helped before."];
    if (indicators.some(function (i) { return i.cue !== "none_detected"; }))
      questions.unshift("Risk language was surfaced in the intake text: run the Safety check and complete formal risk screening before proceeding.");
    return { presenting_issues: presenting, history_and_context: history, strengths_and_supports: strengths,
      risk_indicators: indicators, follow_up_questions: questions, clinician_review_required: true, limitations: IN_LIMITS.slice() };
  }

  // -------------------------------------------------------------- safety check
  var DOMAIN_LABELS = {
    suicide: "Suicidal thoughts or intent", self_harm: "Self-harm", harm_to_others: "Harm to others",
    abuse_safeguarding: "Abuse or safeguarding", isolation: "Severe isolation or withdrawal",
    substance: "Substance-related concern", psychosis_mania: "Psychosis or mania indicators",
    acute_deterioration: "Acute deterioration", unspecified: "Unspecified risk language",
  };
  var TIER_RANK = { urgent: 0, review: 1, ambiguous: 2 };
  var SIGNALS = [
    ["kill myself", "suicide", "urgent"], ["killing myself", "suicide", "urgent"], ["kill themselves", "suicide", "urgent"],
    ["end my life", "suicide", "urgent"], ["ending my life", "suicide", "urgent"], ["end it all", "suicide", "urgent"],
    ["take my life", "suicide", "urgent"], ["taking my life", "suicide", "urgent"], ["want to die", "suicide", "urgent"],
    ["wants to die", "suicide", "urgent"], ["want to be dead", "suicide", "urgent"], ["have a plan to", "suicide", "urgent"],
    ["my plan is to", "suicide", "urgent"], ["planned how", "suicide", "urgent"], ["worked out how", "suicide", "urgent"],
    ["know how i would", "suicide", "urgent"], ["have the pills", "suicide", "urgent"], ["enough tablets to", "suicide", "urgent"],
    ["have a gun", "suicide", "urgent"], ["have a rope", "suicide", "urgent"], ["access to a gun", "suicide", "urgent"],
    ["stockpiled", "suicide", "urgent"], ["saved up my medication", "suicide", "urgent"], ["attempted suicide", "suicide", "urgent"],
    ["tried to kill myself", "suicide", "urgent"], ["tried to end my life", "suicide", "urgent"], ["tried to take my life", "suicide", "urgent"],
    ["overdosed on purpose", "suicide", "urgent"], ["recent suicide attempt", "suicide", "urgent"], ["can't keep myself safe", "suicide", "urgent"],
    ["cannot keep myself safe", "suicide", "urgent"], ["can't stay safe", "suicide", "urgent"], ["unable to stay safe", "suicide", "urgent"],
    ["can't guarantee my safety", "suicide", "urgent"], ["want to kill", "harm_to_others", "urgent"], ["going to kill him", "harm_to_others", "urgent"],
    ["going to kill her", "harm_to_others", "urgent"], ["going to kill them", "harm_to_others", "urgent"], ["want to hurt someone", "harm_to_others", "urgent"],
    ["going to hurt someone", "harm_to_others", "urgent"],
    ["wish i wasn't here", "suicide", "review"], ["wish i was not here", "suicide", "review"], ["wish i were not here", "suicide", "review"],
    ["don't want to be here", "suicide", "review"], ["do not want to be here", "suicide", "review"], ["don't want to wake up", "suicide", "review"],
    ["not wake up", "suicide", "review"], ["sleep and never wake", "suicide", "review"], ["better off without me", "suicide", "review"],
    ["everyone would be better off", "suicide", "review"], ["better if i wasn't around", "suicide", "review"], ["tired of living", "suicide", "review"],
    ["no point in living", "suicide", "review"], ["no reason to live", "suicide", "review"], ["nothing to live for", "suicide", "review"],
    ["hopeless", "suicide", "review"], ["can't see a future", "suicide", "review"], ["self-harm", "self_harm", "review"],
    ["self harm", "self_harm", "review"], ["harm myself", "self_harm", "review"], ["hurt myself", "self_harm", "review"],
    ["harming myself", "self_harm", "review"], ["cutting myself", "self_harm", "review"], ["cut myself", "self_harm", "review"],
    ["burning myself", "self_harm", "review"], ["abuse", "abuse_safeguarding", "review"], ["abused", "abuse_safeguarding", "review"],
    ["abusive", "abuse_safeguarding", "review"], ["hitting me", "abuse_safeguarding", "review"], ["hits me", "abuse_safeguarding", "review"],
    ["afraid of my partner", "abuse_safeguarding", "review"], ["scared of my partner", "abuse_safeguarding", "review"], ["threatened me", "abuse_safeguarding", "review"],
    ["not safe at home", "abuse_safeguarding", "review"], ["violence at home", "abuse_safeguarding", "review"], ["won't let me leave", "abuse_safeguarding", "review"],
    ["drinking to cope", "substance", "review"], ["drinking to sleep", "substance", "review"], ["drinking more to", "substance", "review"],
    ["drink myself", "substance", "review"], ["can't stop drinking", "substance", "review"], ["using more to cope", "substance", "review"],
    ["using drugs to", "substance", "review"], ["relapsed", "substance", "review"], ["binge drinking", "substance", "review"],
    ["completely alone", "isolation", "review"], ["no one to talk to", "isolation", "review"], ["no support", "isolation", "review"],
    ["cut off everyone", "isolation", "review"], ["pushed everyone away", "isolation", "review"], ["totally isolated", "isolation", "review"],
    ["hearing voices", "psychosis_mania", "review"], ["voices telling me", "psychosis_mania", "review"], ["being followed", "psychosis_mania", "review"],
    ["everyone is watching me", "psychosis_mania", "review"], ["haven't slept in days", "psychosis_mania", "review"], ["racing thoughts", "psychosis_mania", "review"],
    ["people are after me", "psychosis_mania", "review"], ["getting much worse", "acute_deterioration", "review"], ["spiralling", "acute_deterioration", "review"],
    ["falling apart", "acute_deterioration", "review"], ["can't function", "acute_deterioration", "review"], ["stopped eating", "acute_deterioration", "review"],
    ["not getting out of bed", "acute_deterioration", "review"],
    ["want to disappear", "unspecified", "ambiguous"], ["wish i could disappear", "unspecified", "ambiguous"], ["could disappear", "unspecified", "ambiguous"],
    ["just disappear", "unspecified", "ambiguous"], ["make it stop", "unspecified", "ambiguous"], ["make the pain stop", "unspecified", "ambiguous"],
    ["end the pain", "unspecified", "ambiguous"], ["escape it all", "unspecified", "ambiguous"], ["can't go on", "unspecified", "ambiguous"],
    ["can't do this anymore", "unspecified", "ambiguous"], ["at breaking point", "unspecified", "ambiguous"],
  ];
  var SOFT_HIGH = [["overwhelmed", "unspecified", "ambiguous"], ["exhausted", "unspecified", "ambiguous"],
    ["burnt out", "unspecified", "ambiguous"], ["burned out", "unspecified", "ambiguous"],
    ["can't switch off", "unspecified", "ambiguous"], ["at my limit", "unspecified", "ambiguous"]];
  var PROTECTIVE = ["supportive", "support person", "support network", "partner", "family", "friends", "counselling",
    "counsellor", "therapist", "safety plan", "reasons to live", "looking forward", "wants help", "asked for help",
    "reached out", "coping strategies"];
  var RISK_LIMITS = [
    "This is a deterministic keyword prototype, not a clinical risk assessment, risk prediction, or crisis service.",
    "It cannot understand context, tone, negation, or implied meaning, so it produces both false positives and false negatives.",
    "Absence of detected risk language is not evidence of safety.",
    "It provides no diagnosis, probability, definitive risk level, or prognosis.",
    "Human clinician review is mandatory; follow local risk and safeguarding procedures."];
  var FORMAL_ACTION = "Complete a formal risk assessment and follow your local risk and safeguarding procedures. This automated keyword flag is not a clinical assessment and must not replace clinical judgement.";
  function monitorRisk(data) {
    validateInput(data, SCHEMAS.risk);
    var source = clean(data.source_text), known = clean(data.known_context || "");
    var sensitivity = data.requested_sensitivity || "standard";
    var low = source.toLowerCase();
    var signals = SIGNALS.slice();
    if (sensitivity === "high") signals = signals.concat(SOFT_HIGH);
    var matches = [];
    signals.forEach(function (s) {
      if (low.indexOf(s[0]) !== -1) matches.push({ phrase: s[0], domain: s[1], tier: s[2], evidence: sentenceFor(source, s[0]) });
    });
    var grouped = {};
    matches.forEach(function (m) {
      var e = grouped[m.domain];
      if (!e) { e = grouped[m.domain] = { domain: m.domain, label: DOMAIN_LABELS[m.domain], tier: m.tier, evidence: [] }; }
      if (TIER_RANK[m.tier] < TIER_RANK[e.tier]) e.tier = m.tier;
      if (e.evidence.indexOf(m.evidence) === -1) e.evidence.push(m.evidence);
    });
    var domains = Object.keys(grouped).map(function (k) { return grouped[k]; })
      .sort(function (a, b) { return TIER_RANK[a.tier] - TIER_RANK[b.tier] || (a.domain < b.domain ? -1 : 1); });
    domains.forEach(function (d) { d.note = "Evidence is quoted from the provided text. This is a keyword match, not a clinical determination."; });
    var tiers = {}; matches.forEach(function (m) { tiers[m.tier] = 1; });
    var flag = tiers.urgent ? "urgent_clinician_review" : (tiers.review || tiers.ambiguous) ? "needs_clinician_review" : "none_detected";
    var combined = (source + "\n" + known).toLowerCase();
    var protective = [], seenP = {};
    PROTECTIVE.forEach(function (p) { if (combined.indexOf(p) !== -1 && !seenP[p]) { seenP[p] = 1; protective.push({ factor: p, evidence: sentenceFor(source + "\n" + known, p) }); } });
    if (!protective.length) protective = [{ factor: "none_identified", evidence: "No protective factors were identified in the provided text. This is not a risk rating and does not mean none exist." }];
    var domainSet = {}; domains.forEach(function (d) { domainSet[d.domain] = 1; });
    var questions = ["Ask the client directly about any current thoughts of suicide or self-harm, including intent, plan, and access to means.",
      "Clarify the timeframe: are these thoughts current, and can the client stay safe now?",
      "Identify who is available to support the client and whether a safety plan exists."];
    if (domainSet.substance) questions.push("Explore recent changes in alcohol or substance use and their impact on safety and coping.");
    if (domainSet.abuse_safeguarding) questions.push("Sensitively check current safety at home and any safeguarding concerns for the client or any dependants.");
    if (domainSet.psychosis_mania) questions.push("Assess for unusual experiences, sleep, and orientation, and consider whether specialist review is needed.");
    if (flag === "none_detected") questions.push("Screen directly for risk even though no risk language was detected, because absence of language is not evidence of safety.");
    var actions = [];
    if (flag === "urgent_clinician_review") actions.push("URGENT: assess the client's current safety now, do not leave them without an agreed plan for staying safe, and follow your local crisis and escalation procedures.");
    else if (flag === "needs_clinician_review") actions.push("Review the flagged text with the client and complete formal risk screening before the client leaves, or as soon as possible.");
    else actions.push("No risk language was detected; still screen for risk directly. Do not record the client as 'no risk' on the basis of this tool.");
    actions.push(FORMAL_ACTION);
    return { overall_flag: flag, risk_domains: domains, protective_factors: protective,
      follow_up_questions: questions, immediate_clinician_actions: actions, limitations: RISK_LIMITS.slice() };
  }

  // ---------------------------------------------------------- client check-in
  var CT_RISK = ["suicid", "kill myself", "kill themselves", "end my life", "take my life", "want to die",
    "wish i wasn't here", "don't want to be here", "self-harm", "self harm", "harm myself", "hurt myself",
    "cutting myself", "overdose", "hopeless", "can't go on", "can't keep myself safe", "unsafe", "not safe",
    "want to disappear", "hurt someone", "abuse"];
  var CT_GENTLE = ["grief", "loss", "bereave", "miscarriage", "died", "death", "trauma", "abuse", "teacher", "burnout", "burnt out"];
  var CT_SAFETY = "This is a gentle, optional reflection prepared for clinician review - it is not therapy, medical advice, or a crisis service. You can stop at any time. If you feel unsafe or in crisis, please reach out to your counsellor or a local support service you trust.";
  var CT_CONTENT = {
    daily_check_in: { title: "A gentle daily check-in", intro: "This is a short, optional check-in for today. There are no right answers, and you can stop at any point.",
      prompts: ["How are you feeling right now, in a word or two?", "What is one small thing that has felt okay, or a little easier, today?", "Is there anything you would like to set down or leave aside for now?", "What might help you feel a little more steady in the next hour?"],
      small_next_step: "If it feels right, choose just one prompt above to answer. That is enough." },
    weekly_reflection: { title: "A gentle weekly reflection", intro: "This is an optional space to look back over your week at your own pace. Take only what is useful and leave the rest.",
      prompts: ["Looking back over the week, what stands out - without judging it as good or bad?", "When did you feel most like yourself, even briefly?", "What felt hard, and what, if anything, helped you through it?", "Was there any support - a person, place, or routine - that made things more manageable?", "Is there one small thing you would like to carry into next week?"],
      small_next_step: "You might note one thing from this week you would like to remember, or simply notice that the week has ended." },
    post_session_reflection: { title: "After your session: a short reflection", intro: "This optional reflection is a way to sit with anything from your recent session. There is no need to have clear answers.",
      prompts: ["What is staying with you after the session?", "Was there a moment that felt important, comforting, or difficult?", "Is there anything you would like to remember or return to next time?", "How would you like to be gentle with yourself in the coming days?"],
      small_next_step: "If you would like, jot down one thing to mention next session. If not, that is completely fine." },
    grounding_exercise: { title: "A simple grounding pause", intro: "This is a brief, optional grounding pause you can try if it feels helpful. You can stop whenever you want.",
      prompts: ["Notice a few things you can see around you, taking your time with each.", "Notice a few things you can hear right now, near or far.", "Feel your feet on the floor or your hands resting somewhere - what do you notice?", "Take one slower breath, only as deep as is comfortable."],
      small_next_step: "When you are ready, gently bring your attention back to the room. There is nothing else you need to do." },
  };
  var CT_REMINDERS = { warm: "You can skip any prompt, pause, or come back to this later - whatever feels kind to you today.",
    plain: "You can skip any prompt or stop at any time.", concise: "Skip anything you like, and stop whenever you want." };
  var CT_GENTLE_LINE = "Please go gently with yourself - there is no pressure to feel any particular way.";
  function firstSentence(t) { var m = t.search(/[.!?]/); return m === -1 ? t : t.slice(0, m + 1); }
  function generateCheckin(data) {
    validateInput(data, SCHEMAS["client-tools"]);
    var goal = clean(data.client_goal), context = clean(data.client_context || "");
    var fmt = data.format, tone = data.tone || "warm";
    var text = (goal + "\n" + context).toLowerCase();
    if (CT_RISK.some(function (c) { return text.indexOf(c) !== -1; })) {
      return { title: "Clinician review required before any check-in is sent",
        message: "This request may include content related to safety or risk, so no client-facing exercise has been generated. Please review the input, run the Safety check, and follow your formal risk and safeguarding procedures before deciding on any client contact. This message is for the clinician, not the client.",
        prompts: [], small_next_step: "No automated next step. The clinician determines next steps after completing risk review.",
        safety_note: "This tool is not a crisis or risk-assessment service. Do not send an automated check-in when safety may be a concern; use the Safety check and your local safeguarding procedures. Human review is mandatory.",
        clinician_review_required: true };
    }
    var content = CT_CONTENT[fmt];
    var gentle = CT_GENTLE.some(function (c) { return text.indexOf(c) !== -1; });
    var prompts = content.prompts.slice();
    if (tone === "concise") prompts = prompts.slice(0, 2);
    var body = tone === "concise" ? firstSentence(content.intro) : content.intro;
    var parts = [body];
    if (goal) parts.push("Your focus for this check-in: " + goal);
    if (gentle) parts.push(CT_GENTLE_LINE);
    parts.push(CT_REMINDERS[tone] || CT_REMINDERS.warm);
    return { title: content.title, message: parts.join(" "), prompts: prompts,
      small_next_step: content.small_next_step, safety_note: CT_SAFETY, clinician_review_required: true };
  }

  var GENERATORS = { "session-notes": generateNote, intake: processIntake, risk: monitorRisk, "client-tools": generateCheckin };

  var TOOLS_META = [
    { id: "session-notes", name: "Session note", blurb: "Turn a short summary into a tidy note.",
      fields: [["session_summary", "What happened in the session", "textarea", "A few plain sentences about what came up..."],
        ["client_context", "Relevant background (de-identified)", "textarea", "e.g. adult client, recent loss, lives with a supportive partner"],
        ["session_type", "Session type", "select", ""], ["clinical_framework", "Note format", "select", ""], ["tone", "Tone", "select", ""]] },
    { id: "intake", name: "Intake summary", blurb: "Organise first-contact information.",
      fields: [["intake_text", "Intake information", "textarea", "What the person shared at first contact..."],
        ["client_context", "Any known context (optional)", "textarea", ""], ["session_type", "Session type", "select", ""]] },
    { id: "risk", name: "Safety check", blurb: "A gentle second read for risk language.",
      fields: [["source_text", "Text to check", "textarea", "Paste the session, intake or message text you'd like a second read of..."],
        ["known_context", "Known context (optional)", "textarea", ""], ["requested_sensitivity", "Sensitivity", "select", ""]] },
    { id: "client-tools", name: "Client check-in", blurb: "A gentle reflection for between sessions.",
      fields: [["client_goal", "Focus for the check-in", "text", "e.g. notice small moments of calm this week"],
        ["client_context", "Any approved context (optional)", "textarea", ""], ["format", "Type of check-in", "select", ""], ["tone", "Tone", "select", ""]] },
  ];
  function getSpecs() {
    return TOOLS_META.map(function (m) {
      var schema = SCHEMAS[m.id], props = schema.properties || {}, required = schema.required || [];
      return { id: m.id, name: m.name, blurb: m.blurb, fields: m.fields.map(function (f) {
        return { name: f[0], label: f[1], widget: f[2], placeholder: f[3], required: required.indexOf(f[0]) !== -1, options: (props[f[0]] || {}).enum || [] };
      }) };
    });
  }
  function runTool(toolId, rawInput) {
    var gen = GENERATORS[toolId];
    if (!gen) return { ok: false, errors: ["Unknown tool: " + toolId] };
    var cleaned = {};
    Object.keys(rawInput || {}).forEach(function (k) { var v = rawInput[k]; if (typeof v === "string" && v.trim()) cleaned[k] = v.trim(); });
    try { return { ok: true, output: gen(cleaned) }; }
    catch (e) { if (e && e.validation) return { ok: false, errors: e.errors }; return { ok: false, errors: [String((e && e.message) || e)] }; }
  }

  var api = { getSpecs: getSpecs, runTool: runTool };
  root.CLEARSHORE_SKILLS = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : this);
