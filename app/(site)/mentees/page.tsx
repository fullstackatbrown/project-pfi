import {PersonCard} from "../_components/PersonCard";
import {client} from "../../../sanity/lib/client";
import {peopleByGroupQuery} from "../../../sanity/queries";
import type {Person} from "../../../sanity/types";

export const revalidate = 60;

export default async function MenteesPage() {
  const mentees = await client.fetch<Person[]>(peopleByGroupQuery, {group: "mentee"});

  return (
    <main className="page-content">
      <h1>Mentees</h1>
      {mentees.length > 0 ? (
        <div className="person-grid">
          {mentees.map((person) => <PersonCard key={person._id} person={person} />)}
        </div>
      ) : (
        <p className="empty-state">No mentees have been published yet.</p>
      )}
    </main>
  );
}
