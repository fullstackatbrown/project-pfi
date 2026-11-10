import { writeFileSync } from "node:fs";

// Must match the document types in sanity/schemaTypes
const TYPES = { person: "person", partner: "partner" };
const F = {
  person: { name: "name", group: "group", role: "role", bio: "bio" },
  partner: { name: "name", address: "address", description: "description" },
};

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const people = [
  {
    name: "Raymond Hu",
    group: "member",
    role: "Founder",
    bio: "Hi, my name is Raymond, and I'm a junior at Brown University originally from Florida. I'm the founder of the Personal Finance Initiative, which I started after a phone call with an adult who asked me how to budget for healthy food. That conversation showed me how important financial education is and inspired me to help young people build the skills and confidence to manage money from their very first paycheck. I'm passionate about financial literacy because it affects nearly every aspect of our lives, from the food we eat to the opportunities we pursue. Outside of school and my work with the initiative, I love cooking, exploring new recipes, and hiking outdoors!",
  },
  { name: "Anthony Larios", group: "member" },
  { name: "Julia Chun", group: "member" },
  { name: "Ayaan Popatiya", group: "member" },
];

const partners = [
  {
    name: "Barrington Public Library",
    address: "281 County Road, Barrington, RI 02806",
    description: "PFI launched its initial financial literacy programming at Barrington Public Library, introducing approximately 20 students to financial concepts. Following the pilot's success, PFI was invited to return for additional programming and has expanded since.",
  },
  {
    name: "Boys & Girls Clubs of Providence",
    address: "550 Wickenden Street, Providence, RI 02903",
    description: "Through our partnership with Boys & Girls Clubs of Providence, PFI works to expand access to practical financial education for local youth, particularly students from low-income backgrounds.",
  },
  {
    name: "Community Libraries of Providence",
    description: "PFI partners with Community Libraries of Providence to bring free, community-based financial literacy and entrepreneurship programming to youth across Providence neighborhoods.",
  },
  {
    name: "Beautiful Day",
    address: "66 Benefit Street, Providence, RI 02904",
    description: "PFI collaborates with Beautiful Day, a nonprofit social enterprise supporting refugees through employment training and education, to expand access to practical financial literacy and entrepreneurship education for refugee youth navigating new educational and economic opportunities.",
  },
  {
    name: "Harvest Kitchen",
    address: "10 Sims Avenue, Unit 109, Providence, RI 02909",
    description: "PFI partners with Harvest Kitchen, a youth culinary job-training program operated by Farm Fresh Rhode Island, to provide at-risk youth with practical financial literacy education.",
  },
];

const build = (kind, items) =>
  items.map((item) => {
    const doc = { _id: `${kind}-${slug(item.name)}`, _type: TYPES[kind] };
    for (const [key, value] of Object.entries(item)) doc[F[kind][key]] = value;
    return JSON.stringify(doc);
  });

const lines = [...build("person", people), ...build("partner", partners)];
writeFileSync("seed/seed.ndjson", lines.join("\n") + "\n");
console.log(`Wrote ${lines.length} documents to seed/seed.ndjson`);