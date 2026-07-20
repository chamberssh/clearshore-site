import {
  Compass,
  GraduationCap,
  HeartHandshake,
  Shield,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  heroLede: string;
  intro: string[];
  whoForTitle: string;
  whoFor: string[];
  approachTitle: string;
  approach: string[];
  faqs: { q: string; a: string }[];
  blogCategory: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "grief-and-loss-counselling",
    name: "Grief & Loss Counselling",
    shortDescription:
      "Support through pregnancy loss, infant loss, child bereavement, and other profound losses — walking alongside you, not rushing you through.",
    metaTitle: "Grief & Loss Counselling in Hervey Bay | Clearshore Counselling",
    metaDescription:
      "Grief and loss counselling in Hervey Bay, QLD and by telehealth Australia-wide — pregnancy loss, infant loss and child bereavement support from a counsellor with lived experience.",
    kicker: "Grief & Loss",
    h1: "Grief and loss counselling, from someone who has walked it",
    heroLede:
      "Support through pregnancy loss, infant loss, child bereavement, and every profound loss that doesn't get talked about enough.",
    intro: [
      "This is the heart of my work. I offer counselling for pregnancy loss, infant loss, the death of a child, and other profound losses — the ones that change the shape of a life.",
      "I am a mother who has lost a child, and I organise Hervey Bay's Walk to Remember for bereaved families each year. Grief isn't something I've only studied. When you sit with me, you won't have to explain why you're not \"over it\", and you won't be handed a timeline. There isn't one.",
    ],
    whoForTitle: "This may be a fit if you are",
    whoFor: [
      "Grieving a pregnancy loss or the death of a baby or child",
      "Carrying an older loss that still feels heavy, however long ago",
      "Supporting a partner or family member through bereavement",
      "Approaching an anniversary, due date, or birthday that feels hard",
      "Feeling pressure from others to \"move on\" before you're ready",
    ],
    approachTitle: "How I work with grief",
    approach: [
      "Gently, and without hurry. Grief doesn't need fixing — it needs company. My role is to be someone steady who doesn't rush you, doesn't flinch, and doesn't look away, while you find your own way of carrying what you're carrying.",
      "Some sessions we might talk about the person you've lost. Others we might talk about everything around the loss — your family, your body, your faith, the things people said. There's no set agenda and no right way to grieve.",
    ],
    faqs: [
      {
        q: "How soon after a loss should I start grief counselling?",
        a: "There's no right time — some people reach out within weeks, others after years. If the loss is very recent, support can simply mean having a steady space each week while everything is raw. If it's been years, that's not too late. Grief doesn't expire.",
      },
      {
        q: "Do you counsel pregnancy loss and miscarriage?",
        a: "Yes. Pregnancy loss at any stage — miscarriage, stillbirth, termination for medical reasons — is real loss and real grief, and it's one of the areas closest to my heart. Partners are welcome too, together or separately.",
      },
      {
        q: "What if I can't talk about it without crying?",
        a: "Then we'll sit with the tears. You never need to be composed in this room. There is nothing you can bring to a session that is too much.",
      },
    ],
    blogCategory: "Grief & Loss",
    icon: HeartHandshake,
  },
  {
    slug: "counselling-for-teachers",
    name: "Educator & Teacher Wellbeing",
    shortDescription:
      "Burnout, classroom stress, compassion fatigue, and career transitions — from a former teacher who understands the profession from the inside.",
    metaTitle:
      "Counselling for Teachers & Educators, Australia-wide | Clearshore Counselling",
    metaDescription:
      "Counselling for teachers and school staff — burnout, compassion fatigue, classroom stress and career change. From a former teacher, by telehealth Australia-wide or in Hervey Bay, QLD.",
    kicker: "Educator Wellbeing",
    h1: "Counselling for teachers, from a former teacher",
    heroLede:
      "Burnout, compassion fatigue, classroom stress, and the question of whether it's time for a change — with someone who has stood where you're standing.",
    intro: [
      "Before I was a counsellor, I taught primary school in London and in Queensland. I know what the job actually asks: to be patient, present, and emotionally available to thirty children and their thirty different needs, term after term — and then to go home and have something left.",
      "Former teachers who become counsellors are rare, and I think it matters. When you talk about staffroom politics, a term of relief teaching, or the guilt of even considering leaving, you won't need to explain the context first. I've lived it.",
    ],
    whoForTitle: "This may be a fit if you are",
    whoFor: [
      "Running on empty and telling yourself to just make it to the holidays",
      "Feeling the particular exhaustion of caring for students without space to recover",
      "Dreading Sunday nights, or performing \"fine\" more than feeling it",
      "Weighing up whether to stay in teaching, change schools, or leave",
      "A school leader carrying your staff's wellbeing as well as your own",
    ],
    approachTitle: "How I work with educators",
    approach: [
      "Practically and honestly. Burnout isn't a personal failing — it's what happens to caring, capable people who give from an empty cup for too long. We look at what's actually depleting you, what's within your control, and what recovery genuinely requires — not just \"self-care\" platitudes.",
      "Telehealth makes this work possible around school hours, wherever you are in Australia — including after-school and school-holiday sessions.",
    ],
    faqs: [
      {
        q: "Do you only see teachers from Queensland?",
        a: "No — telehealth sessions are available to teachers and school staff anywhere in Australia, and I offer times that work around the school day.",
      },
      {
        q: "Is this coaching or counselling?",
        a: "Counselling. We can absolutely talk through practical decisions like career change, but there's also room for the emotional load — the guilt, the grief of leaving a profession you loved, the identity questions. Usually the two are tangled together.",
      },
      {
        q: "I'm not burnt out yet, just tired. Is it too early?",
        a: "It's never too early. In my experience, \"just tired\" is exactly the moment support helps most — before exhaustion becomes the new normal.",
      },
    ],
    blogCategory: "Educator Wellbeing",
    icon: GraduationCap,
  },
  {
    slug: "trauma-counselling",
    name: "Trauma-Informed Support",
    shortDescription:
      "A calm, non-clinical space to process the effects of trauma at your own pace, informed by years in child safety work.",
    metaTitle: "Trauma-Informed Counselling in Hervey Bay | Clearshore Counselling",
    metaDescription:
      "Trauma-informed counselling in Hervey Bay, QLD and by telehealth across Australia. A calm, safe, unhurried space to process what you're carrying — you set the pace, always.",
    kicker: "Trauma-Informed Support",
    h1: "A steady space to process what you're carrying",
    heroLede:
      "Trauma-informed counselling where you are never pushed, never rushed, and always the one who sets the pace.",
    intro: [
      "Before counselling, I worked as a Child Safety Officer in Queensland, sitting with families in some of the hardest moments of their lives. That work taught me something no textbook could: trauma isn't really about what happened — it's about what your nervous system had to do to survive it, and how that shows up long after the danger has passed.",
      "Being trauma-informed isn't a technique or a script. In practice it means a few simple, unshakeable things: you are never made to feel unsafe in the room, you are never pushed to share more than you're ready to, and you always decide the pace.",
    ],
    whoForTitle: "This may be a fit if you are",
    whoFor: [
      "Carrying the effects of something hard — recent or long past",
      "Feeling on edge, numb, or not quite yourself, without clear words for why",
      "Wanting to feel safe in your own body and daily life again",
      "A frontline or care-sector worker holding other people's trauma",
      "Past the acute crisis, and ready to process at your own pace",
    ],
    approachTitle: "How I work with trauma",
    approach: [
      "You don't need to arrive with the right words, or any words. People don't open up because someone asks the right question — they open up when they feel safe enough to. My job is to build a room steady enough that you can choose what to bring, if and when you want to.",
      "One thing to be clear about: this isn't crisis intervention. If you're in crisis right now, please call Lifeline on 13 11 14 (24/7) or 000 in an emergency. Counselling is for afterwards — a calm place to work through what you're carrying, once the immediate storm has passed.",
    ],
    faqs: [
      {
        q: "Will I have to talk about what happened in detail?",
        a: "No. You will never be pushed to retell or relive anything. Some people eventually choose to talk directly about events; many do important work without ever going through the details. Both are valid, and you decide.",
      },
      {
        q: "What's the difference between trauma counselling and crisis support?",
        a: "Crisis support is for right now — when you're unsafe or overwhelmed in the moment, services like Lifeline (13 11 14) are the right call. Counselling is the slower, steadier work that comes after: processing, rebuilding a sense of safety, and finding your footing again.",
      },
      {
        q: "Is telehealth suitable for trauma work?",
        a: "For many people, yes — being in your own home, with your own things around you, can actually make it easier to feel safe. We'd talk together about what setting works best for you.",
      },
    ],
    blogCategory: "Trauma-Informed Support",
    icon: Shield,
  },
  {
    slug: "anxiety-and-life-transitions",
    name: "Anxiety & Life Transitions",
    shortDescription:
      "Gentle, steady support through change, uncertainty, and the ordinary overwhelm of life.",
    metaTitle:
      "Anxiety & Life Transitions Counselling, Hervey Bay | Clearshore Counselling",
    metaDescription:
      "Counselling for anxiety, uncertainty and life transitions in Hervey Bay, QLD and by telehealth Australia-wide. Steady, practical support through change and overwhelm.",
    kicker: "Anxiety & Life Transitions",
    h1: "Steadier ground through change and uncertainty",
    heroLede:
      "For worry that won't switch off, decisions that feel too big, and seasons where everything is shifting at once.",
    intro: [
      "Not every reason to see a counsellor is a crisis. Sometimes it's a move, a career change, a relationship ending or beginning, children leaving home, retirement — or simply a stretch where the ordinary overwhelm of life has become too much to carry alone.",
      "Anxiety has a way of making everything feel urgent and nothing feel clear. Counselling makes room to slow down, untangle what's actually going on, and find your footing again — without anyone telling you to \"just relax\".",
    ],
    whoForTitle: "This may be a fit if you are",
    whoFor: [
      "Lying awake with worry that loops and won't resolve",
      "Facing a decision or change that feels too big to think through alone",
      "In a season of transition — new town, new role, new stage of life",
      "Feeling overwhelmed by things that used to feel manageable",
      "Wanting support without needing a diagnosis or a crisis to justify it",
    ],
    approachTitle: "How I work with anxiety and change",
    approach: [
      "Gently and practically. We slow the loop down, name what's underneath the worry, and separate what's yours to solve from what's yours to carry. Often anxiety eases not when life gets certain — it rarely does — but when you trust your own footing more.",
      "Sessions are unhurried and shaped around you. Some people come for a handful of sessions around a specific decision; others want steady support through a longer season. Both are welcome.",
    ],
    faqs: [
      {
        q: "Do I need a diagnosis or a referral to see you?",
        a: "No. You don't need a referral, a mental health care plan, or a diagnosis to see a counsellor — feeling like things are too much is reason enough.",
      },
      {
        q: "Is counselling worth it for 'everyday' stress?",
        a: "Yes. There's no threshold of suffering you need to reach first. Working through ordinary overwhelm early is often what stops it becoming something heavier.",
      },
      {
        q: "How many sessions will I need?",
        a: "It varies. Some people find a few sessions around a specific transition is enough; others prefer ongoing support. We'll review together as we go — there's never a lock-in.",
      },
    ],
    blogCategory: "Anxiety & Life Transitions",
    icon: Compass,
  },
  {
    slug: "family-and-parenting-support",
    name: "Family & Parenting Support",
    shortDescription:
      "For parents and families navigating hard seasons — including parenting after loss or through crisis.",
    metaTitle:
      "Family & Parenting Counselling in Hervey Bay | Clearshore Counselling",
    metaDescription:
      "Family and parenting counselling in Hervey Bay, QLD and by telehealth Australia-wide — support for parents and families in hard seasons, including parenting after loss.",
    kicker: "Family & Parenting",
    h1: "Support for families in hard seasons",
    heroLede:
      "For parents and families navigating grief, crisis, and the seasons that ask more of you than you have to give.",
    intro: [
      "Families rarely go through hard things one person at a time. Loss, illness, separation, a child who's struggling — these move through a whole household, and everyone carries them differently.",
      "My years as a teacher and as a Child Safety Officer taught me to see the emotional lives beneath everyday behaviour — in children and in parents — and to hold deep respect for how loss, fear and hope move through a family, often all at once. As a mother of four, I also know parenting is the hardest work most of us will ever do.",
    ],
    whoForTitle: "This may be a fit if you are",
    whoFor: [
      "Parenting after the loss of a child, or through a family crisis",
      "Worried about a child who's anxious, withdrawn, or struggling",
      "Navigating separation, blending families, or a big family change",
      "Parents grieving differently from each other, and feeling the distance",
      "Simply exhausted, and wanting somewhere to be honest about it",
    ],
    approachTitle: "How I work with families",
    approach: [
      "Gently and practically, with the whole family system in view. Sometimes that means sessions with a parent alone, sometimes a couple, sometimes working out together how to support a child. We start with what's actually happening in your home, not a textbook version of it.",
      "There's no judgement in this room. Every family I've ever sat with — in classrooms, in child safety work, in life — has been doing its best inside circumstances outsiders rarely see.",
    ],
    faqs: [
      {
        q: "Do you counsel children directly?",
        a: "My focus is on supporting parents and families — which often means working with parents on how to support their child. If a child needs their own counsellor, I'll say so honestly and help you find the right fit.",
      },
      {
        q: "Can my partner and I come together?",
        a: "Yes — couples and family sessions are available, in person in Hervey Bay or by telehealth. Grieving or parenting differently from each other is one of the most common and least talked-about strains on a relationship.",
      },
      {
        q: "What if only one of us wants counselling?",
        a: "That's okay, and common. One person finding steadier ground genuinely changes what a whole family can carry. Others can always join later if they choose.",
      },
    ],
    blogCategory: "Family & Parenting Support",
    icon: Users,
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceByBlogCategory(category: string) {
  return services.find((service) => service.blogCategory === category);
}
