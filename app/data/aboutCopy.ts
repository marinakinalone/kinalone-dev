type PhilosophyItem = {
  lead: string
  body: string
}

type LinkActivity = {
  beforeLink: string
  link: 'diyCatalog'
  linkLabel: string
  afterLink: string
}

export type OutsideActivity = string | LinkActivity

export const aboutIntro =
  "At {{bold}}Trustly{{/bold}}, I'm {{bold}}co-leading frontend architecture{{/bold}} for payment systems. I guide the legacy-to-modern migration with user experience at the center. My {{bold}}UX background{{/bold}} connects engineering and design perspectives."

export const aboutPhilosophy = {
  title: 'My Philosophy',
  items: [
    {
      lead: "User-first thinking isn't optional.",
      body: 'I bring my UX designer brain to every technical decision so product users stay in focus, not as an afterthought.',
    },
    {
      lead: 'Cautiously optimistic about AI.',
      body: "I'm enthusiastic when data supports it, safety-first by default. No chasing shiny objects without understanding the risks.",
    },
    {
      lead: 'Listen before I speak.',
      body: "Yes, I'm an introvert. But when I do speak, it's usually because I've heard enough to move things forward.",
    },
  ] as PhilosophyItem[],
}

export const aboutDifferent = {
  title: 'What Makes Me Different',
  paragraphs: [
    'Early in my career, I skipped generic portfolio projects. While others coded their first React weather app, I built a Sailor Moon themed random quote generator. That same approach carries into my professional work: I aim for code that feels intentional, not just functional. It should serve users and mean something to those who build it.',
    'From my career as an educator, I discovered my role as a {{bold}}facilitator{{/bold}}, {{bold}}bridging gaps{{/bold}} between individuals and knowledge. I thrive on building communities, encouraging personal growth, and fostering creativity through active communication. Paired with non-violent communication training, this shaped how I approach collaboration: listening deeply before responding, and making space for others to find clarity.',
    "I'm often the person stakeholders {{bold}}trust to translate between frontend and design teams{{/bold}}.",
  ],
}

export const aboutOutside = {
  title: 'Outside the Screen',
  intro:
    "I grew up in France, lived in California (USA), Stockholm (Sweden), and now call {{bold}}Lisbon{{/bold}} home. When I'm not writing code, I'm:",
  activities: [
    'Dancing Argentine tango (high technique + self-expression is where I thrive)',
    'Cooking and hosting dinners for my family and friends',
    {
      beforeLink: 'Running a DIY project catalog (',
      link: 'diyCatalog',
      linkLabel: "see what's in progress",
      afterLink:
        ') as an exercise in quantity over perfection, showing up over polish.',
    },
    'Balancing life with a rom-com and a philosophy book on each hand',
    'Exploring the best jazz clubs in Lisbon',
  ] as OutsideActivity[],
}

export const aboutLinks = {
  diyCatalog:
    'https://marinakinalone.notion.site/la-galerie-47cb977bc91649a895e7e7550603ace1?pvs=74',
  astroniste: 'https://astroniste.com/',
}

export const aboutClosing = {
  stormy: {
    prefix: 'My coding assistant is my cat, ',
    stormyLabel: 'Stormy',
    middle: '. She always shows up to the ',
    standupLabel: 'morning standup meeting',
    suffix: ' on time.',
  },
  blogPrefix: 'I write occasionally at ',
  blogLabel: "l'Astroniste",
  quote: 'Technology without context is noise. {{bold}}I build with both in mind.{{/bold}}',
}
