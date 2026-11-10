import {PersonCard} from "../_components/PersonCard";
import {client} from "../../../sanity/lib/client";
import {peopleByGroupQuery} from "../../../sanity/queries";
import type {Person} from "../../../sanity/types";

export const revalidate = 60;

export default async function MembersPage() {
  const members = await client.fetch<Person[]>(peopleByGroupQuery, {group: "member"});

  return (
    <main className="page-content">
      <h1>Members</h1>
      {members.length > 0 ? (
        <div className="person-grid">
          {members.map((person) => <PersonCard key={person._id} person={person} />)}
        </div>
      ) : (
        <p className="empty-state">No members have been published yet.</p>
      )}
    </main>
  );
}
