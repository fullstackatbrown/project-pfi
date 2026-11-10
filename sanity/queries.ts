export const peopleByGroupQuery = `
  *[_type == "person" && group == $group] | order(name asc) {
    _id,
    name,
    role,
    year,
    bio,
    image { asset, alt }
  }
`;

export const eventsQuery = `
  *[_type == "event"] | order(eventDate asc) {
    _id,
    eventName,
    eventDate,
    eventDescription,
    topic
  }
`;

export const partnersQuery = `
  *[_type == "partner"] | order(name asc) {
    _id,
    name,
    address,
    description
  }
`;

export const homepageQuery = `
  *[_type == "homepage" && _id == "homepage"][0] {
    missionStatement,
    visionStatement,
    valuesStatement
  }
`;
