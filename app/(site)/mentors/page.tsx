import {PersonCard} from "../_components/PersonCard";
import {client} from "../../../sanity/lib/client";
import {peopleByGroupQuery} from "../../../sanity/queries";
import type {Person} from "../../../sanity/types";

export const revalidate = 60;

export default async function MentorsPage() {
  const mentors = await client.fetch<Person[]>(peopleByGroupQuery, {group: "mentor"});

  return (
    <main className="page-content">
      <h1>Mentors</h1>
      {mentors.length > 0 ? (
        <div className="person-grid">
          {mentors.map((person) => <PersonCard key={person._id} person={person} />)}
        </div>
      ) : (
        <p className="empty-state">No mentors have been published yet.</p>
      )}
    </main>
  );
}
