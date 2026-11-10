export type SanityImage = {
  asset: {_ref: string};
  alt?: string;
};

export type Person = {
  _id: string;
  name: string;
  role?: string;
  year?: string;
  bio?: string;
  image?: SanityImage;
  email?: string;
};

export type Event = {
  _id: string;
  eventName: string;
  eventDate: string;
  eventDescription?: string;
  topic?: string;
};

export type Partner = {
  _id: string;
  name: string;
  address?: string;
  description?: string;
};

export type HomepageContent = {
  missionStatement?: string;
  visionStatement?: string;
  valuesStatement?: string;
};
