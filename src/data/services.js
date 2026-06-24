// Service catalogue. Drives the /services hub and the dynamic /services/[slug]
// pages. Four services, matching the homepage grid exactly (AI Visible
// Websites, AI Agents & Automations, 0 to 1 Product Studio, Custom Software).
// GEO / AI visibility is folded into AI Visible Websites, the same way it's
// folded on the homepage, not a separate page.
//
// House rules baked into every line: no dashes or hyphens anywhere in copy
// (ranges are written "20 to 200", not "20-200"), no public price figures
// (pricing is custom, the CTA is always "book a call"), no inflated client
// counts. External research stats are attributed ("per Forrester", "studies
// find") so they read as education, not as promises about our own results.
//
// Each service renders as a long, blog style page from an ordered `sections`
// array. Block types the template understands:
//   prose    { eyebrow?, heading, paragraphs[] }
//   problems { eyebrow?, heading, intro?, items[{title,body}] }
//   stats    { eyebrow?, heading, intro?, items[{value,label}] }
//   callout  { text }
//   steps    { eyebrow?, heading, intro?, steps[{title,body}] }
//   features { eyebrow?, heading, intro?, items[{title,body}] }
//
// directAnswer is a deliberate GEO/AEO surface: a tight, quotable definition an
// AI assistant can lift wholesale when a buyer asks what this service is.

export const services = [
  {
    slug: 'websites',
    navLabel: 'AI Visible Websites',
    teaser: 'We build websites that convert. And if you already have one, we make it visible to AI through a careful audit and competitor research.',
    eyebrow: 'AI Visible Websites',
    metaTitle: 'AI Visible Websites That Convert and Get Found by AI',
    metaDescription: 'We build conversion focused websites and make them visible to AI assistants like ChatGPT and Perplexity. Already have a site? We audit it and make it AI visible. For businesses in the USA, UK, Australia, Canada, and worldwide.',
    keywords: 'AI visible website, conversion focused website design, high converting website, custom website development, get found in ChatGPT, generative engine optimization, GEO agency, get cited by ChatGPT and Perplexity, website redesign, website audit',

    h1: 'Websites that convert.<br />Then made <span class="text-brand-500">visible to AI</span>.',
    heroSub: 'Two problems, one team. No website yet? We research your buyers and build one engineered to sell. Already have one? We audit it and make sure Google and AI assistants like ChatGPT actually put you in front of people.',

    directAnswer: 'An AI visible website is built to do two jobs at once: convert the visitors who land on it, and get recommended by Google and AI assistants like ChatGPT and Perplexity when buyers go looking. We build these from scratch, and we also take websites you already own and make them visible to AI through a careful audit and competitor research.',

    sections: [
      {
        type: 'prose',
        eyebrow: 'The story',
        heading: 'Most websites are pretty, and silent',
        paragraphs: [
          "Here's the part almost no one tells you. A website that looks good and a website that actually works are two different things. You can pour months into a beautiful site, launch it, and then watch traffic arrive and leave without a single enquiry. Nothing's technically broken. It just doesn't sell.",
          "And there's a newer problem stacked on the old one. Your buyers don't only search Google now. They ask ChatGPT, Perplexity, and Gemini who's good at what they need, and the assistant hands back a short list. If your site isn't built for those engines to read and trust, you're simply not on it. You never even see the customer you lost.",
          "So a website can fail you two ways today. It doesn't convert the people who arrive, and it's invisible to the AI tools more and more people now trust to choose for them. We fix both.",
        ],
      },
      {
        type: 'problems',
        heading: 'Where websites quietly lose you money',
        intro: 'If a few of these feel familiar, your site is costing you more than it looks.',
        items: [
          { title: 'Traffic that never converts', body: 'People land, glance, and leave. The message is vague, the next step is unclear, and there is no real reason to act.' },
          { title: 'Painfully slow load times', body: 'Two in five visitors leave if a page takes more than three seconds. A single second of delay can drop conversions by around seven percent.' },
          { title: 'Invisible to AI search', body: "Buyers ask ChatGPT and Perplexity for recommendations. If a model can't read and trust your site, it names a competitor instead." },
          { title: 'No proof, no trust', body: 'Most people read reviews before buying, and many need to see strong ratings first. A site with no proof gets no benefit of the doubt.' },
          { title: "You can't see what it's doing", body: "No tracking, no analytics, no idea which page or form leaks leads. You're guessing with money on the line." },
        ],
      },
      {
        type: 'stats',
        eyebrow: 'Why it matters',
        heading: "What a site that actually works is worth",
        intro: "This isn't our opinion. It's what the research keeps finding.",
        items: [
          { value: 'Up to 100x', label: 'return on money spent improving UX, per Forrester research' },
          { value: '20% to 200%', label: 'conversion lift from a well planned redesign' },
          { value: '30%', label: 'more leads within 90 days after a serious site update' },
          { value: '88%', label: "of users won't return after one bad experience" },
        ],
      },
      {
        type: 'callout',
        text: "Traffic without leads is almost never a traffic problem. It's a conversion problem. And fixing conversion is usually the fastest, cheapest way to grow, because you aren't paying for a single extra visitor.",
      },
      {
        type: 'prose',
        eyebrow: 'How we fix it',
        heading: 'We start with research, not a template',
        paragraphs: [
          'Every site we build opens the same way. Before a single screen is designed, we study who you actually sell to, what makes them choose, and how your competitors are winning them. That research is the unglamorous part, and it is the reason the work converts.',
          'From there we structure the page around one job: moving a visitor toward an enquiry. A clear message up top, the outcome they want spelled out, trust signals where doubt creeps in, and an obvious next step. Then we design it custom to your brand, build it to load fast on every device, and wire in tracking so you can see exactly what is working.',
          'Because search and AI visibility are baked in from the start, the site does more than convert the traffic you have. It earns you more, on Google and inside AI assistants, without you paying for every click.',
        ],
      },
      {
        type: 'steps',
        heading: 'How we build and ship it',
        steps: [
          { title: 'Research and audit', body: 'Your buyers, market, and competitors. If a site already exists, we audit what it does and where it leaks.' },
          { title: 'Structure and design', body: 'We map the page around the decision your visitor has to make, then design it custom to your brand.' },
          { title: 'Build for speed and search', body: 'A fast, accessible build with SEO, schema, and AI readability wired in, not bolted on at the end.' },
          { title: 'Launch and measure', body: 'We connect analytics, lead capture, and Google Business Profile, then hand over a site whose results you can actually read.' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Already have a website?',
        heading: "We'll make the one you have visible to AI",
        paragraphs: [
          "You don't have to scrap a site that works just to get found by AI. Plenty of clients come to us with a perfectly decent website that's simply invisible to ChatGPT and Perplexity. The answer usually isn't a rebuild. It's a careful audit and the right structural work.",
          "We start with what the AI engines can actually see. Are the crawlers like GPTBot and PerplexityBot even allowed in? Is your content structured so a model can quote it, or buried in vague copy it can't verify? Then we map your AI visibility the way it's done properly: we ask the assistants the 30 to 50 questions your buyers really ask, and record where you show up, where you don't, and which competitors get named instead.",
          "That audit tells us exactly what to fix. Clear entity facts so models trust who you are, structured answers and schema they can lift directly, the llms.txt file AI systems read, and the authority signals that decide who gets cited. Then we track it over time, because AI visibility isn't set and forget.",
        ],
      },
      {
        type: 'features',
        heading: 'What we build',
        intro: 'Whatever your business needs on the web, we can build it. A few of the common ones.',
        items: [
          { title: 'Marketing and conversion sites', body: 'The site that sells. Researched, fast, and structured to turn visitors into enquiries instead of bounces.' },
          { title: 'Ecommerce and booking', body: 'Stores, booking flows, and payment built to close the sale, not just list products and hope.' },
          { title: 'Web apps and portals', body: 'Customer dashboards, member areas, and login based portals that do real work, not just display pages.' },
          { title: 'GEO and AI visibility', body: 'The structural work that gets you cited by ChatGPT, Perplexity, and Google AI, on a new site or your current one.' },
          { title: 'Local and Google Business setup', body: 'Google Business Profile, local SEO, reviews, and the maps presence that wins nearby buyers.' },
          { title: 'Analytics and lead capture', body: 'Tracking, forms, WhatsApp capture, and dashboards so you see what your site does and where leads come from.' },
        ],
      },
    ],

    faqs: [
      { q: 'Why pay for a custom site when AI builders are free?', a: "AI builders are great for a quick placeholder. They're not built to convert visitors, rank on Google, or hold up as you grow. We research your buyers and build a site engineered to turn visits into customers, then make sure both Google and AI assistants recommend it. That's the part a five minute builder can't do." },
      { q: 'Will my site actually rank on Google?', a: 'We bake on page SEO and technical performance into the build, plus the schema and entity work AI assistants read too. Ranking depends on how competitive your market is, but our sites regularly hit perfect Lighthouse SEO scores and rank locally fast. Adtown, one of our own builds, reached number one on Google in three days.' },
      { q: 'How do I get my business to show up in ChatGPT and Perplexity?', a: "That's GEO, Generative Engine Optimization. We make sure the AI crawlers can reach you, structure your content and schema so a model can quote it, write the llms.txt file these systems read, and build the entity clarity and authority signals they trust. Then we track what the assistants say about you and tune it." },
      { q: 'Can you make my existing website AI visible without a rebuild?', a: "Usually, yes. If your current site is solid, we don't rebuild it. We run an AI visibility audit, see where you're missing from the answers and where competitors show up, and do the structural work to fix it. A rebuild only comes up if the site is too far gone to save." },
      { q: 'How long does a website take?', a: 'It depends on size and how much is custom, but most sites move in weeks, not months. We work in clear milestones so you always know where it stands.' },
      { q: 'Do you work with businesses outside India?', a: 'Most of our clients are in the USA, UK, Australia, Canada, and Europe. We work in your timezone with async updates and clear milestones.' },
    ],
  },

  {
    slug: 'ai-automation',
    navLabel: 'AI Agents & Automations',
    teaser: 'Custom AI agents and automations that take the busywork off your team, built securely with real guardrails, not prompted together over a weekend.',
    eyebrow: 'AI Agents & Automations',
    metaTitle: 'AI Agents and Automation, Built Securely to Last',
    metaDescription: 'Custom AI agents and workflow automations that handle leads, support, onboarding, and operations, built with real guardrails, security, and human review. For businesses in the USA, UK, Australia, and worldwide.',
    keywords: 'AI automation agency, custom AI agents, workflow automation, AI agent development, business process automation, LLM integration, secure AI automation, AI for lead response, automate my business',

    h1: 'Put the busywork on autopilot.<br />With AI that <span class="text-brand-500">actually holds up</span>.',
    heroSub: 'Custom AI agents and automations that take repetitive work off your team. Lead response, support, onboarding, reporting, back office ops. Engineered securely, with guardrails and human review where it counts.',

    directAnswer: 'We design, build, and deploy custom AI agents and automations that take repetitive work off your team. Things like lead response, support triage, onboarding, reporting, and back office operations. Everything is built securely, with guardrails and a human in the loop wherever the work touches your money, your leads, or your customers.',

    sections: [
      {
        type: 'prose',
        eyebrow: 'The story',
        heading: 'Your team is doing work software should be doing',
        paragraphs: [
          "Walk through any growing business and you'll spot the same thing. Smart, expensive people spending hours on work a machine should handle. Copying data between tools. Answering the same ten questions all day. Chasing a lead that went cold while someone was busy elsewhere. Pulling the same report every Monday morning.",
          "It adds up faster than people think. Surveys put the average employee's wasted time at roughly 240 hours a year on tasks that could be automated. Managers estimate it's closer to 360. That's weeks of paid time, per person, every year, spent on work nobody should be doing by hand.",
          "The catch is that most AI automation on the market is built to look good in a demo, not to survive real use. It breaks on the first odd edge case, leaks data it shouldn't, or quietly does the wrong thing for a month before anyone notices. Automation that touches your leads, your money, or your customers has to be engineered, not prompted together over a weekend.",
        ],
      },
      {
        type: 'problems',
        heading: 'Where the time and money leak',
        intro: 'Most of these are invisible until you add up the hours.',
        items: [
          { title: 'Manual data entry', body: 'Someone copying numbers between your CRM, spreadsheets, and invoices, slowly, and occasionally getting it wrong.' },
          { title: 'Slow lead response', body: 'Reply to a lead within five minutes and you are far likelier to win it. Reply in a day and it has usually gone cold.' },
          { title: 'Answering the same questions', body: 'Your team fielding the same handful of questions over and over, when a well built agent could handle most of them.' },
          { title: 'Reports and admin', body: 'Senior people losing a chunk of every week to reports, reconciliations, and status updates that could run themselves.' },
          { title: 'Fragile DIY automations', body: 'A weekend built flow that worked in testing and now breaks silently, with no monitoring to tell you it failed.' },
        ],
      },
      {
        type: 'stats',
        eyebrow: 'Why it matters',
        heading: 'What good automation actually returns',
        intro: 'The numbers on properly built automation are hard to argue with.',
        items: [
          { value: '240%', label: 'average ROI on business process automation' },
          { value: '6 to 9 months', label: 'typical payback period before it pays for itself' },
          { value: 'Up to 90%', label: 'cost cut on specific workflows like invoice processing' },
          { value: 'Half', label: 'the process time, reported by most teams that automate' },
        ],
      },
      {
        type: 'callout',
        text: "The point isn't to cut staff. It's to stop paying senior people to do junior work, and free them for the things only a human should be doing.",
      },
      {
        type: 'prose',
        eyebrow: 'How we solve it',
        heading: "We don't bolt a chatbot onto everything",
        paragraphs: [
          "First we find the workflows quietly costing you the most. Not the flashiest thing to automate, the most expensive one. Then we build the right tool for it. Sometimes that's a simple automation that moves data and triggers actions. Sometimes it's a real agent that reasons over a goal and decides its own next step.",
          "Either way, we build it like real software, because it is. That means least privilege access so an agent can only touch what its job needs, guardrails so it can't be talked into going off the rails, a human checkpoint on anything sensitive, and monitoring that watches behaviour over time instead of waiting for a complaint.",
          "And if you already vibe coded something that works in testing but falls over in real use, we don't start from scratch. We harden it with evals, monitoring, and security, and take it to production properly.",
        ],
      },
      {
        type: 'steps',
        heading: 'How we keep it safe',
        steps: [
          { title: 'Least privilege', body: 'Each agent gets only the access its job needs, nothing more, and we review those permissions as it grows.' },
          { title: 'Human in the loop', body: 'Sensitive actions like sending money, deleting data, or replying to a client get a human checkpoint by default.' },
          { title: 'Guardrails against misuse', body: "We defend against prompt injection and bad input, so the agent can't be tricked into doing something it shouldn't." },
          { title: 'Watch the behaviour', body: 'We monitor patterns over time, not just logs, so unusual behaviour gets caught before it becomes a problem.' },
        ],
      },
      {
        type: 'features',
        heading: 'What we build',
        intro: "If a process eats your team's time and follows rules, it can probably be automated. Some of the common builds.",
        items: [
          { title: 'Custom AI agents', body: 'Knowledge copilots, support agents, and internal assistants trained on your data, with retrieval done properly.' },
          { title: 'Lead and sales automation', body: 'Instant lead response, qualification, follow ups, and CRM updates, so no enquiry sits cold while someone is busy.' },
          { title: 'Support and ticket triage', body: 'Agents that answer the routine questions, sort the rest, and hand the hard ones to a human with context attached.' },
          { title: 'Onboarding and back office', body: 'New user onboarding, document handling, reconciliations, and the recurring admin that quietly burns hours.' },
          { title: 'Document and data processing', body: 'OCR, extraction, and classification that turn messy invoices, forms, and PDFs into clean structured data.' },
          { title: 'Prototype to production', body: 'Already built a fragile AI tool? We add evals, monitoring, and security, and take it to production for real.' },
        ],
      },
    ],

    faqs: [
      { q: 'What can an AI agent actually do for my business?', a: 'Handle the repetitive, rules heavy work that eats your team’s time. Answering common questions, triaging support, qualifying and responding to leads, onboarding users, pulling reports, and moving data between tools. The goal is to take busywork off people so they do the work that needs a human.' },
      { q: 'Is my data safe with an AI agent?', a: 'It is when the agent is built properly. We give each agent the least access it needs, put guardrails on its inputs, keep a human in the loop for sensitive actions, and can run on self hosted or private models when your data calls for it. Security is part of the build, not an afterthought.' },
      { q: "What's the difference between an agent, an automation, and a chatbot?", a: 'A chatbot answers questions. An automation runs a fixed workflow when something triggers it. An agent reasons over a goal and takes steps to reach it, deciding what to do next. We build all three, and pick whichever actually fits the job.' },
      { q: 'Will this replace my team?', a: "That's not the point of it. It takes the repetitive load off your people so they spend time on work that needs judgement. Most clients redeploy the saved hours, they don't cut staff." },
      { q: 'Can you fix an AI tool that already keeps breaking?', a: 'Yes, and it comes up a lot. Someone builds a tool that works in testing and falls over in real use. We harden it with evals, monitoring, and security, and take it to production properly.' },
      { q: 'Will it work with the tools we already use?', a: 'Yes. We build around the tools you already run, your CRM, spreadsheets, WhatsApp, whatever your team actually uses, instead of forcing you onto something new.' },
    ],
  },

  {
    slug: 'product-studio',
    navLabel: '0→1 Product Studio',
    teaser: 'Idea to launched MVP with senior product leadership built in. We shape what to build, not just build what you ask, so the first version is the right one.',
    eyebrow: '0→1 Product Studio',
    metaTitle: '0 to 1 Product Studio: Idea to MVP With Product Leadership',
    metaDescription: 'Take your product from idea to launched MVP with embedded product leadership, the Builder PM model, paired with design and engineering. For founders worldwide who want the right first version, not just any build.',
    keywords: 'MVP development, 0 to 1 product studio, product studio for founders, fractional product manager, builder PM, idea to MVP, startup product development, build my app idea, MVP agency',

    h1: 'Idea to launched product.<br />With a <span class="text-brand-500">product brain</span>, not just hands.',
    heroSub: 'Our 0 to 1 studio takes you from idea to a launched MVP, with senior product leadership built into the team. We shape what to build, ship it, and get it in front of real users.',

    directAnswer: 'Our 0 to 1 studio takes you from an idea to a launched MVP. You get embedded product leadership, we call it the Builder PM model, paired with design and engineering in one team. We shape what to build, not just build what you ask, so the first version is the one your users actually want.',

    sections: [
      {
        type: 'prose',
        eyebrow: 'The story',
        heading: 'Most products fail because the wrong thing got built',
        paragraphs: [
          "Here's the uncomfortable truth about new products. Most don't fail because the code was bad. They fail because the wrong thing got built. A founder has a sharp idea, hands a dev shop a long list of features, and the shop happily builds every one of them, bills for all of it, and launches a product to a market that shrugs.",
          "The hard part of going from zero to one was never the building. It's deciding what to build, what to cut, and what to test first. That's a product problem, not an engineering one, and it's exactly where most agencies leave you on your own with a spec they took too literally.",
          "We don't. You get a product brain in the room from day one, someone who will tell you to cut a feature instead of quietly billing you to build it. We call it the Builder PM model: senior product leadership that also ships, paired with design and engineering in one team.",
        ],
      },
      {
        type: 'problems',
        heading: 'Where first builds go wrong',
        intro: 'Almost every stalled product hit at least one of these.',
        items: [
          { title: 'Building features nobody asked for', body: 'Months and budget poured into a long wishlist, when two or three things were all the first version needed.' },
          { title: 'Scope creep eats the runway', body: 'The build keeps growing, the launch keeps slipping, and the money runs out before real users ever see it.' },
          { title: 'A spec taken too literally', body: 'The agency builds exactly what you wrote, even the parts that were wrong, because no one is paid to question it.' },
          { title: 'Launched to nobody', body: 'A polished product ships into silence, because the riskiest assumption was never tested early enough to matter.' },
          { title: "A codebase that can't grow", body: 'A throwaway MVP that has to be rebuilt from scratch the moment you want version two.' },
        ],
      },
      {
        type: 'stats',
        eyebrow: 'Why it matters',
        heading: 'Lean beats big, every time',
        intro: "A tight first version isn't a compromise. It's how you learn fast and spend less.",
        items: [
          { value: '4 to 8 weeks', label: 'to a focused first MVP for a simpler idea' },
          { value: '8 to 14 weeks', label: 'for something with deeper integrations' },
          { value: 'Months saved', label: 'by not building features nobody wanted' },
          { value: 'Real users', label: 'in front of it sooner, so the next call is informed' },
        ],
      },
      {
        type: 'callout',
        text: "Every feature you don't build is budget you don't burn and a week you don't lose. Scope is the most valuable thing we bring to the table.",
      },
      {
        type: 'prose',
        eyebrow: 'How we work',
        heading: 'We pressure test before we build',
        paragraphs: [
          "Before any code, we challenge the idea. What's the riskiest assumption hiding in it, and what's the smallest thing we can build to find out if it holds? That single question saves more money than any clever engineering ever will.",
          "From there we scope the MVP down to the core that proves the concept, design and build it in one team so strategy and code never drift apart, and ship it in clear milestones you can see and steer. Then we get it in front of real users, watch what they actually do, and help you decide what version two should be.",
          "And we build it lean but not throwaway. The first version is engineered so version two grows on top of it, instead of forcing a rebuild the moment you have traction.",
        ],
      },
      {
        type: 'steps',
        heading: 'How we go from zero to one',
        steps: [
          { title: 'Pressure test', body: "We challenge the idea first. What's the riskiest assumption, and what's the smallest thing that proves it?" },
          { title: 'Scope the right MVP', body: 'We cut to the core that matters, so you launch sooner and learn faster instead of polishing things nobody needs.' },
          { title: 'Design and ship', body: 'One team takes it from wireframe to working product, in clear milestones you can follow and steer.' },
          { title: 'Launch and learn', body: 'We get it in front of real users, watch what they do, and help you decide what version two should be.' },
        ],
      },
      {
        type: 'features',
        heading: 'What we build',
        intro: 'If it ships as a product, we can take it from zero to one. A few of the shapes it takes.',
        items: [
          { title: 'Web apps and SaaS', body: 'Full web products and SaaS platforms, from the first dashboard to billing, auth, and the admin behind it.' },
          { title: 'Mobile apps', body: 'Native and cross platform apps for iOS and Android, built to launch and grow, not just to demo.' },
          { title: 'Marketplaces and platforms', body: 'Two sided marketplaces and platforms that connect buyers and sellers, with the matching and trust logic that makes them work.' },
          { title: 'AI powered products', body: 'Products with real AI at the core, agents, copilots, and smart features, engineered properly rather than bolted on.' },
          { title: 'Internal MVPs', body: 'A first version of a tool to prove an idea inside your business before you commit to the full build.' },
          { title: 'Fractional product leadership', body: 'Have engineers but no product brain? We run the roadmap and steer your team as your Builder PM.' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'We practice what we preach',
        heading: "We've built our own products from zero",
        paragraphs: [
          "This isn't theory we picked up from a course. Attendify, Adtown, and DispatchIQ all started at zero and one in house, with us doing the research, the scoping, and the shipping. We've lived the path from blank page to launched product, not just billed other people for it. So when we tell you to cut a feature or test something first, it's hard won, not borrowed.",
        ],
      },
    ],

    faqs: [
      { q: 'What is a Builder PM or fractional PM?', a: 'A Builder PM is a product manager who also ships. Instead of only writing tickets, they shape the strategy, cut the scope, and stay hands on with the build. Fractional means you get that leadership part time, without the cost of a full time senior product hire.' },
      { q: 'How fast can you get me to an MVP?', a: 'A simpler MVP can move in four to eight weeks. Something with deeper integrations or more complex logic takes longer. The trick is scoping the first version tight, and that is exactly the conversation we have up front so you launch sooner.' },
      { q: 'Do I keep the code and the IP?', a: 'Always. The code, the intellectual property, and every account are yours. We build it to be owned by you and hand it over clean. No lock in.' },
      { q: 'What if I already have a dev team?', a: 'Plenty of founders come to us with engineers but no product leadership. We slot in as the product brain, run the roadmap and the standups, and steer your team. We did exactly that for DispatchIQ.' },
      { q: "I'm not technical. Is that a problem?", a: "Not at all. Most founders we work with aren't technical. You bring the vision and the market knowledge, we handle the how and explain every decision in plain language." },
      { q: 'Will the MVP be able to grow later?', a: "Yes. We build lean, not throwaway. The first version is engineered so version two grows on top of it, instead of forcing a rebuild once you've got traction." },
    ],
  },

  {
    slug: 'custom-software',
    navLabel: 'Custom Software',
    teaser: 'CRMs, internal tools, dashboards, and apps built around how your business actually works. Any software you need, we can build it, and you own it.',
    eyebrow: 'Custom Software',
    metaTitle: 'Custom Software Development: CRMs, Tools, and Apps',
    metaDescription: 'Custom software built around your business. CRMs, internal tools, dashboards, billing systems, and web, mobile, and desktop apps. Research led, secure, and made to last, with global delivery. You own the code.',
    keywords: 'custom software development, custom CRM development, internal tools, business dashboard, desktop app development, web application development, bespoke software, software for business operations',

    h1: 'The software your business<br />actually needs. <span class="text-brand-500">Built right</span>.',
    heroSub: 'CRMs, internal tools, dashboards, billing systems, and apps. We start with how your business really works, then design and build software that fits it, instead of forcing you to fit the tool.',

    directAnswer: 'We build custom software end to end. CRMs, internal tools, dashboards, billing systems, and web, mobile, and desktop apps. We start with how your business actually works, then design and engineer software that fits it. Secure, reliable, and built to last, so it survives real use instead of buckling under it. And you own the code outright.',

    sections: [
      {
        type: 'prose',
        eyebrow: 'The story',
        heading: 'Off the shelf bends your business out of shape',
        paragraphs: [
          "Every growing business hits this moment. The off the shelf tools that got you here start getting in the way. Your process doesn't fit the software, so your team invents workarounds. A spreadsheet here, a manual step there, three tools held together with copy and paste. It works, sort of, until it doesn't.",
          "Meanwhile the subscriptions keep climbing. SaaS pricing tends to rise 150 to 200 percent over time as you add seats and features, and you rent all of it forever. Studies keep finding that companies who stay on off the shelf often spend two to three times more on customisations, integrations, and workarounds than custom would have cost in the first place.",
          "Custom flips that. Instead of bending your business to fit a tool, we build the tool around your business. And you own it outright, code and all. It's an asset on your books, not a subscription you rent until the vendor raises the price again.",
        ],
      },
      {
        type: 'problems',
        heading: "Signs you've outgrown off the shelf",
        intro: 'One or two of these is friction. Several of them is money walking out the door.',
        items: [
          { title: 'Workflow bent to the tool', body: 'Your team works the way the software wants, not the way your business actually runs, and everyone feels the drag.' },
          { title: 'License fees climbing', body: 'Every new hire is another seat, another fee, on tools you only half use and rent forever.' },
          { title: 'Spreadsheets holding it together', body: 'The real system is a pile of exports, manual steps, and one person who knows how the duct tape fits.' },
          { title: "Data that won't talk", body: "Tools that don't connect, so the same numbers get keyed in three times and still don't match." },
          { title: 'Cheap builds that collapse', body: 'A bargain build that looked fine in the demo and fell apart the moment real usage hit it.' },
        ],
      },
      {
        type: 'stats',
        eyebrow: 'Why it matters',
        heading: 'Why custom pays off over time',
        intro: 'The upfront cost is higher. The total cost of ownership often is not.',
        items: [
          { value: 'You own it', label: 'full code and IP, an asset on your books, not a rental' },
          { value: '150% to 200%', label: 'how much SaaS costs tend to climb over time' },
          { value: '2 to 3 times', label: 'what workarounds often cost versus building it right' },
          { value: 'No per seat fees', label: 'that grow every single time you add a person' },
        ],
      },
      {
        type: 'callout',
        text: "If you can describe the problem, we can build the software for it. We've shipped everything from a desktop billing system on Rust to a no code machine learning platform.",
      },
      {
        type: 'prose',
        eyebrow: 'How we do it',
        heading: 'We design around your business, not a template',
        paragraphs: [
          "We start by learning how your business actually runs. The workflow, the bottlenecks, the data, the places people lose time. Only then do we design software around that reality, instead of forcing your business into a shape someone else decided.",
          "From there we architect it to do the job well today and grow with you tomorrow, build it full stack from the database to the interface your team uses daily, and wire it into the tools you already run. Your existing data gets migrated across cleanly and tested, so nothing gets stranded in the move.",
          "And we build it to last. Real engineering and security discipline, the kind cheap builds skip, so it holds up when the load is real. Then we stay on to keep it reliable as your business changes.",
        ],
      },
      {
        type: 'steps',
        heading: 'How we work',
        steps: [
          { title: 'Understand the business', body: 'We learn your workflow, bottlenecks, and data before designing anything, so the software fits reality.' },
          { title: 'Design the system', body: 'We architect it to do the job well now and grow with you later, instead of painting you into a corner.' },
          { title: 'Build and integrate', body: 'A full stack build wired into your existing tools, with your data migrated across and tested properly.' },
          { title: 'Ship and support', body: 'We launch it, train your team, and stay on to keep it reliable as your business evolves.' },
        ],
      },
      {
        type: 'features',
        heading: 'What we build',
        intro: 'Any software your business needs, we can build it. This is a sample, not a menu.',
        items: [
          { title: 'CRMs and sales tools', body: 'Customer and pipeline systems shaped to how you actually sell, instead of forcing your team into a generic CRM.' },
          { title: 'Internal tools and admin panels', body: 'The back office software that runs the business, built to fit your process exactly and remove the manual steps.' },
          { title: 'Dashboards and analytics', body: 'See what is happening across your business at a glance, with the numbers that actually drive your decisions.' },
          { title: 'Billing, inventory, and operations', body: 'Invoicing, stock, scheduling, and the operational systems that keep the day to day running clean.' },
          { title: 'Desktop and mobile apps', body: 'Fast native desktop apps and mobile apps, from a Rust powered billing tool to apps your customers carry around.' },
          { title: 'APIs and integrations', body: 'The connective tissue that makes your tools talk to each other, so data flows instead of being re keyed by hand.' },
        ],
      },
    ],

    faqs: [
      { q: 'What kind of software can you build?', a: "CRMs, internal tools, dashboards, billing and inventory systems, booking platforms, and full web, mobile, or desktop apps. If it's software your business needs to run better, it's in scope. We've built everything from a desktop billing system on Rust to a no code machine learning platform." },
      { q: 'Why go custom instead of buying off the shelf?', a: "Off the shelf is faster and cheaper to start, and sometimes it's genuinely the right call. Custom wins when your workflow is unique, when license fees keep climbing as you scale, or when you're stacking workarounds to make a generic tool fit. We'll tell you honestly which one you actually need." },
      { q: 'Will it integrate with the tools I already use?', a: 'Yes. Integration is part of the job. We connect your software to the systems you already run and migrate your existing data across cleanly, so nothing gets stranded.' },
      { q: 'Who owns the code?', a: "You do. Full ownership of the code and the intellectual property, handed over clean. It's an asset on your side, not a subscription you rent forever." },
      { q: 'How long does custom software take?', a: 'It depends on scope. A focused internal tool moves faster than a full platform with many moving parts. We break it into clear milestones up front so you always know the timeline and what is landing when.' },
      { q: 'What does it cost?', a: "There's no one size fits all price, because no two businesses run the same way. What it takes depends on the scope and the work to build it properly. Book a call, walk us through the problem, and we'll scope it and give you a clear, tailored quote." },
    ],
  },
];

// Hub page copy.
export const servicesIntro = {
  eyebrow: 'What We Build',
  heading: 'Four ways we take<br />work off your <span class="text-brand-500">plate</span>.',
  sub: "Researched, built right, and made to get found. Pick the one that fits where you're stuck, or book a call and we'll figure it out together.",
};

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
