export const profile = {
  name: "Ezequiel Stutz Díaz",
  role: "Senior Frontend Software Engineer",
  email: "ezequielo.stutzdiaz@gmail.com",
  whatsapp: "https://wa.me/5492478441298",
  site: "https://ezestutz.github.io/",
  linkedin: "https://www.linkedin.com/in/ezestutz/",
  github: "https://github.com/ezestutz/",
  instagram: "https://www.instagram.com/ezestutz/",
  lead:
    "I build web and mobile products with React, Next.js, and React Native — from civic tools to large-scale platforms.",
  about: [
    "I’m a Senior Frontend Software Engineer with a lasting interest in astronomy, technology, and science. I’m self-taught where it counts, always ready to pick up new skills, and comfortable adapting to whatever area needs me.",
    "I’ve worked on collaborative software projects — including large-scale platforms — and I care about clear interfaces, reliable delivery, and learning from the people I build with.",
  ],
  skills: [
    "React",
    "Next.js",
    "React Native",
    "JavaScript",
    "Node.js",
    "HTML & CSS",
    "PHP",
    "MySQL",
    "Jest",
    "AI",
    "GitHub Copilot",
  ],
};

export const experience = [
  {
    title: "Senior Frontend Software Engineer — Perficient",
    when: "Feb 2022 — Present",
    body: "I’ve been working here since February 2022 on a large team of around 300 developers, modernizing and maintaining PCC — Caterpillar’s platform for purchasing machinery parts. Every day I learn from teammates around the world and take on complex work alongside them, primarily with React and Next.js.",
    links: [
      { label: "Open PCC", href: "https://parts.cat.com", solid: true },
      { label: "Perficient", href: "https://www.perficient.com", solid: false },
    ],
  },
  {
    title: "Frontend Developer — Recursiva SRL",
    when: "Jan 2021 — Feb 2022",
    body: "I joined a React team building a web app for online payments, and also worked on two React Native teams shipping and maintaining mobile apps for a leading plant-genetics company group. At Recursiva I grew professionally, learned from teammates and leads, strengthened what I brought from university and my internship, and absorbed solid habits from the professional software industry.",
    links: [
      {
        label: "Recursiva",
        href: "http://www.recursiva.com.ar",
        solid: false,
      },
    ],
  },
];

export const projects = [
  {
    title: "Empleos Cahuané",
    image: "/images/empleos-cahuane.png",
    alt: "Empleos Cahuané job board and marketplace",
    tags: ["Next.js", "React", "AWS Amplify"],
    paragraphs: [
      "A free local job board and buy/sell marketplace for Capitán Sarmiento and the surrounding area — post or find work, gigs, and services without intermediaries.",
    ],
    href: "https://empleoscahuane.com",
    cta: "Open site",
  },
  {
    title: "Website of Capitán Sarmiento",
    image: "/images/cap-sto.jpg",
    alt: "Website of Capitán Sarmiento",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "AWS EC2"],
    paragraphs: [
      "Built during an internship at the town hall of Capitán Sarmiento. The site brings information and services to residents in one place. There was no previous website, so we also created an EC2 instance on Amazon Web Services and set up Apache from scratch.",
    ],
    href: "https://capitansarmiento.gob.ar",
    cta: "Open site",
  },
  {
    title: "WordPress portal",
    image: "/images/cap-sto-wordpress.png",
    alt: "WordPress portal for Capitán Sarmiento",
    tags: ["WordPress", "Elementor", "Training"],
    paragraphs: [
      "Pages under the “/info/” folder embed WordPress sites so non-developers can edit content. The work included setting up the WordPress environment and teaching editors how to use WordPress with the Elementor plugin.",
    ],
    href: "https://capitansarmiento.gob.ar/info/ciudad.php",
    cta: "Open portal",
  },
  {
    title: "“Sugerencias y Reclamos” — Helpdesk",
    image: "/images/cap-sto-reclamos.png",
    alt: "Suggestions and claims helpdesk",
    tags: ["PHP", "SQL", "HTML", "CSS", "JavaScript", "osTicket"],
    paragraphs: [
      "A helpdesk based on osTicket, with deep structural and visual changes to match the town’s site and needs. Built to bring residents closer to government and reduce the need to visit the town hall in person — especially during social isolation.",
      "Residents open tickets for claims or suggestions and track them; agents get email alerts with a sign-in link to respond. Training covered 21 agents and other staff who help the public use “Atención al Vecino.”",
    ],
    href: "https://capitansarmiento.gob.ar/servicios/reclamosYSugerencias/",
    cta: "Open helpdesk",
  },
  {
    title: "“Atención al Vecino”",
    image: "/images/atencion-al-vecino.png",
    alt: "Atención al Vecino Android app",
    tags: ["Android", "Java"],
    paragraphs: [
      "An Android app that makes the tools above easier to reach: access to the helpdesk, WhatsApp or phone options for appointments, and a screen to pay bills.",
    ],
    href: "https://play.google.com/store/apps/details?id=com.sarmiento.atencionalvecino",
    cta: "Google Play",
  },
  {
    title: "“Sarmiento Seguro”",
    image: "/images/sarmiento-seguro.jpeg",
    alt: "Sarmiento Seguro emergency app",
    tags: ["React Native", "React", "Node.js", "MySQL"],
    paragraphs: [
      "Part of the team that built this React Native app for sending emergency alerts with GPS location and user details. Alerts appear in a monitoring app (React, Node.js, MySQL) at the local police station, with sound and a map — then emergency protocols kick in. I’m not authorized to show that monitoring environment.",
    ],
    href: "https://play.google.com/store/apps/details?id=com.sarmiento.antipanicosarmiento",
    cta: "Google Play",
  },
];
