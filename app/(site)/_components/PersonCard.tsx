import Image from "next/image";
import {urlFor} from "../../../sanity/lib/image";
import type {Person} from "../../../sanity/types";

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function PersonCard({person}: {person: Person}) {
  const imageUrl = person.image
    ? urlFor(person.image).width(640).height(720).fit("crop").url()
    : null;

  return (
    <article className="person-card">
      <div className="person-card__photo">
        {imageUrl ? (
          <Image
            alt={person.image?.alt || `${person.name} profile photo`}
            className="person-card__image"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
            src={imageUrl}
          />
        ) : (
          <span aria-hidden="true" className="person-card__initials">
            {initials(person.name)}
          </span>
        )}
      </div>
      <div className="person-card__body">
        <h2>{person.name}</h2>
        {(person.role || person.year) && (
          <p className="person-card__meta">
            {[person.role, person.year].filter(Boolean).join(" · ")}
          </p>
        )}
        {person.email && (
          <a className="person-card__email" href={`mailto:${person.email}`}>
            {person.email}
          </a>
        )}
        {person.bio && <p className="person-card__bio">{person.bio}</p>}
      </div>
    </article>
  );
}
